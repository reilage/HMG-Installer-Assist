// POST /api/apply  →  an installer asks for access from the app (no code needed). The request is saved for approval
// on the admin page, and emailed to APPROVAL_TO (default: the escalation address) when email is set up.
// Body: { name, company, mobile, email, note }   Reply: { ok, emailed }
import { send, readJson, onlyPost, clip } from "../lib/http.js";
import { accountsOn, addRequest } from "../lib/accounts.js";
import { EMAIL } from "../lib/email.js";
import { notifyRequest } from "../lib/signup.js";
import { run, today } from "../lib/store.js";

const PER_DAY = 5; // requests per IP address per day, to keep bots out

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  if (!accountsOn()) return send(res, 503, { error: "accounts_off" });
  let b;
  try { b = await readJson(req, 20_000); } catch { return send(res, 400, { error: "bad_request" }); }
  if (b.website) return send(res, 200, { ok: true, emailed: false }); // hidden field only bots fill in
  const name = clip(b.name, 80).trim(), email = clip(b.email, 120).trim(), mobile = clip(b.mobile, 30).trim();
  if (!name || !EMAIL.test(email) || !mobile) return send(res, 400, { error: "details_missing" });

  try {
    const ip = String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "?").split(",")[0].trim();
    const k = `apply:${today()}:${ip}`;
    const [n] = await run(["INCRBY", k, "1"], ["EXPIRE", k, "172800"]);
    if (n > PER_DAY) return send(res, 429, { error: "too_many" });
    const { request, token } = await addRequest({ ...b, name, email, mobile });
    const emailed = await notifyRequest(req, request, token);
    console.log(JSON.stringify({ evt: "apply", name, emailed }));
    send(res, 200, { ok: true, emailed });
  } catch (e) {
    console.error(JSON.stringify({ evt: "apply_error", message: e.message }));
    send(res, 503, { error: "unavailable" });
  }
}
