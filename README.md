# HMG Installer Assistant

The Heat Merchants technical assistant for heat pump installers, as a web app that works on any phone and can be added to the home screen like an app. It has the same screens as the demo:

- **Ask**: type a question or send a photo of the controller or rating label. Claude answers only from the manufacturer manuals and HMG Field Notes, in the HMG answer format, with the page. Wiring questions show the matching PCB/terminal diagram.
- **Fault codes**: Panasonic J-series (52 codes) and Baxi HP55 (controller and outdoor unit codes), with HMG field notes on the cards.
- **Controller**: menu paths and button-by-button steps, plus **Commissioning**: the HMG step-by-step commissioning checklist for the Panasonic J-series and K-series, ticked off on site.
- **Manuals**: the original PDFs, 38 wiring and PCB diagrams, and **Spare parts** for the Panasonic J-series: the service manual's 4 exploded views and parts list (100 parts), searchable by name, ref number or part number, with the part number for the 5, 7 or 9 kW model. Ask gives part numbers too.
- **Install**: outdoor unit clearances (HMG figures), primary pipe sizing (Panasonic only), the HMG heating curve, and **Components**: labelled drawings from the manuals of what's inside each unit (J-series main components and refrigerant/water cycle, K-series tank unit, Baxi HP55 outdoor unit, hydraulic module, refrigerant circuit and indoor control unit). Tap a number on the enlarged drawing to see what that part is. Each numbered part says what it does, with its fault codes (tap to open the fault card), J-series part number and wiring diagram. Ask knows them too and shows the drawing.
- **Escalate**: builds the escalation to Technical Support, filled in from the chat.

A switch at the top keeps the Panasonic J-series, K-series and Baxi HP55 separate.

## What you need to do to get it live

1. **Get an Anthropic API key.** Sign up at https://console.anthropic.com, add a payment card under Billing, then Settings > API keys > Create key. Copy it somewhere safe; it's shown once. **Set a monthly spend limit** under Settings > Limits (for example €50 to start), so a mistake can never run up a big bill.
2. **Create a Vercel account** at https://vercel.com (the free Hobby plan is fine to start; a business using it day to day should move to Pro). Sign up with GitHub.
3. **Import this repository** in Vercel: Add New > Project > pick `HMG-Installer-Assist` > Deploy. No settings to change; Vercel reads `vercel.json`.
4. **Add the settings** in Vercel under Project > Settings > Environment Variables, then Deployments > Redeploy:
   - `ANTHROPIC_API_KEY`: the key from step 1. Without it everything works except Ask and "Fill from chat".
   - `APP_ACCESS_CODE`: a code you give your installers (for example `heatpump2026`). They type it once on each phone. Strongly recommended: without it anyone who finds the link can use Ask on your bill.
5. **Make the daily question limit firm (recommended).** Each phone gets 5 Ask questions a day, resetting at midnight. To count them reliably across all of Vercel's servers, connect a free Upstash Redis store: in Vercel, Project > Storage > Create Database > Upstash (Redis) > Free plan > connect it to this project, then Redeploy. Vercel adds the settings itself. Without it the limit still works, but loosely, because each Vercel server keeps its own count. To change the number, add `DAILY_QUESTION_LIMIT` (for example `10`, or `0` for no limit).
6. **Turn on installer accounts (recommended).** Add `ADMIN_CODE` in Vercel (a long password only you know), then Redeploy. Open `/admin.html` on the app's link (for example `hmg-installer-assist.vercel.app/admin.html`) and sign in with it. Add each installer there: the page makes them a personal code (like `HMG-7K4P2Q`) and a message to text or email them. They enter it once on their phone instead of the shared access code. Installers can also tap **No code yet? Request access** in the app: the request appears on the admin page under Requests waiting, and (once email is set up, below) is emailed to you with an Approve link. Approving creates their account and emails them their code. On the same page you can see each installer's questions today and this month, switch an installer off, give them a new code, or give one installer a bigger or smaller daily limit. Needs Upstash (step 5). The shared `APP_ACCESS_CODE` keeps working alongside personal codes; remove it once everyone has their own code.
7. **Open the link Vercel gives you** (for example `hmg-installer-assist.vercel.app`) on your phone. On Android, tap Install when it offers; on iPhone, Share > Add to Home Screen. Later you can point a Heat Merchants address at it (for example `assist.heatmerchants.ie`) under Project > Settings > Domains.

### Optional: email from the app (escalations, access requests, installer codes)

Until this is set up, Escalate opens the installer's own email app with everything filled in (as in the demo), access requests only show on the admin page, and you send approved installers their code yourself (the admin page has Text it / Email it buttons). To have the app send these emails itself:

1. Create an account at https://resend.com and verify the `heatmerchants.ie` domain (your IT person adds a few DNS records).
2. Add to Vercel: `RESEND_API_KEY`, and `ESCALATION_FROM` (for example `HMG Installer Assistant <siteassist@heatmerchants.ie>`). Optionally `ESCALATION_TO` if escalations should go somewhere other than donal.reilly@heatmerchants.ie, and `APPROVAL_TO` if access requests should go somewhere other than the escalation address.

## Running costs

- **Claude**: paid per question to Anthropic. Ask uses Claude Opus 5.5 ($4 per million tokens in, $20 per million out). A question sends roughly 15,000 to 25,000 tokens of rules and manual pages; the rules part is cached, so repeat questions within a few minutes cost much less. Expect a few cent per question. "Fill from chat" uses the much cheaper Claude Haiku 5.5. The Anthropic console shows exact usage.
- **Hosting**: Vercel Hobby is free; Pro is $20 a month.

## Updating what the assistant knows

Everything the assistant knows is in `source/`:

| File | What it is |
|---|---|
| `source/hmg-field-notes.md` | HMG Field Notes. Add a new fix here, in the same format as the others. Fault codes in the Symptoms line make the note show on that fault card. |
| `source/hmg-outdoor-unit-clearances.md` | HMG clearance guidance |
| `source/hmg-primary-pipe-sizing.md` | HMG pipe sizing guidance |
| `source/hmg-commissioning-panasonic.md` | HMG commissioning procedure (Controller › Commissioning). Each `- **Step.**` line is one tick box. Replace "HMG TO CONFIRM" with the HMG value once it is decided. |
| `source/manuals/` | Manual text (one `--- Page N ---` marker per printed page) and the controller navigation references |
| `source/j-series-faults.json` | J-series error codes table (SM pp.164-165) |
| `source/wiring-index.json` | Catalogue of the diagrams in `public/wiring/` |
| `source/j-series-parts.json` | J-series spare parts (SM pp.237-246): one line per part, with the part number for each model. Correct a superseded number here. Exploded view images are in `public/parts/`. |
| `source/components.json` | Component identifier (Install › Components): the drawings (images in `public/components/`) and, for each component, its number on the drawing, what it does, fault codes, J-series parts list refs, wiring diagrams and manual pages. Edit a description or add a fault code here. To use your own photo instead of a manual drawing, put the image in `public/components/` and change the drawing's `file`, `w` and `h`. |

Edit a file on GitHub and commit: Vercel rebuilds and the app updates within a minute or two. The answer rules themselves are in `lib/prompt.js`, and the screens are `public/index.html`.

## How it's built

- `public/` is the app installers see: `index.html` (all screens), `knowledge.json` (fault lists, controller tasks, diagram catalogue), the PDFs, diagrams, icons, and `sw.js` (offline: screens, fault codes, diagrams and any manual already opened work with no signal; Ask needs signal).
- `api/` are small server functions on Vercel. `ask` finds the relevant manual pages, adds the HMG rules for the selected unit, and streams Claude's answer back. The API key stays on the server and is never sent to phones. `extract` fills the escalation form from the chat. `escalate` sends the email when Resend is set up. `apply` takes access requests from the app and `approve` handles the approval link (`public/approve.html`); `admin` runs the admin page. `config` tells the app what is switched on.
- `scripts/build-knowledge.mjs` turns `source/` into `data/knowledge.json` (server only, includes the manual text) and `public/knowledge.json`. Vercel runs it on every deploy (`npm run build`).
- Each question writes one line to Vercel > Logs (unit, pages used, tokens), and is saved in Upstash for **fault trends** (`lib/trends.js`): unit, fault code, installer, date, the question, and whether the app could answer it from the manuals. The admin page's **Fault trends** tab counts them per week, overall, per unit and per installer, lists the questions the app couldn't answer, and shows a short summary Claude writes every Monday at about 7am (`api/trends.js`, a Vercel cron job in `vercel.json`; about 5 cent a week) or when you tap **Write summary now**. Questions are kept 100 days, summaries about a year. Installers are told on the code screen and under the Ask box that questions are saved to improve the service. Optional: set `CRON_SECRET` in Vercel so only Vercel can start the Monday job (without it, a repeat call does nothing because each week is only written once), and `TRENDS_MODEL` to use a different Claude model for the summary.

Optional settings: `ADMIN_CODE` (turns on installer accounts and the admin page; see `lib/accounts.js`), `DAILY_QUESTION_LIMIT` (default `5` Ask questions per installer, or per phone without an account, per day; `0` for no limit; see `lib/quota.js`), `CLAUDE_MODEL` (default `claude-opus-5-5`), `CLAUDE_EFFORT` (default `medium`), `CLAUDE_EXTRACT_MODEL` (default `claude-haiku-5-5`), and `CLAUDE_FALLBACKS=off` if Anthropic ever rejects the automatic fallback setting on your account.

### Run it on a computer

Needs Node.js 20 or later.

```
npm install
cp .env.example .env     # then put your API key in .env
npm run dev              # open http://localhost:3000
npm test                 # tests against a stand-in Claude, no key needed
```

## Not built yet (from the plan)

- **Paid plans.** Installer accounts are in (see step 6). Charging for a bigger daily limit would add Stripe subscriptions that set the installer's limit.
- **Fault trends by email** each Monday. The summary is on the admin page; emailing it needs Resend (above).
- **Photos attached to escalation emails.**
- **An admin page to upload manuals.** For now, new manuals are converted to text and added to `source/`.
- **Voice**: phones' own dictation (the microphone on the keyboard) already works in the Ask box.

## Before going wide

- Check Panasonic and Baxi are happy for their manuals to be served from your app. The PDFs in `public/manuals/` can be downloaded by anyone with the link.
- Add a privacy notice: escalations contain site addresses, Eircodes and installer mobile numbers.
