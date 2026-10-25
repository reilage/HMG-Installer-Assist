// POST /api/extract  →  pulls escalation details out of the chat, for "Fill from chat" on the Escalate tab.
// Body: { unit, turns: [{role, content}] }   Reply: { code, symptoms, checks: [], assessment, serial, address, eircode, name, company, mobile }
import Anthropic from "@anthropic-ai/sdk";
import { UNITS } from "../lib/kb.js";
import { send, readJson, checkAccess, onlyPost, errorCode, clip } from "../lib/http.js";

const MODEL = process.env.CLAUDE_EXTRACT_MODEL || "claude-haiku-5-5";
const FIELDS = ["code", "symptoms", "assessment", "serial", "address", "eircode", "name", "company", "mobile"];
const SCHEMA = {
  type: "object",
  properties: { ...Object.fromEntries(FIELDS.map(f => [f, { type: "string" }])), checks: { type: "array", items: { type: "string" } } },
  required: [...FIELDS, "checks"],
  additionalProperties: false,
};

export default async function handler(req, res) {
  if (!onlyPost(req, res) || !(await checkAccess(req, res))) return;
  if (!process.env.ANTHROPIC_API_KEY) return send(res, 503, { error: "not_configured" });
  let body;
  try { body = await readJson(req, 200_000); } catch { return send(res, 400, { error: "bad_request" }); }
  const unit = UNITS[body.unit] ? body.unit : "J";
  const convo = (Array.isArray(body.turns) ? body.turns : [])
    .filter(t => t && typeof t.content === "string")
    .map(t => `${t.role === "user" ? "Installer" : "Assistant"}: ${t.content}`).join("\n\n").slice(-20000);
  if (!convo) return send(res, 400, { error: "bad_request" });

  try {
    const msg = await new Anthropic().messages.create({
      model: MODEL,
      max_tokens: 2000,
      output_config: { format: { type: "json_schema", schema: SCHEMA } },
      messages: [{ role: "user", content: `From this support chat about a ${UNITS[unit].name}, pull out escalation details. Use only what is in the chat; use "" for anything not stated. Never invent a serial number or address. "checks" lists the checks done, with readings. "assessment" is the likely cause and the manual section used.\n\n${convo}` }],
    });
    if (msg.stop_reason === "refusal") return send(res, 422, { error: "refused" });
    const text = msg.content.filter(b => b.type === "text").map(b => b.text).join("");
    const d = JSON.parse(text);
    const out = Object.fromEntries(FIELDS.map(f => [f, clip(d[f], 2000)]));
    out.checks = (Array.isArray(d.checks) ? d.checks : []).map(c => clip(c, 500)).filter(Boolean).slice(0, 20);
    send(res, 200, out);
  } catch (e) {
    console.error(JSON.stringify({ evt: "extract_error", status: e.status, message: e.message }));
    send(res, 502, { error: e instanceof SyntaxError ? "upstream" : errorCode(e, Anthropic) });
  }
}
