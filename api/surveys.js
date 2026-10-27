// POST /api/surveys  →  saved quick surveys (lib/surveys.js). Free: no Claude call.
// Body: { action: "save", state, doc, title, site } → { saved: {id, at}, account }   (on Request HMG quote)
//       { action: "list" }        → { items: [{id, at, title, site}] }   newest first
//       { action: "open", id }    → { survey: {id, at, title, site, state} }
//       { action: "delete", id }  → { ok }
// Saving works with the shared access code too (HMG's copy only); list/open/delete need a personal installer code:
// without one, 409 {error: "no_account"}.
import { send, readJson, checkAccess, onlyPost } from "../lib/http.js";
import { saveSurvey, listSurveys, openSurvey, deleteSurvey } from "../lib/surveys.js";

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  const who = await checkAccess(req, res);
  if (!who) return;
  let b;
  try { b = await readJson(req, 150_000); } catch { return send(res, 400, { error: "bad_request" }); }
  if (b.action !== "save" && !who.installer) return send(res, 409, { error: "no_account" });
  const id = who.installer?.id;
  try {
    switch (b.action) {
      case "save": {
        const saved = await saveSurvey({ who, state: b.state, doc: b.doc, title: b.title, site: b.site });
        return saved ? send(res, 200, { saved: { id: saved.id, at: saved.at }, account: !!who.installer }) : send(res, 400, { error: "bad_request" });
      }
      case "list": return send(res, 200, { items: await listSurveys(id) });
      case "open": {
        const s = await openSurvey(id, b.id);
        return s ? send(res, 200, { survey: { id: s.id, at: s.at, title: s.title, site: s.site, state: s.state } }) : send(res, 404, { error: "not_found" });
      }
      case "delete": return send(res, 200, { ok: await deleteSurvey(id, b.id) });
      default: return send(res, 400, { error: "bad_request" });
    }
  } catch (e) {
    console.error(JSON.stringify({ evt: "surveys_error", message: e.message }));
    return send(res, 503, { error: "unavailable" });
  }
}
