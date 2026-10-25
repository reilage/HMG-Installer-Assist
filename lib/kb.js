// Server-side knowledge: loads data/knowledge.json once per instance and finds the manual pages for a question.
// Retrieval is the same small keyword search the demo ran in the browser.
import fs from "node:fs";
import path from "node:path";

export const UNITS = {
  J: { name: "Panasonic J-series Mini Monobloc R32 (WH-MDC05/07/09J3E5)", short: "J-series monobloc" },
  K: { name: "Panasonic K-series split Hydromodule + Tank (WH-ADC0309K3E5/K6E5, WH-UDZ03-09KE5)", short: "K-series split" },
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
  for (const m of ["J", "K", "B", "B2"]) {
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

/* Up to six pages for a question: pages the screen asked for first (fault card pages), then the best matches. */
export function pagesFor(unit, text, extra) {
  kb();
  const q2 = text + " " + (extra?.code || "");
  const hits = unit === "K" && /^[hf]\d\d$/i.test(text) ? []
    : unit === "B" ? [...retrieve("B", q2), ...retrieve("B2", q2)].sort((a, b) => b.s - a.s)
    : retrieve(unit, q2);
  const allowed = unit === "B" ? ["B", "B2"] : [unit];
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
  const nav = kb().nav, a = nav.indexOf("# Part A"), b = nav.indexOf("# Part B");
  return nav.slice(0, a) + (m === "J" ? nav.slice(a, b) : nav.slice(b));
}
