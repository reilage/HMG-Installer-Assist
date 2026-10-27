// Quick survey prices (Donal Reilly 27/10/2026): an RRP for each HMG code on the quote list, and a discount % per
// installer account (lib/accounts.js), so installers get an instant price to work from. The price list is kept in
// the Upstash store, never in the repository or the public knowledge file, and is loaded on the admin page by
// pasting it from Excel.
//   prices   the price list, as JSON {items: {CODE: rrp}, exVat, vat, at}
// Until a list is loaded every code gets a placeholder price, marked as such everywhere it shows.
import { run } from "./store.js";
import { kb } from "./kb.js";

const KEY = "prices";
const round = (x, to = 10) => Math.round(x / to) * to;

/* Every HMG code the quick survey can put on a quote: [{code, item, cat}], each code once. */
export function catalogue() {
  const K = kb(), out = [], seen = new Set();
  const add = (cat, item, code) => { if (!seen.has(code)) { seen.add(code); out.push({ cat, item, code }); } };
  for (const r of K.survey.ranges) for (const z of r.sizes) for (const h of z.hmg)
    add(/indoor/i.test(h.item || "") ? "Indoor unit / controller" : "Heat pump", h.item || `${r.name} ${z.kw} kW`, h.code);
  for (const t of K.survey.cylinders?.types || []) {
    for (const c of t.list) add("Hot water cylinder", c.item, c.code);
    for (const k of t.kit || []) add("Cylinder kit (not pre-plumbed)", k.item, k.code);
  }
  for (const r of [...K.radiators].sort((a, b) => a.type.localeCompare(b.type) || a.h - b.h || a.l - b.l))
    add("Warmhaus radiator", `Warmhaus Type ${r.type} ${r.h}×${r.l}`, r.code);
  return out;
}

/* Rough stand-in figures so the quote can be tried before the real list is loaded. Not HMG prices. */
function placeholder(c) {
  const K = kb();
  if (c.cat === "Heat pump") { const kw = +(c.item.match(/(\d+) kW/) || [])[1] || 7; return round(2000 + 500 * kw); }
  if (c.cat === "Indoor unit / controller") return /180 L/.test(c.item) ? 3800 : 1100;
  if (c.cat === "Hot water cylinder") return (/Pre-Plumbed/.test(c.item) && !/Non/.test(c.item) ? 400 : 0) + (/300 L/.test(c.item) ? 1350 : 1050);
  if (c.cat === "Warmhaus radiator") { const r = K.radiators.find(x => x.code === c.code); return round(25 + 0.07 * (r?.w50 || 1000), 5); }
  return { "Motorised valve": 120, "Bypass valve": 60, "Unvented kit": 180, "3-way valve": 150 }[c.item] || 100;
}

/* The price list the app uses: the one loaded, else placeholders. */
export async function getPrices() {
  const [j] = await run(["GET", KEY]);
  if (j) return { ...JSON.parse(j), placeholder: false };
  return { items: Object.fromEntries(catalogue().map(c => [c.code, placeholder(c)])), exVat: true, vat: null, at: null, placeholder: true };
}

/* "€1,234.50", "1234,50" and "1234.5" are all 1234.5; anything with other text in it isn't a number. */
const num = v => { const t = String(v ?? "").replace(/[€\s]/g, "").replace(/,(?=\d{3}(\D|$))/g, "").replace(",", "."); return t && /^-?\d*\.?\d+$/.test(t) ? +t : NaN; };
export const cleanVat = v => (v === null || v === undefined || v === "" ? null : Math.max(0, Math.min(30, num(v) || 0)));

/* A price list pasted from Excel (tab-separated) or a CSV: on each row, the cell that is a known HMG code and the
   last cell that is a price. Rows without both (headers, blanks) are skipped. */
export function parsePrices(text) {
  const codes = new Set(catalogue().map(c => c.code)), items = {}, unknown = [];
  for (const line of String(text || "").split(/\r?\n/)) {
    const sep = line.includes("\t") ? "\t" : line.includes(";") ? ";" : /,(?=(?:[^"]*"[^"]*")*[^"]*$)/;
    const cells = line.split(sep).map(c => c.trim().replace(/^"|"$/g, "").trim());
    const code = cells.map(c => c.toUpperCase()).find(c => codes.has(c)) || cells.map(c => c.toUpperCase()).find(c => /^U[A-Z0-9]{4,7}$/.test(c));
    const price = cells.map(num).filter(n => n > 0).at(-1);
    if (!code || !(price > 0)) continue;
    items[code] = Math.round(price * 100) / 100;
    if (!codes.has(code) && !unknown.includes(code)) unknown.push(code);
  }
  return { items, unknown, missing: [...codes].filter(c => !(c in items)) };
}

export async function setPrices({ text, exVat, vat }) {
  const p = parsePrices(text);
  if (!Object.keys(p.items).length) throw Object.assign(new Error("no prices"), { code: "no_prices" });
  const list = { items: p.items, exVat: exVat !== false, vat: exVat === false ? null : cleanVat(vat), at: new Date().toISOString() };
  await run(["SET", KEY, JSON.stringify(list)]);
  return { ...list, placeholder: false, unknown: p.unknown, missing: p.missing };
}

/* VAT and ex/inc VAT without loading a new list. Prices that include VAT get no VAT added. */
export async function setVat({ exVat, vat }) {
  const cur = await getPrices();
  if (cur.placeholder) throw Object.assign(new Error("no list"), { code: "no_prices" });
  const list = { items: cur.items, exVat: exVat !== false, vat: exVat === false ? null : cleanVat(vat), at: cur.at };
  await run(["SET", KEY, JSON.stringify(list)]);
  return { ...list, placeholder: false };
}

export async function clearPrices() { await run(["DEL", KEY]); }

export const cleanDiscount = v => (v === null || v === undefined || v === "" ? 0 : Math.max(0, Math.min(100, Math.round((num(v) || 0) * 10) / 10)));
