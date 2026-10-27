// Builds the app's knowledge from the files in source/.
//   data/knowledge.json    full knowledge (manual pages and all), read only by the server for Ask
//   public/knowledge.json  the small part the screens need (fault lists, controller tasks, diagrams)
// Run with `npm run build`. Vercel runs it on every deploy, so editing a file in source/
// (for example source/hmg-field-notes.md) and pushing is enough to update the app.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const S = (...p) => path.join(root, "source", ...p);
const read = (...p) => fs.readFileSync(S(...p), "utf8");

/* Manual markdown files mark each printed page with "--- Page N ---". */
function pages(file) {
  const out = {};
  let cur = null, buf = [];
  for (const line of file.split(/(?<=\n)/)) {
    const m = line.match(/^--- Page (\d+) ---/);
    if (m) {
      if (cur !== null) out[cur] = buf.join("").trim();
      cur = +m[1]; buf = [];
    } else if (cur !== null) buf.push(line);
  }
  if (cur !== null) out[cur] = buf.join("").trim();
  return out;
}
const between = (t, a, b) => t.slice(t.indexOf(a), t.indexOf(b)).trim();

/* ---------- Panasonic ---------- */
const J = pages(read("manuals/panasonic/panasonic-mini-monobloc-r32-j-series-service-manual.md"));
const K = pages(read("manuals/panasonic/panasonic-k-series-hydromodule-tank-installation-manual.md"));
const K2 = pages(read("manuals/panasonic/panasonic-k-series-service-manual.md"));
const K3 = pages(read("manuals/panasonic/panasonic-k-series-tank-service-manual.md"));
const T = pages(read("manuals/panasonic/panasonic-j-series-t-cap-9-12kw-service-manual.md"));
const L = pages(read("manuals/panasonic/panasonic-l-series-r290-service-manual.md"));

// Self-diagnosis pages for each code, from the section 19.5.x headings, e.g. "19.5.25 Outdoor High Pressure Protection (H98 / F95)"
// (18.5.x in the T-Cap and L-series manuals). Each section runs to the page before the next one starts; `last` is the last page of the final section.
function diagFinder(P, last, sec = "19") {
  const starts = {};
  for (const p of Object.keys(P).map(Number).sort((a, b) => a - b))
    for (const m of P[p].matchAll(new RegExp(`^\\s*${sec}\\.5\\.\\d+ .*?\\(([HF]\\d\\d(?: \\/ [HF]\\d\\d)*)\\)`, "gm")))
      for (const c of m[1].split(" / ")) if (!(c in starts)) starts[c] = p;
  const sp = [...new Set(Object.values(starts))].sort((a, b) => a - b);
  return code => {
    if (!(code in starts)) return [];
    const s = starts[code], nxt = sp.filter(x => x > s), end = nxt.length ? nxt[0] : (last || s) + 1;
    return Array.from({ length: end - s }, (_, i) => s + i);
  };
}
const jDiag = diagFinder(J);
const HPAGE = new Set(["F12", "F14", "F15", "F16"]);
const faults = JSON.parse(read("j-series-faults.json")).map(f => ({
  ...f, tablePage: f.code[0] === "H" || HPAGE.has(f.code) ? 164 : 165, diagPages: f.code === "F24" ? [199, 200] : jDiag(f.code),
}));
// K-series error codes table (SM pp.209-210): H codes, F12-F16 and H98/F95 are on p.209, F20 onwards on p.210.
const kDiag = diagFinder(K2, 258);
const kfaults = JSON.parse(read("k-series-faults.json")).map(f => ({
  ...f, tablePage: f.code[0] === "H" || HPAGE.has(f.code) || f.code === "F95" ? 209 : 210, diagPages: kDiag(f.code),
}));

// J-series T-Cap error codes table (T-Cap SM pp.164-165: H codes, F12-F16 and H98/F95 on p.164, F20 onwards on p.165), checks in section 18.5 (pp.166-211).
const tDiag = diagFinder(T, 211, "18");
const tfaults = JSON.parse(read("t-cap-faults.json")).map(f => ({
  ...f, tablePage: f.code[0] === "H" || HPAGE.has(f.code) || f.code === "F95" ? 164 : 165, diagPages: tDiag(f.code),
}));

// L-series R290 error codes table (L-series SM pp.237-238: H codes, F12-F16 and H98/F95 on p.237, F20 onwards on p.238), checks in section 18.5 (pp.239-286).
const lDiag = diagFinder(L, 286, "18");
const lfaults = JSON.parse(read("l-series-faults.json")).map(f => ({
  ...f, tablePage: f.code[0] === "H" || HPAGE.has(f.code) || f.code === "F95" ? 237 : 238, diagPages: lDiag(f.code),
}));

/* ---------- Baxi Assure HP55 outdoor unit: quick reference and error codes ---------- */
const BXF = read("manuals/baxi/baxi-assure-hp55-r290-monobloc-installation-user-service-manual.md");
const BXP = pages(BXF);
const bxq = between(BXF, "# Part 1", "# Part 2");
const bxfaults = [];
{
  let grp = null, pg = null;
  for (const line of between(bxq, "## 1.2", "## 1.3").split("\n")) {
    let m = line.match(/^\*\*(.+?) \(Tab\.\d+, pp?\.(\d+)/);
    if (m) { grp = m[1]; pg = +m[2]; continue; }
    m = line.match(/^\| (\w+) \| (.+?) \| (UI \+ PCB|PCB) \|$/);
    if (m && m[1] !== "Code") {
      let page = pg;
      // the inverter table runs over two pages; codes after L43 are on p.59
      if (grp.startsWith("Inverter") && bxfaults.some(f => f.group === grp && f.code === "L43")) page = 59;
      bxfaults.push({ code: m[1], meaning: m[2], shownOn: m[3], group: grp, tablePage: page });
    }
  }
}

/* ---------- Baxi ASHP Control (indoor unit / controller) ---------- */
const CTF = read("manuals/baxi/baxi-ashp-control-indoor-unit-installation-user-service-manual.md");
const CTP = pages(CTF);
const ctq = between(CTF, "# Part 1", "## 1.4");
const kinds = { A: "Warning", H: "Blocking", E: "Lockout" };
const ctfaults = [...between(CTF, "## 1.4", "# Part 2").matchAll(/^- \*\*([AHE]\d\d\.\d+)\*\* \(p\.(\d+)(, ODU)?\): (.*?)(?: — (.*))?$/gm)]
  .map(m => ({ code: m[1], tablePage: +m[2], odu: !!m[3], meaning: m[4], checks: m[5] || "", type: kinds[m[1][0]] }));

/* ---------- HMG guidance, navigation references, diagrams ---------- */
const bxnav = read("manuals/baxi/baxi-controller-navigation.md");
const nav = read("manuals/panasonic/panasonic-controller-navigation.md");
const fn = read("hmg-field-notes.md");
const sizing = read("hmg-primary-pipe-sizing.md");
const clearances = read("hmg-outdoor-unit-clearances.md");
const weatherComp = read("hmg-weather-compensation.md");
const volume = read("hmg-buffer-volume.md");
// HMG radiator list (Warmhaus Standard steel panel radiators): output at ΔT 50 and n per radiator
const radiatorText = read("hmg-radiators.md");
const radiators = JSON.parse(read("warmhaus-radiators.json")).radiators;
// HMG quick survey: heat pump selection bands per unit and default room temperatures (Donal Reilly 27/10/2026)
const surveyText = read("hmg-quick-survey.md");
const survey = JSON.parse(read("hmg-heat-pump-sizing.json"));
delete survey._note;
delete survey.cylinders?._note;
const zones = read("hmg-r290-exclusion-zones.md");
const wiring = JSON.parse(read("wiring-index.json"));
const commFile = read("hmg-commissioning-panasonic.md");

// J-series spare parts (SM section 22, pp.237-246): one entry per ref number, with the part number for each model
// and the exploded views it's drawn in. The views get unit/key so the app can show them like the wiring diagrams.
// Both units get the same shape for the app: models (the picker), views, and parts with the number per model in `no`
// (null = not fitted on that model). A part belongs to the models whose list it is in (J-series: one list for all three).
const jparts = JSON.parse(read("j-series-parts.json"));
const kparts = JSON.parse(read("k-series-parts.json"));
const tparts = JSON.parse(read("t-cap-parts.json"));
const lparts = JSON.parse(read("l-series-parts.json"));
const parts = {
  J: {
    models: [["05", "5 kW", "WH-MDC05J3E5"], ["07", "7 kW", "WH-MDC07J3E5"], ["09", "9 kW", "WH-MDC09J3E5"]].map(([id, label, model]) => ({ id, label, model, list: "J" })),
    views: jparts.views.map(v => ({ ...v, list: "J", unit: "J", key: "J" })),
    parts: jparts.parts.map(x => ({ ...x, list: "J", no: { "05": x.part05, "07": x.part07, "09": x.part09 }, qtyBy: { "05": x.qty05, "07": x.qty0709, "09": x.qty0709 } })),
  },
  K: { models: kparts.models, views: kparts.views.map(v => ({ key: "K2", ...v, unit: "K" })), parts: kparts.parts },
  // T-Cap: two lists (water system, refrigerant system) and both models show both, so a model has `lists`, not `list`
  T: { models: tparts.models, lists: tparts.lists, views: tparts.views.map(v => ({ ...v, key: "T", unit: "T" })), parts: tparts.parts },
  // L-series: the E51 tank unit list and one outdoor list for the 5, 7 and 9 kW, like the K-series
  L: { models: lparts.models, views: lparts.views.map(v => ({ ...v, key: "L", unit: "L" })), parts: lparts.parts },
};

// Component identifier (Design › Components): labelled drawings from the manuals and what each numbered part is.
// Drawings get unit so the app can show them like the wiring diagrams.
const { _about, ...compSrc } = JSON.parse(read("components.json"));
const components = Object.fromEntries(Object.entries(compSrc).map(([u, c]) => [u, { ...c, drawings: c.drawings.map(d => ({ ...d, unit: u })) }]));

// Commissioning tick list: "# Part A" = J-series, "# Part B" = K-series, "# Part C" = J-series T-Cap, "# Part D" = L-series; "## " stages; each "- **Step.** text" is one tick box.
// "HMG TO CONFIRM" marks a setting HMG hasn't given a value for yet.
const commPart = l => commFile.split(/^(?=# Part [ABCD]\b)/m).find(t => t.startsWith("# Part " + l)).replace(/\n---\s*$/, "").trim();
const commText = { J: commPart("A"), K: commPart("B"), T: commPart("C"), L: commPart("D") };
const commissioning = Object.fromEntries(Object.entries(commText).map(([u, t]) => [u,
  t.split(/^## /m).slice(1).map(sec => ({
    stage: sec.split("\n", 1)[0].trim(),
    steps: [...sec.matchAll(/^- \*\*(.+?)\*\* (.*)$/gm)].map((m, i) => ({
      id: sec.split("\n", 1)[0].trim().split(".")[0] + "." + (i + 1),
      title: m[1].replace(/\.$/, ""), text: m[2], confirm: m[2].includes("HMG TO CONFIRM"),
    })),
  }))]));

// Field notes, structured for the fault cards: codes from the Symptoms line, units from the Product line.
const fnotes = fn.split(/^## /m).slice(1).map(sec => {
  const title = sec.split("\n", 1)[0].trim();
  const fld = name => {
    const m = sec.match(new RegExp("^- \\*\\*" + name + ".*?:\\*\\*(.*?)(?=^- \\*\\*|$(?![\\s\\S]))", "ms"));
    return m ? m[1].trim() : "";
  };
  const prod = fld("Product"), sym = fld("Symptoms");
  return {
    title, product: prod,
    // "J-series T-Cap" is the T-Cap only; "J-series" on its own (or "Mini Monobloc") is the Mini Monobloc
    units: [["J", /J-series(?! T-Cap)|Mini Monobloc/], ["T", /T-Cap/], ["K", /K-series/], ["L", /L-series/], ["B", /Baxi/]].filter(([, k]) => k.test(prod)).map(([u]) => u),
    codes: [...new Set(sym.match(/\b[A-Z]\d{2}(?:\.\d+)?\b/g) || [])].sort(),
    cause: fld("Cause"), fix: fld("Fix"), confirmed: fld("Confirmed"),
  };
});

const TITLES = {
  J: { title: "Panasonic Service Manual, Mini Monobloc R32 J-series (WH-MDC05/07/09J3E5)", cite: "J-series SM" },
  T: { title: "Panasonic Service Manual, Monobloc T-Cap J-series 9 and 12 kW (WH-MXC09J3E5, WH-MXC12J6E5), Order No PAPAMY2101001CE (2021)", cite: "T-Cap SM" },
  L: { title: "Panasonic Service Manual, Hydromodule + Tank R290 L-series (tank unit WH-ADC0509L3E51, outdoor WH-WDG05LE5 / WDG07LE5 / WDG09LE5), Order No PCZ2504005CE (2025)", cite: "L-series SM" },
  K: { title: "Panasonic Installation Manual, Hydromodule + Tank K-series (WH-ADC0309K3E5/K6E5, WH-UDZ03-09KE5)", cite: "K-series IM" },
  K2: { title: "Panasonic Service Manual, Hydromodule + Tank K-series (outdoor WH-UDZ03/05/07/09KE5, tank unit WH-ADC0309K0E5A), Order No PCZ2508021CE (2025)", cite: "K-series SM" },
  K3: { title: "Panasonic Service Manual, Hydromodule + Tank K-series (tank unit WH-ADC0309K3E5/K6E5, outdoor WH-UDZ03/05/07/09KE5), Order No PAPAMY2302047CE (2023)", cite: "K-series tank SM" },
  B: { title: "Baxi Installation, user and service manual, Assure HP55 R290 monobloc outdoor unit (7890198 v03)", cite: "Baxi HP55 IM" },
  B2: { title: "Baxi ASHP Control (indoor unit / controller) installation, user and service manual (7887625 v04)", cite: "Baxi ASHP Control IM" },
};
const full = {
  J: { ...TITLES.J, pages: J },
  T: { ...TITLES.T, pages: T },
  L: { ...TITLES.L, pages: L },
  K: { ...TITLES.K, pages: K },
  K2: { ...TITLES.K2, pages: K2 },
  K3: { ...TITLES.K3, pages: K3 },
  B: { ...TITLES.B, pages: BXP, quickref: bxq, faults: bxfaults, nav: bxnav, ctlFaults: ctfaults },
  B2: { ...TITLES.B2, pages: CTP, quickref: ctq },
  nav, sizing, wiring, clearances, weatherComp, volume, radiatorText, radiators, surveyText, survey, zones, commText, fieldNotes: fn, fieldNoteList: fnotes, faults, kfaults, tfaults, lfaults, parts, components,
};
const lite = {
  J: TITLES.J, T: TITLES.T, L: TITLES.L, K: TITLES.K, K2: TITLES.K2, K3: TITLES.K3, B2: TITLES.B2,
  B: { ...TITLES.B, faults: bxfaults, nav: bxnav, ctlFaults: ctfaults },
  nav, wiring, commissioning, radiators, survey, fieldNoteList: fnotes, faults, kfaults, tfaults, lfaults, parts, components,
};
fs.mkdirSync(path.join(root, "data"), { recursive: true });
fs.writeFileSync(path.join(root, "data", "knowledge.json"), JSON.stringify(full));
fs.writeFileSync(path.join(root, "public", "knowledge.json"), JSON.stringify(lite));
console.log(`Built knowledge: J ${Object.keys(J).length} pages, T-Cap ${Object.keys(T).length} (${tfaults.length} codes, ${parts.T.parts.length} parts), L-series ${Object.keys(L).length} (${lfaults.length} codes, ${parts.L.parts.length} parts), K IM ${Object.keys(K).length}, K SM ${Object.keys(K2).length} (${kfaults.length} codes), K tank SM ${Object.keys(K3).length}, Baxi HP55 ${Object.keys(BXP).length} (${bxfaults.length} codes), ` +
  `ASHP Control ${Object.keys(CTP).length} (${ctfaults.length} codes), ${faults.length} J-series codes, ${fnotes.length} field notes, ${radiators.length} radiators, ${wiring.length} diagrams, ${parts.J.parts.length} J-series parts, ${parts.K.parts.length} K-series parts, ` +
  `components J ${components.J.components.length}, T ${components.T.components.length}, L ${components.L.components.length}, K ${components.K.components.length}, Baxi ${components.B.components.length}, ` +
  `commissioning J ${commissioning.J.flatMap(s => s.steps).length} steps, T ${commissioning.T.flatMap(s => s.steps).length}, L ${commissioning.L.flatMap(s => s.steps).length}, K ${commissioning.K.flatMap(s => s.steps).length}.`);
