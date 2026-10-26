// Fault trends: every Ask question is saved (unit, fault code, installer, date, whether the app could answer it),
// and once a week Claude writes Heat Merchants a short summary of what installers asked. Installers are told on the
// code screen and under the Ask box that questions are saved to improve the service.
//   qlog:<monday>    list of the week's questions, as JSON {at, unit, code, who, name, q, covered, escalated, photo, stored}  (kept 100 days)
//   trend:<monday>   that week's Claude summary, as JSON {week, generated, by, text}                                     (kept 400 days)
// <monday> is the Monday the week starts on, Irish time (YYYY-MM-DD). Counts are worked out from the list each time
// the admin page asks (no Claude, no cost); only the written summary uses Claude, about once a week.
import Anthropic from "@anthropic-ai/sdk";
import { run, today } from "./store.js";
import { UNITS, kb } from "./kb.js";

const QLOG_DAYS = 100, TREND_DAYS = 400, MAX_SENT = 400;

/* ---------- weeks ---------- */
const addDays = (d, n) => { const x = new Date(d + "T12:00:00Z"); x.setUTCDate(x.getUTCDate() + n); return x.toISOString().slice(0, 10); };
export const weekOf = (day = today()) => addDays(day, -((new Date(day + "T12:00:00Z").getUTCDay() + 6) % 7));
export const lastWeek = () => addDays(weekOf(), -7);
export const prevWeek = w => addDays(w, -7);
export const weekLabel = w => {
  const f = d => new Date(d + "T12:00:00Z").toLocaleDateString("en-IE", { day: "numeric", month: "short", timeZone: "UTC" });
  return `${f(w)} to ${f(addDays(w, 6))}`;
};
export const validWeek = w => typeof w === "string" && /^\d{4}-\d{2}-\d{2}$/.test(w) && weekOf(w) === w;

/* ---------- recording a question ---------- */
const PANA = /\b([HF]\d{2})\b/i, BAXI_CTL = /\b([AHE]\d{2}\.\d{2,3})\b/i;
let baxiOdu = null;
/* Baxi outdoor codes are only two characters (E0, P0, H6, Pd), so a word only counts if it is on the HP55 code list. */
function baxiOutdoor(text) {
  baxiOdu ||= new Map(kb().B.faults.map(f => [f.code.toUpperCase(), f.code]));
  // codes of letters only (CL, EL, PE, Pd...) must be typed in capitals, so "pe" or "ha" in a sentence isn't taken for one
  return (text.match(/\b[A-Z][0-9A-Z]{1,2}\b/gi) || []).filter(w => /\d/.test(w) || /^[A-Z][A-Z]$|^[A-Z][a-z]$/.test(w) && w !== w.toLowerCase())
    .map(w => baxiOdu.get(w.toUpperCase())).find(Boolean) || "";
}

/* The fault code a question is about: the fault card's code, else one typed in the question. */
export function faultCode(unit, text, cardCode) {
  const c = String(cardCode || "").trim();
  if (c) return c.slice(0, 12);
  const m = text.match(unit === "B" ? BAXI_CTL : PANA);
  return m ? m[1].toUpperCase() : unit === "B" ? baxiOutdoor(text) : "";
}

/* Did the answer say the material doesn't cover it? (The rules tell Claude to say so plainly rather than guess.) */
export const notCovered = a => /\b(isn't|is not|aren't|are not|not) (covered(?! by (the |your )?warranty)|in the (material|manuals?|excerpts|reference))|no (information|details?) (on|about|for) (this|that)|not covered yet/i.test(a);
export const escalated = a => /Contact Heat Merchants Technical Support/i.test(a);

export async function recordQuestion({ unit, text, code, who, req, answer, photo, stored }) {
  const inst = who?.installer;
  const dev = String(req.headers["x-device-id"] || "").replace(/[^A-Za-z0-9-]/g, "").slice(0, 64);
  const rec = {
    at: new Date().toISOString(), unit, code: faultCode(unit, text, code),
    who: inst ? "i:" + inst.id : dev ? "d:" + dev : "anon",
    name: inst ? inst.name : dev ? `Phone ${dev.slice(0, 4)} (no account)` : "No account",
    q: String(text || "").slice(0, 600), covered: !notCovered(answer), escalated: escalated(answer), photo: !!photo, ...(stored ? { stored: true } : {}),
  };
  const k = "qlog:" + weekOf();
  await run(["RPUSH", k, JSON.stringify(rec)], ["EXPIRE", k, String(QLOG_DAYS * 86400)]);
}

export async function weekQuestions(w) {
  const [rows] = await run(["LRANGE", "qlog:" + w, "0", "-1"]);
  return (rows || []).map(j => { try { return JSON.parse(j); } catch { return null; } }).filter(Boolean);
}

/* ---------- counting ---------- */
const tally = (xs, key) => {
  const m = new Map();
  for (const x of xs) { const k = key(x); if (k) m.set(k, (m.get(k) || 0) + 1); }
  return m;
};
const top = (m, n = 8) => [...m].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]))).slice(0, n);

/* Counts for one week, with last week's for comparison: overall, per unit, per installer, unanswered questions, repeats. */
export function weekStats(qs, prev = []) {
  const codeKey = q => (q.code ? q.unit + "|" + q.code : "");
  const prevCodes = tally(prev, codeKey), prevUnits = tally(prev, q => q.unit), prevWho = tally(prev, q => q.who);
  const codes = top(tally(qs, codeKey), 12).map(([k, n]) => { const [unit, code] = k.split("|"); return { unit, code, n, last: prevCodes.get(k) || 0 }; });
  const units = Object.keys(UNITS).map(u => {
    const uq = qs.filter(q => q.unit === u);
    return { unit: u, name: UNITS[u].short, n: uq.length, last: prevUnits.get(u) || 0, unanswered: uq.filter(q => !q.covered).length,
      codes: top(tally(uq, q => q.code), 5).map(([code, n]) => ({ code, n })) };
  });
  const people = [...tally(qs, q => q.who)].map(([who, n]) => {
    const iq = qs.filter(q => q.who === who);
    const codesFor = top(tally(iq, codeKey), 5).map(([k, c]) => { const [unit, code] = k.split("|"); return { unit, code, n: c }; });
    return { who, name: iq.at(-1).name, n, last: prevWho.get(who) || 0, unanswered: iq.filter(q => !q.covered).length,
      escalated: iq.filter(q => q.escalated).length, codes: codesFor,
      repeats: codesFor.filter(c => c.n >= 3), units: [...new Set(iq.map(q => q.unit))] };
  }).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
  const unanswered = qs.filter(q => !q.covered).map(q => ({ at: q.at, unit: q.unit, code: q.code, name: q.name, q: q.q }));
  return {
    total: qs.length, last: prev.length, installers: people.length,
    unanswered: unanswered.length, escalated: qs.filter(q => q.escalated).length, photos: qs.filter(q => q.photo).length, stored: qs.filter(q => q.stored).length,
    codes, units, people, unansweredList: unanswered.slice(-50).reverse(),
  };
}

/* ---------- the weekly summary ---------- */
export async function getSummary(w) {
  const [j] = await run(["GET", "trend:" + w]);
  return j ? JSON.parse(j) : null;
}

const MODEL = () => process.env.TRENDS_MODEL || process.env.CLAUDE_MODEL || "claude-opus-5-5";

const PROMPT = `You write a weekly report for Donal at Heat Merchants (an Irish heat pump distributor) on what installers asked the HMG Installer Assistant app this week. The app answers installer questions on site from the manufacturer manuals and HMG field notes, for five units kept strictly separate: Panasonic J-series Mini Monobloc (J), Panasonic J-series T-Cap monobloc (T), Panasonic L-series R290 (L), Panasonic K-series split (K) and Baxi HP55 (B). Never mix one unit's codes or fixes with another's.

You get the week's counts (worked out already, with last week's numbers for comparison) and the questions themselves. "covered: no" means the app's answer said the manuals and field notes don't cover it.

Write plain, short, practical English for a busy, non-technical reader. Use these bold headings in order, each followed by 2 to 5 short bullets (fewer if the week was quiet, and say so plainly if there is nothing to report under a heading):
**This week in brief:** total questions and how that compares with last week, the busiest unit.
**Top faults and questions:** per unit, the fault codes and question topics that came up most (group similar questions without codes into topics), with counts and what changed from last week. Where a pattern suggests a likely cause, say so as a possibility, not a fact.
**Gaps to fill:** questions the app couldn't answer, grouped by topic, with a suggestion for each: a field note, a manual to add, or a setting to document.
**Installers who may need help:** installers asking about the same fault or topic repeatedly, or with several unanswered questions, by name, with a suggested action (a call, training, a site visit). Be fair and factual: asking questions is normal and good.
**Suggested actions:** up to 4 concrete next steps for Heat Merchants, most useful first.

Use Markdown bold and "- " bullets only. No tables, no # headings. Under 350 words. Never invent numbers: use only the counts given.`;

export async function writeSummary(w, by = "admin") {
  const qs = await weekQuestions(w), prev = await weekQuestions(prevWeek(w));
  if (!qs.length) return { week: w, generated: new Date().toISOString(), by, text: "", empty: true };
  const s = weekStats(qs, prev);
  const counts = {
    week: weekLabel(w), total: s.total, lastWeekTotal: s.last, installers: s.installers, unanswered: s.unanswered, escalated: s.escalated,
    perUnit: s.units.map(u => ({ unit: u.unit, questions: u.n, lastWeek: u.last, unanswered: u.unanswered, topCodes: u.codes })),
    topCodes: s.codes, perInstaller: s.people.map(p => ({ name: p.name, questions: p.n, lastWeek: p.last, unanswered: p.unanswered, escalated: p.escalated, codes: p.codes })),
  };
  const sent = qs.slice(-MAX_SENT).map(q => `${q.at.slice(0, 10)} | ${q.unit} | ${q.code || "-"} | ${q.name} | covered: ${q.covered ? "yes" : "no"}${q.escalated ? " | escalated" : ""} | ${q.q.replace(/\s+/g, " ").slice(0, 300)}`);
  const msg = await new Anthropic().messages.create({
    model: MODEL(), max_tokens: 4000, output_config: { effort: "low" }, system: PROMPT,
    messages: [{ role: "user", content: `Counts (JSON):\n${JSON.stringify(counts)}\n\nQuestions (${qs.length > MAX_SENT ? `latest ${MAX_SENT} of ${qs.length}` : qs.length}; date | unit | fault code | installer | covered | question):\n${sent.join("\n")}` }],
  });
  const text = msg.content.filter(b => b.type === "text").map(b => b.text).join("").trim();
  const out = { week: w, generated: new Date().toISOString(), by, text, questions: qs.length };
  await run(["SET", "trend:" + w, JSON.stringify(out)], ["EXPIRE", "trend:" + w, String(TREND_DAYS * 86400)]);
  console.log(JSON.stringify({ evt: "trends", week: w, by, questions: qs.length, model: msg.model, usage: msg.usage }));
  return out;
}
