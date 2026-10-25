// POST /api/escalate  →  emails an escalation to Heat Merchants Technical Support, with a copy to the installer.
// Off until an email service is set up (lib/email.js). Until then the app uses the mailto link only.
// Body: { subject, body, replyTo }
import { send, readJson, checkAccess, onlyPost, clip } from "../lib/http.js";
import { emailEnabled, escalationTo, sendEmail, EMAIL } from "../lib/email.js";

export { emailEnabled, escalationTo };

export default async function handler(req, res) {
  if (!onlyPost(req, res) || !(await checkAccess(req, res))) return;
  if (!emailEnabled()) return send(res, 501, { error: "email_off" });
  let b;
  try { b = await readJson(req, 100_000); } catch { return send(res, 400, { error: "bad_request" }); }
  const subject = clip(b.subject, 300).replace(/[\r\n]+/g, " ").trim(), text = clip(b.body, 20000);
  const replyTo = EMAIL.test(String(b.replyTo || "")) ? String(b.replyTo) : null;
  if (!subject || !text) return send(res, 400, { error: "bad_request" });

  if (!(await sendEmail({ to: escalationTo(), cc: replyTo, replyTo, subject, text }))) return send(res, 502, { error: "email_failed" });
  console.log(JSON.stringify({ evt: "escalate", subject }));
  send(res, 200, { ok: true });
}
