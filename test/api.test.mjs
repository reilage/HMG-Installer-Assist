// End-to-end tests of the api/ functions through dev-server.mjs, against a stand-in Claude API (no key or cost needed).
// Run with `npm test`.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { startMock } from "./mock-claude.mjs";

const MOCK = 4311, APP = 4312, BASE = `http://localhost:${APP}`;
let mock, app;

async function startApp(env) {
  const p = spawn(process.execPath, ["dev-server.mjs"], { env: { ...process.env, PORT: String(APP), ANTHROPIC_BASE_URL: `http://localhost:${MOCK}`, STORED_ANSWERS: "off", ...env }, stdio: ["ignore", "pipe", "inherit"] });
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

test("a code typed or dictated in Ask gets its table row and check pages, and never crosses units", async () => {
  mock.seen.length = 0;
  await events(await ask({ unit: "J", text: "Can you help with h 91" })); // speech recognition splits codes
  let last = mock.seen[0].body.messages.at(-1).content;
  assert.match(last, /^Manual excerpts for this question:\n\n\[J-series SM, p\.164\][\s\S]*\[J-series SM, p\.188\]/);
  assert.match(last, /Error codes table row: H91 \| Tank heater OLP abnormality/);
  assert.match(last, /Installer's message: Can you help with H91$/);

  mock.seen.length = 0;
  await events(await ask({ unit: "K", text: "help with H 70" }));
  last = mock.seen[0].body.messages.at(-1).content;
  assert.match(last, /^Manual excerpts for this question:\n\n\[K-series SM, p\.209\]/);
  assert.match(last, /Error codes table row: H70 \| Back-up heater OLP abnormality .*\(K-series SM p\.209/);
  assert.doesNotMatch(last, /J-series SM/);

  mock.seen.length = 0;
  await events(await ask({ unit: "T", text: "help with h 42" }));
  last = mock.seen[0].body.messages.at(-1).content;
  assert.match(last, /^Manual excerpts for this question:\n\n\[T-Cap SM, p\.164\]/);
  assert.match(last, /Error codes table row: H42 \| .*\(T-Cap SM p\.164/);
  assert.doesNotMatch(last, /J-series SM|K-series SM/);

  mock.seen.length = 0;
  await events(await ask({ unit: "T", text: "F29 on the screen" }));
  assert.match(mock.seen[0].body.messages.at(-1).content, /F29 looks like a Panasonic fault code, but it isn't in the T-Cap error codes table/);

  mock.seen.length = 0;
  await events(await ask({ unit: "L", text: "h 76 on the L-series" }));
  last = mock.seen[0].body.messages.at(-1).content;
  assert.match(last, /^Manual excerpts for this question:\n\n\[L-series SM, p\.23[78]\]/);
  assert.match(last, /Error codes table row: H76 \| .*\(L-series SM p\.23[78]/);
  assert.doesNotMatch(last, /J-series SM|K-series SM|T-Cap SM/);

  mock.seen.length = 0;
  await events(await ask({ unit: "L", text: "F29 on the screen" }));
  last = mock.seen[0].body.messages.at(-1).content;
  assert.match(last, /F29 \(low discharge superheat\) isn't in the L-series error codes table/);
  assert.match(last, /\[L-series SM, p\.276\]/);

  mock.seen.length = 0;
  await events(await ask({ unit: "K", text: "help with H01" }));
  last = mock.seen[0].body.messages.at(-1).content;
  assert.match(last, /H01 looks like a Panasonic fault code, but it isn't in the K-series error codes table/);

  mock.seen.length = 0;
  await events(await ask({ unit: "B", text: "A06 111 on the screen" }));
  last = mock.seen[0].body.messages.at(-1).content;
  assert.match(last, /^Manual excerpts for this question:\n\n\[Baxi ASHP Control IM, p\.\d+\]/);
  assert.match(last, /ASHP Control error list row: A06\.111/);
});

test("Baxi questions get the Baxi rules and both Baxi manuals", async () => {
  mock.seen.length = 0;
  await events(await ask({ unit: "B", text: "H02.23 on the controller, what do I check?" }));
  const { body } = mock.seen[0];
  assert.match(body.system[0].text, /BAXI HP55 OUTDOOR UNIT QUICK REFERENCE/);
  assert.match(body.system[0].text, /R290 is extremely flammable A3/);
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

test("the HMG volume, bypass and volumiser rule is in the rules, with each unit's own total volume", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "T", "B", "K", "L"]) await events(await ask({ unit, text: "Do I need a buffer on this job?" }));
  const [j, t, b, k, l] = mock.seen.map(s => s.body.system[0].text);
  for (const x of [j, t, b, k, l]) {
    assert.match(x, /HMG DESIGN GUIDANCE \(system volume, bypass, volumiser\)/);
    assert.match(x, /minimum TOTAL volume available to the heat pump/);
    assert.match(x, /HMG prefer to avoid a hydraulic break/);
    assert.match(x, /about 265 m of open loop for 30 L and 442 m for 50 L/);
    assert.match(x, /With a 4-port buffer, no bypass is needed between the heat pump and the buffer, but one is required on the secondary side/);
  }
  assert.match(j, /Mini Monobloc \(5, 7 and 9 kW\) it is 30 L/);
  assert.match(t, /T-Cap \(9 and 12 kW\) it is 50 L/);
  assert.match(b, /30 L on the 4 and 6 kW and 50 L on the 8, 11 and 13 kW/);
  assert.match(k, /K-series 3, 5, 7 and 9 kW it is 30 L/);
  assert.match(l, /L-series 5, 7 and 9 kW it is 30 L/);
});

test("the HMG radiator list (Warmhaus) is in the rules for every unit, with the output at 45 °C flow worked out", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "T", "B", "K", "L"]) await events(await ask({ unit, text: "What radiator do I need for 1200 W at 45 degrees?" }));
  for (const x of mock.seen.map(s => s.body.system[0].text)) {
    assert.match(x, /HMG RADIATOR LIST \(Warmhaus/);
    assert.match(x, /Source: HMG radiator list \(Warmhaus\)/);
    assert.match(x, /45\/40 °C, mean water 42\.5 °C, and a 21 °C room/);
    assert.match(x, /never less/);
    assert.match(x, /Installers prefer Type 22.*always give the closest Type 22 first, then the closest Type 33/);
    // Type 22 600 x 1000: 1710 W at ΔT 50, n 1.3 → 1710 × (21.5/50)^1.3 = 571 W at 21 °C, 1710 × (24.5/50)^1.3 = 676 W at 18 °C
    assert.match(x, /U28195 \| Type 22 \| 600 H x 1000 L mm \| 105 mm deep \| ΔT50 1710 W \| n 1\.3 \| at 45 °C flow: 571 W \(21 °C room\), 676 W \(18 °C room\)/);
  }
});

test("each Panasonic unit gets only its own HMG commissioning procedure, Baxi gets none", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "K", "B", "T", "L"]) await events(await ask({ unit, text: "Talk me through commissioning" }));
  const [j, k, b, t, l] = mock.seen.map(s => s.body.system[0].text);
  assert.match(l, /HMG COMMISSIONING PROCEDURE \(L-series R290\)/);
  assert.match(l, /L-series SM p\./);
  assert.doesNotMatch(l, /HMG COMMISSIONING PROCEDURE \(K-series\)|Built-in vessel is 6 L/);
  assert.match(t, /HMG COMMISSIONING PROCEDURE \(J-series T-Cap\)[\s\S]*Built-in vessel is 10 L/);
  assert.doesNotMatch(t, /HMG COMMISSIONING PROCEDURE \(J-series Mini|Built-in vessel is 6 L/);
  assert.match(j, /HMG COMMISSIONING PROCEDURE \(J-series Mini Monobloc\)[\s\S]*Built-in vessel is 6 L/);
  assert.doesNotMatch(j, /Built-in vessel is 10 L/);
  assert.match(k, /HMG COMMISSIONING PROCEDURE \(K-series\)[\s\S]*Built-in vessel is 10 L/);
  assert.doesNotMatch(k, /Built-in vessel is 6 L/);
  for (const t of [j, k]) assert.match(t, /never invent an HMG value/);
  assert.doesNotMatch(b, /HMG COMMISSIONING PROCEDURE/);
  assert.match(b, /HMG has no Baxi commissioning procedure yet/);
});

test("each Panasonic unit's parts list is in its own rules only, with the part number per model", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "K", "B", "T", "L"]) await events(await ask({ unit, text: "Part number for the water PCB?" }));
  const [j, k, b, t, l] = mock.seen.map(s => s.body.system[0].text);
  assert.match(l, /L-SERIES PARTS LIST/);
  assert.match(l, /--- TANK UNIT WH-ADC0509L3E51 \(list "in"\) ---\n1 CHASSIS - COMPLETE \| ACXD50C04840 \| qty 1 \| l-parts-tank-1 \| SM p\.314$/m);
  assert.match(l, /--- OUTDOOR WH-WDG05LE5 \/ WH-WDG07LE5 \/ WH-WDG09LE5 .*---\n1 BASE PAN ASSY \| 05\/07\/09 all ACXD52K05240 \| qty 1 \| keep in stock/m);
  for (const x of [j, k, b, t]) assert.doesNotMatch(x, /L-SERIES PARTS LIST/);
  for (const x of ["J-SERIES PARTS LIST", "K-SERIES PARTS LIST", "T-CAP PARTS LIST"]) assert.doesNotMatch(l, new RegExp(x));
  assert.match(t, /T-CAP PARTS LIST/);
  assert.match(t, /--- WATER SYSTEM \(list "w"\) ---/); assert.match(t, /--- REFRIGERANT SYSTEM \(list "r"\) ---/);
  assert.match(t, /^8 THERMOSTAT .*\| qty 09: 2, 12: 3/m);
  for (const x of [j, k, b]) assert.doesNotMatch(x, /T-CAP PARTS LIST/);
  for (const x of ["J-SERIES PARTS LIST", "K-SERIES PARTS LIST"]) assert.doesNotMatch(t, new RegExp(x));
  assert.match(j, /J-SERIES PARTS LIST/);
  assert.match(j, /^58 PUMP \(water pump circulating pump circulator\) \| all models ACXB53-00390 \| qty 1 \| keep in stock \| j-parts-water$/m);
  assert.match(j, /^63 ELECTRONIC CONTROLLER \(MAIN\) - WATER .*\| 05: ACXA73C58300R, 07: ACXA73C58310R, 09: ACXA73C58320R \|/m);
  assert.match(j, /^33 ELECTRO MAGNETIC SWITCH .*05: not fitted, 07: CWA001023, 09: CWA001023 \| qty 05: 0, 07\/09: 1/m);
  assert.match(j, /confirm the number with the Panasonic parts supplier/);
  assert.match(k, /K-SERIES PARTS LIST/);
  assert.match(k, /--- OUTDOOR WH-UDZ03KE5 \(3 kW\) ---\n1 CHASSY ASS’Y \| CWD52K1317 \| qty 1 \| k-parts-o03 \| SM p\.300$/m);
  assert.match(k, /^37 ELECTRONIC CONTROLLER - MAIN \(PCB main board circuit board\) \| 05: ACXA73C91120R, 07: ACXA73C91130R, 09: ACXA73C91140R \| qty 1 \| keep in stock \| k-parts-o0509 \| SM p\.303\/305$/m);
  assert.match(k, /^7 FAN MOTOR, DC 60W 3PH \| 05\/07\/09 all L6CBYYYL0422 \|/m);
  assert.match(k, /--- TANK UNIT WH-ADC0309K3E5 \/ WH-ADC0309K6E5 \(from the K-series tank SM\) ---\n1 CHASSIS - COMPLETE \| K3E5\/K6E5 all ACXD50C04840 \| qty 1 \| k-parts-tank-cabinet \| tank SM p\.441$/m);
  assert.match(k, /^40 HEATER ASS’Y \(back-up heater element booster\) \| K3E5: ACXA34K00460, K6E5: ACXA34K00530 \|/m);
  assert.match(k, /^76 TERMINAL BOARD ASS’Y \(A,B\) .*\| K3E5: not fitted, K6E5: CWA28K1238 \| qty K3E5: 0, K6E5: 1/m);
  assert.match(k, /^33 RECEIVER \(expansion vessel 10 L heating circuit\) \|/m);
  assert.doesNotMatch(k, /K0E5A ---|ACXB56C01211/, "no K0E5A tank unit list: HMG's tank unit is the K3E5/K6E5");
  assert.match(k, /Panasonic service manual: confirm the number with the Panasonic parts supplier/);
  for (const t of [j, b]) assert.doesNotMatch(t, /K-SERIES PARTS LIST/);
  assert.doesNotMatch(k, /J-SERIES PARTS LIST/);
  assert.doesNotMatch(b, /J-SERIES PARTS LIST/); assert.match(b, /no parts list on file/);
});

test("K-series questions use both K manuals, and the fault card sends the service manual pages", async () => {
  mock.seen.length = 0;
  await events(await ask({ unit: "K", text: "F15 on the outdoor unit, fan not turning" }));
  const sent = JSON.stringify(mock.seen[0].body.messages);
  assert.match(sent, /\[K-series SM, p\.240\]/, "F15 self-diagnosis page");
  mock.seen.length = 0;
  await events(await ask({ unit: "K", text: "H98 on the K-series. What do I check?", extra: { code: "H98", pages: [{ m: "K2", p: 209 }, { m: "K2", p: 235 }, { m: "J", p: 164 }] } }));
  const sent2 = JSON.stringify(mock.seen[0].body.messages);
  assert.match(sent2, /\[K-series SM, p\.209\][\s\S]*\[K-series SM, p\.235\]/);
  assert.doesNotMatch(sent2, /J-series SM/, "never another unit's manual");
  const k = mock.seen[0].body.system[0].text;
  assert.match(k, /error codes table SM pp\.209-210/);
  assert.match(k, /K-series SM installation diagram \(p\.94\) gives the same figures/);
  assert.doesNotMatch(k, /K-series fault codes are not covered/);
});

test("each unit's rules list only its own components, with drawing numbers and fault codes", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "K", "B", "T", "L"]) await events(await ask({ unit, text: "What is the valve on top of the unit?" }));
  const [j, k, b, t, l] = mock.seen.map(s => s.body.system[0].text);
  assert.match(l, /^l-comp-/m);
  assert.doesNotMatch(l, /j-comp-|k-comp-|t-comp-|b-comp-/); for (const x of [j, k, b, t]) assert.doesNotMatch(x, /l-comp-/);
  assert.match(t, /^t-comp-main no\.\d+.* \| Flow sensor/m);
  assert.doesNotMatch(t, /j-comp-|k-comp-|b-comp-/); assert.doesNotMatch(j, /t-comp-/);
  assert.match(j, /^j-comp-main no\.8, j-comp-cycle \(labelled\) \| Flow sensor \(water flow switch\) \| .* \| codes H62 \| SM p\.37, p\.140$/m);
  assert.match(k, /^k-comp-main no\.13, k-parts-tank-water no\.33 \| Expansion vessel \| .*10 L/m);
  assert.match(b, /^b-comp-hydro-small no\.7, b-comp-hydro-large no\.7, b-comp-refrigerant no\.23 \| Flow switch \| .* \| codes E0 E8 PF \|/m);
  assert.doesNotMatch(j, /k-comp-main|b-comp-/); assert.doesNotMatch(k, /j-comp-|b-comp-/); assert.doesNotMatch(b, /j-comp-|k-comp-main/);
});

test("exclusion zones and the R290 flag are in the L-series and Baxi rules only", async () => {
  mock.seen.length = 0;
  for (const unit of ["J", "T", "K", "L", "B"]) await events(await ask({ unit, text: "How far from a window can the outdoor unit go?" }));
  const [j, t, k, l, b] = mock.seen.map(s => s.body.system[0].text);
  for (const x of [l, b]) { assert.match(x, /=== HMG R290 EXCLUSION ZONE GUIDANCE ===/); assert.match(x, /R290 is extremely flammable A3/); }
  assert.match(l, /Panasonic L-series protective zone, L-series SM p\.168: never use the Baxi perimeter figures/);
  assert.match(b, /Baxi HP55 protective perimeter, Baxi HP55 IM pp\.30-31: never use the Panasonic L-series figures/);
  for (const x of [j, t, k]) { assert.doesNotMatch(x, /EXCLUSION ZONE GUIDANCE/); assert.match(x, /R32 is mildly flammable A2L/); }
  assert.match(l, /For the L-series R290 use the L-series figures/);
  assert.match(l, /2025 service manual \(cite "L-series SM p\.N"/);
  const html = await (await fetch(BASE + "/")).text();
  assert.match(html, /<button data-s="ez" aria-pressed="false" hidden>Exclusion zones<\/button>/);
  assert.match(html, /const R290=u=>u==="L"\|\|u==="B";/);
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
  assert.equal(k.K2.pages, undefined, "manual text stays on the server");
  // every manual PDF the Manuals screen lists is there
  const html = await (await fetch(BASE + "/")).text();
  const pdfs = [...html.matchAll(/file:"([^"]+\.pdf)"/g)].map(m => m[1]);
  assert.ok(pdfs.includes("Panasonic-K-series-SM-part3-pp205-306.pdf"));
  assert.ok(pdfs.includes("Panasonic-J-T-Cap-SM-part4-pp160-237.pdf"));
  assert.ok(pdfs.includes("Panasonic-L-series-SM-part3-pp237-333.pdf"));
  assert.equal(k.L.pages, undefined, "manual text stays on the server");
  for (const z of ["l-zone-1-open", "l-zone-2-ground-wall", "l-zone-3-ground-corner", "l-zone-4-wall-mounted", "l-zone-5-wall-corner", "b-perimeter-p31"])
    assert.equal((await fetch(BASE + "/zones/" + z + ".png", { method: "HEAD" })).status, 200, z);
  assert.equal(k.T.pages, undefined, "manual text stays on the server");
  for (const f of pdfs) assert.equal((await fetch(BASE + "/manuals/" + f, { method: "HEAD" })).status, 200, f);
  assert.equal(k.faults.length, 52);
  assert.equal(k.parts.J.parts.length, 100);
  assert.equal(k.kfaults.length, 52);
  assert.deepEqual(k.kfaults.find(f => f.code === "H98").diagPages, [235, 236]);
  assert.equal(k.kfaults.find(f => f.code === "F20").tablePage, 210);
  assert.equal(k.parts.K.parts.length, 211);
  assert.equal(k.parts.K.parts.filter(p => p.list === "tank").length, 91);
  assert.equal(k.tfaults.length, 51);
  assert.ok(!k.tfaults.some(f => f.code === "F29"));
  assert.equal(k.parts.T.parts.length, 108);
  assert.equal(k.lfaults.length, 51);
  assert.ok(!k.lfaults.some(f => f.code === "F29"));
  assert.equal(k.parts.L.parts.length, 243);
  const inList = (m, l) => (m.lists || [m.list]).includes(l);
  for (const u of ["J", "T", "K", "L"]) {
    const P = k.parts[u], lists = new Set(P.models.flatMap(m => m.lists || [m.list])), views = new Set(P.views.map(v => v.id).concat(P.views.map(v => v.view)));
    for (const v of P.views) assert.equal((await fetch(BASE + "/" + v.file)).status, 200, v.file);
    for (const x of P.parts) {
      assert.ok(lists.has(x.list), `${u} ${x.ref} list`);
      for (const v of x.views) assert.ok(views.has(v), `${u} ${x.ref} view ${v}`);
      for (const m of P.models.filter(m => inList(m, x.list))) assert.ok(m.id in x.no, `${u} ${x.list} ${x.ref} has a number for ${m.id}`);
    }
  }
  // component cards point at parts that exist
  for (const u of ["J", "T", "K", "L"]) for (const c of k.components[u].components) for (const r of c.parts || []) {
    const [l, n] = typeof r === "string" ? r.split(":") : [null, r];
    assert.ok(k.parts[u].parts.some(x => x.ref === +n && (!l || x.list === l)), `${u} ${c.name}: part ${r}`);
  }
  for (const u of ["J", "T", "K", "L", "B"]) {
    const C = k.components[u], ids = new Set(C.drawings.map(d => d.id));
    for (const d of C.drawings) assert.equal((await fetch(BASE + "/" + d.file)).status, 200, d.file);
    for (const c of C.components) for (const [d] of c.at) assert.ok(ids.has(d), `${u} ${c.name}: ${d}`);
    // every tap target on a drawing points at a component on that drawing, and sits inside the image
    for (const d of C.drawings) for (const [n, x, y, w, h] of d.spots || []) {
      assert.ok(C.components.some(c => c.name === n || c.at.some(([id, m]) => id === d.id && m === n)), `${d.id} spot ${n}`);
      assert.ok(x >= -10 && y >= -10 && x + w <= d.w + 10 && y + h <= d.h + 10, `${d.id} spot ${n} off the image`);
    }
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
  const left = async h => (await (await fetch(BASE + "/api/config", { headers: h })).json()).questionsLeft;
  assert.equal(await left(phoneA), 0, "the counter shows each phone's own questions left");
  assert.equal(await left(phoneB), 1);
  assert.equal(await left({ "X-Device-Id": "phone-cccccccc" }), 2);
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
  assert.deepEqual(t.stats.units.map(u => [u.unit, u.n]), [["J", 3], ["T", 0], ["L", 0], ["K", 0], ["B", 2]]);
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

test("stored answers: a repeat question is answered from storage, free, until it didn't help", async () => {
  await stop(app);
  mock.server.close();
  mock = await startMock(MOCK);
  app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "", ADMIN_CODE: "admin-secret", DAILY_QUESTION_LIMIT: "2", STORED_ANSWERS: "on", KV_REST_API_URL: "", UPSTASH_REDIS_REST_URL: "" });
  const admin = body => fetch(BASE + "/api/admin", { method: "POST", headers: { "Content-Type": "application/json", "X-Admin-Code": "admin-secret" }, body: JSON.stringify(body) });
  const installer = async name => ({ "X-Access-Code": (await (await admin({ action: "add", name })).json()).installer.code });
  const phone = await installer("Seán Murphy"), p2 = await installer("Aoife Byrne"), other = await installer("Ciarán Walsh"), p4 = await installer("Niamh Kelly");

  // first time: Claude answers and it is stored
  let ev = await events(await ask({ unit: "J", text: "H62, what do I check?" }, phone));
  assert.deepEqual(ev[0], { t: "quota", left: 1 });
  assert.equal(mock.seen.length, 1);
  // same question in other words, and from the fault card: from storage, no Claude call, no question used
  for (const body of [{ unit: "J", text: "what does h62 mean" }, { unit: "J", text: "H62 on the J-series. What do I check?", extra: { code: "H62", pages: [164] } }]) {
    ev = await events(await ask(body, phone));
    assert.equal(ev[0].t, "stored");
    assert.match(ev.filter(e => e.t === "text").map(e => e.v).join(""), /\*\*Fault:\*\* H62 test answer/);
    assert.deepEqual(ev.at(-1), { t: "done", truncated: false });
  }
  assert.equal(mock.seen.length, 1);
  const id = ev[0].id;

  // not the same question: other words, another unit, a follow-up, or a photo all go to Claude
  await events(await ask({ unit: "J", text: "H62 after start-up, what do I check?" }, phone));
  assert.equal(mock.seen.length, 2);
  assert.equal((await ask({ unit: "K", text: "H62, what do I check?" }, phone)).status, 429, "the daily limit still applies to new questions");
  ev = await events(await ask({ unit: "J", text: "H62, what do I check?", history: [{ role: "user", content: "hi" }, { role: "assistant", content: "Hello" }] }, p2));
  assert.equal(ev[0].t, "quota"); assert.equal(mock.seen.length, 3);
  // ...unless it is a button's ready-made question, which stands on its own
  ev = await events(await ask({ unit: "J", text: "H62, what do I check?", standalone: true, history: [{ role: "user", content: "hi" }, { role: "assistant", content: "Hello" }] }, p2));
  assert.equal(ev[0].t, "stored"); assert.equal(mock.seen.length, 3);
  // numbers must match: a 9 kW answer isn't given for 7 kW
  await events(await ask({ unit: "J", text: "What size primary pipe for a 9 kW?" }, p2));
  assert.equal((await ask({ unit: "J", text: "What size primary pipe for a 7 kW?" }, p2)).status, 429);
  ev = await events(await ask({ unit: "J", text: "what size primary pipe for a 9 kW" }, p2));
  assert.equal(ev[0].t, "stored", "stored answers still work once the day's questions are used up");

  // admin sees it with its reuse count, can edit it
  let list = (await (await admin({ action: "answers" })).json()).answers;
  const h62 = list.find(a => a.id === id);
  assert.equal(h62.unit, "J"); assert.equal(h62.code, "H62"); assert.equal(h62.hits, 3); assert.equal(h62.q, "H62, what do I check?");

  // "didn't help": Claude answers afresh, counted as a question, and that answer replaces the stored one
  ev = await events(await ask({ unit: "J", text: "what does h62 mean", fresh: id }, other));
  assert.equal(ev[0].t, "quota"); assert.equal(mock.seen.length, 5);
  list = (await (await admin({ action: "answers" })).json()).answers;
  assert.equal(list.find(a => a.id === id).bad, 1);
  assert.equal(list.find(a => a.id === id).q, "what does h62 mean");

  // an edited answer is what installers get, and it stays when an installer says it didn't help
  await admin({ action: "answer_edit", id, text: "Edited by Donal: check the water pump." });
  ev = await events(await ask({ unit: "J", text: "H62?" }, other));
  assert.equal(ev.find(e => e.t === "text").v, "Edited by Donal: check the water pump.");
  await events(await ask({ unit: "J", text: "H62?", fresh: id }, p4));
  ev = await events(await ask({ unit: "J", text: "H62?" }, other));
  assert.equal(ev.find(e => e.t === "text").v, "Edited by Donal: check the water pump.");

  // reuse shows in the fault trends; delete and clear
  const t = await (await admin({ action: "trends", week: (await (await admin({ action: "trends" })).json()).weeks[0].week })).json();
  assert.equal(t.stats.stored, 6);
  assert.equal((await (await admin({ action: "answer_delete", id })).json()).ok, true);
  assert.equal((await (await admin({ action: "answers" })).json()).answers.some(a => a.id === id), false);
  assert.ok((await (await admin({ action: "answers_clear", unit: "J" })).json()).cleared >= 1);
  assert.deepEqual((await (await admin({ action: "answers" })).json()).answers, []);
});

test("my questions: each installer's questions and answers are kept on their account, by chat, and open free", async () => {
  await stop(app);
  app = await startApp({ ANTHROPIC_API_KEY: "test-key", APP_ACCESS_CODE: "shared-code", ADMIN_CODE: "admin-secret", DAILY_QUESTION_LIMIT: "0", STORED_ANSWERS: "on", KV_REST_API_URL: "", UPSTASH_REDIS_REST_URL: "" });
  const admin = body => fetch(BASE + "/api/admin", { method: "POST", headers: { "Content-Type": "application/json", "X-Admin-Code": "admin-secret" }, body: JSON.stringify(body) });
  const add = async name => (await (await admin({ action: "add", name })).json()).installer;
  const a = await add("Seán Murphy"), b = await add("Aoife Byrne");
  const A = { "X-Access-Code": a.code }, B = { "X-Access-Code": b.code };
  const hist = (body, h) => fetch(BASE + "/api/history", { method: "POST", headers: { "Content-Type": "application/json", ...h }, body: JSON.stringify(body) });

  await events(await ask({ unit: "J", text: "H62, what do I check?", chat: "chat-1" }, A));
  await events(await ask({ unit: "J", text: "and the pump?", chat: "chat-1", history: [{ role: "user", content: "H62, what do I check?" }, { role: "assistant", content: "x" }] }, A));
  await events(await ask({ unit: "J", text: "what does h62 mean", chat: "chat-2" }, A)); // from stored answers: kept too
  await events(await ask({ unit: "B", text: "E0 on the outdoor unit", chat: "chat-3" }, B));

  // each installer sees only their own, newest first, with the unit, code and the start of the answer
  const seen = mock.seen.length;
  let items = (await (await hist({ action: "list" }, A)).json()).items;
  assert.deepEqual(items.map(e => [e.chat, e.unit, e.code, e.q]), [["chat-2", "J", "H62", "what does h62 mean"], ["chat-1", "J", "", "and the pump?"], ["chat-1", "J", "H62", "H62, what do I check?"]]);
  assert.match(items[2].s, /^Fault: H62 test answer/);
  assert.equal(items[0].a, undefined, "the list leaves out the full answers");
  assert.deepEqual((await (await hist({ action: "list" }, B)).json()).items.map(e => e.unit), ["B"]);

  // opening a chat gives the whole conversation with full answers, without calling Claude
  items = (await (await hist({ action: "open", chat: "chat-1" }, A)).json()).items;
  assert.deepEqual(items.map(e => e.q), ["H62, what do I check?", "and the pump?"]);
  assert.match(items[0].a, /\*\*Fault:\*\* H62 test answer/);
  assert.deepEqual((await (await hist({ action: "open", chat: "chat-3" }, A)).json()).items, [], "not another installer's chat");
  assert.equal(mock.seen.length, seen);

  // delete a chat; the shared code has no account; a code that isn't accepted gets nothing
  assert.equal((await (await hist({ action: "delete", chat: "chat-1" }, A)).json()).ok, true);
  assert.deepEqual((await (await hist({ action: "list" }, A)).json()).items.map(e => e.chat), ["chat-2"]);
  const shared = await hist({ action: "list" }, { "X-Access-Code": "shared-code" });
  assert.equal(shared.status, 409); assert.equal((await shared.json()).error, "no_account");
  assert.equal((await hist({ action: "list" })).status, 401);
});
