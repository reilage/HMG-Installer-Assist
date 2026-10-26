# HMG Installer Assistant

The Heat Merchants technical assistant for heat pump installers, as a web app that works on any phone and can be added to the home screen like an app. It has the same screens as the demo:

- **Ask**: type a question or send a photo of the controller or rating label. Claude answers only from the manufacturer manuals and HMG Field Notes, in the HMG answer format, with the page. Wiring questions show the matching PCB/terminal diagram.
- **Voice**: tap the microphone in Ask and speak the question (Irish English). It sends when the installer stops talking, and the answer is read aloud in a male English voice (UK first; browsers don't label voices male or female, so it goes by voice name, e.g. Daniel on iPhone, Google UK English Male in Chrome; where none is found the phone's English voice is used), with **Stop reading** and **Read aloud again** under it. Typed questions stay silent. It uses the phone's own speech recognition and voices (Web Speech API), so there's no extra cost. It works in Chrome on Android and in Safari on iPhone; where the browser can't do it (e.g. Firefox), tapping the microphone says to use the keyboard's microphone key instead.
- **Fault codes**: Panasonic J-series Mini Monobloc (52 codes), Panasonic J-series T-Cap (51 codes, from the T-Cap service manual), Panasonic K-series (52 codes, from the K-series service manual), Panasonic L-series R290 (51 codes, from the L-series service manual) and Baxi HP55 (controller and outdoor unit codes), with HMG field notes on the cards. Each Panasonic card links to the manual's check procedure for that code.
- **Controller**: menu paths and button-by-button steps, plus **Commissioning**: the HMG step-by-step commissioning checklist for the Panasonic J-series Mini Monobloc, J-series T-Cap, K-series and L-series, ticked off on site.
- **Manuals**: the original PDFs, 52 wiring and PCB diagrams, and **Spare parts** for the Panasonic J-series, T-Cap, K-series and L-series: the service manuals' exploded views and parts lists (J-series 100 parts for the 5, 7 or 9 kW; T-Cap 48 water system and 60 refrigerant system parts for the 9 or 12 kW; K-series 120 outdoor unit parts for the 3, 5, 7 or 9 kW and 91 tank unit parts for the K3E5/K6E5; L-series parts for the E51 tank unit and the 5, 7 or 9 kW R290 outdoor unit, 243 in all), searchable by name, ref number or part number. Ask gives part numbers too.
- **Install**: outdoor unit clearances (HMG figures), **Exclusion zones** for the R290 units only (L-series and Baxi HP55: the manufacturer's protective zone figures and drawings; the tab only shows when one of them is selected), primary pipe sizing (Panasonic only), the HMG heating curve, and **Components**: labelled drawings from the manuals of what's inside each unit (J-series main components and refrigerant/water cycle, T-Cap main components, refrigerant/water cycle, fans and refrigerant PCB, K-series tank unit and its two exploded views, outdoor unit exploded views (3 kW and 5-9 kW) and outdoor sensors and valves, L-series main components, refrigerant/water cycle and its tank and outdoor exploded views, Baxi HP55 outdoor unit, hydraulic module, refrigerant circuit and indoor control unit). Tap a number on the enlarged drawing to see what that part is. Each numbered part says what it does, with its fault codes (tap to open the fault card), part number and wiring diagram. Ask knows them too and shows the drawing.
- **Escalate**: builds the escalation to Technical Support, filled in from the chat.

A switch at the top keeps the Panasonic J-series Mini Monobloc, J-series T-Cap (9 and 12 kW, WH-MXC09J3E5 / WH-MXC12J6E5), L-series R290 (E51 tank unit, WH-WDG05/07/09LE5 outdoor), K-series and Baxi HP55 separate.

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
| `source/hmg-r290-exclusion-zones.md` | HMG R290 exclusion zone guidance (Install › Exclusion zones, L-series and Baxi HP55 only). Zone drawings are in `public/zones/`. |
| `source/hmg-commissioning-panasonic.md` | HMG commissioning procedure (Controller › Commissioning). Each `- **Step.**` line is one tick box. Replace "HMG TO CONFIRM" with the HMG value once it is decided. |
| `source/manuals/` | Manual text (one `--- Page N ---` marker per printed page) and the controller navigation references |
| `source/j-series-faults.json` | J-series error codes table (SM pp.164-165) |
| `source/t-cap-faults.json` | J-series T-Cap error codes table (T-Cap SM pp.164-165). The check procedure pages for each code are found from the manual's 18.5 headings. |
| `source/k-series-faults.json` | K-series error codes table (SM pp.209-210). The check procedure pages for each code are found from the manual's 19.5 headings. |
| `source/l-series-faults.json` | L-series R290 error codes table (L-series SM pp.237-238). The check procedure pages for each code are found from the manual's 18.5 headings. |
| `source/wiring-index.json` | Catalogue of the diagrams in `public/wiring/` |
| `source/j-series-parts.json` | J-series spare parts (SM pp.237-246): one line per part, with the part number for each model. Correct a superseded number here. Exploded view images are in `public/parts/`. |
| `source/t-cap-parts.json` | J-series T-Cap spare parts (T-Cap SM pp.230-237), two lists with their own ref numbers: water system (`w`) and refrigerant system (`r`). One line per part with the part number for the 9 and 12 kW. |
| `source/k-series-parts.json` | K-series spare parts, three lists with their own ref numbers: outdoor 3 kW and outdoor 5/7/9 kW (outdoor SM pp.299-306), and the K3E5/K6E5 tank unit (tank unit SM pp.439-443). One line per part with the part number for each model. The outdoor SM's tank unit list is left out: it's for the WH-ADC0309K0E5A, not the K3E5/K6E5 HMG supplies. |
| `source/l-series-parts.json` | L-series R290 spare parts, two lists with their own ref numbers: the E51 tank unit (`in`, SM pp.310-325) and the 5/7/9 kW outdoor unit (`o0509`, SM pp.326-333). The UK1 tank unit is left out: HMG supplies the E51 only. |
| `source/components.json` | Component identifier (Install › Components): the drawings (images in `public/components/`) and, for each component, its number on the drawing, what it does, fault codes, parts list refs, wiring diagrams and manual pages. Edit a description or add a fault code here. To use your own photo instead of a manual drawing, put the image in `public/components/` and change the drawing's `file`, `w` and `h`. |

Edit a file on GitHub and commit: Vercel rebuilds and the app updates within a minute or two. The answer rules themselves are in `lib/prompt.js`, and the screens are `public/index.html`.

## How it's built

- `public/` is the app installers see: `index.html` (all screens), `knowledge.json` (fault lists, controller tasks, diagram catalogue), the PDFs, diagrams, icons, and `sw.js` (offline: screens, fault codes, diagrams and any manual already opened work with no signal; Ask needs signal).
- `api/` are small server functions on Vercel. `ask` finds the relevant manual pages, adds the HMG rules for the selected unit, and streams Claude's answer back. The API key stays on the server and is never sent to phones. `extract` fills the escalation form from the chat. `escalate` sends the email when Resend is set up. `apply` takes access requests from the app and `approve` handles the approval link (`public/approve.html`); `admin` runs the admin page. `history` gives an installer their own past questions. `config` tells the app what is switched on.
- `scripts/build-knowledge.mjs` turns `source/` into `data/knowledge.json` (server only, includes the manual text) and `public/knowledge.json`. Vercel runs it on every deploy (`npm run build`).
- Each question writes one line to Vercel > Logs (unit, pages used, tokens), and is saved in Upstash for **fault trends** (`lib/trends.js`): unit, fault code, installer, date, the question, and whether the app could answer it from the manuals. The admin page's **Fault trends** tab counts them per week, overall, per unit and per installer, lists the questions the app couldn't answer, and shows a short summary Claude writes every Monday at about 7am (`api/trends.js`, a Vercel cron job in `vercel.json`; about 5 cent a week) or when you tap **Write summary now**. Questions are kept 100 days, summaries about a year. Installers are told on the code screen and under the Ask box that questions are saved to improve the service. Optional: set `CRON_SECRET` in Vercel so only Vercel can start the Monday job (without it, a repeat call does nothing because each week is only written once), and `TRENDS_MODEL` to use a different Claude model for the summary.
- **Stored answers** (`lib/answers.js`): the first time a question is asked for a unit, Claude's answer is saved in Upstash. When anyone asks the same question again for the same unit (same fault code and same key words, so "H62, what do I check?", "what does H62 mean" and the H62 fault card's Ask button all match), the stored answer comes back straight away, with no Claude cost, and it doesn't use one of the installer's questions for the day. Follow-ups in a conversation and photo questions always go to Claude, and answers that were cut short or said the manuals don't cover it aren't stored. Under a stored answer the installer can tap **Didn't help? Get a fresh answer**, which asks Claude again and replaces the stored answer. The admin page's **Stored answers** tab lists them with how often each was reused and how many installers said it didn't help, and lets you edit (an edited answer is kept even after a "didn't help"), delete or clear them. When a unit's manuals, field notes or answer rules change, that unit starts afresh. Set `STORED_ANSWERS=off` to send every question to Claude.
- **My questions** (`lib/history.js`, `api/history.js`): every question an installer asks, and the answer they got, is kept so they can look it up again from **My questions history** at the top of Ask, free (opening one never calls Claude or uses a day's question). They can search by fault code or words, filter by unit, open a whole chat, carry on with it, or delete it. With a personal installer code they're kept on the installer's account in Upstash (their latest 1000, no expiry), so they show on any phone they sign in on; deleting the installer deletes them. Each phone also keeps its own latest 150, which is all there is with the shared access code and what shows with no signal. **New question** starts a clean chat.

Optional settings: `ADMIN_CODE` (turns on installer accounts and the admin page; see `lib/accounts.js`), `DAILY_QUESTION_LIMIT` (default `5` Ask questions per installer, or per phone without an account, per day; `0` for no limit; see `lib/quota.js`), `CLAUDE_MODEL` (default `claude-opus-5-5`), `CLAUDE_EFFORT` (default `medium`), `CLAUDE_EXTRACT_MODEL` (default `claude-haiku-5-5`), and `STORED_ANSWERS=off` (see above), and `CLAUDE_FALLBACKS=off` if Anthropic ever rejects the automatic fallback setting on your account.

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
