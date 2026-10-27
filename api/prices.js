// POST /api/prices  →  the quick survey price list (lib/prices.js) and this installer's discount. Free: no Claude call.
// → { items: {CODE: rrp}, exVat, vat, at, placeholder, discount, account }
// The shared access code gets the RRPs with no discount; a personal installer code gets that installer's discount.
import { send, checkAccess, onlyPost } from "../lib/http.js";
import { getPrices } from "../lib/prices.js";

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  const who = await checkAccess(req, res);
  if (!who) return;
  try {
    const p = await getPrices();
    send(res, 200, { items: p.items, exVat: p.exVat, vat: p.vat, at: p.at, placeholder: p.placeholder, discount: who.installer?.discount || 0, account: !!who.installer });
  } catch (e) {
    console.error(JSON.stringify({ evt: "prices_error", message: e.message }));
    send(res, 503, { error: "unavailable" });
  }
}
