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

test("the HMG heating curve is in the rules, with the Baxi gradient and base worked out", async () => {
  mock.seen.length = 0;
  await events(await ask({ unit: "K", text: "What heating curve for radiators?" }));
  await events(await ask({ unit: "B", text: "What heating curve for underfloor?" }));
  const [k, b] = mock.seen.map(s => s.body.system[0].text);
  assert.match(k, /HMG WEATHER COMPENSATION GUIDANCE/);
  assert.match(k, /steel radiators 45 °C flow at -3 °C outdoor, 35 °C at 15 °C outdoor/);
  assert.match(k, /takes the four points directly/);
  assert.match(b, /CP230 = 0\.6 with CP210 = 32 °C \(rads\) or 22 °C \(UFH\)/);
  for (const t of [k, b]) assert.match(t, /maximum flow temperature 45 °C on radiators and 35 °C on underfloor/);
  assert.match(b, /CP000 max flow = 45 °C \(rads\) or 35 °C \(UFH\)/);
});

test("each Panasonic unit gets only its own HMG commissioning procedure, Baxi gets none", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "K", "B"]) await events(await ask({ unit, text: "Talk me through commissioning" }));
  const [j, k, b] = mock.seen.map(s => s.body.system[0].text);
  assert.match(j, /HMG COMMISSIONING PROCEDURE \(J-series\)[\s\S]*Built-in vessel is 6 L/);
  assert.doesNotMatch(j, /Built-in vessel is 10 L/);
  assert.match(k, /HMG COMMISSIONING PROCEDURE \(K-series\)[\s\S]*Built-in vessel is 10 L/);
  assert.doesNotMatch(k, /Built-in vessel is 6 L/);
  for (const t of [j, k]) assert.match(t, /never invent an HMG value/);
  assert.doesNotMatch(b, /HMG COMMISSIONING PROCEDURE/);
  assert.match(b, /HMG has no Baxi commissioning procedure yet/);
});

test("the J-series parts list is in the J rules only, with the part number per model", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "K", "B"]) await events(await ask({ unit, text: "Part number for the water PCB?" }));
  const [j, k, b] = mock.seen.map(s => s.body.system[0].text);
  assert.match(j, /J-SERIES PARTS LIST/);
  assert.match(j, /^58 PUMP \(water pump circulating pump circulator\) \| all models ACXB53-00390 \| qty 1 \| keep in stock \| j-parts-water$/m);
  assert.match(j, /^63 ELECTRONIC CONTROLLER \(MAIN\) - WATER .*\| 05: ACXA73C58300R, 07: ACXA73C58310R, 09: ACXA73C58320R \|/m);
  assert.match(j, /^33 ELECTRO MAGNETIC SWITCH .*05: not fitted, 07: CWA001023, 09: CWA001023 \| qty 05: 0, 07\/09: 1/m);
  assert.match(j, /confirm the number with the Panasonic parts supplier/);
  for (const t of [k, b]) { assert.doesNotMatch(t, /J-SERIES PARTS LIST/); assert.match(t, /no parts list on file/); }
});

test("each unit's rules list only its own components, with drawing numbers and fault codes", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "K", "B"]) await events(await ask({ unit, text: "What is the valve on top of the unit?" }));
  const [j, k, b] = mock.seen.map(s => s.body.system[0].text);
  assert.match(j, /^j-comp-main no\.8, j-comp-cycle \(labelled\) \| Flow sensor \(water flow switch\) \| .* \| codes H62 \| SM p\.37, p\.140$/m);
  assert.match(k, /^k-comp-main no\.13 \| Expansion vessel \| .*10 L/m);
  assert.match(b, /^b-comp-hydro-small no\.7, b-comp-hydro-large no\.7, b-comp-refrigerant no\.23 \| Flow switch \| .* \| codes E0 E8 PF \|/m);
  assert.doesNotMatch(j, /k-comp-main|b-comp-/); assert.doesNotMatch(k, /j-comp-|b-comp-/); assert.doesNotMatch(b, /j-comp-|k-comp-main/);
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
  assert.equal(k.parts.J.parts.length, 100);
  for (const v of k.parts.J.views) assert.equal((await fetch(BASE + "/" + v.file)).status, 200, v.file);
  for (const u of ["J", "K", "B"]) {
    const C = k.components[u], ids = new Set(C.drawings.map(d => d.id));
    for (const d of C.drawings) assert.equal((await fetch(BASE + "/" + d.file)).status, 200, d.file);
    for (const c of C.components) for (const [d] of c.at) assert.ok(ids.has(d), `${u} ${c.name}: ${d}`);
  }
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

test("installer accounts: admin adds an installer, their code signs them in and has its own limit", async () => {
  await stop(app);
  app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "", ADMIN_CODE: "admin-secret", DAILY_QUESTION_LIMIT: "3", KV_REST_API_URL: "", UPSTASH_REDIS_REST_URL: "" });
  const admin = (body, code = "admin-secret") => fetch(BASE + "/api/admin", { method: "POST", headers: { "Content-Type": "application/json", "X-Admin-Code": code }, body: JSON.stringify(body) });
  assert.equal((await admin({ action: "list" }, "wrong")).status, 401);
  assert.equal((await admin({ action: "add", name: " " })).status, 400);

  const { installer: a } = await (await admin({ action: "add", name: "Seán Murphy", company: "Murphy Heating", mobile: "087 123 4567", limit: "1" })).json();
  const { installer: b } = await (await admin({ action: "add", name: "Aoife Byrne" })).json();
  assert.match(a.code, /^HMG-[A-Z2-9]{6}$/);

  // without a code the app asks for one; the installer's code works however it is typed
  const c0 = await (await fetch(BASE + "/api/config")).json();
  assert.equal(c0.accounts, true); assert.equal(c0.accessCode, true); assert.equal(c0.accessOk, false);
  assert.equal((await ask({ unit: "J", text: "H62" })).status, 401);
  const typed = a.code.toLowerCase().replace("-", " ");
  const c1 = await (await fetch(BASE + "/api/config", { headers: { "X-Access-Code": typed } })).json();
  assert.equal(c1.accessOk, true); assert.equal(c1.dailyLimit, 1);
  assert.deepEqual(c1.installer, { name: "Seán Murphy", company: "Murphy Heating", mobile: "087 123 4567", email: "" });

  // the limit is per installer, not per phone
  assert.deepEqual((await events(await ask({ unit: "J", text: "H62" }, { "X-Access-Code": a.code, "X-Device-Id": "phone-1111111" })))[0], { t: "quota", left: 0 });
  assert.equal((await ask({ unit: "J", text: "H62" }, { "X-Access-Code": a.code, "X-Device-Id": "phone-2222222" })).status, 429);
  assert.deepEqual((await events(await ask({ unit: "J", text: "H62" }, { "X-Access-Code": b.code })))[0], { t: "quota", left: 2 });

  const list = (await (await admin({ action: "list" })).json()).installers;
  assert.deepEqual(list.map(i => [i.name, i.today, i.month]), [["Aoife Byrne", 1, 1], ["Seán Murphy", 1, 1]]);

  // switched off, new code, deleted
  await admin({ action: "update", id: b.id, active: false });
  const off = await ask({ unit: "J", text: "H62" }, { "X-Access-Code": b.code });
  assert.equal(off.status, 401); assert.equal((await off.json()).error, "account_off");
  const { installer: a2 } = await (await admin({ action: "update", id: a.id, newCode: true, limit: null })).json();
  assert.notEqual(a2.code, a.code);
  assert.equal((await ask({ unit: "J", text: "H62" }, { "X-Access-Code": a.code })).status, 401);
  assert.equal((await (await fetch(BASE + "/api/config", { headers: { "X-Access-Code": a2.code } })).json()).dailyLimit, 3);
  await admin({ action: "delete", id: a.id });
  assert.equal((await ask({ unit: "J", text: "H62" }, { "X-Access-Code": a2.code })).status, 401);
  assert.equal((await (await admin({ action: "list" })).json()).installers.length, 1);
});

test("installers can request access, and a request is approved from the email link or the admin page", async () => {
  // the app from the previous test is still running with ADMIN_CODE set and email off
  const apply = body => fetch(BASE + "/api/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const admin = body => fetch(BASE + "/api/admin", { method: "POST", headers: { "Content-Type": "application/json", "X-Admin-Code": "admin-secret" }, body: JSON.stringify(body) });
  const approve = body => fetch(BASE + "/api/approve", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });

  assert.equal((await apply({ name: "Ciarán", email: "not-an-email", mobile: "086" })).status, 400);
  assert.deepEqual(await (await apply({ name: "Bot", email: "b@x.ie", mobile: "1", website: "spam" })).json(), { ok: true, emailed: false });
  assert.deepEqual(await (await apply({ name: "Ciarán Walsh", company: "Walsh Plumbing", mobile: "086 555 1234", email: "ciaran@walsh.ie", note: "J and K series" })).json(), { ok: true, emailed: false });
  await apply({ name: "Ciarán Walsh", mobile: "086 555 1234", email: "Ciaran@walsh.ie" }); // a repeat replaces the first
  await apply({ name: "Niamh Kelly", mobile: "085 000 0000", email: "niamh@kelly.ie" });

  let reqs = (await (await admin({ action: "list" })).json()).requests;
  assert.deepEqual(reqs.map(r => r.name), ["Ciarán Walsh", "Niamh Kelly"]);
  assert.equal(reqs[0].tokenHash, undefined, "the token never leaves the server");

  // the email link needs the right token
  assert.equal((await approve({ id: reqs[0].id, t: "wrong-token-xxxxxxxx", action: "view" })).status, 404);

  // approve one from the admin page: it becomes an installer whose code works
  const { installer, emailed } = await (await admin({ action: "approve", id: reqs[0].id })).json();
  assert.equal(emailed, false); assert.equal(installer.company, "");
  const c = await (await fetch(BASE + "/api/config", { headers: { "X-Access-Code": installer.code } })).json();
  assert.equal(c.accessOk, true); assert.equal(c.installer.name, "Ciarán Walsh");

  await admin({ action: "decline", id: reqs[1].id });
  assert.equal((await (await admin({ action: "list" })).json()).requests.length, 0);

  // five requests a day from one address, then no more
  for (let i = 0; i < 2; i++) await apply({ name: "X" + i, mobile: "1", email: `x${i}@x.ie` });
  assert.equal((await apply({ name: "Too many", mobile: "1", email: "y@x.ie" })).status, 429);
});

test("with email on, the approver gets a link that approves the request and emails the installer their code", async () => {
  await stop(app);
  app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "", ADMIN_CODE: "admin-secret", KV_REST_API_URL: "", UPSTASH_REDIS_REST_URL: "",
    RESEND_API_KEY: "re_test", ESCALATION_FROM: "Assist <assist@example.ie>", RESEND_API_URL: `http://localhost:${MOCK}`, APPROVAL_TO: "boss@example.ie" });
  mock.seen.length = 0;
  const r = await fetch(BASE + "/api/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "Pádraig Doyle", mobile: "087 1", email: "pd@doyle.ie" }) });
  assert.deepEqual(await r.json(), { ok: true, emailed: true });
  const note = mock.seen.at(-1);
  assert.equal(note.url, "/emails"); assert.deepEqual(note.body.to, ["boss@example.ie"]); assert.equal(note.body.reply_to, "pd@doyle.ie");
  const link = new URL(note.body.text.match(/http:\/\/\S+approve\.html\S+/)[0]);
  const id = link.searchParams.get("id"), t = link.searchParams.get("t");
  const approve = action => fetch(BASE + "/api/approve", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, t, action }) });
  assert.equal((await (await approve("view")).json()).request.name, "Pádraig Doyle");
  const a = await (await approve("approve")).json();
  assert.equal(a.emailed, true); assert.match(a.installer.code, /^HMG-/);
  const sent = mock.seen.at(-1);
  assert.deepEqual(sent.body.to, ["pd@doyle.ie"]); assert.ok(sent.body.text.includes(a.installer.code));
  assert.equal((await approve("approve")).status, 404, "the link only works once");
});

test("fault trends: each question is saved, counted per unit and installer, and Claude writes the weekly summary", async () => {
  await stop(app);
  mock.server.close();
  mock = await startMock(MOCK, { reply: "**Fault:** H62. That isn't covered in the manuals on file.\nContact Heat Merchants Technical Support with the model, serial number, fault code, and the checks completed so far." });
  app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "shared1", ADMIN_CODE: "admin-secret", DAILY_QUESTION_LIMIT: "0", KV_REST_API_URL: "", UPSTASH_REDIS_REST_URL: "", CRON_SECRET: "cron-xyz" });
  const admin = body => fetch(BASE + "/api/admin", { method: "POST", headers: { "Content-Type": "application/json", "X-Admin-Code": "admin-secret" }, body: JSON.stringify(body) });
  const { installer: a } = await (await admin({ action: "add", name: "Seán Murphy" })).json();
  for (let i = 0; i < 3; i++) await events(await ask({ unit: "J", text: "h62 again after start-up" }, { "X-Access-Code": a.code }));
  await events(await ask({ unit: "B", text: "Pd showing on the outdoor unit" }, { "X-Access-Code": a.code }));
  await events(await ask({ unit: "B", text: "What does it mean?", extra: { code: "H02.23" } }, { "X-Access-Code": "shared1", "X-Device-Id": "abcd1234-phone" }));

  const thisWeek = (await (await admin({ action: "trends" })).json()).weeks[0].week;
  const t = await (await admin({ action: "trends", week: thisWeek })).json();
  assert.equal(t.current, true); assert.equal(t.summary, null);
  assert.equal(t.stats.total, 5); assert.equal(t.stats.installers, 2); assert.equal(t.stats.unanswered, 5); assert.equal(t.stats.escalated, 5);
  assert.deepEqual(t.stats.codes.map(c => [c.unit, c.code, c.n]), [["J", "H62", 3], ["B", "H02.23", 1], ["B", "Pd", 1]]);
  assert.deepEqual(t.stats.units.map(u => [u.unit, u.n]), [["J", 3], ["K", 0], ["B", 2]]);
  const sean = t.stats.people.find(p => p.name === "Seán Murphy");
  assert.equal(sean.n, 4); assert.deepEqual(sean.repeats, [{ unit: "J", code: "H62", n: 3 }]);
  assert.ok(t.stats.people.some(p => p.name === "Phone abcd (no account)"));
  assert.equal(t.stats.unansweredList[0].q, "What does it mean?");

  mock.seen.length = 0;
  const w = await (await admin({ action: "trends_write", week: thisWeek })).json();
  assert.equal(w.summary.questions, 5); assert.ok(w.summary.text.length > 0);
  const { body } = mock.seen[0];
  assert.equal(body.model, "claude-opus-5-5"); assert.deepEqual(body.output_config, { effort: "low" });
  assert.match(body.system, /weekly report/);
  assert.match(body.messages[0].content, /J \| H62 \| Seán Murphy \| covered: no \| escalated \| h62 again/);

  // the Monday job: refused without Vercel's secret; last week had no questions, so nothing is written
  assert.equal((await fetch(BASE + "/api/trends")).status, 401);
  const cron = await (await fetch(BASE + "/api/trends", { headers: { Authorization: "Bearer cron-xyz" } })).json();
  assert.equal(cron.empty, true); assert.equal(mock.seen.length, 1);
});
