// Stored answers: the first time a question is asked, Claude's answer is saved; when the same question comes again
// for the same unit it is answered from storage, free and instantly, and doesn't use one of the day's questions.
// "The same question" means the same unit, the same fault code and the same meaningful words once filler is dropped,
// so "H62, what do I check?" and "what does H62 mean" match, but "H62 after start-up" doesn't. Numbers must match
// too, so a 7 kW sizing question never gets a 9 kW answer.
// Only first questions are stored or reused (a follow-up depends on the conversation), never photo questions, and
// never answers that were cut short or said the manuals don't cover it. The installer can tap "Didn't help" for a
// fresh Claude answer, which then replaces the stored one (unless the admin has edited it).
// Everything is keyed by a fingerprint of that unit's knowledge and rules, so rebuilding the knowledge (a new field
// note, a manual) starts that unit afresh rather than serving answers written from the old material.
//   sa:<id>        JSON {id, unit, ver, code, key, q, a, at, by, edited}   (kept 180 days from the last save)
//   sa:n:<id>      times it was reused          sa:bad:<id>   times an installer said it didn't help
//   sa:ix:<unit>:<ver>   set of the unit's stored answer ids, for the admin page
// STORED_ANSWERS=off switches it off.
import crypto from "node:crypto";
import { run } from "./store.js";
import { kb, toks, UNITS } from "./kb.js";
import { rules } from "./prompt.js";
import { faultCode, notCovered } from "./trends.js";

const KEEP = String(180 * 86400);
export const storedOn = () => process.env.STORED_ANSWERS !== "off";

/* Words that don't change what's being asked about. Unit names go too: the unit is part of the key already. */
const FILLER = new Set(("what whats do does did doing done mean means meaning error errors fault faults code codes alarm fix fixed fixing " +
  "cause causes causing caused reason problem problems issue issues wrong help please need tell talk through look check checking " +
  "get gets getting got keep keeps kept coming come comes came display displayed displaying flashing flash says saying showing " +
  "how who will just still also again any some all one now today here there our got went goes going am was were been being " +
  "hmg panasonic baxi j-series k-series series hp55 assure monobloc mini r32 r290 hydromodule controller remote").split(" "));
const stem = w => /^[a-z]{5,}s$/.test(w) && !/ss$/.test(w) ? w.slice(0, -1) : w;

/* The question's key: fault code + its meaningful words, sorted. */
export function questionKey(unit, text, code) {
  kb(); // loads the Baxi code list toks() needs
  const c = faultCode(unit, text, code);
  const words = [...new Set(toks(text).filter(w => w.toLowerCase() !== c.toLowerCase() && !FILLER.has(w)).map(stem))].sort();
  return `${c.toUpperCase()}|${words.join(" ")}`;
}

/* Fingerprint of what the unit's answers are written from: its rules (which carry the field notes) and its manual pages. */
const VER = {};
export function version(unit) {
  if (VER[unit]) return VER[unit];
  const KB = kb(), h = crypto.createHash("sha1").update(rules(unit));
  for (const m of unit === "B" ? ["B", "B2"] : [unit]) h.update(JSON.stringify(KB[m].pages));
  return (VER[unit] = h.digest("hex").slice(0, 10));
}

const idFor = (unit, key) => crypto.createHash("sha1").update(`${unit}|${version(unit)}|${key}`).digest("hex").slice(0, 16);
const ixKey = unit => `sa:ix:${unit}:${version(unit)}`;
const okId = id => typeof id === "string" && /^[0-9a-f]{16}$/.test(id);

/* Can this question be answered from (or saved to) storage? */
export const reusable = ({ text, history, img }) => storedOn() && !img && !(Array.isArray(history) && history.length) && !!text;

/* The stored answer for this question, or null. Counts the reuse. */
export async function findAnswer(unit, text, code) {
  const id = idFor(unit, questionKey(unit, text, code));
  const [j] = await run(["GET", "sa:" + id]);
  if (!j) return null;
  await run(["INCRBY", "sa:n:" + id, "1"], ["EXPIRE", "sa:n:" + id, KEEP]);
  return JSON.parse(j);
}

/* Save Claude's answer for next time, if it's a complete answer from the material. Returns the id, or null. */
export async function saveAnswer({ unit, text, code, answer, who }) {
  if (!answer || notCovered(answer)) return null;
  const key = questionKey(unit, text, code), id = idFor(unit, key);
  const [old] = await run(["GET", "sa:" + id]);
  if (old && JSON.parse(old).edited) return id; // the admin's wording stands
  const rec = { id, unit, ver: version(unit), code: faultCode(unit, text, code), key, q: String(text).slice(0, 600), a: answer,
    at: new Date().toISOString(), by: who?.installer?.name || "" };
  await run(["SET", "sa:" + id, JSON.stringify(rec)], ["EXPIRE", "sa:" + id, KEEP], ["SADD", ixKey(unit), id], ["EXPIRE", ixKey(unit), KEEP]);
  return id;
}

/* An installer tapped "Didn't help" on a stored answer. */
export async function notHelpful(id) {
  if (!okId(id)) return;
  await run(["INCRBY", "sa:bad:" + id, "1"], ["EXPIRE", "sa:bad:" + id, KEEP]);
}

/* ---------- admin page ---------- */
export async function listAnswers() {
  const out = [];
  for (const unit of Object.keys(UNITS)) {
    const [ids] = await run(["SMEMBERS", ixKey(unit)]);
    if (!ids?.length) continue;
    const [recs, hits, bad] = await run(["MGET", ...ids.map(i => "sa:" + i)], ["MGET", ...ids.map(i => "sa:n:" + i)], ["MGET", ...ids.map(i => "sa:bad:" + i)]);
    const gone = [];
    ids.forEach((id, n) => {
      if (!recs[n]) return gone.push(id); // expired
      const r = JSON.parse(recs[n]);
      out.push({ id, unit, code: r.code, q: r.q, a: r.a, at: r.at, by: r.by, edited: !!r.edited, hits: +(hits[n] || 0), bad: +(bad[n] || 0) });
    });
    if (gone.length) await run(["SREM", ixKey(unit), ...gone]);
  }
  return out.sort((a, b) => b.hits - a.hits || b.at.localeCompare(a.at));
}

export async function editAnswer(id, text) {
  if (!okId(id)) return null;
  const [j] = await run(["GET", "sa:" + id]);
  if (!j) return null;
  const r = { ...JSON.parse(j), a: String(text).slice(0, 20000), edited: true, at: new Date().toISOString() };
  await run(["SET", "sa:" + id, JSON.stringify(r)], ["EXPIRE", "sa:" + id, KEEP], ["DEL", "sa:bad:" + id]);
  return r;
}

export async function deleteAnswer(id) {
  if (!okId(id)) return false;
  const [j] = await run(["GET", "sa:" + id]);
  const unit = j ? JSON.parse(j).unit : null;
  await run(["DEL", "sa:" + id, "sa:n:" + id, "sa:bad:" + id], ...(unit ? [["SREM", ixKey(unit), id]] : []));
  return !!j;
}

/* Clear every stored answer, or one unit's. */
export async function clearAnswers(unit) {
  const units = UNITS[unit] ? [unit] : Object.keys(UNITS);
  let n = 0;
  for (const u of units) {
    const [ids] = await run(["SMEMBERS", ixKey(u)]);
    if (ids?.length) await run(["DEL", ...ids.flatMap(i => ["sa:" + i, "sa:n:" + i, "sa:bad:" + i])]);
    await run(["DEL", ixKey(u)]);
    n += ids?.length || 0;
  }
  return n;
}
