# HMG Radiator Selection (Warmhaus Standard steel panel radiators)

Cite as **"HMG radiator list (Warmhaus)"** (Donal Reilly, 27/10/2026). HMG design guidance, not fault-finding.

The radiator range HMG supplies is the Warmhaus Standard steel panel range: Type 11 (single panel, single convector, 50 mm deep), Type 22 (double panel, double convector, 105 mm deep) and Type 33 (triple panel, triple convector, 160 mm deep). Heights 300, 500, 600, 700 and 900 mm, lengths 400 to 2000 mm. 142 sizes; the full list with product codes is in `warmhaus-radiators.json`.

---

## Output at heat pump temperatures

The list gives each radiator's output at **ΔT 50** (the catalogue figure: 75/65 °C water, 20 °C room) and its own **n-coefficient** (1.27 to 1.32). A heat pump runs much cooler, so the real output is far lower.

- Output at ΔT = output at ΔT 50 × (ΔT ÷ 50)^n, using the radiator's own n from the list.
- ΔT = mean water temperature − room temperature.
- HMG design: **45 °C flow** (the HMG maximum on radiators, see HMG weather compensation guidance) with the HMG **5 °C flow/return drop**, so 45/40 °C and a mean water temperature of **42.5 °C**.
- At a **21 °C room** (HMG default): ΔT 21.5, so a radiator gives about **33%** of its ΔT 50 output (factor 0.33 to 0.34 depending on n).
- Other rooms: 20 °C room ΔT 22.5 (about 35%), 18 °C room ΔT 24.5 (about 40%).
- Never size on a flow above 45 °C. For a lower design flow, mean water = flow − 2.5 °C.

## 1. Specified radiator won't fit: same output in a different size

- Work out the output of the specified radiator at the design condition (45 °C flow, room temperature). If it's a Warmhaus radiator, use the list. If it's another make, use its ΔT 50 output and n (n 1.3 if not known). If the spec gives the output at a different ΔT or flow, convert it to the same basis first.
- The replacement must give **at least** the specified output at the same design condition. Never less.
- Compare at 45 °C, not at ΔT 50: Types 11, 22 and 33 have slightly different n, so the same ΔT 50 output isn't quite the same at 45 °C.
- Respect the space the installer has: maximum length, maximum height, and depth off the wall (Type 33 is 160 mm deep).
- Give the closest options above the required output (not wildly oversized), with code, size and both outputs.
- **Installers prefer Type 22** (Donal Reilly, 27/10/2026): always give the closest Type 22 first, then the closest Type 33. If no single Type 22 in the space is enough, say so, give the biggest Type 22 that fits and offer two Type 22s, then the Type 33.
- A taller or deeper radiator can be shorter; a lower one needs to be longer or have more panels.

## 2. Radiator for a required output at 45 °C flow

- The installer gives the room's heat loss (W) at design conditions. Pick the smallest radiators whose output at 45 °C flow and the room temperature is at least that.
- Ask the room temperature if it matters (default 21 °C).
- If no single radiator in the space is big enough, use two radiators that add up to the heat loss, or a bigger type.

## In the app

Design › Radiators does both: size for a heat loss, or replace a specified radiator, with maximum length/height and the room temperature. Ask does the same and gives the Warmhaus code.
