# HMG Site Assist

The Heat Merchants technical assistant for heat pump installers, as a web app that works on any phone and can be added to the home screen like an app. It has the same screens as the demo:

- **Ask**: type a question or send a photo of the controller or rating label. Claude answers only from the manufacturer manuals and HMG Field Notes, in the HMG answer format, with the page. Wiring questions show the matching PCB/terminal diagram.
- **Fault codes**: Panasonic J-series (52 codes) and Baxi HP55 (controller and outdoor unit codes), with HMG field notes on the cards.
- **Controller**: menu paths and button-by-button steps.
- **Manuals**: the original PDFs, plus 38 wiring and PCB diagrams.
- **Install**: outdoor unit clearances (HMG figures) and primary pipe sizing (Panasonic only).
- **Escalate**: builds the escalation to Technical Support, filled in from the chat.

A switch at the top keeps the Panasonic J-series, K-series and Baxi HP55 separate.

## What you need to do to get it live

1. **Get an Anthropic API key.** Sign up at https://console.anthropic.com, add a payment card under Billing, then Settings > API keys > Create key. Copy it somewhere safe; it's shown once. **Set a monthly spend limit** under Settings > Limits (for example €50 to start), so a mistake can never run up a big bill.
2. **Create a Vercel account** at https://vercel.com (the free Hobby plan is fine to start; a business using it day to day should move to Pro). Sign up with GitHub.
3. **Import this repository** in Vercel: Add New > Project > pick `HMG-Installer-Assist` > Deploy. No settings to change; Vercel reads `vercel.json`.
4. **Add the settings** in Vercel under Project > Settings > Environment Variables, then Deployments > Redeploy:
   - `ANTHROPIC_API_KEY`: the key from step 1. Without it everything works except Ask and "Fill from chat".
   - `APP_ACCESS_CODE`: a code you give your installers (for example `heatpump2026`). They type it once on each phone. Strongly recommended: without it anyone who finds the link can use Ask on your bill.
5. **Open the link Vercel gives you** (for example `hmg-installer-assist.vercel.app`) on your phone. On Android, tap Install when it offers; on iPhone, Share > Add to Home Screen. Later you can point a Heat Merchants address at it (for example `assist.heatmerchants.ie`) under Project > Settings > Domains.

### Optional: escalations that send themselves

Until this is set up, Escalate opens the installer's own email app with everything filled in (as in the demo). To have the app send it directly, with a copy to the installer:

1. Create an account at https://resend.com and verify the `heatmerchants.ie` domain (your IT person adds a few DNS records).
2. Add to Vercel: `RESEND_API_KEY`, and `ESCALATION_FROM` (for example `Site Assist <siteassist@heatmerchants.ie>`). Optionally `ESCALATION_TO` if escalations should go somewhere other than donal.reilly@heatmerchants.ie.

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
| `source/manuals/` | Manual text (one `--- Page N ---` marker per printed page) and the controller navigation references |
| `source/j-series-faults.json` | J-series error codes table (SM pp.164-165) |
| `source/wiring-index.json` | Catalogue of the diagrams in `public/wiring/` |

Edit a file on GitHub and commit: Vercel rebuilds and the app updates within a minute or two. The answer rules themselves are in `lib/prompt.js`, and the screens are `public/index.html`.

## How it's built

- `public/` is the app installers see: `index.html` (all screens), `knowledge.json` (fault lists, controller tasks, diagram catalogue), the PDFs, diagrams, icons, and `sw.js` (offline: screens, fault codes, diagrams and any manual already opened work with no signal; Ask needs signal).
- `api/` are small server functions on Vercel. `ask` finds the relevant manual pages, adds the HMG rules for the selected unit, and streams Claude's answer back. The API key stays on the server and is never sent to phones. `extract` fills the escalation form from the chat. `escalate` sends the email when Resend is set up. `config` tells the app what is switched on.
- `scripts/build-knowledge.mjs` turns `source/` into `data/knowledge.json` (server only, includes the manual text) and `public/knowledge.json`. Vercel runs it on every deploy (`npm run build`).
- Each question writes one line to Vercel > Logs (unit, pages used, tokens). A proper record of questions needs a database (see below).

Optional settings: `CLAUDE_MODEL` (default `claude-opus-5-5`), `CLAUDE_EFFORT` (default `medium`), `CLAUDE_EXTRACT_MODEL` (default `claude-haiku-5-5`), and `CLAUDE_FALLBACKS=off` if Anthropic ever rejects the automatic fallback setting on your account.

### Run it on a computer

Needs Node.js 20 or later.

```
npm install
cp .env.example .env     # then put your API key in .env
npm run dev              # open http://localhost:3000
npm test                 # tests against a stand-in Claude, no key needed
```

## Not built yet (from the plan)

- **Installer accounts.** For now there is one shared access code. Individual logins (so you can see who asked what, and switch off one installer) need a sign-in service such as Clerk or Supabase.
- **A record of every question**, to see what installers ask and where the manuals have no answer. Needs a small database (for example Vercel Postgres or Supabase).
- **Photos attached to escalation emails.**
- **An admin page to upload manuals.** For now, new manuals are converted to text and added to `source/`.
- **Voice**: phones' own dictation (the microphone on the keyboard) already works in the Ask box.

## Before going wide

- Check Panasonic and Baxi are happy for their manuals to be served from your app. The PDFs in `public/manuals/` can be downloaded by anyone with the link.
- Add a privacy notice: escalations contain site addresses, Eircodes and installer mobile numbers.
