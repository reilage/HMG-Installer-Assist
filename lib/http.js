// Small helpers shared by the api/ functions. They only use plain Node req/res, so the same
// handlers run on Vercel and in dev-server.mjs.
import crypto from "node:crypto";
import { accountsOn, findByCode } from "./accounts.js";

export function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(obj));
}

/* Vercel has usually parsed a JSON body already; otherwise read it here. */
export async function readJson(req, limit = 4_000_000) {
  if (req.body !== undefined && req.body !== null && typeof req.body === "object" && !Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body);
  let size = 0;
  const chunks = [];
  for await (const c of req) {
    size += c.length;
    if (size > limit) throw Object.assign(new Error("too large"), { code: "too_large" });
    chunks.push(c);
  }
  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {};
}

/* Who is asking. With a shared access code (APP_ACCESS_CODE) and/or installer accounts (ADMIN_CODE, lib/accounts.js),
   every API call must send a code in X-Access-Code, so a leaked link can't run up the Claude bill: the shared code,
   or an installer's personal code. Returns {kind: "open" | "shared" | "installer", installer} or {denied: <error code>}. */
export const accessRequired = () => !!process.env.APP_ACCESS_CODE || accountsOn();
export const sameSecret = (got, want) => {
  const a = crypto.createHash("sha256").update(String(got)).digest(), b = crypto.createHash("sha256").update(String(want)).digest();
  return crypto.timingSafeEqual(a, b);
};
export async function identify(req) {
  if (!accessRequired()) return { kind: "open" };
  const got = String(req.headers["x-access-code"] || "");
  if (process.env.APP_ACCESS_CODE && sameSecret(got, process.env.APP_ACCESS_CODE)) return { kind: "shared" };
  if (accountsOn() && got) {
    let inst;
    try { inst = await findByCode(got); } catch (e) {
      console.error(JSON.stringify({ evt: "accounts_error", message: e.message }));
      return { denied: "unavailable", status: 503 };
    }
    if (inst) return inst.active ? { kind: "installer", installer: inst } : { denied: "account_off" };
  }
  return { denied: "access_code" };
}
export async function checkAccess(req, res) {
  const who = await identify(req);
  if (!who.denied) return who;
  send(res, who.status || 401, { error: who.denied });
  return null;
}

export function onlyPost(req, res) {
  if (req.method === "POST") return true;
  res.setHeader("Allow", "POST");
  send(res, 405, { error: "method" });
  return false;
}

/* Map Anthropic SDK errors to the short codes the app shows messages for. */
export function errorCode(e, Anthropic) {
  if (e instanceof Anthropic.AuthenticationError || e instanceof Anthropic.PermissionDeniedError) return "server_key";
  if (e instanceof Anthropic.RateLimitError) return "rate_limited";
  if (e instanceof Anthropic.BadRequestError) return /image/i.test(e.message) ? "image_rejected" : /too long|too large|prompt is too/i.test(e.message) ? "prompt_too_large" : "bad_request";
  if (e instanceof Anthropic.APIConnectionError) return "upstream";
  if (e instanceof Anthropic.APIError) return e.status === 529 || e.status === 503 ? "busy" : "upstream";
  return "server";
}

export const clip = (s, n) => (typeof s === "string" ? s : "").slice(0, n);
