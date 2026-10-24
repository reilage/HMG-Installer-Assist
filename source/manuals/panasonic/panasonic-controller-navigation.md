# Panasonic wired remote controller: navigation reference

Built 2026-10-23 from the two Panasonic manuals on file. This is the lookup
the assistant uses to give installers button-by-button steps on the wired
remote controller (the panel on the unit or wall, not a phone app).

- **Part A: J-series Mini Monobloc R32** (WH-MDC05/07/09J3E5). Source:
  *Panasonic Service Manual, Mini Monobloc R32 J-series* (cite as "J-series
  SM, p.N"). The text came from the PDF's text layer, and most button icons
  inside sentences were lost ("Press  for 5 sec."). The original PDF arrived
  on 2026-10-24 (`manuals/panasonic/originals/Panasonic-J-series-Mini-Monobloc-R32-Service-Manual.pdf`),
  and the hidden-menu key combinations and error-history clearing (A4) were
  read from its page images.
- **Part B: K-series split Hydromodule + Tank** (WH-ADC0309K3E5/K3E5AN/K6E5/
  K6E5AN, outdoor WH-UDZ03/05/07/09KE5). Source: *Panasonic Installation
  Manual, Hydromodule + Tank K-series* (cite as "K-series IM, p.N"). Button
  steps here were read from the original PDF page images (pp.21-34), so the
  icons are known.

**Keep the parts separate.** The two manuals show the same button layout, but
menu lists, item numbers and hidden-menu key combinations are documented
separately. Never use a Part B key combination or menu item for a J-series
unit, or the reverse. If something is only in one part, say it is not
covered for the other model.

---

## Button names used in answers

Both manuals label the controller buttons A to G (J-series SM p.74, K-series
IM p.21). Use these names in every answer:

| Answer name | Manual label | Symbol on the button | What it does |
|---|---|---|---|
| **[Menu]** | B: Menu | ☰ (three lines) | Open/close the main menu |
| **[▲] [▼] [◄] [►]** | C: Triangle (Move) | arrow keys | Select or change an item |
| **[OK]** | G: OK | ↵ (return arrow) | Confirm |
| **[Back]** | E: Back | ↩ (curved arrow) | Back to previous item |
| **[Quick Menu]** | F: Quick Menu | ⠿ (grid of dots) | Open/close the quick menu |
| **[Operate]** | D: Operate | ⏻ (power symbol, with LED) | Start/stop operation |

Layout on the panel (K-series IM p.21): top row Back, ▲, Menu; middle row ◄,
OK, ►; bottom row Quick Menu, ▼, Operate. Every list screen shows "Select"
(arrows) and "[↵] Confirm" in its footer.

---

# Part A: J-series Mini Monobloc R32

## A1. First power-up (J-series SM p.22, p.75)

1. Initialising screen shows for about 10 s, then the normal screen.
2. Press any button: the Language screen opens. [▲]/[▼] to choose, [OK].
3. Clock format 24h or am/pm: [▲]/[▼], [OK].
4. Date & time: arrows to set year/month/day/hour/min, [OK].
5. Back at the start screen. Press [Menu], select Installer setup.

If this initial setting is not done, the controller will not go into the
menus (p.75).

## A2. Main menu tree (J-series SM pp.23-36, p.75)

[Menu] opens Main Menu. Items 1-4 are user menus, 5-7 installer.
J-series SM p.23: "Ensure the operation indicator is OFF before setting."

- **Function setup**: Weekly timer, Holiday timer, Quiet timer, Room heater,
  Tank heater, Sterilization (p.23)
- **System check**: Energy monitor, System information, Error history,
  Compressor, Heater (p.24)
- **Personal setup**: Touch sound, LCD contrast, Backlight, Backlight
  intensity, Clock format, Date & Time, Language, Unlock password (4 digits,
  default 0000) (pp.24-25)
- **Service contact**: Contact 1 / Contact 2 (p.25)
- **Installer setup** (pp.26-36, flow chart pp.76-77)
  - **System setup**, in this order: Optional PCB connectivity, Zone &
    Sensor, Heater capacity, Anti freezing, Tank connection, DHW capacity,
    Buffer tank connection*, Tank heater (only if Tank connection = Yes),
    Base pan heater, Alternative outdoor sensor, Bivalent connection,
    External SW, Solar connection*, External error signal*, Demand
    control*, SG ready*, External compressor SW*, Circulation liquid,
    Heat-Cool SW*, Force heater, Force defrost, Defrost signal, Pump
    flowrate. (*Only shown when Optional PCB connectivity = Yes; optional
    PCB is CZ-NS4P, p.66.)
  - **Operation setup**: Heat, Cool (cooling unlocked only), Auto (cooling
    unlocked only), Tank (only if Tank connection = Yes)
  - **Service setup**: Pump maximum speed, Pump down, Dry concrete, Service
    contact

## A3. Step-by-step recipes (J-series)

General path into any installer item:
0. **Turn the heat pump OFF first:** press [Operate] (⏻) so the operation LED goes out. Installer setup can't be opened while the unit is running (J-series SM p.23: "Ensure the operation indicator is OFF before setting"; confirmed on site by Donal, HMG Field Notes 2026-10-23). Remind the installer to switch it back on with [Operate] when finished.
1. [Menu] (top-right button)
2. [▼] to **Installer setup**, [OK]
3. [▲]/[▼] to System setup / Operation setup / Service setup, [OK]
4. [▲]/[▼] to the item, [OK]
5. [▲]/[▼] (or [◄]/[►] on multi-field screens) to change, [OK] to store
6. [Back] to step out, [Menu] to close

**Check it changed:** open the item again and read the value back. Where a
setting has a visible effect, it is listed below.

| Task | Path after "Installer setup" | Options / default | Check it changed | Source |
|---|---|---|---|---|
| External room thermostat (or internal, room thermistor, water temp) | System setup → Zone & Sensor | Without optional PCB: Water temperature / Room thermostat (Internal or External) / Room thermistor. Default "Room and Water temp." | Main screen sensor-type icon changes (p.21 lists Water temperature, Compensation curve, Direct, Room thermostat External, Room thermostat Internal, Room thermistor icons) | pp.26, 78; wiring examples pp.64-65 |
| 2-zone / pool | System setup → Optional PCB connectivity = Yes, then Zone & Sensor → 1 or 2 zone | Pool only on zone 2 | Zone 1 / Zone 2 appear in Operation setup | pp.26, 78 |
| Backup heater capacity | System setup → Heater capacity | 3 / 6 / 9 kW depending on model | Re-open item | pp.26, 78 |
| Anti freezing | System setup → Anti freezing | Yes (default) / No | Re-open item | pp.26, 78 |
| Tank connected | System setup → Tank connection | No (default) / Yes | Tank temp appears on main screen; Operation setup shows Tank | pp.26, 78 |
| Tank heater internal/external | System setup → Tank heater | Internal (default) / External + ON time 0:20 | Re-open item. Also set Function setup → Tank heater ON to use it (p.79) | pp.27, 79 |
| Bivalent (boiler) | System setup → Bivalent connection → Yes → Auto or SG ready → pattern | Alternative / Parallel / Advanced parallel; ON temp -5 °C default | Boiler icon on main screen (p.80) | pp.27-29, 80 |
| Glycol | System setup → Circulation liquid | Water (default) / Glycol | Re-open item | pp.30, 82 |
| Pump control mode | System setup → Pump flowrate | ΔT (default) / Max. duty | Re-open item | pp.31, 82 |
| Heating curve or fixed flow temp | Operation setup → Heat → Water temp. for heating ON → Compensation curve or Direct | Curve default: -5 °C → 55 °C, 15 °C → 35 °C. Direct default 35 °C. Range 20-60 °C | Main screen temp-setting icon (curve vs direct), re-open item | pp.31-32, 83 |
| Heating OFF outdoor temp | Operation setup → Heat → Outdoor temp. for heating OFF | 24 °C, range 5-35 °C | Re-open item | pp.32, 83 |
| ΔT for heating | Operation setup → Heat → ΔT for heating ON | 5 °C, range 1-15 °C (not available if Pump flowrate = Max. duty) | Re-open item | pp.32, 83 |
| Backup heater rules | Operation setup → Heat → Heater ON/OFF | Outdoor temp for heater ON 0 °C; delay 30 min; ON at -4 °C, OFF at -2 °C of target | Re-open item | pp.32-33, 83 |
| Tank times, re-heat, sterilisation | Operation setup → Tank → Floor operation time / Tank heat up time / Tank re-heat temp / Sterilization | 8:00 / 1:00 / -8 °C / 65 °C 10 min | Re-open item | pp.34-35, 84 |
| Pump maximum speed, read flow rate, air purge | Service setup → Pump maximum speed | Screen shows Flow rate (0.1-99.9 L/min), Max. Duty (range 0x40-0xFF, 0xCE example), Operation (OFF / ON / Air Purge). [▲]/[▼] sets Max. Duty, [►] moves to Operation, [▲]/[▼] picks OFF/ON/Air Purge, [◄] goes back. [Operate] turns the pump off on either screen | Flow rate reading on the same screen; also System check → System information → Pump flowrate | pp.35, 84, 151-152 |
| Pump down | Service setup → [OK] → [▼] to Pump down → [OK] → ON → [OK]. [Back] cancels | Screen shows "Pump down operation in progress!"; press [Operate] to stop, screen returns to "[⏻] Start" | Message on screen | pp.36, 84, 150 |
| Screed drying | Service setup → Dry concrete → Edit → [OK]: set number of stages (1-99, [▲]/[▼], [OK]), then each stage's water temp (25-55 °C, 1 °C steps, [OK] per stage; [Back] returns to the previous stage). After the last stage it returns to the ON/Edit screen. Select ON → [OK] to start | Status screen shows Stage n/N, water set temp and actual temp; stage moves on each day. [Operate] stops it | Re-open item | pp.36, 84, 155-156 |
| Installer phone number | Service setup → Service contact → Contact 1/2 | Name and number | Personal menu → Service contact | pp.36, 84 |

User-menu recipes (no Installer setup needed):

| Task | Steps | Source |
|---|---|---|
| Error history | [Menu] → [▲]/[▼] to System check → [OK] → Error history → [OK]. Shows the last 4 errors, most recent at top | pp.24, 163 |
| Live readings (inlet, outlet, zones, tank, buffer, solar, pool, compressor frequency, pump flowrate) | [Menu] → System check → System information → [OK] | p.24 |
| Energy / COP | [Menu] → System check → Energy monitor | p.24 |
| Quick menu items | [Quick Menu] → [▲]/[▼] to select → [OK] to turn on/off. Items: Force DHW, Powerful, Quiet, Force Heater, Weekly Timer, Force Defrost, Error Reset, R/C Lock | p.22 |
| Clear a displayed error | [Quick Menu] → Error Reset. On the error screen itself, select Close / Reset and confirm. If the fault is still there, it returns | pp.22, 162 |
| Weekly timer / holiday / quiet timer | [Menu] → Function setup → item | p.23 |
| Language, clock, contrast | [Menu] → Personal setup → item | pp.24-25 |

## A4. Hidden menus (J-series): key combinations (read from PDF page images, 2026-10-24)

| Menu | Hold | Contents | Source |
|---|---|---|---|
| **Maintenance menu** | **[Back] + [OK] + [►] for 5 s** | Actuator check (manual ON/OFF of each part; no protection, so never run the pump without water), Test mode (test run, not normally used), Sensor setup (offset -2 to +2 °C, only if a sensor is deviating; it affects temperature control), Reset password | pp.85, 158 |
| **Custom menu** | **[Menu] + [▼] + [◄] for 10 s** | Cool mode (with/without cooling, default without), Back-up heater use/not use (disables frost-protection heater, may cause H75), Reset energy monitor, Reset operation history (p.85 lists 4 items, p.159 shows only the first 3) | pp.85, 159 |
| **Forgotten password** | **[Back] + [OK] + [►] for 5 s** (only shown when locked) | Password unlock screen appears, press Confirm, password resets to 0000. Set it again | pp.85, 158 |
| **Unlock Cool mode** | **[Menu] + [▼] + [◄] for 5 s**, operation must be OFF | Opens the Custom menu on Cool mode. [OK], [▲]/[▼] to Enable or Disable, [OK]. [Back] to exit | p.153 |
| **EEPROM factory reset** | **[▲] + [▼] + [◄] + [►] together for 5 s**, only while the screen shows "Initializing" at power-up | Initialisation stops, "EEPROM setup" runs, then initialisation restarts and the clock blinks. Wipes settings back to factory defaults | p.154 |

Note: the Cool mode unlock hold is 5 s on p.153 but the Custom menu hold is
10 s on pp.85/159. Same buttons. If 5 s does not open it, hold for 10 s.

**Clear error history permanently (p.163):** [Menu] → System check → [OK] →
[▼] to Error history → [OK] (shows last 4 errors). Press [OK] ("Clear
history"), "Do you want to clear error history?" appears with No selected.
[◄] to Yes, [OK]. The list shows "--". [Back] to leave without clearing.

**Clear a displayed error (p.162):** on the error pop-up, [◄]/[►] to Close
or Reset, then [OK].

These match the K-series combinations, but they are quoted here from the
J-series manual itself, so they can be given for J-series units.

## A5. Gaps (J-series)

- Pump-down (p.150), pump-speed (pp.151-152), dry-concrete (pp.155-156),
  cool-unlock (p.153) and error-history (p.163) procedures were read from the
  PDF page images on 2026-10-24 and are now in A3/A4.
- System information on the J-series lists 10 items with no water pressure
  reading. Pressure is read from the unit's water pressure gauge (p.37).

---

# Part B: K-series split Hydromodule + Tank

## B1. First power-up (K-series IM p.22)

1. Initialising screen about 10 s, then the normal screen showing
   "[⏻] Start".
2. Press any button: Language. [▼] to select, [OK].
   With two controllers fitted, the first one to confirm a language becomes
   the main controller.
3. Clock format 24h / am/pm: [▼], [OK].
4. Date & time: arrows, [OK].
5. **Front grille: "Is O/D front grille fixed?"** Select Yes, [OK]. If No,
   a caution appears ("To prevent injury, fix front grille before ope.",
   [Back] Close).
6. Back to the start screen. [Menu], select Installer setup (p.23).

## B2. Main menu tree (K-series IM pp.23-24, 34)

Main menu: Function setup, System check, Personal setup, Service contact,
Installer setup (p.23, p.34). The K-series manual does not describe the
Function setup or Personal setup items.

- **System check**: Energy monitor, System information, Error history,
  Compressor (p.34)
- **Installer setup**
  - **System setup**, in this order (flow chart p.23-24): Optional PCB
    connectivity, Zone & Sensor*, Heater capacity, Anti freezing, DHW
    capacity, Buffer tank connection, Base pan heater, Alternative outdoor
    sensor, Bivalent connection, External SW, Solar connection*, External
    error signal*, Demand control*, SG ready*, External compressor SW*,
    Circulation liquid, Heat-Cool SW*, Force heater, Force defrost, Defrost
    signal, Pump flowrate, DHW defrost, Heating control, External meter,
    Electrical anode. (*Optional PCB items; optional PCB is CZ-NS5P, p.13.)
    Note: the flow chart has no Tank connection or Tank heater items, but
    the example screens on p.26 show them in the list. Expect them on some
    units.
  - **Operation setup**: Heat, Cool (cooling model only), Auto (cooling
    model only), Tank
  - **Service setup**: Pump maximum speed, Pump down, Dry concrete, Service
    contact
  - **Remote control setup**: RC selection (Single / Dual)

## B3. Step-by-step recipes (K-series)

General path is the same as A3, including step 0 (turn the unit OFF with [Operate] first; the K-series manual doesn't state this, it's from HMG Field Notes 2026-10-23): [Menu] → Installer setup → [OK] → section →
item → change → [OK] → [Back].

| Task | Path after "Installer setup" | Options / default | Check it changed | Source |
|---|---|---|---|---|
| External room thermostat (or internal, room thermistor, water temp) | System setup → Zone & Sensor | Without optional PCB: Water temperature / Room thermostat (Internal or External) / Room thermistor. Default "Room and Water temp." | Main screen: remote-controller room thermostat icon in function bar; temp-setting icon (p.21) | pp.13-14, 25 |
| Backup heater capacity | System setup → Heater capacity | Depends on model | Re-open item | p.25 |
| Anti freezing | System setup → Anti freezing | Yes (default) | Re-open item | p.25 |
| DHW capacity | System setup → DHW capacity | Variable (default) / Standard | Re-open item | p.25 |
| Bivalent (boiler) | System setup → Bivalent connection → Yes → SG ready / Auto (Alternative, Parallel, Advanced Parallel) / Smart (energy prices) | No (default); switch point -10 °C example | Boiler icon on main screen; "_" under it when boiler contact is ON | pp.26-27 |
| Glycol | System setup → Circulation liquid | Water (default) / Glycol | Re-open item | p.29 |
| Pump control mode | System setup → Pump flowrate | ΔT (default) / Max. duty | Re-open item | p.30 |
| DHW used for defrost | System setup → DHW defrost | Yes (default) / No | Re-open item | p.30 |
| Compressor strategy | System setup → Heating control | Comfort (default) / Efficiency | Re-open item | p.30 |
| External meters | System setup → External meter | All No by default | Re-open item | p.30 |
| Electrical anode | System setup → Electrical anode | Yes on K3E5AN/K6E5AN, No on others | Re-open item | p.30 |
| Heating curve or fixed flow temp | Operation setup → Heat → Water temp. for heating ON → Compensation curve / Direct | Curve default -5 °C → 55 °C, 15 °C → 35 °C | Main screen temp-setting icon; re-open | p.31 |
| Heating OFF outdoor temp | Operation setup → Heat → Outdoor temp. for heating OFF | 24 °C, 5-35 °C | Re-open item | p.31 |
| ΔT for heating | Operation setup → Heat → ΔT for heating ON | 5 °C, 1-15 °C | Re-open item | p.31 |
| Backup heater rules | Operation setup → Heat → Heater ON/OFF | 0 °C / 30 min / -4 °C / -2 °C | Re-open item | p.31 |
| Tank times, re-heat, sterilisation | Operation setup → Tank → item | 8 h / 60 min / -8 °C / 65 °C 10 min | Re-open item | pp.32-33 |
| Pump maximum speed, read flow rate, air purge | Service setup → Pump maximum speed. [◄]/[►] between Flow rate, Max. Duty, Operation; [▲]/[▼] to change (Operation includes Air Purge) | Default depends on model | Flow rate on the same screen. Minimum flow during main pump operation not less than 15 L/min (p.12) | pp.12, 33 |
| Pump down | Service setup → Pump down → ON → [OK]. Stop with [Operate] (⏻) OFF | Only when unit is in standby | "Pump down operation in progress!" | pp.12, 33 |
| Screed drying | Service setup → Dry concrete → Edit, then ON | 25-55 °C, stages 1-99 days | Re-open item | p.33 |
| Two controllers | Remote control setup → RC selection | Single (default) / Dual | Re-open item | p.33 |
| Installer phone number | Service setup → Service contact → Contact 1/2 | Name and number | Re-open item | p.33 |

User-menu recipes (K-series):

| Task | Steps | Source |
|---|---|---|
| **Water pressure** | 1. [Menu], [▼] to System check. 2. [OK], [▼] to System information. 3. [OK], then [▼] to page down to "11. Water pressure" (example 1.51 bar). Normal 0.05-0.3 MPa (0.5-3 bar) per p.12 | pp.12, 34 |
| Flow rate / compressor frequency | Same path: System information → 9. COMP frequency, 10. Pump flowrate | p.34 |
| Error history | [Menu] → System check → [OK] → [▼] to Error history → [OK] | p.34 (menu screens only; contents not described) |

## B4. Hidden menus (K-series): key combinations known

| Menu | Hold | Contents | Source |
|---|---|---|---|
| **Maintenance menu** | **[Back] + [OK] + [►] for 5 s** | Actuator check (manual ON/OFF of each part; no protection, so never run the pump without water), Test mode (not normally used), Sensor setup (offset -2 to +2 °C, only if a sensor is deviating), Reset password | p.34 |
| **Custom menu** | **[Menu] + [▼] + [◄] for 10 s** | Cool mode (default without), Back-up heater use/not use (disables frost-protection heater, may cause H75), Reset energy monitor, Reset operation history, Smart DHW (start/stop time, ON temp) | p.34 |
| **Forgotten password** | **[Back] + [OK] + [►] for 5 s** (only shown when locked) | Unlock screen appears, press Confirm, password resets to 0000 | p.34 |

## B5. Gaps (K-series)

- Quick menu contents are not listed in the K-series manual.
- Function setup and Personal setup items are not described.
- Error history contents and error reset steps are not described, and there
  are no K-series fault codes on file.
- The manual says LCD screens are "for instructional purpose only, and may
  differ from the actual unit" (p.21).
