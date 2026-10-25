// POST /api/ask  →  streams the assistant's answer as newline-delimited JSON events:
//   {"t":"quota","left":4}   questions this phone has left today (only when DAILY_QUESTION_LIMIT is on)
//   {"t":"text","v":"..."}   more answer text
//   {"t":"reset"}            discard the text so far (Claude handed over to its fallback model mid-answer)
//   {"t":"done","truncated":false}
//   {"t":"error","code":"rate_limited"}
// Over the daily limit it answers 429 {"error":"daily_limit","limit":5} instead (see lib/quota.js).
// Body: { unit: "J"|"K"|"B", text, history: [{role, content}], extra: {code, pages, note}, image: {media_type, data} }
import Anthropic from "@anthropic-ai/sdk";
import { UNITS, pagesFor, excerpt } from "../lib/kb.js";
import { rules } from "../lib/prompt.js";
import { take, giveBack } from "../lib/quota.js";
import { send, readJson, checkAccess, onlyPost, errorCode, clip } from "../lib/http.js";

const MODEL = process.env.CLAUDE_MODEL || "claude-opus-5-5";
const EFFORT = process.env.CLAUDE_EFFORT || "medium";
const FALLBACKS = process.env.CLAUDE_FALLBACKS !== "off";
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

/* Earlier turns from the app: text only, alternating, starting with the installer, ending with the assistant. */
function cleanHistory(h) {
  let out = (Array.isArray(h) ? h : []).slice(-8)
    .filter(t => t && (t.role === "user" || t.role === "assistant") && typeof t.content === "string" && t.content.trim())
    .map(t => ({ role: t.role, content: clip(t.content, 8000) }));
  out = out.filter((t, i) => i === 0 || t.role !== out[i - 1].role);
  while (out.length && out[0].role !== "user") out.shift();
  while (out.length && out[out.length - 1].role !== "assistant") out.pop();
  return out;
}

export default async function handler(req, res) {
  if (!onlyPost(req, res) || !checkAccess(req, res)) return;
  if (!process.env.ANTHROPIC_API_KEY) return send(res, 503, { error: "not_configured" });
  let body;
  try { body = await readJson(req); } catch (e) { return send(res, e.code === "too_large" ? 413 : 400, { error: e.code === "too_large" ? "prompt_too_large" : "bad_request" }); }

  const unit = UNITS[body.unit] ? body.unit : "J";
  const text = clip(body.text, 4000).trim();
  const extra = body.extra && typeof body.extra === "object"
    ? { code: clip(body.extra.code, 20), pages: Array.isArray(body.extra.pages) ? body.extra.pages.slice(0, 6) : [], note: clip(body.extra.note, 3000) } : null;
  const img = body.image && IMAGE_TYPES.has(body.image.media_type) && typeof body.image.data === "string" && body.image.data.length < 5_000_000 ? body.image : null;
  if (!text && !img) return send(res, 400, { error: "bad_request" });
  const quota = await take(req);
  if (!quota.ok) return send(res, 429, { error: "daily_limit", limit: quota.limit });

  const pages = pagesFor(unit, text, extra);
  const ctx = pages.length ? `Manual excerpts for this question:\n\n${pages.map(x => excerpt(x.m, x.p)).join("\n\n")}\n\n` : "No manual pages matched this question.\n\n";
  const userTurn = `${ctx}${extra?.note ? extra.note + "\n\n" : ""}${img ? "A photo is attached.\n" : ""}Installer's message: ${text || "(see photo)"}`;
  const content = img
    ? [{ type: "image", source: { type: "base64", media_type: img.media_type, data: img.data } }, { type: "text", text: userTurn }]
    : userTurn;

  const params = {
    model: MODEL,
    max_tokens: 16000,
    output_config: { effort: EFFORT },
    system: [{ type: "text", text: rules(unit), cache_control: { type: "ephemeral" } }],
    messages: [...cleanHistory(body.history), { role: "user", content }],
  };
  const client = new Anthropic();
  const stream = FALLBACKS
    ? client.beta.messages.stream({ ...params, betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" })
    : client.messages.stream(params);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Accel-Buffering", "no");
  const emit = o => res.write(JSON.stringify(o) + "\n");
  if (quota.left !== null) emit({ t: "quota", left: quota.left });
  let closed = false;
  res.on("close", () => { if (!res.writableFinished) { closed = true; stream.abort(); } });

  const started = Date.now();
  try {
    for await (const ev of stream) {
      if (ev.type === "content_block_start" && ev.content_block.type === "fallback") emit({ t: "reset" });
      else if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") emit({ t: "text", v: ev.delta.text });
    }
    const msg = await stream.finalMessage();
    if (msg.stop_reason === "refusal") emit({ t: "error", code: "refused" });
    else emit({ t: "done", truncated: msg.stop_reason === "max_tokens" });
    // One log line per question (Vercel > Logs). A proper question record needs a database: see README.
    console.log(JSON.stringify({ evt: "ask", unit, chars: text.length, photo: !!img, pages: pages.map(x => `${x.m}:${x.p}`),
      model: msg.model, stop: msg.stop_reason, ms: Date.now() - started, usage: msg.usage }));
  } catch (e) {
    if (closed) return;
    await giveBack(quota);
    console.error(JSON.stringify({ evt: "ask_error", unit, status: e.status, message: e.message }));
    emit({ t: "error", code: errorCode(e, Anthropic) });
  }
  res.end();
}
