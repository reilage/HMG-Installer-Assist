// Small helpers shared by the api/ functions. They only use plain Node req/res, so the same
// handlers run on Vercel and in dev-server.mjs.
import crypto from "node:crypto";

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

/* Optional shared access code (APP_ACCESS_CODE). When it is set, every API call must send it,
   so a leaked link can't run up the Claude bill. Installer accounts replace this later. */
export const accessRequired = () => !!process.env.APP_ACCESS_CODE;
export function accessOk(req) {
  const want = process.env.APP_ACCESS_CODE;
  if (!want) return true;
  const got = String(req.headers["x-access-code"] || "");
  const a = crypto.createHash("sha256").update(got).digest(), b = crypto.createHash("sha256").update(want).digest();
  return crypto.timingSafeEqual(a, b);
}
export function checkAccess(req, res) {
  if (accessOk(req)) return true;
  send(res, 401, { error: "access_code" });
  return false;
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
