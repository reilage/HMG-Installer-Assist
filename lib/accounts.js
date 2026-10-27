// Installer accounts. Heat Merchants adds each installer on the admin page (public/admin.html) and gives them a
// personal code, which they type once on their phone in place of the shared access code. Accounts are on when
// ADMIN_CODE is set; they are kept in the Upstash store (lib/store.js).
//   inst:<id>   the installer, as JSON {id, name, company, mobile, email, code, active, limit, discounts, created}
//               (discounts: % off RRP on their quick survey quote per product group, {hp, indoor, cyl, kit, rad}, lib/prices.js)
//   insts       set of installer ids
//   code:<CODE> installer id for a code (normalised: upper case, letters and digits only)
//   req:<id>    an installer's request for access (from the app), as JSON {id, name, company, mobile, email, note, created, tokenHash}
//   reqs        set of request ids
// A request is approved from the admin page, or from the link in the approval email (which carries a one-off token).
import crypto from "node:crypto";
import { run } from "./store.js";
import { cleanDiscounts } from "./prices.js";

export const accountsOn = () => !!process.env.ADMIN_CODE;
export const normCode = c => String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, "");

/* HMG-XXXXXX, without the easily confused 0/O and 1/I/L. */
function newCode() {
  const A = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  return "HMG-" + Array.from(crypto.randomBytes(6), b => A[b % A.length]).join("");
}

export async function getInstaller(id) {
  const [j] = await run(["GET", "inst:" + id]);
  return j ? JSON.parse(j) : null;
}

export async function findByCode(code) {
  const n = normCode(code);
  if (!n.startsWith("HMG") || n.length < 9) return null;
  const [id] = await run(["GET", "code:" + n]);
  return id ? getInstaller(id) : null;
}

export async function listInstallers() {
  const [ids] = await run(["SMEMBERS", "insts"]);
  if (!ids.length) return [];
  const [rows] = await run(["MGET", ...ids.map(id => "inst:" + id)]);
  return rows.filter(Boolean).map(j => JSON.parse(j)).sort((a, b) => a.name.localeCompare(b.name));
}

const clean = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const cleanLimit = v => (v === null || v === "" || v === undefined ? null : Math.max(0, Math.min(1000, parseInt(v, 10) || 0)));

export async function addInstaller(f) {
  const name = clean(f.name, 80);
  if (!name) throw Object.assign(new Error("name"), { code: "name_required" });
  const inst = { id: crypto.randomUUID(), name, company: clean(f.company, 80), mobile: clean(f.mobile, 30), email: clean(f.email, 120),
    code: newCode(), active: true, limit: cleanLimit(f.limit), discounts: cleanDiscounts(f.discounts), created: new Date().toISOString() };
  await run(["SET", "inst:" + inst.id, JSON.stringify(inst)], ["SET", "code:" + normCode(inst.code), inst.id], ["SADD", "insts", inst.id]);
  return inst;
}

export async function updateInstaller(id, f) {
  const inst = await getInstaller(id);
  if (!inst) return null;
  for (const [k, n] of [["name", 80], ["company", 80], ["mobile", 30], ["email", 120]]) if (typeof f[k] === "string") inst[k] = clean(f[k], n) || (k === "name" ? inst.name : "");
  if ("limit" in f) inst.limit = cleanLimit(f.limit);
  if (f.discounts && typeof f.discounts === "object") { inst.discounts = cleanDiscounts(f.discounts); delete inst.discount; }
  if (typeof f.active === "boolean") inst.active = f.active;
  const cmds = [];
  if (f.newCode) { cmds.push(["DEL", "code:" + normCode(inst.code)]); inst.code = newCode(); cmds.push(["SET", "code:" + normCode(inst.code), inst.id]); }
  cmds.push(["SET", "inst:" + inst.id, JSON.stringify(inst)]);
  await run(...cmds);
  return inst;
}

export async function deleteInstaller(id) {
  const inst = await getInstaller(id);
  if (!inst) return false;
  await run(["DEL", "inst:" + id, "code:" + normCode(inst.code), "hist:" + id, "hans:" + id, "surv:" + id], ["SREM", "insts", id]); // and their questions (lib/history.js) and surveys (lib/surveys.js)
  return true;
}

/* What the phone may see about its own account (the escalation form is filled from it). */
export const publicInstaller = i => ({ name: i.name, company: i.company, mobile: i.mobile, email: i.email });

/* ---------- access requests ---------- */
const sha = t => crypto.createHash("sha256").update(String(t)).digest("hex");

export async function addRequest(f) {
  const r = { id: crypto.randomUUID(), name: clean(f.name, 80), company: clean(f.company, 80), mobile: clean(f.mobile, 30),
    email: clean(f.email, 120), note: clean(f.note, 500), created: new Date().toISOString() };
  const token = crypto.randomBytes(24).toString("base64url");
  r.tokenHash = sha(token);
  // a second request from the same email replaces the first
  for (const old of await listRequests()) if (old.email.toLowerCase() === r.email.toLowerCase()) await deleteRequest(old.id);
  await run(["SET", "req:" + r.id, JSON.stringify(r)], ["EXPIRE", "req:" + r.id, String(60 * 86400)], ["SADD", "reqs", r.id]);
  return { request: r, token };
}

export async function getRequest(id) {
  const [j] = await run(["GET", "req:" + id]);
  return j ? JSON.parse(j) : null;
}

export async function listRequests() {
  const [ids] = await run(["SMEMBERS", "reqs"]);
  if (!ids.length) return [];
  const [rows] = await run(["MGET", ...ids.map(id => "req:" + id)]);
  const gone = ids.filter((id, n) => !rows[n]); // expired after 60 days
  if (gone.length) await run(["SREM", "reqs", ...gone]);
  return rows.filter(Boolean).map(j => JSON.parse(j)).sort((a, b) => a.created.localeCompare(b.created));
}

export async function deleteRequest(id) {
  await run(["DEL", "req:" + id], ["SREM", "reqs", id]);
}

export const requestTokenOk = (r, token) => !!r && typeof token === "string" && token.length > 10 &&
  crypto.timingSafeEqual(Buffer.from(sha(token)), Buffer.from(r.tokenHash));

/* Turn a request into an installer account. */
export async function approveRequest(id) {
  const r = await getRequest(id);
  if (!r) return null;
  const inst = await addInstaller(r);
  await deleteRequest(id);
  return inst;
}

export const publicRequest = r => ({ id: r.id, name: r.name, company: r.company, mobile: r.mobile, email: r.email, note: r.note, created: r.created });
