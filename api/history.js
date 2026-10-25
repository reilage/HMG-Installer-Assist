// POST /api/history  →  the signed-in installer's own past questions and answers (lib/history.js). Free: no Claude call.
// Body: { action: "list" }          → { items: [{id, chat, at, unit, code, q, s, photo}] }   newest first
//       { action: "open", chat }    → { items: [{..., a}] }   that chat, oldest first, with the full answers
//       { action: "delete", chat }  → { ok }
// Without a personal installer code there is no account to keep it on: 409 {error: "no_account"} (the app keeps it on the phone).
import { send, readJson, checkAccess, onlyPost } from "../lib/http.js";
import { listHistory, openChat, deleteChat } from "../lib/history.js";

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  const who = await checkAccess(req, res);
  if (!who) return;
  if (!who.installer) return send(res, 409, { error: "no_account" });
  let b;
  try { b = await readJson(req, 10_000); } catch { return send(res, 400, { error: "bad_request" }); }
  const id = who.installer.id;
  try {
    switch (b.action) {
      case "list": return send(res, 200, { items: await listHistory(id) });
      case "open": return send(res, 200, { items: await openChat(id, b.chat) });
      case "delete": return send(res, 200, { ok: (await deleteChat(id, b.chat)) > 0 });
      default: return send(res, 400, { error: "bad_request" });
    }
  } catch (e) {
    console.error(JSON.stringify({ evt: "history_error", message: e.message }));
    return send(res, 503, { error: "unavailable" });
  }
}
