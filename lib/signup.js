// Emails for installer self sign-up: the approval request to Heat Merchants, and the code to the approved installer.
import { approvalTo, appUrl, sendEmail } from "./email.js";

export const codeMessage = (inst, url) =>
  `Your HMG Installer Assistant code is ${inst.code}. Open ${url}/ on your phone and enter it once. It's personal to you, so please don't share it.`;

/* Tell the approver about a new request. Returns true when the email went. */
export function notifyRequest(req, r, token) {
  const url = appUrl(req);
  return sendEmail({
    to: approvalTo(), replyTo: r.email,
    subject: `Access request: ${r.name}${r.company ? ", " + r.company : ""}`,
    text: `${r.name} has asked for access to the HMG Installer Assistant.

Name: ${r.name}
Company: ${r.company || "—"}
Mobile: ${r.mobile || "—"}
Email: ${r.email || "—"}
${r.note ? `Note: ${r.note}\n` : ""}
To approve or decline, open:
${url}/approve.html?id=${encodeURIComponent(r.id)}&t=${encodeURIComponent(token)}

Approving creates their account and emails them their personal code. You can also do this on the admin page: ${url}/admin.html`,
  });
}

/* Send an approved installer their code. Returns true when the email went. */
export function sendCode(req, inst) {
  if (!inst.email) return Promise.resolve(false);
  const url = appUrl(req);
  return sendEmail({
    to: inst.email,
    subject: "Your HMG Installer Assistant code",
    text: `Hi ${inst.name},

You've been given access to the HMG Installer Assistant.

${codeMessage(inst, url)}

On Android, tap Install when it offers. On iPhone, tap Share, then Add to Home Screen, to open it like an app.

Heat Merchants Technical Support`,
  });
}
