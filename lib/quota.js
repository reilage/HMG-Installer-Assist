// Daily question limit for Ask, resetting at midnight Irish time. DAILY_QUESTION_LIMIT (default 5, 0 = no limit).
// An installer with an account is counted on their account, against their own limit if the admin page sets one.
// Anyone else (shared access code, or no code) is counted per phone: each phone keeps a random id and sends it
// as X-Device-Id (older copies of the app that don't send it are counted by IP).
// Counts live in the store (lib/store.js): firm with Upstash connected, per server without it.
import { run, today, thisMonth } from "./store.js";

export function dailyLimit() {
  const n = parseInt(process.env.DAILY_QUESTION_LIMIT ?? "5", 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export const limitFor = inst => (inst && inst.limit !== null && inst.limit !== undefined ? inst.limit : dailyLimit());
export const dayKey = (who, day = today()) => `ask:${day}:${who}`;
export const monthKey = (who, month = thisMonth()) => `askm:${month}:${who}`;

function whoKey(req, who) {
  if (who?.installer) return "i:" + who.installer.id;
  const id = String(req.headers["x-device-id"] || "");
  return /^[A-Za-z0-9-]{8,64}$/.test(id) ? "d:" + id
    : "ip:" + String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "?").split(",")[0].trim();
}

async function bump(k, by) {
  const [n] = await run(["INCRBY", k, String(by)], ["EXPIRE", k, "172800"]);
  return n;
}

/* Count one question. Returns {ok, left, limit}; ok is false once today's questions are used up.
   If the store can't be reached, the question goes ahead (a hiccup there shouldn't stop installers on site). */
export async function take(req, who) {
  const w = whoKey(req, who), limit = limitFor(who?.installer);
  try {
    if (who?.installer) { const m = monthKey(w); await run(["INCRBY", m, "1"], ["EXPIRE", m, String(40 * 86400)]); }
    if (!limit) return { ok: true, left: null, limit: 0, w };
    const k = dayKey(w), n = await bump(k, 1);
    if (n > limit) { await bump(k, -1); if (who?.installer) await run(["INCRBY", monthKey(w), "-1"]); return { ok: false, left: 0, limit }; }
    return { ok: true, left: limit - n, limit, w, counted: true };
  } catch (e) {
    console.error(JSON.stringify({ evt: "quota_error", message: e.message }));
    return { ok: true, left: null, limit };
  }
}

/* Today's questions left without using one, for the counter on the Ask screen. left is null with no limit or no store answer. */
export async function leftToday(req, who) {
  const limit = limitFor(who?.installer);
  if (!limit) return { limit: 0, left: null };
  try {
    const [n] = await run(["GET", dayKey(whoKey(req, who))]);
    return { limit, left: Math.max(0, limit - (parseInt(n || "0", 10) || 0)) };
  } catch (e) {
    console.error(JSON.stringify({ evt: "quota_error", message: e.message }));
    return { limit, left: null };
  }
}

/* Hand a question back when Claude failed before answering, so a fault on our side doesn't use one up. */
export async function giveBack(q, who) {
  if (!q?.w) return;
  const cmds = [];
  if (q.counted) cmds.push(["INCRBY", dayKey(q.w), "-1"]);
  if (who?.installer) cmds.push(["INCRBY", monthKey(q.w), "-1"]);
  if (cmds.length) await run(...cmds).catch(() => {});
}
