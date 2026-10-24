// A stand-in for the Claude API, for tests: answers every /v1/messages call with a short streamed reply.
import http from "node:http";
export function startMock(port, { reply = "**Fault:** H62 test answer.\n**Source:** J-series SM p.178\nDiagram: j-main-pcb-terminals", fallbackAfter = null } = {}) {
  const seen = [];
  const server = http.createServer(async (req, res) => {
    let b = ""; for await (const c of req) b += c;
    const body = JSON.parse(b || "{}");
    seen.push({ url: req.url, headers: req.headers, body });
    if (!body.stream) {
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ id: "msg_1", type: "message", role: "assistant", model: body.model, stop_reason: "end_turn", stop_sequence: null,
        content: [{ type: "text", text: JSON.stringify({ code: "H62", symptoms: "No flow", assessment: "Flow switch", serial: "", address: "", eircode: "", name: "", company: "", mobile: "", checks: ["Checked filter"] }) }],
        usage: { input_tokens: 10, output_tokens: 10 } }));
    }
    res.setHeader("Content-Type", "text/event-stream");
    const ev = (type, data) => res.write(`event: ${type}\ndata: ${JSON.stringify({ type, ...data })}\n\n`);
    ev("message_start", { message: { id: "msg_1", type: "message", role: "assistant", model: body.model, content: [], stop_reason: null, stop_sequence: null, usage: { input_tokens: 10, output_tokens: 0, cache_read_input_tokens: 0 } } });
    let idx = 0;
    if (fallbackAfter) {
      ev("content_block_start", { index: idx, content_block: { type: "text", text: "" } });
      ev("content_block_delta", { index: idx, delta: { type: "text_delta", text: fallbackAfter } });
      ev("content_block_stop", { index: idx++ });
      ev("content_block_start", { index: idx, content_block: { type: "fallback", from: { model: body.model }, to: { model: "claude-opus-4-8" } } });
      ev("content_block_stop", { index: idx++ });
    }
    ev("content_block_start", { index: idx, content_block: { type: "text", text: "" } });
    for (const part of reply.match(/[\s\S]{1,12}/g)) ev("content_block_delta", { index: idx, delta: { type: "text_delta", text: part } });
    ev("content_block_stop", { index: idx });
    ev("message_delta", { delta: { stop_reason: "end_turn", stop_sequence: null }, usage: { output_tokens: 20 } });
    ev("message_stop", {});
    res.end();
  });
  return new Promise(r => server.listen(port, () => r({ server, seen })));
}
