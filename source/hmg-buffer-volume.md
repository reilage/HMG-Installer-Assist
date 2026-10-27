# HMG System Volume, Bypass and Volumiser Guidance (retrofit)

Cite as **"HMG design guidance"** (Donal Reilly, 27/10/2026), plus any manual page used.

HMG's rule for retrofit systems: how to get enough water volume in circulation, when a buffer or volumiser is needed, and how to set the bypass. It is the first HMG design rule; it covers the J-series Mini Monobloc, the J-series T-Cap and the Baxi HP55.

---

## 1. Zone it upstairs and downstairs first (HMG recommended)

For retrofit, HMG recommends one heating zone upstairs and one downstairs. That gives adequate system volume if **each zone on its own** holds at least:

| Heat pump | HMG minimum volume per zone |
|---|---|
| Panasonic J-series Mini Monobloc 5, 7 and 9 kW (WH-MDC05/07/09J3E5) | **30 L** |
| Baxi Assure HP55 | **30 L** |
| Panasonic J-series T-Cap 9 and 12 kW (WH-MXC09J3E5 / WH-MXC12J6E5) | **50 L** |

Each zone on its own, so that with one zone's valve closed the zone left open still holds the minimum.

**If each zone holds this volume, no buffer is required.**

## 2. Bypass valve: always mandatory

A bypass valve is **mandatory on every system**, buffer or no buffer.

Set it so that, with every zone closed, the full flow goes through the bypass at the **nominal flow rate of the chosen heat pump** (the same check as the HMG commissioning checklist, stage 7 "Flow rate, all zones closed (bypass)").

Nominal flow rates (ΔT 5):

- J-series Mini Monobloc: 5 kW **14.3 l/min**, 7 kW **20 l/min**, 9 kW **25.8 l/min** (HMG nominal flow table; J-series SM pp.12/15/18).
- J-series T-Cap: 9 kW **25.8 l/min**, 12 kW **34.4 l/min** (HMG nominal flow table; T-Cap SM p.12, p.15).
- Baxi HP55 (A7/W35, ΔT 5 K, Baxi HP55 IM p.9): 4 kW **12.6**, 6 kW **17.9**, 8 kW **24.4**, 11 kW **33**, 13 kW **38.7 l/min**. The Baxi minimum flow is 6.67 l/min (4, 6, 8 kW) or 11.67 l/min (11, 13 kW); below it the unit trips on E0 / E8 (Baxi HP55 IM p.42).

Panasonic read-out: [Menu] › System check › System information › Pump flowrate (J-series SM p.24). Minimum 15 l/min with the main pump running (J-series SM p.63, T-Cap SM p.62).

## 3. Not enough volume: 2-port volumiser on the return

If the zones can't hold the minimum volume, HMG's preferred fix is a **2-port volumiser on the return** (in series, so the flow passes straight through it), either:

- the **HMG 20 L 2-port volumiser**, or
- the **HMG 50 L 4-port buffer, using only 2 of its ports** as a 2-port volumiser.

The volumiser's water counts towards the volume, so pick the one that makes up the shortfall.

**Why:** a 2-port volumiser on the return adds volume **without a hydraulic break**. **HMG prefer to avoid a hydraulic break where possible**, so don't recommend a 4-port buffer used as a buffer / low loss header (a hydraulic break) as the first choice.

The bypass valve is still mandatory with a volumiser (section 2).

## 4. Manual notes that go with this

- **Expansion vessel (upper limit of system volume).** Adding a volumiser adds water, so check the built-in expansion vessel still covers the system. J-series Mini Monobloc: 6 L vessel, total system water below **150 L**, otherwise add a field-supplied vessel (J-series SM p.62). T-Cap: total below **200 L** (T-Cap SM p.61). Baxi HP55: 5 L effective vessel, sizing tables in Baxi HP55 IM pp.41-42.
- **Baxi HP55 manual minimum volume.** The Baxi manual gives its own minimum volume in circulation, which must be there "at any time, even if there is no heating demand or when all the valves are closed"; if not, fit a buffer with the extra volume (Baxi HP55 IM p.40, Baxi ASHP Control IM p.20). Water only, litres:

| Application | 4 kW | 6 kW | 8 kW | 11 kW | 13 kW |
|---|---|---|---|---|---|
| 35 °C underfloor | 27 | 29 | 77 | 81 | 91 |
| 45 °C low temp rads / fan convectors | 23 | 23 | 49 | 54 | 59 |

  For the 4 and 6 kW the HMG 30 L covers it. **For the 8, 11 and 13 kW the Baxi manual minimum is higher than 30 L: give both figures and work to the higher one (the manual's).** With glycol the Baxi figures are higher again (pp.40-41).

## 5. Not covered yet

- **Panasonic K-series split** and **Panasonic L-series R290**: HMG has not given a volume figure. The Panasonic manuals on file give no minimum system volume either, only the expansion vessel upper limit (total water below 200 L: K-series IM p.10, K-series tank SM p.342, L-series SM p.90, p.221). Say HMG has no volume figure for these units yet and refer to Heat Merchants Technical Support for the volume and whether a volumiser is needed. The bypass is still set to the unit's nominal flow with all zones closed (HMG commissioning checklist, stage 7).
- New build: this guidance is for retrofit.
