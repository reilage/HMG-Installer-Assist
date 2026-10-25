// Small key-value store for installer accounts and question counts.
// On Vercel it is the Upstash Redis store connected to the project (Vercel sets KV_REST_API_URL + KV_REST_API_TOKEN,
// or the UPSTASH_REDIS_REST_* pair). Without one (local testing) it keeps everything in this server's memory,
// which Vercel would lose whenever it restarts a server, so accounts need Upstash in production.
let mem = new Map();

function redis() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}
export const storeKind = () => (redis() ? "upstash" : "memory");

/* The few Redis commands the app uses, for the in-memory stand-in. Expiry is ignored there. */
function memCmd([op, k, ...a]) {
  switch (op) {
    case "GET": return mem.has(k) ? mem.get(k) : null;
    case "MGET": return [k, ...a].map(x => (mem.has(x) ? String(mem.get(x)) : null));
    case "SET": mem.set(k, a[0]); return "OK";
    case "DEL": return [k, ...a].reduce((n, x) => n + (mem.delete(x) ? 1 : 0), 0);
    case "INCRBY": { const n = (parseInt(mem.get(k) || "0", 10)) + parseInt(a[0], 10); mem.set(k, String(n)); return n; }
    case "EXPIRE": return 1;
    case "SADD": { const s = mem.get(k) || new Set(); mem.set(k, s); let n = 0; for (const x of a) if (!s.has(x)) { s.add(x); n++; } return n; }
    case "SREM": { const s = mem.get(k); let n = 0; if (s) for (const x of a) if (s.delete(x)) n++; return n; }
    case "SMEMBERS": return [...(mem.get(k) || [])];
    case "RPUSH": { const l = mem.get(k) || []; mem.set(k, l); l.push(...a); return l.length; }
    case "LRANGE": { const l = mem.get(k) || [], e = +a[1]; return l.slice(+a[0], e < 0 ? l.length + e + 1 : e + 1); }
    default: throw new Error("unsupported " + op);
  }
}

/* Run commands in order, e.g. run(["INCRBY", k, "1"], ["EXPIRE", k, "60"]). Returns one result per command. */
export async function run(...cmds) {
  const r = redis();
  if (!r) return cmds.map(memCmd);
  const res = await fetch(r.url + "/pipeline", {
    method: "POST",
    headers: { Authorization: `Bearer ${r.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmds.map(c => c.map(String))),
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  return (await res.json()).map(x => { if (x.error) throw new Error(x.error); return x.result; });
}

/* Today's date and month in Ireland, for counts that reset at midnight Irish time. */
const DAY = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Dublin", year: "numeric", month: "2-digit", day: "2-digit" });
export const today = () => DAY.format(new Date());
export const thisMonth = () => today().slice(0, 7);
