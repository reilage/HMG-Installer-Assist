# HMG Primary Pipe Sizing Guidance (Panasonic J-series, J-series T-Cap and K-series)

Cite as **"HMG sizing guidance"** (method: HMG Pro Academy Training Handbook Level 1, pp.36-38; flow rates: HMG Panasonic nominal flow rate table).

Applies to the **primary pipework from the heat pump (outdoor unit) to the 3-way valve and the bypass / buffer**, i.e. the run that carries the heat pump's full flow.

**Panasonic only.** Do not use these figures for the Baxi Assure HP55 (or any other make). For the Baxi, use the flow rates and hydraulic data in the Baxi HP55 IM.

Originals: `sizing/originals/HMG-Pro-Academy-Pipe-Sizing-pp36-38.pdf`, `sizing/originals/panasonic-nominal-flowrates.png` (supplied by Donal Reilly, 24/10/2026).

---

## 1. The method (HMG Pro Academy handbook, pp.36-38)

Two equations combined.

**Mass flow rate (p.36)**
- Q = P ÷ (SHC × ΔT), Q in l/s
- For pipe sizing Q must be in m³/s: Q = P ÷ (1000 × SHC × ΔT)
- P = heat pump output (kW), SHC = specific heat capacity of water (4.2), ΔT = flow minus return temperature (°C)

**Pipe size (p.37)**
- A = Q ÷ V (A in m², Q in m³/s, V = velocity in m/s)
- A = πr², so d = 2 × √(Q ÷ (π × V)) in metres
- × 1000 for mm: **d = 2000 × √(Q ÷ (π × V))**

**Combined (p.38)**
- **d = 2000 × √(P ÷ (1000 × SHC × ΔT × π × V))**, d = minimum **internal** diameter in mm

**Worked example (p.38):** 7 kW heat pump, ΔT 5°C, velocity 0.9 m/s
- d = 2000 × √(7 ÷ (1000 × 4.2 × 5 × 3.14 × 0.9))
- d = 2000 × √(7 ÷ 59,346) = 2000 × √0.000118 = 2000 × 0.0109
- **d = 21.73 mm** internal

**Design velocity:** HMG recommended maximum is **1 m/s**, to avoid too much velocity (Donal Reilly, 24/10/2026). The handbook's worked example uses 0.9 m/s. Size at 1 m/s unless the installer chooses lower, and never pick a tube that runs over 1 m/s.

If you start from a flow rate in l/min instead of kW: Q (m³/s) = l/min ÷ 60,000, then d = 2000 × √(Q ÷ (π × V)).

## 2. Panasonic nominal flow rates (HMG table, J-series and K-series)

| Heat pump capacity | Nominal flow rate |
|---|---|
| 5 kW | 14.3 l/min |
| 7 kW | 20 l/min |
| 9 kW | 25.8 l/min |
| 12 kW | 34.4 l/min |
| 16 kW | 45.9 l/min |

These are the kW ÷ (4.18 × 5°C ΔT) flows, so the table assumes a 5°C ΔT.

## 3. Cross-check against the Panasonic manuals

| Size | HMG table | J-series SM (heating) | K-series IM rated flow (cool / heat) | Note |
|---|---|---|---|---|
| 3 kW | not listed | not in J range | 9.2 / 9.2 l/min (WH-UDZ03KE5) | K-series only. Not in HMG table. |
| 5 kW | 14.3 | 14.3 l/min, WH-MDC05J3E5 (p.12) | 14.3 / 14.3 (WH-UDZ05KE5) | Matches |
| 7 kW | 20 | 20.1 l/min, WH-MDC07J3E5 (p.15) | 19.2 / 20.1 (WH-UDZ07KE5) | Manuals say 20.1 heating (rounded to 20 in HMG table). K-series cooling is lower, 19.2. |
| 9 kW | 25.8 | 25.8 l/min, WH-MDC09J3E5 (p.18) | 23.5 / 25.8 (WH-UDZ09KE5) | Matches for heating. K-series cooling is lower, 23.5. |
| 12 kW | 34.4 | not covered (J-series SM covers 05/07/09 only) | not covered (K-series IM covers 03-09 only) | From HMG table only |
| 16 kW | 45.9 | not covered | not covered | From HMG table only |

**J-series T-Cap (added 26/10/2026):** the T-Cap service manual gives 25.8 l/min for the WH-MXC09J3E5 (T-Cap SM p.12) and 34.4 l/min for the WH-MXC12J6E5 (p.15), heating and cooling, at LWT 35°C and ΔT 5°C. Both match the HMG table, so the 9 and 12 kW rows are backed by a manual for the T-Cap. T-Cap water connections are Rp 1¼" (p.51), minimum 15 l/min with the main pump running (p.62), and insulate with 20 mm or more (p.51).

K-series rated flows: K-series IM p.8. J-series flows are "based on nominal capacity, LWT 35°C and ΔT 5°C" (J-series SM p.12).

Other manual points that matter for sizing:
- **Minimum flow:** both manuals say confirm the maximum water flow with the main pump running is **not less than 15 l/min** (J-series SM p.63, K-series IM p.12). Low flow at low water temperature can trigger H75 during defrost. On a 5 kW (14.3 l/min nominal) size the pipe so the circuit can actually pass 15 l/min. At 1 m/s that is 17.8 mm internal (18.8 mm at 0.9 m/s), still 22 mm copper.
- **Connections:** J-series monobloc water inlet/outlet are Rp 1¼" (J-series SM p.53, spec tables p.12). K-series tank unit space heating inlet/outlet are R1¼" (K-series IM p.5). The connection size is not the pipe size: size the pipe with the method above.
- **Insulation:** J-series SM p.53 says insulate the water circuit piping with 20 mm or more of insulation (condensation in cooling, heat loss, and freezing of outdoor pipework).
- **Glycol:** J-series SM recommends propylene glycol 40% where antifreeze is used. The HMG method uses SHC 4.2 (plain water). Glycol has a lower SHC, so it needs more flow for the same kW. Glycol correction is not covered by these sources.

## 4. Worked results (ΔT 5°C, SHC 4.2, max velocity 1 m/s)

Minimum internal diameter from the HMG equation at 1 m/s, then the smallest copper tube and the smallest MLCP pipe whose bore is at least that (so velocity stays at or under 1 m/s). The 0.9 m/s column is the handbook example velocity, for comparison.

| Heat pump | Flow (l/min) | Min bore @ 1 m/s | Min bore @ 0.9 m/s | Copper (velocity) | MLCP 2 mm wall (velocity) |
|---|---|---|---|---|---|
| 3 kW (K-series) | 9.2 (rated) | 14.0 mm (size for 15 l/min: 17.8 mm) | 14.7 mm | 22 mm (0.48 m/s) | 26 mm (0.40 m/s) |
| 5 kW | 14.3 | 17.4 mm | 18.4 mm | 22 mm (0.74 m/s) | 26 mm (0.63 m/s) |
| 7 kW | 20 | 20.6 mm | 21.7 mm | 28 mm (0.62 m/s; 22 mm would be 1.04) | 26 mm works (0.88 m/s), **32 mm preferred** (0.54 m/s) |
| 9 kW | 25.8 | 23.4 mm | 24.6 mm | 28 mm (0.80 m/s) | 32 mm (0.70 m/s; 26 mm would be 1.13) |
| 12 kW | 34.4 | 27.0 mm | 28.4 mm | 35 mm (0.69 m/s; 28 mm would be 1.06) | 32 mm (0.93 m/s) |
| 16 kW | 45.9 | 31.1 mm | 32.8 mm | 35 mm (0.92 m/s) | 40 mm (0.75 m/s; 32 mm would be 1.24) |

**7 kW on MLCP (HMG, Donal Reilly 24/10/2026):** 26 mm works, but 32 mm is preferred to allow for bends and elbows. 26 mm runs at 0.88 m/s with only 0.3 mm of bore to spare at the handbook's 0.9 m/s.

Velocities use the method's flow (kW ÷ (4.2 × ΔT)); the table's nominal flows give the same answers.

Key point for installers: **22 mm copper is too small for a 7 kW** (bore about 20.2 mm, the 7 kW needs 20.6 mm at 1 m/s and 21.7 mm at 0.9 m/s). It would run at about 1.04 m/s, over the 1 m/s max.

### Copper bore figures used (HMG to confirm)

The HMG handbook gives the required internal diameter but no copper tube bore table. To pick a tube size the assistant uses EN 1057 R250 standard wall copper:

| Copper OD | Wall | Bore |
|---|---|---|
| 15 mm | 0.7 mm | 13.6 mm |
| 22 mm | 0.9 mm | 20.2 mm |
| 28 mm | 0.9 mm | 26.2 mm |
| 35 mm | 1.2 mm | 32.6 mm |
| 42 mm | 1.2 mm | 39.6 mm |

**Pending Donal's confirmation** (24/10/2026): whether these are the bores HMG wants used. (Max velocity confirmed by Donal: 1 m/s.) Other pipe materials (e.g. PEX) have different bores: use the pipe maker's internal diameter.

### MLCP (multilayer composite pipe)

HMG uses MLCP with a **2 mm wall** (Donal Reilly, 24/10/2026), so bore = OD − 4 mm:

| MLCP OD | Wall | Bore |
|---|---|---|
| 16 mm | 2 mm | 12 mm |
| 20 mm | 2 mm | 16 mm |
| 26 mm | 2 mm | 22 mm |
| 32 mm | 2 mm | 28 mm |
| 40 mm | 2 mm | 36 mm |
| 50 mm | 2 mm | 46 mm |

The OD range is the usual MLCP size range; some makers use 25 mm instead of 26 mm, or a thicker wall on larger sizes. If the pipe on site differs, use its actual bore.

## 5. How the assistant should answer a sizing question

1. Confirm the unit (Panasonic J-series monobloc or K-series split) and its kW. If it's a Baxi, say this HMG guidance is for Panasonic only and use the Baxi manual.
2. Take the nominal flow from the HMG table (or the manual's rated flow for the 3 kW K-series).
3. Use ΔT 5°C and the 1 m/s maximum velocity unless the installer gives other values; say which values you used. Never recommend a tube running over 1 m/s.
4. Give the minimum internal diameter, then the copper size and the MLCP (2 mm wall) size with the velocity in each, unless the installer names one material. Show the sum briefly.
5. Remind them of the 15 l/min minimum flow check at commissioning and 20 mm+ insulation on outdoor runs.
6. Cite: "Source: HMG sizing guidance (Pro Academy handbook pp.36-38; HMG Panasonic flow rate table)" plus the manual page for any manual figure.
7. Out of scope (say so): pressure drop / pump head for long runs, glycol correction, emitter-side sizing, Baxi or other makes.
