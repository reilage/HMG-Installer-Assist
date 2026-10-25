// POST /api/admin  →  installer accounts, for the admin page (public/admin.html). Needs ADMIN_CODE, sent as X-Admin-Code.
// Body: { action: "list" }                                   → { store, defaultLimit, installers: [{...installer, today, month}] }
//       { action: "add", name, company, mobile, email, limit } → { installer }
//       { action: "update", id, name?, company?, mobile?, email?, limit?, active?, newCode? } → { installer }
//       { action: "delete", id }                              → { ok }
//       { action: "approve", id }   (an access request)       → { installer, emailed }
//       { action: "decline", id }   (an access request)       → { ok }
// "list" also returns the access requests waiting for approval, as requests: [...].
// limit: questions per day for this installer; null uses DAILY_QUESTION_LIMIT, 0 means no limit.
import { send, readJson, onlyPost, sameSecret } from "../lib/http.js";
import { accountsOn, listInstallers, addInstaller, updateInstaller, deleteInstaller, listRequests, approveRequest, deleteRequest, publicRequest } from "../lib/accounts.js";
import { emailEnabled } from "../lib/email.js";
import { sendCode } from "../lib/signup.js";
import { run, storeKind } from "../lib/store.js";
import { dailyLimit, dayKey, monthKey } from "../lib/quota.js";

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  if (!accountsOn()) return send(res, 503, { error: "accounts_off" });
  if (!sameSecret(req.headers["x-admin-code"] || "", process.env.ADMIN_CODE)) return send(res, 401, { error: "admin_code" });
  let b;
  try { b = await readJson(req, 20_000); } catch { return send(res, 400, { error: "bad_request" }); }

  try {
    switch (b.action) {
      case "list": {
        const [list, requests] = await Promise.all([listInstallers(), listRequests()]);
        const counts = list.length ? (await run(["MGET", ...list.flatMap(i => [dayKey("i:" + i.id), monthKey("i:" + i.id)])]))[0] : [];
        return send(res, 200, {
          store: storeKind(), defaultLimit: dailyLimit(), email: emailEnabled(), requests: requests.map(publicRequest),
          installers: list.map((i, n) => ({ ...i, today: +(counts[2 * n] || 0), month: +(counts[2 * n + 1] || 0) })),
        });
      }
      case "add": {
        const installer = await addInstaller(b);
        console.log(JSON.stringify({ evt: "admin_add", name: installer.name }));
        return send(res, 200, { installer });
      }
      case "update": {
        const installer = await updateInstaller(String(b.id || ""), b);
        return installer ? send(res, 200, { installer }) : send(res, 404, { error: "not_found" });
      }
      case "delete":
        return (await deleteInstaller(String(b.id || ""))) ? send(res, 200, { ok: true }) : send(res, 404, { error: "not_found" });
      case "approve": {
        const installer = await approveRequest(String(b.id || ""));
        if (!installer) return send(res, 404, { error: "not_found" });
        const emailed = await sendCode(req, installer);
        console.log(JSON.stringify({ evt: "approve", name: installer.name, emailed }));
        return send(res, 200, { installer, emailed });
      }
      case "decline":
        await deleteRequest(String(b.id || ""));
        return send(res, 200, { ok: true });
      default:
        return send(res, 400, { error: "bad_request" });
    }
  } catch (e) {
    if (e.code === "name_required") return send(res, 400, { error: "name_required" });
    console.error(JSON.stringify({ evt: "admin_error", message: e.message }));
    send(res, 503, { error: "unavailable" });
  }
}
