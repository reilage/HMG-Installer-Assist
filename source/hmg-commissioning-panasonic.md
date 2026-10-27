# HMG Commissioning Procedure: Panasonic

Cite as **"HMG commissioning procedure"**, plus the manual page given on the step.

Step-by-step commissioning on site, in order, for the Panasonic J-series monobloc (Part A), the K-series split (Part B), the J-series T-Cap monobloc (Part C) and the L-series R290 Hydromodule + Tank (Part D). The parts are kept separate: never use one unit's steps for the other. The app shows this as a tick list under Controller › Commissioning.

How this file works (for editing on GitHub):
- `# Part A` / `# Part B` / `# Part C` / `# Part D` start each unit. `## ` lines are the stages. Each `- **Step.**` line is one tick box; the text after it is what the installer sees.
- **HMG TO CONFIRM** marks a setting where HMG hasn't given a recommended value yet. The app shows a "HMG value needed" tag on it and gives the factory setting. When Donal confirms a value, replace the HMG TO CONFIRM text with "HMG: <value> (Donal Reilly, <date>)".
- Recommended values that are already HMG's: heating curve and maximum flow (HMG weather compensation guidance, 25/10/2026), flow rates (HMG sizing guidance), and the F12 site checks (HMG Field Notes).

---

# Part A: J-series Mini Monobloc R32 (WH-MDC05/07/09J3E5)

## 1. Before you switch on

- **Pipework and wiring finished.** All water pipework and electrical cable connections are properly done before filling or test run (J-series SM p.63).
- **Pipe duct sealed and dry.** The duct carrying the flow and return pipes between the outdoor and indoor unit is sealed and has no water in it. A wet duct makes the unit run constantly and trip on F12 (HMG Field Notes – F12 high pressure trips on site).
- **Cylinder sensor in place.** If there is a DHW cylinder: the cylinder sensor is fully in the sensor pocket at the correct position, so it reads the real cylinder temperature. A misplaced sensor causes F12 trips (HMG Field Notes – F12 high pressure trips on site).
- **Fill and purge the water circuit.** Remove the cover (2 screws). Turn the air purge valve plug anticlockwise one full turn. Set the pressure relief valve lever DOWN. Fill at more than 1 bar through the water inlet until water flows freely from the pressure relief valve drain hose (J-series SM p.62).
- **Water only, no glycol.** HMG recommends water only in the circuit (HMG, Donal Reilly 25/10/2026). Set Circulation liquid to Water in stage 3, and keep Anti freezing on Yes. Note: the manual itself recommends 40% propylene glycol (J-series SM p.63).
- **Expansion vessel big enough.** Built-in vessel is 6 L at 1 bar pre-charge, good for up to 150 L of system water without antifreeze. Over 150 L, or with glycol, add a vessel. If the highest point is more than 7 m above the unit, set the pre-charge to (height in m × 10 + 30) kPa (J-series SM p.62).
- **Water pressure.** With all power off, fill to **1 to 1.5 bar** on the unit's water pressure gauge (HMG, Donal Reilly 25/10/2026). Never lower than 0.05 MPa (0.5 bar) (J-series SM p.62).
- **Pressure relief valve tested.** Turn the lever horizontal and listen for the clack of water draining, then push the lever back down. If water keeps draining, switch off and escalate (J-series SM p.62).

## 2. First power-up

- **Power on, pump running, no leaks.** Switch on the supply and check the water pump runs and there are no leaks at the pipe connections. Refit the cover (J-series SM p.62).
- **RCCB tested.** With power on, press TEST on the RCCB: the lever drops to 0. Touch nothing else inside. Set the lever back ON (J-series SM p.63).
- **Language, clock and date set.** About 10 s after power-up, press any button: choose the language, clock format (24h) and date and time, [OK] after each. The controller won't open the menus until this is done (J-series SM p.22, p.75).

## 3. System setup (unit OFF)

- **Get into Installer setup.** Press [Operate] ⏻ so the operation light goes out, then [Menu] (top right) › Installer setup › System setup. Installer setup is locked while the unit runs (J-series SM p.23; HMG Field Notes – Can't get into Installer setup).
- **Optional PCB connectivity.** Yes only if the optional PCB (CZ-NS4P) is fitted, e.g. for 2 zones, solar or SG ready. Otherwise leave No (J-series SM p.26, p.66).
- **Zone & Sensor.** HMG: **Room thermostat, External**, with the weather compensation curve (HMG, Donal Reilly 25/10/2026). Options are Water temperature, Room thermostat (Internal or External) or Room thermistor; 1 or 2 zones with the optional PCB (J-series SM p.26, p.78).
- **Heater capacity.** HMG: **3 kW** backup heater on the 5, 7 and 9 kW models (HMG, Donal Reilly 25/10/2026). Options 3, 6 or 9 kW depending on model (J-series SM p.26, p.78).
- **Anti freezing.** HMG: **Yes** (also the factory setting) (HMG, Donal Reilly 25/10/2026) (J-series SM p.26).
- **Tank connection and tank heater.** If a DHW cylinder is fitted: Tank connection = Yes, then Tank heater = Internal or External (factory Internal, ON time 0:20). To use the tank heater also set Function setup › Tank heater ON (J-series SM pp.26-27, p.79).
- **Bivalent connection.** Only if a boiler is connected: Yes › Auto or SG ready › pattern (Alternative, Parallel, Advanced parallel). Otherwise leave No (J-series SM pp.27-29, p.80).
- **Circulation liquid.** Water or Glycol, to match what's in the system (J-series SM p.30, p.82).
- **Pump flowrate.** HMG: **ΔT** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Other option Max. duty (J-series SM p.31, p.82).

## 4. Operation setup › Heat

- **Heating curve (HMG).** Operation setup › Heat › Water temp. for heating ON › Compensation curve. HMG: steel radiators -3 °C outdoor → 45 °C flow, 15 °C → 35 °C. Underfloor -3 °C → 35 °C, 15 °C → 25 °C. The factory curve (-5 °C → 55 °C) is over the HMG maximum, so always change it. On 2 zones set Zone 1 and Zone 2 (HMG weather compensation guidance; J-series SM pp.31-32, p.83).
- **Maximum flow (HMG).** Never above 45 °C on radiators or 35 °C on underfloor. On the Panasonic the -3 °C curve point is the maximum: there is no separate maximum flow setting in the manual (HMG weather compensation guidance).
- **Outdoor temp. for heating OFF.** HMG: **24 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 5-35 °C (J-series SM p.32, p.83).
- **ΔT for heating ON.** HMG: **5 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 1-15 °C (J-series SM p.32, p.83).
- **Heater ON/OFF.** HMG: outdoor temp for heater ON **-3 °C** (factory 0 °C) (HMG, Donal Reilly 25/10/2026). Leave the rest at factory: delay 30 min, heater ON at 4 °C below target water temperature, OFF at 2 °C below (J-series SM pp.32-33, p.83).

## 5. Operation setup › Tank (cylinder only)

- **Tank timings.** HMG: Tank re-heat temp **-8 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Leave Floor operation time (8:00) and Tank heat up time (1:00) at factory (J-series SM pp.34-35, p.84).
- **Sterilization (legionella).** HMG: **65 °C for 10 min** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Operation setup › Tank › Sterilization. Set the day and time to suit the customer in Function setup › Sterilization (J-series SM pp.23, 34-35, p.84).

## 6. Service setup

- **Air purge.** Service setup › Pump maximum speed › [►] to Operation › [▲]/[▼] to Air Purge › [OK]. Run it until the flow reading is steady. [Operate] stops the pump (J-series SM p.35, pp.151-152).
- **Flow rate checked.** Read Flow rate on the same screen. Must be at least 15 l/min with the main pump running; low flow can cause H75 during defrost (J-series SM p.63). Nominal flow: 5 kW 14.3, 7 kW 20, 9 kW 25.8 l/min (HMG sizing guidance; J-series SM p.12). HMG: leave pump Max. Duty at the factory setting, adjusting only if the site needs it (HMG, Donal Reilly 25/10/2026).
- **Service contact.** Service setup › Service contact › Contact 1: HMG: **Heat Merchants Technical Support** (HMG, Donal Reilly 25/10/2026) (J-series SM p.36). No phone number needed.
- **Screed drying.** Only on a new screed floor: Service setup › Dry concrete › Edit, set stages and temperatures (25-55 °C), then ON. Follow the screed maker's schedule (J-series SM p.36, pp.155-156).

## 7. Test run

- **Start the unit.** Press [Operate] ⏻ to switch back on and run heating (J-series SM p.63).
- **Pressure while running.** Gauge reads between 0.05 and 0.3 MPa (0.5 to 3 bar) (J-series SM p.63).
- **No leaks.** Check every water connection for leaks during the test run (J-series SM p.53).
- **Flow rate, all zones open.** With the heating running and every zone valve open, read the flow: [Menu] › System check › System information › Pump flowrate. It should be at least 15 l/min and close to the unit's nominal flow from stage 6 (J-series SM p.24, p.63; HMG commissioning check, Donal Reilly 25/10/2026).
- **Flow rate, all zones closed (bypass).** Close every zone so all the flow goes through the bypass valve. Read the flow again in the same way, and adjust the bypass valve until it reaches the unit's nominal flow rate from stage 6 (HMG: nominal flow across the bypass, Donal Reilly 25/10/2026).
- **No errors.** [Menu] › System check › Error history: nothing new. Clear old install errors: [OK], [◄] to Yes, [OK] (J-series SM p.24, p.163).
- **Water filter cleaned.** After the test run, clean the water filter and refit it (J-series SM p.63).

## 8. Handover

- **Explain it to the customer.** Show the customer how to use the controller and how to look after the unit (J-series SM p.4).
- **Unit left running.** Unit ON at the controller, covers refitted, and Error history clear.

---

# Part B: K-series split Hydromodule + Tank (WH-ADC0309K3E5/K6E5, WH-UDZ03-09KE5)

## 1. Before you switch on

- **Pipework and wiring finished.** All water and refrigerant pipework and electrical cable connections are properly done (K-series IM p.12).
- **Tank unit and pipework checked.** Tank unit properly installed on a concrete floor, no gas leak at the flare nuts, flare nut connections insulated, water drainage properly done (K-series IM p.12 checklist).
- **Refrigerant side.** Refrigerant pipework, leak test and evacuation by an F-Gas certified installer. R32 is mildly flammable (A2L). The outdoor unit manual isn't on file, so the app has no step-by-step for this.
- **Fill the DHW tank first.** Drain tap CLOSED, all taps and showers OPEN, fill through the tank connector: water should flow from the taps after 20-40 min. Open the drain tap for 10 s to release air, then close it. Turn the safety relief valve knob anticlockwise and hold 10 s, then back (K-series IM p.9).
- **Fill and purge the heating circuit.** Turn the air purge valve plug anticlockwise one full turn. Pressure relief valve lever DOWN. Fill at more than 1 bar until water flows freely from the pressure relief valve hose. Don't block the hose outlet (K-series IM p.9).
- **Expansion vessel big enough.** Built-in vessel is 10 L at 1 bar, good for up to 200 L of system water (tank unit piping is about 5 L). Over 200 L, add a vessel. Keep the height difference of the water circuit within 10 m (K-series IM p.10).
- **Pressure relief valve tested.** With power off, turn the lever horizontal and listen for the clack, then push it back down. If water keeps draining, switch off and escalate (K-series IM p.10).
- **Water only, no glycol.** HMG recommends water only in the circuit (HMG, Donal Reilly 25/10/2026). Set Circulation liquid to Water in stage 3, and keep Anti freezing on Yes.

## 2. First power-up

- **Power on, pump running, no leaks.** Switch on the tank unit and check the water pump runs and there are no leaks at the connections (K-series IM p.9).
- **RCCB/ELCB tested.** With power on, test the RCCB/ELCB and set it back ON (K-series IM pp.10-11).
- **Winter warm-up.** In winter, leave the unit powered on standby for at least 15 minutes before the test run, so the refrigerant warms up and no wrong error code shows (K-series IM p.12).
- **Language, clock, date and front grille.** Press any button: language, clock format, date and time, [OK] after each. When asked "Is O/D front grille fixed?" select Yes. With two controllers, the first to confirm a language becomes the main one (K-series IM p.22).
- **Water pressure on the controller.** [Menu] › System check › System information › [▼] to Water pressure. Fill to **1 to 1.5 bar** (HMG, Donal Reilly 25/10/2026). Never lower than 0.05 MPa (0.5 bar) (K-series IM p.10, p.34).

## 3. System setup (unit OFF)

- **Get into Installer setup.** Press [Operate] ⏻ so the operation light goes out, then [Menu] (top right) › Installer setup › System setup (HMG Field Notes – Can't get into Installer setup).
- **Optional PCB connectivity.** Yes only if the optional PCB (CZ-NS5P) is fitted. Otherwise leave No (K-series IM p.13, p.25).
- **Zone & Sensor.** HMG: **Room thermostat, External**, with the weather compensation curve (HMG, Donal Reilly 25/10/2026). Options are Water temperature, Room thermostat (Internal or External) or Room thermistor (K-series IM pp.13-14, p.25).
- **Heater capacity.** HMG: **3 kW** backup heater on the 3, 5, 7 and 9 kW models, **6 kW** on the 12 kW (HMG, Donal Reilly 25/10/2026). Options depend on model (K-series IM p.25).
- **Anti freezing.** HMG: **Yes** (also the factory setting) (HMG, Donal Reilly 25/10/2026) (K-series IM p.25).
- **DHW capacity.** HMG: **Standard** (factory is Variable, so change it) (HMG, Donal Reilly 25/10/2026) (K-series IM p.25).
- **Bivalent connection.** Only if a boiler is connected: Yes › SG ready, Auto or Smart. Otherwise leave No (K-series IM pp.26-27).
- **Circulation liquid.** Water or Glycol, to match what's in the system (K-series IM p.29).
- **Pump flowrate.** HMG: **ΔT** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Other option Max. duty (K-series IM p.30).
- **DHW defrost.** HMG: **Yes** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Uses the DHW tank for defrost (K-series IM p.30).
- **Heating control.** HMG: **Comfort** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Other option Efficiency (K-series IM p.30).
- **Electrical anode.** Yes on K3E5AN/K6E5AN models, No on the others: check it matches the model on the rating label (K-series IM p.30).
- **Two controllers.** Only if two remotes are fitted: Installer setup › Remote control setup › RC selection = Dual (K-series IM p.33).

## 4. Operation setup › Heat

- **Heating curve (HMG).** Operation setup › Heat › Water temp. for heating ON › Compensation curve. HMG: steel radiators -3 °C outdoor → 45 °C flow, 15 °C → 35 °C. Underfloor -3 °C → 35 °C, 15 °C → 25 °C. The factory curve (-5 °C → 55 °C) is over the HMG maximum, so always change it. On 2 zones set both (HMG weather compensation guidance; K-series IM p.31).
- **Maximum flow (HMG).** Never above 45 °C on radiators or 35 °C on underfloor. On the Panasonic the -3 °C curve point is the maximum: there is no separate maximum flow setting in the manual (HMG weather compensation guidance).
- **Outdoor temp. for heating OFF.** HMG: **24 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 5-35 °C (K-series IM p.31).
- **ΔT for heating ON.** HMG: **5 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 1-15 °C (K-series IM p.31).
- **Heater ON/OFF.** HMG: outdoor temp for heater ON **-3 °C** (factory 0 °C) (HMG, Donal Reilly 25/10/2026). Leave the rest at factory: delay 30 min, heater ON at 4 °C below target water temperature, OFF at 2 °C below (K-series IM p.31).

## 5. Operation setup › Tank

- **Tank timings.** HMG: Tank re-heat temp **-8 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Leave Floor operation time (8 h) and Tank heat up time (60 min) at factory (K-series IM pp.32-33).
- **Sterilization (legionella).** HMG: **65 °C for 10 min** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Set the day and time to suit the customer (K-series IM pp.32-33).

## 6. Service setup

- **Air purge.** Service setup › Pump maximum speed, [◄]/[►] to Operation, [▲]/[▼] to Air Purge, [OK]. Run it until the flow reading is steady (K-series IM p.33).
- **Flow rate checked.** Read Flow rate on the same screen. Must be at least 15 l/min with the main pump running; low flow can cause H75 during defrost (K-series IM p.12). Rated flow: 3 kW 9.2, 5 kW 14.3, 7 kW 20.1, 9 kW 25.8 l/min (HMG sizing guidance; K-series IM p.8). HMG: leave pump Max. Duty at the factory setting, adjusting only if the site needs it (HMG, Donal Reilly 25/10/2026).
- **Service contact.** Service setup › Service contact › Contact 1: HMG: **Heat Merchants Technical Support** (HMG, Donal Reilly 25/10/2026) (K-series IM p.33). No phone number needed.
- **Screed drying.** Only on a new screed floor: Service setup › Dry concrete › Edit (25-55 °C, 1-99 stages), then ON. Follow the screed maker's schedule (K-series IM p.33).

## 7. Test run

- **Start the unit.** Press [Operate] ⏻ to switch back on and run heating (K-series IM p.12).
- **Pressure while running.** System check › System information › Water pressure reads 0.05-0.3 MPa (0.5-3 bar). If not, adjust the pump speed; if that doesn't fix it, escalate (K-series IM p.12, p.34).
- **Heating normal, no leaks, no odd noise.** Heating works, no abnormal sound, no water leaks from the tank unit during the test run (K-series IM p.12 checklist).
- **Safety relief valve.** The DHW safety relief valve knob has been turned to release air (K-series IM p.12 checklist).
- **Flow rate, all zones open.** With the heating running and every zone valve open, read the flow: [Menu] › System check › System information › Pump flowrate. It should be at least 15 l/min and close to the unit's nominal flow from stage 6 (K-series IM p.12, p.34; HMG commissioning check, Donal Reilly 25/10/2026).
- **Flow rate, all zones closed (bypass).** Close every zone so all the flow goes through the bypass valve. Read the flow again in the same way, and adjust the bypass valve until it reaches the unit's nominal flow rate from stage 6 (HMG: nominal flow across the bypass, Donal Reilly 25/10/2026).
- **No errors.** [Menu] › System check › Error history: nothing new (K-series IM p.34).
- **Filters cleaned.** After the test run, clean the magnetic water filter and the water filter and refit them (K-series IM p.12).

## 8. Handover

- **Explain it to the customer.** Show the customer how to use the controller and how to look after the unit (K-series IM p.1).
- **Unit left running.** Unit ON at the controller, covers refitted, and Error history clear.

---

# Part C: J-series T-Cap monobloc R32 (WH-MXC09J3E5 / WH-MXC12J6E5)

## 1. Before you switch on

- **Pipework and wiring finished.** All water pipework and electrical cable connections are properly done before filling or test run (T-Cap SM p.61).
- **Pipe duct sealed and dry.** The duct carrying the flow and return pipes between the outdoor and indoor unit is sealed and has no water in it. A wet duct makes the unit run constantly and trip on F12 (HMG Field Notes – F12 high pressure trips on site).
- **Cylinder sensor in place.** If there is a DHW cylinder: the cylinder sensor is fully in the sensor pocket at the correct position, so it reads the real cylinder temperature. A misplaced sensor causes F12 trips (HMG Field Notes – F12 high pressure trips on site).
- **Fill and purge the water circuit.** Open the cabinet front plate to reach the pressure relief valve and air purge valve. Turn the air purge valve plug anticlockwise one full turn. Set the pressure relief valve lever DOWN. Fill at more than 1 bar through the water inlet until water flows freely from the pressure relief valve drain hose (T-Cap SM p.60).
- **Water only, no glycol.** HMG recommends water only in the circuit (HMG, Donal Reilly 25/10/2026). Set Circulation liquid to Water in stage 3, and keep Anti freezing on Yes. Note: the manual itself recommends 40% propylene glycol (T-Cap SM p.61).
- **Expansion vessel big enough.** Built-in vessel is 10 L at 1 bar pre-charge, good for up to 200 L of system water without antifreeze. Over 200 L, or with glycol, add a vessel. If the highest point is more than 7 m above the unit, set the pre-charge to (height in m × 10 + 30) kPa (T-Cap SM p.61).
- **Water pressure.** With all power off, fill to **1 to 1.5 bar** on the unit's water pressure gauge (HMG, Donal Reilly 25/10/2026). Never lower than 0.05 MPa (0.5 bar) (T-Cap SM p.61).
- **Pressure relief valve tested.** Turn the lever horizontal and listen for the clack of water draining, then push the lever back down. If water keeps draining, switch off and escalate (T-Cap SM p.61).

## 2. First power-up

- **Power on, pump running, no leaks.** Switch on the supply and check the water pump runs and there are no leaks at the pipe connections. Refit the cabinet front plate (T-Cap SM p.60).
- **RCCB tested.** With power on, press TEST on the RCCB: the lever drops to 0. Touch nothing else inside. Set the lever back ON (T-Cap SM p.61).
- **Language, clock and date set.** About 10 s after power-up, press any button: choose the language, clock format (24h) and date and time, [OK] after each. The controller won't open the menus until this is done (T-Cap SM p.19, p.74).

## 3. System setup (unit OFF)

- **Get into Installer setup.** Press [Operate] ⏻ so the operation light goes out, then [Menu] (top right) › Installer setup › System setup. Installer setup is locked while the unit runs (T-Cap SM p.20; HMG Field Notes – Can't get into Installer setup).
- **Optional PCB connectivity.** Yes only if the optional PCB (CZ-NS4P) is fitted, e.g. for 2 zones, solar or SG ready. Otherwise leave No (T-Cap SM p.23, p.65).
- **Zone & Sensor.** HMG: **Room thermostat, External**, with the weather compensation curve (HMG, Donal Reilly 25/10/2026). Options are Water temperature, Room thermostat (Internal or External) or Room thermistor; 1 or 2 zones with the optional PCB (T-Cap SM p.23, p.77).
- **Heater capacity.** HMG: **6 kW** backup heater on both the 9 kW and the 12 kW T-Cap (HMG, Donal Reilly 26/10/2026). Note the manual's 9 kW spec (p.12) lists 3 kW: set 6 kW. Options 3, 6 or 9 kW depending on model (T-Cap SM p.23, p.77).
- **Anti freezing.** HMG: **Yes** (also the factory setting) (HMG, Donal Reilly 25/10/2026) (T-Cap SM p.23).
- **Tank connection and tank heater.** If a DHW cylinder is fitted: Tank connection = Yes, then Tank heater = Internal or External (factory Internal, ON time 0:20). To use the tank heater also set Function setup › Tank heater ON (T-Cap SM pp.23-24, p.78).
- **Bivalent connection.** Only if a boiler is connected: Yes › Auto or SG ready › pattern (Alternative, Parallel, Advanced parallel). Otherwise leave No (T-Cap SM pp.24-26, p.79).
- **Circulation liquid.** Water or Glycol, to match what's in the system (T-Cap SM p.27, p.81).
- **Pump flowrate.** HMG: **ΔT** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Other option Max. duty (T-Cap SM p.28, p.81).

## 4. Operation setup › Heat

- **Heating curve (HMG).** Operation setup › Heat › Water temp. for heating ON › Compensation curve. HMG: steel radiators -3 °C outdoor → 45 °C flow, 15 °C → 35 °C. Underfloor -3 °C → 35 °C, 15 °C → 25 °C. The factory curve (-5 °C → 55 °C) is over the HMG maximum, so always change it. On 2 zones set Zone 1 and Zone 2 (HMG weather compensation guidance; T-Cap SM pp.28-29, p.82).
- **Maximum flow (HMG).** Never above 45 °C on radiators or 35 °C on underfloor. On the Panasonic the -3 °C curve point is the maximum: there is no separate maximum flow setting in the manual (HMG weather compensation guidance).
- **Outdoor temp. for heating OFF.** HMG: **24 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 5-35 °C (T-Cap SM p.29, p.82).
- **ΔT for heating ON.** HMG: **5 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 1-15 °C (T-Cap SM p.29, p.82).
- **Heater ON/OFF.** HMG: outdoor temp for heater ON **-3 °C** (factory 0 °C) (HMG, Donal Reilly 25/10/2026). Leave the rest at factory: delay 30 min, heater ON at 4 °C below target water temperature, OFF at 2 °C below (T-Cap SM pp.29-30, p.82).

## 5. Operation setup › Tank (cylinder only)

- **Tank timings.** HMG: Tank re-heat temp **-8 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Leave Floor operation time (8:00) and Tank heat up time (1:00) at factory (T-Cap SM pp.31-32, p.83).
- **Sterilization (legionella).** HMG: **65 °C for 10 min** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Operation setup › Tank › Sterilization. Set the day and time to suit the customer in Function setup › Sterilization (T-Cap SM pp.20, 31-32, p.83).

## 6. Service setup

- **Air purge.** Service setup › Pump maximum speed › [►] to Operation › [▲]/[▼] to Air Purge › [OK]. Run it until the flow reading is steady. [Operate] stops the pump (T-Cap SM p.32, pp.150-151).
- **Flow rate checked.** Read Flow rate on the same screen. Must be at least 15 l/min with the main pump running; low flow can cause H75 during defrost (T-Cap SM p.62). Nominal flow: 9 kW 25.8, 12 kW 34.4 l/min (HMG sizing guidance; T-Cap SM p.12, p.15). HMG: leave pump Max. Duty at the factory setting, adjusting only if the site needs it (HMG, Donal Reilly 25/10/2026).
- **Service contact.** Service setup › Service contact › Contact 1: HMG: **Heat Merchants Technical Support** (HMG, Donal Reilly 25/10/2026) (T-Cap SM p.33). No phone number needed.
- **Screed drying.** Only on a new screed floor: Service setup › Dry concrete › Edit, set stages and temperatures (25-55 °C), then ON. Follow the screed maker's schedule (T-Cap SM p.33, pp.154-155).

## 7. Test run

- **Start the unit.** Press [Operate] ⏻ to switch back on and run heating (T-Cap SM p.61).
- **Pressure while running.** Gauge reads between 0.05 and 0.3 MPa (0.5 to 3 bar) (T-Cap SM p.157).
- **No leaks.** Check every water connection for leaks during the test run (T-Cap SM p.51).
- **Flow rate, all zones open.** With the heating running and every zone valve open, read the flow: [Menu] › System check › System information › Pump flowrate. It should be at least 15 l/min and close to the unit's nominal flow from stage 6 (T-Cap SM p.21, p.62; HMG commissioning check, Donal Reilly 25/10/2026).
- **Flow rate, all zones closed (bypass).** Close every zone so all the flow goes through the bypass valve. Read the flow again in the same way, and adjust the bypass valve until it reaches the unit's nominal flow rate from stage 6 (HMG: nominal flow across the bypass, Donal Reilly 25/10/2026).
- **No errors.** [Menu] › System check › Error history: nothing new. Clear old install errors: [OK], [◄] to Yes, [OK] (T-Cap SM p.21, p.163).
- **Water filter cleaned.** After the test run, clean the magnetic water filter mesh: power off, close both filter valves, take out the mesh, wash it in warm water, refit, open the valves (T-Cap SM p.62).

## 8. Handover

- **Explain it to the customer.** Show the customer how to use the controller and how to look after the unit (T-Cap SM p.4).
- **Unit left running.** Unit ON at the controller, covers refitted, and Error history clear.

---

# Part D: L-series R290 Hydromodule + Tank (WH-ADC0509L3E51, WH-WDG05/07/09LE5)

HMG values are the same as the J-series and K-series checklists (Donal Reilly, 26/10/2026).

## 1. Before you switch on

- **Pipework and wiring finished.** Pipework and electrical cable connections properly done, tank unit filled with water and trapped air released, before the test run (L-series SM p.93).
- **R290 outdoor unit sited safely.** The outdoor unit holds R290, which is extremely flammable (A3). Check the protective zone around it is clear: no windows, doors, vents, drains or other openings, and no ignition sources such as sockets, switches or lamps (L-series SM p.168; Design › Exclusion zones in the app). The refrigerant circuit is sealed in the outdoor unit, so there is no refrigerant pipework to do on site.
- **No automatic air vents indoors.** Don't fit automatic air purge valves on the indoor water pipes: if R290 ever leaked into the water circuit it could get into the house (L-series SM p.86).
- **Fill the DHW tank first.** Drain tap CLOSED, all taps and showers OPEN, fill through the tank connector: water should flow from the taps after 20-40 min. Open the drain tap for 10 s to release air, then close it. Turn the safety relief valve knob anticlockwise and hold 10 s, then back (L-series SM p.89).
- **Fill and purge the heating circuit.** Fill at more than 1 bar until water flows freely from the pressure relief valve drain pipe at the outdoor unit. Then switch on the tank unit and run the pump at maximum speed from Installer setup › Service setup (L-series SM p.89). Open the air vent plugs on the emitters; if the units are on different floors, also open the vent plugs on the outdoor unit's water plug and the heater bottle in the tank unit (L-series SM p.90).
- **Expansion vessel big enough.** Built-in vessel is 10 L at 1 bar, good for up to 200 L of system water (tank unit piping is about 5 L). Over 200 L, add a vessel. Keep the height difference of the water circuit within 10 m (L-series SM p.90).
- **Pressure relief valve tested.** It is in the outdoor unit. Pull the lever horizontal and release it when water comes out of the drain pipe, then check the water stops. If water keeps draining, switch off and escalate (L-series SM p.90).
- **Water only, no glycol.** HMG recommends water only in the circuit (HMG, Donal Reilly 25/10/2026). Set Circulation liquid to Water in stage 3, and keep Anti freezing on Yes.

## 2. First power-up

- **Power on, pump running, no leaks.** Switch on the tank unit and check the water pump runs and there are no leaks at the connections (L-series SM p.89).
- **RCCB/ELCB tested.** With power on, test the RCCB/ELCB and set it back ON (L-series SM p.90).
- **Winter warm-up.** In winter, leave the unit powered on standby for at least 15 minutes before the test run, so the refrigerant warms up and no wrong error code shows (L-series SM p.93).
- **Language, clock, date and front grille.** Press any button: language, clock format, date and time, [OK] after each. When asked "Is O/D front grille fixed?" select Yes (fit the outdoor discharge grille first). With two controllers, the first to confirm a language becomes the main one (L-series SM p.110, p.172).
- **Water pressure on the controller.** [Menu] › System check › System information › [▼] to Water pressure. Fill to **1 to 1.5 bar** (HMG, Donal Reilly 25/10/2026). Never lower than 0.5 bar (L-series SM p.90, p.124).

## 3. System setup (unit OFF)

- **Get into Installer setup.** Press [Operate] ⏻ so the operation light goes out, then [Menu] (top right) › Installer setup › System setup (HMG Field Notes – Can't get into Installer setup; L-series SM p.46).
- **Optional PCB connectivity.** Yes only if the optional PCB (CZ-NS5P) is fitted. Otherwise leave No (L-series SM p.106, p.113).
- **Zone & Sensor.** HMG: **Room thermostat, External**, with the weather compensation curve (HMG, Donal Reilly 25/10/2026). Options are Water temperature, Room thermostat (Internal or External) or Room thermistor (L-series SM p.105, p.113).
- **Heater capacity.** HMG: **3 kW** backup heater (HMG, Donal Reilly 25/10/2026). The E51 tank unit has a 3 kW heater (L-series SM p.14, p.113).
- **Anti freezing.** HMG: **Yes** (also the factory setting) (HMG, Donal Reilly 25/10/2026) (L-series SM p.113).
- **DHW capacity.** HMG: **Standard** (factory is Variable, so change it) (HMG, Donal Reilly 25/10/2026) (L-series SM p.113).
- **Bivalent connection.** Only if a boiler is connected: Yes › SG ready, Auto or Smart. Otherwise leave No (L-series SM pp.114-115).
- **Circulation liquid.** Water or Glycol, to match what's in the system (L-series SM p.117).
- **Pump flowrate.** HMG: **ΔT** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Other option Max. duty (L-series SM p.118).
- **DHW defrost.** HMG: **Yes** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Uses the DHW tank for defrost (L-series SM p.118).
- **Heating control.** HMG: **Comfort** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Other option Efficiency (L-series SM p.118).
- **Electrical anode.** No on the E51 (Yes only on the AN1 model): check it matches the model on the rating label (L-series SM p.118).
- **Two controllers.** Only if two remotes are fitted: Installer setup › Remote control setup › RC selection = Dual (L-series SM p.122).

## 4. Operation setup › Heat

- **Heating curve (HMG).** Operation setup › Heat › Water temp. for heating ON › Compensation curve. HMG: steel radiators -3 °C outdoor → 45 °C flow, 15 °C → 35 °C. Underfloor -3 °C → 35 °C, 15 °C → 25 °C. The factory curve (-5 °C → 55 °C) is over the HMG maximum, so always change it. On 2 zones set both (HMG weather compensation guidance; L-series SM p.62, p.119).
- **Maximum flow (HMG).** Never above 45 °C on radiators or 35 °C on underfloor. The L-series curve can be set up to 75 °C, so take care. The -3 °C curve point is the maximum: there is no separate maximum flow setting in the manual (HMG weather compensation guidance; L-series SM p.62).
- **Outdoor temp. for heating OFF.** HMG: **24 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 5-35 °C (L-series SM p.119).
- **ΔT for heating ON.** HMG: **5 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Range 1-15 °C (L-series SM p.119).
- **Heater ON/OFF.** HMG: outdoor temp for heater ON **-3 °C** (factory 0 °C) (HMG, Donal Reilly 25/10/2026). Leave the rest at factory: delay 30 min, heater ON at 4 °C below target water temperature, OFF at 2 °C below (L-series SM p.119).

## 5. Operation setup › Tank

- **Tank timings.** HMG: Tank re-heat temp **-8 °C** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Leave Floor operation time (8 h) and Tank heat up time (60 min) at factory (L-series SM p.121).
- **Sterilization (legionella).** HMG: **65 °C for 10 min** (also the factory setting) (HMG, Donal Reilly 25/10/2026). Set the day and time to suit the customer (L-series SM p.121).

## 6. Service setup

- **Air purge.** Service setup › Pump maximum speed, [►] to Operation, [▲]/[▼] to Air Purge, [OK]. Run it until the flow reading is steady. If there is no flow or H62 shows, stop the pump and release the air (L-series SM p.93, p.223).
- **Flow rate checked.** Read Flow rate on the same screen. Must be at least 15 l/min with the main pump running; low flow can cause H75 during defrost (L-series SM p.93). Rated flow: 5 kW 14.3, 7 kW 20.1, 9 kW 25.8 l/min (HMG sizing guidance; L-series SM p.13, p.17, p.21). HMG: leave pump Max. Duty at the factory setting, adjusting only if the site needs it (HMG, Donal Reilly 25/10/2026).
- **Service contact.** Service setup › Service contact › Contact 1: HMG: **Heat Merchants Technical Support** (HMG, Donal Reilly 25/10/2026) (L-series SM p.122). No phone number needed.
- **Screed drying.** Only on a new screed floor: Service setup › Dry concrete › Edit (25-55 °C, 1-99 stages), then ON. Follow the screed maker's schedule (L-series SM p.122, pp.226-227).

## 7. Test run

- **Start the unit.** Press [Operate] ⏻ to switch back on and run heating (L-series SM p.93).
- **Pressure while running.** System check › System information › Water pressure reads 0.5-3 bar (0.05-0.3 MPa). If not, adjust the pump speed; if that doesn't fix it, escalate (L-series SM p.93, p.124).
- **Heating normal, no leaks, no odd noise.** Heating works, no abnormal sound, no water leaks during the test run (L-series SM p.93).
- **Flow rate, all zones open.** With the heating running and every zone valve open, read the flow: [Menu] › System check › System information › Pump flowrate. It should be at least 15 l/min and close to the unit's nominal flow from stage 6 (L-series SM p.93, p.124; HMG commissioning check, Donal Reilly 25/10/2026).
- **Flow rate, all zones closed (bypass).** Close every zone so all the flow goes through the bypass valve. Read the flow again in the same way, and adjust the bypass valve until it reaches the unit's nominal flow rate from stage 6 (HMG: nominal flow across the bypass, Donal Reilly 25/10/2026).
- **No errors.** [Menu] › System check › Error history: nothing new (L-series SM p.236).
- **Filters cleaned.** After the test run, clean the magnetic water filter and the water filter and refit them (L-series SM p.93).

## 8. Handover

- **Explain it to the customer.** Show the customer how to use the controller and how to look after the unit, including keeping the protective zone around the outdoor unit clear: no new openings, sockets, lights or barbecues there later (L-series SM p.168).
- **Unit left running.** Unit ON at the controller, covers refitted, and Error history clear.

