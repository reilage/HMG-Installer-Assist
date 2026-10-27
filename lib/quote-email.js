// The quick survey quote request as an HTML email: the same headed sections and tables the app shows.
// The doc comes from the app ({ title, blocks: [{ h, note, kv: [[label, value]] } | { h, note, cols: [{ h }], rows: [[cells]] }] }),
// so every piece is clipped and escaped here; anything that isn't that shape is dropped.
const esc = v => String(v ?? "").slice(0, 300).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const arr = (v, n) => (Array.isArray(v) ? v.slice(0, n) : []);

const CYAN = "#00A9E0", GREY = "#53565A", LINE = "#dfe3e6";
const th = `style="text-align:left;padding:6px 8px;border-bottom:2px solid ${CYAN};font-size:13px;color:${GREY}"`;
const td = `style="padding:6px 8px;border-bottom:1px solid ${LINE};font-size:14px;vertical-align:top"`;
const table = rows => `<table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table>`;

export function quoteHtml(doc) {
  if (!doc || typeof doc !== "object") return null;
  const blocks = arr(doc.blocks, 12).map(b => {
    if (!b || typeof b !== "object") return "";
    const note = b.note ? `<p style="margin:4px 0 8px;font-size:13px;color:${GREY}">${esc(b.note)}</p>` : "";
    if (!b.h) return note;
    const head = `<h3 style="margin:18px 0 6px;font-size:16px;color:${GREY}">${esc(b.h)}</h3>`;
    if (b.kv) return head + note + table(arr(b.kv, 20).map(p => `<tr><th ${th.replace("border-bottom:2px solid " + CYAN, "border-bottom:1px solid " + LINE)} width="35%">${esc(arr(p, 2)[0])}</th><td ${td}>${esc(arr(p, 2)[1])}</td></tr>`).join(""));
    const cols = arr(b.cols, 10);
    return head + note + table(`<tr>${cols.map(c => `<th ${th}>${esc(c?.h)}</th>`).join("")}</tr>`
      + arr(b.rows, 200).map(r => `<tr>${arr(r, cols.length).map(c => `<td ${td}>${esc(c)}</td>`).join("")}</tr>`).join(""));
  }).join("");
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#222;max-width:720px">
<h2 style="margin:0 0 8px;padding-bottom:8px;border-bottom:3px solid ${CYAN};font-size:20px;color:${GREY}">${esc(doc.title || "Quote request")}</h2>${blocks}</div>`;
}
