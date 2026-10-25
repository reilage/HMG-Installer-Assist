// POST /api/ask  →  streams the assistant's answer as newline-delimited JSON events:
//   {"t":"stored","id":"…","at":"…"}  this answer comes from storage (lib/answers.js): no Claude call, no question used
//   {"t":"quota","left":4}   questions this phone has left today (only when DAILY_QUESTION_LIMIT is on)
//   {"t":"text","v":"..."}   more answer text
//   {"t":"reset"}            discard the text so far (Claude handed over to its fallback model mid-answer)
//   {"t":"done","truncated":false}
//   {"t":"error","code":"rate_limited"}
// Over the daily limit it answers 429 {"error":"daily_limit","limit":5} instead (see lib/quota.js).
// Body: { unit: "J"|"K"|"B", text, history: [{role, content}], extra: {code, pages, note}, image: {media_type, data}, fresh: id }
// standalone: a ready-made question from a button (fault card, suggestion...), which can be answered from storage even
// part-way through a chat. fresh: the installer tapped "Didn't help" on stored answer <id>, so ask Claude afresh and store that answer instead.
import Anthropic from "@anthropic-ai/sdk";
import { UNITS, pagesFor, excerpt, normCodes, faultContext } from "../lib/kb.js";
import { rules } from "../lib/prompt.js";
import { take, giveBack } from "../lib/quota.js";
import { recordQuestion } from "../lib/trends.js";
import { reusable, findAnswer, saveAnswer, notHelpful } from "../lib/answers.js";
import { send, readJson, checkAccess, onlyPost, errorCode, clip } from "../lib/http.js";

const MODEL = process.env.CLAUDE_MODEL || "claude-opus-5-5";
const EFFORT = process.env.CLAUDE_EFFORT || "medium";
const FALLBACKS = process.env.CLAUDE_FALLBACKS !== "off";
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

/* Start the streamed reply; returns a function that sends one event. */
function stream(res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Accel-Buffering", "no");
  return o => res.write(JSON.stringify(o) + "\n");
}

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
  if (!onlyPost(req, res)) return;
  const who = await checkAccess(req, res);
  if (!who) return;
  if (!process.env.ANTHROPIC_API_KEY) return send(res, 503, { error: "not_configured" });
  let body;
  try { body = await readJson(req); } catch (e) { return send(res, e.code === "too_large" ? 413 : 400, { error: e.code === "too_large" ? "prompt_too_large" : "bad_request" }); }

  const unit = UNITS[body.unit] ? body.unit : "J";
  const text = normCodes(unit, clip(body.text, 4000).trim());
  let extra = body.extra && typeof body.extra === "object"
    ? { code: clip(body.extra.code, 20), pages: Array.isArray(body.extra.pages) ? body.extra.pages.slice(0, 6) : [], note: clip(body.extra.note, 3000) } : null;
  // A code typed or said in Ask gets the fault card's table row and check pages too (the card sends its own).
  const fc = extra?.code ? null : faultContext(unit, text);
  if (fc) extra = { code: extra?.code || "", pages: [...fc.pages, ...(extra?.pages || [])].slice(0, 6), note: [fc.note, extra?.note].filter(Boolean).join("\n\n") };
  const img = body.image && IMAGE_TYPES.has(body.image.media_type) && typeof body.image.data === "string" && body.image.data.length < 5_000_000 ? body.image : null;
  if (!text && !img) return send(res, 400, { error: "bad_request" });
  const history = cleanHistory(body.history);
  const reuse = reusable({ text, history: body.standalone === true ? [] : history, img }); // may come from storage
  const keep = reuse && !history.length; // may be stored: only answers given without an earlier conversation
  const fresh = typeof body.fresh === "string" ? body.fresh : "";
  if (reuse && !fresh) {
    const hit = await findAnswer(unit, text, extra?.code).catch(e => { console.error(JSON.stringify({ evt: "stored_error", message: e.message })); return null; });
    if (hit) {
      const emit = stream(res);
      emit({ t: "stored", id: hit.id, at: hit.at });
      emit({ t: "text", v: hit.a });
      emit({ t: "done", truncated: false });
      await recordQuestion({ unit, text, code: extra?.code, who, req, answer: hit.a, photo: false, stored: true })
        .catch(e => console.error(JSON.stringify({ evt: "trends_error", message: e.message })));
      console.log(JSON.stringify({ evt: "ask", unit, installer: who.installer?.name, chars: text.length, stored: hit.id }));
      return res.end();
    }
  }
  if (fresh) await notHelpful(fresh).catch(() => {});
  const quota = await take(req, who);
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
    messages: [...history, { role: "user", content }],
  };
  const client = new Anthropic();
  const claude = FALLBACKS
    ? client.beta.messages.stream({ ...params, betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" })
    : client.messages.stream(params);

  const emit = stream(res);
  if (quota.left !== null) emit({ t: "quota", left: quota.left });
  let closed = false;
  res.on("close", () => { if (!res.writableFinished) { closed = true; claude.abort(); } });

  const started = Date.now();
  let answer = "";
  try {
    for await (const ev of claude) {
      if (ev.type === "content_block_start" && ev.content_block.type === "fallback") { emit({ t: "reset" }); answer = ""; }
      else if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") { emit({ t: "text", v: ev.delta.text }); answer += ev.delta.text; }
    }
    const msg = await claude.finalMessage();
    if (msg.stop_reason === "refusal") emit({ t: "error", code: "refused" });
    else emit({ t: "done", truncated: msg.stop_reason === "max_tokens" });
    // A complete first answer is stored so the same question next time costs nothing (lib/answers.js).
    if (keep && msg.stop_reason === "end_turn")
      await saveAnswer({ unit, text, code: extra?.code, answer, who }).catch(e => console.error(JSON.stringify({ evt: "stored_error", message: e.message })));
    // Saved for the weekly fault trends (lib/trends.js); a hiccup there doesn't spoil the answer.
    await recordQuestion({ unit, text, code: extra?.code, who, req, answer, photo: !!img })
      .catch(e => console.error(JSON.stringify({ evt: "trends_error", message: e.message })));
    // One log line per question (Vercel > Logs).
    console.log(JSON.stringify({ evt: "ask", unit, installer: who.installer?.name, chars: text.length, photo: !!img, pages: pages.map(x => `${x.m}:${x.p}`),
      model: msg.model, stop: msg.stop_reason, ms: Date.now() - started, usage: msg.usage }));
  } catch (e) {
    if (closed) return;
    await giveBack(quota, who);
    console.error(JSON.stringify({ evt: "ask_error", unit, status: e.status, message: e.message }));
    emit({ t: "error", code: errorCode(e, Anthropic) });
  }
  res.end();
}
