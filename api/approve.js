// POST /api/approve  →  approve or decline an access request from the link in the approval email (public/approve.html).
// The link carries a one-off token, so this works without the admin code.
// Body: { id, t, action: "view" | "approve" | "decline" }
//   view → { request }   approve → { installer: {name, code, mobile, email}, emailed }   decline → { ok }
import { send, readJson, onlyPost } from "../lib/http.js";
import { accountsOn, getRequest, requestTokenOk, approveRequest, deleteRequest, publicRequest } from "../lib/accounts.js";
import { sendCode } from "../lib/signup.js";

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  if (!accountsOn()) return send(res, 503, { error: "accounts_off" });
  let b;
  try { b = await readJson(req, 5_000); } catch { return send(res, 400, { error: "bad_request" }); }
  try {
    const r = await getRequest(String(b.id || ""));
    if (!requestTokenOk(r, b.t)) return send(res, 404, { error: "not_found" }); // already handled, expired, or a wrong link
    if (b.action === "view") return send(res, 200, { request: publicRequest(r) });
    if (b.action === "decline") { await deleteRequest(r.id); console.log(JSON.stringify({ evt: "decline", name: r.name })); return send(res, 200, { ok: true }); }
    if (b.action === "approve") {
      const inst = await approveRequest(r.id);
      const emailed = await sendCode(req, inst);
      console.log(JSON.stringify({ evt: "approve", name: inst.name, emailed }));
      return send(res, 200, { installer: { name: inst.name, code: inst.code, mobile: inst.mobile, email: inst.email }, emailed });
    }
    send(res, 400, { error: "bad_request" });
  } catch (e) {
    console.error(JSON.stringify({ evt: "approve_error", message: e.message }));
    send(res, 503, { error: "unavailable" });
  }
}
