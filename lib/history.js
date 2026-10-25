// My questions: every question an installer asks, with the answer they got, is kept on their account so they can look
// it up again later from any phone, free (opening an old answer never calls Claude or uses a day's question).
// Only installers with a personal code have an account; with the shared access code the app keeps the history on
// the phone instead (public/index.html).
//   hist:<installer id>   list of the installer's questions, oldest first, as JSON {id, chat, at, unit, code, q, s, photo}
//                         (s: the start of the answer, for the list and search)
//   hans:<installer id>   hash of entry id → the full answer
// Questions asked in one chat share a chat id, so an old chat opens as a whole. The newest MAX are kept, with no
// expiry; deleting the installer deletes their history.
import crypto from "node:crypto";
import { run } from "./store.js";
import { faultCode } from "./trends.js";

const MAX = 1000;
const hk = id => "hist:" + id, ak = id => "hans:" + id;
const cleanChat = c => String(c || "").replace(/[^A-Za-z0-9-]/g, "").slice(0, 40);
/* The answer's start as one plain line: markdown and the diagram line dropped. */
const preview = a => String(a || "").replace(/\n\s*\**Diagrams?:?[^\n]*$/i, "").replace(/\*\*|`|^#+\s*/gm, "").replace(/\s+/g, " ").trim().slice(0, 160);

export async function saveHistory({ who, chat, unit, text, code, answer, photo }) {
  const inst = who?.installer;
  if (!inst || !answer) return null;
  const e = { id: crypto.randomUUID(), chat: cleanChat(chat), at: new Date().toISOString(), unit, code: faultCode(unit, text || "", code),
    q: String(text || "").slice(0, 1000), s: preview(answer), ...(photo ? { photo: true } : {}) };
  if (!e.chat) e.chat = e.id;
  const [n] = await run(["RPUSH", hk(inst.id), JSON.stringify(e)], ["HSET", ak(inst.id), e.id, answer]);
  if (n > MAX) {
    const [old] = await run(["LPOP", hk(inst.id), String(n - MAX)]);
    const ids = (old || []).map(j => { try { return JSON.parse(j).id; } catch { return null; } }).filter(Boolean);
    if (ids.length) await run(["HDEL", ak(inst.id), ...ids]);
  }
  return e;
}

async function entries(instId) {
  const [rows] = await run(["LRANGE", hk(instId), "0", "-1"]);
  return (rows || []).map(j => { try { return JSON.parse(j); } catch { return null; } }).filter(Boolean);
}

/* The installer's questions, newest first (without the full answers). */
export async function listHistory(instId) {
  return (await entries(instId)).reverse();
}

/* One chat, oldest first, with the full answers. */
export async function openChat(instId, chat) {
  const es = (await entries(instId)).filter(e => e.chat === cleanChat(chat));
  if (!es.length) return [];
  const [as] = await run(["HMGET", ak(instId), ...es.map(e => e.id)]);
  return es.map((e, i) => ({ ...e, a: as[i] || "" }));
}

/* Remove a chat from the installer's history. */
export async function deleteChat(instId, chat) {
  const all = await entries(instId), c = cleanChat(chat);
  const gone = all.filter(e => e.chat === c);
  if (!gone.length) return 0;
  const keep = all.filter(e => e.chat !== c);
  await run(["DEL", hk(instId)], ...(keep.length ? [["RPUSH", hk(instId), ...keep.map(e => JSON.stringify(e))]] : []), ["HDEL", ak(instId), ...gone.map(e => e.id)]);
  return gone.length;
}

export const clearHistory = instId => run(["DEL", hk(instId), ak(instId)]);
