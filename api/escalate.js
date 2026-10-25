// POST /api/escalate  →  emails an escalation to Heat Merchants Technical Support, with a copy to the installer.
// Off until an email service is set up: needs RESEND_API_KEY and ESCALATION_FROM (an address on a domain verified
// in Resend, e.g. siteassist@heatmerchants.ie). Until then the app uses the mailto link only.
// Body: { subject, body, replyTo }
import { send, readJson, checkAccess, onlyPost, clip } from "../lib/http.js";

export const escalationTo = () => process.env.ESCALATION_TO || "donal.reilly@heatmerchants.ie";
export const emailEnabled = () => !!(process.env.RESEND_API_KEY && process.env.ESCALATION_FROM);
const EMAIL = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/;

export default async function handler(req, res) {
  if (!onlyPost(req, res) || !(await checkAccess(req, res))) return;
  if (!emailEnabled()) return send(res, 501, { error: "email_off" });
  let b;
  try { b = await readJson(req, 100_000); } catch { return send(res, 400, { error: "bad_request" }); }
  const subject = clip(b.subject, 300).replace(/[\r\n]+/g, " ").trim(), text = clip(b.body, 20000);
  const replyTo = EMAIL.test(String(b.replyTo || "")) ? String(b.replyTo) : null;
  if (!subject || !text) return send(res, 400, { error: "bad_request" });

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ESCALATION_FROM,
      to: [escalationTo()],
      ...(replyTo ? { cc: [replyTo], reply_to: replyTo } : {}),
      subject, text,
    }),
  }).catch(() => null);
  if (!r || !r.ok) {
    console.error(JSON.stringify({ evt: "escalate_error", status: r?.status, body: r ? await r.text() : "network" }));
    return send(res, 502, { error: "email_failed" });
  }
  console.log(JSON.stringify({ evt: "escalate", subject }));
  send(res, 200, { ok: true });
}
