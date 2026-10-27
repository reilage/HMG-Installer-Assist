# HMG System Volume, Bypass and Volumiser Guidance (retrofit and new build)

Cite as **"HMG design guidance"** (Donal Reilly, 27/10/2026), plus any manual page used.

HMG's rule for retrofit and new build systems (Donal Reilly, 27/10/2026): how much water volume the heat pump needs, when a buffer or volumiser is needed, and where the bypass goes. It is the first HMG design rule. It is answered in Ask only (no app button, Donal Reilly 27/10/2026).

---

## 1. HMG minimum volume: total volume available to the heat pump

| Heat pump | HMG minimum total volume |
|---|---|
| Panasonic J-series Mini Monobloc 5, 7 and 9 kW (WH-MDC05/07/09J3E5) | **30 L** |
| Panasonic K-series split 3, 5, 7 and 9 kW (WH-UDZ03/05/07/09KE5) | **30 L** |
| Panasonic L-series R290 5, 7 and 9 kW (WH-WDG05/07/09LE5) | **30 L** |
| Baxi Assure HP55 4 and 6 kW | **30 L** |
| Panasonic J-series T-Cap 9 and 12 kW (WH-MXC09J3E5 / WH-MXC12J6E5) | **50 L** |
| Baxi Assure HP55 8, 11 and 13 kW | **50 L** |

This is the **total volume available to the heat pump** (Donal Reilly, 27/10/2026).

**Use the HMG figures** (Donal Reilly, 27/10/2026). Where a manual gives a different minimum (e.g. the Baxi HP55 IM p.40 table), HMG's figure is the one to work to.

## 2. Zone it upstairs and downstairs first (HMG recommended)

HMG recommends one heating zone upstairs and one downstairs. That gives the volume above. **If the volume is there, no buffer is required.**

## 3. Underfloor heating: leave wet-room loops open instead of a volumiser

On underfloor heating, instead of fitting a volumiser, leave enough UFH loops **permanently open** (no actuator, or an actuator that is never closed) in wet rooms such as the **utility, bathroom, WC or ensuite**, so the open loops hold the required volume (Donal Reilly, 27/10/2026).

Open loop length needed, 16 mm UFH pipe with a 2 mm wall (12 mm bore, 0.113 L per metre):

| HMG volume | Open loop length needed |
|---|---|
| **30 L** | about **265 m** of open loop |
| **50 L** | about **442 m** of open loop |

Worked out as bore area π × 0.006² m² = 0.000113 m² = 0.113 L/m; 30 ÷ 0.113 = 265 m, 50 ÷ 0.113 = 442 m. The loop length is the full length of pipe in the open loops, flow and return. For example, a 100 m loop holds about 11.3 L, so three 100 m loops (34 L) cover 30 L and five 100 m loops (57 L) cover 50 L. Count the water in any radiator or other zone that is also always open towards the total.

## 4. Not enough volume: 2-port volumiser on the return (HMG preferred)

If the volume isn't there, HMG's preferred fix is a **2-port volumiser on the return**. It goes in series, so the flow passes straight through it. Use either:

- the **HMG 20 L 2-port volumiser**, or
- the **HMG 50 L 4-port buffer, using only 2 of its ports** as a 2-port volumiser.

The volumiser's water counts towards the total, so pick the one that makes up the shortfall.

**Why:** a 2-port volumiser on the return adds volume **without a hydraulic break**. **HMG prefer to avoid a hydraulic break where possible.**

## 5. Bypass valve: where it goes

- **No buffer, or a 2-port volumiser on the return:** a bypass valve is **required**. Set it so that, with every zone closed, the full flow goes through the bypass at the **nominal flow rate of the chosen heat pump**. This is the same check as the HMG commissioning checklist, stage 7 "Flow rate, all zones closed (bypass)".
- **4-port buffer (a hydraulic break):** **no bypass is required between the heat pump and the buffer.** A bypass **is required on the secondary side**, between the buffer and the heating emitters. The installer sets the secondary bypass to suit the system design and requirements (Donal Reilly, 27/10/2026).

Nominal flow rates (ΔT 5):

- J-series Mini Monobloc: 5 kW **14.3 l/min**, 7 kW **20 l/min**, 9 kW **25.8 l/min**. Sources: HMG nominal flow table; J-series SM pp.12/15/18.
- J-series T-Cap: 9 kW **25.8 l/min**, 12 kW **34.4 l/min**. Sources: HMG nominal flow table; T-Cap SM p.12, p.15.
- K-series 5, 7 and 9 kW: **14.3 / 20 / 25.8 l/min**. Sources: HMG nominal flow table; K-series IM p.8.
- L-series 5, 7 and 9 kW: **14.3 / 20.1 / 25.8 l/min**. Source: L-series SM.
- Baxi HP55 (A7/W35, ΔT 5 K, Baxi HP55 IM p.9): 4 kW **12.6**, 6 kW **17.9**, 8 kW **24.4**, 11 kW **33**, 13 kW **38.7 l/min**.
  - The Baxi minimum flow is 6.67 l/min (4, 6, 8 kW) or 11.67 l/min (11, 13 kW). Below it the unit trips on E0 / E8 (Baxi HP55 IM p.42).

Panasonic flow read-out: [Menu] › System check › System information › Pump flowrate (J-series SM p.24). The minimum is 15 l/min with the main pump running (J-series SM p.63, T-Cap SM p.62).

## 6. Manual notes that go with this

**Expansion vessel (the upper limit of system volume).** Adding a volumiser or buffer adds water, so check the built-in expansion vessel still covers the system.

- J-series Mini Monobloc: 6 L vessel. Total system water must be below **150 L**, otherwise add a field-supplied vessel (J-series SM p.62).
- T-Cap: total below **200 L** (T-Cap SM p.61).
- K-series and L-series: total below **200 L** (K-series IM p.10, K-series tank SM p.342, L-series SM p.90, p.221).
- Baxi HP55: 5 L effective vessel. The sizing tables are in Baxi HP55 IM pp.41-42.

**Baxi HP55 manual minimum volume.** The Baxi manual gives its own minimum volume in circulation. It must be there "at any time, even if there is no heating demand or when all the valves are closed". If it isn't, fit a buffer with the extra volume (Baxi HP55 IM p.40, Baxi ASHP Control IM p.20).

Water only, litres:

| Application | 4 kW | 6 kW | 8 kW | 11 kW | 13 kW |
|---|---|---|---|---|---|
| 35 °C underfloor | 27 | 29 | 77 | 81 | 91 |
| 45 °C low temp rads / fan convectors | 23 | 23 | 49 | 54 | 59 |

- HMG works to its own figures (30 L on the 4 and 6 kW, 50 L on the 8, 11 and 13 kW), not this table (Donal Reilly, 27/10/2026).
- With glycol, the Baxi figures are higher again (pp.40-41).

The Panasonic manuals give no minimum volume, so the HMG figure is the only figure for the Panasonic units.

This guidance covers both retrofit and new build.
