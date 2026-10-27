// POST /api/prices  →  the quick survey price list (lib/prices.js) and this installer's discount. Free: no Claude call.
// → { items: {CODE: rrp}, groups: {CODE: group}, exVat, vat, at, placeholder, discounts: {group: %}, account }
// Everyone gets HMG's standard discount for each product group (the shared access code too, Donal 27/10/2026); a
// personal installer code gets the installer's own where they have one (lib/prices.js).
import { send, checkAccess, onlyPost } from "../lib/http.js";
import { getPrices, catalogue, discountsOf, getStandard } from "../lib/prices.js";

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  const who = await checkAccess(req, res);
  if (!who) return;
  try {
    const p = await getPrices();
    const groups = Object.fromEntries(catalogue().map(c => [c.code, c.group]));
    send(res, 200, { items: p.items, groups, exVat: p.exVat, vat: p.vat, at: p.at, placeholder: p.placeholder,
      discounts: discountsOf(who.installer, await getStandard()), account: !!who.installer });
  } catch (e) {
    console.error(JSON.stringify({ evt: "prices_error", message: e.message }));
    send(res, 503, { error: "unavailable" });
  }
}
