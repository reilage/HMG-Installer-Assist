# Baxi ASHP Control: controller navigation reference

Built 2026-10-24 from *Baxi ASHP Control installation, user and service
manual* (7887625 v04), cite as "Baxi ASHP Control IM, p.N". This is the
lookup the assistant uses to give installers button-by-button steps on the
Baxi user interface (MK2.2) on the indoor control unit used with the
Assure HP55 outdoor unit.

**Keep it separate from Panasonic.** Different buttons, menus and access.
Never use a Panasonic step, menu name or key combination on a Baxi, or the
reverse.

**Buttons confirmed (Donal, 2026-10-24)** from the manual's Fig.11 on p.15
(image saved at `manuals/baxi/originals/baxi-ashp-control-fig11-p15-buttons.png`):
three controls under the display. The manual text file lost the button icons
inside sentences ("1. Press the  button."), but the figure, the carousel text
on p.17 ("Display the carousel by pressing the Main menu button", "Scroll
through the menu by turning the button") and Donal's confirmation that the
centre knob scrolls to the options on screen settle the steps below. Two
Clearing the error memory was confirmed by Donal from the p.134 page image
(saved in originals/): press and hold the [Dial]. The child lock override
was confirmed from the 12.1 page image (p.106, saved in originals/): briefly
press [Menu] and [Dial] together. All button steps are now covered.

---

## C1. Buttons and screens (Fig.11, p.15)

Layout under the display, left to right: **[Back]**, **[Dial]**, **[Menu]**.

| Answer name | Manual label (p.15) | Where / symbol | What it does |
|---|---|---|---|
| **[Back]** | 1 Back button | Small round button, left; curved back arrow ↩ | Back to the previous screen |
| **[Menu]** | 2 Main menu button | Small round button, right; three lines in a circle ☰ | Opens the carousel (main menu) |
| **[Dial]** turn | 4 Selection/validation button | Large rotary knob, centre; dot in a circle ⊙ | Turn to scroll through items or change a value |
| **[Dial]** press | 4 Selection/validation button | Press the centre knob | Select / confirm |

Display backlight (Tab.5, p.15): **blue** = normal operation; **continuous
red** = warning or blockage; **flashing red** = lockout. Standby after 5 min
with no button pressed; press any button to wake it (p.15). Turning the dial
on the home screen steps through the zone screens (p.16).

Menu paths in the manual are written " > Installer > ..." with the leading
icon lost. They start from the carousel, so every path starts with **[Menu]**.

**Installer level (p.41):** [Menu], select **Installer**, enter code
**0012**. All installer functions open. It times out after 30 min with no
action. The unit does **not** need to be switched off first (that rule is
Panasonic only). The "Installer level activated" icon shows on screen (p.16).

## C2. Carousel menus (Tab.8, p.17)

Operating mode · Domestic Hot Water On/Off · Heating temperature · Water
temperature · Temporary heating temperature change · Hot water boost ·
System holiday mode · User settings · Test mode · **Installer** (code) ·
**Finder** (parameter search, installer) · **Signals overview** (measured
values, installer) · Energy overview · System settings · Version information.
Menus shown depend on the system configuration.

Installer menu branches used in the manual: Installation setup (Heat Pump,
Zone1, Zone3, Zone2, Domestic Hot Water, Mixed/circul. DHW, Outdoor
temperature, Solar systems), Signals, Counters, Error history,
Commissioning > Test mode, Advanced menu (Set configuration code, Auto
detect, Reset to factory settings).

## C3. Installer recipes

Every row starts: [Menu], turn [Dial] to **Installer**, press
[Dial], enter **0012**. Then follow the path, turning [Dial] to each item
and pressing [Dial] to open or confirm.

| Task | Steps | Options / default | Check it changed | Source |
|---|---|---|---|---|
| Set CN1 / CN2 (outdoor unit size) | Installer > Advanced menu > Set configuration code > EHC–16 > set CN1, CN2 > Confirm | HP55: CN1 13 (4 kW), 14 (6), 15 (8), 16 (11 1ph), 17 (13 1ph), 18 (11 3ph), 19 (13 3ph); CN2 = 2 | H02.02 / H02.03 clears; values match indoor unit data plate | p.38-39, p.55 |
| Find a parameter or reading by code | [Menu] > Finder (Search) > enter 0012 if asked > turn [Dial] to enter the code > press [Dial] to search | Any code, e.g. AM056, HP029 | The parameter or value is shown | p.41 |
| Set backup type | Installer > Installation setup > Heat Pump > Backup > Backup type (HP029) | No Backup / 1 Electrical Stage (default) / 2 Electrical Stages / Boiler Backup | Re-open HP029 | p.39, p.57 |
| Backup start delay | Installer > Installation setup > Heat Pump > Backup > Delay startbackup CH (HP030) | 0-600 min; 0 = automatic on outdoor temp (default) | Re-open HP030 | p.39, p.57 |
| Bivalent temperature | Installer > Installation setup > Heat Pump > Backup > Bivalent temperature (HP000) | -10 to 20 °C, default 5 °C | Re-open HP000 | p.45, p.57 |
| Check flow rate | Installer > Signals > Heat Pump > Flow rate (AM056) | Minimum HP55-4/6/8: 6.6 l/min; HP55-11/13: 11.7 l/min | Reading above minimum in heating | p.40, p.68 |
| Set zone (circuit) type | Installer > Installation setup > Zone1 or Zone3 > Zone Function (CP020) | Disable, Direct, Mixing Circuit, High Temperature, Fan Convector (Zone3 also pool, DHW tank, etc.) | Re-open CP020 | p.41-42 |
| Set heating curve | Installer > Installation setup > Zone1 or Zone3 > Heat curve > CP230 (Zone3 CP231) gradient, CP210/CP220 base temps, CP000 max flow | UFH 0.4-0.7, rads about 1.5; base 17 °C; max flow 75 °C. Adjust 0.1 per 24 h | Zone Tflow Setpoint CM070 | p.42-43 |
| Max CH flow temperature | Installer > Installation setup > Heat Pump > General > Max CH flow setpoint (AP063) | 20-75 °C, default 75 °C | Re-open AP063 | p.56 |
| Enable cooling | Installer > Installation setup > Heat Pump > General > CH function on (AP016) = On; then Heat Pump > Cooling > Cooling mode (AP028) = Active cooling on, or Forced cooling mode (AP015) = Yes | Zone must be CP020 = Mixing Circuit (UFH). Auto cooling above 22 °C (AP073) | Cooling icon; ZoneCurrentHeatMode CM200 | p.43 |
| Cooling flow setpoints | Installer > Installation setup > Zone1 or Zone3 > General > Floor cool setpoint CP270 or Fan cool setpoint CP280 | UFH 11-23 °C (18 °C); fan coil 7-23 °C (7 °C) | Re-open the value | p.44 |
| On/off room thermostat logic | Installer > Installation setup > Zone1 > General > OTH LogicLev contact (CP640), RevContactOTH cool (CP690) | CP640 Closed (default) = demand on closed contact; CP690 No | Call for heat starts the zone pump (CM050) | p.47-48 |
| Heat/cool (AC) thermostat on BL1 | Zone1 > General: CP640, CP690; then Heat Pump > Blocking input: BL input setting (AP001) = Heating Cooling, BL1 contact config (AP098) | Wired to R-Bus and BL1 on EHC–16 only | BL1 contact position HM004 | p.48 |
| Buffer tank / low loss header | Installer > Installation setup > Heat Pump > General > Buffer tank (HP086) = Yes | Hysteresis HP087 3 °C, don't change | Re-open HP086 | p.48-49 |
| Silent mode | Installer > Installation setup > Heat Pump > HP silent mode > HP058 level, HP094 start, HP095 end | No silent mode / Level 1 / Level 2 | Home screen shows silent status | p.50 |
| Anti-legionella | Installer > Installation setup > Domestic Hot Water > Anti-legionella > DP004 (Weekly/Daily), DP160 setpoint, DP410 runtime, DP430 day, DP440 time | Off by default; 60-70 °C; needs heater or boiler to reach it | Re-open DP004 | p.50-51 |
| DHW comfort tweaks | Installer > Installation setup > Domestic Hot Water > General > DP047 max DHW time, DP048 min CH before DHW, DP120 DHW hysteresis | See Tab.31/32 | Check over a week | p.49 |
| DHW circulation loop (SCB-17B) | Installer > Installation setup > Zone2 > Zone Function (CP020) = Disable; Mixed/circul. DHW > DHW circulation (DP450) = On; Circulation > DP050, DP052, DP053, DP054 | On 2 min / off 4 min; DP054 On for anti-leg | Re-open DP450 | p.51-52 |
| Screed drying | Installer > Installation setup > Zone1 or Zone3 > Screed drying > ZP000/ZP010/ZP020 (stage 1), ZP030-ZP050 (stage 2), ZP060-ZP071 (stage 3), then ZP090 = On | Days and temps from the screed maker; starts immediately | Signals ZM000 setpoint, ZC000 days left | p.45-47 |
| Energy meter | Installer > Installation setup > Heat Pump > Energy management > HP157 = Measured, HP033 pulse value | 1000 imp/kWh = 1; 100 = 10 (Tab.33) | Counters AC005-AC007 | p.52-53 |
| PV / Smart Grid inputs | Installer > Installation setup > Heat Pump > Blocking input > AP001 (BL1), AP100 (BL2), AP098/AP099 contact logic, HP091/HP092 offsets | Photovoltaic HP Only / PV HP And backup / Smart Grid ready | HM004 / HM005 | p.53-54 |
| Multifunction output X19 | Installer > Installation setup > Heat Pump > Advanced > Multifunct output (HP188) | DHW Backup, Cooling mode, Defrosting mode, Silent Mode | Re-open HP188 | p.54-55 |
| Test run heating / cooling | Installer > Commissioning > Test mode > Func test status > choose mode | Forces heating or cooling of HP and backup | "Operating test mode" icon (p.16) | p.124 |
| View / clear error history | Installer > Error history > turn [Dial] to highlight an error > press [Dial] for details (shows the outdoor unit code where relevant). Clear the whole memory: press and hold [Dial] | Last 32 errors with code, text, date | List empty after clearing | p.134 |
| Auto-detect options (after PCB change) | Installer > Advanced menu > Auto detect > Confirm | Finds devices on the L-BUS | H02.36 / H02.37 clears | p.55 |
| Factory reset | Installer > Advanced menu > Reset to factory settings > Confirm | Resets all parameters; then redo CN1/CN2 | Commissioning screens | p.55 |
| Software versions | [Menu] > Version information > choose EHC–16, MK2.2, SCB-17B or CB-21 | – | – | p.134-135 |
| IDU-ODU comm quality | Installer > Signals > Heat Pump > outdoor unit > Comm quality (HM024) | Below 75 % = comms too poor, shielded cable essential (H06.28) | Reading | p.69, p.129 |

## C4. User recipes (no code needed)

| Task | Steps | Options / default | Check it changed | Source |
|---|---|---|---|---|
| Zone operating mode | Turn [Dial] on home screen to the zone > press [Dial] > Operating mode > choose | Scheduling (recommended), Manual, Temporary, Holiday, Off. Manual if using a programmable on/off stat | Mode shown on the zone screen | p.109-111 |
| Constant room temperature | Zone > press [Dial] > Operating mode > Manual > set temp > Confirm | – | Zone screen | p.110 |
| Temporary room temperature | Zone > press [Dial] > Operating mode > Temporary > temp > end time > Confirm | Returns to normal mode after | Zone screen | p.113-114 |
| Heating timer programme | Zone > press [Dial] > Time programs heating > pick programme (ZoneTimeProg Select) > day > edit / add / delete / Copy to other days > Confirm | 3 programmes; last activity runs until the next day's first | Tick on the active programme | p.111-112 |
| Activity temperatures | Zone > press [Dial] > Set heating temperatures (or cooling) > activity > temp | Morning, Away, Home, Evening, Sleep, Custom | – | p.109 |
| DHW setpoints | DHW zone > press [Dial] > DHW temperature setting > DHW comfort / DHW eco setpoint | – | Tank DHW temp on home screen | p.117-118 |
| Hot water boost | DHW zone > press [Dial] > Operating mode > Hot water boost > end time > Confirm | Cancel by choosing another mode | DHW production icon flashing | p.117 |
| DHW on/off | [Menu] > Domestic Hot Water On/Off > Off / On > Confirm | Heating and cooling carry on | – | p.121 |
| Heating/cooling off (keep DHW) | Zone icon on home screen > Define the mode > Off or Heating/Cooling (auto) > Confirm | – | – | p.118 |
| Holiday (all zones) | [Menu] > System holiday mode > start/end > Confirm | Room 6 °C, DHW eco; flow held 25 °C below 5 °C outside. Don't power off | – | p.120 |
| Energy overview | [Menu] > Energy overview | kWh consumed / delivered for CH, DHW, cooling | – | p.121-122 |
| Child lock | [Menu] > System settings > Display settings > Child lock Yes/No. Override while locked: briefly press [Menu] and [Dial] together | Only active when screen asleep | – | p.106-107 |
| Date, time, language, installer details | [Menu] > System settings > choose item | – | – | p.107 |

## C5. Start and stop (p.122)

Start: switch on the outdoor unit and the indoor unit (auto vent about
3 min), then any backup boiler. Shut down: switch off heating/cooling,
outdoor unit power, indoor unit power, backup boiler. For long absences use
System holiday mode instead of switching off (frost protection and pump
anti-seize keep running). After a fault: off, wait 3 min, then indoor unit
on first, then outdoor unit (p.124, p.129).
