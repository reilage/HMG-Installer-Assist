// Sending email through Resend (https://resend.com): escalations, access requests and installer codes.
// Off until RESEND_API_KEY and ESCALATION_FROM are set (ESCALATION_FROM is an address on a domain verified in Resend,
// e.g. "HMG Installer Assistant <siteassist@heatmerchants.ie>"). Callers fall back to something that needs no email.
export const emailEnabled = () => !!(process.env.RESEND_API_KEY && process.env.ESCALATION_FROM);
export const escalationTo = () => process.env.ESCALATION_TO || "donal.reilly@heatmerchants.ie";
/* Where access requests go for approval. */
export const approvalTo = () => process.env.APPROVAL_TO || escalationTo();
export const EMAIL = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/;

/* Plain-text email. Returns true when Resend accepted it. */
export async function sendEmail({ to, cc, replyTo, subject, text }) {
  if (!emailEnabled()) return false;
  const r = await fetch((process.env.RESEND_API_URL || "https://api.resend.com") + "/emails", { // RESEND_API_URL: tests only
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ESCALATION_FROM, to: [to],
      ...(cc ? { cc: [cc] } : {}), ...(replyTo ? { reply_to: replyTo } : {}),
      subject, text,
    }),
  }).catch(() => null);
  if (!r || !r.ok) {
    console.error(JSON.stringify({ evt: "email_error", subject, status: r?.status, body: r ? await r.text() : "network" }));
    return false;
  }
  return true;
}

/* The app's own address, for links in emails. APP_URL overrides it (e.g. https://assist.heatmerchants.ie). */
export function appUrl(req) {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/$/, "");
  const host = String(req.headers["x-forwarded-host"] || req.headers.host || "localhost:3000").split(",")[0].trim();
  const proto = String(req.headers["x-forwarded-proto"] || (host.startsWith("localhost") ? "http" : "https")).split(",")[0].trim();
  return `${proto}://${host}`;
}
