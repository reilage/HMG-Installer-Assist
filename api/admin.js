// POST /api/admin  →  installer accounts, for the admin page (public/admin.html). Needs ADMIN_CODE, sent as X-Admin-Code.
// Body: { action: "list" }                                   → { store, defaultLimit, installers: [{...installer, today, month}] }
//       { action: "add", name, company, mobile, email, limit } → { installer }
//       { action: "update", id, name?, company?, mobile?, email?, limit?, active?, newCode? } → { installer }
//       { action: "delete", id }                              → { ok }
//       { action: "approve", id }   (an access request)       → { installer, emailed }
//       { action: "decline", id }   (an access request)       → { ok }
//       { action: "trends", week? }   fault trends for a week (default last week, or this week if last week was empty) → { week, label, weeks, stats, summary }
//       { action: "trends_write", week? }  (re)write that week's Claude summary → the same as "trends"
//       { action: "answers" }                  stored answers (lib/answers.js) → { on, answers: [{id, unit, code, q, a, at, by, edited, hits, bad}] }
//       { action: "answer_edit", id, text }    reword a stored answer (it then stays, even if an installer says it didn't help) → { answer }
//       { action: "answer_delete", id }        → { ok }
//       { action: "answers_clear", unit? }     clear all stored answers, or one unit's → { cleared }
//       { action: "surveys" }                  saved quick surveys (lib/surveys.js), newest 300 → { surveys: [{id, at, installer, title, site, doc}] }
//       { action: "prices" }                   the quick survey price list (lib/prices.js) → { prices: {items, exVat, vat, at, placeholder}, catalogue: [{cat, item, code}] }
//       { action: "prices_set", text, exVat, vat }  load a price list pasted from Excel (code + RRP per row) → { prices, unknown, missing }
//       { action: "prices_vat", exVat, vat }   change only ex/inc VAT and the VAT rate → { prices }
//       { action: "prices_clear" }             back to placeholder prices → { ok }
// "list" also returns the access requests waiting for approval, as requests: [...].
// discounts: % off RRP on this installer's quick survey quote per product group, {hp, indoor, cyl, kit, rad} (0 to 100).
// limit: questions per day for this installer; null uses DAILY_QUESTION_LIMIT, 0 means no limit.
import { send, readJson, onlyPost, sameSecret } from "../lib/http.js";
import { accountsOn, listInstallers, addInstaller, updateInstaller, deleteInstaller, listRequests, approveRequest, deleteRequest, publicRequest } from "../lib/accounts.js";
import { emailEnabled } from "../lib/email.js";
import { sendCode } from "../lib/signup.js";
import { run, storeKind } from "../lib/store.js";
import { dailyLimit, dayKey, monthKey } from "../lib/quota.js";
import { allSurveys } from "../lib/surveys.js";
import { getPrices, setPrices, setVat, clearPrices, catalogue, GROUPS, discountsOf } from "../lib/prices.js";
import { storedOn, listAnswers, editAnswer, deleteAnswer, clearAnswers } from "../lib/answers.js";
import { weekOf, lastWeek, prevWeek, weekLabel, validWeek, weekQuestions, weekStats, getSummary, writeSummary } from "../lib/trends.js";

/* Counts for the week (free, from the saved questions) and its Claude summary if one has been written. */
async function trends(w) {
  const [qs, prev, summary] = await Promise.all([weekQuestions(w), weekQuestions(prevWeek(w)), getSummary(w)]);
  const weeks = [];
  for (let x = weekOf(), n = 0; n < 12; n++, x = prevWeek(x)) weeks.push({ week: x, label: weekLabel(x), current: n === 0 });
  return { week: w, label: weekLabel(w), current: w === weekOf(), weeks, stats: weekStats(qs, prev), summary, ai: !!process.env.ANTHROPIC_API_KEY };
}

export default async function handler(req, res) {
  if (!onlyPost(req, res)) return;
  if (!accountsOn()) return send(res, 503, { error: "accounts_off" });
  if (!sameSecret(req.headers["x-admin-code"] || "", process.env.ADMIN_CODE)) return send(res, 401, { error: "admin_code" });
  let b;
  try { b = await readJson(req, 400_000); } catch { return send(res, 400, { error: "bad_request" }); }

  try {
    switch (b.action) {
      case "list": {
        const [list, requests] = await Promise.all([listInstallers(), listRequests()]);
        const counts = list.length ? (await run(["MGET", ...list.flatMap(i => [dayKey("i:" + i.id), monthKey("i:" + i.id)])]))[0] : [];
        return send(res, 200, {
          groups: GROUPS.map(({ id, name }) => ({ id, name })),
          store: storeKind(), defaultLimit: dailyLimit(), email: emailEnabled(), requests: requests.map(publicRequest),
          installers: list.map((i, n) => ({ ...i, discounts: discountsOf(i), today: +(counts[2 * n] || 0), month: +(counts[2 * n + 1] || 0) })),
        });
      }
      case "add": {
        const installer = await addInstaller(b);
        console.log(JSON.stringify({ evt: "admin_add", name: installer.name }));
        return send(res, 200, { installer });
      }
      case "update": {
        const installer = await updateInstaller(String(b.id || ""), b);
        return installer ? send(res, 200, { installer }) : send(res, 404, { error: "not_found" });
      }
      case "delete":
        return (await deleteInstaller(String(b.id || ""))) ? send(res, 200, { ok: true }) : send(res, 404, { error: "not_found" });
      case "approve": {
        const installer = await approveRequest(String(b.id || ""));
        if (!installer) return send(res, 404, { error: "not_found" });
        const emailed = await sendCode(req, installer);
        console.log(JSON.stringify({ evt: "approve", name: installer.name, emailed }));
        return send(res, 200, { installer, emailed });
      }
      case "trends":
      case "trends_write": {
        // with no week asked for: last week once it has questions, else this week so far
        const w = validWeek(b.week) ? b.week : (await weekQuestions(lastWeek())).length ? lastWeek() : weekOf();
        if (b.action === "trends_write") {
          if (!process.env.ANTHROPIC_API_KEY) return send(res, 503, { error: "not_configured" });
          await writeSummary(w, "admin");
        }
        return send(res, 200, await trends(w));
      }
      case "answers":
        return send(res, 200, { on: storedOn(), answers: await listAnswers() });
      case "answer_edit": {
        if (!String(b.text || "").trim()) return send(res, 400, { error: "bad_request" });
        const answer = await editAnswer(String(b.id || ""), b.text);
        return answer ? send(res, 200, { answer }) : send(res, 404, { error: "not_found" });
      }
      case "answer_delete":
        await deleteAnswer(String(b.id || ""));
        return send(res, 200, { ok: true });
      case "answers_clear":
        return send(res, 200, { cleared: await clearAnswers(b.unit) });
      case "surveys":
        return send(res, 200, { surveys: (await allSurveys()).slice(0, 300) });
      case "prices":
        return send(res, 200, { prices: await getPrices(), catalogue: catalogue() });
      case "prices_set": {
        const p = await setPrices(b);
        console.log(JSON.stringify({ evt: "prices_set", count: Object.keys(p.items).length, unknown: p.unknown.length, missing: p.missing.length }));
        return send(res, 200, { prices: { items: p.items, exVat: p.exVat, vat: p.vat, at: p.at, placeholder: false }, unknown: p.unknown, missing: p.missing });
      }
      case "prices_vat":
        return send(res, 200, { prices: await setVat(b) });
      case "prices_clear":
        await clearPrices();
        return send(res, 200, { ok: true });
      case "decline":
        await deleteRequest(String(b.id || ""));
        return send(res, 200, { ok: true });
      default:
        return send(res, 400, { error: "bad_request" });
    }
  } catch (e) {
    if (e.code === "name_required") return send(res, 400, { error: "name_required" });
    if (e.code === "no_prices") return send(res, 400, { error: "no_prices" });
    console.error(JSON.stringify({ evt: "admin_error", message: e.message }));
    send(res, 503, { error: "unavailable" });
  }
}
