// Daily question limit for Ask, per phone: DAILY_QUESTION_LIMIT (default 5, 0 = no limit), resetting at midnight Irish time.
// Each phone keeps a random id and sends it as X-Device-Id (older copies of the app that don't send it are counted by IP).
// Counts are kept in Upstash Redis when it is connected in Vercel (KV_REST_API_URL + KV_REST_API_TOKEN, or the
// UPSTASH_REDIS_REST_* pair), so the limit holds across all of Vercel's servers. Without it, each server counts in
// its own memory: still a limit, but a soft one, because Vercel runs several servers and restarts them.
let mem = new Map(), memDay = "";
const DAY = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Dublin", year: "numeric", month: "2-digit", day: "2-digit" });

export function dailyLimit() {
  const n = parseInt(process.env.DAILY_QUESTION_LIMIT ?? "5", 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function redis() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

function key(req) {
  const id = String(req.headers["x-device-id"] || "");
  const who = /^[A-Za-z0-9-]{8,64}$/.test(id) ? "d:" + id : "ip:" + String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "?").split(",")[0].trim();
  return `ask:${DAY.format(new Date())}:${who}`;
}

async function bump(k, by) {
  const r = redis();
  if (!r) {
    const day = k.split(":")[1];
    if (day !== memDay) { mem = new Map(); memDay = day; }
    const n = (mem.get(k) || 0) + by;
    mem.set(k, n);
    return n;
  }
  const res = await fetch(r.url + "/pipeline", {
    method: "POST",
    headers: { Authorization: `Bearer ${r.token}`, "Content-Type": "application/json" },
    body: JSON.stringify([["INCRBY", k, String(by)], ["EXPIRE", k, "172800"]]),
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  return (await res.json())[0].result;
}

/* Count one question. Returns {ok, left, limit}; ok is false once the phone has used its questions for today.
   If the counter can't be reached, the question goes ahead (a Redis hiccup shouldn't stop installers on site). */
export async function take(req) {
  const limit = dailyLimit();
  if (!limit) return { ok: true, left: null, limit: 0 };
  const k = key(req);
  try {
    const n = await bump(k, 1);
    if (n > limit) { await bump(k, -1); return { ok: false, left: 0, limit }; }
    return { ok: true, left: limit - n, limit, k };
  } catch (e) {
    console.error(JSON.stringify({ evt: "quota_error", message: e.message }));
    return { ok: true, left: null, limit };
  }
}

/* Hand a question back when Claude failed before answering, so a fault on our side doesn't use one up. */
export async function giveBack(q) {
  if (q?.k) await bump(q.k, -1).catch(() => {});
}
