// POST /api/escalate  →  emails an escalation to Heat Merchants Technical Support, with a copy to the installer.
// Off until an email service is set up (lib/email.js). Until then the app uses the mailto link only.
// Body: { subject, body, replyTo, attachment?, pdf?, sheets?, files?, doc? }  attachment = { filename: "x.csv", csv } (the quick
// survey quote list); pdf = { filename: "x.pdf", data: base64 } (the quotation); sheets = data sheet names from
// public/datasheets/, attached from the app's own address; files = [{ filename, data: base64 }] (floor plans, sketches); doc = the design request as sections and tables, sent as the
// HTML version of the email (lib/quote-email.js).
import { send, readJson, checkAccess, onlyPost, clip } from "../lib/http.js";
import { emailEnabled, escalationTo, sendEmail, EMAIL, appUrl } from "../lib/email.js";
import { quoteHtml } from "../lib/quote-email.js";

export { emailEnabled, escalationTo };

/* The data sheets in public/datasheets/ (QS_SHEETS in public/index.html). */
const SHEETS = new Set(["panasonic-j-series", "panasonic-k-series", "panasonic-t-cap", "panasonic-l-series", "baxi-assure-hp55",
  "xylinder-cylinders", "panasonic-aquarea-cylinder", "warmhaus-radiators"]);

export default async function handler(req, res) {
  if (!onlyPost(req, res) || !(await checkAccess(req, res))) return;
  if (!emailEnabled()) return send(res, 501, { error: "email_off" });
  let b;
  try { b = await readJson(req, 4_300_000); } catch { return send(res, 400, { error: "bad_request" }); }
  const subject = clip(b.subject, 300).replace(/[\r\n]+/g, " ").trim(), text = clip(b.body, 20000);
  const replyTo = EMAIL.test(String(b.replyTo || "")) ? String(b.replyTo) : null;
  if (!subject || !text) return send(res, 400, { error: "bad_request" });
  const a = b.attachment, p = b.pdf, attachments = [];
  if (a && /^[\w.-]{1,80}\.csv$/.test(String(a.filename || "")) && typeof a.csv === "string" && a.csv.length <= 50_000)
    attachments.push({ filename: a.filename, content: Buffer.from(a.csv, "utf8").toString("base64") });
  if (p && /^[\w.-]{1,100}\.pdf$/.test(String(p.filename || "")) && typeof p.data === "string" && p.data.length <= 2_500_000 && /^[A-Za-z0-9+/]+=*$/.test(p.data))
    attachments.push({ filename: p.filename, content: p.data });
  for (const f of new Set(Array.isArray(b.sheets) ? b.sheets.slice(0, 8) : []))
    if (SHEETS.has(f)) attachments.push({ filename: `${f}.pdf`, path: `${appUrl(req)}/datasheets/${f}.pdf` });
  // the installer's floor plans or sketches: up to 6 photos or PDFs, 3.3 MB of base64 in all
  let room = 3_300_000;
  for (const x of Array.isArray(b.files) ? b.files.slice(0, 6) : [])
    if (x && /^[\w .()-]{1,100}\.(pdf|jpe?g|png|webp|heic|gif)$/i.test(String(x.filename || "")) && typeof x.data === "string"
      && x.data.length <= room && /^[A-Za-z0-9+/]+=*$/.test(x.data)) { room -= x.data.length; attachments.push({ filename: x.filename, content: x.data }); }

  if (!(await sendEmail({ to: escalationTo(), cc: replyTo, replyTo, subject, text, html: quoteHtml(b.doc) || undefined, attachments: attachments.length ? attachments : undefined }))) return send(res, 502, { error: "email_failed" });
  console.log(JSON.stringify({ evt: "escalate", subject }));
  send(res, 200, { ok: true });
}
