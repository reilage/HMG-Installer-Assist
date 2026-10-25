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

// self-diagnosis start page for each J-series code (section 19.5.x headings)
const starts = {};
for (const p of Object.keys(J).map(Number).sort((a, b) => a - b))
  for (const m of J[p].matchAll(/^19\.5\.\d+ .*?\(([HF]\d\d)\)/gm))
    if (!(m[1] in starts)) starts[m[1]] = p;
const sp = [...new Set(Object.values(starts))].sort((a, b) => a - b);
function diagPages(code) {
  if (code === "F24") return [199, 200];
  if (!(code in starts)) return [];
  const s = starts[code], nxt = sp.filter(x => x > s), end = nxt.length ? nxt[0] : s + 1;
  return Array.from({ length: end - s }, (_, i) => s + i);
}
const HPAGE = new Set(["F12", "F14", "F15", "F16"]);
const faults = JSON.parse(read("j-series-faults.json")).map(f => ({
  ...f, tablePage: f.code[0] === "H" || HPAGE.has(f.code) ? 164 : 165, diagPages: diagPages(f.code),
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
const wiring = JSON.parse(read("wiring-index.json"));
const commFile = read("hmg-commissioning-panasonic.md");

// Commissioning tick list: "# Part A" = J-series, "# Part B" = K-series; "## " stages; each "- **Step.** text" is one tick box.
// "HMG TO CONFIRM" marks a setting HMG hasn't given a value for yet.
const commPart = l => commFile.split(/^(?=# Part [AB]\b)/m).find(t => t.startsWith("# Part " + l)).replace(/\n---\s*$/, "").trim();
const commText = { J: commPart("A"), K: commPart("B") };
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
    units: [["J", "J-series"], ["K", "K-series"], ["B", "Baxi"]].filter(([, k]) => prod.includes(k)).map(([u]) => u),
    codes: [...new Set(sym.match(/\b[A-Z]\d{2}(?:\.\d+)?\b/g) || [])].sort(),
    cause: fld("Cause"), fix: fld("Fix"), confirmed: fld("Confirmed"),
  };
});

const TITLES = {
  J: { title: "Panasonic Service Manual, Mini Monobloc R32 J-series (WH-MDC05/07/09J3E5)", cite: "J-series SM" },
  K: { title: "Panasonic Installation Manual, Hydromodule + Tank K-series (WH-ADC0309K3E5/K6E5, WH-UDZ03-09KE5)", cite: "K-series IM" },
  B: { title: "Baxi Installation, user and service manual, Assure HP55 R290 monobloc outdoor unit (7890198 v03)", cite: "Baxi HP55 IM" },
  B2: { title: "Baxi ASHP Control (indoor unit / controller) installation, user and service manual (7887625 v04)", cite: "Baxi ASHP Control IM" },
};
const full = {
  J: { ...TITLES.J, pages: J },
  K: { ...TITLES.K, pages: K },
  B: { ...TITLES.B, pages: BXP, quickref: bxq, faults: bxfaults, nav: bxnav, ctlFaults: ctfaults },
  B2: { ...TITLES.B2, pages: CTP, quickref: ctq },
  nav, sizing, wiring, clearances, weatherComp, commText, fieldNotes: fn, fieldNoteList: fnotes, faults,
};
const lite = {
  J: TITLES.J, K: TITLES.K, B2: TITLES.B2,
  B: { ...TITLES.B, faults: bxfaults, nav: bxnav, ctlFaults: ctfaults },
  nav, wiring, commissioning, fieldNoteList: fnotes, faults,
};
fs.mkdirSync(path.join(root, "data"), { recursive: true });
fs.writeFileSync(path.join(root, "data", "knowledge.json"), JSON.stringify(full));
fs.writeFileSync(path.join(root, "public", "knowledge.json"), JSON.stringify(lite));
console.log(`Built knowledge: J ${Object.keys(J).length} pages, K ${Object.keys(K).length}, Baxi HP55 ${Object.keys(BXP).length} (${bxfaults.length} codes), ` +
  `ASHP Control ${Object.keys(CTP).length} (${ctfaults.length} codes), ${faults.length} J-series codes, ${fnotes.length} field notes, ${wiring.length} diagrams, ` +
  `commissioning J ${commissioning.J.flatMap(s => s.steps).length} steps, K ${commissioning.K.flatMap(s => s.steps).length}.`);
