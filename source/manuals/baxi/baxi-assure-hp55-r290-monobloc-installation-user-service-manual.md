# Baxi Assure HP55 R290 monobloc outdoor unit – Installation, user and service manual (7890198 v03, 17/07/2025)

<!-- Added 2026-10-24 for the HMG Installer Assistant. Part 1 is a quick reference
     built from this manual, with page numbers. Part 2 is the manual text as
     extracted from the PDF, with --- Page N --- markers for citing. Cite as
     "Baxi HP55 IM, p.N". Original PDF: manuals/baxi/originals/. -->

**Models covered:** Assure HP55-4-1-PHMB, HP55-6-1-PHMB, HP55-8-1-PHMB,
HP55-11-1-PHMB, HP55-13-1-PHMB (single phase, 230 V) and HP55-11-3-PHMB,
HP55-13-3-PHMB (three phase, 400 V 3N). The number after "HP55-" is the
nominal kW; "-1-" is single phase, "-3-" is three phase.

**Refrigerant: R290 (propane), safety class A3, highly flammable.** Denser
than air, collects at ground level, may have no smell. All refrigerant work by
appropriately F-Gas certified, R290-trained personnel only (p.4, p.30).

# Part 1: Quick reference

## 1.1 What this manual covers, and what it doesn't

- It covers the **outdoor unit only**: siting, R290 protective perimeter,
  hydraulics, electrics, filling, freeze protection, maintenance, the error
  code list and decommissioning.
- **No controller navigation.** The user interface (wired controller) sits
  with the **indoor unit**, and the manual refers to the "Indoor unit manual"
  for that (p.30). Menu steps, parameter settings, commissioning on the
  controller, heating curves and error history are **not covered** until the
  Baxi indoor unit / controller manual is added. Don't borrow Panasonic steps.
- **Error codes are a list only** (code, description, where it shows), pp.57-60.
  There are no causes, check procedures or reset steps against each code. Any
  checks must come from other parts of this manual (flow rates, sensor
  resistance tables, wiring, water pressure) and should be presented as such.
- The DIP switch on the Main Control PCB (item 10, p.28) is shown but its
  settings are not given.

## 1.2 Error codes (Baxi HP55 IM, Chapter 9, pp.57-60)

"UI + PCB" = shown on the user interface and the Main Control PCB display.
"PCB" = shown on the Main Control PCB digital display (DSP1) only.

**Water circuit errors (Tab.31, p.57)**

| Code | Description | Shown on |
|---|---|---|
| E0 | Water flow error (10 times E8) | UI + PCB |
| E8 | Water flow protection | UI + PCB |

Related (p.42): if the minimum flow rate can't be met, E0 and E8 are
triggered and the outdoor unit shuts down. Minimum flow must be guaranteed
even with all zone valves closed, and during defrost/supplementary heater
operation. Flow ranges in 1.4 below.

**Communication errors (Tab.32, p.57)**

| Code | Description | Shown on |
|---|---|---|
| CL | Water pump communication wire fault | UI + PCB |
| E2 | Communication fault between user interface and Main Control PCB | UI + PCB |
| EL | Communication fault between hydraulic module and MH kit | UI + PCB |
| H0 | Communication error on Main Control PCB | UI + PCB |
| H1 | Communication error between Main Control PCB and inverter PCB | UI + PCB |
| Hd | Communication fault between the master outdoor unit and the slave outdoor unit | UI + PCB |

**Sensor errors (Tab.33, p.58)**

| Code | Description | Shown on |
|---|---|---|
| E3 | T1 electric heater/AHS water outlet temperature sensor error | UI + PCB |
| E4 | T5 water cylinder temperature sensor error | UI + PCB |
| E5 | T3 outdoor unit heat exchanger bottom temperature sensor error | UI + PCB |
| E6 | T4 room temperature sensor error (manual wording; p.15 lists T4 as the outdoor air temperature sensor) | UI + PCB |
| E7 | Tbt buffer tank temperature sensor / cascade system final outlet water temperature sensor error | UI + PCB |
| E9 | Th return air temperature sensor error (p.15: Th = compressor suction temperature sensor) | UI + PCB |
| EA | Tp discharge temperature sensor error | UI + PCB |
| Eb | Tsolar solar panel temperature sensor error | UI + PCB |
| EC | T5_2 water cylinder temperature sensor error | UI + PCB |
| Ed | Tw_in plate heat exchanger inlet water temperature sensor error | UI + PCB |
| FC1 | TL outdoor unit heat exchanger outlet temperature sensor error | UI + PCB |
| H2 | T2 plate heat exchanger outlet refrigerant temperature sensor error | UI + PCB |
| H3 | T2B plate heat exchanger inlet refrigerant temperature sensor error | UI + PCB |
| H5 | Ta room temperature sensor error | UI + PCB |
| H8 | H-SEN high pressure sensor error | UI + PCB |
| H9 | Tw2 zone 2 water flow temperature sensor error | UI + PCB |
| HA | Tw_out plate heat exchanger outlet water temperature sensor error | UI + PCB |
| PF | Water flow sensor failure | UI + PCB |
| PE | Water pressure sensor failure | UI + PCB |
| P21 | L-SEN low pressure sensor error | UI + PCB |
| P27 | H-SEN and L-SEN connected in reverse (detected when the compressor is off) | UI + PCB |

Note: H2/H3 descriptions in Chapter 9 give T2 = outlet and T2B = inlet, while
pp.15 and 22 give T2 = inlet and T2B = outlet. Quote the code description as
written and point out the difference if it matters.

**Voltage errors (Tab.34, p.58)**

| Code | Description | Shown on |
|---|---|---|
| E1 | Phase loss or phase reversal | UI + PCB |
| H7 | Power overvoltage and power undervoltage protection | UI + PCB |

**Inverter module errors (Tab.35, pp.58-59)**

| Code | Description | Shown on |
|---|---|---|
| F1 | Protection against DC bus undervoltage | UI + PCB |
| C7 | Excessive temperature protection for IPM module | UI + PCB |
| H4 | 3 times "L1*" in 60 mins | UI + PCB |
| L1E | Hardware overcurrent protection | PCB |
| L11 | Phase current instantaneous overcurrent protection | PCB |
| L12 | Phase current continuous 30 s overcurrent protection | PCB |
| L2E | Overheating protection | PCB |
| L3E | Bus voltage too low error | PCB |
| L31 | Bus voltage too high error | PCB |
| L32 | Bus voltage excessively high error | PCB |
| L34 | Phase loss error on the three-phase power supply | PCB |
| L43 | Abnormal phase current sampling bias | PCB |
| L45 | Fan motor code mismatch error | PCB |
| L46 | IPM protection (FO) | PCB |
| L47 | Module type mismatch | PCB |
| L5E | Motor failed to start | PCB |
| L52 | Motor stalling protection | PCB |
| L6E | Phase loss protection | PCB |
| L61 | Compressor terminal short circuit protection | PCB |
| L65 | IPM short circuit protection | PCB |
| LBE | Action of high pressure switch | PCB |
| LB7 | PED error | PCB |
| LCE | PFC hardware overcurrent protection | PCB |
| LC1 | Instantaneous overcurrent of PFC software protection | PCB |
| LC2 | PFC software continuous 30 s overcurrent protection | PCB |
| LC3 | PFC low voltage protection | PCB |
| LC4 | PFC power factor is less than 0.8 | PCB |
| LC5 | PFC valid value overcurrent protection | PCB |
| LC6 | PFC1 channel hardware overcurrent protection | PCB |
| LC7 | PFC2 channel hardware overcurrent protection | PCB |
| LC8 | PFC3 channel hardware overcurrent protection | PCB |
| LC9 | Overheating protection of PFC module | PCB |
| LCA | PFC module CBC overcurrent error protection | PCB |
| LCB | Overvoltage of PFC bus or PFC half bus | PCB |
| LCC | Short circuit of PFC IGBT | PCB |
| LCD | Abnormal PFC sampling bias | PCB |
| H6 | Fan failure | UI + PCB |
| HH | 10 times H6 in 120 mins | UI + PCB |
| J1E | Hardware overcurrent protection (fan) | PCB |
| J11 | Phase current instantaneous overcurrent protection (fan) | PCB |
| J12 | Phase current continuous 30 s overcurrent protection (fan) | PCB |
| J2E | Overheating protection (fan) | PCB |
| J3E | Bus voltage too low error (fan) | PCB |
| J31 | Bus voltage too high error (fan) | PCB |
| J32 | Bus voltage excessively high error (fan) | PCB |
| J43 | Abnormal phase current sampling bias (fan) | PCB |
| J45 | Fan motor code mismatch error | PCB |
| J46 | IPM protection (FO) (fan) | PCB |
| J5E | Motor failed to start (fan) | PCB |
| J52 | Motor stalling protection (fan) | PCB |
| J6E | Phase loss protection (fan) | PCB |
| J61 | Fan terminal short circuit protection | PCB |
| J65 | IPM short circuit protection (fan) | PCB |
| HF | Outdoor unit EEPROM error | UI + PCB |

The manual lists the J-codes straight after H6/HH (fan failure) and J61 says
"fan terminal", so the J-group is read as the fan drive equivalent of the
L-group (compressor drive). "(fan)" above is that reading, not manual text.

**Others (Tab.36, p.59)**

| Code | Description | Shown on |
|---|---|---|
| F6 | EXV fault (electronic expansion valve) | PCB |
| F75 | Insufficient discharge superheating | PCB |
| Pd | Frost protection operation | PCB |

**Protection codes (Tab.37, p.60)**

| Code | Description | Shown on |
|---|---|---|
| P0 | Low pressure protection | UI + PCB |
| P1 | High pressure switch protection | UI + PCB |
| P3 | Overcurrent protection | UI + PCB |
| P4 | Protection against excessive compressor discharge temperature | UI + PCB |
| Pd | Protection against excessive condensation temperature | UI + PCB |
| HP | Low pressure protection in cooling mode | UI + PCB |
| bA | T4 sensor out of operation range protection | UI + PCB |
| PP | Protection against an abnormal temperature difference between the water outlet and inlet | UI + PCB |
| Hb | 3 times PP and Twout < 7 °C | UI + PCB |
| P5 | Abnormal temperature difference between the water outlet and inlet temperature | UI + PCB |

**Pd appears twice** in the manual: "Frost protection operation" (Tab.36,
PCB only) and "Protection against excessive condensation temperature"
(Tab.37, UI + PCB). If an installer reports Pd, ask whether it shows on the
user interface or only on the outdoor PCB display, and what the unit was
doing (cold weather / heating at high flow temperature).

## 1.3 Pre-commissioning and first fill checklist (from the manual)

The manual has no controller commissioning procedure. These are the
outdoor-unit steps it requires before and at start-up:

1. Check the packaging for impact damage on delivery. If damaged, don't
   install: move it outdoors at least 6 m from ignition sources and contact
   after-sales. After 4 h, check with a sniffer that no refrigerant remains (pp.29-30).
2. Remove the heat exchanger protection, taking care of the outdoor
   temperature sensor (p.39).
3. **8, 11 and 13 kW units: remove the compressor transport support**
   (front panel, inner panel, grille, compressor compartment cover, support).
   Failure to remove it invalidates the warranty (p.39).
4. Fit the condensate drain union and hose (p.40).
5. Fit the supplied **Y filter on the unit inlet**, observing flow direction.
   A sediment filter is mandatory (p.42). Connect flow, then return; pipe the
   safety relief valve to the condensate drain hole (p.43).
6. **Remove and dry the flow switch** (water from factory testing can freeze in
   it). Turn anti-clockwise to remove, dry, refit with the arrow pointing
   towards the circulating pump (p.43).
7. Make power and BUS connections (pp.45-50, see 1.5). Wait 5 min after power
   off before powering on again (p.46).
8. Seal wall openings and duct ends so leaked refrigerant can't enter the
   building; keep 0-40 V cables apart from 230/400 V (p.51).
9. Flush: at least 3 times the system volume until clear; clean filters (p.51).
10. Fill to **1.5 to 2 bar** (0.15-0.2 MPa), leak check, vent fully (p.52).
    For glycol: fill with a glycol filling station to 1.5-2 bar, vent before
    commissioning, vent again and re-check for leaks after several hours at
    high temperature (p.53).
11. Check: max water pressure ≤ 3 bar, max water temperature ≤ 75 °C, drain
    valves at low points, bleed valves at high points (p.54).
12. Complete the **Benchmark Commissioning Checklist**; the user must register
    the heat pump with the manufacturer within one month (p.62).

## 1.4 Key hydraulic figures

| | 4 kW | 6 kW | 8 kW | 11 kW (1ph/3ph) | 13 kW (1ph/3ph) | Source |
|---|---|---|---|---|---|---|
| Minimum flow rate (l/min) | 6.67 | 6.67 | 6.67 | 11.67 | 11.67 | p.8 |
| Flow rate range (l/min) | 6.67-15 | 6.67-20.83 | 6.67-35 | 11.67-41.67 | 11.67-50 | p.42 |
| Flow switch setpoint (l/min) | 6 ±1 | 6 ±1 | 6 ±1 | 10 ±1 | 10 ±1 | p.11 |
| Nominal flow, A7/W35 ΔT 5 K (l/min) | 12.6 | 17.9 | 24.4 | 33 | 38.7 | p.9 |
| Water connections | G1" BSP | G1" BSP | G1 1/4" BSP | G1 1/4" BSP | G1 1/4" BSP | p.8 |
| Refrigerant charge R290 (kg) | 0.7 | 0.7 | 1.1 | 1.25 | 1.25 | p.9 |
| Net weight (kg) | 94 | 94 | 121.5 | 139.5 / 141.5 | 139.5 / 141.5 | p.8 |

Minimum water volume in circulation, litres (water / glycol), pp.40-41:

| Application | 4 kW | 6 kW | 8 kW | 11 kW | 13 kW |
|---|---|---|---|---|---|
| 35 °C underfloor | 27 / 31 | 29 / 34 | 77 / 89 | 81 / 94 | 91 / 105 |
| 45 °C low temp rads / fan convectors | 23 / 27 | 23 / 27 | 49 / 57 | 54 / 63 | 59 / 68 |
| 55 °C low temp rads | 26 / 30 | 26 / 30 | 42 / 49 | 49 / 57 | 51 / 59 |
| 65 °C high temp rads | 26 / 30 | 26 / 30 | 38 / 44 | 49 / 57 | 49 / 57 |

The minimum volume must be available at all times, even with all valves
closed; otherwise fit a buffer (p.40).

Other water-side figures:
- Safety relief valve 3 bar; expansion vessel listed as 8 l (p.8, p.9), with
  5 effective litres and 1.5 bar factory pre-charge (p.41, p.57). Check the
  pre-charge every two years (p.57). External vessel sizing tables p.42.
- Water quality: pH 7.5-9, conductivity < 500 µS/cm at 20 °C, chlorides
  < 50 mg/l, total hardness 20 °fH / 11.2 °dH / 2.0 mmol/l (p.41).
- Glycol: monopropylene glycol only if there is a DHW cylinder; never more
  than 35 % (p.53). Concentration table p.53.
- Operating limits (p.8): heating water max 75 °C, outdoor air -25 to 35 °C;
  cooling water max 25 °C, outdoor air -5 to 46 °C; DHW by heat pump,
  outdoor air -25 to 46 °C.
- Pipe insulation thickness by run length (p.43): < 20 m 19 mm, 20-30 m
  32 mm, 30-40 m 40 mm, 40-50 m 50 mm.

## 1.5 Electrical

| Unit | Supply | RCD | Breaker | Cable (guide only) | Source |
|---|---|---|---|---|---|
| 4 / 6 kW | 230 V ±10 % | 30 mA | 16 A | 3 x 2.5 mm² | p.47 |
| 8 kW | 230 V ±10 % | 30 mA | 20 A | 3 x 4 mm² | p.47 |
| 11 / 13 kW single phase | 230 V ±10 % | 30 mA | 32 A | 3 x 6 mm² | p.47 |
| 11 / 13 kW three phase | 400 V 3N ±10 % | 30 mA | 16 A | 5 x 2.5 mm² | p.47 |

- RCD types shown: DIFF Type A / Type B, DISJ Type B / Type C (p.47). Use an
  RCD compatible with high harmonics for the inverter (p.46).
- BUS to the indoor unit: **3 x 0.75 mm² shielded**, terminals A B X/HA Y/HB E
  (XYE bus). Terminal torque 1.2-1.5 N·m (p.47, p.50).
- H07RN-F double insulated multi-strand supply cable, copper only. Earth wire
  10 mm longer than L and N (p.46, p.49). Prevailing standard BS 7671 (p.45).
- No emergency stop, isolator, contactor or relay used for stopping the unit
  within 2 m of the unit (p.46). Don't power via a timer (p.5).
- PCB fuses: Main Control PCB T 10 A 250 V; inverter module PCB T 30 A 250 V (p.10).
- Drainage pipe heating tape on CN68, max 40 W, 230 VAC (p.50).
- Main Control PCB terminal list pp.27-29 (room thermostat on CN31 HT/COM/CL,
  remote switch CN61 M1/M2, supplementary heat source CN11 1-2, wired
  controller comms CN30 3-4).

## 1.6 Sensor resistance tables (for sensor error checks), p.15

Water circuit sensors (Tw_in, Tw_out, T1, T5, Tw2), kΩ: -10 °C 269.6 ·
0 °C 159.7 · 10 °C 97.5 · 20 °C 61.2 · 30 °C 39.4 · 40 °C 26 · 50 °C 17.6 ·
60 °C 12.15 · 70 °C 8.55 · 80 °C 6.12 · 90 °C 4.45 · 100 °C 3.29.

Compressor discharge sensor Tp, kΩ: -20 °C 516.71 · -10 °C 301.63 · 0 °C
180.41 · 10 °C 110.64 · 20 °C 69.60 · 30 °C 44.89 · 40 °C 29.66 · 50 °C 20.03 ·
60 °C 13.80 · 70 °C 9.68 · 80 °C 6.91 · 90 °C 5 · 100 °C 3.67 · 110 °C 2.74 ·
120 °C 2.07 · 130 °C 1.59.

Refrigerant circuit sensors (Th, T4, T3, TL, T2, T2B), kΩ: -20 °C 106.73 ·
-10 °C 59.78 · 0 °C 34.60 · 10 °C 20.61 · 20 °C 12.64 · 25 °C 10 · 30 °C 7.97 ·
40 °C 5.18 · 50 °C 3.45 · 60 °C 2.35 · 70 °C 1.63 · 80 °C 1.15 · 90 °C 0.83 ·
100 °C 0.61.

## 1.7 R290 siting rules (short)

- Outdoors only. Mark a protective perimeter (dimensions pp.30-31) with no
  openings into the building (doors, windows, vents, lightwells, cellar or
  sewer access), no permanent or temporary ignition sources, and not
  adjoining alleys, parking, neighbours' plots or public areas (p.30).
- Wall clearances p.32, between units p.33. At least 100 mm above mean snow
  cover (p.34). At least 500 m from the sea (p.34). Max altitude 2000 m (p.4).
- Leak detection: electronic detector suitable for R290, set at ≤ 25 % of LFL,
  no chlorine detergents. If brazing is needed, recover all refrigerant and
  purge with OFN (p.56).

## 1.8 Freeze protection (pp.44-45, p.54)

- Software frost protection only works while the outdoor unit is powered.
  Advise users to turn heating mode off, not the heat pump, when away (p.6).
- For long power cuts, one of: glycol; manual drain (2 isolation + 2 drain
  valves); or automatic anti-freeze valves opening at +3 °C (not compatible
  with glycol). With anti-freeze valves, drain the outdoor part manually if a
  power cut lasts 10 hours or more below zero.

## 1.9 Annual maintenance by installer (Tab.30, pp.55-56)

Check parts in position, clean the evaporator, water pressure, clean the
strainer, flow switch working, safety relief valves (heating and DHW),
no water leaks, frost protection solution present, DHW cylinder backup heater
clean, temperature sensors working, wiring and cables, contactors and
breakers, no refrigerant leak. Don't use a pressure washer on the unit (p.55).

## 1.10 Manufacturer support

Baxi Customer Support and Technical Advice 0844 871 1525, www.baxi.co.uk
(p.68). For HMG installers, escalate through Heat Merchants Technical Support
as per the project instructions.

---

# Part 2: Manual text (as extracted from the PDF)

Tables and figures are flattened by the text extraction. Check the original
PDF page before quoting a figure from a diagram (wiring, dimensions, pump curves).

--- Page 1 ---
en
Installation, user and service manual
Reversible monobloc air-to-water heat pump
Outdoor unit
Assure HP55-4-1-PHMB
Assure HP55-6-1-PHMB
Assure HP55-8-1-PHMB
Assure HP55-11-1-PHMB
Assure HP55-11-3-PHMB
Assure HP55-13-1-PHMB
Assure HP55-13-3-PHMB
Please keep these instructions in a safe place.
If you move house, please hand them over to the next occupier.
--- Page 2 ---
Contents
Contents
1  Safety instructions ... 4
2  Standard delivery ... 6
3  Symbols used ... 7
3.1 Symbols used in the manual ... 7
3.2 Symbols used on the outdoor unit ... 7
3.3 Symbols used on the data plate ... 8
4  Technical specifications ... 8
4.1 Technical data ... 8
4.1.1  Outdoor unit technical specifications ... 8
4.1.2  Space heaters with medium-temperature heat pump ... 11
4.1.3  Available pressure ... 13
4.2 Sensor specification ... 15
4.3 Dimensions and connections ... 16
4.3.1  Outdoor units Assure HP55-4-1-PHMB - Assure HP55-6-1-PHMB ... 16
4.3.2  Assure HP55-8-1-PHMB outdoor unit ... 17
4.3.3  Outdoor units Assure HP55-11-1-PHMB - Assure HP55-11-3-PHMB - Assure HP55-13-1-PHMB - Assure
HP55-13-3-PHMB ... 18
4.4 Refrigerant diagram ... 19
4.5 Electrical diagram ... 21
5  Description of the product ... 25
5.1 Data plate ... 25
5.2 Main components of the outdoor unit ... 25
5.3 Terminal blocks ... 27
6  Installation ... 29
6.1 Checking the condition of the packaging of the outdoor unit ... 29
6.2 Selecting the location of the outdoor unit ... 30
6.2.1  Protective perimeter ... 30
6.2.2  Minimum distances from the walls ... 31
6.2.3  General rules ... 33
6.2.4  Exposure to strong winds ... 33
6.2.5  Installation in coastal areas ... 34
6.2.6  Exposure to strong solar radiation ... 34
6.2.7  Installation in cold climates ... 34
6.2.8  Managing acoustic comfort ... 34
6.3 Preparing for installation ... 35
6.3.1  Condensate drainage ... 36
6.3.2  Preparing a ground installation ... 36
6.4 Unpack the outdoor unit ... 37
6.5 Transport ... 37
6.5.1  Transporting the outdoor unit using a crane ... 37
6.5.2  Transporting the outdoor unit without a crane ... 38
6.6 Putting the outdoor unit in place ... 39
6.6.1  Removing the exchanger protection ... 39
6.6.2  Remove the compressor support from the outdoor units Assure HP55-8-1-PHMB - Assure HP55-11-1-
PHMB - Assure HP55-13-1-PHMB - Assure HP55-11-3-PHMB - Assure HP55-13-3-PHMB ... 39
6.6.3  Connecting the condensate drain hose ... 40
6.7 Hydraulic connections ... 40
6.7.1  Minimum volume of water ... 40
6.7.2  Heating water specifications ... 41
6.7.3  Volume of the expansion vessel ... 41
6.7.4  Flow rate range ... 42
6.7.5  Connecting the outdoor unit to the hydraulic circuit ... 42
6.7.6  Water pipe insulation ... 43
6.7.7  Drying the flow switch ... 43
6.8 Freeze protection ... 44
6.8.1  Software protection ... 44
6.8.2  Frost protection ... 44
6.9 Electrical connections ... 45
6.9.1  Checking and preparing the electrical installation ... 45
--- Page 3 ---
Contents
6.9.2  Precautions for electrical wiring ... 46
6.9.3  Accessing the main control box ... 46
6.9.4  Connecting the electrical circuits ... 47
6.9.5  Cable routing ... 47
6.9.6  Connecting the outdoor unit to the power supply ... 49
6.9.7  Connect the outdoor unit to the indoor unit ... 50
6.9.8  Connection for Other Optional Components ... 50
6.10  Refit the outdoor unit panels ... 51
6.11  Sealing building entry points ... 51
6.12  Flushing and filling the heating installation with mains water ... 51
6.12.1 Flushing new installations and installations less than 6 months old ... 51
6.12.2 Flushing an existing installation ... 51
6.12.3 Filling the heating circuit with mains water ... 52
6.13  Flushing and filling a heating installation with glycol water ... 52
6.13.1 Flushing an installation before filling with glycol water ... 52
6.13.2 Filling the heating circuit with glycol water ... 52
6.13.3 Filling the heating circuit with glycol water ... 53
6.14  Checking water circuit ... 54
7  User instructions ... 54
7.1 Precautions regarding the location of the outdoor unit ... 54
7.2 Prolonged power outage in winter ... 54
7.3 Clearing the snow accumulated around the outdoor unit ... 54
7.4 Cleaning the outdoor unit ... 54
8  Maintenance ... 55
8.1 Safety precautions for maintenance ... 55
8.2 Maintenance checklist ... 55
8.3 Service information ... 56
8.3.1  Label for refrigerant presence ... 56
8.3.2  Leak detection methods ... 56
8.3.3  Check of refrigeration equipment ... 56
8.3.4  Check of electrical devices ... 57
8.3.5  Pre-pressure adjustment of the expansion vessel ... 57
9  Error codes ... 57
10 Decommissioning and disposal ... 60
10.1 Disposal and recycling ... 60
10.2 Brine disposal/recycling ... 60
10.3 Recover refrigerants ... 61
10.4 Labelling ... 61
10.5 Recovery equipment ... 61
11 Appendix ... 62
11.1 Benchmark Commissioning & Warranty Validation Service Record ... 62
11.2 Service record ... 63
11.3 Product data sheet ... 65
11.4 Servicing information ... 66
--- Page 4 ---
1 Safety instructions
1  Safety instructions
General safety instructions
This appliance can be used by children aged from 8 years and above and persons with reduced physical, sensory or mental
capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the
appliance in a safe way and understand the hazards involved. Children shall not play with the appliance. Children must not carry
out any unsupervised cleaning or maintenance operations.
Before any work, read the documents provided with the appliance carefully. These documents are also available on our website.
See the back cover.
Keep these documents close to the place where the appliance is installed.
Only qualified professionals are authorised to carry out installation, commissioning, maintenance, repair or removal work on the
appliance. They must follow the prevailing local and national regulations.
Do not make any modifications to the appliance without the written consent of the manufacturer. To benefit from warranty cover,
no modifications should be made to the appliance.
Installation location
The outdoor unit contains a category A3 flammable refrigerant. In the event of a leak, this refrigerant can form a flammable or
explosive atmosphere. Specific rules must be respected within the defined protective zone in the immediate proximity of the
outdoor unit.
See
Installation chapter, Protective perimeter.
Follow all the instructions in the Installation chapter.
In addition:
Protect the outdoor unit from any accumulation of snow.
Do not install at an altitude of more than 2000 metres above sea level
Do not install in a location exposed to combustible gas
In coastal areas, the salt or corrosive air or sulphate gases in the environment may cause corrosion which can shorten the
lifespan of the outdoor unit.
Refrigerant circuit
The outdoor unit contains a highly flammable refrigerant.
Respect the national regulations concerning refrigerants.
All work on the refrigerant circuit must be done by a qualified professional, according to prevailing codes of practice and safety
in the profession (recovery of the refrigerant, brazing under nitrogen). All brazing work must be done by qualified brazers.
By qualified professional, we mean a person who has the qualifications pertaining to this refrigerant handling and piping work as
stipulated by the local laws and regulations, and who has been trained in matters relating to refrigerant handling and piping
work.
When installing, relocating, or servicing the heat pump, only use the specified refrigerant R290 to charge the refrigerant lines.
Do not mix the R290 refrigerant with any other refrigerant and do not allow air, liquids or other gases to remain in the lines.
Repair the refrigerant leak before starting up the installation once more.
Caution
Do not attempt to speed up the defrosting process or clean using methods other than those recommended by the
manufacturer.
The appliance must be stored in a location which does not contain any continuously operating ignition sources (for
example: naked flames, operating gas appliance or electric radiator).
Do not pierce or burn.
Be aware that refrigerants may not contain an odour.
Heating circuit
Respect the minimum and maximum water pressure and temperature to ensure the heating system operates correctly. See the
Technical Specifications chapter.
Instructions for using glycol water
Ensure that all the installation components are compatible with the use of glycol water.
Only use high-quality food-grade glycol water solutions based on monopropylene glycol (MPG).
Use a monopropylene glycol solution concentration which is compatible with the appliance. See the chapter on Precautions to
take when filling with glycol water.
--- Page 5 ---
1 Safety instructions
Electrical connections
Only a qualified installer or a qualified technician is authorised to work on the appliance's electrical system, as an incorrectly
performed intervention may cause electrical shocks and/or electrical leakage.
Install the appliance in accordance with national rules on electrical installation.
In order to avoid the danger of an unexpected thermal circuit breaker reset, this appliance must not be powered through an
external switch, such as a timer, or be connected to a circuit which is regularly switched on and off by the electricity provider.
The appliance is intended to be permanently connected to the mains. A disconnection device must be fitted to the fixed wiring in
accordance with the installation rules.
Before any wiring work on the electrical circuit, switch off the power supply, check that no voltage is present and secure the
circuit breaker with a circuit breaker lockout.
Use wiring that meets the specifications in the installation manual and local regulations and laws. Use of wiring which does not
meet the specifications may give rise to electric shocks, electrical leakage, smoke and/or a fire.
Power supply cables outside buildings must be thicker than polychloroprene-sheathed flexible cables (60245 IEC 57 cable).
This appliance must be connected to the protective earthing in accordance with prevailing installation standards. Earth the
appliance before making any electrical connections. Incomplete grounding can cause a malfunction or electric shock.
To avoid electric shock, check that the length of the conductors between the cable clamp and the terminal blocks is such that
the active conductors are put under tension before the earth conductor.
Install a circuit breaker that meets the specifications in the installation manual and local regulations and laws.
If a power supply cable comes with the appliance and it turns out to be damaged, it must be replaced by the manufacturer, its
after-sales service or persons with similar qualifications in order to avoid danger.
Separate the extra-low voltage cables from the 230/400 V power supply cables.
See the Electrical connections chapter for the following operations:
Choosing the type and calibre of the protective equipment
Connection to the electrical network
Wiring the appliance
Maintenance and repair work
Remove the casing only to perform maintenance and repair work. Put the casing back in place after maintenance and repair
work.
Before starting work on the refrigerant circuit, switch off the appliance and wait a few minutes. Certain items of equipment such
as the compressor and the pipes can reach temperatures in excess of 100 °C and high pressures, which may cause serious
injuries.
Prior to beginning work on systems containing flammable refrigerants, safety checks are necessary to ensure that the risk of
ignition is minimised.
Work shall be undertaken under a controlled procedure so as to minimise the risk of a flammable gas or vapour being present
while the work is being performed.
All maintenance staff and others working in the local area shall be instructed on the nature of work being carried out. Work in
confined spaces shall be avoided.
The area shall be checked with an appropriate refrigerant detector prior to and during work, to ensure the technician is aware of
potentially flammable or explosive atmospheres.
If a refrigerant leak is detected, all naked flames shall be removed/extinguished. If a leakage of refrigerant is found which
requires brazing, all of the refrigerant shall be recovered from the system prior to brazing activities.
If any hot work is to be conducted on the refrigerating equipment or any associated parts, appropriate fire extinguishing
equipment shall be kept close by. Have a dry powder or CO2 fire extinguisher adjacent to the charging area.
Do not smoke during maintenance operations.
Repair and maintenance of electrical components must include initial safety checks and component inspection procedures. In
the event of a fault that could compromise safety, no power supply may be connected to the circuit until said fault has been
dealt with satisfactorily. If the fault cannot be corrected immediately but it is necessary to continue operation, an appropriate
temporary solution must be adopted. This shall be reported to the owner of the equipment to ensure all parties are duly
informed.
Initial safety checks shall include:
Discharging of the capacitors: this shall be done in a safe manner to avoid any possibility of sparking
Ensuring no live electrical components and wiring are exposed while charging, recovering or draining the system
Ensuring the continuity of the earth bonding.
Before any work, switch off the power supply for all the components of your installation.
Use only original spare parts.
--- Page 6 ---
2 Standard delivery
Guidelines for the user
If you do not need to heat your home for a long period, deactivate the heating mode. Do not switch off the heat pump in order to
guarantee the frost protection of the installation.
If you do need to switch off the heat pump and if there is a risk that the temperature inside and/or outside the building will fall
below zero:
Installation filled with mains water: drain the water pipes of the installation (heat pump, underfloor heating, etc.) to prevent the
system from freezing
Installation filled with glycol water: the installation is protected against freezing
Keep the appliance accessible at all times to allow work to be performed.
Never remove or cover the labels and data plates affixed to appliances. These must be legible throughout the entire lifetime of
the appliance.
Manufacturer's liabilities
Our products are manufactured in compliance with the requirements of the various applicable directives. They are therefore
delivered with the  marking and any documents necessary. In the interests of the quality of our products, we strive constantly
to improve them. We therefore reserve the right to modify the specifications given in this document.
Our liability as manufacturer may not be invoked in the following cases:
Failure to abide by the instructions on installing, commissioning and maintaining the appliance
Failure to abide by the instructions on using the appliance
Faulty or insufficient maintenance of the appliance
Responsibilities of the installer
The installer is responsible for the installation and initial commissioning of the appliance. The installer must observe the
following instructions:
Read and follow the instructions given in the manuals provided with the appliance
Install the appliance in compliance with prevailing legislation and standards
Carry out initial commissioning and any checks necessary
Explain the installation to the user
If maintenance is necessary, warn the user of the obligation to check the appliance and keep it in good working order
Hand over all manuals to the user
Responsibilities of the user
To guarantee optimum operation of the system, you must abide by the following instructions:
Read and follow the instructions given in the manuals provided with the appliance
Call on a qualified professional to carry out installation and initial commissioning
Get your installer to explain your installation to you
Have the required inspections and maintenance carried out by a qualified installer
Keep the instruction manuals in good condition close to the appliance
2  Standard delivery
Tab.1
Package  Contents
Outdoor unit  An outdoor unit
An accessories bag containing:
Y filter
Condensate drain connector
Energy label
3 cable clamps
2 paper edge protectors
An installation, user and service manual
Magnetic filter  A magnetic filter
--- Page 7 ---
3 Symbols used
3  Symbols used
3.1  Symbols used in the manual
This manual uses various danger levels to draw attention to special
instructions. We do this to improve user safety, to prevent problems and to
guarantee correct operation of the appliance.
Danger
Risk of dangerous situations that may result in serious personal
injury.
Danger of electric shock
Risk of electric shock.
Warning
Risk of dangerous situations that may result in minor personal
injury.
Caution
Risk of material damage.
Important
Please note: important information.
See
Reference to other manuals or pages in this manual.
3.2  Symbols used on the outdoor unit
Fig.1  1 The appliance contains a highly flammable refrigerant (A3)
2 Before installing and commissioning the appliance, carefully read
the instruction manuals provided
1  2  3  3 Read the technical manual
4 See operating instructions
5 Naked flames prohibited
6 All work on the refrigeration circuit must be carried out by a
4  5  6  qualified professional
7 To avoid electric shock, make sure that the length of the
conductors between the traction arrester device and the terminal
blocks is such that the active conductors are put under tension
7  8  9  before the earth conductor
8 Caution: danger of electric shock
9 Important information
--- Page 8 ---
4 Technical specifications
3.3  Symbols used on the data plate
Fig.2  1  Compressor
MW-6070795-1  2  Fan
3  PCBs
4  Before installing and commissioning the appliance, carefully read
1  2  3  the instruction manuals provided
5  Read the technical manual
6  Dispose of used products in an appropriate recovery and recycling
structure
4  5  6  7  The appliance contains a highly flammable refrigerant (A3)
8  Caution: danger of electric shock
9  See operating instructions
10  Information
7  8  9  11  Information concerning the heat pump: refrigerant type, maximum
allowable operating pressure and absorbed output
12  Net weight
10  11  12
4  Technical specifications
4.1  Technical data
4.1.1  Outdoor unit technical specifications
Tab.2  Outdoor unit conditions of use
Limit operating temperatures  Outdoor unit
Heating mode  Water  Maximum 75 °C
Outdoor air  -25 °C to 35 °C
Cooling mode  Water  Maximum 25 °C
Outdoor air  -5 °C to 46 °C
Domestic hot water by heat pump  Outdoor air  -25 °C to 46 °C
Tab.3  Outdoor unit specifications
Specifications  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Minimum flow rate  l/min  6.67  6.67  6.67  11.67  11.67  11.67  11.67
required
Erp sound power  dB  48  48  49  52  52  52  52
level
Weight
Net weight  kg  94  94  121.5  139.5  141.5  139.5  141.5
Gross weight  kg  114  114  143.5  161.5  163.5  161.5  163.5
Connections
Water inlet/outlet  -  G1"BSP  G1"BSP  G1 1/4"BSP G1 1/4"BSP G1 1/4"BSP G1 1/4"BSP G1 1/4"BSP
Water drain  -  Hose con­  Hose con­  Hose con­  Hose con­  Hose con­  Hose con­  Hose con­
nection  nection  nection  nection  nection  nection  nection
Expansion vessel
Volume  l  8  8  8  8  8  8  8
Maximum operat­  MPa  0.8 (8)  0.8 (8)  0.8 (8)  0.8 (8)  0.8 (8)  0.8 (8)  0.8 (8)
ing pressure  (bar)
Pump
Type  Water  Water  Water  Water  Water  Water  Water
cooled  cooled  cooled  cooled  cooled  cooled  cooled
--- Page 9 ---
4 Technical specifications
Specifications  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Number of speeds  Variable  Variable  Variable  Variable  Variable  Variable  Variable
speed  speed  speed  speed  speed  speed  speed
Safety pressure re­ MPa  0.3 (3)  0.3 (3)  0.3 (3)  0.3 (3)  0.3 (3)  0.3 (3)  0.3 (3)
lief valve in water (bar)
circuit
Type of refrigerant  -  R290  R290  R290  R290  R290  R290  R290
Refrigerant charge  kg  0.7  0.7  1.1  1.25  1.25  1.25  1.25
Refrigerant  tCO2e 0.0021  0.0021  0.0033  0.00375  0.00375  0.00375  0.00375
charge(1)
(1) The quantity of refrigerant in CO2 equivalent is calculated using the following formula: quantity (in kg) of refrigerant x GWP / 1000. The
Global Warming Potential (GWP) of R290 is 3.
Tab.4  Heating mode: outdoor air temperature +2 °C, outlet water temperature +35 °C.
Measurement type  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Heating capacity at kW  4.30  5.88  8.20  11.00  11.00  12.80  12.80
nominal point
Heating capacity  kW  2.53/6.50  2.53/7.39  3.84/10.61  5.07/13.68  5.07/13.68  5.07/16.60  5.07/16.60
min/max
Coefficient of per­  -  4.11  3.82  3.60  3.45  3.45  3.28  3.28
formance (COP)
Absorbed electrical kWe  1.05  1.54  2.28  3.19  3.19  3.90  3.90
power
Tab.5  Heating mode: outdoor air temperature +2 °C, outlet water temperature +55 °C.
Measurement type  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Heating capacity at kW  4.40  5.75  7.75  11.20  11.20  13.00  13.00
nominal point
Heating capacity  kW  3.67/5.88  3.67/6.70  5.33/9.88  7.64/12.61  7.64/12.61  7.64/15.39  7.64/15.39
min/max
Coefficient of per­  -  2.72  2.66  2.56  2.57  2.57  2.46  2.46
formance (COP)
Absorbed electrical kWe  1.62  2.16  3.03  4.36  4.36  5.29  5.29
power
Tab.6  Heating mode: outdoor air temperature +7 °C, outlet water temperature +35 °C. Performance certified as per
EN 14511-2.
Measurement type  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Heating capacity at kW  4.40  6.26  8.50  11.50  11.50  13.50  13.50
nominal point
Heating capacity  kW  2.93/6.86  2.93/7.70  5.58/11.05  5.87/14.72  5.87/14.72  5.87/17.57  5.87/17.57
min/max
Coefficient of per­  -  5.17  4.89  4.98  4.85  4.85  4.60  4.60
formance (COP)
Absorbed electrical kWe  0.85  1.28  1.71  2.37  2.37  2.94  2.94
power
Nominal water flow l/min  12.6  17.9  24.4  33  33  38.7  38.7
rate (ΔT = 5 K)
--- Page 10 ---
4 Technical specifications
Tab.7  Heating mode: outdoor air temperature +7 °C, outlet water temperature +55 °C. Performance certified in accordance
with EN 14511-2.
Measurement type  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Heating capacity at kW  4.40  6.10  8.00  11.50  11.50  13.50  13.50
nominal point
Heating capacity  kW  4.55/6.20  4.55/6.97  6.52/10.17  9.75/13.61  9.75/13.61  9.75/16.40  9.75/16.40
min/max
Coefficient of per­  -  3.24  3.12  3.18  3.15  3.15  3.04  3.04
formance (COP)
Absorbed electrical kW  1.36  1.96  2.52  3.65  3.65  4.44  4.44
power
Nominal water flow l/min  12.6  17.5  22.9  33  33  38.7  38.7
rate (ΔT = 5 K)
Tab.8  Cooling mode: outdoor air temperature +35 °C, outlet water temperature +18 °C. Stated performances in accordance
with EN 14511-2.
Measurement type  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Cooling capacity at kW  4.56  6.40  9.00  11.90  11.90  13.90  13.90
nominal point
Min/max cooling  kW  2.29/5.66  2.29/7.14  3.25/9.23  4.17/11.96  4.17/11.96  4.17/14.26  4.17/14.26
capacity
Energy efficiency  -  5.49  5.12  4.95  4.52  4.52  4.22  4.22
ratio (EER)
Absorbed electrical kW  0.83  1.25  1.82  2.63  2.63  3.29  3.29
power
Nominal water flow l/min  12.6  17.9  24.4  33  33  38.7  38.7
rate (ΔT = 5 K)
Tab.9  Cooling mode: outdoor air temperature +35 °C, outlet water temperature +7 °C. Stated performances in accordance
with EN 14511-2.
Measurement type  Unit  Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Cooling capacity at kW  4.40  6.26  8.50  11.50  11.50  13.50  13.50
nominal point
Min/max cooling  kW  3.18/7.84  3.18/9.75  4.69/12.13  6.08/16.40  6.08/16.40  6.08/18.64  6.08/18.64
capacity
Energy efficiency  -  3.69  3.20  3.28  3.05  3.05  2.80  2.80
ratio (EER)
Absorbed electrical kW  1.19  1.96  2.59  3.77  3.77  4.81  4.81
power
Nominal water flow l/min  13.1  18.3  25.8  34.1  34.1  39.8  39.8
rate (ΔT = 5 K)
Tab.10  Fuse – on printed circuit boards
Main Control PCB  Inverter module PCB
Fuse name  FUSE-T-10A/250VAC-T-P  FUSE-T-30A/250VAC-T-P-HT
Working voltage (V)  250  250
Working current (A)  10  30
--- Page 11 ---
4 Technical specifications
Tab.11  Flow switch
Assure HP55-4-1-PHMB  Assure HP55-11-1-PHMB
Assure HP55-6-1-PHMB  Assure HP55-11-3-PHMB
Assure HP55-8-1-PHMB  Assure HP55-13-1-PHMB
Assure HP55-13-3-PHMB
Setpoint  6 l/min ± 1  10 l/min ± 1
4.1.2  Space heaters with medium-temperature heat pump
Tab.12  Technical parameters for heat pump combination heaters (parameters declared for medium-temperature application:
55 °C)
Product name  Unit  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-
PHMB  PHMB  PHMB
Air-to-water heat pump  -  -  Yes  Yes  Yes
Water-to-water heat pump  -  -  No  No  No
Brine-to-water heat pump  -  -  No  No  No
Low-temperature heat pump  -  -  No  No  No
Equipped with a supplementary heater  -  -  No  No  No
Heat pump combination heater  -  -  No  No  No
Rated heat output under average conditions  (1)
Prated  kW  4.90  6.10  7.80
Rated heat output under colder conditions  Prated  kW  4.30  5.90  8.00
Rated heat output under warmer conditions  Prated  kW  4.70  6.00  8.80
Declared capacity for heating for part load at an indoor
temperature of 20 °C and outdoor temperature Tj
Tj = -7 °C  Pdh  kW  4.42  5.40  6.95
Tj = +2 °C  Pdh  kW  2.72  3.13  4.09
Tj = +7 °C  Pdh  kW  2.55  2.58  3.47
Tj = +12 °C  Pdh  kW  3.01  3.02  4.03
Tj = bivalent temperature  Pdh  kW  4.42  5.40  6.95
Tj = operation limit temperature  Pdh  kW  4.80  5.37  7.71
Bivalent temperature  Tbiv  °C  -7  -7  -7
Degradation coefficient  (2)
Cdh  -  0.9  0.9  0.9
Seasonal space heating energy efficiency under average  ƞs  %  157  153  153
conditions
Seasonal space heating energy efficiency under colder  ƞs  %  124.3  132  136
conditions
Seasonal space heating energy efficiency under warmer  ƞs  %  170  179  188
conditions
Declared coefficient of performance or primary energy ra­
tio for part load at an indoor temperature of 20 °C and
outdoor temperature Tj
Tj = -7 °C  COPd  -  2.59  2.40  2.36
Tj = +2 °C  COPd  -  3.94  3.79  3.83
Tj = +7 °C  COPd  -  4.94  5.15  5.05
Tj = +12 °C  COPd  -  6.44  6.53  6.41
Tj = bivalent temperature  COPd  -  2.59  2.40  2.36
Tj = operation limit temperature  COPd  -  2.27  2.25  2.02
Operation limit temperature for air-to-water heat pumps  TOL  °C  -10  -10  -10
Heating water operating limit temperature  WTOL  °C  75  75  75
Electrical power consumption
Off mode  POFF  kW  0.009  0.009  0.009
--- Page 12 ---
4 Technical specifications
Product name  Unit  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-
PHMB  PHMB  PHMB
Thermostat-off mode  PTO  kW  0.010  0.010  0.009
Stand-by  PSB  kW  0.009  0.009  0.009
Crankcase heater mode  PCK  kW  0.000  0.000  0.000
Supplementary heater
Rated heat output  Psup  kW  0.10  0.73  0.09
Type of energy input  -  -  Electricity  Electricity  Electricity
Other specifications
Capacity control  -  -  Variable  Variable  Variable
Sound power level, indoors - outdoors  LWA  dB  0 - 48  0 - 48  0 - 49
Annual energy consumption under average conditions  QHE  kWh  2535  3233  4140
Annual energy consumption under colder conditions  QHE  kWh  3328  4325  5659
Annual energy consumption under warmer conditions  QHE  kWh  1446  1762  2456
Rated air flow rate, outdoors for air-to-water heat  -  m3/h  2875  2875  4031
pumps
(1) The rated heat output Prated is equal to the design load for heating Pdesignh, and the rated heat output of a supplementary heater
Psup is equal to the supplementary capacity for heating sup(Tj).
(2) If Cdh is not determined by measurement, the default degradation coefficient is Cdh = 0.9.
Tab.13  Technical parameters for heat pump combination heaters (parameters declared for medium-temperature application:
55 °C)
Product name  Unit  Assure  Assure  Assure  Assure
HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB
Air-to-water heat pump  -  -  Yes  Yes  Yes  Yes
Water-to-water heat pump  -  -  No  No  No  No
Brine-to-water heat pump  -  -  No  No  No  No
Low-temperature heat pump  -  -  No  No  No  No
Equipped with a supplementary heater  -  -  No  No  No  No
Heat pump combination heater  -  -  No  No  No  No
Rated heat output under average conditions  (1)
Prated  kW  12.10  12.10  13.70  13.70
Rated heat output under colder conditions  Prated  kW  10.80  10.80  13.90  13.90
Rated heat output under warmer conditions  Prated  kW  12.40  12.40  14.90  14.90
Declared capacity for heating for part load at an in­
door temperature of 20 °C and outdoor tempera­
ture Tj
Tj = -7 °C  Pdh  kW  10.88  10.88  11.87  11.87
Tj = +2 °C  Pdh  kW  6.56  6.56  7.37  7.37
Tj = +7 °C  Pdh  kW  4.78  4.78  4.87  4.87
Tj = +12 °C  Pdh  kW  5.83  5.83  5.83  5.83
Tj = bivalent temperature  Pdh  kW  10.88  10.88  11.87  11.87
Tj = operation limit temperature  Pdh  kW  10.71  10.71  11.20  11.20
Bivalent temperature  Tbiv  °C  -7  -7  -7  -7
Degradation coefficient(2)  Cdh  -  0.9  0.9  0.9  0.9
Seasonal space heating energy efficiency under  ƞs  %  147  147  146  146
average conditions
Seasonal space heating energy efficiency under  ƞs  %  127  127  128  128
colder conditions
Seasonal space heating energy efficiency under  ƞs  %  174  174  181  181
warmer conditions
--- Page 13 ---
4 Technical specifications
Product name  Unit  Assure  Assure  Assure  Assure
HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB
Declared coefficient of performance or primary en­
ergy ratio for part load at an indoor temperature of
20 °C and outdoor temperature Tj
Tj = -7 °C  COPd  -  2.27  2.27  2.22  2.22
Tj = +2 °C  COPd  -  3.63  3.63  3.56  3.56
Tj = +7 °C  COPd  -  4.99  4.99  5.21  5.21
Tj = +12 °C  COPd  -  6.55  6.55  6.55  6.55
Tj = bivalent temperature  COPd  -  2.27  2.27  2.22  2.22
Tj = operation limit temperature  COPd  -  2.15  2.15  2.07  2.07
Operation limit temperature for air-to-water heat  TOL  °C  -10  -10  -10
pumps
Heating water operating limit temperature  WTOL  °C  75  75  75  75
Electrical power consumption
Off mode  POFF  kW  0.010  0.010  0.010  0.010
Thermostat-off mode  PTO  kW  0.015  0.015  0.015  0.015
Stand-by  PSB  kW  0.010  0.010  0.010  0.010
Crankcase heater mode  PCK  kW  0.000  0.000  0.000  0.000
Supplementary heater
Rated heat output  Psup  kW  1.39  1.39  2.50  2.50
Type of energy input  -  -  Electricity  Electricity  Electricity  Electricity
Other specifications
Capacity control  -  -  Variable  Variable  Variable  Variable
Sound power level, indoors - outdoors  LWA  dB  0 - 52  0 - 52  0 - 52  0 - 52
Annual energy consumption under average con­  QHE  kWh  6662  6662  7588  7588
ditions
Annual energy consumption under colder condi­  QHE  kWh  8197  8197  10408  10408
tions
Annual energy consumption under warmer con­  QHE  kWh  3724  3724  4306  4306
ditions
Rated air flow rate, outdoors for air-to-water heat -  m3/h  4457  4457  5042  5042
pumps
(1) The rated heat output Prated is equal to the design load for heating Pdesignh, and the rated heat output of a supplementary heater
Psup is equal to the supplementary capacity for heating sup(Tj).
(2) If Cdh is not determined by measurement, the default degradation coefficient is Cdh = 0.9.
See
Back cover for contact details.
4.1.3  Available pressure
Important
The benchmark for the most efficient circulating pumps is EEI ≤
0.20.
The relationship between the external static pressure and the water flow
rate is shown as follows:
--- Page 14 ---
4 Technical specifications
Fig.3  Assure HP55-4-1-PHMB - Assure HP55-6-1-PHMB
Y  MW-6070775-1
100
90
80
70
60
50
40
30
20
10
X
0
55  60
x Water flow rate (l/min)  y Available pressure (kPa)
Fig.4  Assure HP55-8-1-PHMB
Y
100
90
80
70
60
50
40
30
20
10
X
0
55  60
x Water flow rate (l/min)  y Available pressure (kPa)
Fig.5  Assure HP55-11-1-PHMB - Assure HP55-11-3-PHMB - Assure HP55-13-1-PHMB - Assure HP55-13-3-PHMB
Y
100
90
80
70
60
50
40
30
20
10
0
55  60
x Water flow rate (l/min)  y Available pressure (kPa)
--- Page 15 ---
4 Technical specifications
4.2  Sensor specification
Tab.14  Resistance characteristics of sensors in the water circuit
Temperature °C  -10  0  10  20  30  40  50  60  70  80  90  100
Resist­  kΩ  269.6  159.7  97.5  61.2  39.4  26  17.6  12.15  8.55  6.12  4.45  3.29
ance (1)
(1) The resistance tolerance is 3% at 50 °C and 5% at 25 °C.
The sensors in the water circuit are:
Tw_in : heating return temperature sensor
Tw_out: heating flow temperature sensor
T1: water outlet temperature sensor downstream of the supplementary
heater
T5: domestic hot water cylinder temperature sensor
Tw2: zone 2 water temperature sensor
Tab.15  Resistance characteristics of the compressor discharge temperature sensorTp
Temperature  °C  -20  -10  0  10  20  30  40  50
Resistance  (1)
kΩ  516.71  301.63  180.41  110.64  69.60  44.89  29.66  20.03
Temperature  °C  60  70  80  90  100  110  120  130
Resistance  (1)
kΩ  13.80  9.68  6.91  5  3.67  2.74  2.07  1.59
(1) The resistance tolerance is 4% at 100 °C and 5% at 75 °C.
Tab.16  Resistance characteristics of sensors in the refrigerant circuit
Temperature  °C  -20  -10  0  10  20  25  30
Resistance(1)  kΩ  106.73  59.78  34.60  20.61  12.64  10  7.97
Temperature  °C  30  40  50  60  70  80  90  100
Resistance(1)  kΩ  7.97  5.18  3.45  2.35  1.63  1.15  0.83  0.61
(1) The resistance tolerance is 5% at 50 °C and 3% at 25 °C.
The sensors in the refrigerant circuit are:
Th : compressor suction temperature sensor
T4: outdoor air temperature sensor
T3: heat exchanger temperature sensor
TL: heat exchanger outlet refrigerant temperature sensor (for cooling
mode)
T2: refrigerant temperature sensor at the plate heat exchanger inlet (for
cooling mode)
T2B: plate heat exchanger outlet refrigerant temperature sensor (for
cooling mode)
--- Page 16 ---
4 Technical specifications
4.3  Dimensions and connections
4.3.1  Outdoor units Assure HP55-4-1-PHMB - Assure HP55-6-1-PHMB
Fig.6
371.3
392.3
3
75.5
209  435
4
4  720
333  333
99
528
210
124  644  379  155
48  90 75
426.3 374  2  1
1302
1 Heating circuit flow G1"BSP  3 Condensate drain hole
2 Heating circuit return G1"BSP  4 Centre of gravity
--- Page 17 ---
4 Technical specifications
4.3.2  Assure HP55-8-1-PHMB outdoor unit
Fig.7
435
3
111
447  209
1391
4  867
4
360  360
116 144
550
234  194  656  363  178
77 68
50.6
2 1
523 458.5
1 Heating circuit flow G1" 1/4"BSP  3 Condensate drain hole
2 Heating circuit return G1"1/4" BSP  4 Centre of gravity
--- Page 18 ---
4 Technical specifications
4.3.3  Outdoor units Assure HP55-11-1-PHMB - Assure HP55-11-3-PHMB - Assure HP55-13-1-PHMB - Assure
HP55-13-3-PHMB
Fig.8
435
3
111
447  209
1391
4  867
4
415  415
116 144
715
200  194  656  363  178
77 68
50.6
2 1
523 458.5
1 Heating circuit flow G1" 1/4"BSP  3 Condensate drain hole
2 Heating circuit return G1"1/4" BSP  4 Centre of gravity
--- Page 19 ---
4 Technical specifications
4.4  Refrigerant diagram
Fig.9  Assure HP55-4-1-PHMB - Assure HP55-6-1-PHMB
24
22  23  26
19  20  21  F  25  Outlet
5
H_S  6
18
4
HP  17
7
L_S  Inlet
15
16
8
2  3
Cooling
10  Heating
14
1
9  13  13
11 12
1 Compressor  16  Liquid receiver
2 Compressor discharge temperature sensor (high-  17  Heating return temperature sensor Tw_in
pressure) Tp  18  Heat tape (plate heat exchanger)
3 Compressor intake temperature sensor (low  19  Plate heat exchanger outlet refrigerant
pressure) Th  temperature sensor (in cooling mode) T2B
4 High-pressure switch  20  Plate heat exchanger (condenser in heating
5 High-pressure sensor  mode)
6 4-way valve  21  Heating flow temperature sensor Tw_out
7 Low pressure sensor  22  Automatic bleed valve
8 Outdoor air temperature sensor T4  23  Flow switch
9 Finned heat exchanger (evaporator in heating  24  Expansion vessel
mode)  25  Circulating pump
10 Fan  26  Safety pressure relief valve
11 Heat exchanger temperature sensor T3  Outlet  Outlet - Heating circuit water flow
12 Heat exchanger outlet refrigerant temperature  Inlet  Inlet - Heating circuit water return
sensor (in cooling mode) TL  Cooling  Cooling mode
13 Filter  Heating  Heating mode
14 Electronic expansion valve
15 Refrigerant temperature sensor at the plate heat
exchanger (in cooling mode) T2
--- Page 20 ---
4 Technical specifications
Fig.10  Assure HP55-8-1-PHMB - Assure HP55-11-1-PHMB - Assure HP55-11-3-PHMB - Assure HP55-13-1-PHMB - Assure
HP55-13-3-PHMB
24
22  23  26
19  20  21  F  25  Outlet
5
H_S  6
18
4
HP  17
7
L_S  Inlet
15
16
8
2  3
Cooling
10  Heating
14
1  13  13
9
11 12
1 Compressor  16  Liquid receiver
2 Compressor discharge temperature sensor (high-  17  Heating return temperature sensor Tw_in
pressure) Tp  18  Heat tape (plate heat exchanger)
3 Compressor intake temperature sensor (low  19  Plate heat exchanger outlet refrigerant
pressure) Th  temperature sensor (in cooling mode) T2B
4 High-pressure switch  20  Plate heat exchanger (condenser in heating
5 High-pressure sensor  mode)
6 4-way valve  21  Heating flow temperature sensor Tw_out
7 Low pressure sensor  22  Automatic bleed valve
8 Outdoor air temperature sensor T4  23  Flow switch
9 Finned heat exchanger (evaporator in heating  24  Expansion vessel
mode)  25  Circulating pump
10 Fan  26  Safety pressure relief valve
11 Heat exchanger temperature sensor T3  Outlet  Outlet - Heating circuit water flow
12 Heat exchanger outlet refrigerant temperature  Inlet  Inlet - Heating circuit water return
sensor (in cooling mode) TL  Cooling  Cooling mode
13 Filter  Heating  Heating mode
14 Electronic expansion valve
15 Refrigerant temperature sensor at the plate heat
exchanger (in cooling mode) T2
--- Page 21 ---
4 Technical specifications
4.5  Electrical diagram
Fig.11  Single-phase outdoor units
FAN H-PRO
COMM CN43
CN21  CN48  X Y E on/off
POWER  AC METER  H-SEN CN3  H-SEN
L-SEN CN46  L-SEN
RED  CN32  T3 CN34  T3
CN12
DC-FAN  T4 CN45  T4
BLACK
BLUE  CN28 PUMP  TL CN7  TL
CN25
H-PRO  MAIN CONTROL BOARD  Th CN5  Th
Tp CN50  Tp
CN13  EEV1
BLACK  INVERTER MODULE  AC OUT  EEV1 CN33
V
BOARD  N  T2
U  W  BROWN  CN1  CN47
RED BLUE  L-IN  L CN68  T2B
SV6/HEAT4  Tw_in
BLUE  CN2  CN56  DSP1  CN10
N-IN  Tw_out
CN71 ST1  T1 CN39
ST1  FM CN20
CN65 SV2  FS CN8
Pw CN37  FS
CN62 HEAT3  PUMP-BP
BROWN  BLUE  Y/G  CN17
Belt Heater  S5  S6  Tbt CN24
CN40 OUT1
T5/T1B CN13
XT1  L  N  CN41 HEAT1  K1
Belt Heater  CN66  K2
S1
T52 CN38  S2
CN60 HEAT2
Tw2 CN15  0-10V
POWER SUPPLY  CN31 COM
HT
220-240V~ 50Hz/60Hz  CN29 HEAT5  Tsolar CN18  CL
Belt Heater  S1  S2  S3  +12V T1 T2 GND CN36
CN42 HEAT6  SG
Belt Heater  CN63
EVU
CN32 AC OUT  CN61  M1
M2
CN11  CN22 N IBH1 IBH2 TBH  CN9
1  2  3  4  5  6  7  8  9  10  11  12  SW9  Indoor
AHS  SV1  SV2  SV3  P_c  P_o  P_s  P_d
1  2  3  4  5  6  7  8
AHS1 AHS2 1ON 1OFF 2ON 2OFF 3ON 3OFF P-c
9  10
P-o
11
P-s
12
P-d
1  2  3  4  5  Unit
13  14  15  16  17  18  19  20  21  22  23  24  A  B X/HA Y/HB E
C1
C1  C1  C1  C1  C1  C1
P-x  13 14 15 16 17 18 19 20 21 22 23 24P-x  6  7  8  9  10
TBH IBH2 IBH1  L  (IBH1)
(SV2)  (SV3)  (P_c)  (P_o)  (P_s)  (P_d)
ALARM  CN11 TBH IBH2 IBH1 L C1 C1 C1 C1 C1 C1 C1 ALARM/DEF  T1 T2 E1 H1 H2  CN30
(SV1)  DEF
Tab.17
Item  Description
AC METER  Do not use
AC OUT  Transformer power input
AHS  Supplementary heat source
ALARM DEF  Do not use
Belt heater  Heating tape
BLACK  Black
BLUE  Blue
BROWN  Brown
COMM  Communication with the main control PCB
COM  Room thermostat
COMP  Inverter compressor
DSP1  Digital display
EEV1/2  Electric expansion valve
E1  Ground
EVU  Do not use
FAN  DC fan motor
Ferrite core  Ferrite core
FM  Flow rate sensor
FS  Flow switch
GND  Ground
H1, H2  Do not use
HEAT1/HEAT2  Do not use
HEAT3  Crankcase heater
--- Page 22 ---
4 Technical specifications
Item  Description
HEAT5/HEAT6  Plate heat exchanger/Expansion vessel heat tape
H-Pro/L-PRO  High/low pressure switch
HT/CL  Heating mode/cooling mode (thermostat)
H-SEN/L-SEN  High/low pressure sensor
IBH1  Do not use
IBH2  Do not use
Indoor Unit  Indoor unit
INVERTER MODULE BOARD  Inverter module PCB
K1, K2  High-pressure switch
L  Live
N  Neutral
M1/M2  Remote switch
MAIN CONTROL BOARD  Main Control PCB
ON/OFF  On/Off
OUT1  Do not use
P_c  Do not use
P_d  Do not use
P_o  Do not use
P_s  Do not use
PED MD BOARD  PED PCB
POWER  Output
POWER SUPPLY  Power supply
PUMP  Pump
PUMP-BP  Variable speed pump communication
Pw  Water pressure sensor
RED  Red
S1, S2  High-pressure switch
SG  Do not use
ST1  Do not use
SV1  Do not use
SV2  Do not use
SV3  Do not use
SV6  Drainage outlet heating tape
T1  Water outlet temperature sensor downstream of the supplementary heater
T1B  Do not use
T2  Plate heat exchanger inlet refrigerant temperature sensor (for cooling mode)
T2B  Plate heat exchanger outlet refrigerant temperature sensor (for cooling mode)
T3  Heat exchanger temperature sensor
T4  Outdoor air temperature sensor
T5  Do not use
T52  Do not use
TBH  Control terminal board for cylinder backup device
Tbt  Do not use
TL  Heat exchanger outlet refrigerant temperature sensor (for cooling mode)
Th  Compressor suction temperature sensor
Tp  Compressor discharge temperature sensor
Tsolar  Tsolar
TW-in  Heating return temperature sensor
TW-out  Heating flow temperature sensor
Tw2  Do not use
XT1  Terminal
--- Page 23 ---
4 Technical specifications
Item  Description
XYE  Bus connection
Y/G  Yellow/green
Fig.12  Three-phase outdoor units
FAN  H-Pro
COMM CN43
CN21  CN48  X Y E on/off
POWER  AC METER  H-SEN CN3  H-SEN
L-SEN CN46  L-SEN
T3 CN34  T3
CN916  CN21  W BLUE
T4 CN45  T4
DC FAN  H-Pro  CN703
CN702
V BLACK
Y/G  CN28 PUMP  TL CN7  TL
CN28  U RED
CN11
CN701  Th CN5  Th
COMM
MAIN CONTROL BOARD
BLACK
V  Tp CN50  Tp
U
RED BLUE
W
EEV1 CN33  EEV1
INVERTER MODULE  N
BOARD  L CN68  T2
CN47
BLACK  L1  SV6/HEAT4  T2B
CN4  CN56
BROWN  L2  Tw_in
CN3  CN10
GRAY  L3
Y/G  DSP1  Tw_out
CN2
Y/G  PE  COMP
CN1  pre-charge  CN71 ST1  T1 CN39
CN6  ST1  FM CN20
CN65 SV2  FS CN8
Pw CN37  FS
CN62 HEAT3  PUMP-BP
Belt Heater  S5  S6  Tbt CN24  CN17
BROWN
BLACK
GRAY
BLUE
CN40 OUT1
Y/G  T5/T1B CN13
CN41 HEAT1  K1
L1  L2  L3  N  XT1  Belt Heater  CN66  K2
S1
T52 CN38  S2
CN60 HEAT2
Tw2 CN15  0-10V
CN31 COM
HT
CN29 HEAT5  Tsolar CN18  CL
Belt Heater  S1  S2  S3  +12V T1 T2 GND CN36
CN42 HEAT6  SG
Belt Heater  CN63
EVU
CN32 AC OUT  CN61  M1
M2
CN11
CN22 N IBH1 IBH2 TBH  CN9
1  2  3  4  5  6  7  8  9  10  11  12  SW9  Indoor
AHS  SV1  SV2  SV3  P_c  P_o  P_s  P_d
1  2  3  4  5  6  7  8  9  10  11  12  1 2  3  4  5  Unit
13  14  15  16  17  18  19  20  21  22  23  24  AHS1 AHS2 1ON 1OFF 2ON 2OFF 3ON 3OFF P-c  P-o  P-s  P-d  A  B X/HA Y/HB E
C1
C1  C1  C1  C1  C1  C1  P-x  13 14 15 16 17 18 19 20 21 22 23 24P-x 6 7 8 9 10
TBH IBH2 IBH1  L  (IBH1)
(SV2)  (SV3)  (P_c)  (P_o)  (P_s)  (P_d)
ALARM  CN11 TBH IBH2 IBH1 L C1 C1 C1 C1 C1 C1 C1 ALARM/DEF T1 T2 E1 H1 H2 CN30
(SV1)  DEF
Tab.18
Item  Description
AC METER  Do not use
AC OUT  Transformer power input
AHS  Supplementary heat source
ALARM DEF  Do not use
Belt heater  Heating tape
BLACK  Black
BLUE  Blue
BROWN  Brown
COMM  Communication with the main control PCB
COM  Room thermostat
COMP  Inverter compressor
DSP1  Digital display
EEV1/2  Electric expansion valve
E1  Ground
EVU  Do not use
FAN  DC fan motor
Ferrite core  Ferrite core
FM  Flow rate sensor
FS  Flow switch
GND  Ground
H1, H2  Do not use
HEAT1/HEAT2  Do not use
HEAT3  Crankcase heater
--- Page 24 ---
4 Technical specifications
Item  Description
HEAT5/HEAT6  Plate heat exchanger/Expansion vessel heat tape
H-Pro/L-PRO  High/low pressure switch
HT/CL  Heating mode/cooling mode (thermostat)
H-SEN/L-SEN  High/low pressure sensor
IBH1  Do not use
IBH2  Do not use
Indoor Unit  Indoor unit
INVERTER MODULE BOARD  Inverter module PCB
K1, K2  High-pressure switch
L  Live
N  Neutral
M1/M2  Remote switch
MAIN CONTROL BOARD  Main Control PCB
ON/OFF  On/Off
OUT1  Do not use
P_c  Do not use
P_d  Do not use
P_o  Do not use
P_s  Do not use
PED MD BOARD  PED PCB
POWER  Output
POWER SUPPLY  Power supply
PUMP  Pump
PUMP-BP  Variable speed pump communication
Pw  Water pressure sensor
RED  Red
S1, S2  High-pressure switch
SG  Do not use
ST1  Do not use
SV1  Do not use
SV2  Do not use
SV3  Do not use
SV6  Drainage outlet heating tape
T1  Water outlet temperature sensor downstream of the supplementary heater
T1B  Do not use
T2  Plate heat exchanger inlet refrigerant temperature sensor (for cooling mode)
T2B  Plate heat exchanger outlet refrigerant temperature sensor (for cooling mode)
T3  Heat exchanger temperature sensor
T4  Outdoor air temperature sensor
T5  Do not use
T52  Do not use
TBH  Control terminal board for cylinder backup device
Tbt  Do not use
TL  Heat exchanger outlet refrigerant temperature sensor (for cooling mode)
Th  Compressor suction temperature sensor
Tp  Compressor discharge temperature sensor
Tsolar  Tsolar
TW-in  Heating return temperature sensor
TW-out  Heating flow temperature sensor
Tw2  Do not use
XT1  Terminal
--- Page 25 ---
5 Description of the product
Item  Description
XYE  Bus connection
Y/G  Yellow/green
5  Description of the product
5.1  Data plate
Fig.13  The data plate must be accessible at all times. It identifies the product and
contains important information:
the product type
the date of manufacture (year - week)
the serial number
IP: the IP international protection marking
Pe h: the electrical output of the heat pump (in nominal state)
Pe bK: the electrical backup output
Pth / COP the heat output of the heat pump/the performance coefficient
(in nominal state)
Ta: the outdoor air temperature limit
Twh: the water temperature limit
MW-6070794-1  PSwh: the maximum water pressure
Ref: the refrigerant type
GWP / tCO2eq: the Global Warming Potential/quantity of refrigerant in
tonnes of CO2 equivalent
PS HP: the maximum pressure in normal operation
Pmax: the maximum pressure at which the safety pressure relief valve is
triggered
Never remove or cover the data plate and labels.
The data plate and labels must be legible throughout the entire lifetime of
the product.
5.2  Main components of the outdoor unit
Fig.14  1  Fan
2  Inverter control box
3  Main control box
4  Hydraulic module
5  Compressor
--- Page 26 ---
5 Description of the product
Fig.15  Assure HP55-4-1-PHMB - Assure  1  Automatic bleed valve
HP55-6-1-PHMB  2  Water inlet pipe
3  Expansion vessel
4  Refrigerant gas pipe
5  Temperature sensor
6  Refrigerant pipe
7  Flow switch
8  Circulating pump
9  Plate heat exchanger
10  Water outlet pipe
11  Safety pressure relief valve
6
Fig.16  Assure HP55-8-1-PHMB - Assure  1  Automatic bleed valve
HP55-11-1-PHMB - Assure  2  Water inlet pipe
HP55-11-3-PHMB - Assure  3  Expansion vessel
HP55-13-1-PHMB - Assure  4  Refrigerant gas pipe
HP55-13-3-PHMB  5  Temperature sensor
6  Refrigerant pipe
7  Flow switch
8  Circulating pump
9  Plate heat exchanger
10  Water outlet pipe
11  Safety pressure relief valve
6
--- Page 27 ---
5 Description of the product
5.3  Terminal blocks
Fig.17  Main Control PCB
Tab.19
Number  Terminal  Marking  Explanation  Terminal block volt­
block  age
1  CN60  HEAT2  Do not use
2  CN41  HEAT1  Do not use
--- Page 28 ---
5 Description of the product
Number  Terminal  Marking  Explanation  Terminal block volt­
block  age
3  CN40  OUT1  Do not use
4  CN62  HEAT3  Terminal block for crankcase heating tape  230 VAC
5  CN65  SV2  Do not use
6  CN71  ST1  Do not use  230 VAC
7  CN56  /  Terminal block for the heating tape of bottom plate  230 VAC
8  CN68  /  Terminal block for the heating tape of drainage outlet  230 VAC
9  CN28  PUMP  Terminal block for variable speed pump power input
10  /  /  Dip switch
11  DSP1  /  Digital display
12  CN21  POWER  Terminal block for power supply  230 VAC
13  CN48  AC METER Do not use
14  CN67  DEBUG1  Terminal block for printed circuit programming
15  CN44  EEV2  Terminal block for electrical expansion valve 2
16  CN33  EEV1  Do not use
17  CN49  CT1  Do not use
18  CN16  T9O/T9I  Do not use
19  CN46  L-SEN  Terminal block for low pressure sensor  0-5 VDC
20  CN3  H-SEN  Terminal block for high pressure sensor  0-5 VDC
21  CN35  RS485  Do not use
on/off  Do not use
22  CN43  COMM  Terminal block for communication with Inverter module  0-5 VDC
23  CN34  T3  Terminal block for T3 temperature sensor  0-3.3 V DC
24  CN45  T4  Terminal block for T4 temperature sensor  0-3.3 V DC
25  CN7  TL  Terminal block for TL temperature sensor  0-3.3 V DC
26  CN5  Th  Terminal block for Th temperature sensor  0-3.3 V DC
27  CN50  Tp  Terminal block for Tp temperature sensor  0-3.3 V DC
28  CN47  T2  Terminal block for refrigerant fluid side temperature (heating mode) 0-5 VDC
T2B  Terminal block for temperature sensors of refrigerant gas side tem­ 0-5 VDC
perature (cooling mode)
29  CN10  TW_in  Terminal block for plate heat exchanger water inlet temperature  0-5 VDC
sensors
TW_out  Terminal block for plate heat exchanger water outlet temperature  0-5 VDC
sensors
30  CN39  T1  Terminal block for final water outlet temperature sensors  0-5 VDC
31  CN8  FS  Terminal block for the flow switch  0-12 VDC
32  CN53  H-PRO  Terminal block for high pressure switch
33  CN54  L-PRO  Terminal block for low pressure switch
34  CN17  PUMP_BP  Terminal block for variable speed pump communication  0-5 VDC
35  CN66  K1,K2  Terminal block for high pressure switch  0-5 VDC
S1,S2  Terminal block for high pressure switch  0-5 VDC
36  CN31  0~10 V  Output port for 0-10 V  0-5 VDC
HT  Control terminal board for the room thermostat (heating mode)  0-5 VDC
COM  Power terminal block for room thermostat  0-5 VDC
CL  Control terminal board for the room thermostat (cooling mode)  0-5 VDC
37  CN63  SG  Do not use  0-12 VDC
EVU  Do not use  0-12 VDC
38  CN61  M1 M2  Terminal block for remote switch  0-12 VDC
39  CN9  /  Do not use
--- Page 29 ---
6 Installation
Number  Terminal  Marking  Explanation  Terminal block volt­
block  age
40  CN30  1.2  Terminal block for supplementary heat source
3.4  Terminal block for communication with the wired controller
5  Do not use
6.7  Terminal block for thermostat transfer board
8  Do not use
9.10  Terminal block for machine cascade
41  CN11  1, 2  Terminal block for supplementary heat source  230 VAC
3, 4, 17  Do not use  230 VAC
5, 6, 18  Do not use  230 VAC
7, 8, 19  Do not use  230 VAC
9, 20  Do not use  230 VAC
10, 21  Do not use  230 VAC
11, 22  Do not use  230 VAC
12, 23  Do not use  230 VAC
13, 16  Do not use  230 VAC
14, 16  Do not use  230 VAC
15, 17  Do not use  230 VAC
24  Do not use  230 VAC
42  CN22  IBH1  Do not use  230 VAC
IBH2  Do not use  230 VAC
TBH  Control terminal board for cylinder supplementary device  230 VAC
43  CN32  AC OUT  Terminal block for transformer power supply  230 VAC
44  CN42  HEAT6  Terminal block for internal anti-freeze electric heating tape  230 VAC
45  CN29  HEAT5  Terminal block for internal anti-freeze electric heating tape  230 VAC
46  CN25  DEBUG2  Terminal block for printed circuit programming
47  CN4  USB  Terminal block for USB programming
48  CN27  EEV3  Terminal block for electrical expansion valve
49  CN23  RH  Terminal block for humidity sensor
50  CN55  Light  Terminal block for indicator light
51  CN20  FM  Terminal block for water flow rate sensor  0-5 VDC
52  CN37  PW  Terminal block for water pressure sensor  0-5 VDC
53  CN24  Tbt  Do not use  0-5 VDC
54  CN13  T5/T1B  Do not use  0-5 VDC
55  CN26  TX  Do not use
56  CN38  T52  Do not use  0-5 VDC
57  CN15  Tw2  Do not use  0-5 VDC
58  CN18  Tsolar  Do not use  0-5 VDC
59  CN36  /  Terminal block for thermostat transfer board  0-12 VDC
6  Installation
6.1  Checking the condition of the packaging of the outdoor unit
The outdoor unit contains a highly flammable refrigerant. On receipt of the
outdoor unit, you need to make sure that it has not sustained any impact
which might have caused a refrigerant leak.
--- Page 30 ---
6 Installation
Danger
If the packaging shows any sign of damage or impact, do not
install the outdoor unit.
Take the following measures to prevent any risk associated with a
refrigerant leak:
1. Immediately move the outdoor unit in the open air, at least
6 metres away from any ignition source.
2. When moving and storing, keep any ignition sources away,
especially motorised or electrical appliances, phones and
cigarettes.
3. Contact the After-Sales service for the next step in the
procedure.
If there is a refrigerant leak, it will dissipate into the atmosphere
after a few hours. After four hours, use a sniffer to check that there
is no refrigerant at all.
6.2  Selecting the location of the outdoor unit
Install the outdoor unit outdoors exclusively. The location of the outdoor
unit must meet the safety, accessibility, comfort and performance
recommendations.
1. Take account of the following parameters when choosing a location:
The protective perimeter around the outdoor unit
The minimum distances from the walls
The climate conditions
Noise pollution
The maximum distance from the indoor unit
The legal requirements
See
Indoor unit manual
6.2.1  Protective perimeter
The outdoor unit contains R290 refrigerant. This highly flammable
refrigerant is denser than air and can accumulate at ground level in the
event of a leak.
A protective perimeter must be marked out around the outdoor unit to
ensure the safety of users in the event of a leak:
It must not be possible for refrigerant to accumulate so as to form a
toxic, suffocating, explosive or dangerous atmosphere.
The refrigerant must not penetrate into buildings via openings, or into
the waste water network.
It must not be possible for refrigerant to accumulate inside cavities.
The protective perimeter applies to all types of installation, including wall
mounting, and extends to the ground.
The protective perimeter must not include any openings to the inside of
the home: doors, windows, skylights, dome windows, air vents,
lightwells, cellar access or sewer hatches.
The protective perimeter must be free from permanent ignition sources
such as light bulbs, electrical switches, electrical sockets or any other
permanent ignition sources.
The protective perimeter must be free from temporary sources of ignition
such as lawnmowers, barbecues, cigarettes or any other temporary
ignition sources.
The protective perimeter must not adjoin any alleys, parking spaces,
neighbouring plots or public areas.
--- Page 31 ---
6 Installation
Fig.18  Ground-mounted, on a plot or on a
A  Protective perimeter
flat roof
Fig.19  Siting the outdoor unit in front of an external wall
500 mm  500 mm  300 mm
H  H
1000 mm
A 1000 mm  1000 mm  MW-6070712-3
A Protective perimeter
H Height of the protection perimeter: greater than or
equal to the height of the outdoor unit in relation to
the ground
Fig.20  Installing the outdoor unit in a corner
300 mm
500 mm  500 mm  1000 mm
500 mm
H  500 mm
1800 mm
A 1000 mm  500 mm
A Protective perimeter
H Height of the protection perimeter: greater than or
equal to the height of the outdoor unit in relation to
the ground
6.2.2  Minimum distances from the walls
The outdoor unit must be installed away from walls to ensure its proper
operation, accessibility during maintenance work, and the safety of
property and people.
Nothing must obstruct the free circulation of air around the outdoor unit
(intake and supply air).
--- Page 32 ---
6 Installation
Fig.21  With obstacle on the top
D  D
C  C
G
E  B
A
F
Fig.22  Without obstacle on the top
B
E
H  G
Outdoor unit  Unit  A(1)  B  C  D  E  F  G  H
Assure HP55-4-1-  mm  ≥ 100  ≥ 1000  ≥ 500  ≤ 500  ≥ 300  ≥ 500  ≥ 500  ≥ 500
PHMB
Assure HP55-6-1-  mm  ≥ 100  ≥ 1000  ≥ 500  ≤ 500  ≥ 300  ≥ 500  ≥ 500  ≥ 500
PHMB
Assure HP55-8-1-  mm  ≥ 100  ≥ 1000  ≥ 500  ≤ 500  ≥ 300  ≥ 500  ≥ 500  ≥ 500
PHMB
Assure HP55-11-1-  mm  ≥ 100  ≥ 1500  ≥ 500  ≤ 500  ≥ 300  ≥ 500  ≥ 500  ≥ 500
PHMB
Assure HP55-11-3-  mm  ≥ 100  ≥ 1500  ≥ 500  ≤ 500  ≥ 300  ≥ 500  ≥ 500  ≥ 500
PHMB
Assure HP55-13-1-  mm  ≥ 100  ≥ 1500  ≥ 500  ≤ 500  ≥ 300  ≥ 500  ≥ 500  ≥ 500
PHMB
Assure HP55-13-3-  mm  ≥ 100  ≥ 1500  ≥ 500  ≤ 500  ≥ 300  ≥ 500  ≥ 500  ≥ 500
PHMB
(1) In cold weather, take account of snow on the ground.
--- Page 33 ---
6 Installation
Fig.23  Clearance between outdoor units
V
Outdoor unit  Unit  V  W  Y
Assure HP55-4-1-PHMB  mm  ≥ 600  ≥ 2500  ≥ 500
Assure HP55-6-1-PHMB  mm  ≥ 600  ≥ 2500  ≥ 500
Assure HP55-8-1-PHMB  mm  ≥ 600  ≥ 2500  ≥ 500
Assure HP55-11-1-PHMB  mm  ≥ 600  ≥ 3000  ≥ 500
Assure HP55-11-3-PHMB  mm  ≥ 600  ≥ 3000  ≥ 500
Assure HP55-13-1-PHMB  mm  ≥ 600  ≥ 3000  ≥ 500
Assure HP55-13-3-PHMB  mm  ≥ 600  ≥ 3000  ≥ 500
For the clearance in other directions, refer to the preceding diagrams.
See also
Installation in cold climates, page 34
6.2.3  General rules
In addition to the "protection perimeter", the following conditions must be
met:
keep the outdoor unit away from flammable substances or flammable
gases.
do not expose the outdoor unit to a dirty, dusty or corrosive atmosphere.
protect the outdoor unit from climbing plants and leaves that could block
the air intake and outlet of the outdoor unit.
make sure that no insects, snakes or small animals get into the outdoor
unit.
regularly check that no wild animals have damaged the piping and
wiring of the outdoor unit.
Important
In case of any evidence of animal effects, ask professionals for
inspection and maintenance.
6.2.4  Exposure to strong winds
Fig.24  When installing the outdoor unit in a place exposed to strong wind, pay
special attention to the following:
A wind speed of 5 m/s or higher against the outdoor unit's air outlet could
cause a short circuit (suction of discharge air), which may have the
following consequences:
deterioration of the operational capacity.
frequent frosting in heating mode.
disruption of operation due to a pressure rise.
--- Page 34 ---
6 Installation
When a continuous strong wind blows against the front of the outdoor unit,
there is a risk of the fan running at excessive speed and breaking down.
The air inlet of the outdoor unit must be protected from prevailing winds. If
the installation's location prevents this:
position the outdoor unit so as to minimise wind resistance
or install a protective wall behind the outdoor unit. In this case, adhere to
the recommended wall distances.
6.2.5  Installation in coastal areas
In coastal areas, the outdoor unit must be protected from corrosion and
sea breezes.
Corrosion may shorten the service life and affect the performance of the
outdoor unit.
Do not expose the outdoor unit directly to sea breezes.
Do not install the outdoor unit in immediate proximity to the sea. A
minimum distance of 500 metres is required.
6.2.6  Exposure to strong solar radiation
Installing the outdoor unit in direct sunlight can affect the measurement of
the outdoor temperature and have an impact on the performance of the
outdoor unit. The colour of the outdoor unit can also fade over time. Shade
the outdoor unit.
6.2.7  Installation in cold climates
Fig.25  It is recommended that the outdoor unit be placed with the back side
oriented towards the wall.
Install a canopy over the outdoor unit to prevent snow from accumulating
on the outdoor unit in extreme weather conditions.
Install a high pedestal or wall mount the outdoor unit to keep a proper
clearance (at least 100 mm) between the outdoor unit and the mean snow
cover.
100 mm
Fig.26  If there is a risk of snow slip from the roof, a protective roof or cover must
be erected to protect the heat pump, pipes and wiring.
6.2.8  Managing acoustic comfort
The choice of the location for the outdoor unit must take acoustic comfort
into account.
Install the outdoor unit away from sleeping areas and terraces
Do not install the outdoor unit facing a glass wall
--- Page 35 ---
6 Installation
The outdoor unit is fitted with a non-rigid connection to prevent vibrations
being transmitted to the building, thereby maximising acoustic comfort.
The noise level varies depending on the distance to the outdoor unit and
on the mounting type selected.
Fig.27
1  2  3
1 Mounting on a plot or flat roof  3 Mounting in the corner of a building
2 Mounting in front of a building wall
Fig.28  When the outdoor unit is too close to neighbours, install a noise reduction
screen to reduce noise pollution. Install the noise reduction screen as
close as possible to the source of noise.
This type of equipment must be installed in compliance with:
....  The legislation
r  rrr
Br
Prevailing standards
The minimum positioning distances in relation to the outdoor unit
MW-C000373-3  Free air circulation in the outdoor unit exchanger
The accessibility of the outdoor unit for maintenance interventions
6.3  Preparing for installation
1. Choose the assembly type:
ground assembly on rubber mounts
ground assembly on crossbar and rubber mounts
wall assembly
flat roof assembly
Important
Installation on a sloping surface is not permitted. The outdoor unit
must be installed horizontally.
2. Prepare a gravel bed for the condensate drain.
Fig.29  3. Prepare the location for the outdoor unit and its bracket:
The outdoor unit must be placed on a flat, stable surface capable of
bearing its weight
The configuration of the water connections must enable the outdoor
MW-1002519-2  unit to be drained (drain valve at low point)
Important
Beware of the risk of freezing if the valve is installed outdoors.
4. Put the bracket in place.
See
Manual for the chosen support
--- Page 36 ---
6 Installation
6.3.1  Condensate drainage
Make sure that any condensate that accumulates is drained off in a frost-
free area.
To prevent the condensate from freezing, a self-regulating heating cable
(not supplied) can be threaded into the downpipe so that the condensate
can drain via the downpipe.
Open gullies within the protection perimeter do not pose any safety risk.
Fig.30  Condensate drain into a gravel bed  A  Concrete blocks
B  Foundation
C  Discharge pipe
D  Gravel bed
The downpipe must go into a sufficiently large gravel bed so that the
condensate can drain away freely.
See also
Preparing a ground installation, page 36
6.3.2  Preparing a ground installation
E  A Concrete blocks
H
B Foundations
A
C Downpipe for the condensate drain
B  D Water-permeable coarse rubble
E Rubber mounts (accessory)
G  C  F Crossbar (accessory)
G Minimum depth: 900 mm where the ground freezes; 600 mm
D
where the ground does not freeze
H Foundation height to suit local conditions. Such height must not be
smaller than 100 mm.
1. Dig a hole in the ground.
F  2. Insert a downpipe to divert the condensate.
H  E  3. Add a layer of water-permeable coarse rubble.
A  4. Create concrete blocks adapted to the chosen accessory for
installation on the ground
B
5. Add a bed of gravel between the foundations strips to divert
condensate.
G  C
D
--- Page 37 ---
6 Installation
6.4  Unpack the outdoor unit
Fig.31
5
1. Cut the strapping.
2. Remove the cardboard.
3. Remove the protective cover.
4. Check that the accessory box is present.
5. Cut the strapping.
6.5  Transport
6.5.1  Transporting the outdoor unit using a crane
The outdoor unit is a large-size appliance. Transporting it with a crane
requires a few precautions.
--- Page 38 ---
6 Installation
Fig.32  A Paper edge protector A
B Paper edge protector B
Caution
The barycentre of the product and the hook should be kept
vertically aligned to prevent excessive tilting.
1. Use lifting tools with transport straps or a suitable pallet truck.
Location of the outdoor unit  Action
Outdoor unit on the pallet  Pass the transport straps through
the holes on the left and right
sides of the pallet correctly.
No pallet under the outdoor unit  The transport straps can be fitted
into the recesses in the base
frame that are made specifically
for this purpose. Use a paper
edge protector under the outdoor
unit when lifting the outdoor unit.
2. Check that the equipment has not been damaged during
transportation or storage.
3. In the event of damage, take the necessary precautions to avoid the
risk of refrigerant leakage and contact the after-sales service.
See also
Dimensions and connections, page 16
6.5.2  Transporting the outdoor unit without a crane
The outdoor unit is a heavy and large-size appliance. Transporting it by
hand requires a few precautions.
Four people are required to lift and move the outdoor unit.
1. Take into consideration the weight distribution during transportation.
The outdoor unit is significantly heavier on the compressor side than
on the fan motor side.
Important
During transport, do not tilt the outdoor unit significantly to prevent
it from tipping over.
2. Protect the casing sections from damage. Use a paper edge protector
under the outdoor unit when lifting the outdoor unit.
3. Check that the equipment has not been damaged during
transportation or storage.
4. In the event of damage, take the necessary precautions to avoid the
risk of refrigerant leakage and contact the after-sales service.
See also
Dimensions and connections, page 16
--- Page 39 ---
6 Installation
6.6  Putting the outdoor unit in place
6.6.1  Removing the exchanger protection
Fig.33
1. Remove the exchanger protection.
Important
Take care not to damage the outdoor temperature sensor.
2. Check the condition of the exchanger.
1
6.6.2  Remove the compressor support from the outdoor units Assure HP55-8-1-PHMB - Assure HP55-11-1-
PHMB - Assure HP55-13-1-PHMB - Assure HP55-11-3-PHMB - Assure HP55-13-3-PHMB
The compressor support holds the refrigeration module in place during
transport. It must be removed once the outdoor unit has been installed.
Fig.34
2
1  3  4
5
x4
1. Remove the front panel.
2. Remove the inner panel.
3. Remove the grille.
4. Remove the compressor compartment cover.
5. Remove the compressor support.
Important
Failure to remove the compressor support will invalidate the
warranty.
--- Page 40 ---
6 Installation
6.6.3  Connecting the condensate drain hose
Fig.35  1. Insert the condensate drain union (supplied in the accessories box)
into the special hole.
2. Turn the union to secure it in its housing.
2  3. Connect the condensate drain hose to the union.
4. Connect the condensate drain hose outlet to the waste water
discharge.
5. Make sure the condensate is drained properly. If not, use the
1
additional drain hole.
See also
3  Dimensions and connections, page 16
6.7  Hydraulic connections
6.7.1  Minimum volume of water
The volume of water in the installation must be sufficient to avoid short
cycle operation and to enable optimal defrosting.
Important
The minimum volume of water in circulation must be available at
any time, even if there is no heating demand or when all the
valves are closed.
If the volume of water in circulation is not sufficient, it is necessary to
install a buffer tank with the additional volume.
Tab.20  35 °C application - underfloor heating
Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Minimum volume of wa­  27  29  77  81  81  91  91
ter in circulation (l)
Minimum volume of gly­ 31  34  89  94  94  105  105
col water in circulation (l)
Tab.21  45°C application - low temperature radiators or convection fans
Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Minimum volume of wa­  23  23  49  54  54  59  59
ter in circulation (l)
Minimum volume of gly­ 27  27  57  63  63  68  68
col water in circulation (l)
Tab.22  55 °C application - low temperature radiators
Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Minimum volume of wa­  26  26  42  49  49  51  51
ter in circulation (l)
Minimum volume of gly­ 30  30  49  57  57  59  59
col water in circulation (l)
--- Page 41 ---
6 Installation
Tab.23  65 °C application - high temperature radiators
Assure  Assure  Assure  Assure  Assure  Assure  Assure
HP55-4-1-  HP55-6-1-  HP55-8-1-  HP55-11-1-  HP55-11-3-  HP55-13-1-  HP55-13-3-
PHMB  PHMB  PHMB  PHMB  PHMB  PHMB  PHMB
Minimum volume of wa­  26  26  38  49  49  49  49
ter in circulation (l)
Minimum volume of gly­ 30  30  44  57  57  57  57
col water in circulation (l)
6.7.2  Heating water specifications
Before filling the heating installation, the water quality must be checked:
The water must be clear and free of sedimentary substances and must
not contain foreign matter such as welding beads, rust particles, scale,
mud or other sedimentary substances
The quality of the filling water must comply with the specifications given
in the table below:
Tab.24  Heating water specifications
Specification  Value
Potential of hydrogen (pH)  7.5 - 9
Conductivity at 20 °C  < 500 μS/cm
Chlorides  Below 50 mg/l
Other components  Below 1 mg/l
Total hardness  20 °fH
11.2 °dH
2.0 mmol/l
Caution
Do not add any chemical products to the heating water without
first consulting a water treatment specialist. For example:
antifreeze, water softeners, products to increase or reduce the pH
value, chemical additives and/or inhibitors. These may cause
faults in the heat pump and damage the heat exchanger.
Warranty claims are excluded if the specified values are not adhered to or
if any documentation is missing.
See also
Filling the heating circuit with mains water, page 52
Filling the heating circuit with glycol water, page 53
6.7.3  Volume of the expansion vessel
The volume of the expansion vessel must be compatible with the volume
of water in the circuit taking into consideration the maximum temperature
in heating mode.
If the volume of the expansion vessel integrated in the outdoor unit
(5 effective litres) is not sufficient, add an external vessel to the heating
circuit.
--- Page 42 ---
6 Installation
Tab.25  Underfloor heating type installation: maximum temperature of 40 °C
Static height  Expansion vessel  Volume of the installation (l)
inflation pressure  75  100  125  150  175  200  225  250
Expansion vessel volume (l)
5m  0.1 MPa (1 bar)  7  7  8  8  8  9  9  9
10 m  0.13 MPa (1.3 bar)  7  8  8  9  9  10  10  11
15 m  0.18 MPa (1.8 bar)  10  10  11  11  12  13  13  14
Tab.26  Radiator type installation: maximum temperature of 70 °C
Static height  Expansion vessel  Volume of the installation (l)
inflation pressure  75  100  125  150  175  200  225  250
Expansion vessel volume (l)
5m  0.1 MPa (1 bar)  8  9  10  11  12  13  14  15
10 m  0.13 MPa (1.3 bar)  9  11  12  13  14  15  16  17
15 m  0.18 MPa (1.8 bar)  12  13  15  16  18  19  21  22
6.7.4  Flow rate range
Check that the minimum flow rate in the installation is guaranteed in all
conditions. This rate is required during defrosting/supplementary heater
operation.
When one or more heating circuits are controlled by remotely controlled
valves, the minimum water flow needs to be guaranteed, even if all valves
are closed. If the minimum flow rate cannot be satisfied, E0 and E8
(outdoor unit shutdown) will be triggered.
Outdoor unit  Flow rate range
Assure HP55-4-1-PHMB  6.67 to 15 l/min
Assure HP55-6-1-PHMB  6.67 to 20.83 l/min
Assure HP55-8-1-PHMB  6.67 to 35 l/min
Assure HP55-11-1-PHMB  11.67 to 41.67 l/min
Assure HP55-11-3-PHMB
Assure HP55-13-1-PHMB  11.67 to 50 l/min
Assure HP55-13-3-PHMB
6.7.5  Connecting the outdoor unit to the hydraulic circuit
Fig.36  Assure HP55-4-1-PHMB - Assure
HP55-6-1-PHMB  Important
Incorrect orientation of the water outlet and inlet can cause the
outdoor unit to malfunction.
4  Do not apply excessive force when connecting the pipes
provided on the site, and make sure the pipes are aligned
properly. Water pipe deformation can cause the unit to
1  malfunction.
The unit is only to be used in a closed water system.
1. Connect the Y filter of the accessory bag to the inlet of the outdoor
unit. Use an extension if necessary.
2  Important
3  It is mandatory to install a sediment filter. The Y filter is a
minimum requirement. Sediment may damage the plate heat
exchanger, and there could a risk of refrigerant leakage without
the strainer.
Pay attention to the correct flow direction of the Y filter.
--- Page 43 ---
6 Installation
Fig.37  Assure HP55-8-1-PHMB - Assure  2. Connect the flow pipe to the heating circuit.
HP55-11-1-PHMB - Assure
HP55-11-3-PHMB - Assure  Important
HP55-13-1-PHMB - Assure  For plastic pipes, make sure they are fully oxygen-tight
HP55-13-3-PHMB  according to DIN 4726.
The diffusion of oxygen into the piping can lead to excessive
corrosion.
4
3. Connect the heating circuit return pipe.
4. Connect a hose from the safety pressure relief valve outlet to the
1  condensate drain hole.
Important
In a glycol system, the safety pressure relief valve must be
evacuated in accordance with current local standards.
2
3
6.7.6  Water pipe insulation
The complete water circuit including all pipes, must be insulated to prevent
condensation during cooling operation, heating and cooling capacity
reduction, and freezing of the outside water pipes in winter.
Fig.38
Important
The insulation material should be provided with a fire resistance
rating of B1 or above and comply with all applicable regulations.
The thermal conductivity of the sealing material should be below
0.039 W/mK.
Tab.27
Length of the pipework between the Recommended minimum insulation
outdoor unit and the indoor unit  thickness
< 20 m  19 mm
20~30 m  32 mm
30~40 m  40 mm
40~50 m  50 mm
If the outdoor ambient temperature is higher than 30 °C and the humidity
is higher than RH 80%, the thickness of the sealing materials should be at
least 20 mm to avoid condensation on the surface of the gasket.
6.7.7  Drying the flow switch
Fig.39  Water may enter the flow switch during transport and cannot be drained
MW-6070736-2  out, and may freeze when the temperature is low enough. The flow switch
must be removed and dried before the outdoor unit is commissioned.
1. Rotate the flow switch anti-clockwise to remove it.
2. Dry the flow switch completely
3. Refit the flow switch, observing the direction of installation, with the
arrow pointing towards the circulating pump.
--- Page 44 ---
6 Installation
6.8  Freeze protection
6.8.1  Software protection
The software is equipped with specific functions to protect the entire
system from freezing by using the heat pump and the supplementary
heater (if available).
This control protects the water side heat exchanger from ice formation.
The water-side heat exchanger electric heater is controlled according to
the outdoor air temperature, the water-side heat exchanger water inlet
temperature and the water-side heat exchanger water outlet
temperature.
In cooling mode, if the water inlet, water outlet or auxiliary heat source
water outlet temperature is below 4 °C, the frost protection is activated.
In heating/DHW mode, if the outdoor air temperature is below 3 °C and
water inlet, water outlet or auxiliary heat source water outlet temperature
is below 4 °C, the frost protection is activated.
Caution
Software frost protection only works when the outdoor unit is
powered.
See also
Prolonged power outage in winter, page 54
6.8.2  Frost protection
In normal operation, the outdoor unit, the indoor unit and the heating
circuit are protected against frost.
Fig.40  To protect the outdoor unit during prolonged power outages and outdoor
temperatures below zero, one of the following solutions must be installed:
Solution using glycol
Addition of glycol to the heating circuit.
Refer to local regulations and system component manuals to check
compatibility.
Manual draining solution
Fig.41  Installation of two isolation valves and two drain valves used to drain the
outdoor part of the heating circuit.
a Isolation valve
b Drain valve
a
Caution
b  ba  In the event of a prolonged power cut, manual draining is
necessary.
Automatic draining solution
Installation of two anti-freeze valves on the flow and return of the heating
circuit as close as possible to the outdoor unit, outside the building.
The automatic draining solution is not compatible with the use of glycol.
--- Page 45 ---
6 Installation
Fig.42  The anti-freeze valves must have the following specifications:
Opening of the valves at a heating water temperature of +3 °C or less
Sufficient flow rate to drain the installation before it can freeze
a
b
See
Installation manual for anti-freeze valves
a  b  The automatic draining solution must be equipped with two isolation
valves and two drain valves used to drain the outdoor part of the heating
c c  circuit.
a Anti-freeze valve
b Isolation valve
c Drain valve
Caution
In the event of a prolonged power cut (10 hours or more) with
negative outdoor temperatures, manual draining is required.
6.9  Electrical connections
Danger
Risk of electrocution.
6.9.1  Checking and preparing the electrical installation
Caution
Only a qualified professional is authorised to work on the electrical
part of the installation.
Fig.43
1. Always switch off the electrical installation before making any
connections.
2. Respect the requirements of the prevailing standards when selecting
the cables and circuit breakers.
Tab.28  Prevailing standards
Country  Standard
Great Britain  BS 7671
3. Check the electrical specifications of the mains power supply available
and compare these to the specifications indicated on the data plates
on the appliances. The electrical specifications must be compatible.
4. Read and follow the instructions in the manual and the electrical
diagrams supplied with the appliance.
5. Select the cables used for the various connections. The cable cross-
sections must:
Meet the needs of the installation
Conform to the prevailing standards to withstand the maximum
amperage of the outdoor unit
Take into account the distance between the appliances and the
electrical panel
Take into account the earthing system
6. Supply the appliance via a circuit with an omnipolar switch with an
opening gap distance of more than 3 mm. The installation must be
equipped with a main switch.
7. Check the compliance of the protective earthing before making any
electrical connections.
--- Page 46 ---
6 Installation
6.9.2  Precautions for electrical wiring
Important
After power off, wait for 5 minutes to power on again.
It is prohibited to install emergency stop switches, remote switches for
stopping the unit, including circuit breakers, contactors and relays, within
2 metres of the unit.
The wiring must be carried out in accordance with the wiring diagram
supplied with the unit and the instructions given below.
Use a dedicated power source. Do not connect the unit to a power
supply cable, surge protector, or telephone earth.
Connect the outdoor unit power supply directly to the electrical panel
without an additional filter.
It is prohibited to install a phase rectifier.
Install a residual-current device (30 mA) to prevent any electric shock.
Install a residual-current device (RCD) compatible with high harmonics
for the power supply to the "inverter" outdoor unit to avoid unnecessary
tripping.
Install the necessary circuit breakers.
Power supply cable and communication cable
Use only copper wires.
Use shielded communication cables, including the XYE line between the
outdoor unit and the indoor unit.
Use a H07RN-F double-insulated multi-strand cable for the power
supply.
Route power supply cables and communication cables separately.
Power supply cables and communication cables should not be placed in
the same sheath to avoid electromagnetic interference.
Never compress wire harnesses and ensure that wiring is kept away
from pipes and sharp edges.
Secure electrical cables with cable clamps.
Make sure no external pressure is applied to the terminal connections.
6.9.3  Accessing the main control box
To access the PCBs and electrical terminal blocks, follow the instructions
below.
Fig.44
9x  6x
ʓ  ʔ
ʒ
Warning
Risk of electric shock.
Risk of scalding.
1. Remove the front panel.
2. Remove the inner panel.
--- Page 47 ---
6 Installation
3. Remove the main control box cover.
6.9.4  Connecting the electrical circuits
Fig.45
DIFF  DISJ  230 V~  400 V 3N~
L1 L2 L3
A B X/HA Y/HB E  Indoor
T1 T2 E1 H1 H2
Unit
Typ A  Typ B
/ Typ B  / Typ C
230V~
230V~ (±10%)  4/6 kW : 3 x 2.5 mm²  1.2 - 1.5 N·m  BUS
4/6 kW :  30 mA  16A  8 kW :  3 x 4 mm²  3 x 0.75 mm²
shielded
8 kW :  30 mA  20A  11/13 kW : 3 x 6 mm²
11/13 kW : 30 mA  32A
400V 3N~ (±10%)  400V 3N~
11/13 kW : 30 mA  16A
11/13 kW : 5 x 2.5 mm²
The cable cross-sections are given as a guide only.
Important
Use a shielded cable for the BUS connection between the indoor unit and the outdoor unit to avoid communication
problems.
BUS Outdoor unit connection bus  shielded Shielded cable for connection with the outdoor
DIFF Residual-current device (RCD)  unit
DISJ Protection circuit breaker  Indoor Unit Indoor unit
6.9.5  Cable routing
The 0-40 V cables must be separated from the 230/400 V cables.
--- Page 48 ---
6 Installation
Fig.46
4 / 6 kW
230-400V  0-40V
230-400V
0-40V
8 / 11 / 13 kW
230-400V
0-40V
--- Page 49 ---
6 Installation
6.9.6  Connecting the outdoor unit to the power supply
Fig.47
230V~  400V 3N~
L1
L  L2
N  L3
N
L1 L2 L3 L Live  Ground
N Neutral
It is possible to use a 230 V phase on a three-phase electric panel, in
compliance with the applicable standards.
The electrical connection of the outdoor unit must be made via a dedicated
circuit. Before connecting, check that the cross-section of the cable and
the circuit breaker on the electric panel are suitable.
1. Connect the wires to the appropriate terminals.
2. To avoid electric shock, make sure that the length of the conductors
between the cable clamp and the terminal blocks is such that the
active conductors are put under tension before the earth conductor.
Danger
The earth wire must be 10 mm longer than the N and L wires.
3. Feed the cable into the traction arrester device.
--- Page 50 ---
6 Installation
4. Adapt the cable length.
5. Tighten the screws correctly.
6.9.7  Connect the outdoor unit to the indoor unit
Fig.48  Indoor Unit Indoor unit
1. Connect the wires to the appropriate terminals.
X/HA Y/HB E  2. Feed the cable into the cable clamp.
T1 T2 E1 H1 H2  3. Adapt the cable length.
4. Tighten the screws correctly.
Indoor
Unit
6.9.8  Connection for Other Optional Components
Wiring of drainage pipe heating tape
Fig.49  A Heating tape
For the drainage pipe heating tape, the power shall not exceed 40 W.
CN68
Working current is up to 200 mA, supply voltage 230 VAC.
Use tie wraps
Important
To prevent refrigerant or insects from entering into the electrical
control box and causing fire,after wiring, the sleeve should be
fastened with a tie wrap (accessory)
A
--- Page 51 ---
6 Installation
6.10  Refit the outdoor unit panels
Fig.50
6x  9x
4,1 N·m  4,1 N·m
ʒ
ʓ
ʔ
1. Install the main control box cover.
2. Install the inner panel.
3. Install the front panel.
6.11  Sealing building entry points
Fig.51  The outdoor unit contains a highly flammable refrigerant. In the event of a
leak in the refrigerant circuit, this refrigerant must not penetrate inside
buildings.
Once the water and electrical connections have been made:
1. Check that the sensor cables (0-40 V) are separate from the
230/400 V cables.
2. Seal the wall openings.
Important
MW-1002487-4  Do not place the connection tubes in direct contact with the wall to
ensure no vibrations from the heat pump are transmitted to the
wall.
3. Seal the ends of the ducts in which the electrical cables and heating
pipes run.
6.12  Flushing and filling the heating installation with mains water
6.12.1  Flushing new installations and installations less than 6 months old
Before filling the heating installation, it is essential to remove any debris
(copper, caulking, soldering flux) from the installation.
1. Clean the installation using a suitable cleaning agent.
2. Flush the system with at least 3 times the volume of water contained
in the entire system (until the water runs clear and shows no
impurities).
3. Check and clean the filters if necessary.
6.12.2  Flushing an existing installation
Before filling the heating installation, it is essential to remove any sludge
deposits which have accumulated in the heating circuit over the years.
1. Remove any sludge from the installation.
--- Page 52 ---
6 Installation
2. Flush the installation with at least 3 times the volume of water
contained in the central heating system (until the water runs clear and
shows no impurities).
3. Check and clean the filters if necessary.
6.12.3  Filling the heating circuit with mains water
After flushing the installation and checking that the filters are clean, the
heating circuit must be filled with mains water.
1. Fill the system until it reaches a pressure of between 0.15 and 0.2
MPa (1.5 and 2 bar).
Read the pressure using a pressure gauge.
2. Check the leak-tightness of the heating circuit.
3. Vent the installation fully for optimal operation.
See also
Heating water specifications, page 41
6.13  Flushing and filling a heating installation with glycol water
6.13.1  Flushing an installation before filling with glycol water
Before filling the heating installation, you must remove any debris from the
installation (copper, caulking, soldering flux) and any sludge deposits
which have accumulated in the heating circuit (for existing installations).
1. Clean the circuit in accordance with the glycol manufacturer's
directives.
2. Check and clean the filters if necessary.
6.13.2  Filling the heating circuit with glycol water
Important
Refer to the local regulations and the system components
manuals to check the compatibility.
Glycol lowers the freezing point of water.
Caution
Ethylene glycol and propylene glycol are toxic.
Caution
Glycol can corrode the system. When uninhibited glycol comes
into contact with oxygen, it becomes acidic. This corrosion
process is accelerated by copper and high temperature. The
acidic uninhibited glycol attacks metal surfaces, forming galvanic
corrosion cells that can cause severe damage to the system.
Therefore, it is important to follow these steps:
Let a qualified specialist treat the water correctly;
Select a glycol with corrosion inhibitors to counteract acids
formed by the oxidation of glycols;
Do not use any automotive glycol because its corrosion
inhibitors have a limited lifetime and contain silicates which can
contaminate or block the system;
Do not use galvanized pipes in glycol systems as these may
lead to the precipitation of certain components in the glycol's
corrosion inhibitor.
Important
Glycol absorbs moisture from the environment, so it is important to
avoid using glycol exposed to air. If glycol is left uncovered, the
water content increases, lowering the glycol concentration and
potentially causing hydraulic components to freeze. To prevent
this, take precautions and minimize glycol’s exposure to air.
--- Page 53 ---
6 Installation
The types of glycol that can be used depend on whether the system
contains a domestic hot water tank:
Tab.29
If  Then
The system contains a domestic hot water cylinder  Only use propylene glycol(1)
The system does NOT contain a domestic hot water cylinder  Either propylene glycol(1) or ethylene glycol can be used
(1) Propylene glycol, including the necessary inhibitors, falls in Category III according to EN 1717.
The required concentration of glycol depends on the lowest expected
outdoor temperature, and on whether you want to protect the system from
bursting or from freezing. To prevent the system from freezing, more glycol
is required.
Add glycol according to the table below.
Lowest expected outdoor temperature  Prevention from bursting(1)  Prevention from freezing(2)
–5 °C  10%  15%
–10 °C  15%  25%
–15 °C  20%  35%
–20 °C  25%  N/A(3)
–25 °C  30%  N/A(3)
–30 °C  35%  N/A(3)
(1) Glycol can prevent the piping from bursting, but cannot prevent the liquid inside the piping from freezing.
(2) Glycol can prevent the liquid inside the piping from freezing.
(3) Additional action is needed to prevent freezing.
Important
The required concentration might vary depending on the type of
glycol used. ALWAYS compare the requirements from the table
above with the specifications provided by the glycol
manufacturer. If necessary, meet the requirements set by the
glycol manufacturer.
The added concentration of glycol should NEVER exceed 35%.
If the liquid in the system is frozen, the pump will NOT be able
to start. Please note that solely preventing the system from
bursting may not prevent the liquid inside from freezing.
If water remains stagnant within the system, it is highly likely to
freeze and result in system damage.
Adding glycol to the water circuit reduces the maximum allowed water
volume of the system
6.13.3  Filling the heating circuit with glycol water
1. Fill the installation using a glycol water mix filling station until a
pressure of 0.15 to 0.2 MPa (1.5 to 2 bar) is achieved.
2. Check the leak-tightness of all the fittings and gaskets on the heating
circuit.
3. Fully vent the outdoor unit and the installation before commissioning.
4. Fully vent the outdoor unit and the installation once more after several
hours running at a high operating temperature.
This removes any small air bubbles formed in the glycol water at
high operating temperatures.
5. Once more visually check the leak-tightness of all fittings and gaskets
on the heating circuit after several hours running at a high operating
pressure.
Monopropylene glycol leaks more easily than water. The pressure
tests do not guarantee that there will be no leaks when the installation
is filled with glycol water under pressure.
--- Page 54 ---
7 User instructions
See also
Heating water specifications, page 41
6.14  Checking water circuit
The following conditions must be met:
The maximum water pressure is lower than or equal to 3 bar.
The maximum water temperature is lower than or equal to 75 °C
depending on the safety device setting.
Drain valves must be installed at the lowest points of the system to
ensure complete drainage of the circuit during maintenance.
Bleed valves must be installed at the highest points of the system. The
bleed valves must be located at points that are easily accessible for
service.
7  User instructions
7.1  Precautions regarding the location of the outdoor unit
The outdoor unit contains a highly flammable refrigerant.
Observe the precautions relating to the location of the outdoor unit
throughout the service life of the product:
Maintain free air circulation around the outdoor unit (intake and outlet).
Do not install anything in the protective perimeter around the outdoor
unit (for example, a window, garden shed, parking spot or outdoor
lighting).
Keep any potential source of sparks (for example, lit cigarette, mower,
barbecue or parked car) away from the protective perimeter.
Do not store or handle corrosive products in the vicinity of the outdoor
unit (for example, aerosols, chlorinated cleaning products, paints or road
salt).
7.2  Prolonged power outage in winter
A prolonged power outage at outdoor temperatures below zero may
damage your heating installation. Action may be required, depending on
the configuration of your installation:
Installation with glycol: no action required.
Installation equipped with anti-freeze valves: drain the outdoor part of
the heating installation during a prolonged power outage (10 hours or
more) at outdoor temperatures below zero.
Installation without glycol and not equipped with anti-freeze valves: drain
the outdoor part of the heating installation.
Important
If in doubt about the draining and filling procedure, contact your
installer.
7.3  Clearing the snow accumulated around the outdoor unit
Snow accumulated around the outdoor unit may impair its performance.
1. Regularly check that there is no snow accumulated around the
outdoor unit.
2. Clear snow, if necessary.
7.4  Cleaning the outdoor unit
Clogging by dust and other particles impairs the heat pump's performance.
Check the cleanliness of the heat pump twice a year.
--- Page 55 ---
8 Maintenance
Caution
Do not clean the heat pump with a high-pressure cleaner.
Fig.52  1. Remove any leaves caught in the fins at the back of the appliance.
Danger
Risk of injury on the sharp edges of the fins at the back on the
appliance.
Caution
Do not distort or damage the fins.
2. Remove the dust and debris with a soft-bristled brush or hand broom.
3. Clean the outside of the outdoor unit using a damp cloth and a mild
detergent.
8  Maintenance
Regular checks and inspections at certain intervals are required to
guarantee the optimal performance of the unit.
8.1  Safety precautions for maintenance
Danger
Risk of electric shock.
Warning
Please note that some parts of the electric component box are
hot.
To avoid the risk of electric shock or fire, do not spray the
outdoor unit with water.
Do not leave the outdoor unit unattended when the casing is
removed.
Important
Before performing any maintenance or service work, touch a
metal part of the unit to eliminate static electricity and to protect
the PCB.
Without regular maintenance, the performance of the unit may
degrade and the risk of parts damage may increase gradually.
8.2  Maintenance checklist
Tab.30  By installer
Items  Recommended frequency
General
Check that all the parts are in the proper position.  Once a year
Clean the evaporator  Once a year
Hydraulic circuit
Check that the water pressure is sufficient.  Once a year
Clean the strainer in the water system.  Once a year
Check that the flow switch is working properly.  Once a year
Check that the safety pressure relief valve (in the water system) is working properly. Once a year
Check that the safety pressure relief valve (in the DHW water loop) is working prop­ Once a year
erly.
--- Page 56 ---
8 Maintenance
Items  Recommended frequency
Check that there is no water leakage in the water loop.  Once a year
Check that the frost protection solution is present and in good condition.  Once a year
Check that the backup heater of the domestic hot water cylinder is clean and in  Once a year
good condition.
Wiring and electrical parts
Check that the temperature sensor is working properly.  Once a year
Check that the wiring and cables of the installation are in good condition.  Once a year
Check that the contactors and circuit breakers are working properly.  Once a year
Refrigerant loop
Check that there is no refrigerant leakage in the refrigerant loop.  Once a year
8.3  Service information
8.3.1  Label for refrigerant presence
Ensure that proper labels are pasted on the equipment stating the
equipment contains flammable refrigerant.
8.3.2  Leak detection methods
The following leak detection methods are deemed acceptable for systems
containing flammable refrigerants. An electronic leak detector should be
used to detect flammable refrigerants, but its sensitivity may not be
adequate, or the detector may need recalibration. (Detection equipment
should be calibrated in a refrigerant-free area.) Ensure that the detector is
not a potential source of ignition and is suitable for the refrigerant. Leak
detection equipment should be set at a percentage of the LFL of the
refrigerant and should be calibrated to be suitable for the refrigerant
employed. The appropriate percentage of gas (25 % maximum) is
confirmed. Leak detection fluids are suitable for use with most refrigerants
but detergents containing chlorine should not be used as the chlorine may
react with the refrigerant and corrode the copper pipes. If a leak is
suspected, all naked flames should be removed or extinguished. If a
leakage of refrigerant is found and brazing is required, all of the refrigerant
should be recovered from the system, or isolated (by means of shut off
valves) in a part of the system that is remote from the leak. Oxygen free
nitrogen (OFN) should then be purged through the system both before and
during the brazing process.
8.3.3  Check of refrigeration equipment
Where electrical components are to be changed, they should be fit for the
intended purpose and comply with the correct specifications. Always follow
the manufacturer’s maintenance and service guidelines. In case of any
doubt, consult the manufacturer’s technical department for assistance.
Check installations using flammable refrigerants.
The amount of refrigerant to be charged depends on the size of the
room where the refrigerant-containing parts are installed.
The ventilation machinery and outlets should work adequately and be
not obstructed.
If an indirect refrigerating circuit is used, the secondary circuits should
be checked for any refrigerant; Markings on the equipment should be
visible and legible.
Illegible markings and signs should be corrected.
Refrigeration pipes or components should be installed in apositions
where they are unlikely to be exposed to any substance that may
corrode refrigerant-containing components, unless the components are
constructed of materials that are inherently resistant to corrosion or are
suitably protected from corrosion.
--- Page 57 ---
9 Error codes
8.3.4  Check of electrical devices
Repair and maintenance of electrical components should include initial
safety checks and component inspection procedures. If a fault exists and
could compromise safety, no electrical supply should be connected to the
circuit until it is satisfactorily dealt with. If the fault cannot be corrected
immediately but it is necessary to continue operation, an adequate
temporary solution should be adopted. This should be reported to the
owner of the equipment so all parties are advised.
Initial safety checks should include the following:
The capacitors should be discharged in a safe manner to avoid sparking
risks.
No live electrical components and wiring can be exposed during the
system charging, recovery or purging.
Earth bonding should be continuous.
8.3.5  Pre-pressure adjustment of the expansion vessel
The outdoor unit is equipped with an expansion vessel (5 effective litres)
that has a default pre-pressure of 0.15 MPa (1.5 bar).
Check the pre-pressure every two years.
Fig.53  A Top cover
B Schrader valve
9  Error codes
Tab.31  Water circuit errors
Error code  Description  Displayed on
E0  Water flow error (10 times E8)  User interface and Main Control PCB
E8  Water flow protection  User interface and Main Control PCB
Tab.32  Communication errors
Error code  Description  Displayed on
CL  Water pump communication wire fault  User interface and Main Control PCB
E2  Communication fault between user interface and  User interface and Main Control PCB
Main Control PCB
EL  Communication fault between hydraulic module and  User interface and Main Control PCB
MH kit
H0  Communication error on Main Control PCB  User interface and Main Control PCB
H1  Communication error between Main Control PCB  User interface and Main Control PCB
and inverter PCB
Hd  Communication fault between the master outdoor  User interface and Main Control PCB
unit and the slave outdoor unit.
--- Page 58 ---
9 Error codes
Tab.33  Sensor errors
Error code  Description  Displayed on
E3  T1 Electric Heater/AHS water outlet temperature  User interface and Main Control PCB
sensor error
E4  T5 water cylinder temperature sensor error  User interface and Main Control PCB
E5  T3 outdoor unit heat exchanger bottom temperature  User interface and Main Control PCB
sensor error
E6  T4 room temperature sensor error  User interface and Main Control PCB
E7  Tbt buffer tank temperature sensor/cascade system  User interface and Main Control PCB
final outlet water temperature sensor error
E9  Th return air temperature sensor error  User interface and Main Control PCB
EA  Tp discharge temperature sensor error  User interface and Main Control PCB
Eb  Tsolar solar panel temperature sensor error  User interface and Main Control PCB
EC  T5_2 water cylinder temperature sensor error  User interface and Main Control PCB
Ed  Tw_in plate heat exchanger inlet water temperature  User interface and Main Control PCB
sensor error
FC1  TL outdoor unit heat exchanger outlet temperature  User interface and Main Control PCB
sensor error
H2  T2 plate heat exchanger outlet refrigerant tempera­  User interface and Main Control PCB
ture sensor error
H3  T2B plate heat exchanger inlet refrigerant tempera­  User interface and Main Control PCB
ture sensor error
H5  Ta room temperature sensor error  User interface and Main Control PCB
H8  H-SEN high pressure sensor error  User interface and Main Control PCB
H9  Tw2 zone 2 water flow temperature sensor error  User interface and Main Control PCB
HA  Tw_out plate heat exchanger outlet water tempera­  User interface and Main Control PCB
ture sensor error
PF  Water flow sensor failure  User interface and Main Control PCB
PE  Water pressure sensor failure  User interface and Main Control PCB
P21  L-SEN low pressure sensor error  User interface and Main Control PCB
P27  H-SEN and L-SEN connected in reverse (detect  User interface and Main Control PCB
when the compressor is off)
Tab.34  Voltage errors
Error code  Description  Displayed on
E1  Phase loss or phase reversal  User interface and Main Control PCB
H7  Power overvoltage and Power undervoltage protec­  User interface and Main Control PCB
tion
Tab.35  Inverter module errors
Error code  Description  Displayed on
F1  Protection against DC bus undervoltage  User interface and Main Control PCB
C7  Excessive temperature protection for IPM module  User interface and Main Control PCB
H4  3 times “L1*” in 60 mins  User interface and Main Control PCB
L1E  Hardware overcurrent protection  Main Control PCB
L11  Phase current instantaneous overcurrent protection  Main Control PCB
L12  Phase current continuous 30 s overcurrent protection Main Control PCB
L2E  Overheating protection  Main Control PCB
L3E  Bus voltage too low error  Main Control PCB
L31  Bus voltage too high error  Main Control PCB
L32  Bus voltage excessively high error  Main Control PCB
L34  Phase loss error on the three-phase power supply  Main Control PCB
L43  Abnormal phase current sampling bias  Main Control PCB
--- Page 59 ---
9 Error codes
Error code  Description  Displayed on
L45  Fan motor code mismatch error  Main Control PCB
L46  IPM protection (FO)  Main Control PCB
L47  Module type mismatch  Main Control PCB
L5E  Motor failed to start  Main Control PCB
L52  Motor stalling protection  Main Control PCB
L6E  Phase loss protection  Main Control PCB
L61  Compressor terminal short circuit protection  Main Control PCB
L65  IPM short circuit protection  Main Control PCB
LBE  Action of high pressure switch  Main Control PCB
LB7  PED error  Main Control PCB
LCE  PFC hardware overcurrent protection  Main Control PCB
LC1  Instantaneous overcurrent of PFC software protec­  Main Control PCB
tion
LC2  PFC software continuous 30 s overcurrent protection Main Control PCB
LC3  PFC low voltage protection  Main Control PCB
LC4  PFC power factor is less than 0.8  Main Control PCB
LC5  PFC valid value overcurrent protection  Main Control PCB
LC6  PFC1 channel hardware overcurrent protection  Main Control PCB
LC7  PFC2 channel hardware overcurrent protection  Main Control PCB
LC8  PFC3 channel hardware overcurrent protection  Main Control PCB
LC9  Overheating protection of PFC module  Main Control PCB
LCA  PFC module CBC overcurrent error protection  Main Control PCB
LCB  Overvoltage of PFC bus or PFC half bus  Main Control PCB
LCC  Short circuit of PFC IGBT  Main Control PCB
LCD  Abnormal PFC sampling bias  Main Control PCB
H6  Fan failure  User interface and Main Control PCB
HH  10 times H6 in 120 mins  User interface and Main Control PCB
J1E  Hardware overcurrent protection  Main Control PCB
J11  Phase current instantaneous overcurrent protection  Main Control PCB
J12  Phase current continuous 30 s overcurrent protection Main Control PCB
J2E  Overheating protection  Main Control PCB
J3E  Bus voltage too low error  Main Control PCB
J31  Bus voltage too high error  Main Control PCB
J32  Bus voltage excessively high error  Main Control PCB
J43  Abnormal phase current sampling bias  Main Control PCB
J45  Fan motor code mismatch error  Main Control PCB
J46  IPM protection (FO)  Main Control PCB
J5E  Motor failed to start  Main Control PCB
J52  Motor stalling protection  Main Control PCB
J6E  Phase loss protection  Main Control PCB
J61  Fan terminal short circuit protection  Main Control PCB
J65  IPM short circuit protection  Main Control PCB
HF  Outdoor unit EEPROM error  User interface and Main Control PCB
Tab.36  Others
Error code  Description  Displayed on
F6  EXV fault  Main Control PCB
F75  Insufficient discharge superheating  Main Control PCB
Pd  Frost protection operation  Main Control PCB
--- Page 60 ---
10 Decommissioning and disposal
Tab.37  Protection code
Error code  Description  Displayed on
P0  Low pressure protection  User interface and Main Control PCB
P1  High pressure switch protection  User interface and Main Control PCB
P3  Overcurrent protection  User interface and Main Control PCB
P4  Protection against excessive compressor discharge  User interface and Main Control PCB
temperature
Pd  Protection against excessive condensation tempera­  User interface and Main Control PCB
ture
HP  Low pressure protection in cooling mode  User interface and Main Control PCB
bA  T4 sensor out of operation range protection  User interface and Main Control PCB
PP  Protection against an abnormal temperature differ­  User interface and Main Control PCB
ence between the water outlet and inlet
Hb  3 times PP and Twout < 7 ℃  User interface and Main Control PCB
P5  Abnormal temperature difference between the water  User interface and Main Control PCB
outlet and inlet temperature
10 Decommissioning and disposal
10.1  Disposal and recycling
Fig.54
Warning
Removal and disposal of the outdoor unit must be carried out by a
qualified professional in accordance with prevailing local and
national regulations.
1. Switch off the indoor and outdoor units.
2. Shut off the electrical power supply to the outdoor and indoor units.
3. Recover the refrigerant in accordance with prevailing regulations
4. Close the water mains.
5. Drain the installation.
6. Dismantle all hydraulic connections.
7. Remove the outdoor unit.
8. Scrap or recycle the outdoor unit in accordance with prevailing local
and national regulations.
10.2  Brine disposal/recycling
Particular care must be taken in the collection and processing of
hazardous waste. It must be disposed of in accordance with the regulatory
requirements governing special waste.
Do not dispose of water containing monopropylene glycol into the sewage
system or the natural environment. Hazardous substances may penetrate
the water tables or enter the food chain, causing harmful effects for health
and well-being. Place a container of sufficient volume under the drain pipe
to collect waste. Store waste and contaminated products in specially
designed closed and sealed containers. Dispose of them in accordance
with applicable regulations or send them to a waste recycling centre for
processing.
Important
Always comply with applicable local regulations concerning
correct recycling of special waste.
--- Page 61 ---
10 Decommissioning and disposal
10.3  Recover refrigerants
Caution
It is recommended to wear protective gloves and goggles before
carrying out any work on the refrigerant circuit.
When decommissioning the heat pump, all refrigerants need to be
recovered safely. Prior to carrying out the recovery operation, an oil and
refrigerant sample must be taken in case analysis is required prior to re-
use of recovered refrigerant. It is essential that electrical power is switched
off before the task is commenced.
Before carrying out the procedure, ensure that:
Mechanical handling equipment is available, if required, for handling
refrigerant cylinders
All personal protective equipment is available and being used correctly
The recovery process is supervised at all times by a competent person
Recovery equipment and cylinders conform to the appropriate standards
1. Become familiar with the equipment and its operation.
2. Isolate the system electrically.
3. Pump down the refrigerant system, if possible.
4. If a vacuum is not possible, fit a manifold so that refrigerant can be
removed from various parts of the system.
5. Make sure that cylinder is placed on the scales before starting
recovery.
6. Start the recovery machine and run it following the instructions.
Important
Do not overfill the cylinders (the liquid charge must not exceed
80% volume).
Do not exceed the maximum working pressure of the cylinder,
even temporarily.
7. When the cylinders have been filled correctly and the process
completed, make sure that the cylinders and the equipment are
removed from site promptly and all isolation valves on the equipment
are closed off.
Important
Recovered refrigerant shall not be charged into another
refrigerating system unless it has been cleaned and checked.
10.4  Labelling
Equipment shall be labelled stating that it has been de-commissioned and
emptied of refrigerant. The label shall be dated and signed.
10.5  Recovery equipment
When removing refrigerant from a system, either for servicing or
decommissioning, it is recommended good practice that all refrigerants are
removed safely.
When transferring refrigerant into cylinders, ensure that only appropriate
refrigerant recovery cylinders are employed. Ensure that the correct
number of cylinders for holding the total system charge is available. All
cylinders to be used are designated for the recovered refrigerant and
labelled for that refrigerant (i.e. special cylinders for the recovery of
refrigerant). Cylinders shall be complete with pressure-relief valve and
associated shut-off valves in good working order. Empty recovery
cylinders are evacuated and, if possible, cooled before recovery occurs.
The recovery equipment shall be in good working order with a set of
instructions concerning the equipment that is at hand and shall be suitable
for the recovery of all appropriate refrigerants including, when applicable,
flammable refrigerants. In addition, a set of calibrated weighing scales
--- Page 62 ---
11 Appendix
shall be available and in good working order. Hoses shall be complete with
leak-free disconnect couplings and in good condition. Before using the
recovery machine, check that it is in satisfactory working order, has been
properly maintained and that any associated electrical components are
sealed to prevent ignition in the event of a refrigerant release. Consult
manufacturer if in doubt.
The recovered refrigerant shall be returned to the refrigerant supplier in
the correct recovery cylinder, and the relevant waste transfer note
arranged. Do not mix refrigerants in recovery units and especially not in
cylinders.
If compressors or compressor oils are to be removed, ensure that they
have been evacuated to an acceptable level to make certain that
flammable refrigerant does not remain within the lubricant. The evacuation
process shall be carried out prior to returning the compressor to the
suppliers. Only electric heating to the compressor body shall be employed
to accelerate this process. When oil is drained from a system, it shall be
carried out safely.
11 Appendix
11.1  Benchmark Commissioning & Warranty Validation Service Record
Fig.55
AD-3000725-01
Fig.56  It is a requirement that the heat pump is installed and commissioned to the
manufacturers’ instructions and the data fields on the commissioning
checklist completed in full.
To instigate the warranty the heat pump needs to be registered with the
manufacturer within one month of the installation. The warranty rests with
the end-user (consumer), and they should be made aware it is ultimately
their responsibility to register with the manufacturer, within the allotted time
period.
It is essential that the heat pump is serviced in line with the manufacturers’
recommendations, at least annually. This must be carried out by a
competent, certified operative. The service details should be recorded on
the Benchmark Service and Interim Heat Pump Work Record and left with
the householder. Failure to comply with the manufacturers’ servicing
instructions and requirements will invalidate the warranty.
This Commissioning Checklist is to be completed in full by the competent
person who commissioned the heat pump and associated equipment as a
means of demonstrating compliance with the appropriate Building
Regulations and then handed to the customer to keep for future reference.
Failure to install and commission according to the manufacturers’
instructions and complete this Benchmark Commissioning Checklist will
invalidate the warranty. This does not affect the customer’s statutory
rights.
All installations in England and Wales must be notified to Local Authority
Building Control (LABC) either directly or through a Competent Persons
Scheme. A Building Regulations Compliance Certificate will then be
issued to the customer.
© Heating and Hotwater Industry Council (HHIC)
http://www.centralheating.co.uk
--- Page 63 ---
11 Appendix
11.2  Service record
It is recommended that your heating system is serviced regularly and that the appropriate Service Interval Record is completed.
Service provider
Before completing the appropriate Service Record below, please ensure you have carried out the service as described in the manufacturer’s instructions.
Always use the manufacturer’s specified spare part when replacing controls.
SERVICE 01  Date:  SERVICE 02  Date:
Engineer name:  Engineer name:
Company name:  Company name:
Telephone No:  Telephone No:
Operative ID No:  Operative ID No:
Comments:  Comments:
Signature:  Signature:
SERVICE 03  Date:  SERVICE 04  Date:
Engineer name:  Engineer name:
Company name:  Company name:
Telephone No:  Telephone No:
Operative ID No:  Operative ID No:
Comments:  Comments:
Signature:  Signature:
SERVICE 05  Date:  SERVICE 06  Date:
Engineer name:  Engineer name:
Company name:  Company name:
Telephone No:  Telephone No:
Operative ID No:  Operative ID No:
Comments:  Comments:
Signature:  Signature:
* All installations in England and Wales must be notified to Local Authority Building Control (LABC) either directly or through a
Competent Persons Scheme. A Building Regulations Compliance Certificate will then be issued to the custome .
© Heating and Hotwater Industry Council (HHIC)
www.centralheating.co.uk
--- Page 64 ---
11 Appendix
It is recommended that your heating system is serviced regularly and that the appropriate Service Interval Record is completed.
Service provider
Before completing the appropriate Service Record below, please ensure you have carried out the service as described in the manufacturer’s instructions.
Always use the manufacturer’s specified spare part when replacing controls.
SERVICE 07  Date:  SERVICE 08  Date:
Engineer name:  Engineer name:
Company name:  Company name:
Telephone No:  Telephone No:
Operative ID No:  Operative ID No:
Comments:  Comments:
Signature:  Signature:
SERVICE 09  Date:  SERVICE 10  Date:
Engineer name:  Engineer name:
Company name:  Company name:
Telephone No:  Telephone No:
Operative ID No:  Operative ID No:
Comments:  Comments:
Signature:  Signature:
* All installations in England and Wales must be notified to Local Authority Building Control (LABC) either directly or through a
Competent Persons Scheme. A Building Regulations Compliance Certificate will then be issued to the custome .
© Heating and Hotwater Industry Council (HHIC)
www.centralheating.co.uk
--- Page 65 ---
11 Appendix
11.3  Product data sheet
Tab.38  Product sheet for heat pump space heaters for medium-temperature applications: 55 °C
Assure HP55-4-1-PHMB Assure HP55-6-1-PHMB Assure HP55-8-1-PHMB
Space heating energy efficiency
class under average climate condi­
+++  +++  +++
A  A  A
tions
Rated heat output under average  kW  4.90  6.10  7.80
climate conditions (Prated or Psup)
Seasonal space heating energy ef­ %  157  153  153
ficiency under average climate con­
ditions
Annual energy consumption  kWh  2535  3233  4140
Sound power level LWA indoors(1)  dB (A)  0  0  0
Rated heat output, under colder -  kW  4.30 - 4.70  5.90 - 6.00  8.00 - 8.80
warmer climate conditions
Seasonal space heating energy ef­  %  124.3 - 170  132 - 179  136 - 188
ficiency, under colder - warmer cli­
mate conditions
Annual energy consumption colder  kWh  3328 - 1446  4325 - 1762  5659 - 2456
- warmer
Sound power level LWA outdoors  dB (A)  48  48  49
(1) If applicable
Tab.39  Product sheet for heat pump space heaters for medium-temperature applications: 55 °C
Assure HP55-11-1-  Assure HP55-11-3-  Assure HP55-13-1-  Assure HP55-13-3-
PHMB  PHMB  PHMB  PHMB
Space heating energy effi­
ciency class under average
++  ++  ++  ++
A  A  A  A
climate conditions
Rated heat output under  kW  12.10  12.10  13.70  13.70
average climate conditions
(Prated or Psup)
Seasonal space heating en­  %  147  147  146  146
ergy efficiency under aver­
age climate conditions
Annual energy consumption  kWh  6662  6662  7588  7588
Sound power level LWA in­  dB (A)  0  0  0  0
doors(1)
Rated heat output, under  kW  10.80 - 12.40  10.80 - 12.40  13.90 - 14.90  13.90 - 14.90
colder - warmer climate con­
ditions
Seasonal space heating en­  %  127 - 174  127 - 174  128 - 181  128 - 181
ergy efficiency, under colder
- warmer climate conditions
Annual energy consumption  kWh  8197 - 3724  8197 - 3724  10408 - 4306  10408 - 4306
colder - warmer
Sound power level LWA out­  dB (A)  52  52  52  52
doors
(1) If applicable
See
For specific precautions about assembling, installing and
maintaining: See Safety
--- Page 66 ---
11 Appendix
11.4  Servicing information
To comply with regulations, the installer must fill these tables and hand
them to the user. The user must keep this information safe for future
reference.
Tab.40
Emergency information
INSTALLER name and contact information
INSTALLER SERVICING name and contact information
FIRE DEPARTMENT contact information
POLICE contact information
LOCAL HOSPITAL contact information
LOCAL BURNS UNIT contact information
Tab.41
Refrigerant information
Type of refrigerant
Refrigerant formula
Refrigerant flammability
Maximum admissible pressure
--- Page 67 ---
© Copyright
All technical and technological information contained in these technical instructions, as well as any drawings and technical
descriptions supplied, remain our property and shall not be multiplied without our prior consent in writing. Subject to alterations.
--- Page 68 ---
For Baxi Customer Support and
Technical Advice, contact us at
0844  871 1525
Please note calls may be monitored or recorded
www.baxi.co.uk
Open Monday - Friday, 8am - 6pm
Weekends & Bank Holidays, 8.30am - 2pm
We are closed on Christmas Day and New Year’s Day.
Please note calls may be monitored or recorded.
Baxi, Brooks House
Coventry Road, Warwick, CV34 4LL.
7890198-001-03
