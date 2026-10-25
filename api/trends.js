// GET /api/trends  →  Vercel runs this every Monday morning (vercel.json "crons") to write last week's fault trends summary
// (lib/trends.js), which then shows on the admin page. It only writes a week that has no summary yet, so calling it again
// costs nothing. If CRON_SECRET is set in Vercel, Vercel sends it and other callers are refused.
import { send, sameSecret } from "../lib/http.js";
import { lastWeek, getSummary, writeSummary } from "../lib/trends.js";

export default async function handler(req, res) {
  if (req.method !== "GET") { res.setHeader("Allow", "GET"); return send(res, 405, { error: "method" }); }
  if (process.env.CRON_SECRET && !sameSecret(req.headers.authorization || "", "Bearer " + process.env.CRON_SECRET)) return send(res, 401, { error: "cron_secret" });
  if (!process.env.ANTHROPIC_API_KEY) return send(res, 503, { error: "not_configured" });
  const w = lastWeek();
  try {
    if (await getSummary(w)) return send(res, 200, { week: w, already: true });
    const s = await writeSummary(w, "weekly");
    send(res, 200, { week: w, questions: s.questions || 0, empty: !!s.empty });
  } catch (e) {
    console.error(JSON.stringify({ evt: "trends_error", week: w, message: e.message }));
    send(res, 503, { error: "unavailable" });
  }
}
