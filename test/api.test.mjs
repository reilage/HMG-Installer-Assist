// End-to-end tests of the api/ functions through dev-server.mjs, against a stand-in Claude API (no key or cost needed).
// Run with `npm test`.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { startMock } from "./mock-claude.mjs";

const MOCK = 4311, APP = 4312, BASE = `http://localhost:${APP}`;
let mock, app;

async function startApp(env) {
  const p = spawn(process.execPath, ["dev-server.mjs"], { env: { ...process.env, PORT: String(APP), ANTHROPIC_BASE_URL: `http://localhost:${MOCK}`, ...env }, stdio: ["ignore", "pipe", "inherit"] });
  await new Promise(r => p.stdout.once("data", r));
  return p;
}
const stop = p => new Promise(r => { p.once("exit", r); p.kill(); });
const ask = (body, headers = {}) => fetch(BASE + "/api/ask", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: JSON.stringify(body) });
const events = async r => (await r.text()).trim().split("\n").map(l => JSON.parse(l));

before(async () => { mock = await startMock(MOCK); app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "", RESEND_API_KEY: "", DAILY_QUESTION_LIMIT: "0" }); });
after(async () => { await stop(app); mock.server.close(); });

test("config says Ask is on and email is off", async () => {
  const c = await (await fetch(BASE + "/api/config")).json();
  assert.equal(c.ai, true); assert.equal(c.email, false); assert.equal(c.accessCode, false);
  assert.equal(c.escalationTo, "donal.reilly@heatmerchants.ie");
});

test("ask streams the answer and sends the rules, manual pages and history to Claude", async () => {
  mock.seen.length = 0;
  const r = await ask({ unit: "J", text: "H62 after start-up, what do I check?", extra: { code: "H62", pages: [164, 999] },
    history: [{ role: "assistant", content: "dropped: history must start with the installer" }, { role: "user", content: "hi" }, { role: "assistant", content: "Hello" }] });
  assert.equal(r.status, 200);
  const ev = await events(r);
  const text = ev.filter(e => e.t === "text").map(e => e.v).join("");
  assert.match(text, /\*\*Fault:\*\* H62/);
  assert.deepEqual(ev.at(-1), { t: "done", truncated: false });

  const { body, headers } = mock.seen[0];
  assert.equal(body.model, "claude-opus-5-5");
  assert.equal(body.fallbacks, "default");
  assert.match(headers["anthropic-beta"], /server-side-fallback-2026-07-01/);
  assert.deepEqual(body.output_config, { effort: "medium" });
  assert.equal(body.system[0].cache_control.type, "ephemeral");
  assert.match(body.system[0].text, /Panasonic J-series Mini Monobloc R32/);
  assert.doesNotMatch(body.system[0].text, /BAXI HP55 OUTDOOR UNIT QUICK REFERENCE/);
  assert.deepEqual(body.messages.slice(0, 2), [{ role: "user", content: "hi" }, { role: "assistant", content: "Hello" }]);
  const last = body.messages.at(-1).content;
  assert.match(last, /^Manual excerpts for this question:\n\n\[J-series SM, p\.164\]/); // page asked for by the fault card comes first
  assert.doesNotMatch(last, /p\.999\]/);
  assert.match(last, /Installer's message: H62 after start-up/);
});

test("Baxi questions get the Baxi rules and both Baxi manuals", async () => {
  mock.seen.length = 0;
  await events(await ask({ unit: "B", text: "H02.23 on the controller, what do I check?" }));
  const { body } = mock.seen[0];
  assert.match(body.system[0].text, /BAXI HP55 OUTDOOR UNIT QUICK REFERENCE/);
  assert.match(body.system[0].text, /R290 is highly flammable A3/);
  assert.match(body.messages.at(-1).content, /\[Baxi ASHP Control IM, p\.\d+\]/);
});

test("a photo is sent as an image block", async () => {
  mock.seen.length = 0;
  await events(await ask({ unit: "K", text: "", image: { media_type: "image/jpeg", data: "/9j/4AAQ" } }));
  const c = mock.seen[0].body.messages.at(-1).content;
  assert.equal(c[0].type, "image"); assert.equal(c[0].source.media_type, "image/jpeg");
  assert.match(c[1].text, /A photo is attached/);
});

test("empty questions and wrong methods are refused", async () => {
  assert.equal((await ask({ unit: "J", text: "  " })).status, 400);
  assert.equal((await fetch(BASE + "/api/ask")).status, 405);
});

test("fill from chat returns the escalation fields", async () => {
  const r = await fetch(BASE + "/api/extract", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ unit: "J", turns: [{ role: "user", content: "H62, filter checked" }] }) });
  const d = await r.json();
  assert.equal(r.status, 200); assert.equal(d.code, "H62"); assert.deepEqual(d.checks, ["Checked filter"]);
  assert.equal(mock.seen.at(-1).body.model, "claude-haiku-5-5");
  assert.equal(mock.seen.at(-1).body.output_config.format.type, "json_schema");
});

test("escalation email is off until Resend is set up", async () => {
  const r = await fetch(BASE + "/api/escalate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ subject: "x", body: "y" }) });
  assert.equal(r.status, 501);
});

test("static files are served", async () => {
  for (const p of ["/", "/knowledge.json", "/manifest.webmanifest", "/sw.js", "/wiring/j-main-pcb-terminals.png"])
    assert.equal((await fetch(BASE + p)).status, 200, p);
  const k = await (await fetch(BASE + "/knowledge.json")).json();
  assert.equal(k.J.pages, undefined, "manual text stays on the server");
  assert.equal(k.faults.length, 52);
});

test("access code, fallback reset and missing key", async () => {
  await stop(app);
  mock.server.close();
  mock = await startMock(MOCK, { fallbackAfter: "partial from the first model" });
  app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "boiler42", DAILY_QUESTION_LIMIT: "0" });
  assert.equal((await ask({ unit: "J", text: "H62" })).status, 401);
  const c = await (await fetch(BASE + "/api/config", { headers: { "X-Access-Code": "boiler42" } })).json();
  assert.equal(c.accessCode, true); assert.equal(c.accessOk, true);
  const ev = await events(await ask({ unit: "J", text: "H62" }, { "X-Access-Code": "boiler42" }));
  const i = ev.findIndex(e => e.t === "reset");
  assert.ok(i > 0, "reset sent when Claude hands over to the fallback model");
  assert.match(ev.slice(i).filter(e => e.t === "text").map(e => e.v).join(""), /^\*\*Fault:\*\*/);

  await stop(app);
  app = await startApp({ ANTHROPIC_API_KEY: "", APP_ACCESS_CODE: "" });
  const r = await ask({ unit: "J", text: "H62" });
  assert.equal(r.status, 503); assert.equal((await r.json()).error, "not_configured");
  assert.equal((await (await fetch(BASE + "/api/config")).json()).ai, false);
});

test("each phone gets its daily question limit", async () => {
  await stop(app);
  mock.server.close();
  mock = await startMock(MOCK);
  app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "", DAILY_QUESTION_LIMIT: "2", KV_REST_API_URL: "", UPSTASH_REDIS_REST_URL: "" });
  assert.equal((await (await fetch(BASE + "/api/config")).json()).dailyLimit, 2);
  const phoneA = { "X-Device-Id": "phone-aaaaaaaa" }, phoneB = { "X-Device-Id": "phone-bbbbbbbb" };
  assert.deepEqual((await events(await ask({ unit: "J", text: "H62" }, phoneA)))[0], { t: "quota", left: 1 });
  assert.deepEqual((await events(await ask({ unit: "J", text: "H62" }, phoneA)))[0], { t: "quota", left: 0 });
  const r = await ask({ unit: "J", text: "H62" }, phoneA);
  assert.equal(r.status, 429); assert.deepEqual(await r.json(), { error: "daily_limit", limit: 2 });
  assert.equal(mock.seen.length, 2, "Claude isn't called once the limit is reached");
  assert.deepEqual((await events(await ask({ unit: "J", text: "H62" }, phoneB)))[0], { t: "quota", left: 1 });
});
