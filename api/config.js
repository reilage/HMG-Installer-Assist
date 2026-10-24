// GET /api/config  →  what the app should switch on. Holds no secrets.
import { send, accessRequired, accessOk } from "../lib/http.js";
import { emailEnabled, escalationTo } from "./escalate.js";

export default function handler(req, res) {
  send(res, 200, {
    ai: !!process.env.ANTHROPIC_API_KEY,
    accessCode: accessRequired(),
    accessOk: accessOk(req),
    email: emailEnabled(),
    escalationTo: escalationTo(),
  });
}
