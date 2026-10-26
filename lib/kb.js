// Server-side knowledge: loads data/knowledge.json once per instance and finds the manual pages for a question.
// Retrieval is the same small keyword search the demo ran in the browser.
import fs from "node:fs";
import path from "node:path";

export const UNITS = {
  J: { name: "Panasonic J-series Mini Monobloc R32 (WH-MDC05/07/09J3E5)", short: "J-series monobloc" },
  T: { name: "Panasonic J-series T-Cap monobloc R32, 9 and 12 kW (WH-MXC09J3E5, WH-MXC12J6E5)", short: "J-series T-Cap" },
  K: { name: "Panasonic K-series split Hydromodule + Tank (tank unit WH-ADC0309K3E5/K6E5, outdoor WH-UDZ03/05/07/09KE5)", short: "K-series split" },
  B: { name: "Baxi Assure HP55 R290 monobloc outdoor unit (HP55-4/6/8/11/13-1-PHMB, HP55-11/13-3-PHMB)", short: "Baxi HP55" },
};

let KB = null, IDX = null;
const FCODES = { B: new Set() };
const STOP = new Set("the and for with what how does when this that from have are can not but you your its into then than there which where why why should would could after before about unit heat pump showing show shows check checks".split(" "));

export function toks(s) {
  return (s.toLowerCase().match(/[a-z]\d\d\.\d{2,3}|[a-z]\d{2}|[a-z][a-z0-9\-]{2,}|\b[a-z][a-z0-9]\b|\d+(?:\.\d+)?/g) || [])
    .filter(w => !STOP.has(w) && (w.length !== 2 || /^\d/.test(w) || FCODES.B.has(w)));
}

export function kb() {
  if (KB) return KB;
  KB = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "knowledge.json"), "utf8"));
  for (const f of KB.B.faults) FCODES.B.add(f.code.toLowerCase());
  for (const f of KB.B.ctlFaults) FCODES.B.add(f.code.toLowerCase());
  IDX = {};
  for (const m of ["J", "T", "K", "K2", "K3", "B", "B2"]) {
    const docs = [], df = {};
    for (const [p, t] of Object.entries(KB[m].pages)) {
      const tf = {};
      for (const w of toks(t)) tf[w] = (tf[w] || 0) + 1;
      docs.push({ p: +p, tf });
      for (const w in tf) df[w] = (df[w] || 0) + 1;
    }
    IDX[m] = { docs, df, n: docs.length };
  }
  return KB;
}

export function retrieve(m, q, k = 5) {
  kb();
  const I = IDX[m];
  if (!I) return [];
  const qs = [...new Set(toks(q))];
  return I.docs.map(d => {
    let s = 0;
    for (const w of qs) {
      const tf = d.tf[w];
      if (tf) {
        s += Math.log(1 + tf) * Math.log(1 + I.n / I.df[w]);
        if (/^[hf]\d\d$/.test(w) || (m[0] === "B" && FCODES.B.has(w))) s += 6;
      }
    }
    return { m, p: d.p, s };
  }).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, k);
}

export function excerpt(m, p, max = 3800) {
  const t = kb()[m].pages[p] || "";
  return `[${KB[m].cite}, p.${p}]\n` + (t.length > max ? t.slice(0, max) + " …" : t);
}

/* The manuals each unit answers from: the Baxi outdoor unit + controller, the K-series installation manual + outdoor and tank unit service manuals. */
export const MANUALS = { J: ["J"], T: ["T"], K: ["K", "K2", "K3"], B: ["B", "B2"] };

/* Up to six pages for a question: pages the screen asked for first (fault card pages), then the best matches. */
export function pagesFor(unit, text, extra) {
  kb();
  const q2 = text + " " + (extra?.code || "");
  const allowed = MANUALS[unit];
  const hits = allowed.flatMap(m => retrieve(m, q2)).sort((a, b) => b.s - a.s);
  const asked = (extra?.pages || []).map(p => typeof p === "object" ? p : { m: unit, p })
    .filter(x => allowed.includes(x.m) && KB[x.m].pages[x.p]);
  const seen = new Set(), out = [];
  for (const x of [...asked, ...hits]) {
    const key = x.m + ":" + x.p;
    if (!seen.has(key)) { seen.add(key); out.push(x); }
  }
  return out.slice(0, 6);
}

export const wiringFor = u => (kb().wiring || []).filter(w => w.unit === u);
export const partsFor = u => kb().parts?.[u] || null;
export const componentsFor = u => kb().components?.[u] || null;

export function navFor(m) {
  if (m === "B") return kb().B.nav;
  const nav = kb().nav, a = nav.indexOf("# Part A"), b = nav.indexOf("# Part B"), c = nav.indexOf("# Part C");
  return nav.slice(0, a) + (m === "J" ? nav.slice(a, b) : m === "T" ? nav.slice(c) : nav.slice(b, c));
}

/* Fault codes as installers type or dictate them: "H 91", "h-91", "F.12" → H91, F12 (Panasonic); "A02 06", "A 06-111" → A02.06, A06.111
   (Baxi controller). Speech recognition often splits a code, and then neither the manual search nor the stored answers saw it. */
export function normCodes(unit, text) {
  let t = String(text || "");
  if (unit === "B") return t.replace(/\b([AHE])\s*[-.]?\s*(\d{2})\s*[-.\s]\s*(\d{2,3})\b/gi, (_, a, b, c) => `${a.toUpperCase()}${b}.${c}`);
  return t.replace(/\b([HF])\s*[-.\s]\s*(\d{2})\b/gi, (_, a, b) => a.toUpperCase() + b);
}

/* The fault-list entries a typed question names, so Ask gets the same table row and check pages as a fault card.
   Each Panasonic unit matches only its own list (never J codes for a K unit, or Mini Monobloc codes for a T-Cap). */
const PLIST = { J: ["faults", "J", "J-series SM"], T: ["tfaults", "T", "T-Cap SM"], K: ["kfaults", "K2", "K-series SM"] };
export function faultsIn(unit, text) {
  const K = kb(), t = normCodes(unit, text);
  if (PLIST[unit]) {
    const want = new Set((t.match(/\b[HF]\d{2}\b/gi) || []).map(c => c.toUpperCase()));
    return K[PLIST[unit][0]].filter(f => want.has(f.code)).slice(0, 2);
  }
  if (unit === "B") {
    const ctl = new Set((t.match(/\b[AHE]\d{2}\.\d{2,3}\b/gi) || []).map(c => c.toUpperCase()));
    // outdoor codes are short (E0, Pd, HP), so a word only counts if it is on the list (any case with a digit, e8 = E8; letters-only exactly as listed, Pd/Eb/Hb)
    // and one of letters only (HP, CL, PE) only when the question says it is a code, since "HP" is also just "heat pump"
    const said = /\b(codes?|errors?|faults?|alarms?|display\w*|show\w*|flash\w*)\b/i.test(t);
    const words = new Set((t.match(/\b[A-Za-z][0-9A-Za-z]{1,2}\b/g) || []).filter(w => /\d/.test(w) || said).map(w => /\d/.test(w) ? w.toUpperCase() : w));
    return [...K.B.ctlFaults.filter(f => ctl.has(f.code)), ...K.B.faults.filter(f => words.has(f.code))].slice(0, 3);
  }
  return [];
}

/* Pages and a note for the fault codes named in a typed question (the fault card sends its own). */
export function faultContext(unit, text) {
  const fs = faultsIn(unit, text);
  if (!fs.length) {
    const asked = (unit === "K" || unit === "T") && normCodes(unit, text).match(/\b[HF]\d{2}\b/i);
    if (!asked) return null;
    return { pages: [], note: unit === "K"
      ? `${asked[0].toUpperCase()} looks like a Panasonic fault code, but it isn't in the K-series error codes table (K-series SM pp.209-210). Say so plainly, don't use J-series code meanings for this K-series unit, and suggest Escalate.`
      : `${asked[0].toUpperCase()} looks like a Panasonic fault code, but it isn't in the T-Cap error codes table (T-Cap SM pp.164-165). Say so plainly, don't use Mini Monobloc or K-series code meanings for this T-Cap, and suggest Escalate.` };
  }
  if (PLIST[unit]) {
    const [, m, cite] = PLIST[unit];
    return {
      pages: fs.flatMap(f => [f.tablePage, ...f.diagPages]).map(p => ({ m, p })),
      note: fs.map(f => `Error codes table row: ${f.code} | ${f.meaning} | judgement: ${f.judgement} | verify: ${f.verify.join("; ")} (${cite} p.${f.tablePage}${f.diagPages.length ? `; self-diagnosis p.${f.diagPages.join(", ")}` : ""}).${f.note ? " " + f.note : ""}`).join("\n"),
    };
  }
  return {
    pages: fs.map(f => ({ m: "odu" in f ? "B2" : "B", p: f.tablePage })),
    note: fs.map(f => "odu" in f
      ? `ASHP Control error list row: ${f.code} | ${f.type} | ${f.meaning}${f.checks ? ` | checks: ${f.checks}` : ""} (Baxi ASHP Control IM p.${f.tablePage}).`
      : `HP55 outdoor error code list row: ${f.code} | ${f.meaning} | ${f.group} | shown on: ${f.shownOn} (Baxi HP55 IM p.${f.tablePage}).`).join("\n"),
  };
}
