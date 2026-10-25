// GET /api/config  →  what the app should switch on, and who this phone is signed in as. Holds no secrets.
import { send, accessRequired, identify } from "../lib/http.js";
import { accountsOn, publicInstaller } from "../lib/accounts.js";
import { dailyLimit, limitFor } from "../lib/quota.js";
import { emailEnabled, escalationTo } from "./escalate.js";

export default async function handler(req, res) {
  const who = await identify(req);
  send(res, 200, {
    ai: !!process.env.ANTHROPIC_API_KEY,
    accessCode: accessRequired(),
    accessOk: !who.denied,
    denied: who.denied || null,
    accounts: accountsOn(),
    installer: who.installer ? publicInstaller(who.installer) : null,
    email: emailEnabled(),
    escalationTo: escalationTo(),
    dailyLimit: who.installer ? limitFor(who.installer) : dailyLimit(),
  });
}
