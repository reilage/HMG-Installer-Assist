# HMG Weather Compensation Curve Settings

Cite as **"HMG weather compensation guidance"** (Donal Reilly, 25/10/2026), plus the manual page for the controller steps.

HMG recommended heating curve (weather compensation) starting points. Two points on the curve: the flow temperature the heat pump aims for at -3 °C outdoors (design cold day) and at 15 °C outdoors (mild day). Set the curve at commissioning, then fine-tune for the house.

---

## HMG recommended curves (Donal Reilly, 25/10/2026)

| Emitters | Flow at -3 °C outdoor | Flow at 15 °C outdoor |
|---|---|---|
| Steel radiators | 45 °C | 35 °C |
| Underfloor heating | 35 °C | 25 °C |

**Maximum flow temperature (HMG rule, any heat pump): 45 °C on steel radiators, 35 °C on underfloor heating.** Never set the flow higher than this, whatever the outdoor temperature (Donal Reilly, 25/10/2026).

Same HMG figures for all three units (Panasonic J-series, Panasonic K-series, Baxi HP55). Only the way you enter them on the controller differs.

Both curves have the same slope: 10 °C of flow over 18 °C of outdoor change, about 0.56 °C of flow per 1 °C outdoor.

---

## Panasonic J-series and K-series: enter the four points directly

The Panasonic compensation curve is set as four temperature points (2 outdoor, 2 water), so the HMG figures go in exactly as they are.

Path: Installer setup → Operation setup → Heat → Water temp. for heating ON → Compensation curve.

- Outdoor (X axis) low point: **-3 °C**; flow (Y axis) at that point: **45 °C rads / 35 °C UFH**.
- Outdoor (X axis) high point: **15 °C**; flow (Y axis) at that point: **35 °C rads / 25 °C UFH**.
- Maximum flow: the -3 °C flow point is the top of the HMG curve, so it must be no higher than **45 °C rads / 35 °C UFH**. The Panasonic manuals on file have no separate maximum flow setting, so the curve point is how you hold it. Note the factory curve goes to 55 °C at -5 °C, which is over the HMG maximum for both, so always change it.
- Factory default: -5 °C → 55 °C, 15 °C → 35 °C. Range: outdoor -20 to 15 °C, water 20 to 60 °C (WH-MDC). The HMG figures are inside the range.
- 2-zone system: the four points must be entered for Zone 1 and Zone 2 separately (e.g. rads on one zone, UFH on the other).
- With a room thermostat or room thermistor, the curve can still be used; the unit shifts it with the thermostat on/off (heats up very slowly → shift up; very fast → shift down).
- Installer setup is locked while the unit runs: switch off with [Operate] first, then [Menu]; switch back on with [Operate] at the end.

Manual pages: J-series SM pp.31-32 and p.83 (12.4.4 Operation Setup, item 24); K-series IM p.31 (3-4 Operation Setup, item 26). Room thermostat / thermistor shift: J-series SM p.65, K-series IM p.14.

Panasonic L-series R290 (added 26/10/2026): entered the same way, Operation setup › Heat › Water temp. for heating ON › Compensation curve (L-series SM p.62, p.119, item 26). The L-series curve can be set from 20 °C up to 75 °C flow (p.62), so keeping to the HMG maximum (45 °C radiators, 35 °C underfloor) matters even more.

---

## Baxi Assure HP55 (ASHP Control): gradient + base temperature

The Baxi controller doesn't take two points. It uses a gradient (CP230) and a curve base temperature (CP210), and works out the flow setpoint from the room setpoint (Baxi ASHP Control IM p.74):

CM070 (flow setpoint) = (CM190 room setpoint − CM210 outdoor temp) × CP230 + CP210 (when CP210 is above 15 °C).

Worked out from that formula for the HMG curves, with a **20 °C room setpoint**:

| Emitters | CP230 gradient | CP210 base (comfort) | CP000 max flow | Gives at -3 °C | Gives at 15 °C |
|---|---|---|---|---|---|
| Steel radiators | 0.6 | 32 °C | 45 °C | 45 °C (capped) | 35 °C |
| Underfloor heating | 0.6 | 22 °C | 35 °C | 35 °C (capped) | 25 °C |

(The exact HMG slope is 0.56; 0.6 is the nearest 0.1 step, which would give about 45.8 / 35.8 °C at -3 °C. CP000 caps it at the HMG maximum.)

- **Maximum flow (HMG rule): set CP000 (Zone3 CP001) to 45 °C for radiators or 35 °C for underfloor.** Factory setting is 75 °C on Zone1 (50 °C on Zone3), well over the HMG maximum, so always change it. The heat pump-wide Max CH flow setpoint AP063 (Heat Pump › General, default 75 °C, IM p.56) can also be set to 45 °C (or 35 °C on an underfloor-only system).

- Path: [Menu] › Installer (code 0012) › Installation setup › Zone1 (or Zone3) › Heat curve. Zone1: CP230 gradient, CP210 comfort base, CP220 reduced base, CP000 max flow. Zone3 uses CP231, CP211, CP221, CP001.
- CP220 is the base used in reduced (eco) periods. Set it the same as CP210 if you don't want a lower curve in reduced periods.
- The curve only works with an outdoor sensor and control strategy CP780 (Zone1 > General) on Automatic, Outdoor temp based, or Outdoor & room based (not Room temp based). Factory setting is Automatic (IM p.63, p.73).
- The room setpoint moves the curve: each 1 °C above 20 °C raises the flow by about 0.6 °C (the gradient). If the room setpoint isn't 20 °C, re-work the base: CP210 = flow at 15 °C − (room setpoint − 15) × 0.6.
- Check it changed: Installer › Signals › Zone1 › Zone Tflow Setpoint CM070 should be close to the curve for today's outdoor temperature (CM210).
- Baxi's own guide (IM p.43) says UFH gradient 0.4-0.7 and radiators about 1.5. The HMG radiator gradient (0.6) is much flatter than Baxi's 1.5 because HMG designs radiators for a 45 °C maximum flow. Use the HMG figures.
- Fine-tune by 0.1 every 24 hours, mid-season then mid-winter (IM p.42).

Manual pages: Baxi ASHP Control IM pp.42-43 (8.4.1 Setting the heating curve), p.61 (Tab.47 Heat curve parameters, ranges: gradient 0-4, base 15-90 °C, max flow 7-75 °C Zone1), p.63 (CP780), pp.73-75 (9.2.5 Operation of the heating curve, formula and examples).

---

## Commissioning notes

- These are starting points. If the house is short of heat on cold days, raise the -3 °C flow point (Panasonic) or the gradient (Baxi). If it's short on mild days, raise the 15 °C point (Panasonic) or the base (Baxi). Change a little at a time and give it a day.
- Never set the flow above the HMG maximum (45 °C rads, 35 °C UFH), or the emitter or screed maker's maximum if that is lower.
