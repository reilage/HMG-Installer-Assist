// Saved quick surveys: each quote request is kept so the installer can reopen it (My surveys) and HMG has a copy
// (admin page › Surveys). Free: no Claude call.
//   surv:<installer id>   the installer's surveys, oldest first, as JSON {id, at, title, site, state, doc}
//   surv:all              every quote request, oldest first, as JSON {id, at, by, installer, title, site, doc}
// state = the survey as the app keeps it (to reopen it), doc = the quote request as sections and tables
// (lib/quote-email.js). The newest MAX per installer and MAX_ALL overall are kept, with no expiry.
import crypto from "node:crypto";
import { run } from "./store.js";

const MAX = 200, MAX_ALL = 2000, BIG = 60_000;
const mk = id => "surv:" + id, ALL = "surv:all";
const line = (v, n) => String(v ?? "").replace(/\s+/g, " ").trim().slice(0, n);

async function push(key, e, max) {
  const [n] = await run(["RPUSH", key, JSON.stringify(e)]);
  if (n > max) await run(["LPOP", key, String(n - max)]);
}
async function entries(key) {
  const [rows] = await run(["LRANGE", key, "0", "-1"]);
  return (rows || []).map(j => { try { return JSON.parse(j); } catch { return null; } }).filter(Boolean);
}

/* Save a quote request. Returns the entry, or null if it's too big or empty. */
export async function saveSurvey({ who, state, doc, title, site }) {
  if (!state || typeof state !== "object" || !doc || typeof doc !== "object") return null;
  if (JSON.stringify(state).length > BIG || JSON.stringify(doc).length > BIG) return null;
  const inst = who?.installer;
  const e = { id: crypto.randomUUID(), at: new Date().toISOString(), title: line(title, 160), site: line(site, 160) };
  if (inst) await push(mk(inst.id), { ...e, state, doc }, MAX);
  await push(ALL, { ...e, by: inst?.id || null, installer: inst ? line([inst.name, inst.company].filter(Boolean).join(", "), 160) : "Shared access code", doc }, MAX_ALL);
  return e;
}

/* The installer's surveys, newest first, without the survey itself. */
export const listSurveys = async instId => (await entries(mk(instId))).reverse().map(({ id, at, title, site }) => ({ id, at, title, site }));

/* One of the installer's surveys, with the state to reopen it. */
export const openSurvey = async (instId, id) => (await entries(mk(instId))).find(e => e.id === String(id)) || null;

/* Remove one of the installer's surveys (HMG's copy stays). */
export async function deleteSurvey(instId, id) {
  const all = await entries(mk(instId)), keep = all.filter(e => e.id !== String(id));
  if (keep.length === all.length) return false;
  await run(["DEL", mk(instId)], ...(keep.length ? [["RPUSH", mk(instId), ...keep.map(e => JSON.stringify(e))]] : []));
  return true;
}

/* Every quote request, newest first, for the admin page. */
export const allSurveys = async () => (await entries(ALL)).reverse();

export const clearSurveys = instId => run(["DEL", mk(instId)]);
