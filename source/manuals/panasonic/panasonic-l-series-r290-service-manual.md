# Panasonic Service Manual – Hydromodule + Tank R290 L-series (tank unit WH-ADC0509L3E51 / WH-ADC0509L3E5UK1, outdoor WH-WDG05LE5 / WDG07LE5 / WDG09LE5), Order No PCZ2504005CE

<!-- Page markers added for citation; text as extracted from the uploaded manual (printed page numbers match the PDF pages). Pages 37-67 (controller menus), 70, 81, 222, 224 and 236 have no text layer in the PDF and were read by OCR. -->

--- Page 1 ---
Order No: PCZ2504005CE

Air-to-Water Hydromodule + Tank
Indoor Unit
WH-ADC0509L3E51
WH-ADC0509L3E5UK1

Outdoor Unit
WH-WDG05LE5
WH-WDG07LE5
WH-WDG09LE5
Destination
Europe
UK

WARNING
This service information is designed for experienced repair technicians only and is not designed for use by the general public.
It does not contain warnings or cautions to advise non-technical individuals of potential dangers in attempting to service a product.
Products powered by electricity should be serviced or repaired only by experienced professional technicians. Any attempt to
service or repair the products dealt with in this service information by anyone else could result in serious injury or death.

IMPORTANT SAFETY NOTICE

There are special components used in this equipment which are important for safety. These parts are marked by
in the Schematic
Diagrams, Circuit Board Diagrams, Exploded Views and Replacement Parts List. It is essential that these critical parts should be
replaced with manufacturer’s specified parts to prevent shock, fire or other hazards. Do not modify the original design without permission
of manufacturer.

PRECAUTION OF LOW TEMPERATURE
In order to avoid frostbite, be assured of no refrigerant leakage during the installation or repairing of refrigerant circuit.

CAUTION

R290
REFRIGERANT

This AIR-TO-WATER HEATPUMP contains and operates with refrigerant R290.
THIS PRODUCT MUST ONLY BE INSTALLED OR SERVICED BY QUALIFIED PERSONNEL
Refer to National, State, Territory and local legislation, regulations, codes, installation & operation manuals,
before the installation, maintenance and/or service of this product.

© Panasonic Corporation 2025.

--- Page 2 ---
TABLE OF CONTENTS
1. Safety Precautions .............................................4

14. Operation and Control .................................. 182

2. Precaution for Using R290 Refrigerant ............7

10.1 Indoor Unit ...................................................78
10.2 Outdoor Unit.................................................79

14.1 Basic Function .......................................... 182
14.2 Water Pump .............................................. 192
14.3 Indoor Unit Safety ..................................... 197
14.4 Auto Restart Control ................................. 197
14.5 Indication Panel ........................................ 197
14.6 Indoor Back-Up Heater Control ................ 198
14.7 Tank Heater Control.................................. 199
14.8 Base Pan Heater Control (Optional) ......... 200
14.9 Force Heater Mode ................................... 200
14.10 Powerful Operation ................................... 202
14.11 Quiet Operation......................................... 202
14.12 Sterilization Mode ..................................... 203
14.13 Outdoor Ambient Thermo OFF Control .... 203
14.14 Alternative Outdoor Ambient Sensor Control ..
................................................................. 204
14.15 Force DHW mode ..................................... 204
14.16 SMART DHW mode .................................. 205
14.17 Anti Freeze Control ................................... 205
14.18 Solar Operation (Optional) ........................ 206
14.19 Boiler Bivalent Control .............................. 208
14.20 External Room Thermostat Control (Optional)
................................................................. 210
14.21 Three Ways Valve Control ........................ 211
14.22 Two Ways Valve Control........................... 211
14.23 External OFF/ON Control ......................... 212
14.24 External Compressor Switch (Optional PCB) ..
................................................................. 213
14.25 Heat/Cool Switch (Optional PCB) ............. 213
14.26 SG Ready Control (Optional PCB) ........... 214
14.27 Demand Control (Optional PCB) .............. 215
14.28 Holiday Mode ............................................ 216
14.29 Dry Concrete ............................................. 216
14.30 Flow Sensor .............................................. 216

11. Printed Circuit Board .......................................80

15. Protection Control ......................................... 217

11.1 Indoor Unit ...................................................80
11.2 Outdoor Unit.................................................82

15.1 Protection Control for All Operations ........ 217
15.2 Protection Control for Heating Operation.........
................................................................. 219
15.3 Protection Control for Cooling Operation .........
................................................................. 220

3. Specifications ...................................................12
3.1
3.2
3.3
3.4
3.5
3.6

WH-ADC0509L3E51 WH-WDG05LE5 .......12
WH-ADC0509L3E51 WH-WDG07LE5 .......16
WH-ADC0509L3E51 WH-WDG09LE5 .......20
WH-ADC0509L3E5UK1 WH-WDG05LE5 ......
....................................................................24
WH-ADC0509L3E5UK1 WH-WDG07LE5 ......
....................................................................28
WH-ADC0509L3E5UK1 WH-WDG09LE5 ......
....................................................................32

4. Features.............................................................36
5. Location of Controls and Components ..........37
5.1
5.2

Indoor Unit ...................................................37
Outdoor Unit.................................................70

6. Dimensions .......................................................71
6.1
6.2

Indoor Unit ...................................................71
Outdoor Unit.................................................73

7. Refrigeration and Water Cycle Diagram ........74
8. Block Diagram ..................................................75
9. Wiring Connection Diagram ............................76
9.1
9.2

Indoor Unit ...................................................76
Outdoor Unit.................................................77

10. Electronic Circuit Diagram ..............................78

12. Installation Instruction .....................................83
12.1 Indoor Unit (For WH-ADC0509L3E51 only) ....
....................................................................84
12.2 Appendix ......................................................95
12.3 Service and Maintenance ..........................123
12.4 Indoor Unit (For WH-ADC0509L3E5UK1 only)
..................................................................125
12.5 Appendix ....................................................137
12.6 Service and Maintenance ..........................165
12.7 Outdoor Unit...............................................167

16. Servicing Guide ............................................. 221
16.1 How to Take Out Front Plate .................... 221
16.2 Test Run ................................................... 221
16.3 Expansion Vessel ⑬ Pre Pressure Checking .
................................................................. 221
16.4 Pump Down Procedures ........................... 222
16.5 How to Adjust Pump Speed ...................... 223
16.6 How to Unlock Cool Mode ........................ 224
16.7 EEPROM Factory Default Data Setup
Procedure ................................................. 225
16.8 Dry Concrete Setup .................................. 226

13. Installation and Servicing Air-to-Water using
R290 .................................................................173
13.1 About R290 Refrigerant .............................173
13.2 Characteristics of R290 Refrigerant...........173
13.3 Refrigerant piping installation • Tools used in
services ......................................................175
13.4 New installation, and Repairing of Refrigerant
Cycle System Procedures .........................179
13.5 Servicing ....................................................180

17. Maintenance Guide........................................ 228
17.1 Maintenance for Magnetic Water Filter Set .....
................................................................. 231

--- Page 3 ---
18. Troubleshooting Guide .................................. 233
18.1 Refrigeration Cycle System ....................... 233
18.2 Relationship between the Condition of the Airto-Water Heatpump Indoor and Outdoor Units
and Pressure and Electric Current ............ 234
18.3 Breakdown Self Diagnosis Function .......... 235
18.4 Error Codes Table ..................................... 237
18.5 Self-Diagnosis Method .............................. 239
19. Disassembly and Assembly Instructions .... 287
19.1 Indoor Unit ................................................. 287
19.2 Outdoor Unit .............................................. 291
20. Technical Data ................................................ 295
20.1 Operation Characteristics .......................... 295
20.2 Heating Capacity Table ............................. 307
20.3 Cooling Capacity Table ............................. 309
21. Exploded View and Replacement Parts List .....
......................................................................... 310
21.1 Indoor Unit ................................................. 310
21.2 Outdoor Unit .............................................. 326



Specifications, designs and contents in this Service Manual are subject to change without notice.

--- Page 4 ---
1. Safety Precautions


Read the following “SAFETY PRECAUTIONS” carefully before installation of Air-To-Water Hydromodule + Tank
(here after referred to as “Tank Unit”).
Electrical works and water installation works must be done by licensed electrician and licensed water system
installer respectively. Be sure to use the correct rating and main circuit for the model to be installed.
The caution items stated here must be followed because these important contents are related to safety. The
meaning of each indication used is as below.
Incorrect installation due to ignorance or negligence of the instructions will cause harm or damage, and the
seriousness is classified by the following indications.
Please leave this installation manual with the unit after installation.






WARNING

This indication shows the possibility of causing death or serious injury.

CAUTION

This indication shows the possibility of causing injury or damage to properties only.

The items to be followed are classified by the symbols:
Symbol with white background denotes item that is PROHIBITED.
Symbol with dark background denotes item that must be carried out.



Carry out test run to confirm that no abnormality occurs after the installation. Then, explain to user the operation,
care and maintenance as stated in instructions. Please remind the customer to keep the operating instructions for
future reference.
This appliance is not intended for accessibility by the general public.
If there is any doubt about the installation procedure or operation, always contact the authorized dealer for advice
and information.




WARNING
1.

Do not use means to accelerate the defrosting process or to clean, other than those recommended by the manufacturer. Any
unﬁt method or using incompatible material may cause product damage, burst and serious injury.

2.

Do not install outdoor unit near handrail of veranda. When installing outdoor unit at veranda of high rise building, child may climb
up to outdoor unit and cross over the handrail and causing accident.

3.

Do not use unspecified cord, modified cord, joint cord or extension cord for power supply cord. Do not share the single outlet with
other electrical appliances. Poor contact, poor insulation or over current will cause electrical shock or fire.

4.

Do not tie up the power supply cord into a bundle by band. Abnormal temperature rise on power supply cord may happen.

5.

Do not insert your fingers or other objects into the unit, high speed rotating fan may cause injury.

6.

Do not sit or step on the unit, you may fall down accidentally.

7.

Keep plastic bag (packaging material) away from small children, it may cling to nose and mouth and prevent breathing.

8.

Do not purchase unauthorized electrical parts for installation, service, maintenance and etc.. They might cause electrical shock
or fire.

9.

Do not modify the wiring of outdoor unit for installation of other components (i.e. heater, etc). Overloaded wiring or wire
connection points may cause electrical shock or fire.

10.

Do not pierce or burn as the appliance is pressurized. Do not expose the appliance to heat, flame, sparks, or other sources of
ignition.
Else, it may explode and cause injury or death.

11.

Do not pierce or burn as the appliance is pressurized. Do not expose the appliance to heat above 370°C, flame, sparks, or other
sources of ignition. Else, it may explode and cause injury or death.

12.

Do not add or replace refrigerant other than specified type. It may cause product damage, burst and injury etc.

13.

Do not place containers with liquids on top of the Tank Unit. It may cause Tank Unit damage and/or fire could occurs if they leak
or spill onto the Tank Unit.
Do not use joint cable for Tank Unit / Outdoor Unit connection cable. Use specified Tank Unit / Outdoor Unit connection cable,

14.

15.

CONNECT THE CABLE TO THE TANK UNIT and connect tightly for Tank Unit / Outdoor Unit connection.
refer to instruction
Clamp the cable so that no external force will be acted on the terminal. If connection or fixing is not perfect, it will cause heat up
or fire at the connection.
For electrical work, follow the national regulation, legislation and this installation instructions. An independent circuit and single
outlet must be used. If electrical circuit capacity is not enough or defect found in the electrical work, it will cause electrical shock
or fire.

--- Page 5 ---
WARNING
16.

For electrical work, follow local wiring standard, regulation and this installation instruction. An independent circuit and single
outlet must be used. If electrical circuit capacity is not enough or defect found in electrical work, it will cause electrical shock or
fire.

17.

For water circuit installation work, follow to relevant European and national regulations (including EN61770) and local plumbing
and building regulation codes.

18.

Engage authorized dealer or specialist for installation. If installation done by the user is incorrect, it will cause water leakage,
electrical shock or fire.

19.

Engage dealer or specialist for installation. If installation done by the user is defective, it will cause water leakage, electrical
shock or fire.

20.

• The refrigerant cycle is completed inside the outdoor unit.
• Refrigerant piping work is not required.
• Pump down operation is not also required.

21.

Install at a strong and firm location which is able to withstand weight of the set. If the strength is not enough or installation is not
properly done, the set will drop and cause injury.

22.

Install at a strong and firm location which is able to withstand the set’s weight. If the strength is not enough or installation is not
properly done, the set will drop and cause injury.

23.

This equipment is strongly recommended to be installed with Residual Current Device (RCD) on-site according to the respective
national wiring rules or country–specific safety measures in terms of residual current.

24.

For refrigeration system work, install according to this installation instructions strictly. If installation is defective, it will cause
water leakage, electrical shock or fire.

25.

Do not use joint cable for outdoor connection cable. Use speciﬁed outdoor connection cable, refer to instruction ④ CONNECT
THE CABLE TO THE OUTDOOR UNIT and connect tightly for outdoor connection. Clamp the cable so that no external force will
be acted on the terminal. If connection or ﬁxing is not perfect, it will cause heat up or ﬁre at the connection.

26.

Wire routing must be properly arranged so that control board cover is fixed properly. If control board cover is not fixed perfectly,
it will cause fire or electrical shock.

27.

After completion of installation, confirm there is no leakage of refrigerant gas. It may lead to the risk of fire or explosion when the
refrigerant contacts with fire.

28.

Ventilate the room if there is refrigerant gas leakage during operation. Extinguish all fire sources if present. It may lead to the
risk of fire or explosion when the refrigerant contacts with fire.

29.

Use the attached accessories parts and specified parts for installation. Otherwise, it will cause the set to fall, water leakage, fire
or electrical shock.

30.

Only use the supplied or specified installation parts. Else, it may causes unit vibrate, fall, water leakage, electrical shock or fire.

31.

Only use the supplied or specified installation parts, else, it may cause unit vibrate loose, water leakage, electrical shock or fire.

32.

If there is any doubt about the installation procedure or operation, always contact the authorized dealer for advice and
information.

33.

Select a location where in case of water leakage, the leakage will not cause damage to other properties.

34.

When installing electrical equipment at wooden building of metal lath or wire lath, in accordance with electrical facility standard,
no electrical contact between equipment and building is allowed. Insulator must be installed in between.

35.

Any work carried out on the Tank Unit after removing any panels which is secured by screws, must be carried out under the
supervision of authorized dealer and licensed installation contractor.

36.

Any work carried out on the outdoor unit after removing any panels which is secured by screws, must be carried out under the
supervision of authorized dealer and licensed installation contractor.

37.

This system is multi supply appliance. All circuits must be disconnected before accessing the unit terminals.

38.

For cold water supply has a backflow regulator, check valve or water meter with check valve, provisions for thermal expansion
of water in the hot water system must be provided. Otherwise it will cause water leakage.

39.

The piping installation work must be flushed before Tank Unit is connected to remove contaminants. Contaminants may damage
the Tank Unit components.

40.

This installation may be subjected to building regulation approval applicable to respective country that may require to notify the
local authority before installation.

41.

The Tank Unit must be shipped and stored in upright condition and dry environment. It may laid on its back when being moved
into the building.

42.

Work done to the Tank Unit after remove the front plate cover that secured by screws, must be carried out under the supervision
of authorized dealer, licensed installation contractor, skilled person and instructed person.

43.

Be aware that refrigerants may not contain an odour.

44.

This equipment must be properly earthed. Earth line must not be connected to gas pipe, water pipe, earth of lightning rod and
telephone. Otherwise, it may cause electrical shock in case of equipment breakdown or insulation breakdown.

45.

This unit must be properly earthed. The electrical earth must not be connected to a gas pipe, water pipe, the earth of lightening
rod or a telephone. Otherwise there is a danger of electrical shock in the event of an insulation breakdown or electrical earth
fault in the outdoor unit.

--- Page 6 ---
CAUTION
1.

Do not install the Tank Unit at place where leakage of flammable gas may occur. In case gas leaks and accumulates at
surrounding of the unit, it may cause fire.

2.

Do not install the outdoor unit at place where leakage of flammable gas may occur. In case gas leaks and accumulates at
surrounding of the unit, it may cause fire.

3.

Prevent liquid or vapor from entering sumps or sewers since vapor is heavier than air and may form suffocating atmospheres.

4.

Do not release refrigerant during repairing a refrigeration parts. Take care of the liquid refrigerant, it may cause frostbite.

5.

Do not install this appliance in a laundry room or other high humidity location. This condition will cause rust and damage to the
unit.

6.

Make sure the insulation of power supply cord does not contact hot part (i.e. water piping) to prevent from insulation failure (melt).

7.

Make sure the insulation of power supply cord does not contact hot part (i.e. refrigerant piping) to prevent from insulation failure
(melt).

8.

Do not touch the sharp aluminium fin, sharp parts may cause injury.

9.

Do not apply excessive force to water pipes that may damage the pipes. If water leakage occurs, it will cause flooding and
damage to other properties.

10.

Do not transport the Tank Unit with water inside the unit. It may cause damage to the unit.

11.

Carry out drainage piping as mentioned in installation instructions. If drainage is not perfect, water may enter the room and
damage the furniture.

12.

Select an installation location which is easy for maintenance.
Incorrect installation, service or repair of this Tank Unit may increase the risk of rupture and this may result in loss damage or
injury and/or property.

13.

Select an installation location which is easy for maintenance.
Incorrect installation, service or repair of this outdoor unit may increase the risk of rupture and this may result in loss damage or
injury and/or property.

14.

Power supply connection to Tank Unit.
• Power supply point should be in easily accessible place for power disconnection in case of emergency.
• Must follow local national wiring standard, regulation and this installation instruction.
• Strongly recommended to make permanent connection to a circuit breaker.
- Power Supply 1: Use approved 25A 2-poles circuit breaker with a minimum contact gap of 3.0mm.
- Power Supply 2: Use approved 15/16A 2-poles circuit breaker with a minimum contact gap of 3.0mm.

15.

Ensure the correct polarity is maintained throughout all wiring. Otherwise, it will cause electrical shock or fire.

16.

After installation, check the water leakage condition in connection area during test run. If leakage occurs, it will cause damage to
other properties.

17.

If the Tank Unit not operates for long time, the water inside the Tank Unit should be drained.

18.

Installation work.
It may need three or more people to carry out the installation work. The weight of Tank Unit might cause injury if carried by one
person.

19.

Installation work.
It may need two or more people to carry out the installation work. The weight of outdoor unit might cause injury if carried by one
person.

20.

Keep any required ventilation openings clear of obstruction.

21.

Water piping in the occupied space shall be installed in such a way to protect against accidental damage in operation and
service.

22.

Precautions shall be taken to avoid excessive vibration or pulsation to water piping.

23.

Protect the water piping from accidental rupture due to moving furniture or reconstruction activities.

24.

• Must ensure the installation of water pipe-work shall be kept to a minimum. Avoid use dented pipe and do not allow acute
bending.
• Must ensure that water pipe-work shall be protected from physical damage.

--- Page 7 ---
2. Precaution for Using R290 Refrigerant


Pay careful attention to the following points:
WARNING
1.

The mixing of different refrigerants within a system is prohibited.

2.

Operation, maintenance, repairing and refrigerant recovery should be carried out by trained and certiﬁed personnel in the use of
ﬂammable refrigerants and as recommended by the manufacturer. Any personnel conducting an operation, servicing or
maintenance on a system or associated parts of the equipment should be trained and certiﬁed.

3.

Any part of refrigerating circuit (evaporators, air coolers, AHU, condensers or liquid receivers) or piping should not be located in
the proximity of heat sources, open ﬂames, operating gas appliance or an operating electric heater.

4.

The user/owner or their authorized representative shall regularly check the alarms, mechanical ventilation and detectors, at
least once a year, where as required by national regulations, to ensure their correct functioning.

5.

A logbook shall be maintained. The results of these checks shall be recorded in the logbook.

6.

In case of ventilations in occupied spaces shall be checked to conﬁrm no obstruction.

7.

Before a new refrigerating system is put into service, the person responsible for placing the system in operation should ensure
that trained and certiﬁed operating personnel are instructed on the basis of the instruction manual about the construction,
supervision, operation and maintenance of the refrigerating system, as well as the safety measures to be observed, and the
properties and handling of the refrigerant used.

8.

The general requirement of trained and certiﬁed personnel are indicated as below:
a) Knowledge of legislation, regulations and standards relating to ﬂammable refrigerants; and,
b) Detailed knowledge of and skills in handling ﬂammable refrigerants, personal protective equipment, refrigerant leakage
prevention, handling of cylinders, charging, leak detection, recovery and disposal; and,
c) Able to understand and to apply in practice the requirements in the national legislation, regulations and Standards; and,
d) Continuously undergo regular and further training to maintain this expertise.

9.

Ensure protection devices, refrigerating circuit and ﬁttings are well protected against adverse environmental effects (such as the
danger of water collecting and freezing in relief pipes or the accumulation of dirt and debris).

--- Page 8 ---
CAUTION

1.

Installation (Space)

Must comply with national gas regulations, state municipal rules and legislation. Notify relevant authorities in accordance
with all applicable regulations.

Must ensure mechanical connections be accessible for maintenance purposes.

In cases that require mechanical ventilation, ventilation openings shall be kept clear of obstruction.

When disposal of the product, do follow to the precautions in #12 and comply with national regulations.

Always contact to local municipal ofﬁces for proper handling.

2.

Servicing
2-1. Service personnel

Any qualified person who is involved with working on or breaking into a refrigerant circuit should hold a current valid
certificate from an industry-accredited assessment authority, which authorizes their competence to handle refrigerants
safely in accordance with an industry recognized assessment specification.

Servicing shall only be performed as recommended by the equipment manufacturer. Maintenance and repair requiring the
assistance of other skilled personnel shall be carried out under the supervision of the person competent in the use of
flammable refrigerants.

Servicing shall be performed only as recommended by the manufacturer.

The system is inspected, regularly supervised and maintained by a trained and certiﬁed service personnel who is employed
by the person user or party responsible.

Ensure refrigerant charge not to leak.
2-2. Work

Prior to beginning work on systems containing flammable refrigerants, safety checks are necessary to ensure that the risk
of ignition is minimised.
For repair to the refrigerating system, the precautions in #2-2 to #2-8 must be followed before conducting work on the
system.

Work shall be undertaken under a controlled procedure so as to minimize the risk of a flammable gas or vapour being
present while the work is being performed.

All maintenance staff and others working in the local area shall be instructed and supervised on the nature of work being
carried out.

Avoid working in confined spaces. Always ensure away from source, at least 2 meter of safety distance, or zoning of free
space area of at least 2 meter in radius.

Wear appropriate protective equipment, including respiratory protection, as conditions warrant.

Keep all sources of ignition and hot metal surfaces away.
2-3. Checking for presence of refrigerant

The area shall be checked with an appropriate refrigerant detector prior to and during work, to ensure the technician is
aware of potentially flammable atmospheres.

Ensure that the leak detection equipment being used is suitable for use with flammable refrigerants, i.e. non sparking,
adequately sealed or intrinsically safe.

In case of leakage/spillage happened, immediately ventilate area and stay upwind and away from spill/release.

In case of leakage/spillage happened, do notify persons down wind of the leaking/spill, isolate immediate hazard area and
keep unauthorized personnel out.
2-4. Presence of fire extinguisher

If any hot work is to be conducted on the refrigerating equipment or any associated parts, appropriate fire extinguishing
equipment shall be available at hand.

Have a dry powder or CO2 fire extinguisher adjacent to the charging area.
2-5. No ignition sources

No person carrying out work in relation to a refrigerating system shall use any sources of ignition in such a manner that it
may lead to the risk of ﬁre or explosion. He/She must not be smoking when carrying out such work.

All possible ignition sources, including cigarette smoking, should be kept sufficiently far away from the site of installation,
repairing, removing and disposal, during which flammable refrigerant can possibly be released to the surrounding space.

Prior to work taking place, the area around the equipment is to be surveyed to make sure that there are no flammable
hazards or ignition risks.

“No Smoking” signs shall be displayed.
2-6. Ventilated area

Ensure that the area is in the open or that it is adequately ventilated before breaking into the system or conducting any hot
work.

A degree of ventilation shall continue during the period that the work is carried out.

The ventilation should safely disperse any released refrigerant and preferably expel it externally into the atmosphere.

--- Page 9 ---
CAUTION

2.

3.

2-7. Checks to the refrigerating equipment

Where electrical components are being changed, they shall be fit for the purpose and to the correct specification.

At all times the manufacturer’s maintenance and service guidelines shall be followed.

If in doubt consult the manufacturer’s technical department for assistance.

The following checks shall be applied to installations using flammable refrigerants.
The ventilation machinery and outlets are operating adequately and are not obstructed.
If an indirect refrigerating circuit is being used, the secondary circuit shall be checked for the presence of refrigerant.
Marking to the equipment continues to be visible and legible. Markings and signs that are illegible shall be corrected.
Refrigerating pipe or components are installed in a position where they are unlikely to be exposed to any substance
which may corrode refrigerant containing components, unless the components are constructed of materials which are
inherently resistant to being corroded or are properly protected against being so corroded.
2-8. Checks to electrical devices

Repair and maintenance to electrical components shall include initial safety checks and component inspection procedures.

Initial safety checks shall include but not limit to:That capacitors are discharged: this shall be done in a safe manner to avoid possibility of sparking.
That there are no live electrical components and wiring are exposed while charging, recovering or purging the system.
That there is continuity of earth bonding.

At all times the manufacturer’s maintenance and service guidelines shall be followed.

If in doubt consult the manufacturer’s technical department for assistance.

If a fault exists that could compromise safety, then no electrical supply shall be connected to the circuit until it is
satisfactorily dealt with.

If the fault cannot be corrected immediately but it is necessary to continue operation, an adequate temporary solution shall
be used.

The owner of the equipment must be informed or reported so all parties are advised thereinafter.
Repairs to sealed components

During repairs to sealed components, all electrical supplies shall be disconnected from the equipment being worked upon
prior to any removal of sealed covers, etc.

If it is absolutely necessary to have an electrical supply to equipment during servicing, then a permanently operating form
of leak detection shall be located at the most critical point to warn of a potentially hazardous situation.

Particular attention shall be paid to the following to ensure that by working on electrical components, the casing is not
altered in such a way that the level of protection is affected. This shall include damage to cables, excessive number of
connections, terminals not made to original specification, damage to seals, incorrect fitting of glands, etc.

Ensure that apparatus is mounted securely.

Ensure that seals or sealing materials have not degraded such that they no longer serve the purpose of preventing the
ingress of flammable atmospheres.

Replacement parts shall be in accordance with the manufacturer’s specifications.
NOTE:

The use of silicon sealant may inhibit the effectiveness of some types of leak detection equipment.
Intrinsically safe components do not have to be isolated prior to working on them.

4.

Repair to intrinsically safe components

Do not apply any permanent inductive or capacitance loads to the circuit without ensuring that this will not exceed the
permissible voltage and current permitted for the equipment in use.

Intrinsically safe components are the only types that can be worked on while live in the presence of a flammable
atmosphere.

The test apparatus shall be at the correct rating.

Replace components only with parts specified by the manufacturer. Unspecified parts by manufacturer may result ignition
of refrigerant in the atmosphere from a leak.

5.

Cabling

Check that cabling will not be subject to wear, corrosion, excessive pressure, vibration, sharp edges or any other adverse
environmental effects.

The check shall also take into account the effects of aging or continual vibration from sources such as compressors or
fans.

6.

Detection of flammable refrigerants

Under no circumstances shall potential sources of ignition be used in the searching or detection of refrigerant leaks.

A halide torch (or any other detector using a naked flame) shall not be used.

--- Page 10 ---
CAUTION

7.

The following leak detection methods are deemed acceptable for all refrigerant systems.

No leaks shall be detected when using detection equipment with a sensitivity of 5 grams per year of refrigerant or better
under a pressure of at least 0,25 times the maximum allowable pressure (>0.98MPa, max 3.90MPa). For example, a
universal sniffer.

Electronic leak detectors may be used to detect flammable refrigerants, but the sensitivity may not be adequate, or may
need re-calibration.
(Detection equipment shall be calibrated in a refrigerant-free area.)

Ensure that the detector is not a potential source of ignition and is suitable for the refrigerant used.

Leak detection equipment shall be set at a percentage of the LFL of the refrigerant and shall be calibrated to the refrigerant
employed and the appropriate percentage of gas (25 % maximum) is confirmed.

Leak detection fluids are also suitable for use with most refrigerants, for example, bubble method and fluorescent method
agents. The use of detergents containing chlorine shall be avoided as the chlorine may react with the refrigerant and
corrode the copper pipe-work.

If a leak is suspected, all ignition sources shall be removed/extinguished.

If a leakage of refrigerant is found which requires brazing, all of the refrigerant shall be recovered from the system.
The precautions in #8 must be followed to remove the refrigerant.
Removal and evacuation

When breaking into the refrigerant circuit to make repairs – or for any other purpose – conventional procedures shall be
used.
However, it is important that best practice is followed since flammability is a consideration.
The following procedure shall be adhered to:
• remove refrigerant -> • purge the circuit with inert gas -> • evacuate -> • purge with inert gas ->
• open the circuit by cutting.
Brazing must not be used.

8.











9.

The refrigerant charge shall be recovered into the correct recovery cylinders.
The system shall be purged with OFN to render the appliance safe. (remark: OFN = oxygen free nitrogen, type of inert gas)
This process may need to be repeated several times.
Compressed air or oxygen shall not be used for this task.
Purging shall be achieved by breaking the vacuum in the system with OFN and continuing to fill until the working pressure
is achieved, then venting to atmosphere, and finally pulling down to a vacuum.
This process shall be repeated until no refrigerant is within the system. (Until the concentration of purge gas is 0.25 LFL or
less by the leak detector). 0.25LFL = 0.525Vol%
When the final OFN charge is used, the system shall be vented down to atmospheric pressure to enable work to take
place.
This operation is absolutely vital if brazing operations on the pipe work are to take place.
Ensure that the outlet for the vacuum pump is not close to any potential ignition sources and there is ventilation available.

Charging procedures

In addition to conventional charging procedures, the following requirements shall be followed.
Ensure that contamination of different refrigerants does not occur when using charging equipment.
Hoses or lines shall be as short as possible to minimize the amount of refrigerant contained in them.
Cylinders shall be kept in an appropriate position according to the instructions.
Ensure that the refrigerating system is earthed prior to charging the system with refrigerant.
Label the system when charging is complete (if not already).
Extreme care shall be taken not to over fill the refrigerating system.

Prior to recharging the system it shall be pressure tested with OFN (refer to #8).

The system shall be leak tested on completion of charging but prior to commissioning.

A follow up leak test shall be carried out prior to leaving the site.

Electrostatic charge may accumulate and create a hazardous condition when charging and discharging the refrigerant.
To avoid fire or explosion, dissipate static electricity during transfer by grounding and bonding containers and equipment
before charging/discharging.

--- Page 11 ---
CAUTION
Decommissioning

Before carrying out this procedure, it is essential that the technician is completely familiar with the equipment and all its
details.

It is recommended good practice that all refrigerants are recovered safely.

Re-use of recovered refrigerant is prohibited.

It is essential that electrical power is available before the task is commenced.
a) Become familiar with the equipment and its operation.
b) Isolate system electrically.
c) Before attempting the procedure ensure that:
• mechanical handling equipment is available, if required, for handling refrigerant cylinders;
• all personal protective equipment and leak detectors are available and being used correctly;
• the recovery process is supervised at all times by a competent person;
• recovery equipment and cylinders conform to the appropriate standards.

10.

d)
e)
f)
g)
h)



Make sure that cylinder is situated on the scales before recovery takes place.
Start the recovery machine and operate in accordance with instructions.
Do not over fill cylinders. (No more than 80 % volume liquid charge).
Do not exceed the maximum working pressure of the cylinder, even temporarily.
When the cylinders have been filled correctly and the process completed, make sure that the cylinders and the
equipment are removed from site promptly and all isolation valves on the equipment are closed off.
Electrostatic charge may accumulate and create a hazardous condition when charging or discharging the refrigerant.
To avoid fire or explosion, dissipate static electricity during transfer by grounding and bonding containers and equipment
before charging/discharging.

11.

Labelling

Equipment shall be labelled stating that it has been de-commissioned and emptied of refrigerant.

The label shall be dated and signed.

Ensure that there are labels on the equipment stating the equipment contains flammable refrigerant.

12.

Recovery

When removing refrigerant from a system, either for servicing or decommissioning, it is recommended good practice that
all refrigerants are removed safely.

When transferring refrigerant into cylinders, ensure that only appropriate refrigerant recovery cylinders are employed.

Ensure that the correct number of cylinders for holding the total system charge are available.

All cylinders to be used are designated for the recovered refrigerant and labelled for that refrigerant (i.e. special cylinders
for the recovery of refrigerant).

Cylinders shall be complete with pressure relief valve and associated shut-off valves in good working order.

Recovery cylinders are evacuated and, if possible, cooled before recovery occurs.

The recovery equipment shall be in good working order with a set of instructions concerning the equipment that is at hand
and shall be suitable for the recovery of flammable refrigerants.

Make sure the recovery equipment is not a potential ignition source and is suitable for the refrigerant you are using.

In addition, a set of calibrated weighing scales shall be available and in good working order.

Hoses shall be complete with leak-free disconnect couplings and in good condition.

Before using the recovery machine, check that it is in satisfactory working order, has been properly maintained and that
any associated electrical components are sealed to prevent ignition in the event of a refrigerant release.
Consult manufacturer if in doubt.

The recovered refrigerant shall be returned to the refrigerant supplier in the correct recovery cylinder, and the relevant
Waste Transfer Note arranged.

Do not mix refrigerants in recovery units and especially not in cylinders.

If compressors or compressor oils are to be removed, ensure that they have been evacuated to an acceptable level to
make certain that flammable refrigerant does not remain within the lubricant.

The evacuation process shall be carried out prior to returning the compressor to the suppliers.

Only electric heating to the compressor body shall be employed to accelerate this process.

When oil is drained from a system, it shall be carried out safely.

--- Page 12 ---
3. Specifications
3.1

WH-ADC0509L3E51 WH-WDG05LE5
Item

Unit

Outdoor Unit
EN 14511

Performance Test Condition

EN 14825
Condition
(Ambient/Water)

Cooling Capacity

Cooling EER

A35W7

kW

5.00

BTU/h

17100

W/W

3.23

Condition
(Ambient/Water)
Heating Capacity

Heating COP

kW

5.00

5.00

17100

17100

W/W

5.05

3.52

Application

Climate

Pdesign

kW

Tbivalent / TOL
Annual Consumption

6.0

-10 / -10

-15 / -22
4.25 / 167

kWh

1113

2040

3483

A+++

A+++

A++

Warmer

Average

Colder

5.0

5.0

6.0

Climate

Pdesign

kW
°C

2/2

-10 / -10

-15 / -22

(W/W) / %

4.27 / 168

3.63 / 142

3.28 / 128

kWh

DHW

1565

2849

4516

A+++

A++

A++

Warmer

Average

Colder

Application

Climate

COP / nwh

(W/W) / %

3.35 / 134

2.88 / 115

2.26 / 90

kWh

384

447

569

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: -

Heating: -

Heating: -

Power Level dB

Cooling: 61***

Heating: 57***
Heating: 52***

Heating: 57***
Heating: 52***

AEC

Noise Level

m3/min (ft3/min)

Air Flow
Refrigeration Control Device

Cooling: 55.0 (1942)
Heating: 45.0 (1589)
Expansion Valve

Refrigeration Oil

cm3

Refrigerant

kg (oz)

Net Weight

5.0
5.06 / 200

Class

Dimension

5.0
2/2

Tbivalent / TOL

F-GAS

Colder

6.00 / 237

Application

Annual Consumption

Average

°C

Medium Temperature Application (W55)

SCOP / ns

Warmer

(W/W) / %

Class

Heating Erp

A2W35

BTU/h
Low Temperature Application (W35)

SCOP / ns

A7W35

PZ68S (1100)
R290, 0.96 (33.9) (Pre-charged)
(-) (Maximum)

GWP

3

CO2eq (ton) (Precharged / Maximum)

0.003 / -

Height

mm (inch)

996 (39-7/32)

Width

mm (inch)

980 (38-37/64)

Depth

mm (inch)

430 (16-59/64)

kg (lbs)

98 (216)

--- Page 13 ---
Item
Pipe Diameter (Inner)

Unit

Outdoor Unit

mm

20

Standard Length

m (ft)

5.0 (16.4)

Maximum Pipe Length

m (ft)

30.0 (98.4)

m (ft)

10 (32.8)

I/D & O/D Height Difference
Water Pipe Connector

Indoor
Outdoor

1

inch

1

Type
Compressor

Hermetic Motor Compressor (Rotary)

Motor Type
Rated Output

Synchronous Electric Motor (4-poles)
kW

1.70

Type

Propeller Fan

Material

PP

Motor Type
Fan

kW

Output Power

W

120

rpm

Cooling: 520
Heating: 440

Fan Speed

Heat Exchanger

DC (8-poles)

Input Power

1.089 (Heating) / 1.705 (Cooling)

Fin material

Aluminium (Blue Coat)

Fin Type

Corrugated Fin

Row × Stage × FPI
Size (W × H × L)

2 × 46 × 19
mm

36.38 × 966 × 880.6 : 908.6

Type

Brazed Plate

No. of Plates
Hot Water Coil

Size (W x H x L)
Water Flow Rate

Power Source (Phase, Voltage, Cycle)

Input Power
Maximum Input Power For Heatpump System

26
mm

57.8 × 524 × 117
Cooling: 14.3 (0.9)
Heating: 14.3 (0.9)

3

l/min (m /h)
Ø

Single

V

230

Hz

50

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

kW

Cooling: 1.55

Heating: 0.99

Heating: 1.42

kW

2.93

Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 2.93k

Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 3.00k

Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

-/-/-

Starting Current

A

6.9

Running Current

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

A

Cooling: 6.9

Heating: 4.4

Heating: 6.3

Maximum Current For Heatpump System
Power Factor
Power factor means total figure of compressor and
outdoor fan motor.
Power Cord

A

13.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

%

Cooling: 98

Heating: 98

Heating: 98

Number of core
Length

m (ft)

-

Thermostat

Electronic Control

Protection Device

Electronic Control

Pressure Relief Valve Water Circuit

kPa

Open: 300, Close: 210 and below

--- Page 14 ---
Item

Unit

Indoor Unit
EN 14511

Performance Test Condition
Outdoor Ambient

°C (min. / max.)

Operation Range
Water Outlet

Internal Pressure Differential

Noise Level

Dimension

°C (min. / max.)

Cooling: 5 / 20
Heating (Tank): - / 65*3,
Heating (Circuit): 20 / 55 (Below Ambient -20 °C) *4
Heating (Circuit): 20 / 75 (Above Ambient -10 °C) *4

kPa

Cooling: 18.0
Heating: 18.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: 31***

Heating: 31***

Heating: 31***

Power Level dB

Cooling: 44***

Heating: 44***

Heating: 44***

Depth

mm (inch)

602 (23-45/64)

Width

mm (inch)

599 (23-37/64)

Height

mm (inch)

1293 (50-7/8)

kg (lbs)

79 (174)

Room

mm (inch)

31 (1-1/4)

Shower

mm (inch)

19 (3/4)

Net Weight
Water Pipe Diameter

Water Drain Hose Inner Diameter

mm (inch)

Motor Type
Pump

7 (Software Selection)
W

145

Type
Measuring range

12.00 (17/36)
Brushless DC Motor (Sensorless vector control system)

No. of Speed
Input Power

Flow Sensor

EN 14825
Cooling: 10 / 43
Heating (Tank): -25 / 35
Heating (Circuit): -25 / 35

Vortex (Piezoelectric sensor)
l/min

5 ~ 60

Pressure Transducer (Range)

bar

0~4

Protection Device

A

Earth Leakage Circuit Breaker (30 ~ 40)

Volume

I

10

MWP

bar

3

Expansion Vessel

Capacity of Integrated Electric Heater / OLP TEMP
Tank Volume (Spec / Nett)

kW / °C

3.00 / 85

L

127 / 120

Max. Tank Water Set Temperature

°C

65

Tank Coil Surface

m2

1.8

Maximum Working
Pressure
Operating Pressure

Heat / Cool

Bar

3.0

Tank Circuit

Bar

10.0

Tank Unit

Bar

3.5

Expansion Relief Valve

Bar

8.0

Expansion Vessel Pre-charge Pressure (DHW Circuit)

Bar

3.5

Pressure Reducing Valve Set Pressure (DHW Circuit)

Bar

3.5

--- Page 15 ---
Item

Unit

Indoor Unit

Material
Pressure Vessel

EN14511

Volume

L

120

Design Pressure

Bar

10

Material
Heat Exchanger

DHW Tank

EN-1.4521

Diameter

mm

22

Thickness

mm

0.65

Surface Area

m2

1.3

Total Length

m

18.5

Total Corrosion ion
(Chloride + Sulphate
+ Nitric)

mg/L

< 150

Conductivity @ Water
Tank
Water Temperature
< 60ºC

µS/cm

< 1250

Conductivity @ Water
Tank
Water Temperature
< 65ºC

µS/cm

< 1200

Saturation Index (LSI)
@ 20ºC

> -4.0 / < 0.4

PH

6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
-8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
ΔT=5°C.
 EER and COP classification is at 230V only in occordance with EU directive 2003/32/EC.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
(Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 *** The sound power level is measured with accordance to EN12102 under full load conditions. (Test carry out for
cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and water out 55°C)
 *3 When outdoor ambient is under -10°C, only the backup heater operate above 55°C.
 *4 Between outdoor ambient -10°C and -20°C, the water outlet temperature gradually decreases from 75°C to
55°C.

--- Page 16 ---
3.2

WH-ADC0509L3E51 WH-WDG07LE5
Item

Unit

Outdoor Unit
EN 14511

Performance Test Condition

EN 14825

Cooling Capacity

Cooling EER

Heating Capacity

Heating COP

Condition
(Ambient/Water)

A35W7

kW

7.00

BTU/h

23900

W/W

3.03

Condition
(Ambient/Water)

A7W35

A2W35

kW

7.00

6.85

BTU/h

23900

23400

W/W

4.93

3.43

Low Temperature Application (W35)
kW

7.0

7.0

7.0

Tbivalent / TOL

°C

2/2

-10 / -10

-17 / -22

(W/W) / %

6.31 / 249

4.96 / 195

4.25 / 167

kWh

1483

2916

4060

A+++

A+++

A++

Warmer

Average

Colder

Class
Medium Temperature Application (W55)
Application

Climate

Pdesign

kW

6.0

7.0

7.0

Tbivalent / TOL

°C

2/2

-7 / -10

-15 / -22

(W/W) / %

4.52 / 178

3.62 / 142

3.29 / 129

kWh

1775

3991

5241

A+++

A++

A++

Warmer

Average

Colder

SCOP / ns
Annual Consumption
Class
DHW
Application

Climate

COP / nwh

(W/W) / %

3.35 / 134

2.88 / 115

2.26 / 90

AEC

Noise Level

kWh

384

447

569

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: -

Heating: -

Heating: -

Cooling: 63***

Heating: 60***
Heating: 53***

Heating: 60***
Heating: 53***

Power Level dB
m3/min (ft3/min)

Air Flow
Refrigeration Control Device

cm

Refrigerant

kg (oz)

Net Weight

Cooling: 57.0 (2013)
Heating: 51.0 (1801)
Expansion Valve

3

Refrigeration Oil

Dimension

Colder

Pdesign

Annual Consumption

F-GAS

Average

Climate

SCOP / ns

Heating Erp

Warmer

Application

PZ68S (1100)
R290, 0.96 (33.9) (Pre-charged)
(-) (Maximum)

GWP

3

2

CO eq (ton) (Precharged / Maximum)

0.003 / -

Height

mm (inch)

996 (39-7/32)

Width

mm (inch)

980 (38-37/64)

Depth

mm (inch)

430 (16-59/64)

kg (lbs)

98 (216)

--- Page 17 ---
Item
Pipe Diameter (Inner)

Unit

Outdoor Unit

mm

25

Standard Length

m (ft)

5.0 (16.4)

Maximum Pipe Length

m (ft)

30.0 (98.4)

m (ft)

10 (32.8)

I/D & O/D Height Difference
Water Pipe Connector

Indoor
Outdoor

1

inch

1

Type
Compressor

Hermetic Motor Compressor (Rotary)

Motor Type
Rated Output

Synchronous Electric Motor (4-poles)
kW

1.70

Type

Propeller Fan

Material

PP

Motor Type
Fan

kW

Output Power

W

120

rpm

Cooling: 540
Heating: 490

Fan Speed

Heat Exchanger

DC (8-poles)

Input Power

1.562 (Heating) / 2.541 (Cooling)

Fin material

Aluminium (Blue Coat)

Fin Type

Corrugated Fin

Row × Stage × FPI
Size (W × H × L)

2 × 46 × 19
mm

36.38 × 966 × 880.6 : 908.6

Type

Brazed Plate

No. of Plates
Hot Water Coil

Size (W x H x L)
Water Flow Rate

Power Source (Phase, Voltage, Cycle)

Input Power
Maximum Input Power For Heatpump System

26
mm

57.8 × 524 × 117
Cooling: 20.1 (1.2)
Heating: 20.1 (1.2)

3

l/min (m /h)
Ø

Single

V

230

Hz

50

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

kW

Cooling: 2.31

Heating: 1.42

Heating: 2.00

kW

3.56

Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 15.8 / 3.56k

Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 3.00k

Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

-/-/-

Starting Current

A

10.2

Running Current

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

A

Cooling: 10.2

Heating: 6.3

Heating: 8.9

Maximum Current For Heatpump System
Power Factor
Power factor means total figure of compressor and
outdoor fan motor.
Power Cord

A

15.8

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

%

Cooling: 98

Heating: 98

Heating: 98

Number of core
Length

m (ft)

-

Thermostat

Electronic Control

Protection Device

Electronic Control

Pressure Relief Valve Water Circuit

kPa

Open: 300, Close: 210 and below

--- Page 18 ---
Item

Unit

Indoor Unit
EN 14511

Performance Test Condition
Outdoor Ambient

°C (min. / max.)

Operation Range
Water Outlet

Internal Pressure Differential

Noise Level

Dimension

°C (min. / max.)

Cooling: 5 / 20
Heating (Tank): - / 65*3,
Heating (Circuit): 20 / 55 (Below Ambient -20 °C) *4
Heating (Circuit): 20 / 75 (Above Ambient -10 °C) *4

kPa

Cooling: 25.0
Heating: 25.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: 31***

Heating: 31***

Heating: 31***

Power Level dB

Cooling: 44***

Heating: 44***

Heating: 44***

Depth

mm (inch)

602 (23-45/64)

Width

mm (inch)

599 (23-37/64)

Height

mm (inch)

1293 (50-7/8)

kg (lbs)

79 (174)

Room

mm (inch)

31 (1-1/4)

Shower

mm (inch)

19 (3/4)

Net Weight
Water Pipe Diameter

Water Drain Hose Inner Diameter

mm (inch)

Motor Type
Pump

7 (Software Selection)
W

145

Type
Measuring range

12.00 (17/36)
Brushless DC Motor (Sensorless vector control system)

No. of Speed
Input Power

Flow Sensor

EN 14825
Cooling: 10 / 43
Heating (Tank): -25 / 35
Heating (Circuit): -25 / 35

Vortex (Piezoelectric sensor)
l/min

5 ~ 60

Pressure Transducer (Range)

bar

0~4

Protection Device

A

Earth Leakage Circuit Breaker (30 ~ 40)

Volume

I

10

MWP

bar

3

Expansion Vessel

Capacity of Integrated Electric Heater / OLP TEMP
Tank Volume (Spec / Nett)

kW / °C

3.00 / 85

L

127 / 120

Max. Tank Water Set Temperature

°C

65

Tank Coil Surface

m2

1.8

Maximum Working
Pressure
Operating Pressure

Heat / Cool

Bar

3.0

Tank Circuit

Bar

10.0

Tank Unit

Bar

3.5

Expansion Relief Valve

Bar

8.0

Expansion Vessel Pre-charge Pressure (DHW Circuit)

Bar

3.5

Pressure Reducing Valve Set Pressure (DHW Circuit)

Bar

3.5

--- Page 19 ---
Item

Unit

Indoor Unit

Material
Pressure Vessel

EN14511

Volume

L

120

Design Pressure

Bar

10

Material
Heat Exchanger

DHW Tank

EN-1.4521

Diameter

mm

22

Thickness

mm

0.65

Surface Area

m2

1.3

Total Length

m

18.5

Total Corrosion ion
(Chloride + Sulphate
+ Nitric)

mg/L

< 150

Conductivity @ Water
Tank
Water Temperature
< 60ºC

µS/cm

< 1250

Conductivity @ Water
Tank
Water Temperature
< 65ºC

µS/cm

< 1200

Saturation Index (LSI)
@ 20ºC

> -4.0 / < 0.4

PH

6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
-8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
ΔT=5°C.
 EER and COP classification is at 230V only in occordance with EU directive 2003/32/EC.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
(Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 *** The sound power level is measured with accordance to EN12102 under full load conditions. (Test carry out for
cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and water out 55°C)
 *3 When outdoor ambient is under -10°C, only the backup heater operate above 55°C.
 *4 Between outdoor ambient -10°C and -20°C, the water outlet temperature gradually decreases from 75°C to
55°C.

--- Page 20 ---
3.3

WH-ADC0509L3E51 WH-WDG09LE5
Item

Unit

Outdoor Unit
EN 14511

Performance Test Condition

EN 14825

Cooling Capacity

Cooling EER

Heating Capacity

Heating COP

Condition
(Ambient/Water)

A35W7

kW

8.20

BTU/h

28000

W/W

2.82

Condition
(Ambient/Water)

A7W35

A2W35

kW

9.00

7.00

BTU/h

30700

23900

W/W

4.55

3.41

Low Temperature Application (W35)
kW

7.0

8.0

9.0

Tbivalent / TOL

°C

2/2

-10 / -10

-15 / -22

(W/W) / %

6.44 / 255

4.84 / 190

4.31 / 170

kWh

1453

3417

5142

A+++

A+++

A++

Warmer

Average

Colder

Class
Medium Temperature Application (W55)
Application

Climate

Pdesign

kW

7.0

8.0

8.0

Tbivalent / TOL

°C

2/2

-7 / -10

-15 / -22

(W/W) / %

4.50 / 177

3.67 / 144

3.33 / 130

kWh

2080

4499

5915

A+++

A++

A++

Warmer

Average

Colder

SCOP / ns
Annual Consumption
Class
DHW
Application

Climate

COP / nwh

(W/W) / %

3.35 / 134

2.88 / 115

2.26 / 90

AEC

Noise Level

kWh

384

447

569

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: -

Heating: -

Heating: -

Cooling: 63***

Heating: 63***
Heating: 54***

Heating: 63***
Heating: 54***

Power Level dB
m3/min (ft3/min)

Air Flow
Refrigeration Control Device

cm

Refrigerant

kg (oz)

Net Weight

Cooling: 61.0 (2154)
Heating: 74.0 (2613)
Expansion Valve

3

Refrigeration Oil

Dimension

Colder

Pdesign

Annual Consumption

F-GAS

Average

Climate

SCOP / ns

Heating Erp

Warmer

Application

PZ68S (1100)
R290, 1.00 (35.3) (Pre-charged)
(-) (Maximum)

GWP

3

2

CO eq (ton) (Precharged / Maximum)

0.003 / -

Height

mm (inch)

996 (39-7/32)

Width

mm (inch)

980 (38-37/64)

Depth

mm (inch)

430 (16-59/64)

kg (lbs)

97 (214)

--- Page 21 ---
Item
Pipe Diameter (Inner)

Unit

Outdoor Unit

mm

25

Standard Length

m (ft)

5.0 (16.4)

Maximum Pipe Length

m (ft)

30.0 (98.4)

m (ft)

10 (32.8)

I/D & O/D Height Difference
Water Pipe Connector

Indoor
Outdoor

1

inch

1

Type
Compressor

Hermetic Motor Compressor (Rotary)

Motor Type
Rated Output

Synchronous Electric Motor (4-poles)
kW

1.70

Type

Propeller Fan

Material

PP

Motor Type
Fan

kW

Output Power

W

120

rpm

Cooling: 570
Heating: 560

Fan Speed

Heat Exchanger

DC (8-poles)

Input Power

2.178 (Heating) / 3.201 (Cooling)

Fin material

Aluminium (Blue Coat)

Fin Type

Corrugated Fin

Row × Stage × FPI
Size (W × H × L)

2 × 46 × 19
mm

36.38 × 966 × 880.6 : 908.6

Type

Brazed Plate

No. of Plates
Hot Water Coil

Size (W x H x L)
Water Flow Rate

Power Source (Phase, Voltage, Cycle)

Input Power
Maximum Input Power For Heatpump System

26
mm

57.8 × 524 × 117
Cooling: 23.5 (1.4)
Heating: 25.8 (1.5)

3

l/min (m /h)
Ø

Single

V

230

Hz

50

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

kW

Cooling: 2.91

Heating: 1.98

Heating: 2.05

kW

3.56

Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 15.8 / 3.56k

Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 3.00k

Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

-/-/-

Starting Current

A

12.9

Running Current

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

A

Cooling: 12.9

Heating: 8.8

Heating: 9.1

Maximum Current For Heatpump System
Power Factor
Power factor means total figure of compressor and
outdoor fan motor.
Power Cord

A

15.8

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

%

Cooling: 98

Heating: 98

Heating: 98

Number of core
Length

m (ft)

-

Thermostat

Electronic Control

Protection Device

Electronic Control

Pressure Relief Valve Water Circuit

kPa

Open: 300, Close: 210 and below

--- Page 22 ---
Item

Unit

Indoor Unit
EN 14511

Performance Test Condition
Outdoor Ambient

°C (min. / max.)

Operation Range
Water Outlet

Internal Pressure Differential

Noise Level

Dimension

°C (min. / max.)

Cooling: 5 / 20
Heating (Tank): - / 65*3,
Heating (Circuit): 20 / 55 (Below Ambient -20 °C) *4
Heating (Circuit): 20 / 75 (Above Ambient -10 °C) *4

kPa

Cooling: 32.0
Heating: 36.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: 31***

Heating: 31***

Heating: 31***

Power Level dB

Cooling: 44***

Heating: 44***

Heating: 44***

Depth

mm (inch)

602 (23-45/64)

Width

mm (inch)

599 (23-37/64)

Height

mm (inch)

1293 (50-7/8)

kg (lbs)

79 (174)

Room

mm (inch)

31 (1-1/4)

Shower

mm (inch)

19 (3/4)

Net Weight
Water Pipe Diameter

Water Drain Hose Inner Diameter

mm (inch)

Motor Type
Pump

7 (Software Selection)
W

145

Type
Measuring range

12.00 (17/36)
Brushless DC Motor (Sensorless vector control system)

No. of Speed
Input Power

Flow Sensor

EN 14825
Cooling: 10 / 43
Heating (Tank): -25 / 35
Heating (Circuit): -25 / 35

Vortex (Piezoelectric sensor)
l/min

5 ~ 60

Pressure Transducer (Range)

bar

0~4

Protection Device

A

Earth Leakage Circuit Breaker (30 ~ 40)

Volume

I

10

MWP

bar

3

Expansion Vessel

Capacity of Integrated Electric Heater / OLP TEMP
Tank Volume (Spec / Nett)

kW / °C

3.00 / 85

L

127 / 120

Max. Tank Water Set Temperature

°C

65

Tank Coil Surface

m2

1.8

Maximum Working
Pressure
Operating Pressure

Heat / Cool

Bar

3.0

Tank Circuit

Bar

10.0

Tank Unit

Bar

3.5

Expansion Relief Valve

Bar

8.0

Expansion Vessel Pre-charge Pressure (DHW Circuit)

Bar

3.5

Pressure Reducing Valve Set Pressure (DHW Circuit)

Bar

3.5

--- Page 23 ---
Item

Unit

Indoor Unit

Material
Pressure Vessel

EN14511

Volume

L

120

Design Pressure

Bar

10

Material
Heat Exchanger

DHW Tank

EN-1.4521

Diameter

mm

22

Thickness

mm

0.65

Surface Area

m2

1.3

Total Length

m

18.5

Total Corrosion ion
(Chloride + Sulphate
+ Nitric)

mg/L

< 150

Conductivity @ Water
Tank
Water Temperature
< 60ºC

µS/cm

< 1250

Conductivity @ Water
Tank
Water Temperature
< 65ºC

µS/cm

< 1200

Saturation Index (LSI)
@ 20ºC

> -4.0 / < 0.4

PH

6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
-8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
ΔT=5°C.
 EER and COP classification is at 230V only in occordance with EU directive 2003/32/EC.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
(Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 *** The sound power level is measured with accordance to EN12102 under full load conditions. (Test carry out for
cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and water out 55°C)
 *3 When outdoor ambient is under -10°C, only the backup heater operate above 55°C.
 *4 Between outdoor ambient -10°C and -20°C, the water outlet temperature gradually decreases from 75°C to
55°C.

--- Page 24 ---
3.4

WH-ADC0509L3E5UK1 WH-WDG05LE5
Item

Unit

Outdoor Unit
EN 14511

Performance Test Condition

EN 14825

Cooling Capacity

Cooling EER

Heating Capacity

Heating COP

Condition
(Ambient/Water)

A35W7

kW

5.00

BTU/h

17100

W/W

3.23

Condition
(Ambient/Water)

A7W35

A2W35

kW

5.00

5.00

BTU/h

17100

17100

W/W

5.05

3.52

Low Temperature Application (W35)
kW

5.0

5.0

6.0

Tbivalent / TOL

°C

2/2

-10 / -10

-15 / -22

(W/W) / %

6.00 / 237

5.06 / 200

4.25 / 167

kWh

1113

2040

3483

A+++

A+++

A++

Warmer

Average

Colder

Class
Medium Temperature Application (W55)
Application

Climate

Pdesign

kW

5.0

5.0

6.0

Tbivalent / TOL

°C

2/2

-10 / -10

-15 / -22

(W/W) / %

4.27 / 168

3.63 / 142

3.28 / 128

kWh

1565

2849

4516

A+++

A++

A++

Warmer

Average

Colder

SCOP / ns
Annual Consumption
Class
DHW
Application

Climate

COP / nwh

(W/W) / %

3.35 / 134

2.88 / 115

2.26 / 90

AEC

Noise Level

kWh

384

447

569

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: -

Heating: -

Heating: -

Cooling: 61***

Heating: 57***
Heating: 52***

Heating: 57***
Heating: 52***

Power Level dB
m3/min (ft3/min)

Air Flow
Refrigeration Control Device

cm

Refrigerant

kg (oz)

Net Weight

Cooling: 55.0 (1942)
Heating: 45.0 (1589)
Expansion Valve

3

Refrigeration Oil

Dimension

Colder

Pdesign

Annual Consumption

F-GAS

Average

Climate

SCOP / ns

Heating Erp

Warmer

Application

PZ68S (1100)
R290, 0.96 (33.9) (Pre-charged)
(-) (Maximum)

GWP

3

2

CO eq (ton) (Precharged / Maximum)

0.003 / -

Height

mm (inch)

996 (39-7/32)

Width

mm (inch)

980 (38-37/64)

Depth

mm (inch)

430 (16-59/64)

kg (lbs)

98 (216)

--- Page 25 ---
Item
Pipe Diameter (Inner)

Unit

Outdoor Unit

mm

20

Standard Length

m (ft)

5.0 (16.4)

Maximum Pipe Length

m (ft)

30.0 (98.4)

m (ft)

10 (32.8)

I/D & O/D Height Difference
Water Pipe Connector

Indoor
Outdoor

1

inch

1

Type
Compressor

Hermetic Motor Compressor (Rotary)

Motor Type
Rated Output

Synchronous Electric Motor (4-poles)
kW

1.70

Type

Propeller Fan

Material

PP

Motor Type
Fan

kW

Output Power

W

120

rpm

Cooling: 520
Heating: 440

Fan Speed

Heat Exchanger

DC (8-poles)

Input Power

1.089 (Heating) / 1.705 (Cooling)

Fin material

Aluminium (Blue Coat)

Fin Type

Corrugated Fin

Row × Stage × FPI
Size (W × H × L)

2 × 46 × 19
mm

36.38 × 966 × 880.6 : 908.6

Type

Brazed Plate

No. of Plates
Hot Water Coil

Size (W x H x L)
Water Flow Rate

Power Source (Phase, Voltage, Cycle)

Input Power
Maximum Input Power For Heatpump System

26
mm

57.8 × 524 × 117
Cooling: 14.3 (0.9)
Heating: 14.3 (0.9)

3

l/min (m /h)
Ø

Single

V

230

Hz

50

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

kW

Cooling: 1.55

Heating: 0.99

Heating: 1.42

kW

2.93

Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 2.93k

Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 3.00k

Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

-/-/-

Starting Current

A

6.9

Running Current

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

A

Cooling: 6.9

Heating: 4.4

Heating: 6.3

Maximum Current For Heatpump System
Power Factor
Power factor means total figure of compressor and
outdoor fan motor.
Power Cord

A

13.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

%

Cooling: 98

Heating: 98

Heating: 98

Number of core
Length

m (ft)

-

Thermostat

Electronic Control

Protection Device

Electronic Control

Pressure Relief Valve Water Circuit

kPa

Open: 300, Close: 210 and below

--- Page 26 ---
Item

Unit

Indoor Unit
EN 14511

Performance Test Condition
Outdoor Ambient

°C (min. / max.)

Operation Range
Water Outlet

Internal Pressure Differential

Noise Level

Dimension

°C (min. / max.)

Cooling: 5 / 20
Heating (Tank): - / 65*3,
Heating (Circuit): 20 / 55 (Below Ambient -20 °C) *4
Heating (Circuit): 20 / 75 (Above Ambient -10 °C) *4

kPa

Cooling: 18.0
Heating: 18.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: 31***

Heating: 31***

Heating: 31***

Power Level dB

Cooling: 44***

Heating: 44***

Heating: 44***

Depth

mm (inch)

602 (23-45/64)

Width

mm (inch)

599 (23-37/64)

Height

mm (inch)

1293 (50-7/8)

kg (lbs)

79 (174)

Room

mm (inch)

31 (1-1/4)

Shower

mm (inch)

19 (3/4)

Net Weight
Water Pipe Diameter

Water Drain Hose Inner Diameter

mm (inch)

Motor Type
Pump

7 (Software Selection)
W

145

Type
Measuring range

12.00 (17/36)
Brushless DC Motor (Sensorless vector control system)

No. of Speed
Input Power

Flow Sensor

EN 14825
Cooling: 10 / 43
Heating (Tank): -25 / 35
Heating (Circuit): -25 / 35

Vortex (Piezoelectric sensor)
l/min

5 ~ 60

Pressure Transducer (Range)

bar

0~4

Protection Device

A

Earth Leakage Circuit Breaker (30 ~ 40)

Volume

I

10

MWP

bar

3

Expansion Vessel

Capacity of Integrated Electric Heater / OLP TEMP
Tank Volume (Spec / Nett)

kW / °C

3.00 / 85

L

127 / 120

Max. Tank Water Set Temperature

°C

65

Tank Coil Surface

m2

1.8

Maximum Working
Pressure
Operating Pressure

Heat / Cool

Bar

3.0

Tank Circuit

Bar

10.0

Tank Unit

Bar

3.5

Expansion Relief Valve

Bar

10.0

Expansion Vessel Pre-charge Pressure (DHW Circuit)

Bar

3.5

Pressure Reducing Valve Set Pressure (DHW Circuit)

Bar

3.5

--- Page 27 ---
Item

Unit

Indoor Unit

Material
Pressure Vessel

EN14511

Volume

L

120

Design Pressure

Bar

10

Material
Heat Exchanger

DHW Tank

EN-1.4521

Diameter

mm

22

Thickness

mm

0.65

Surface Area

m2

1.3

Total Length

m

18.5

Total Corrosion ion
(Chloride + Sulphate
+ Nitric)

mg/L

< 150

Conductivity @ Water
Tank
Water Temperature
< 60ºC

µS/cm

< 1250

Conductivity @ Water
Tank
Water Temperature
< 65ºC

µS/cm

< 1200

Saturation Index (LSI)
@ 20ºC

> -4.0 / < 0.4

PH

6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
-8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
ΔT=5°C.
 EER and COP classification is at 230V only in occordance with EU directive 2003/32/EC.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
(Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 *** The sound power level is measured with accordance to EN12102 under full load conditions. (Test carry out for
cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and water out 55°C)
 *3 When outdoor ambient is under -10°C, only the backup heater operate above 55°C.
 *4 Between outdoor ambient -10°C and -20°C, the water outlet temperature gradually decreases from 75°C to
55°C.

--- Page 28 ---
3.5

WH-ADC0509L3E5UK1 WH-WDG07LE5
Item

Unit

Outdoor Unit
EN 14511

Performance Test Condition

EN 14825

Cooling Capacity

Cooling EER

Heating Capacity

Heating COP

Condition
(Ambient/Water)

A35W7

kW

7.00

BTU/h

23900

W/W

3.03

Condition
(Ambient/Water)

A7W35

A2W35

kW

7.00

6.85

BTU/h

23900

23400

W/W

4.93

3.43

Low Temperature Application (W35)
kW

7.0

7.0

7.0

Tbivalent / TOL

°C

2/2

-10 / -10

-17 / -22

(W/W) / %

6.31 / 249

4.96 / 195

4.25 / 167

kWh

1483

2916

4060

A+++

A+++

A++

Warmer

Average

Colder

Class
Medium Temperature Application (W55)
Application

Climate

Pdesign

kW

6.0

7.0

7.0

Tbivalent / TOL

°C

2/2

-7 / -10

-15 / -22

(W/W) / %

4.52 / 178

3.62 / 142

3.29 / 129

kWh

1775

3991

5241

A+++

A++

A++

Warmer

Average

Colder

SCOP / ns
Annual Consumption
Class
DHW
Application

Climate

COP / nwh

(W/W) / %

3.35 / 134

2.88 / 115

2.26 / 90

AEC

Noise Level

kWh

384

447

569

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: -

Heating: -

Heating: -

Cooling: 63***

Heating: 60***
Heating: 53***

Heating: 60***
Heating: 53***

Power Level dB
m3/min (ft3/min)

Air Flow
Refrigeration Control Device

cm

Refrigerant

kg (oz)

Net Weight

Cooling: 57.0 (2013)
Heating: 51.0 (1801)
Expansion Valve

3

Refrigeration Oil

Dimension

Colder

Pdesign

Annual Consumption

F-GAS

Average

Climate

SCOP / ns

Heating Erp

Warmer

Application

PZ68S (1100)
R290, 0.96 (33.9) (Pre-charged)
(-) (Maximum)

GWP

3

2

CO eq (ton) (Precharged / Maximum)

0.003 / -

Height

mm (inch)

996 (39-7/32)

Width

mm (inch)

980 (38-37/64)

Depth

mm (inch)

430 (16-59/64)

kg (lbs)

98 (216)

--- Page 29 ---
Item
Pipe Diameter (Inner)

Unit

Outdoor Unit

mm

25

Standard Length

m (ft)

5.0 (16.4)

Maximum Pipe Length

m (ft)

30.0 (98.4)

m (ft)

10 (32.8)

I/D & O/D Height Difference
Water Pipe Connector

Indoor
Outdoor

1

inch

1

Type
Compressor

Hermetic Motor Compressor (Rotary)

Motor Type
Rated Output

Synchronous Electric Motor (4-poles)
kW

1.70

Type

Propeller Fan

Material

PP

Motor Type
Fan

kW

Output Power

W

120

rpm

Cooling: 540
Heating: 490

Fan Speed

Heat Exchanger

DC (8-poles)

Input Power

1.562 (Heating) / 2.541 (Cooling)

Fin material

Aluminium (Blue Coat)

Fin Type

Corrugated Fin

Row × Stage × FPI
Size (W × H × L)

2 × 46 × 19
mm

36.38 × 966 × 880.6 : 908.6

Type

Brazed Plate

No. of Plates
Hot Water Coil

Size (W x H x L)
Water Flow Rate

Power Source (Phase, Voltage, Cycle)

Input Power
Maximum Input Power For Heatpump System

26
mm

57.8 × 524 × 117
Cooling: 20.1 (1.2)
Heating: 20.1 (1.2)

3

l/min (m /h)
Ø

Single

V

230

Hz

50

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

kW

Cooling: 2.31

Heating: 1.42

Heating: 2.00

kW

3.56

Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 15.8 / 3.56k

Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 3.00k

Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

-/-/-

Starting Current

A

10.2

Running Current

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

A

Cooling: 10.2

Heating: 6.3

Heating: 8.9

Maximum Current For Heatpump System
Power Factor
Power factor means total figure of compressor and
outdoor fan motor.
Power Cord

A

15.8

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

%

Cooling: 98

Heating: 98

Heating: 98

Number of core
Length

m (ft)

-

Thermostat

Electronic Control

Protection Device

Electronic Control

Pressure Relief Valve Water Circuit

kPa

Open: 300, Close: 210 and below

--- Page 30 ---
Item

Unit

Indoor Unit
EN 14511

Performance Test Condition
Outdoor Ambient

°C (min. / max.)

Operation Range
Water Outlet

Internal Pressure Differential

Noise Level

Dimension

°C (min. / max.)

Cooling: 5 / 20
Heating (Tank): - / 65*3,
Heating (Circuit): 20 / 55 (Below Ambient -20 °C) *4
Heating (Circuit): 20 / 75 (Above Ambient -10 °C) *4

kPa

Cooling: 25.0
Heating: 25.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: 31***

Heating: 31***

Heating: 31***

Power Level dB

Cooling: 44***

Heating: 44***

Heating: 44***

Depth

mm (inch)

602 (23-45/64)

Width

mm (inch)

599 (23-37/64)

Height

mm (inch)

1293 (50-7/8)

kg (lbs)

79 (174)

Room

mm (inch)

31 (1-1/4)

Shower

mm (inch)

19 (3/4)

Net Weight
Water Pipe Diameter

Water Drain Hose Inner Diameter

mm (inch)

Motor Type
Pump

7 (Software Selection)
W

145

Type
Measuring range

12.00 (17/36)
Brushless DC Motor (Sensorless vector control system)

No. of Speed
Input Power

Flow Sensor

EN 14825
Cooling: 10 / 43
Heating (Tank): -25 / 35
Heating (Circuit): -25 / 35

Vortex (Piezoelectric sensor)
l/min

5 ~ 60

Pressure Transducer (Range)

bar

0~4

Protection Device

A

Earth Leakage Circuit Breaker (30 ~ 40)

Volume

I

10

MWP

bar

3

Expansion Vessel

Capacity of Integrated Electric Heater / OLP TEMP
Tank Volume (Spec / Nett)

kW / °C

3.00 / 85

L

127 / 120

Max. Tank Water Set Temperature

°C

65

Tank Coil Surface

m2

1.8

Maximum Working
Pressure
Operating Pressure

Heat / Cool

Bar

3.0

Tank Circuit

Bar

10.0

Tank Unit

Bar

3.5

Expansion Relief Valve

Bar

10.0

Expansion Vessel Pre-charge Pressure (DHW Circuit)

Bar

3.5

Pressure Reducing Valve Set Pressure (DHW Circuit)

Bar

3.5

--- Page 31 ---
Item

Unit

Indoor Unit

Material
Pressure Vessel

EN14511

Volume

L

120

Design Pressure

Bar

10

Material
Heat Exchanger

DHW Tank

EN-1.4521

Diameter

mm

22

Thickness

mm

0.65

Surface Area

m2

1.3

Total Length

m

18.5

Total Corrosion ion
(Chloride + Sulphate
+ Nitric)

mg/L

< 150

Conductivity @ Water
Tank
Water Temperature
< 60ºC

µS/cm

< 1250

Conductivity @ Water
Tank
Water Temperature
< 65ºC

µS/cm

< 1200

Saturation Index (LSI)
@ 20ºC

> -4.0 / < 0.4

PH

6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
-8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
ΔT=5°C.
 EER and COP classification is at 230V only in occordance with EU directive 2003/32/EC.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
(Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 *** The sound power level is measured with accordance to EN12102 under full load conditions. (Test carry out for
cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and water out 55°C)
 *3 When outdoor ambient is under -10°C, only the backup heater operate above 55°C.
 *4 Between outdoor ambient -10°C and -20°C, the water outlet temperature gradually decreases from 75°C to
55°C.

--- Page 32 ---
3.6

WH-ADC0509L3E5UK1 WH-WDG09LE5
Item

Unit

Outdoor Unit
EN 14511

Performance Test Condition

EN 14825

Cooling Capacity

Cooling EER

Heating Capacity

Heating COP

Condition
(Ambient/Water)

A35W7

kW

8.20

BTU/h

28000

W/W

2.82

Condition
(Ambient/Water)

A7W35

A2W35

kW

9.00

7.00

BTU/h

30700

23900

W/W

4.55

3.41

Low Temperature Application (W35)
kW

7.0

8.0

9.0

Tbivalent / TOL

°C

2/2

-10 / -10

-15 / -22

(W/W) / %

6.44 / 255

4.84 / 190

4.31 / 170

kWh

1453

3417

5142

A+++

A+++

A++

Warmer

Average

Colder

Class
Medium Temperature Application (W55)
Application

Climate

Pdesign

kW

7.0

8.0

8.0

Tbivalent / TOL

°C

2/2

-7 / -10

-15 / -22

(W/W) / %

4.50 / 177

3.67 / 144

3.33 / 130

kWh

2080

4499

5915

A+++

A++

A++

Warmer

Average

Colder

SCOP / ns
Annual Consumption
Class
DHW
Application

Climate

COP / nwh

(W/W) / %

3.35 / 134

2.88 / 115

2.26 / 90

AEC

Noise Level

kWh

384

447

569

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: -

Heating: -

Heating: -

Cooling: 63***

Heating: 63***
Heating: 54***

Heating: 63***
Heating: 54***

Power Level dB
m3/min (ft3/min)

Air Flow
Refrigeration Control Device

cm

Refrigerant

kg (oz)

Net Weight

Cooling: 61.0 (2154)
Heating: 74.0 (2613)
Expansion Valve

3

Refrigeration Oil

Dimension

Colder

Pdesign

Annual Consumption

F-GAS

Average

Climate

SCOP / ns

Heating Erp

Warmer

Application

PZ68S (1100)
R290, 1.00 (35.3) (Pre-charged)
(-) (Maximum)

GWP

3

2

CO eq (ton) (Precharged / Maximum)

0.003 / -

Height

mm (inch)

996 (39-7/32)

Width

mm (inch)

980 (38-37/64)

Depth

mm (inch)

430 (16-59/64)

kg (lbs)

97 (214)

--- Page 33 ---
Item
Pipe Diameter (Inner)

Unit

Outdoor Unit

mm

25

Standard Length

m (ft)

5.0 (16.4)

Maximum Pipe Length

m (ft)

30.0 (98.4)

m (ft)

10 (32.8)

I/D & O/D Height Difference
Water Pipe Connector

Indoor
Outdoor

1

inch

1

Type
Compressor

Hermetic Motor Compressor (Rotary)

Motor Type
Rated Output

Synchronous Electric Motor (4-poles)
kW

1.70

Type

Propeller Fan

Material

PP

Motor Type
Fan

kW

Output Power

W

120

rpm

Cooling: 570
Heating: 560

Fan Speed

Heat Exchanger

DC (8-poles)

Input Power

2.178 (Heating) / 3.201 (Cooling)

Fin material

Aluminium (Blue Coat)

Fin Type

Corrugated Fin

Row × Stage × FPI
Size (W × H × L)

2 × 46 × 19
mm

36.38 × 966 × 880.6 : 908.6

Type

Brazed Plate

No. of Plates
Hot Water Coil

Size (W x H x L)
Water Flow Rate

Power Source (Phase, Voltage, Cycle)

Input Power
Maximum Input Power For Heatpump System

26
mm

57.8 × 524 × 117
Cooling: 23.5 (1.4)
Heating: 25.8 (1.5)

3

l/min (m /h)
Ø

Single

V

230

Hz

50

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

kW

Cooling: 2.91

Heating: 1.98

Heating: 2.05

kW

3.56

Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 15.8 / 3.56k

Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

1Ø / 13.0 / 3.00k

Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)

-/-/-

Starting Current

A

12.9

Running Current

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

A

Cooling: 12.9

Heating: 8.8

Heating: 9.1

Maximum Current For Heatpump System
Power Factor
Power factor means total figure of compressor and
outdoor fan motor.
Power Cord

A

15.8

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

%

Cooling: 98

Heating: 98

Heating: 98

Number of core
Length

m (ft)

-

Thermostat

Electronic Control

Protection Device

Electronic Control

Pressure Relief Valve Water Circuit

kPa

Open: 300, Close: 210 and below

--- Page 34 ---
Item

Unit

Indoor Unit
EN 14511

Performance Test Condition
Outdoor Ambient

°C (min. / max.)

Operation Range
Water Outlet

Internal Pressure Differential

Noise Level

Dimension

°C (min. / max.)

Cooling: 5 / 20
Heating (Tank): - / 65*3,
Heating (Circuit): 20 / 55 (Below Ambient -20 °C) *4
Heating (Circuit): 20 / 75 (Above Ambient -10 °C) *4

kPa

Cooling: 32.0
Heating: 36.0

Condition
(Ambient/Water)

A35W7

A7W35

A2W35

dB (A)

Cooling: 31***

Heating: 31***

Heating: 31***

Power Level dB

Cooling: 44***

Heating: 44***

Heating: 44***

Depth

mm (inch)

602 (23-45/64)

Width

mm (inch)

599 (23-37/64)

Height

mm (inch)

1293 (50-7/8)

kg (lbs)

79 (174)

Room

mm (inch)

31 (1-1/4)

Shower

mm (inch)

19 (3/4)

Net Weight
Water Pipe Diameter

Water Drain Hose Inner Diameter

mm (inch)

Motor Type
Pump

7 (Software Selection)
W

145

Type
Measuring range

12.00 (17/36)
Brushless DC Motor (Sensorless vector control system)

No. of Speed
Input Power

Flow Sensor

EN 14825
Cooling: 10 / 43
Heating (Tank): -25 / 35
Heating (Circuit): -25 / 35

Vortex (Piezoelectric sensor)
l/min

5 ~ 60

Pressure Transducer (Range)

bar

0~4

Protection Device

A

Earth Leakage Circuit Breaker (30 ~ 40)

Volume

I

10

MWP

bar

3

Expansion Vessel

Capacity of Integrated Electric Heater / OLP TEMP
Tank Volume (Spec / Nett)

kW / °C

3.00 / 85

L

127 / 120

Max. Tank Water Set Temperature

°C

65

Tank Coil Surface

m2

1.8

Maximum Working
Pressure
Operating Pressure

Heat / Cool *10

Bar

3.0

Tank Circuit

Bar

10.0

Tank Unit

Bar

3.5

Expansion Relief Valve

Bar

10.0

Expansion Vessel Pre-charge Pressure (DHW Circuit)

Bar

3.5

Pressure Reducing Valve Set Pressure (DHW Circuit)

Bar

3.5

--- Page 35 ---
Item

Unit

Indoor Unit

Material
Pressure Vessel

EN14511

Volume

L

120

Design Pressure

Bar

10

Material
Heat Exchanger

DHW Tank

EN-1.4521

Diameter

mm

22

Thickness

mm

0.65

Surface Area

m2

1.3

Total Length

m

18.5

Total Corrosion ion
(Chloride + Sulphate
+ Nitric)

mg/L

< 150

Conductivity @ Water
Tank
Water Temperature
< 60ºC

µS/cm

< 1250

Conductivity @ Water
Tank
Water Temperature
< 65ºC

µS/cm

< 1200

Saturation Index (LSI)
@ 20ºC

> -4.0 / < 0.4

PH

6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
-8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
ΔT=5°C.
 EER and COP classification is at 230V only in occordance with EU directive 2003/32/EC.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
(Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 *** The sound power level is measured with accordance to EN12102 under full load conditions. (Test carry out for
cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and water out 55°C)
 *3 When outdoor ambient is under -10°C, only the backup heater operate above 55°C.
 *4 Between outdoor ambient -10°C and -20°C, the water outlet temperature gradually decreases from 75°C to
55°C.

--- Page 36 ---
4. Features


Inverter Technology
o Energy saving



High Efficiency



Long Installation Piping
o Long piping up to 30 meter



A-class energy efficiency pump
o Water pump speed can be set by selection at control panel



Improved deice cycle



Protection Feature
o Random auto restart after power failure for safety restart operation
o Gas leakage protection
o Prevent compressor reverse cycle
o Inner protector to protect compressor



Serviceability Feature
o Breakdown Self Diagnosis function
o System Status Check Buttons for servicing purpose
o System Pumpdown Button for servicing purpose
o Front maintenance design for outdoor unit

--- Page 37 ---
[Text read by OCR from the page image: check figures against the PDF]
5. Location of Controls and Components

5.1
5.1.1

Indoor Unit

Remote Controller Buttons and Display

The LCD display as shown in this manual are for
instructional purpose only, and may differ from the
actual unit.

Buttons / Indicator

Quick Menu button

Back button

Returns to the previous screen

LCD Display

(Actual - Dark background with white icons)
Main Menu button

For function setup

ON/OFF button
Starts/Stops operation

Operation indicator
Illuminates during operation, blinks during
alarm.

© |©/O©/©/0'0

When the backlight is off, press any button to turn

it on.

(Do not press button ©)

The time until the backlight turns off can be changed
in the Menu (Personal setup)

/\
V

ee a eee eee

Cross key buttons
Selects an item.

Left < _
V

Down

> Right

Enter button
Fixes the selected content.

--- Page 38 ---
[Text read by OCR from the page image: check figures against the PDF]
Display

@) Mode selection

v

! 7 |

*.*2 AUTO RY, * Depending on the preset outdoor ***COOL * COOL operation is either turned
wy temperature, the system selects ° ON or OFF.
HEAT or *":*? COOL operation * The outdoor unit provides cooling
mode. to the system.
@ Auto Heat @® Auto Cool
*1*2 AUTO “RY _* Depending on the preset outdoor ***COOL * The outdoor unit provides cooling
+ TANK fy temperature, the system selects + TANK to the system.

TANK operation mode.
@ Auto Heat @® Auto Cool

when boiling tank.

A = HEAT + TANK or ***? COOL + ri * The outdoor unit provides heating
| iz if
Il v Ih

HEAT uts  » HEAT operation is either turned TANK “i + TANK operation is either turned

A 7@: ON or OFF. , oH ON or OFF.
* The outdoor unit provides heat to || * The outdoor unit provides heat to
Vv the system. the water tank.
HEAT wait, * The outdoor unit provides heat to * The direction icons point to the currently
+ TANK 7@: the water tank and the system. active mode.
* This mode can be selected only ef D
ms when the water tank is installed. (i) » * Room operation / Tank operation.
il
we & D
fh =, °Dei tion.
Ag » eice opera

Operation icons
The status of operation is displayed.
Icon will not display (under operation OFF screen) whenever operation is OFF except weekly timer.

Holiday operation status Oy Weekly Timer operation status 1k Quiet operation status

Zone:Room Thermostat -] Powerful operation status Demand Control or

— Internal sensor status SG ready or SHP status
Room Heater status sales Tank Heater status fae Solar status

Bivalent status

(Boiler)

© Temperature of each zone

©) Time and day

(©) Water Tank temperature

©) Outdoor temperature

© Sensor type/Set temperature type icons

at
a

Water Temperature i i‘ Water Temperature Fd Pool onl
—>Compensation curve —Direct ie y

Room Thermostat #4 Room Thermostat rk

— External ‘tt —l|nternal ‘th Room Thermistor

poco

—-— 5

| *! The system is locked to operate without COOL mode. It can be unlocked only by authorised installers or our authorised service partners. |
* Only displayed when COOL mode is unlocked (This means when COOL mode is available).

I
I
b-—-——

--- Page 39 ---
[Text read by OCR from the page image: check figures against the PDF]
5.1.2

Initialization

Before starting to install the various menu settings, please initiate the Remote Controller by selecting the language of

operation and installing the date and time correctly.

When power is turned on for the first time, it becomes the setting screen automatically. It can also be set from personal

setting of the menu.

Selecting the language
Wait while the display is initializing.
When initializing screen ends, it turns to
normal screen.
When any button is pressed, language
setting screen appears.

1) Scroll with \/ and (/\ to select the language.

Q) Press < to confirm the selection.

Setting the clock

1) Select with \/ or /\ how to display the time,
either 24h or am/pm format (for example, 15:00
or 3:00 pm).

Q) Press < to confirm the selection.

GB) Use \/ and A to select year, month, day,
hour and minutes. (Select and move with >
and press < to confirm.)

@) Once the time is set, time and day will appear
on the display even if the Remote Controller is
turned OFF.

6) Final precaution step to check and confirm
whether outdoor front grille is fixed before
operating the unit for safety purpose.

Select Yes if outdoor front grille is already
fixed. Then it will proceed to main screen.
Select No if outdoor front grille is not yet fixed.
A caution message will pop up to remind on the
installation.

Initialization 12:00am, Mor!
Initializing .- . -
12:00am,Mon
[ch] Start
Language 12:00am, Mor|
FRANCAIS
DEUTSCH
ITALIANO
Select [1] Confirm
Clock format 12:00am,Sat
24h
a
(“Select [1] Confirm
Date & Time 12:00am,Sat
Year/Month/Day —_ Hour: Min
E01 / 01 += 12:00 am
>> Select [+] Confirm
Front grille 12:00am,Sat
ls O/D front grille fixed?
Yes
Select [+] Confirm
IF 4+ Hil ANN i tt

To prevent injury, fix
front grille before ope.

[=] Close

Seer! BT ASALLLLELLS

12:00am,Sat

ea) |e

[c] Start

— LCD blinking

--- Page 40 ---
[Text read by OCR from the page image: check figures against the PDF]
5.1.3

Quick Menu

After the initial settings have been completed, you can select a quick menu from the following options and edit
the setting.

_ is fr S) Bee
3: A0% ad .
c, 2344 “2 eS 8
i ae * 18% > [i] ON/OFF
5 A = pe Ai =
< a > —_—<=<== < ——=—4 aa cet
on V Oo) m1 Yt ©
__
|
(1) Press an to display the quick menu. @) UseA VY <_ > to select menu.

GB) Press < to turn on/off the select menu.

.
Quick Menu
vie Force DHW S) Powerful ‘bY Quiet te 3 Force Heater
O77 Weekly Timer OE Force Defrost 1°] Error Reset a RIC Lock
Select each setting and confirm the setting according to
~ Select [—] ON/OFF the instructions displayed at the bottom of the screen.
(The icons refer to each selection key.)
“ 3

To return to the Main Screen,

EEE
PresSuanOr >.

--- Page 41 ---
[Text read by OCR from the page image: check figures against the PDF]
5.1.4 Howto Use the Quick Menu

+f Force DHW

Select this icon to turn the Tank DHW on or off.
Press < to confirm your selection.

ie
ii « Force DHWis tumed off.

= i
Si + Force DHWis tured on.

Note:
* Force DHW is disabled when Force Heater is turned on.
« When Force DHW is turned off, operation & mode should change back to the previous memorized status.

-S} Powerful

Select this icon to operate the heating/cooling system powerfully.
Press < to confirm your selection.
(The powerful operation starts approximately 1 minute after «J is pressed.)

> - S * Powerful mode is set off.

v pa
30
Q « The Powerful mode operates for 30 minutes.
v a)
60
® * The Powerful mode operates for 60 minutes.
v a)
90 .
J ® * The Powerful mode operates for 90 minutes.

Note:
* Powerful is disabled when operation is turned OFF.

A

--- Page 42 ---
[Text read by OCR from the page image: check figures against the PDF]
‘h Quiet

Select this icon to operate quietly.
Press < to confirm your selection.
(The quiet operation starts approximately 1 minute after <J is pressed.)

> \by * Quiet mode is set off.

sesen i “a

AL * The Quiet mode operates at level 1.
v oa

aL + The Quiet mode operates at level 2.
v +

bY * The Quiet mode operates at level 3.
3 Level 3 is the most quiet mode.

Pan |

pa) aly * Select this to set a timer for the Quiet mode operation.

v After 1 sec delay.

Do you want to edit

“ ”
Quiet timer pattern? Select “Yes”.

* Select “Yes” using <> buttons.

ves
Pattern Time Level
2 8:00 pm 7 select pattern “1” ~ “6”.
3 10:00 pm 0
Select “Edit”.
Delete

« If you select “Delete”, the timer setting of the selected pattern will be deleted.

’

a
-00 pm Set the hour and minutes.

Ty
a
iy Select the level of Quiet.
=
Note:
Set time is overlapped! * If the time overlaps with another pattern, “Set time is overlapped!” will appear on the
screen.
[>]Close

--- Page 43 ---
[Text read by OCR from the page image: check figures against the PDF]
$¢3@: Force Heater

Select to force the Heater on.

Press <4 to confirm your selection.
(The Force Heater mode starts approximately 1 minute after <J is pressed.)

803 ee Force Heater is turned off.

$32@ * Force Heater is turned on.

Note:

* Force Heater is disabled whenever operation is already on and “Disabled due to
operation ON!” will be displayed.

43

Disabled due to
operation ON!

[>]Close

--- Page 44 ---
[Text read by OCR from the page image: check figures against the PDF]
Weekly Timer

Select this icon to delete (cancel) or change the pre-set Weekly Timer.
Press <4 to confirm your selection.

O77 * Timer is not ON.

* Timer is set.

{ After 1 sec delay.

Select “Yes”.

Do you want to edit * If you select “No”, the screen will return to the Main Screen.

Weekly timer pattern?

Yves
* Timer setup: Select Timer setup to edit the Weekly Timer.
Timer copy * Timer copy: Select to copy a timer setting.

v

Sun [Mon] Tue Thu] Fri [Sat] [Example of a Timer setup]
-—|vivivi[y|y|—|_ Select the day(s) which you wish to edit using A. \/ buttons.

v

All 6 patterns are not set!
Do you want to edit?

me] No

v
Sun Mon Tue Wed Thu Fri Eig
1.12:00am ON 26 25/20°C 40°C
2. 2:00am ON 26 25/25°C 40°C
3. 4:00am ON GA 30/20C€ 40C Select the operation mode.

D® OO OQ QO — SBA IRA IR

* Select mode using AA. \/ buttons.

If all 6 patterns are not preset, this screen will be displayed.

Select pattern “1” ~ “6”.

Set the hour and minutes of the Timer.

Select ON/OFF of the Timer.

OOOO

Set the temperature for both Zone 1 and 2 (if your
system has the 2-Zone setting).

©)

Saturday: Pattern 1: Set Temp
Zonel1 @ iZone2 2% | g&

: oS
ON 25°C: ON 25 ‘CdEfj’c

6) Set the Tank temperature.

Note:

+ Timer is disabled when Force Heater is turned on or Heat-Cool SW is enabled.
* If you have preset the Weekly Timer on 2 zones, you must repeat the same procedure with Zone 2.

--- Page 45 ---
[Text read by OCR from the page image: check figures against the PDF]
aK Force Defrost

Select to defrost the frozen pipes.

Press < to confirm your selection.
(When the mode is accepted, below screen will be displayed.)

Request accepted!

[>]Close

*<] Error Reset

Select to restore the previous settings when error has occurred.

Press < to confirm your selection.
(When the mode has been accepted, below screen will be displayed.)

Request accepted! « Make sure all units are turned off before selecting this mode which restores the whole
system to the previous settings.

[>]Close

fF, RIC Lock

Select to lock the Remote Controller.

Press <4 to confirm your selection.
(When the mode has been accepted, below screen will be displayed.)

Do you want to Select “Yes”.
lock remote control? (The Main Screen will be locked.)

«If “No” is selected, the screen will return to the Main Screen.

Yes > No

To unlock the Remote Controller

Press any key.
(When the mode has been accepted, below screen will be displayed.)

a

10] x * * Enter any 4 digits of number (if the number is correct, the screen will be unlocked).
Vv

To reset forgotten password (under operation OFF screen)

Press ~) , «J and > continuously for 5 seconds.
(When the mode has been accepted, below screen will be displayed.)

a password Select “Reset”.

1.Password is reset to 0000
2.Remote control is unlocked

(The screen will be off after 3 seconds.)

--- Page 46 ---
[Text read by OCR from the page image: check figures against the PDF]
5.1.5

Menus (For User)

Select menus and determine settings according to the system
available in the household. All initial settings must be done by an
authorised dealer or a specialist. It is recommended that all alterations
of the initial settings are also done by an authorised dealer or a

specialist.

* After initial installation, you may manually adjust the settings.
* The initial setting remains active until the user changes it.

* The Remote Controller can be used for multiple installations.
« Ensure the operation indicator is OFF before setting.

Main Menu 10:34am, Mon

Function setup

System check
Personal setup
Service contact

«The system may not work properly if set wrongly. a)

Please consult an authorised dealer.

To display <Main Menu>: =
To select menu: A, \/ < >

To confirm the selected content: <—]

~ Select [=] Confirm
/\ =
< - >
ust V 0) ;

|Menu — ssts—s—sCOY Default Setting Setting Options / Display

1 Function setup

1.1 >Weekly timer

Once the weekly timer is set up,

User can edit from Quick Menu.

To set up to 6 patterns of

operation on a daily basis.

* Disabled if Heat-Cool SW is
select “Yes” or if Force Heater

Timer setup
Select day of the week and
set the patterns needed
(Time / Operation ON/OFF / Mode)

Timer copy

Weekly timer 10:34am, Mon
Sun [Mon] Tue Wed Thu Fri Sat
1. 8:00am ON 40°C
2.12:00pm ON :@f2_ 24/28°C 40°C
3. 1:00pm ON 3 12/10°C
4>Day ~Pattern [JEdit

is on. Select day of the week
1.2 _>Holiday timer
To save energy, a holiday OFF ~
period may be set to either turn oF
OFF the system or lower the >ON
temperature during the period. Holiday start and end. Holiday: End 10:34am,Mon

Date and time

OFF or lowered temperature

«Weekly timer setting may be temporarily disabled during Holiday timer setting

Year/Month/Day —_— Hour: Min

Ezz /01/ 01 10:00 am

but it will be restored once the Holiday timer is completed. >> Select [+1] Confirm
1.3 > Quiet timer
To operate quietly during the Time to start Quiet : ae = een
preset period. Date and time
6 patterns may be set. u en
Level 0 means the mode is off. Level of quietness: 3 1 1:00pm 3
0~3 ~Select L-Tedit

--- Page 47 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  ists—s—sidY Default Setting Setting Options / Display

4.4 > Quiet priority

* To select priority during Quiet
mode between Sound and
Capacity.
* If Sound priority is selected,
unit will operate in quiet | Sound |
condition only. Sound c Vv it
« If Capacity priority is selected, apaciy
unit will operate in quiet
condition but it will prioritize on
providing required capacity at
the same time.
1.5 > Room heater
To set the room heater ON or OFF oN
OFF.
1.6 > Tank heater
To set the tank heater ON or OFF oN
OFF:
1.7 > Sterilization
To set the auto sterilization ON ON ON
or OFF. OFF

* Do not use the system during sterilization in order to prevent scalding with hot water, or overheating of shower.
* Ask an authorised dealer to determine the level of sterilization function field settings according to the local laws and

regulations.
1.8 _>DHW mode (Domestic Hot Water)

To set the DHW mode to

Standard or Smart.

¢ Standard mode have faster
DHW Tank heat up time.

. Standard Vv

Meanwhile Smart mode Smart

take longer time to heat up
DHW time with lower energy

consumption.

To set the tank sensor to Top

or Center.

* Selection of the tank sensor
to top slow down the start of
boiling up the tank and reduce Top Vv
power consumption. Center

Please change this selection
to “Center” when the hot water
becomes insufficient.

--- Page 48 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  sts—s—s—siY Default Setting Setting Options / Display

2 System check

2.1 _> Energy monitor

Present or historical chart of

energy consumption, generation

or COP.

Present
Select and retrieve

Historical chart
Select and retrieve

* COP= Coefficient of Performance.
« For historical chart, the period is selected from 1 day/1 week/1year.

Total consumption (1year)

0.0
kWh

tyear| 1 121314 [51617 [819 101112)

+ Energy consumption (kWh) of heating, *'*? cooling, tank and total may be Jan, 2022: _0.0 rn APPIOX.
retrieved. <}Month {Mode
+ The total power consumption is an estimated value based on AC 230 V and
may differ from value measured by precise equipment.
2.2 > System information
Shows all system information in | Actual system information of 11 items: System information —10:34am,Mon
each area. Inlet / Outlet / Zone 1 / Zone 2 / Tank / 1. Inlet : Ot
Buffer tank / Solar / Pool / COMP 2. Outlet : 0°
frequency / Pump flowrate / Water pressure | 3. Zone 1 7 oc
. 4. Zone 2 : oc
Select and retrieve Page
2.3 _> Error history
* Refer to Troubleshooting for Error history 10:34am, Mon
error codes. 1. --
«The most recent error code is Select and retrieve . __
displayed at the top. 4--
[+] Clear history
2.4 >Compressor
Shows the compressor Compressor 10:34am, Mon
performance. 1. Current frequency : 0Hz
. 2. (OFF-ON) counter : 0
Select and retrieve 3. Total ON time oh
[>] Back
2.5 >Heater
Total hours of ON time for Heater 10:34am, Mon
Room heater/Tank heater. Total ON time
Select and retrieve 35 : Oh
3 : oh
[>] Back

--- Page 49 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  ists—s—sidY Default Setting Setting Options / Display

3 Personal setup

3.1. >Remote control No.

«To display remote control
number of a particular remote RC No. 10:34am,Mon
controller so that installer and
end user are well informed. RC-1
; . Select and retrieve
* Main remote controller is
displayed as RC-1. Second
remote controller is displayed [+] Confirm
as RC-2.
3.2 >Touch sound
Turns the operation sound ON/ | ON |
ON v
OFF. OFF
3.3 >LCD contrast
Sets the screen contrast. LCD contrast 10:34am, Mon
Low High
3 hmm i |>
4>Select [4] Confirm
3.4 >Backlight
Sets the duration of screen Backlight 10:34am,Mon
backlight. OFF 5 mins
1 min 15 secs 10 mins
Pimin
“Select L4]Confirm
3.5 > Backlight intensity
Sets screen backlight Backlight intensity | 10:34am,Mon
brightness. Dark Bright
4 FT| lt
4 Select [4] Confirm
3.6 > Clock format
Sets the type of clock display. Clock format 10:34am,Mon
24h
am/pm a~
“Select [4] Confirm
3.7. >Date & Time
Date & Time 10:34am,Mon

Sets the present date and time.

Year / Month / Day / Hour / Min

Year/Month/Day —_ Hour: Min
BEA]/01/ 01 + 10:00 am

>> Select

[+] Confirm

--- Page 50 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  —its—s—siCY Default Setting Setting Options / Display
3.8 >Language

sshd mami | PF DET
the t . ;
& top screen SWEDISH/ NORWEGIAN /POLISH/ | ana 10:34am, Mon
CZECH/NEDERLANDS/TURKCE/ | GX©X rs

SUOMI / MAGYAR / SLOVENSCINA/ | FRENGAIS
HRVATSKI/LIETUVIY /PORTUGUES/ rat tano
BbIITAPCKM / EESTI / LATVIESU / Select Lal Confiem
ROMANA/SHQIP/SLOVENCINA/ =|”
MAKEJJOHCKIA | YKPAIHCbKA / EAHNIKA

3.9 >Unlock password

4 digit password for all the Unlock password 10:34am, Mon
settings. a
0000 ooo
vr
*Select [+] Confirm
4 Service contact

4.1 >Contact 1 / Contact 2

Preset contact number for Service setup 10:34am,Mon
installer. Contact 1
Select and retrieve Name : Bryan Adams
© : 08812345678
w5elect

--- Page 51 ---
[Text read by OCR from the page image: check figures against the PDF]
5.1.6 Menus (For Installer)

|Menu sis Default Setting Setting Options / Display

5 Installer setup > System setup

5.1. > Optional PCB connectivity

To connect to the external PCB
required for servicing.

No

Yes
~

« If the external PCB is connected (optional), the system will have following additional functions:

@ Control over 2 zones (including the swimming pool and the function to heat water in it).
@ Solar function (the solar thermal panels connected to either the DHW (Domestic Hot Water) Tank or the Buffer Tank.
* DHW is not applicable for WH-ADC *models.

@ External compressor switch.

@ External error signal.
© SG ready control.
® Demand control.
@ Heat-Cool SW

5.2 »>Zone & Sensor

To select the sensors and to Zone Zone & Sensor 10:34am,Mon
select either 1 zone or 2 zone + After selecting 1 or 2 zone system, proceed | Zone
system. to the selection of room or swimming pool.
* If the swimming pool is selected, the 2 Zones system
temperature must be selected for _
AT temperature between 0°C ~ 10 °C. ~Select [+] Confirm
Sensor
* For room thermostat, there is a further Zone & Sensor 10:34am, Mon
selection of external or internal. Sensor
* If select internal, there is a further selection
of RC-1 or RC-2 (only available when Zone Room thermostat
selection is 1 zone system). Room thermistor
Select RC-1 if main remote controller's Select [=] Confirm
thermistor is to be used for room temperature | ~
control and vice versa.
5.3 >Heater capacity
To reduce the heater power if Heater capacity 10:34am,Mon
unnecessary a
3 kW/6kW/9 kW
* Options of kW vary depending
on the model. [1] Confirm
5.4 > Anti freezing
To activate or deactivate the

water freeze prevention when
the system is OFF

Yes

Vv
No

--- Page 52 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  tsts—s—s—siY Default Setting Setting Options / Display

5.5 >DHWcapacity

To select tank heating capacity
to variable or standard. Variable
capacity heat up tank with

fast mode and keep the tank
temperature with efficient mode.
While standard capacity heat up
tank with rated heating capacity.
When “Efficiency” is selected
the “5.23 Heating control”
setting, the tank heat-up
process will be delayed until

a much lower tank water
temperature is reached, which
improves the efficiency of the
heating process. To ensure
sufficient hot water, select either
“Standard” in this setting or
“Comfort” in the “5.23 Heating
control” setting.

Variable

Vv
Standard

5.6 > Buffer tank connection

To connect tank to the system
and if selected YES, to set
AT temperature.

No

Yes
a

>Yes

5 °C

Buffer tank

AT for Buffer tank
Range: (0°C~10°C)
Steps: #1°C

10:34am,Mon

Set AT for Buffer

yN
Tank 5 ie
Vv

[+] Confirm

Select

5.7 > Base pan heater

To select whether or not

optional base pan heater is

connected.

*Type A -The base pan heater
activates only during
deice operation.

*Type B -The base pan heater
activates when outdoor
ambient temperature is
5 °C or lower.

No

Yes
a~

> Yes

Base pan heater type 10:34am,Mon

v¥
B

Set base pan heater
type*.

~5elect [4] Confirm

5.8 > Alternative outdoor sensor

To select an alternative outdoor
sensor.

No

Yes

--- Page 53 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu = =~—~—_| Default Setting | Setting Options / Display

5.9

> Bivalent connection
To select to enable or disable No Yes
bivalent connection. | No |
> Yes
To select either auto control
pattern or SG ready input
control pattern or smart control | Auto
pattern. Auto SG ready
* This selection only display Smart
to select when optional pcb
connection set to Yes.
To select a bivalent connection > Yes > Auto
to allow an additional heat Bivalent connection 10:34am,Mon
source such as a boiler to heat- Set outdoor Turn ON: Outdoor temp
up the buffer tank and domestic 5°C temperature for Range: (-15°C~35°C) -
hot water tank when heatpump turn ON Bivalent Steps: 41°C | -5 ke
Capacity is insufficient at low connection. ¥
outdoor temperature. The ~Select [+] Confirm
bivalent feature can be set-up Yes > After selecting the outdoor temperature
either in alternative mode Control pattern Bivalent connection _10:34am,Mon
(heatpump and boiler operate Alternative / Parallel / Advanced parallel Control pattern
alternately), or in parallel Alternative
mode (both heatpump and * Select advanced parallel for bivalent use of Parallel
boiler operate simultaneously), the tanks.
or in advance parallel mode “Select [+] Confirm
(heatpump operates and boiler | Control pattern > Alternative
turns on for buffer-tank and/or : - ,
domestic hot water depending Option to set external | Bivalent connection 10:34am,Mon
on the control pattern setting pump either ON or External pump
. OFF during bivalent ON
options). OFF .
operation. Set to ON a
if system is simple
bivalent connection. | “Select [-] Confirm
Control pattern > Advanced parallel
Heat | Selection of the tank | Bivalent connection 10:34am,Mon
Advanced parallel
+ “Heat” implies Buffer Tank and “DHW
implies Domestic Hot Water Tank.
w5elect [4] Confirm
Control pattern > Advanced parallel > Heat > Yes
Bivalent connection = 10:34am,Mon
Advanced parallel: Heat
+ Buffer Tank is activated only after selecting
“Yes”. No
w5elect [4] Confirm

--- Page 54 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu sid Default Setting Setting Options / Display

Set the temperature

Bivalent connection 10:34am,Mon
Heat start: Target temp.
Range: (-10°C~0°C)

-8 °C threshold to start the ° —_
. Steps: #1°C Cc
bivalent heat source. “ps =
Select [4] Confirm
Bivalent connection 10:34am,Mon
Delay timer to start Heat start: Delay time
0:30 the bivalent heat Range: (0:00~1:30) -
. source Steps: 40:05
(in hour and minutes). hd
Select [+] Confirm
Bivalent connection 10:34am,Mon
Set the temperature Heat stop: Target temp.
-2°C threshold to stop the Range: & 0c) D2 ie
bivalent heat source. ps: © v
Select [4] Confirm
Bivalent connection 10:34am,Mon
Delay timer to stop Heat stop: Delay time
0:30 the bivalent heat Range: (0:00~1:30) -
, source Steps: 40:05
(in hour and minutes). hd
Select [+] Confirm

Control pattern > Advanced parallel > DHW > Yes

Bivalent connection = 10:34am,Mon
Advanced parallel: DBHW

* DHW Tank is activated only after selecting Yes
“Yes”. No
w~5elect [4] Confirm
Bivalent connection 10:34am,Mon
Delay timer to start DHW: Delay time
0:30 the bivalent heat Range: (0:30~1:30) a
, source Steps: +0:05
(in hour and minutes). hd
Select [4] Confirm
SG ready input control for > Yes > SG ready
bivalent system follow below
input condition.
Veber a8 Operation pattern Option to set external Bivalent connection _10:34am,Mon
Heat Pump OFF, pump either ON or External pump
Open | Open Boiler OFF OFF OFF during bivalent ON
Short | Open Heat Pump ON, operation. Set to ON rN
Heat Pump GFE if system is simple
Open Short Boiler ON , bivalent connection. Select [—] Confirm
Heat Pump ON,
Short | Short | “Boiler ON

--- Page 55 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu sid Default Setting Setting Options / Display

To do settings related to
electricity and boiler so that unit
is able to determine whether

to operate heat pump or boiler
at a particular period depends
on operating cost of both heat
sources. These settings are
electricity price, boiler price,
season, schedule etc.

> Yes > Smart
Option to set external _Bivalent connection —_10:34am,Mon
pump either ON or External pump
OFF OFF during bivalent ON
operation. Set to ON a
if system is simple
bivalent connection. “Select [Confirm

> Yes > Smart > After selecting for the external pump > Energy price

Bivalent connection 10:34am,Mon
- Select Electricity to set on electricity price.
- Select Boiler to set on boiler price and its —
efficiency.
~Select [+] Confirm
> Yes > Smart > After selecting for the external pump > Energy price >
Electricity
0.0*/kWh Bivalent connection 10:34am,Mon

- There are total 10 different prices can be set
for Electricity:
Electricity price 1 ~ Electricity price 10

- Range is 0 ~ 999.9 */ kWh

- Press A or V to enter a setting screen as
shown in Figure 1. Then start setting the
value of electricity price.

- After finish setting a particular electricity price
(eg. Electricity price 1), press < or > to go
and set for other electricity price.

* Set the price according to value provided by
electrical supply company.

4 Electricity price 1 »
Range: (0~999.9 */kWh) ~
Steps: +0.1%/kWh

vW

«>Select
Figure 1
Bjasalant 4 40.2 Amun Boy
7 ~
q7 M000 fF
g Vv

«>Select [+] Confirm
& 7

> Yes > Smart > After selecting for the external pump > Energy price > Boiler

0.0*/kWh

- Refer to method of Electricity price setting
above for setting of boiler price.

- After finish setting of boiler price, set the
boiler efficiency (Range : 0 ~ 99%).

0%
* Set the price according to value provided by
boiler or gas supply company.

Bivalent connection
Boiler price

Range: (0~999.9 */kWh) ~
Steps: +0.12/kWh

10:34am,Mon

4

[+] Confirm

Select

Bivalent connection 10:34am,Mon

Boiler efficiency
Range: (0~99%) a~
Steps: 1%

Select [+] Confirm

Remark : * implies cents in most currency except Czech crown.

--- Page 56 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu ssid Default Setting Setting Options / Display

> Yes > Smart > After selecting for the external pump > Schedule > Season

setting

Season 1 : Dec (Refers to Winter Bivalent connection 10:34am,Mon
season) Schedule

Season 2 : Mar (Refers to Spring Season setting
season) Schedule setting

Season 3 : Jun (Refers to Summer
season) ~Select [+] Confirm

Season 4 : Oct (Refers to Autumn season)
- There are total 4 seasons to be set
- Set the starting month for each

Bivalent connection 10:34am,Mon
Season 1: Start month

season. Range: Gane”) a

(Eg. when Season 1 is set to Dec and eps: Simon <=

Season 2 is set to Mar, month of December x -
Select [+] Confirm

to February will be treated as Season 1).
> Yes > Smart > After selecting for the external pump > Schedule > Schedule
setting

Start time (Pattern 1) : 3:00am Bivalent connection 10:34am,Mon
Start time (Pattern 2) : 9:00am Schedule setting
Start time (Pattern 3) : 4:00pm a Le
Start time (Pattern 4) : 9:00pm Season 2
- For each season, there are total 4 patterns Season 3
can be set. ~Select [1] Confirm
Season 1 10:34am,Mon
Price (Pattern 1/2/3/4) : 1 __Starttime __Price(*/kWh)
- Set the target start time and the appropriate
lectricity price for each pattern. ann 0.0
e yp p 3. 4:00pm 0.0
~Select [4] Edit
Bi L es cH AN2QA BA n
Ss Select

- Select “1” to edit both start time and 4: To edit time & price
electricity price. Select “2” to edit electricity 2: To edit price only

price only. mm> 2

Te Tvonnnr

‘

--- Page 57 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu — ists—s—s—sidY Default Setting Setting Options / Display

- Range of start time displayed can be in “24h” Season 1 10:34am,Mon
or “am/pm’ format depend on setting of Pattern 1: Start time
“Clock format”. Range: (0.00~23.00) ~
Steps: +1hour
Vv
Select [+] Confirm
- Range of electricity price is 0 ~ 10 which Season 1 10:34am,Mon
refers back to the 10 different electricity Pattern 1: Price BO kwh
price set previously (under “Energy price > Range: (0~10) ~
Electricity”: Steps: +1
Electricity price 1 ~ Electricity price 10). Vv
The price displayed on the upper right corner Select [+] Confirm
indicates the previous set value of Electricity
price 1 to Electricity price 10.
* When the price is set to “0”, the electricity
price will be treated as 0.0 */ kWh. It is for
the convenience of installer when 0.0 is the
desired setting value for a particular time.
5.10 > External SW
Yes
No rN
5.11 > Solar connection
* The optional PCB connectivity No Yes
must be selected YES to
enable the function.
>Yes
* If the optional PCB i - -
connectivity is not selected, Solar connection 10:34am,Mon
the function will not appear on
the display. Buffer tank Selection of the tank v
* DHW is not applicable for DHW tank
WH-ADC “models. ~select [—] Confirm
> Yes > After selecting the tank
Solar connection 10:34am, Mon
AT Turn ON
10°C Set AT ON Range: (6°C~15°C) a
temperature Steps: 41°C 10 Je
<Select [4] Confirm

--- Page 58 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  ttsts—s—sOY Default Setting Setting Options / Display

> Yes > After selecting the tank > AT ON temperature

Set AT OFF

5°C
temperature

Solar connection 10:34am,Mon

AT Turn OFF

Range: (2°C~9°C) a

Steps: #1°C Hic
Vv

<Select [4] Confirm

> Yes > After selecting the tank > AT ON temperature > AT OFF temperature

Set Antifreeze
temperature

Solar connection
Anti freeze

Range: (-20°C~10°C)
Steps: 41°C

10:34am, Mon

ye
o

<Select [4] Confirm

> Yes > After selecting the tank > AT ON temperature > AT OFF temperature

> After setting the antifreeze temperature

Solar connection 10:34am,Mon
Hi limit
3 ve Range: (70°C~90°C) -
80 °C Set Hi limit Steps: 45°C Ec
vw
*Select [+] Confirm
5.12 > External error signal
N Yes
(e} a
5.13 >Demand control
N Yes
[e) a
5.14 >SGready
N Yes
0 a
No
> Yes
SG ready 10:34am, Mon
Capacity (1) & (2) Capacity [1-0]: DHW
420 9 of DHW (in %), Range: (50%~150%) -
° Heat (in %) and Steps: #5% 120 Fa
Cool (in °C) bd
*Select [4] Confirm
5.15 >External compressor SW
N Yes
(eo) a
|_No |
5.16 > Circulation liquid
To select whether to circulate Circulation liquid _10:34am,Mon
water or glycol in the system.
Water a
Glycol
woelect [+] Confirm

--- Page 59 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu — sts—‘s—sdY Default Setting Setting Options / Display

5.17 >Heat-Cool SW

No

Yes
a~

P_No |
5.18 > Force heater
To turn on Force heater either Force heater 10:34am,Mon
manually (by default) or Auto
automatically. Manual a
|Manual
“Select [.] Confirm
5.19 > Force defrost
If auto selection is set, outdoor
unit will start defrost operation M Auto
; : anual a
if long heating hour operate | Manual |
during low outdoor temperature.
5.20 > Defrost signal
To turn on defrost signal to stop
fan coil during defrost operation. Yes
(If defrost signal set to yes, No a
bivalent function will not
available to use)
5.21 >Pump flowrate
To set variable flow pump
control or fix pump duty control. AT Max. Duty
5.22 >DHW Defrost
Allow system to tun defrost by
using hot water instead of room Yes No
unit for better room comfort.
5.23 > Heating control
To select unit operation
condition whether to achieve
set temperature faster or to
save energy.
It is a function for Heating +
Tank operation. When “Variable”
is selected in the “5.5 DHW
capacity” setting, the tank
heat-up process will be delayed Comfort _v
Efficiency

until a much lower tank water
temperature is reached, which
improves the efficiency of the
heating process. To ensure
sufficient hot water, select
either “Comfort” in this setting
or “Standard” in the “5.5 DHW
capacity” setting.

--- Page 60 ---
[Text read by OCR from the page image: check figures against the PDF]
/Menu i Default Setting Setting Options / Display

5.24 > External meter

To set which external meter
to be used depends on meter
connection.
There are generation
meters and various types of
electricity meters.
For generation meters,
there are two connection
systems :-
a) One generation meter
system :
Heat-cool meter only
b) Two generation meter
system :
Heat-cool meter and Tank
meter

Heat-cool meter : No

* Tank meter : No

Elec. meter HP : No

Elec. meter 1 (PV) : No
Elec. meter 2 (Building) : No
Elec. meter 3 (Reserve) : No

* Only available when Heat-cool meter select
Yes

External meter 10:34am,Mon
Tank meter

Elec. meter HP

Elec. meter 1 (PV)

~Select [+i] Confirm

External meter 10:34am,Mon

Elec. meter HP
Elec. meter 1 (PV)
Elec. meter 2 (Building)

“Select [+] Confirm

> Heat-cool meter

- Set Heat-cool meter to Yes when this
generation meter is connected.

- It is to measure energy generation of heat
pump unit during heating, cooling and DHW
operation (one generation meter system)
or during heating and cooling only (two
generation meter system).

Yes

> Tank meter

- Set Tank meter to Yes when this generation
meter is connected.
- It is to measure energy generation of heat
pump unit during DHW operation.
* Only available to select when Heat-cool
meter is set to Yes.
Only set Tank meter to Yes when the

connection is two generation meter system.

Yes

> Elec. meter HP

- Set Elec. meter HP to Yes when this
electricity meter is connected.

- It is to measure energy consumption of heat
pump unit.

Yes

> Elec. meter 1 (PV)

- Set Elec. meter 1 (PV) to Yes when this
electricity meter is connected.

- Itis to measure energy generation of solar
system.

* This data will be displayed only on Cloud
system.

Yes

> Elec. meter 2 (Building)

- Set Elec. meter 2 (Building) to Yes when this
electricity meter is connected.

- Itis to measure energy consumption of the
building.

* This data will be displayed only on Cloud

system.

Yes

--- Page 61 ---
[Text read by OCR from the page image: check figures against the PDF]
/Menu i Default Setting Setting Options / Display

> Elec. meter 3 (Reserve)
- Set Elec. meter 3 (Reserve) to Yes when this
electricity meter is connected. Yes
- Itis to measure energy consumption rN
* This data will be displayed only on Cloud
system.
5.25 > Electrical anode
To enable or disable operation _| Yes (for -AN models)
of electrical anode. No (for non -AN models) No

(NOTE) : If [Approx.] is shown on Energy Monitor display, data displayed on the remote controller is obtained through heat
pump’s internal calculation.

If [Approx.] is NOT shown on Energy Monitor display, data** displayed on the remote controller is obtained by
External Meters.

Data stored on the Aquarea unit can be mixed between internal calculation and External Meters.
“In order to know the exact consumption or generation, please use as reference always the External Meters’ data.

Remark : Elec. stands for “Electricity”
HP stands for “Heat pump”

--- Page 62 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  sts—s—s—siY Default Setting Setting Options / Display

6 Installer setup > Operation setup

To access to the four major ; Operation setup 10:34am,Mon
functions or modes. 4 main modes Het —ss—“‘t‘s*s*s*~*S*S~S~*™S
Cool
Auto
Heat / *! ** Cool / ** *? Auto / Tank Tank
~5elect [—] Confirm
6.1 > Heat
To set various water & ambient Operation setup 10:34am,Mon
temperatures for heating. Water temp. for heating ON / Heat
Outdoor temp. for heating OFF /
AT for heating ON / Outdoor temp. for heating OFF
Heater ON/OFF AT for heating ON
w5elect [4] Confirm

> Water temp. for heating ON

Operation setup 10:34am, Mon
Heating ON Heat ON: Water temp.
| CCE Compensation curve
Compensation curve ; .
compensation curve Direct
or direct input.
w5elect [4] Confirm

> Water temp. for heating ON > Compensation curve

Input the 4 Heat = Water temp.:Zone1
i 55°C iam
Kod: §°6,15°c | femperte ponte | BH
Y axis: 55 °C, 35 °C

axis, 2 on vertical Y 20 rs] 15) 15
axis). «>Select [+] Confirm

* Temperature range: X axis: -20 °C ~ 15 °C, Y axis: See below

* Temperature range for the Y axis input:
WH-WDG model: 20 °C ~ 75 °C
Regardless of the above setting, there is a limit to the water temperature. Refer to
the operating condition on page 3.

* If 2 zone system is selected, the 4 temperature points must also be input for Zone
2.

+ “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.

> Water temp. for heating ON > Direct

Operation setup 10:34am,Mon
Heat ON: Water temp.:Zone2
35°C Temperature for Range: (20°C~75'°C) a»
heating ON Steps: +1°C | 35 ie
4
Select [+] Confirm

* Min. ~ Max. range is 20 °C ~ 75 °C:
WH-WDG model: 20 °C ~ 75 °C
Regardless of the above setting, there is a limit to the water temperature. Refer to
the operating condition on page 3.

* If 2 zone system is selected, temperature set point must input for Zone 2.

+ “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.

[leanne ieneieneieneteneteneioneieneiansineheneioneiensiensiansiensiansinianstenienstensianienienieiententensanienientententenienienientenientententeniententeniententententententententententententententententententenentenienentesentententenenenentenenteieneietentententeta]

--- Page 63 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu st titsts—s—sOY Default Setting Setting Options / Display

> Outdoor temp. for heating OFF

Operation setup 10:34am, Mon
Heat OFF: Outdoor temp.
24°C Temperature for Range: (5°C-35°C) a
heating OFF Steps: 41°C 24 he
<Select [+] Confirm
> AT for heating ON
Set AT for heating Operation setup 10:34am, Mon
ON. Heat ON: AT
5°C * This setting will not Range: (1°C~15°C) a
available to set when _ Steps: 41°C | 5 \e
pump flowrate set to v
Max. duty. >Select [+] Confirm
> Heater ON/OFF
> Heater ON/OFF > Outdoor temp. for heater ON
Operation setup 10:34am,Mon
Heater ON: Outdoor temp.
0°C Temperature for Range: (-20°C~15°C) a
heater ON Steps: #1°C Lo he
<Select [44] Confirm
> Heater ON/OFF > Delay time for heater ON
Operation setup 10:34am,Mon
Heater ON: Delay time
. F Delay time for heater —_ Range: (0:10~1:00) a
0:30 min to turn on Steps: +0:10
Vv
<Select [44] Confirm
> Heater ON/OFF > Water temperature for heater ON
Operation setup 10:34am,Mon

Setting of water
temperature to turn

Heater ON: AT of target Temp.
Range: (-10°C~-2°C)

4°C a rem
on from water set Steps: 41°C | -4 ie
temperature. bd
<Select [44] Confirm
> Heater ON/OFF > Water temperature for heater OFF
Operation setup 10:34am,Mon

Setting of water
temperature to turn

Heater OFF: AT of target Temp.
Range: (-8°C~0°C)

-2°C is a,
off from water set Steps: #1°C | -2 |e
temperature. v
SSelect [44] Confirm
6.2 >*'* Cool
To set various water & ambient Water temperatures for cooling ON Operation setup 10:34am, Mon

temperatures for cooling.

and AT for cooling ON.

Cool

Water temp. for cooling ON

AT for cooling ON

woelect [4] Confirm

aeeesheneleianeiehaneioneieneiesianehanetemeieneiansianeinstoneiemeiensinionsinetanetoneianeiensherekeeianeioneiensiensiensteeianienienienienientenientenientenientenientenientenieniententenienientententententeniententenentententeientenenteienenienentenenteneienentenenteieten 4
I

; *' The system is locked to operate without COOL mode. It can be unlocked only by authorised installers or our authorised service partners.

| «2

1 Only displayed when COOL mode is unlocked (This means when COOL mode is available).

--- Page 64 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu  sts—s—s—siY Default Setting Setting Options / Display

> Water temp. for cooling ON

Cooling ON
temperatures in
compensation curve
or direct input.

Compensation curve

Operation setup 10:34am, Mon
Cool ON: Water temp.

Compensation curve

Direct

~5elect [4] Confirm

> Water temp. for cooling ON > Compensation curve

Input the 4
X axis: 20 °C, 30 °C temperature points
ano ° (2 on horizontal X
Y axis: 15 °C, 10 °C . .
axis, 2 on vertical Y
axis)

Cool ON: Water temp: Zone1

20
po

1 [20%] [30°C] 20
4=>Select [4] Confirm

2

* If 2 zone system is selected, the 4 temperature points must also be input for Zone

+ “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.

> Water temp. for cooling ON > Direct

° Set temperature for
10°C Cooling ON

Operation setup 10:34am, Mon
Cool ON: Water temp.: Zone2
Range: (5°C~20°C) a
Steps: #1°C 10 Je

Select [4] Confirm

* If 2 zone system is selected, temperature set point must input for Zone 2.
+ “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.

> AT for cooling ON

Set AT for cooling ON Operation setup 10:34am, Mon
* This setting will not oot ON —
5°C available to set when Steve g ¢ ) rs he
pump flowrate set to »* Vv
Max. duty. Select [4] Confirm
6.3 >*'* Auto
Automatic switch from Heat to Outdoor temperatures for switching from Heat | Operation setup 10:34am, Mon
Cool or Cool to Heat. to Cool or Cool to Heat. Auto

Outdoor temp. for (Heat to Cool) /
Outdoor temp. for (Cool to Heat)

Outdoor temp. for (Heat to Cool)

Outdoor temp. for (Cool to Heat)

~5elect [4] Confirm
> Outdoor temp. for (Heat to Cool)
Operation setup 10:34am, Mon
Set outdoor Auto: Outdoor temp.(Heat to Cool)
15°C temperature for Range: (11°C~25°C) a
switching Steps: #1°C | 15 (a
from Heat to Cool. v
Select [4] Confirm

--- Page 65 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu — itsts—‘—s—sSY Default Setting Setting Options / Display

> Outdoor temp. for (Cool to Heat)

Operation setup 10:34am, Mon
Set outdoor Auto: Outdoor temp.(Cool to Heat)
10°C temperature for Range: (5°C-14°C) a
switching Steps: 41°C | 10 Ka
from Cool to Heat. ad
Select [4] Confirm
6.4 >Tank
Setting functions for the tank. Operation setup __10:34am,Mon

Floor operation time (max) /
Tank heat up time (max) /
Tank re-heat temp. /
Sterilization

Tank

[Floor operation time (max) __|
Tank heat up time (max)

Tank re-heat temp.

w5elect [+4] Confirm

* The display will show 3 functions at a time.

> Floor operation time (max)

Maximum time for
8:00 floor operation
(in hours and minutes)

Operation setup 10:34am, Mon
Tank: Floor ope. time (max)

Range: (0:30~10:00) a
Steps: 40:30 8:00
vv
>Select [+] Confirm

> Tank heat up time (max)

Maximum time for
1:00 heating the tank
(in hours and minutes)

Operation setup 10:34am, Mon
Tank: Heat up time (max)

Range: (0:05~4:00) a”
Steps: 40:05
bd
Select [+] Confirm

> Tank re-heat temp.

set for 1 or more days

Operation setup 10:34am, Mon
Set temperature to Tange: (Az)
-8°C perform reboil of tank Steps: nt ro Ke
>Select [+] Confirm
> Sterilization
Sterilization may be Operation setup 10:34am, Mon

Sterilization: Day

day(s) of the week to
12:00 sterilize the tank

0:00 ~ 23:59

Monday of the week. Sun [fay Tue |Wed | Thu | Fri | Sat
Sun / Mon / Tue / -|v|=-|=[-[=[=
Wed/Thu/Fri/Sat «bay SM/E] [Confirm
> Sterilization: Time
Time of the selected § Operation setup 10:34am,Mon

Sterilization: Time

fH: 00 pm

+> Select

[4] Confirm

--- Page 66 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu — s—s—s—sCY Default Setting Setting Options / Display

> Sterilization: Boiling temp.

Set boiling

Operation setup 10:34am,Mon
Sterilization: Boiling temp.
Range: (55°C~65'C)

ere ez theta, == HRP cr
~5elect [+] Confirm
> Sterilization: Ope. time (max)
Operation setup 10:34am, Mon

Set sterilizing time

0:10 (in hours and minutes)

Sterilization: Ope. time (max)

Range: (0:05~1:00) a
Steps: £0:05

Vv
<Select [4] Confirm

7 Installer setup > Service setup

7.1. >Pump maximum speed

To set the maximum speed of

Setting the flow rate, max. duty and operation

Service setup 10:34am, Mon

the pump. ON/OFF of the pump. Flow rate Max. Duty Operation
Max Duty. rene 0.0L/min —OXCE 4
Pump: ON/OFF/Air Purge * Select
7.2. >Dry concrete
To dry the concrete (floor, walls, Edit to set the temperature of dry concrete. Service setup 10:34am,Mon
etc.) during construction. Dry concrete
Do not use this menu for any ON / Edit Edit
other purposes and in period ,
other than during construction ~Select L-}Contirm
> Edit
Heating temperature — Service setup 10:34am,Mon
for drying the Dry concrete: 1/10
Stages: 1 concrete. Range: (25°C~55°C) a
Temperature: 25 °C | Select the desired Steps: 41°C | 25 Ke
stages: 1 ~ 10,
range: 1 ~ 99 “select [1] Confirm

>ON

Confirm the setting temperatures of dry
concrete for each stage.

Service setup 10:34am, Mon
Dry concrete: Status

Stage 1/10
Water set temp. : 25°C
Actual water temp. :25°C/25°C

[ch] OFF

--- Page 67 ---
[Text read by OCR from the page image: check figures against the PDF]
|Menu — sts—s—sdY Default Setting Setting Options / Display

7.3 > Service contact

To set up to 2 contact names
and numbers for the User.

. . , Service setup 10:34am, Mon
Service engineer's name and contact number. | Service contact:
Contact 1
Contact 2
Contact 1 / Contact 2
woelect [4] confirm
> Contact 1 / Contact 2
Contact name or number. Service contact 10:34am, Mon
Contact 1
Ela Bryan Adams
Name / phone icon «) _ :[08812345678
w5elect LH] Edit
Input name and number Contact
eee 0-9/Other

ABCDEFGHI JKLMNOPQR Space
STUVWXYZ abcdefghi BS

jkIimnopqrstuvwxyz Conf
4. >Select [+] Enter
Contact name: alphabet a ~ z. Number:
Contact number: 1 ~ 9 g23%
456)
789 - BS
xX OF _ Cont
4. >Select [+] Enter
8 Installer setup > Remote control setup
* To select whether to use
one remote controller or two Selection of one | Single |
remote controllers. or two remote Dus |
* Select Single when controllers. ua
one remote controller is
connected. Select Dual when
two remote controllers are me ma IS t
connected. Second remote se in x , RC. +) wil e
controller can be used for controller (RC-1) wi
zone 2 room temperature ne to communicate RC-1 & RC-2
control. with second remote sync. in progress!
Single controller (RC-2) and yine in Prog

display “RC-1 & RC-2
sync. in progress”.
They are ready to be
used after this pop up
screen disappears.

When both remote
controllers have
communication
failure, it will display
“Communication with
RC-2 failed”.

Communication with
RC-2 failed!

[=] Close

--- Page 68 ---
5.1.7

Main Components

5.1.7.1

WH-ADC0509L3E51

7

18

19

6

24

5

8-1

26
28

8-2
2

1

3

14
9
16 12
24

17

10

13

4
11 27

22

21

23
20

15

25

1

Remote Controller

10

Heater Assembly

20

Right Plate

2

Left Decoration Panel

11

3-Way Valve

21

Left Plate

3

Right Decoration Panel

12

Overload Protector (Not Visible)

22

Rear Plate

4

Water Pump

13

Expansion Vessel

23

Tank Sensor (Not Visible)

5

Control Board Cover

14

Drain plug

24

Bushing (4 pieces)

6

Control Board

15

Tank

25

Safety Relief Valve

7

Main PCB

16

Flow Sensor

26

17

Water Pressure Sensor

18

Front Plate

19

Top Plate

Network Adaptor Holder
Electric Anode Bar
(Not Visible - Applicable only for
WH-ADC0509L3E5AN1)
Electric anode PCB
(Not Visible - Applicable only for
WH-ADC0509L3E5AN1)

8-1
8-2
9

Single Phase RCCB/ELCB
(Main Power)
Single Phase RCCB/ELCB
(Backup Heater)
Magnetic Water Filter Set

27

28

--- Page 69 ---
5.1.7.2

WH-ADC0509L3E5UK1

7

18

19

6

24

2

1

8-1

5

8-2

26

3

14
9
16
24

12

17

10

13

25
22

11

21

4
23
20

15

1

Remote Controller

10

Heater Assembly

20

Right Plate

2

Left Decoration Panel

11

3-Way Valve

21

Left Plate

3

Right Decoration Panel

12

Overload Protector (Not Visible)

22

Rear Plate

4

Water Pump

13

Expansion Vessel

23

Tank Sensor (Not Visible)

5

Control Board Cover

14

Drain plug

24

Bushing (5 pieces)

6

Control Board

15

Tank

25

Temperature and Pressure
Relief Valve

7

Main PCB

16

Flow Sensor

26

Network Adaptor Holder

17

Water Pressure Sensor

18

Front Plate

19

Top Plate

8-1
8-2
9

Single Phase RCCB/ELCB
(Main Power)
Single Phase RCCB/ELCB
(Backup Heater)
Magnetic Water Filter Set

--- Page 70 ---
[Text read by OCR from the page image: check figures against the PDF]
5.2 Outdoor Unit

--- Page 71 ---
6. Dimensions
6.1

Indoor Unit

6.1.1

WH-ADC0509L3E51

490

50

b

70

a

e

f

c d

h

g

59

345

63

75 74

599

514

Tube Connector

465

Adjustable
Feet 1
position

77

1293

70

115

115

118

68

65

602

Function

Connector Size

a

Zone 1 Water Inlet (From Space Heating/Cooling)

R 1¼"

b

Zone 1 Water Outlet (To Space Heating/Cooling)

R 1¼"

c

Cold Water Inlet (Domestic Hot Water Tank)

R ¾"

d

Hot Water Outlet (Domestic Hot Water Tank)

R ¾"

e

Water Inlet (From Outdoor Unit)

R 1"

f

Water Outlet (To Outdoor Unit)

R 1"

g

Domestic Hot Water Tank Discharge (Drain Tap)
Type: Ball Valve

Rc 1/2"

h

Drain Water Hole

---

71

Unit: mm

--- Page 72 ---
WH-ADC0509L3E5UK1

b a

e

f

c

d

59

50

63

490
345
70
7574

602

70
824

1293

65

115

115

599
445

118
68

514

Adjustable
Feet 1
position

Tube Connector
a

77

h g

465

6.1.2

Function

Connector Size

Zone 1 Water Inlet (From Space Heating/Cooling)

R 1¼"

b

Zone 1 Water Outlet (To Space Heating/Cooling)

R 1¼"

c

Cold Water Inlet (Domestic Hot Water Tank)

R ¾"

d

Hot Water Outlet (Domestic Hot Water Tank)

R ¾"

e

Water inlet (From Outdoor Unit)

R 1"

f

Water outlet (To Outdoor Unit)

R 1"

g

Domestic Hot Water Tank Discharge (Drain Tap)
Type: Ball Valve

Rc 1/2"

h

Drain Water Hole

---

72

Unit: mm

--- Page 73 ---
6.2

Outdoor Unit

55.5

33.5

<Top View>

<Front View>

126

<Side View>

95
50

430

<Rear view>

669
170

739

924

996

980

144

<Back view>
160

660

39

412.5

35.5

(160)

511

15.5
37.5

Drain hole

Unit: mm

--- Page 74 ---
7. Refrigeration and Water Cycle Diagram
1 ZONE
OUTDOOR UNIT

INDOOR UNIT

EXPANSION
VALVE

STRAINER

PANEL HEATER /
FLOOR HEATING
WATER OUTLET

WATER OUTLET
TEMP. SENSOR

SERVICE
VALVE
STRAINER

3-WAY VALVE
SANITARY HOT
WATER OUTLET

HEATER

PIPE TEMP
SENSOR

AIR
SEPARATOR

CONDENSER

PRESSURE
RELIEF VALVE
AIR TEMP.
SENSOR

FLOW SENSOR

WATER OUTLET
TEMP. SENSOR 2
HOT WATER COIL
WATER INLET
TEMP. SENSOR 2
REFRIGERANT
TEMP. SENSOR

PUMP

RECEIVER
4-WAY VALVE
EVAP. OUTLET
TEMP. SENSOR

PRESSURE
SWITCH

EXPANSION
VESSEL

HIGH PRESSURE
SENSOR
DISCHARGE
TEMP. SENSOR
COMPRESSOR
SERVICE
VALVE

REFRIGERANT CYCLE [HEATING]
REFRIGERANT CYCLE [COOLING]

74

WATER
DISCHARGE
VALVE

WATER INLET
TEMP. SENSOR
WATER
PRESSURE
SENSOR

FILTER

SANITARY COLD
WATER INLET
PANEL HEATER /
FLOOR HEATING
WATER INLET

--- Page 75 ---
POWER SUPPLY 1
1-phase
AC230V 50Hz

N

L

FUSE1

NOISE FILTER

75

POWER SUPPLY 2
1-phase
AC230V 50Hz

N

L

ELCB/RCCB

SC

REACTOR

FUSE3

RECTIFICATION
CIRCUIT

ELCB/RCCB

WATER
PUMP
CIRCUIT

M
1~

RY-V3
RY-ANODE

2-WAYS 3-WAYS
CURRENT
VALVE
VALVE ANODE SYSTEM

M
1~

BACKUP HEATER

RY-HT (L3)

WATER
PUMP

M

RY-V2

EXTRA
PUMP

M
1~

SSR1

SUB

WATER
PUMP
ZONE 1

M
1~

SSR200

WATER
PUMP
ZONE 2

M
1~

SSR201

POOL
WATER
PUMP

M
1~

M
1~
M
1~
MIXING
VALVE 1

SSR203 SSR204

SOLAR
WATER
PUMP

SSR202

M
1~
MIXING
VALVE 2

SSR205 SSR206

INDOOR UNIT

SSR207

3

2

1

COMMUNICATION
CIRCUIT

NOISE FILTER
CIRCUIT

RY-HT2

RY-HT1

BASE PAN
HEATER

FUSE1

OUTDOOR UNIT

RY-PWR2
RY-AC

PTC1

RECTIFICATION
CIRCUIT

FUSE4

FUSE3

SW POWER SUPPLY
CIRCUIT

ZERO CROSS
CIRCUIT

REACTOR

PFC CIRCUIT

Q800

Q500

MS
3~

FAN MOTOR

MS
3~

COMPRESSOR

8. Block Diagram

FUSE5
FUSE2

RECTIFICATION
CIRCUIT

--- Page 76 ---
POWER SUPPLY 1
Single phase AC230V 50Hz

BRW

BRW

WATER
PUMP

ERROR
SIGNAL

OPTIONAL

ZONE 2

WATER PUMP

ZONE 1

WATER PUMP

PUMP

SOLAR WATER

PUMP

POOL WATER

5

CN-CNT
(WHT)

1

SSR201

SSR200

CN208

RY201

SSR203

SSR202

CN209

LEAD WIRE FIXING FOR OLP

BLK

TO OUTDOOR UNIT

BLK

GROUNDING

(BLK)

3

(BLU)

2

(BRW)

1

ROOM TEMP.
ZONE 2

CN205

4
3
2
1

4
3
2
1

7

L

CN204

SIGNAL
DETECTION
CIRCUIT

N COOL HEAT

ROOM THERMO 2

CN201

M

BLK
RED
BRW
BLU

WHT 7

MIXING
VALVE 1

MIXING
VALVE 2

WATER
PUMP
CIRCUIT

RECTIFICATION
CIRCUIT

CN203

DC DC
GND 10V

CN207

VCC BIT2 BIT1

CN206

CN210

DCN
(BLU)
DCP
(RED)

CN-PWR204 2
(YLW)
3

1

2

1

4

1

BLK

ACL
(BLK)
(BLK)

1

5

L1
(WHT)

L2
(WHT)

CN1

2-WAY
VALVE

HT1-L3
(RED)

BLK

RED
RED

3
4

3
4

BLU

WHT

BRW
BRW

1
2

1
2

SIGNAL
DETECTION
CIRCUIT

RY-HT (L3)

3-WAY
VALVE

M
1~

BRW BLK

BLU

L

N

L

4

1

OLP
85±3°C

1

FLOW
OR
SENSOR
4

EXTRA PUMP

BRW
WHT
BLU
BLK

4
5

1

5

WHT
BLU
BLK
RED

5

1 BRW 1

BOILER CONTACT / DEFROST SIGNAL

CONTROL
PANEL

GROUNDING

FLOW
SENSOR

POWER SUPPLY 2
Single phase AC230V 50Hz

TANK TEMP. SENSOR 2 (THERMISTOR)

REMARKS:
WHT : WHITE
ORG : ORANGE
RED : RED
BLU : BLUE
BLK : BLACK
YLW : YELLOW
BRW : BROWN
GRN : GREEN
GRY : GRAY
Y/G : YELLOW/GREEN
RCCB/ELCB : RESIDUAL CURRENT CIRCUIT BREAKER/
EARTH LEAKAGE CIRCUIT BREAKER

TANK TEMP. SENSOR 1 (THERMISTOR)

1

WATER INLET TEMP. SENSOR (THERMISTOR)

WATER OUTLET TEMP. SENSOR (THERMISTOR)

BRW
WHT
BLU
BLK

BLK

BLK

(N1)

220V~240V 30A~40A
I n=30mA

BLU

RCCB/ELCB
(L1)

BRW

4

RED

1 3

WHT BLK

CN-DPS
(RED)
1 34

CN-TH2
(BLK)

6

1
CN-FLWSEN
(WHT)
4
1
CN-TH1
(WHT)

1
CN-OLP1
(BLU)
2

SSR1

BLK

BLK

EXTERNAL
CONTROL 1

SENSOR

BUFFER TANK

SENSOR

OUTDOOR AIR

ROOM TEMP.
ZONE 1

BACKUP HEATER (3kW)

OLP
85±3°C

ANODE
DIGITAL PRESSURE SENSOR
SYSTEM

ROOM THERMO 1 CURRENT

HEAT COOL N

CN2

SIGNAL
DETECTION
CIRCUIT

CN4

CN5

CN6

CN3
RY-CONTACT1

ELECTRONIC CONTROLLER
(MAIN)

SW2

RECTIFICATION
CIRCUIT

G03
(GRN)

GRN

SW1

WHT
1
1
WHT

WHT
2
2
WHT

NOISE
FILTER
CIRCUIT

CN-CNT2
(RED)

(GRN)

(BLK)

3 CN-PWR3

RED 1

BLU

WHT 1

WHT 2 CN-PWR4

WHT 1 CN-PWR2
WHT 2 (BLU)

WHT 5
CN-CNT
WHT
WHT 3 (WHT)
WHT
1

1 CN-PWR

WHT 3

FUSE 3
T3.15A L250V

ACN
(WHT)

NOISE
FILTER
CIRCUIT

COMMUNICATION
CIRCUIT

N OPEN CLOSE N OPEN CLOSE

CN-PUMP1
(WHT)

4
5
6
7

1

DATA
(BLK)
G02
(GRN)

G05
(GRN)

NOISE FILTER
CIRCUIT

ELECTRONIC CONTROLLER
(SUB)

BLK
RED
BRW
BLU

WHT

GRN

BLK

GRN

GRN

AC1-N
(BLU)

BLU
G01
(GRN)

FUSE1
AC1-L3 T6.3A L250V
(BRW/GRY)

SSR204

TERMINAL
BOARD

POOL TEMP.
SENSOR

BRW

SSR206

GROUNDING

ROOM TEMP.
ZONE 1

SSR207

HEAT/COOL
SWITCH

BLU

WATER TEMP.
ZONE 2

LEAD WIRE FIXING FOR HEATER

OPEN

220V~240V 30A~40A
I n=30mA

WATER TEMP.
ZONE 1

RY-V3

REACTOR

CLOSE

AC2-L3
(BLK)

WHT

N

(N)

DEMAND
SIGNAL

N

RCCB/ELCB
(L)
BRW

SOLAR TEMP.
SENSOR

CN-COMM
(YLW)
CN-PWR202
(YLW)

EXTERNAL
COMP. SW

SSR205

SG SIGNAL

RY-V2
CLOSE

76
OPEN

AC2-N2
(BLU)
RY-ANODE

9.1

AC2-N3
(BLU)

RED

9. Wiring Connection Diagram
Indoor Unit

--- Page 77 ---
TO INDOOR UNIT

REMARKS;
BLU : BLUE
BLK : BLACK
WHT : WHITE
RED : RED
YLW : YELLOW
GRY : GRAY
GRN : GREEN
ORG : ORANGE
BRN : BROWN

BASE PAN
HEATER

OPTION

CONTROL
BOARD

1
2
3
4

WHT
1
2
WHT
3
4
(WHITE)

BLK

CONTROL
BOARD

CN-DIS
(WHITE)
1 2

CN-HT2
(WHITE)
1
3

DATA
(BLACK)

CONTROL GRN FG101
BOARD
(GREEN)

FG100
(GREEN)

OUTDOOR DISCHARGE TEMP. SENSOR
(THERMISTOR)

GRN/YLW

BLU
GRN

AC-N
(BLUE)

t°

NOISE
FILTER
CIRCUIT

t°

CN-TH1
(WHITE)
12 3 4

COMMUNICATION
CIRCUIT

RY-HT1
RY-HT2

BLK
1

1
2
3

t°

OUTDOOR AMBIENT TEMP. SENSOR (THERMISTOR)
BLK
1
1
2
2
BLK
BLK
3
3
4
BLK
4

PTC1

CN-TH3
(BLACK)
12 3 4

t°

GRY

FUSE4
20A 250V

FUSE3
20A 250V

RAT1
(GRAY)

t°

CN-TH4
(WHITE)
12 3 4 5 6 7

t°

PFC
CIRCUIT

t°

CN-EV1
(WHITE)
12 3 4 5 6

SW POWER SUPPLY
CIRCUIT

ZERO CROSS
CIRCUIT

RAT2
(GRAY)

GRY

ELECTRONIC CONTROLLER

RECTIFICATION
CIRCUIT

RY-PWR2
WATER OUTLET TEMP. SENSOR2 (THERMISTOR)
1
1
BLK
2
2
BLK
3
3
BLK
4
4
BLK
BLK
BLK

FUSE1
AC-L
(BROWN) 30A 250V

(WHITE)
OUTDOOR HEAT EXCHANGER TEMP. SENSOR
(THERMISTOR)

(WHITE)

(BLUE)
WATER INLET 2 TEMP. SENSOR
(THERMISTOR)
1
1

BRN

EVAPORATOR OUTLET TEMP. SENSOR
(THERMISTOR)

RY-AC

(YELLOW)

1

2
2

1

REACTOR

2
2
(YELLOW)
REFRIGERANT TEMP. SENSOR (THERMISTOR)

TERMINAL BOARD

BLK
2
2
(WHITE)

1

WHT
YLW
ORG
BLU

FUSE2
T3.15A L 250V
BLK
BLK
1
2
3
4

1
2
3
4

RED

77

1
2
3
4
5
6

0.708 Ω
N

P

CN-PSW
(RED)
1 2

N

P

5

3

1

CN-HPS
(RED)
12 3 4

HIGH
PRESSURE
SENSOR

2

BLUE

RED

2

(WHITE)
1
1

(WHITE)
1
1
2
2
3
3

MS
3~

COMPRESSOR TERMINAL

(BOLT)

YELLOW

ELECTRO
MAGNETIC COIL
(4-WAYS VALVE)

FAN MOTOR

MS
3~

COMPRESSOR

(WHITE)
3
3 RED
2
2 BLU
1 YLW
1

(BOLT)

BLU
BLU

BLU

YLW

RED

YLW

BLU
2
1

RED
3

CN-HOT 1
(BLUE) 3

V

U

CN-FM1
(WHITE)

W

V

U

CN-COMP
(WHITE)

W

Q500

Q800

FUSE5
T3.15A L 250V
(WHITE)

ELECTRO
HIGH
MAGNETIC COIL
PRESSURE
(EXPANSION VALVE) SWITCH

M

1
2
3
4
5
6

U-W
BLK

Note: Resistance at 20°C of ambient temperature.
BLK

0.707 Ω
1
2
3

V-W
1
2
3

0.722 Ω
WHT

9KD420XAD21

U-V
(WHITE)

CONNECTION
BLK
RED

WH-WDG05LE5 / WH-WDG07LE5 /
WH-WDG09LE5
1
2
3
4

MODEL
(RED)

Resistance of Compressor Windings
1
2
3
4

9.2
Outdoor Unit

--- Page 78 ---
ERROR
SIGNAL

OPTIONAL

ZONE 2

WATER PUMP

ZONE 1

WATER PUMP

PUMP

1

*CN205

5
CN-CNT *C204 *C208
0.1u
0.1u
16V
16V

L202

5V_2

L201

12V

SSR201

SSR200

CN208

RY201

SSR203

SSR202

ROOM TEMP.
ZONE 2

PUMP

ROOM TEMP.
ZONE 1

5V

R226
10k

C210 C212
1000p 1000p
50V
50V

R222
10k

*CN204

R218
4.7k

5V

4

3

C217
1u
16V

C215
1u
16V

R260
6.49k
1%

*R265

C239
2200p
50V

R269
374k
1%

5V

4

1

2

ZD202
5.6V

2

L203

C277
0.022u
50V

CN207

2

C293
1u
50V

12V

VCC BIT2 BIT1

CN206

R261
6.49k
1/10W
1%

5V

C238
1u
16V

*R278

ZD203
20V

ZD201
20V

R201
10k

G2 G2
R275
10k

3

DC DC
GND 10V

R263
1M
1/10W L204
1%

R264
1%
10k

R266
8.2k
1%

*R231
3.9k

SIGNAL
DETECTION
CIRCUIT

4
3
2
1

7

G05
(GRN)

GRN
GRN

MIXING
VALVE 1

CN203

C246
0.82u
50V
C247
0.01u
50V

IC204

C244
0.01u
50V

*R279

C222
1000p
50V

CN210

C248
1000u
25V

3
1
OUTPUT
INPUT
2
GND

12V

C294
1u
50V
G2

20V

5V

4

1

5V_2
1
2
3

2

C245
3300u
35V
*DCP
Red

*DCN
Blue

+ C201
220u
10V
CN-PWR204

*R280

G2 5V

*CN-PWR202 1

RED

CN-PWR2
Blue

G2

1

1

C104
0.1u
16V

C139
1000p
50V

C122
1000p
50V

*C57

R176
10k

G6

G2

L4

L6

CN1

L5

5V_2

C63
1000p
50V

12V

R86
10k

C128
1u 5V
16V
G2
R175
10k

G2
G2
5 CN-CNT2

CN-PWR3
3 Green

G2
20V

G2

SW2

BLK

RED

3
4

3
4

2-WAY
VALVE

3-WAY
VALVE

M
1~

BRW BLK

BLU

L

N

L

RY-ANODE
1
2
3
4
5
6
7

R124
1k

ANODE
SYSTEM

RED

1 3

WHT BLK

C142
1u
16V
1 3 4

R1
10k

5V

C81
1u
16V

CN-DPS
Natural

G2

C79
1u
16V

DIGITAL PRESSURE SENSOR

G1

C141
220u
10V
+

R155
1k G1
5V

C134
1000p
50V

C137
1u
16V

C117
0.047u
25V

C89
1u
16V
G2

R141
6.49k
1%

5V

C88
1u
16V

5V

CN4

C90
1u
16V

BLK
2

G2

*CN-TH2

4

1

6

CN-TH1
1

G2

4

CONTROL
PANEL

4

1

OLP
85±3°C

1

FLOW
OR
SENSOR
4

EXTRA PUMP

BRW
WHT
BLU
BLK

4
5

1

5

WHT
BLU
BLK
RED

5

1 BRW 1

BOILER CONTACT / DEFROST SIGNAL

BLK

BLK

EXTERNAL
CONTROL 1

SENSOR

BUFFER TANK

SENSOR

OUTDOOR AIR

ROOM TEMP.
ZONE 1

FLOW
SENSOR

TANK TEMP. SENSOR 2 (THERMISTOR)

TANK TEMP. SENSOR 1 (THERMISTOR)

WATER INLET TEMP. SENSOR (THERMISTOR)

WATER OUTLET TEMP. SENSOR (THERMISTOR)

BRW
WHT
BLU
BLK

BLK

CN-OLP1
Blue
1

SSR1

CN-FLWSEN
1

12V

R130
10k

R140
20k
1%

G2

G2

CN5

CN6

POWER SUPPLY 2
Single phase AC230V 50Hz

CN3
RY-CONTACT1

+ C91
220u
10V

C92
0.1u
16V

*RY-HTL1

*RY-HTL2

RY-HTL3

C93
100p
50V

G2

C143
1u
16V

R171
6.49k
1%

5V

GROUNDING

ZD2 C123
1u
20V
50V

R135
20k
1%

*R11

2

1

G2

(N1)

RCCB/ELCB
(L1)

BLU

BRW

220V~240V 30A~40A
I n=30mA

C98
1u
16V

5V
R143
6.49k
1%

R132
820

*R16

*R12

*R22

G2

*R23

R119
1k

3

4

R24
10k

5V

*R21

*JP8

*R166

R169
10k

C115
0.047u
25V

G3

16
15
14
13
12
11
10

IC9

C31
0.01u
50V

R25
1k

PC1

R142
1k
C112
0.047u
25V

R134
1k

BACKUP HEATER (3kW)

OLP
85±3°C

C108
0.047u
25V

ROOM THERMO 1 CURRENT

HEAT COOL N

CN2

SIGNAL
DETECTION
CIRCUIT

BLU

WHT

BRW
BRW

SIGNAL
DETECTION
CIRCUIT

AC2-L3
(BLK)

1
2

AC2-N2
(BLU)

RED

RY-HT (L3)

ELECTRONIC CONTROLLER
(MAIN)

C61
1000p
50V

SW1

R81
10k

5V

G03
(GRN)

L1
(WHT)

L2
(WHT)

RECTIFICATION
CIRCUIT

GRN

WHT
1
1
WHT

NOISE
FILTER
CIRCUIT

CN-PWR4
Black

5V_2

2

1

WHT 1

BLU

(BLK)

1 CN-CNT

3

5

WHT 2

WHT

WHT

WHT
WHT
WHT
WHT

BLK

ACL
(BLK)

1 CN-PWR

WHT 3

FUSE 3
T3.15A L250V

ACN
(WHT)

*CN-COMM

+ C282
220u
10V
C221
1000p
50V

WATER
PUMP
CIRCUIT

MIXING
VALVE 2

CN-PUMP1
(WHT)

4
5
6
7

1

NOISE
FILTER
CIRCUIT

COMMUNICATION
CIRCUIT

NOISE FILTER
CIRCUIT

RECTIFICATION
CIRCUIT

N OPEN CLOSE N OPEN CLOSE

BLK
RED
BRW
BLU

WHT

GRN

DATA
(BLK)
G02
(GRN)

G01
(GRN)

BLK

AC1-N
(BLU)

FUSE1
AC1-L3 T6.3A L250V
(BRW/GRY)

BLU

BRW

ELECTRONIC CONTROLLER
(SUB)

PC201 1

R205
10k

BLK 4
RED 3
BRW 2
BLU 1

N COOL HEAT

C286
0.047u
25V

L

4

G2 G2

PC211 1

3

C203
0.01u
16V

R206
1k

5V

C284
0.047u
25V

M

WHT 7

ROOM THERMO 2

CN201

WATER
PUMP

4

C289 R276
0.01u 10k
16V

R277
1k

5V

*C285

R235
1k

R238
1k

*R243

GROUNDING

(BLK)

3

(BLU)

2

(BRW)

1

TERMINAL
BOARD

GROUNDING

R267
1%
47k

*PC205

3

*R225 C276
3.9k 0.022u
50V

1

2

R227
4.7k

*PC204

C242
1u
16V

R234
6.49k
1%

5V

C219
1u
16V

*R268

C220 + C218
220u
1u
10V
16V

5V

TO OUTDOOR UNIT

220V~240V 30A~40A
I n=30mA

SSR204

BLU

SSR206

WHT
2
2
WHT

OPEN

POOL WATER

POOL TEMP.
SENSOR

K

K
A

SOLAR WATER

WATER TEMP.
ZONE 2

AC2-N3
(BLU)

REACTOR

CLOSE

POWER SUPPLY 1
Single phase AC230V 50Hz

K

A

RY-V2
CLOSE

CN209

WATER TEMP.
ZONE 1

N

RCCB/ELCB
(L)
BRW

SOLAR TEMP.
SENSOR

N

(N)

SG SIGNAL

A

DEMAND
SIGNAL

SSR205

EXTERNAL
COMP. SW

78
HEAT/COOL
SWITCH

SSR207

HT1-L3
(RED)
RY-V3
OPEN

K
A

1
2

10. Electronic Circuit Diagram

10.1 Indoor Unit

--- Page 79 ---
TO INDOOR UNIT

BASE PAN
HEATER

OPTION

CONTROL
BOARD

WHT
1
2
WHT
3
4
(WHITE)

BLK

CONTROL
BOARD

RY-HT1
RY-HT2

R920
1k
1/16W

COMMUNICATION
CIRCUIT

t°

t°

t°

G4
12

CN-TH3
Black
3 4

t°

t°

IC802
4
13
14
3
2
15
16
1

IC801
4
13
14
3
15
2
16
1

t°

t°

R846
1/4W

R845
1/4W

4.7K

CN-EV1
White
6

R847
1/4W

-50V
-100mA

ELECTRO
MAGNETIC COIL
(EXPANSION VALVE)

M

C

10K B

E Q604

G5

R944
10k

1 2 3 45

R843
1/4W
R844
1/4W

5V

ELECTRONIC CONTROLLER

PFC
CIRCUIT

G4
CN-TH4
1 2 3 4 5 6 7 White

SW POWER SUPPLY
CIRCUIT

ZERO CROSS
CIRCUIT

FUSE4
20A 250V

FUSE3
20A 250V

C610 R610 R611 R612
1u
3.24k 20k 3.24k
10V
1%
1%
1%
G4
C611
C612
5V
1u
C604
C613
1u
10V
1u
1u
R609
10V
G4
10V
10V
7.5k
G4
G4
0.5%
G4
C609
1u
G4
10V

5V

5V

RECTIFICATION
CIRCUIT

PTC1

C915 R606
0.1u 15k R607
1% 7.5k
50V
0.5%
5V
G5
R921
C603 R604
4.99k
1k
1u
0.5% C914 1/16W
C602
10V
1u
0.1u
G4
G4
G4
10V
50V
CN-DIS
CN-TH1
G4
G5
1 2 White
1 2 3 4 White

CN-HT2
(WHITE)
1
3

DATA
(BLACK)

CONTROL GRN FG101
BOARD
(GREEN)

1
2
3
4

GRN/YLW

FG100
(GREEN)

NOISE
FILTER
CIRCUIT
RY-AC

(WHITE)
OUTDOOR HEAT EXCHANGER TEMP. SENSOR
(THERMISTOR)

BLU
GRN

EVAPORATOR OUTLET TEMP. SENSOR
(THERMISTOR)

AC-N
(BLUE)

BLK

1

RY-PWR2

2
2

1
1
(YELLOW)

1
2
3

WATER OUTLET TEMP. SENSOR2 (THERMISTOR)
1
1
BLK
2
2
BLK
3
3
BLK
4
4
BLK
BLK
BLK

FUSE2
T3.15A L 250V

OUTDOOR AMBIENT TEMP. SENSOR (THERMISTOR)
BLK
1
1
2
2
BLK
BLK
3
3
4
BLK
4

RAT1
(GRAY)

(BLUE)
WATER INLET 2 TEMP. SENSOR
(THERMISTOR)
1
1

GRY

2
2
(YELLOW)
REFRIGERANT TEMP. SENSOR (THERMISTOR)

TERMINAL BOARD

OUTDOOR DISCHARGE TEMP. SENSOR
(THERMISTOR)

WHT
YLW
ORG
BLU

RAT2
(GRAY)

(WHITE)

FUSE1
AC-L
BRN (BROWN) 30A 250V

BLK

2
2
(WHITE)

1

BLK
BLK
1
2
3
4

1
2
3
4

RED
1
2
3
4
5
6
1
2
3
4
5
6

G2

50V
100mA

10K

1

HIGH
PRESSURE
SWITCH

V

U

W

1 2

R930
20k
1/16W
G5

N

P

CN-PSW
2 Red

15V

Q600 R600
10k
4.7k B

G5
C600
4.7u
25V

E

C

N

P

Q500

Q800

BLK

(WHITE)

GRY

BLU
5

C620
4.7u
25V

3

CN-HPS
3 4 Red

G4

5V

D700
200V

HIGH
PRESSURE
SENSOR

0

10

20

30

40

50

60

70

0

10

20

30

40

50

60

70

BLU
BLU

YLW

1

RED

YLW

3

BLU
2

1

RED
3

CN-HOT
Blue 1

CN-FM1
(WHITE)

G2A

W

V

U

CN-COMP
(WHITE)

Resistance (kΩ)

(WHITE)

(RED)

FUSE5
T3.15A L 250V
BLK
1
2
3
1
2
3

WHT

K
A

BLK
RED
1
2
3
4
1
2
3
4

79

Resistance (kΩ)

REACTOR

2

0

10

20
Temperature (oC)

1

Sensor

30

40

2 Outdoor Heat Exchanger

1 Outdoor Air Sensor

Sensor (Thermistor)
Characteristics

2

20

60

80
Temperature (oC)

40

100

120

140

50

ELECTRO
MAGNETIC COIL
(4-WAYS VALVE)

FAN MOTOR

MS
3~

Compressor Temp. Sensor
(Thermistor) Characteristics

-10

2

(WHITE)
1
1

(WHITE)
1
1
2
2
3
3

MS
3~
COMPRESSOR

(WHITE)
3
3 RED
2
2 BLU
1 YLW
1

10.2 Outdoor Unit

--- Page 80 ---
11. Printed Circuit Board
11.1 Indoor Unit
11.1.1 Main Printed Circuit Board

G02
CN-OLP1

CN-PWR2

CN1

CN-PWR3
G01
DATA
AC1-N
AC1-L3

CN-PWR4
CN-FLWSEN
CN-TH2

CN2

CN-TH1
CN-TH3

CN-CNT

CN3

CN5

80

CN4

CN6

--- Page 81 ---
[Text read by OCR from the page image: check figures against the PDF]
11.1.2 Sub Printed Circuit Board (Optional)

-O
t

t:

(178)
Ov

2 OWYNSHL “i i

Z 3N0Z
al W

YNVL Y345N8 dA3IL WOON dW3L WOO"
-

3N0Z

,

CN205—

MOSNAS

CN-PWR204 —

T OWN3HL WOOU

CN-CNT —-#

CN204 —+=

5 a) 22
iaclas Bi Me “|

Pitt Oe 7%) 3
CN207 ——a tee —— CN203
CN-COMM — sa en a * = — CN-PWR202
5 ~

oO **:
\ SIGNAT.

Fs (ee >
by an /
|
CN206 ocp| CN210
DCN

--- Page 82 ---
11.2 Outdoor Unit
11.2.1 Main Printed Circuit Board

CN-COMP

RAT1

CN-FM1
CN-HT2

RAT2
CN-PSW
CN-DIS
CN-TH1
FG101

CN-HPS
CN-TH3

CN-TH4

CN-HOT
CN-EV1

AC-N

82

AC-L
DATA

FG100

--- Page 83 ---
12. Installation Instruction
Attached accessories
No.

Optional Accessories

Accessory part

Qty.

No.

Adjustable Feet
1
□

2
□

3
□

4
Drain Elbow
1
Packing for drain

Accessories part

Qty.

5
□

Remote Controller Case

1

6
□

Extension Cable (CZ-TAW1-CBL)

1

7
□

Optional PCB (CZ-NS5P)

1

1

Network Adaptor (CZ-TAW1B)
4
□

1

Field Supply Accessories (Optional)



No.

Part

Model

Specifications

Maker

i

2-way valve kit
*Cooling model

Electromotoric Actuator

SFA21/18

AC230V, 12 VA

Siemens

2-port Valve

VXI46/25

ii

Room thermostat

Wired

PAW-A2W-RTWIRED

Wireless

PAW-A2W-RTWIRELESS

iii

Mixing valve

-

iv

Pump

v

Buffer tank sensor

Siemens
AC230V

-

167032

AC230V, 6VA

Caleffi

-

Yonos 25/6

AC 230V, 0.6 A max

Wilo

-

PAW-A2W-TSBU

-

-

vi

Outdoor sensor

-

PAW-A2W-TSOD

-

-

vii

Zone water sensor

-

PAW-A2W-TSHC

-

-

viii

Zone room sensor

-

PAW-A2W-TSRT

-

-

ix

Solar sensor

-

PAW-A2W-TSSO

-

-

x

Wall mounting bracket

-

-

-

-

It is recommended to purchase the field supply accessories listed in above table.

--- Page 84 ---
12.1

Indoor Unit (For WH-ADC0509L3E51 only)

12.1.1 Select the Best Location

12.1.1.2

Before choosing the installation site, obtain user
approval.
 Install the Tank Unit in indoors with frost free
weather proof location only.
 Must install on a flat horizontal and solid hard
surface.
 There should not be any heat source or steam
near the Tank Unit.
 A place where air circulation in the room is good.
 A place where drainage can be easily done
(e.g. Utility room).
 A place where Tank Unit’s operation noise will not
cause discomfort to the user.
 A place where Tank Unit is far from door way.
 A place where accessible for maintenance.
 Ensure to keep minimum distance of spaces as
illustrated below from wall, ceiling, or other
obstacles.
 A place where flammable gas leaking might not
occur.
 Secure the Tank Unit to prevent it being knocked
over accidentally or during earthquakes.








Hold
Hold arrow section
to slide and move

Please avoid installations which expose the Tank Unit
to any of the following conditions:
 Extraordinary environment conditions; installation
in frost or exposure to unfavorable weather
conditions.
 Voltage input exceeding the specified voltage.

12.1.1.1

1. Make a through hole. (Check pipe diameter and
insulation thickness)
2. Insert the piping sleeve to the hole.
3. Fix the bushing to the sleeve.
4. Cut the sleeve until it extrudes about 15 mm from
the wall.

(Unit : mm)
Min.
350

CAUTION

.
in
M 00
1

in.
M 00
7

Hold

12.1.2 To Drill a Hole in the Wall and
Install a Sleeve of Piping

Required Space for Installation

M
10 in.
0

Transport and Handling

Be careful during transportating the unit so that it
is not damaged by impact.
Only remove the packaging material once it has
reached desired installation location.
It may need three or more people to carry out the
installation work. The weight of Tank Unit might
cause injury if carried by one person.
The Tank Unit can be transported either in vertical
or horizontal.
- If it transported in horizontal, make sure Front
of packaging material (printed with “FRONT”)
must facing upwards.
- If it transported in vertical, use the hand holes
on sides, slide and move to the desired
location.
Fix the Adjustable Feet 1 , if the Tank unit
installed on a uneven surface.

When the wall is hollow, please be sure to use the sleeve for
tube assembly to prevent dangers caused by mice biting the
connection cable.

M
10 in.
0

5. Finish by sealing the sleeve with putty or caulking
compound at the final stage.
Wall
Indoor

Outdoor
15 mm

Sleeve for tube
assembly
Approx. 5 - 7 mm

Through hole

84

Bushing for tube assemblys
Putty or caulking compound

--- Page 85 ---
Open and Close Front Plate ⑱
1. Remove the 2 mounting screws of Front Plate ⑱.
2. Slide it upwards to unhook the Front Plate ⑱
hook.
3. Reverse above steps 1~2 for close it.

12.1.3 Piping Installation
12.1.3.1

Water Quality Requirement

Must use water that complies with European Drinking Water
Directive (EU)2020/2184. The lifespan of the Tank Unit will be
shorter if groundwater (include spring water and well water) is
used.

12.1.3.4


The Tank Unit shall not be used with the tap water containing
contaminants such as salt, acid, and other impurities which may
corrode the tank and its component.



Use sanitized water that is free of Legionella and other bacteria
and microorganisms. If the water contains Legionella bacteria, it
may harm the health of the user.

12.1.3.2



Typical Piping Installation


Double
Temporary
connection to Check Valve
be removed assembly is
immediately acceptable
in house
after filling

Air-to-Water
Heatpump
Outdoor Unit



Radiator /
Floor Heater



Drain
Water



Tab /
Shower
Main
Supply



Check Shut Pressure
Valve Off Reducing
Valve Valve

Tundish

12.1.3.3



Fan Coil Unit

2-Way Valve
Expansion
Vessel

Tank Water
Discharge



Access to Internal Components
WARNING

This section is for authorized and licensed electrician/water
system installer only. Work behind the front plate secured by
screws must only be carried out under supervision of qualified
contractor, installation engineer or service person.

Water Piping Installation

Please engage a licensed water circuit installer to
install this water circuit.
This water circuit must comply with relevant
European and national regulations (including
EN61770), and local building regulation codes.
Ensure the components installed in the water
circuit could withstand water pressure during
operation.
Do not use worn out tube or detachable hose-set.
Do not apply excessive force to pipes that may
damage the pipes.
Choose proper sealer which can withstand the
pressures and temperatures of the system.
Make sure to use two spanners to tighten the
connection. Further tighten the nuts with torque
wrench in specified torque as stated in the table.
Cover the pipe end to prevent dirt and dust when
inserting it through a wall.
If non-brass metallic piping is used for installation,
make sure to insulate the pipes to prevent
galvanic corrosion.
Do not connect galvanised pipes, this will cause
galvanic corrosion.
Use correct nut for all Tank Unit tube connections
and clean all tubes with tap water before
installation. See Tube Position Diagram for detail.
Tube Connector

Nut Size

Torque

 a & b

RP 1¼"

117.6 N•m

c & d
e & f

RP ¾"

58.8 N•m

RP 1"

88.2 N•m

Torque wrench Spanner

Hook

2X (screw)
CAUTION
Open or close the Front Plate carefully.
The heavy Front Plate may injures the ﬁngers.

*The remote control cable is connected to the front
panel, so be careful when removing the panel.

--- Page 86 ---
(B) Circulating Pipework
 Connect Tank unit Tube Connector f to outdoor
unit inlet water socket.
 Connect Tank Unit Tube Connector e to Outdoor
unit outlet water socket.
 Failure to connect results in an error stop the
system.

CAUTION
Do not overtighten, overtightening may cause water leakage.










Make sure to insulate the water circuit pipes to
prevent reduction of heating capacity.
After installation, check the water leakage
condition in connection area during test run.
Failure to connect the tube appropriately might
cause the Tank Unit malfunction.
Protection From Frost:
If the Tank Unit is being exposed to frost while
power supply failure or pump operating failure,
drain the system. When water is idle inside the
system, freezing up is very likely to happen which
could damage the system. Make sure the power
supply is turned off before draining. Heater
Assembly ⑩ may be damaged under dry heating.
Corrosion Resistance:
Duplex stainless steel is naturally corrosion
resistant to mains water supply. No specific
maintenance is required to maintain this
resistance. However, please note that Tank Unit is
not guaranteed for use with a private water supply.
It is recommended to use a tray (field supply) to
collect water from the Tank Unit if water leakage
occur.

Model

WH-WDG05LE5*
WH-WDG07LE5*
WH-WDG09LE5*

(A) Space Heating/Cooling Pipework
 Connect Tank Unit Tube Connector a to outlet
connector of Zone 1 Panel/Floor heater.
 Connect Tank Unit Tube Connector b to inlet
connector of Zone 1 Panel/Floor heater.
 Failure to connect the tube appropriately might
cause the Tank Unit malfunction.
 Refer below table for the rated flow rate of each
particular Outdoor Unit.
Rated Flow Rate
(l/min)
WH-WDG05LE5*
WH-ADC0509L3E51,
WH-WDG07LE5*
WH-ADC0509L3E5AN1
WH-WDG09LE5*

Cool

Heat

14.3

14.3

20.1

20.1

23.5

25.8

Maximum Insulator Maximum
Inner
length
thickness Elevation
diameter
ø20
ø25

30 m

30 mm
or more

10 m

(C) Domestic Hot Water Tank Pipework
 It’s strongly recommended to install an expansion
vessel (field supply) in the Domestic Hot Water
Tank circuit. Refer Typical Piping Installation
section to locate the expansion vessel.
o Recommended pre-charge pressure of the
expansion vessel (ﬁeld supply) = 3.5bar
(0.35MPa)
 In high water pressure or water supply is above
5bar, please install the Pressure Reducing Valve
for water supply. If the pressure higher than that, it
might damage the Tank Unit.
 A Pressure Reducing Valve (field supply) with
below specification is strongly advised to be
installed along the line of the tube connector c of
Tank Unit. Refer Typical Piping Installation section
to locate both of these valves.
Recommended Pressure Reducing Valve
specifications:
 Set pressure: 3.5bar (0.35MPa)
 Must connect a faucet to Tank Unit Tube
Connector d and main water supply, in order to
supply water with appropriate temperature for
shower or tap usage. Failure to do so might cause
scalding.
 Failure to connect the tube appropriately might
causing the Tank Unit malfunction.

Recommended piping installation sequence:
(a) → (c) → (e) → (f) → (b) → (d)

Model

Water piping between outdoor unit and
indoor unit

*Do not install automatic air purge valves on indoor
water pipes. In the unlikely event that the R290
refrigerant leaks into the water circuit, there is a risk
that the refrigerant will leak indoors.

--- Page 87 ---
(D) Drain Elbow and Hose Installation
 Fix the Drain Elbow 2 and Packing 3 to the
bottom of Drain Water Hole h .

(E) Domestic Hot Water Tank Discharge (Drain
Tap) and Safety Relief Valve Pipework
 Safety Relief Valve 8bar (0.8MPa) incorporated in
Domestic Hot Water Tank.
 Drain Tap and Safety Relief Valve discharge
fittings share the same drainage outlet.
 Use R½" male connector for this drainage outlet
connection (Tube connector ).
 Piping must always be installed in a continuously
downward direction. It must not be longer than
2m, with no more than 2 elbows, and must not
allow condensation to build up or freezing to
occur.
 The pipe from this drainage outlet fitting must not
be shut off. The discharge must be freed.
 The end of this pipework must be in such a way
so that the outlet is visible and can not cause any
damage. Keep away from electrical components.
 It is recommended to fit a tundish into this
pipework. Tundish should be visible and
positioned away from frost environment and
electrical components.

Packing 3
Drain Elbow 2







Use inner diameter 17 mm drain hose in the
market, ﬁx to Drain Elbow 2 .
This hose must to be installed in a continuously
downward direction and in a frost-free
environment. Improper drain piping may cause
water leakage hence damage the furnitures.
If drain hose is long, use a metal support ﬁxture
along the way to eliminate the wavy pattern of
drain tube.
Guide the drain hose to outdoor as illustrated.

Discharge below
ﬁxed grating
Fixed grating
Trapped gulley
Possible wall
Illustration of guide drain hose to outdoor






Do not insert this hose into sewage or drain pipe
that may generate ammonia gas, sulphuric gas
etc.
If necessary, use hose clamp to further tighten the
hose at drain hose connector to prevent leakage.
Water will drip from this hose, therefore the outlet
of this hose must be installed in an area where the
outlet cannot become blocked.
If drain hose is in the room (where dew may form),
please increase the insulation by using POLY-E
FOAM with thickness 6 mm or above.

--- Page 88 ---
12.1.4 Connect the Cable to the Tank Unit
WARNING
This section is for authorized and licensed electrician only. Work behind the Control Board Cover ⑤ secured by screws must only be carried out
under supervision of qualified contractor, installation engineer or service person.
CAUTION
Please take extra precaution when open the control board cover ⑤ and control board ⑥ for unit installation
and servicing. Failure to do so may cause injury.

12.1.4.1

Fixing of Power Supply Cable and Connecting Cable

1. Connecting cable between Tank Unit and Outdoor Unit shall be approved polychloroprene sheathed flexible cord,
type designation 60245 IEC 57 or heavier cord. See below table for cable size requirement.
Model

Connecting Cable Size

Tank Unit

Outdoor Unit

WH-ADC0509L3E51,
WH-ADC0509L3E5AN1

WH-WDG05LE5*
WH-WDG07LE5*
WH-WDG09LE5*

4 × min 2.5 mm2




Ensure the colour of wires of Outdoor Unit and the terminal no. are the same to the Tank Unit respectively.
Earth wire shall be longer than the other wires as shown in the figure for the electrical safety in case of the
slipping out of the cord from the Holder (Clamper).
2. An isolating device must be connected to the power supply cable.
 Isolating device (disconnecting means) should have minimum 3.0 mm contact gap.
 Connect the approved polychloroprene sheathed power supply 1 cord and power supply 2 cord and type
designation 60245 IEC 57 or heavier cord to the terminal board, and to the other end of the cord to isolating
device (Disconnecting means). See below table for cable size requirement.
Model
Tank Unit

Outdoor Unit

WH-ADC0509L3E51,
WH-ADC0509L3E5AN1

WH-WDG05LE5*
WH-WDG07LE5*
WH-WDG09LE5*

Power Supply
Cord

Cable Size

Isolating Devices

Recommended RCD

1

3 × min 2.5 mm2

25A

30mA, 2P, type A

2

3 × min 1.5 mm2

15/16A

30mA, 2P, type AC

3. To avoid the cable and cord being damaged by sharp edges, the cable and cord must be passed through a
bushing (located at the bottom of Control Board ⑥) before terminal board. The bushing must be used and must
not be removed.
RCCB/ELCB
Terminals on the Outdoor Unit

1

2

3

1

2

3

Colour of wires (Connecting cables)
L

Terminals on the Tank unit

N

L1 N1

Terminal
Board

(Power Supply Cord)
Terminals on the isolating devices
from power supply (Disconnecting
means)

Tank Unit/
Outdoor Unit
connection
Power Supply 1 Power Supply 2
L

N

L1 N1

*1
Holder
(Clamper)

Power Supply 1
Cable

Terminal screw

Tightening torque cN•m {kgf•cm}

M4

157~196 {16~20}

M5

196~245 {20~25)

*1 - Earth wire must be longer than other cables for safety reasons

88

*1
Holder
(Clamper)

Power Supply 2
Cable

Connecting Cable

--- Page 89 ---
12.1.4.2

Wire Stripping and Connecting Requirement

10 ± 1mm

Wire stripping
Indoor/outdoor
connecting
terminal board

No loose strand
when insert

(gap between wires)

Conductor
fully insert

Conductor
over insert

Conductor not
fully insert

ACCEPT

PROHIBITED

PROHIBITED

5mm or more

12.1.4.3

Connecting Requirement

For Tank Unit WH-ADC0509L3E51, WH-ADC0509L3E5AN1 with WH-WDG05LE5*, WH-WDG07LE5*,
WH-WDG09LE5*
 The equipment’s Power Supply 1 complies with IEC/EN 61000-3-2.
 The equipment’s Power Supply 1 complies with IEC/EN 61000-3-3 and can be connected to current supply
network.
 The equipment’s Power Supply 2 complies with IEC/EN 61000-3-2.
 The equipment’s Power Supply 2 complies with IEC/EN 61000-3-3 and can be connected to current supply
network.
For Space Heating / Cooling
1. Start ﬁlling water (with pressure more than 1 bar
(0.1MPa)) to the Space Heating/Cooling circuit via
Tube Connector a .
2. Stop ﬁlling water if the free water ﬂow through
Pressure Relief Valve drain pipe. (Check the
Outdoor Unit)
3. Turn ON the Tank Unit.
4. Remote control menu → Installer setup →
Service setup → pump maximum speed →
Turn on the pump.
5. Make sure Water Pump ④ is running.
6. Check and make sure no water leaking at the tube
connecting points.

12.1.5 Charging and Discharging the
Water


Make sure all the piping installations are properly
done before carry out below steps.

12.1.5.1

Charge the Water

For Domestic Hot Water Tank
1. Set the Domestic Hot Water Tank Discharge
(Drain Tap)
to “CLOSE”.

“CLOSE”

“OPEN”

Domestic Hot Water Tank Discharge (Drain Tap) g

2. Set all Tap / Shower “OPEN”.
3. Start filling water to the Domestic Hot Water Tank
via Tube Connector c .
After 20~40min, water should flow out from Tap /
Shower.
Else, please contact your local authorized dealer.
4. Check and make sure no water leaking at the tube
connecting points.
5. Set the Domestic Hot Water Tank Discharge
(Drain Tap)
to “OPEN” for 10 seconds to
release air from this pipeline. Then set it “CLOSE”.
6. Turn the Safety Relief Valve o knob
counterclockwise slightly and hold for 10 seconds
to release air from this pipeline. Then recover the
knob to original position.
7. Ensure Step 5 & 6 is carried out each time after
charging water to Domestic Hot Water Tank.
8. To prevent back pressure from happening to the
Safety Relief Valve o, do turn the Safety Relief
Valve o knob counterclockwise.

A

Outdoor Unit

Pressure Relief Valve drain pipe
Pressure Relief Valve

--- Page 90 ---
12.1.5.2

Discharge the Water

12.1.6.3


For Domestic Hot Water Tank
1. Turn OFF power supply.
2. Set the Domestic Hot Water Tank Discharge
(Drain Tap)
to “OPEN”.
3. Open Tap / Shower to allow air inlet.
4. Turn the Safety Relief Valve o knob
counterclockwise slightly and hold it until all air is
released from this pipeline. Then recover the knob
to original position after ensured the pipeline is
emptied.
5. After discharge, set Domestic Hot Water Tank
Discharge (Drain Tap)
to “CLOSE”.



Expansion Vessel ⑬ Pre
Pressure Checking

For Space Heating / Cooling
 Expansion Vessel ⑬ with 10 L air capacity and
initial pressure of 1 bar is installed in this Tank
Unit.
 Total amount of water in system should be below
200 L.
(Inner volume of Tank Unit’s piping is about 5 L)
 If total amount of water is over 200 L, please add
another expansion vessel. (field supply)
 Please keep the installation height difference of
system water circuit within 10 m. (Extra pump may
be required)

WARNING
Be sure to switch off all power supply before performing each of
the below checkings.

Check Water Pressure

*(1 bar = 0.1MPa)
Water pressure should not lower than 0.5 bar (with
inspects the Water Pressure from Remote Controller).
If necessary add water into Tank Unit (via Tube
Connector a ).

12.1.6.2

Open the air vent plugs on the heating panel, fan
convector, etc., and remove the air accumulated
in the equipment and piping.
If the outdoor unit and the indoor unit are installed
on different ﬂoors, open the air vent plug on the
water plug of the outdoor unit and the air vent plug
on the heater bottle inside the indoor unit to
remove the air. (be careful, water will come out)

12.1.6.4

12.1.6 Reconfirmation

12.1.6.1

Check Air Accumulation

12.1.6.5

Check RCCB/ELCB

Ensure the RCCB/ELCB set to “ON” condition before
check RCCB/ELCB.
Turn on the power supply to the Tank Unit.
This testing could only be done when power is
supplied to the Tank Unit.

Check Pressure Relief Valve

*Pressure Relief Valve is mounted in the Outdoor Unit.
1. Conﬁrm that the pressure relief valve is working
properly, Pull the lever horizontal direction.
2. Release the lever when water comes out of the
drain pipe of the pressure relief valve.
(While the air continues to come out of the drain
pipe, keep raising the lever to completely
discharge the air.)
3. Conﬁrm that the water from the drain pipe stops.
4. If water is leaking, pull the lever several times and
return it to make sure the water stops.
5. If water keeps coming out of the drain, drain
water.
Turn off the system and contact your local
authorized dealer.

WARNING
Be careful not to touch parts other than RCCB/ELCB test button
when the power is supplied to Tank Unit. Else, electrical shock
may happen. Before obtaining access to terminals, all supply
circuits must be disconnected.






Lever
Pressure Relief Valve

90

Push the “TEST” button on the RCCB/ELCB. The
lever would turn down and indicate “0”, if it
functions normal.
Contact authorized dealer if the RCCB/ELCB
malfunction.
Turn off the power supply to the Tank Unit.
If RCCB/ELCB functions normal, set the lever to
“ON” again after testing finish.

--- Page 91 ---
12.1.7 Installation of Remote Controller
as Room Thermostat

12.1.7.3



1. Remove both Left Decoration Panel ② and Right
Decoration Panel ③ from Front Plate ⑱ with
gently push the panels from back.

Remote Controller ① mounted to the Tank Unit
can be moved to the room and serve as Room
Thermostat.

12.1.7.1






Installation Location

Install at the height of 1 to 1.5 m from the floor
(Location where average room temperature can
be detected).
Install vertically against the wall.
Avoid the following locations for installation.
1. By the window, etc. exposed to direct sunlight
or direct air.
2. In the shadow or backside of objects deviated
from the room airflow.
3. Location where condensation occurs (The
Remote Controller is not moisture proof or drip
proof.)
4. Location near heat source.
5. Uneven surface.
Keep distance of 1 m or more from the TV, radio
and PC. (Cause of fuzzy image or noise)

12.1.7.2

Remove the Remote Controller
from Tank Unit

Gently push
from rear

2. Remove the 4 screws and take out the holder with
Remote Controller ①.

Remote Controller Wiring

Tank Unit
Remote Controller
1
Remote Controller wiring
(field supply)
• No polarity

2

Remove 4 screws

Terminal for Remote Controller wiring







3. Remove the top case from the bottom case.

Remote Controller cable shall be (2 × min
0.3 mm2), of double insulation PVC-sheathed or
rubber sheathed cable. Total cable length shall be
50 m or less.
Be careful not to connect cables to other terminals
of Tank Unit (e.g. power source wiring terminal).
Malfunction may occur.
Do not bundle together with the power source
wiring or store in the same metal tube. Operation
error may occur.
When using the 2nd. Remote Controller (option),
connect it to the terminal of the tank unit by
tightening it together.

Bottom
case

Top case

Insert the
driver and
slightly turn.
Flat-blade
screwdriver

--- Page 92 ---
For embedded type
Preparation: Make 2 holes for screws using a driver.

4. Remove the wiring between Remote controller ①
and Tank Unit terminal.

Mount the top case.
• Align the claws of the
top case and then align
the claws of the bottom
case.

Claw
(3 places)

Avoid the wire
being caught.

Disconnect the
Remote controller
wiring

12.1.7.4

Mount the bottom case
to the wall.
• Pass the wire through the
hole in the centre of the
bottom case.

Slide it
downwards
to unhook

Mounting the Remote
Controller

Screws
(ﬁeld supply)

For exposed type
Preparation: Make 2 holes for screws using a driver.
Mount the top case.
• Align the claws of the top
case and then align the claws
of the bottom case.

Mount the bottom case to
the wall.

Connect the
remote control
wiring

Cut here with
a nipper and
remove the burr
with a ﬁle.

Remote controller
terminal board
Top case
Bottom case (Back side)
(Back side)

Remove the coating.
Approx. 6 mm

Make sure the wiring
connection is in the correct
direction.

Screw
(ﬁeld supply)

Wall to which
the remote
controller is
ﬁxed

Connect the remote
control wiring
• Arrange the wires along
the groove of the case.

Top case
Bottom case (Back side)
(Back side)

Remote controller terminal board
Remove the coating. Approx. 6 mm

Remove the sheath. Approx. 180 mm.
Make sure the wiring connection is
in the correct direction.

--- Page 93 ---
12.1.7.5

4. Remove the electric anode cover to check the
electric anode PCB r. (AN model only)
Conﬁrm the LED is green.
If the LED is red, conﬁrm the tank is full of water.
If the LED is OFF, please set the electric anode
“YES” in the system set up of the R/C.
5. After test run, please clean the Magnetic Water
Filter Set ⑨ and Water Filter Set t. Reinstall it
after ﬁnish cleaning.

Replace the Remote Controller
Cover



Replace the existing Remote Controller with
Remote Controller Case 5 to close the hole left
after remove the Remote Controller.
1. Refer Section “Remove The Remote Controller
From Tank Unit” for remove Remote Controller.
2. Remove the top case from the bottom case of
Remote Controller Case 5 .

12.1.8.1

Remote Controller Case 5
(Optional)

Bottom
case

Check Water Flow of Water
Circuit

Select Installer setup → Service setup →
Pump maximum speed → Air purge
Conﬁrm the maximum water ﬂow during main pump
operation not less than 15 l/min.
*Water ﬂow can be check through service setup
(Pump Max Speed)
[Heating operation at low water temperature with
lower water ﬂow may trigger “H75” during defrost
process.]
*If there is no ﬂow or H62 is displayed, stop operating
the pump and release the air (see Checking for Air
Accumulation 12.1.6.3).

Top case

Insert the
driver and
slightly turn.

12.1.8.2

Reset Overload Protector ⑫

Overload Protector ⑫ a serves the safety purpose to
prevent the water over heating. When the Overload
Protector ⑫ a trip at high water temperature, take
below steps to reset it.
1. Take out the cover.
2. Use a test pen to push the centre button gently in
order to reset the Overload Protector ⑫.
3. Fix the cover to the original fixing condition.

Flat-blade
screwdriver

3. Reverse the steps 1 to 4 of section “Remove The
Remote Controller From Tank Unit” to ﬁx Remote
Controller Case 5 on Tank Unit.

12.1.8 Test Run

Use test pen to push
this button for reset
Overload protector b .

1. Before test run, make sure below items have been
checked:a) Pipework are properly done.
b) Electric cable connecting work are properly
done.
c) Tank Unit is filled up with water and trapped
air is released.
d) Please turn on the power supply after filling
the tank until full.
2. Switch ON the power supply of the Tank Unit. Set
the Tank Unit RCCB/ELCB to “ON” condition.
Then, please refer to the Operation Instruction for
operation of Remote Controller ①.
Note:
 During winter, turn on the power supply and standby the
unit for at least 15 minutes before test run.
Allow sufficient time to warm up refrigerant and prevent
wrong error code judgement.

3. For normal operation, Water Pressure reading
should be in between 0.5 bar and 3 bar (0.05 MPa
and 0.3 MPa). If necessary, adjust the Water
Pump ④ SPEED accordingly to obtain normal
water pressure operating range. If adjust Water
Pump ④ SPEED cannot solve the problem,
contact your local authorized dealer.

--- Page 94 ---
12.1.9 Maintenance


12.1.9.2

In order to ensure safety and optimal performance
of the Tank Unit, seasonal inspections on the
Tank Unit, functional check of RCCB/ELCB, field
wiring and piping have to be carried out at regular
intervals. This maintenance should be carried out
by authorized dealer. Contact dealer for
scheduled inspection.

12.1.9.1



It is strongly recommended to operate the valve
by turn the knob counter clockwise to ensure free
water flow through discharge pipe at regular
intervals to ensure it is not blocked and to remove
lime deposit.

Stagnant water in Tank Unit should be drained if it is not going
to be operated for more than 60 days.

Maintenance for Magnetic
Water Filter Set ⑨

12.1.9.3

1. Turn OFF power supply.
2. Place a container below Magnetic Water Filter Set
⑨.
3. Turn to remove the Magnet Bar at bottom of
Magnetic Water Filter Set ⑨.
4. By using Allen key (8mm), remove the Cap of
Discharge Port.
5. By using Allen Key (4mm), open the Service Valve
to release the dirty water from the Discharge Port
into a container. Close the service valve when the
container is full to avoid spillage in the tank unit.
Dispose the dirty water.
6. Reinstall the Cap of Discharge Port and Magnet
Bar.
7. Re-charging the water to Space Heating / Cooling
circuit if necessary (refer Section 12.1.5 for
details.)
8. Turn ON power supply.



Installation of Ventilation Unit
on Top of Tank Unit (Optional)

For installation works of Ventilation Unit on top of
Tank Unit, refer to the Ventilation Unit Installation
Manual.
CAUTION

Before install Ventilation Unit, ﬁx the Feet that provided by
Ventilation Unit to the half punch holes on Top Panel of Tank Unit,
Otherwise, heavy Ventilation Unit may fall and cause injury.

Feet (4 pieces)
- provided by Ventilation Unit

Half punch holes

Service
Valve

Discharge port
Magnet Bar
Open

Maintenance for Safety Relief
Valve o

Close

--- Page 95 ---
12.2 Appendix
12.2.1 Variation of System
This section introduces variation of various systems using Air-To-Water Heatpump and actual setting method.
(NOTE) : For this model, both external room thermistor of Zone 1 and external room thermostat of Zone 1 must
always be connected to main indoor PCB only regardless of Optional PCB (CZ-NS5P) connection.

12.2.1.1
12.2.1.1.1

Introduce Application Related to Temperature Setting
Temperature Setting Variation for Heating

1. Remote Controller
Indoor

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - No

Outdoor

Zone & Sensor:
Water temperature
Floor heating

Connect floor heating or radiator directly to the Tank Unit.
Remote controller is installed on Tank Unit.
This is the basic form of the most simple system.
2. Room Thermostat

Indoor

Tank Unit receive Room Thermo signal (ON/OFF) from Remote controller
to control HP and circulation pump.
There is a build-in thermistor in the remote controller.
Setting of remote controller

Outdoor

Installer setting
System setup
Optional PCB connectivity - No

Floor heating

Zone & Sensor:
Room thermostat
Internal

Connect floor heating or radiator directly to the Tank Unit.
Remove remote controller from Tank Unit and install it in the room where floor heating is installed.
This is an application that uses remote controller as Room Thermostat.

--- Page 96 ---
3. External Room Thermostat
Indoor

Room
Thermostat
(Field supply)

Outdoor

Floor heating

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - No
Zone & Sensor:
Room thermostat
(External)

Connect floor heating or radiator directly to Tank Unit.
Remote controller is installed on Tank Unit.
Install separate external Room Thermostat (field supply) in the room where floor heating is installed.
This is an application that uses external Room Thermostat.
4. Room Thermistor
Indoor

Tank Unit compare between room temperature and setting temperature
on the Remote controller to control HP and circulation pump.
Max: 30m
Thermistor

Outdoor

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - No

Floor heating

Zone & Sensor:
Room thermistor

Connect floor heating or radiator directly to Tank Unit.
Remote controller is installed on Tank Unit.
Install separate external room thermistor (specified by Panasonic) in the room where floor heating is installed.
This is an application that uses external room thermistor.
There are 2 kinds of circulation water temperature setting method.
Direct: set direct circulation water temperature (fixed value)
Compensation curve: set circulation water temperature depends on outdoor ambient temperature
In case of Room thermo or Room thermistor, compensation curve can be set.
In this case, compensation curve is shifted according to the thermo ON/OFF situation.
 (Example) If room temperature increasing speed is;
very slow → shift up the compensation curve
very fast → shift down the compensation curve

--- Page 97 ---
12.2.1.1.2

Examples of Installations

Floor heating 1 + Floor heating 2
Setting of remote controller
Room Thermostat
(field supply)

Indoor
Mixing valve 2
Outdoor

Installer setting
System setup
Optional PCB connectivity - Yes

Thermistor 2

Pump 2

Zone and Sensor - 2 Zone system
Zone 1:Sensor
Room thermostat
Internal

Thermistor 1

Zone 2:Sensor
Room
Room thermostat
(External)

Mixing valve 1
Pump 1

Buffer tank
Floor heating 1

Floor heating 2

Connect floor heating to 2 circuits through buffer tank as shown in the figure.
Install mixing valves, pumps and thermistors (specified by Panasonic) on both circuits.
Remove remote controller from Tank Unit, install it in one of the circuit and use it as Room Thermostat.
Install external Room Thermostat (field supply) in another circuit.
Both circuits can set circulation water temperature independently.
Install buffer tank thermistor on buffer tank.
It requires connection setting of buffer tank and ∆T temperature setting at heating operation separately.
This system requires Optional PCB (CZ-NS5P).
Note : Buffer tank thermistor must be connected to main indoor PCB only.
Floor heating + Radiator
Indoor

Radiator
Pump 2

Installer setting
System setup
Optional PCB connectivity - Yes

Thermistor 2

Outdoor
Mixing valve 1

Pump 1

Thermistor 1

Floor heating

Buffer tank

Setting of remote controller

Zone and Sensor - 2 Zone system
Zone 1:Sensor
Water temperature
Zone 2:Sensor
Room
Water temperature

Connect floor heating or radiator to 2 circuits through buffer tank as shown in figure.
Install pumps and thermistors (specified by Panasonic) on both circuits.
Install mixing valve in the circuit with lower temperature among the 2 circuits.
(Generally, if install floor heating and radiator circuit at 2 zones, install mixing valve in floor heating circuit.)
Remote controller is installed on Tank Unit.
For temperature setting, select circulation water temperature for both circuits.
Both circuits can set circulation water temperature independently.
Install buffer tank thermistor on buffer tank.
It requires connection setting of buffer tank and ∆T temperature setting at heating operation separately.
This system requires the Optional PCB (CZ-NS5P).
Mind that if there is no mixing valve at the secondary side, the circulation water temperature may get higher than
setting temperature.
Note : Buffer tank thermistor must be connected to main indoor PCB only.

--- Page 98 ---
Floor heating + Swimming pool
Setting of remote controller
Indoor

Thermistor 3
Mixing valve 2

Outdoor

Mixing valve 1 Pump 1

Thermistor 2

Pump 3

Installer setting
System setup
Optional PCB connectivity - Yes
Zone and Sensor - 2 Zone system
Zone 1:Sensor
Room thermostat
Internal

Pump 2

Thermistor 1

Zone 2
Swimming pool
T

Heat EXT

Buffer tank
Swimming pool

Floor heating 1

Connect floor heating and swimming pool to 2 circuits through buffer tank as shown in figure.
Install mixing valves, pumps and thermistors (specified by Panasonic) on both circuits.
Then, install additional pool heat exchanger, pool pump and pool sensor on pool circuit.
Remove remote controller from Tank Unit and install in room where floor heating is installed. Circulation water
temperature of floor heating and swimming pool can be set independently.
Install buffer tank sensor on buffer tank.
It requires connection setting of buffer tank and ∆T temperature setting at heating operation separately. This system
requires the Optional PCB (CZ-NS5P).
Must connect swimming pool to “Zone 2”.
If it is connected to swimming pool, operation of pool will stop when “Cooling” is operated.
Note : Buffer tank thermistor must be connected to main indoor PCB only.
Swimming pool only
Indoor

Thermistor
Pump

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - Yes

Outdoor

Zone and Sensor - 1 Zone system
Zone :Swimming pool
T
Heat EX
Swimming pool

This is an application that connects to the swimming pool only.
Connects pool heat exchanger directly to Tank Unit without using buffer tank.
Install pool pump and pool sensor (specified by Panasonic) at secondary side of the pool heat exchanger.
Remove remote controller from Tank Unit and install in room where floor heating is installed.
Temperature of swimming pool can be set independently.
This system requires the Optional PCB (CZ-NS5P).
In this application, cooling mode cannot be selected. (not display on remote controller)

--- Page 99 ---
Simple 2 zone (Floor heating + Radiator)
Setting of remote controller
Indoor

Installer setting
System setup
Optional PCB connectivity - Yes

Radiator
Thermistor 1

Zone and Sensor - 2 Zone system
Zone 1:Sensor
Water temperature

Outdoor
Mixing valve

Pump 2

Zone 2:Sensor
Room
Water temperature

Thermistor 2

Operation setup
Heat
T for heating ON – 1°C
Cool
T for cooling ON – 1°C

This is an example of simple 2 zone control without using buffer tank.
Built-in pump from Tank Unit served as a pump in zone 1.
Install mixing valve, pump and thermistor (specified by Panasonic) on zone 2 circuit.
Please be sure to assign high temperature side to zone 1 as temperature of zone 1 cannot be adjusted.
Zone 1 thermistor is required to display temperature of zone 1 on remote controller.
Circulation water temperature of both circuits can be set independently.
(However, temperature of high temperature side and low temperature side cannot be reversed)
This system requires the Optional PCB (CZ-NS5P).
(NOTE)
 Thermistor 1 does not affect operation directly. But error happens if it is not installed.
 Please adjust flow rate of zone 1 and zone 2 to be in balance. If it is not adjusted correctly, it may affects the
performance.
(If zone 2 pump flow rate is too high, there is possibility that no hot water flowing to zone 1.)
Flow rate can be confirmed by “Actuator Check” from maintenance menu.
Buffer tank connection
Indoor

Buffer tank

Setting of remote controller

Outdoor

Installer setting
System setup
Optional PCB connectivity - No
Pump

Thermistor

Buffer Tank connection - Yes
T for buffer tank

Floor heating

This is an application that connects the buffer tank to the Tank Unit.
Buffer tank’s temperature is detected by buffer tank thermistor (specified by Panasonic).
Without connection of Optional PCB, external pump can be used for circulation in the ﬂoor heating circuit.
Note : Buffer tank thermistor must be connected to main indoor PCB only.

--- Page 100 ---
Buffer tank + Solar
Indoor

Outdoor

Solar thermistor
Buffer tank

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - Yes

Solar pump

Mixing valve

Buffer Tank connection - Yes
T for buffer tank
Pump

Solar connection - Yes
Buffer tank
T turn ON
T turn OFF
Antifreeze
Hi limit

Thermistor

Floor heating

This is an application that connects the buffer tank to the Tank Unit before connecting to the solar water heater to
heat up the tank.
Buffer tank’s temperature is detected by buffer tank thermistor (specified by Panasonic).
Solar panel’s temperature is detected by solar thermistor (specified by Panasonic).
Buffer tank shall use tank with built-in solar heat exchange coil independently.
During winter season, solar pump for circuit protection will be activated continuously. If does not want to activate the
solar pump operation, please use glycol and set the anti-freezing operation start temperature to -20°C.
Heat accumulation operates automatically by comparing the temperature of tank thermistor and solar thermistor.
This system requires Optional PCB (CZ-NS5P).
Note : Buffer tank thermistor must be connected to main indoor PCB only.
Boiler connection
Indoor
Outdoor

Buffer tank
Mixing
valve

Pump

Thermistor

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - Yes

Floor heating

Bivalent - Yes
Turn ON: outdoor temp.
Control pattern

Boiler

This is an application that connects the boiler to the Tank Unit, to compensate for insufficient capacity by operate
boiler when outdoor temperature drops & heat pump capacity is insufficient.
Boiler is connected parallel with heat pump against heating circuit.
Besides that, an application that connects to the DHW tank’s circuit to heat up tank’s hot water is also possible.
Boiler output can be control by either SG ready input from optional PCB or Auto control by 3 modes selection pattern.
(Operation setting of boiler shall be responsible by installer.)
This system requires Optional PCB (CZ-NS5P) for SG ready input control.
Depending on the settings of the boiler, it is recommended to install buffer tank as temperature of circulating water
may get higher. (It must connect to buffer tank especially when select Advanced Parallel setting.)
Note : Buffer tank thermistor must be connected to main indoor PCB only.
WARNING
Panasonic is NOT responsible for incorrect or unsafe situation of the boiler system.

CAUTION
Make sure the boiler and its integration in the system complies with applicable legislation.
Make sure the return water temperature from the heating circuit to the Tank Unit does NOT exceed 70°C.
Boiler is turned off by safety control when the water temperature of the heating circuit exceed 85°C.

--- Page 101 ---
12.2.2 How to Fix Cable
12.2.2.1



1.

2.
3.
4.
5.

6.
7.

Connecting with External Device (Optional)

All connections shall follow to the local national wiring standard.
It is strongly recommended to use manufacturer-recommended parts and accessories for installation.
For connection to main PCB ⑦
Two-way valve shall be spring and electronic type, refer to “Field Supply Accessories” table for details. Valve
cable shall be (3 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier, or similarly double insulation
sheathed cable.
*note: - Two-way Valve shall be CE marking compliance component.
- Maximum load for the valve is 12VA.
Room thermostat cable must be (4 or 3 × min 0.5 mm2), of type designation 60245 IEC 57 or heavier cord, or
similarly double insulation sheathed cable.
Extra pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
Boiler contact cable shall be (2 × min 0.5 mm2), of type designation 60245 IEC 57 or heavier.
External control shall be connected to 1-pole switch with min 3.0 mm contact gap. Its cable must be (2 × min
0.5 mm2), double insulation layer of PVC-sheathed or rubber-sheathed cable.
* note: - Switch used shall be CE compliance component.
- Maximum operating current shall be less than 3Arms.
Room sensor zone 1 cable shall be (2 × min 0.3 mm2) double insulation layer of PVC-sheathed or rubbersheathed.
Outdoor air sensor cable shall be (2 × min 0.3 mm2) double insulation layer of PVC-sheathed or rubber-sheathed.

Main PCB 7

Power Supply 1
RCCB/ELCB
Power Supply 2
RCCB/ELCB

Holder
(Clamper)

Indoor terminal for
connecting cables

How to guide the optional cables and power supply cord
(view without internal wiring)
Optional cables:
• External control cable
• Room sensor zone 1
• Outdoor air sensor cable
• Remote controller cable

Optional cables:
• 2-way valve cable
• Room thermostat
zone 1 cable
• Extra pump cable
• Boiler contact cable

• Power Supply 1 cord
• Power Supply 2 cord
• Indoor Unit/Outdoor Unit
Connecting cable

--- Page 102 ---
 For connection to Optional PCB 7 .
1. By connecting Optional PCB, 2 Zone temperature control can be achieved. Please connect mixing valves, water
pumps and thermistors in zone 1 and zone 2 to each terminals in Optional PCB. Temperature of each zone can
be controlled independently by remote controller.
2. Pump zone 1 and zone 2 cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
3. Solar pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
4. Pool pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
5. Room thermostat zone 1 and zone 2 cable shall be (4 × min 0.5 mm2), of type designation 60245 IEC 57 or
heavier.
6. Mixing valve zone 1 and zone 2 cable shall be (3 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
7. Room sensor zone 1 and zone 2 cable shall be (2 × min 0.3 mm2), double insulation layer (with insulation
strength of minimum 30V) of PVC-sheathed or rubber-sheathed cable.
8. Buffer tank sensor, pool water sensor and solar sensor cable shall be (2 × min 0.3 mm2), double insulation layer
(with insulation strength of minimum 30V) of PVC-sheathed or rubber-sheathed cable.
9. Water sensor zone 1 and zone 2 cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or
rubber-sheathed cable.
10. Demand signal cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed
cable.
11. SG signal cable shall be (3 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed cable.
12. Heat/Cool switch cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed
cable.
13. External compressor switch cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubbersheathed cable.
Optional PCB 7

Main PCB 7

Power Supply 1
RCCB/ELCB
Power Supply 2
RCCB/ELCB

Holder
(Clamper)

Indoor terminal for
connecting cables

How to guide the optional cables and power supply cord
(view without internal wiring)

--- Page 103 ---
Optional cables (from Optional PCB):
• External control cable
• Outdoor air sensor cable
• Remote controller cable
• Room sensor zone 1 cable
• Room sensor zone 2 cable
• Buffer tank sensor cable
• Pool sensor cable
• Water sensor zone 1 cable
• Water sensor zone 2 cable
• Demand signal cable
• Solar sensor cable
• SG signal cable
• Heat/Cool switch cable
• External Compressor switch cable

Optional cables:
• 2-way valve cable
• Extra pump cable
• Boiler contact cable

• Power Supply 1 cord
• Power Supply 2 cord
• Indoor Unit/Outdoor
Unit Connecting cable
Optional cables (from Optional PCB):
• Pump zone 1 cable
• Pump zone 2 cable
• Solar pump cable
• Room thermostat zone 1 cable
• Room thermostat zone 2 cable
• Mixing valve zone 1 cable
• Mixing valve zone 2 cable
Terminal screw on PCB

Maximum tightening torque cN•m {kgf•cm}

M3

50 {5.1}

M4

120 {12.24}

--- Page 104 ---
12.2.2.2



Guide Optional Cables and
Power Supply Cords to
Bushings



CAUTION
Wire guiding shall be free from hot surfaces.
Else, cable insulator damage and electrical shock may happen.

Ensure all sensor cables are not touching with
Front Panel
Guide the wiring inside the unit like below figure.
Once all wiring work done, tie the cable / cord with
the banding strap (field supply), to prevent them
touching with hot surfaces such as Heater
Assembly, bare copper pipes and etc.

Wire ways shall be smooth and free from sharp edges.
Else, cable insulator damage and electrical shock may happen.



Use either “COMBINATION-1” or
“COMBINATION-2” for guiding Optional Cables
and Power Supply Cords to Bushings.
D-1
A-1

COMBINATION- 1

A-2
D-2

COMBINATION- 2

Wiring for “COMBINATION-1”

12.2.2.3
















A-1 and A-2 Bushings are for:
Power Supply 1 cord
Power Supply 2 cord
Indoor Unit/Outdoor Unit Connecting cable
Pump zone 1 cable
Pump zone 2 cable
Solar pump cable
Room thermostat zone 1 cable
Room thermostat zone 2 cable
Mixing valve zone 1 cable
Mixing valve zone 2 cable
2-way valve cable
Extra pump cable
Boiler contact cable

















D-1 and D-2 Bushings are for:
External control cable
Outdoor air sensor cable
Remote controller cable
Room sensor zone 1 cable
Room sensor zone 2 cable
Buffer tank sensor cable
Pool sensor cable
Water sensor zone 1 cable
Water sensor zone 2 cable
Demand signal cable
Solar sensor cable
SG signal cable
Heat/Cool switch cable
External Compressor switch cable

Wiring for “COMBINATION-2”

Connecting Cables Length

When connecting cables between Tank Unit and
external devices, the length of the said cables must
not exceed the maximum length as shown in the table.
External device

104

Maximum cables length (m)

Two-way valve

50

Mixing valve

50

Room thermostat

50

Extra pump

50

Solar pump

50

Pool pump

50

Pump

50

Boiler contact / Defrost signal

50

External control

50

Room sensor

30

Outdoor air sensor

30

Buffer tank sensor

30

Pool water sensor

30

Solar sensor

30

Water sensor

30

Demand signal

50

SG signal

50

Heat/Cool switch

50

External compressor switch

50

--- Page 105 ---
12.2.2.4

Connection of the Main PCB
OLP for booster
heater
Zone 1 room sensor
External control
Remote controller
Outdoor air sensor
Buffer Tank sensor
Tank sensor
Boiler contact /
Defrost Signal
Extra pump

C O N C O N H C N L Current
Anode
2-way 3-way Optional
valve valve Thermostat 1 System



Signal inputs

Optional Thermostat

L N =AC230V, Heat, Cool=Thermostat heat, Cool terminal

External control

Dry contact Open=not operate, Short=operate (System setup necessary)
Able to turn ON/OFF the operation by external switch

Remote controller

Connected (Please use 2 cores wire for relocation and extension. Total cable length
shall be 50m or less.)



Outputs

3-way valve

AC230V N=Neutral Open, Close=direction (For circuit
switching when connected to DHW tank)

AC230V, 12 VA

2-way valve

AC230V N=Neutral Open, Close (Prevent water circuit
pass through during cooling mode)

AC230V, 12 VA

Extra pump

AC230V (Used when Tank Unit pump capacity is
insufficient)

Boiler contact /
Defrost signal

Dry contact (System setup necessary)



Thermistor inputs

Zone 1 room sensor

PAW-A2W-TSRT

Outdoor air sensor

PAW-A2W-TSOD (Total cable length shall be 30m or less)

105

AC 230V, 0.6 A max

--- Page 106 ---
12.2.2.5

Connection of Optional PCB (CZ-NS5P)
Optional
Thermostat 2
L N Cool Heat

Mixing
valve 1
N O C

Mixing
valve 2
N O C

Pool
Pump
Solar
Pump

Ext.
comp.
SW
Heat/
Cool
SW

Error
signal
Zone 1
Pump

Bit1
Bit2

Zone 2
Pump

Vcc

Zone 2
room
sensor



Pool Zone 2 Zone 1 Demand Solar
water water water signal sensor
sensor sensor sensor

Signal inputs

Optional Thermostat

L N =AC230V, Heat, Cool=Thermostat heat, Cool terminal

SG signal

Dry contact Vcc-Bit1, Vcc-Bit2 open/short (System setup necessary)
Switching SW (Please connect to the 2 contacts controller)

Heat/Cool SW

Dry contact Open=Heat, Short=Cool (System setup necessary)

External comp.SW

Dry contact Open=Comp.OFF, Short=Comp.ON
(System setup necessary)

Demand signal

DC 0~10V (System setup necessary)
Please connect to the DC 0~10V controller.



Outputs

Mixing valve

AC230V N=Neutral Open, Close=mixture direction
Operating time: 30s~120s

Pool pump

AC230V

AC 230V, 0.6 A max

Solar pump

AC230V

AC 230V, 0.6 A max

Zone pump

AC230V

AC 230V, 0.6 A max



Thermistor inputs

Zone room sensor

PAW-A2W-TSRT

Buffer tank sensor

PAW-A2W-TSBU

Pool water sensor

PAW-A2W-TSHC

Zone water sensor

PAW-A2W-TSHC

Solar sensor

PAW-A2W-TSSO

106

AC230V, 6VA

SG
signal

--- Page 107 ---
12.2.2.6

5. Solar sensor: PAW-A2W-TSSO
Use for measurement of the solar panel
temperature.
Insert the sensor into the sensor pocket and paste
it on the solar panel surface.

Recommended External Device
Specification



This section explains about the external devices
(optional) recommended by Panasonic. Please
always ensure to use the correct external device
during system installation.
 For optional sensor.
1. Buffer tank sensor: PAW-A2W-TSBU
Use for measurement of the buffer tank
temperature.
Insert the sensor into the sensor pocket and paste
it on the buffer tank surface.

Dimensions (mm)
blue
brown

Ø6
black

40

6. Please refer to the table below for sensor
characteristic of the sensors mentioned above.

Dimensions (mm)
blue
brown

Ø6
black

40

2. Zone water sensor: PAW-A2W-TSHC
Use to detect the water temperature of the control
zone.
Mount it on the water piping by using the stainless
steel metal strap and contact paste (both are
included).
93

Dimensions (mm)

35

70

3. Outdoor sensor: PAW-A2W-TSOD
If the installation location of the outdoor unit is
exposed to direct sunlight, the outdoor air
temperature sensor will be unable to measure the
actual outdoor ambient temperature correctly.
In this case, optional outdoor temperature sensor
can be fixed at a suitable location to more
accurately measure ambient temperature.
70

Dimensions (mm)

46

93

4. Room sensor: PAW-A2W-TSRT
Install the room temperature sensor to the room
which requires room temperature control.
Dimensions (mm)
30
86

60

86

107

Temperature (°C)

Resistance (kΩ)

30

5.326

25

6.523

20

8.044

15

9.980

10

12.443

5

15.604

0

19.70

-5

25.05

-10

32.10

-15

41.45

-20

53.92

-25

70.53

-30

93.05

-35

124.24

-40

167.82

Temperature (°C)

Resistance (kΩ)

150

0.147

140

0.186

130

0.236

120

0.302

110

0.390

100

0.511

90

0.686

80

0.932

70

1.279

65

1.504

60

1.777

55

2.106

50

2.508

45

3.003

40

3.615

35

4.375

--- Page 108 ---


3. Pull the CN-CNT cable through the hole in the
bottom of the adaptor and re-attach the front
cover to the back cover.

For optional pump.
Power supply: AC230V/50Hz, <500W
Recommended part: Yonos 25/6: made by Wilo

CN-CNT cable
(Take care not to
pinch the cable)



4. Fix the Network Adaptor 4 to Network
Adaptor Holder.
Guide the cable as shown in the diagram so that
external forces cannot act on the connector in the
adaptor.

For optional mixing valve.
Power supply: AC230V/50Hz (input open/output
close)
Operating time: 30s~120s
Recommended part: 167032: made by Caleffi

Connection examples:
CN-CNT cable

WARNING

Network
Adaptor
Holder

This section is for authorized and licensed electrician/water
system installer only. Work behind the front plate secured by
screws must only be carried out under supervision of qualified
contractor, installation engineer or service person.

12.2.2.7

Network Adaptor 4 Installation

Without Optional PCB

1. Remove the Control Board Cover ⑤, then
connect the cable included with this adaptor to
the CN-CNT connector on the printed circuit
board.
 Pull the cable out of the Tank Unit so that
there is no pinching.
 If an Optional PCB has been installed in the
Tank Unit, connect to the CN-CNT connector
of the Optional PCB.

CN-CNT cable

2. Insert a flat head screwdriver into the slot on
the top of the adaptor and remove the cover.
Connect the other end of the CN-CNT cable
connector to the connector inside the adaptor.

Network
Adaptor
Holder

Slot

With Optional PCB
Connector

--- Page 109 ---
12.2.3 System Installation
12.2.3.1

Remote Controller Outline

The LCD display as shown in this manual are for instructional purpose only, and may differ from the actual unit.

Name
A: Main screen
B: Menu
C: Triangle (Move)
D: Operate
E: Back
F: Quick Menu
G: OK

A

B
C

Function
Display information
Open/Close main menu
Select or change item
Start/Stop operation
Back to previous item
Open/Close Quick menu
Confirm

D

E

F

G

LCD Display
(Actual - Dark background with white icons)
1

12:00am,Mon

24

40˚c

˚c 18˚c

2
Name
1: Function icon

2: Mode

5

6

4

3
Function

Display set function/status
Holiday mode

Demand control

Weekly timer

Room heater

Quiet mode

Tank heater

Remote controller room
thermostat

Solar

Powerful mode

Boiler

Display set mode/current status of mode
Heating

Cooling

Auto

Hot water supply

Auto heating

Auto cooling

Compensation
curve

Set direct water
temp

Set pool temp

Heat pump operating
3: Temp setting

Set room temp

4: Display Heat temp

Display current heating temperature (it is set temperature when enclosed by line)

5: Display tank temp

Display current tank temperature (it is set temperature when enclosed by line)

6: Outdoor temp

Display outdoor temp

--- Page 110 ---
First time of power ON (Start of installation)
12:00am,Mon

Initialization

When power is ON, firstly initialization
screen appears (10 sec)

Initializing.

12:00am,Mon

When initialization screen ends, it turns
to normal screen.
Start

12:00am,Mon

Language
ENGLISH
FRANÇAIS
DEUTSCH

When there are two remote controllers
installed from the beginning, the first remote
controller to set and confirm language will
be recognised as main remote controller.

ITALIANO
Select

When any button is pressed, language
setting screen appears.
(NOTE) If initial setting is not performed, it
does not go into menu.

Conﬁrm

Set language & confirm
12:00am,Mon

Clock format

24h

When language is set, setting screen of
time display appears (24h/am/pm)

am/pm
Select

Conﬁrm

Set time display & confirm
12:00am,Mon

Date & time
Year/Month/Day

Hour : Min

2015 / 01 / 01

12 : 00

Select

YY/MM/DD/Time setup screen appears

Conﬁrm

Set YY/MM/DD/Time & confirm
12:00am,Mon

Front grille
Is O/D front grille ﬁxed?

If set No & confirm, a caution message will
be displayed to ensure outdoor front grille is
installed before proceed to operate the unit.

No

Caution

Yes

Select

To prevent injury, fix
front grille before ope.
[

Conﬁrm

] Close

Set Yes & confirm if outdoor front grille has been installed
12:00am,Mon

Back to initial screen

Start

Press menu, select Installer setup

--- Page 111 ---
12:00am,Mon

Main Menu
System check
Personal setup
Service contact
Installer setup
Select

Conﬁrm

Confirm to go into Installer setup

12.2.3.2

Installer Setup
1

System setup

Optional PCB connectivity
2

Yes/No

Zone & Sensor

Only when the selection for Optional PCB is Yes
1 Zone system / 2 Zone system
Zone settings

Heater capacity

Capacity select

Anti freezing

Yes/No

DHW Capacity

Variable/Standard

3
4
5
6
Buffer Tank connection

Yes/No

∆T setup

Base pan heater

Yes/No

A/B

Alternative outdoor sensor

Yes/No

Bivalent connection

Yes/No

External SW

Yes/No

7
8
9
Bivalent setup

10
Only when the selection for Optional PCB is Yes

11

Solar connection

Yes/No

Tank setup

Only when the selection for Optional PCB is Yes

12

External Error signal

Yes/No

Only when the selection for Optional PCB is Yes

13

Demand control

Yes/No

Only when the selection for Optional PCB is Yes

14
SG ready

Yes/No

Capacity setup

Only when the selection for Optional PCB is Yes

15

External Compressor SW

Yes/No

16
Circulation liquid

Water/glycol

Only when the selection for Optional PCB is Yes

17

Heat-Cool SW

Yes/No

Force Heater

Auto/Manual

Force Defrost

Auto/Manual

Defrost Signal

Yes/No

Pump flowrate

∆T/ Max. Duty

18
19
20
21

111

Solar setup

--- Page 112 ---
22
DHW defrost

Yes/No

Heating control

Comfort/Efficiency

External meter

Heat-cool meter / *Tank meter /
Elec. meter HP / Elec. meter 1 (PV meter) /
Elec. meter 2 (Total building) / Elec. meter 3 (Reserve)

23
24

*Only available when Heat-cool meter select Yes

25
Electrical anode

Yes/No

26
Operation setup

Water temp. for
heating ON

Heat
27

Compensation
curve

Compensation
curve setup

Direct

Direct temp. setup

Outdoor temp.
for heating OFF

Heating OFF Temp. setup

∆T for heating ON

∆T for heating setup

Heater ON/OFF

O/D temp for heater ON setup

28

29
Heater ON Delay Time
∆T of target temperature for Heater ON
Cooling model
only
Cool

Cooling model
only

∆T of target temperature for Heater OFF
(Display only if Cool exist, or else skip)

30

Water temp. for cooling ON

Compensation
curve

Compensation
curve setup

31

Direct

Direct temp. setup

∆T for cooling ON

∆T for cooling setup

Outdoor temp. for
(Heat to Cool)

Heat

Cool change temp. setup

Outdoor temp. for
(Cool to Heat)

Cool

Heat change temp. setup

32

Auto
33
Only when the
selection for Tank
is Yes (except for
AIO)
34
Tank

Floor operation time (max.)

Max. operation time for Heat & Cool mode setup

35
Tank heat up time (max.)

Max. operation time for Tank mode setup

36
Tank re-heat temp.

Tank re-heat temp. setup

37
Sterilization

Sterilization day and temp. and time setup

38
Service setup

Pump maximum speed

Pump maximum speed setup

Air purge

39
Dry concrete

ON (Dry concrete)
Edit (Dry concrete schedule)

40
Service contact

Contact 1

Name and Tel No. setup

Contact 2

Name and Tel No. setup

41
Remote control setup

RC selection

Single / Dual

112

Day and temp. setup

--- Page 113 ---
12.2.3.3

System Setup

1. Optional PCB connectivity

System setup

Initial setting: No

If function below is necessary, please purchase and install Optional PCB.
Please select Yes after installing Optional PCB.
• 2-zone control
• Pool
• Solar
• External error signal output
• Demand control
• SG ready
• Stop heat source unit by external SW

2. Zone & Sensor

Optional PCB connectivity
Zone & Sensor
Heater capacity
Anti freezing
Select

System setup

Initial setting: Room and Water temp.

12:00am,Mon

Confirm

12:00am,Mon

Optional PCB connectivity
If no Optional PCB connectivity
Select sensor of room temperature control from the following 3 items
1 Water temperature (circulation water temperature)
2 Room thermostat (Internal or External)
3 Room thermistor

Zone & Sensor
Heater capacity
Anti freezing
Select

Confirm

When there is Optional PCB connectivity
1 Select either 1 zone control or 2 zone control.
If it is 1 zone, select either room or pool, select sensor
If it is 2 zone, after select sensor of zone 1, select either room or pool for zone
2, select sensor
(NOTE) In 2 zone system, pool function can be set at zone 2 only.

3. Heater capacity

System setup

Initial setting: Depend on model

12:00am,Mon

Optional PCB connectivity

If there is built-in Heater, set the selectable heater capacity.

Zone & Sensor
Heater capacity

(NOTE) There are models which cannot select Heater capacity.

Anti freezing
Select

4. Anti freezing

System setup

Initial setting: Yes

Operate anti-freezing of water circulation circuit.
If select Yes, when the water temperature is reaching its freezing temperature, the
circulation pump will start up. If the water temperature does not reach the pump
stop temperature, back-up heater will be activated.
(NOTE) If set No, when the water temperature is reaching its freezing temperature
or below 0°C, the water circulation circuit may freeze and cause malfunction.

5. DHW Capacity

Initial setting: Variable

Confirm

12:00am,Mon

Optional PCB connectivity
Zone & Sensor
Heater capacity
Anti freezing
Select

System setup

Confirm

12:00am,Mon

Zone & Sensor
Select “Variable”
- The heat pump runs with efficient boiling, which is an energy-saving mode.
Heater capacity
However, if hot water usage is high and the tank water temperature is low, the
Anti freezing
heat pump will switch to fast heat-up mode, which uses higher heating capacity
DHW capacity
to heat up the tank. When “Efficiency” is selected in the “23. Heating control”
setting, the tank heat-up process will be delayed until a much lower tank water
Select
Conﬁrm
temperature is reached, which improves the efficiency of the heating process.
To ensure sufficient hot water, select either “Standard” in this setting or “Comfort” in the “23. Heating control” setting.
Select “Standard”
- The heat pump operates at its rated heating capacity during tank heating.

--- Page 114 ---
6. Buffer Tank connection

12:00am,Mon

System setup

Initial setting: No

Heater capacity
Select whether it is connected to buffer tank for heating or not.
If buffer tank is used, please set Yes.
Connect buffer tank thermistor and set, ΔT (ΔT use to increase primary side temp
against secondary side target temp).
If the buffer tank capacity is not so large, please set larger value for ΔT.

7. Base pan heater

Tank connection
Buffer tank connection
Select

Confirm

12:00am,Mon

System setup

Initial setting: No

Tank connection

Select whether Base pan heater is installed or not.
If set Yes, select to use either heater A or B.

Buffer tank connection
Tank heater

A: Turn on Heater when heating with defrost operation only
B: Turn on Heater at heating

8. Alternative outdoor sensor

Anti freezing

Base pan heater
Select

Confirm

12:00am,Mon

System setup

Initial setting: No

Buffer tank connection
Set Yes if outdoor sensor is installed.
Controlled by optional outdoor sensor without reading the outdoor sensor of heat
pump unit.

Tank heater
Base pan heater
Alternative outdoor sensor
Select

9. Bivalent connection

Conﬁrm

12:00am,Mon

System setup

Initial setting: No

Set if heat pump linked with boiler operation.
Connect the start signal of the boiler in boiler contact terminal (main PCB).
Set Bivalent connection to YES.
After that, please begin setting according to remote controller instruction.
Boiler icon will be displayed on remote controller top screen.

Tank heater
Base pan heater
Alternative outdoor sensor
Bivalent connection
Select

Confirm

After Bivalent connection Set YES, there is two option of control pattern to be select, (SG Ready / Auto)
1) SG ready (Only available to set when optional PCB set to YES)
- SG Ready input from optional PCB terminal control ON/OFF of boiler and heat pump as below condition
SG signal

Operation pattern

Vcc-bit1

Vcc-bit2

Open

Open

Heat pump OFF, Boiler OFF

Short

Open

Heat pump ON, Boiler OFF

Open

Short

Heat pump OFF, Boiler ON

Short

Short

Heat pump ON, Boiler ON

* This bivalent SG ready input is sharing same terminal as [14. SG ready] connection. Only one of these two setting can be set at the
same time.
When one is set, another setting will reset to not set.
2) Auto
There are 3 different modes in the boiler auto pattern operation. Movement of each modes are shown below.
1 Alternative (switch to boiler operation when drops below setting temperature)
2 Parallel (allow boiler operation when drops below setting temperature)
3 Advanced Parallel (able to slightly delay boiler operation time of parallel operation)
When the boiler operation is “ON”, “boiler contact” is “ON”, “_”(underscore) will be displayed below the boiler icon.
Please set target temperature of boiler to be the same as heat pump temperature.
When boiler temperature is higher than heat pump temperature, zone temperature cannot be achieved if mixing valve is not installed.
This product only allows one signal to control the boiler operation. Operation setting of boiler shall be responsible by installer.

--- Page 115 ---
Alternative mode

Parallel mode
operate boiler and heat
pump simultaneously

operate heat pump only

operate boiler only

Outdoor temp.

operate heat pump only
Outdoor temp.

-10°C (setting from remote controller)
-10°C (setting from remote controller)

Advanced Parallel mode
For heating
operate boiler and heat
pump simultaneously

For DHW tank
operate boiler and heat
pump simultaneously

operate heat pump only

operate heat pump only

Outdoor temp.

Outdoor temp.

-10°C (setting from remote controller)
Although heat pump operates
but water temperature does
not reach this temperature for
more than 30 mins (setting from
remote controller)

AND

Circulation water temp.
Boiler temp. ON
= Setting -8°C
(setting from
remote controller)

-10°C (setting from remote controller)

AND

Boiler temp. OFF
= Setting -2°C
(setting from
remote controller)

Setting temp

Heat pump
Tank temp.
thermo ON
Lowering
Boiling
Tank
initial
temp.
temp.
Heat
30 min (setting from
pump
remote control)
Boiler

If actual tank temp. does
not achieve the setting
temp. within 30min
(setting from remote
controller), the boiler
turn ON

When tank temp.
is achieved, both
operations stop
Tank setting
temp.

time

In Advanced Parallel mode, setting for both heating and tank can
be made simultaneously. During operation of “Heating/Tank” mode,
when each time the mode is switched, the boiler output will be
reset to OFF. Please have good understanding on the boiler control
characteristic in order to select the optimal setting for the system.
3) Smart
There are Energy price (both electricity and boiler) and Schedule to be set on remote controller.
Operation setting of Energy price and Schedule shall be responsible by installer.
Based on these settings, system will calculate the final price for both electricity and boiler.
When final price of Electricity is lower than Boiler’s, heat pump will operate.
When final price of Electricity is higher than Boiler’s, boiler will operate.
Operate Boiler
Energy price

Electricity price
Boiler price

Operate Heat pump
Outdoor temp.

10. External SW

12:00am,Mon

System setup

Initial setting: No

Base pan heater

Able to turn ON/OFF the operation by external switch.

Alternative outdoor sensor
Bivalent connection
External SW
Select

11. Solar connection

Confirm

System setup

Initial setting: No

12:00am,Mon

Alternative outdoor sensor

Set when solar water heater is installed.

Bivalent connection

Setting include items below.
External SW
1 Set either buffer tank or DHW tank for connection with solar water heater.
Solar connection
2 Set temperature difference between solar panel thermistor and buffer tank or
Select
Confirm
DHW tank thermistor to operate the solar pump.
3 Set temperature difference between solar panel thermistor and buffer tank or
DHW tank thermistor to stop the solar pump.
4 Anti-freezing operation start temperature (please change setting based on usage of glycol.)
5 Solar pump stop operation when it exceeds high limit temperature (when tank temperature exceed designated temperature
(70~90°C))

--- Page 116 ---
12. External Error Signal

System setup

Initial setting: No

12:00am,Mon

Bivalent connection
Set when external error display unit is installed.
Turn on Dry Contact SW when error happened.

External SW
Solar connection

(NOTE) Does not display when there is no Optional PCB.
When error occurs, error signal will be ON.
After turn off “close” from the display, error signal will still remain ON.

13. Demand control

External error signal
Select

Confirm

System setup

Initial setting: No

12:00am,Mon

External SW
Set when there is demand control.
Adjust terminal voltage within 1 ~ 10 V to change the operating current limit.

Solar connection

(NOTE) Does not display when there is no Optional PCB.

Demand control

External error signal
Select

Analog input
[v]
0.0
0.1 ~ 0.6
0.7
0.8
0.9 ~ 1.1
1.2
1.3
1.4 ~ 1.6
1.7
1.8
1.9 ~ 2.1
2.2
2.3
2.4 ~ 2.6
2.7
2.8
2.9 ~ 3.1
3.2
3.3
3.4 ~ 3.6
3.7
3.8

Rate
[%]
not activate
10

not
activate
10

15

10
15

20

15
20

25

20
25

30

25
30

35

30
35

40

14. SG ready

35

Analog input
[v]
3.9 ~ 4.1
4.2
4.3
4.4 ~ 4.6
4.7
4.8
4.9 ~ 5.1
5.2
5.3
5.4 ~ 5.6
5.7
5.8
5.9 ~ 6.1
6.2
6.3
6.4 ~ 6.6
6.7
6.8
6.9 ~ 7.1
7.2
7.3

Rate
[%]
40
45

Analog input
[v]
7.4 ~ 7.6
7.7
7.8
7.9 ~ 8.1
8.2
8.3
8.4 ~ 8.6
8.7
8.8
8.9 ~ 9.1
9.2
9.3
9.4 ~ 9.6
9.7
9.8
9.9 ~

40
45

50

45
50

55

50
55

60

55
60

65

60
65

70

65
70

75
80

85

80
85

90

85
90

95

90
95

100

95
100

Vcc-bit1

Vcc-bit2

Open

Open

Normal

Short

Open

Heat pump and Heater OFF

Open

Short

Capacity 1

Short

Short

Capacity 2

12:00am,Mon

Solar connection
External error signal
Demand control

Working pattern

Capacity setting 1
- DHW capacity ___%
- Heating capacity ___%
- Cooling capacity ___°C
Capacity setting 2
- DHW capacity ___%
- Heating capacity ___%
- Cooling capacity ___°C

80

System setup

Initial setting: No

Switch operation of heat pump by open-short of 2 terminals.
Setting belows are possible
SG signal

Rate
[%]
75

*A minimum operating current is applied on each model for
protection purpose.
*0.2 voltage hysteresis is provided.
*The value of voltage after 2nd decimal point are cut off.

70
75

Confirm

SG ready
Select

Set by SG ready setting of remote controller

(When SG ready set to YES, Bivalent control pattern will set to Auto.)
(NOTE) Does not display if there is no Optional PCB.

116

Confirm

--- Page 117 ---
15. External Compressor SW

System setup

Initial setting: No

Set when external compressor SW is connected.
SW is connected to external devices to control power consumption, Open Signal
will stop compressor’s operation. (Heating operation etc. are not cancelled).

12:00am,Mon

External error signal
Demand control
SG ready
External compressor SW

(NOTE) Does not display if there is no Optional PCB.

Select

Confirm

If follow Swiss standard power connection, need to turn on DIP SW (SW2 pin3) of
main unit PCB. Short/Open signal used to ON/OFF tank heater (for sterilization purpose)

16. Circulation Liquid

System setup

Initial setting: Water

Demand control

Set circulation of heating water.

SG ready
External compressor SW

There are 2 types of settings, water and glycol.

Circulation liquid

(NOTE) Please set glycol when using anti-freeze liquid.
It may cause error if setting is wrong.

17. Heat-Cool SW

12:00am,Mon

Select

System setup

Initial setting: Disable

Confirm

12:00am,Mon

SG ready

Able to switch (ﬁx) heating & cooling by external switch.

External compressor SW
Circulation liquid

(Open) : Fix at Heating (Heating +DHW)
(Short) : Fix at Cooling (Cooling +DHW)
(NOTE) This setting is disabled for model without Cooling.
(NOTE) Does not display if there is no Optional PCB.

Heat-Cool SW
Select

Confirm

Timer function cannot be used. Cannot use Auto mode.

18. Force Heater

System setup

Initial setting: Manual

Under manual mode, user can turn on force heater through quick menu.
If selection is ‘auto’, force heater mode will turn automatically if pop up error
happen during operation.
Force heater will operate follow the latest mode selection, mode selection is
disable under force heater operation.

12:00am,Mon

External compressor SW
Circulation liquid
Heat-Cool SW
Force Heater
Select

Confirm

Heater source will ON during force heater mode.

19. Force Defrost

System setup

Initial setting: Manual

Under manual code, user can turn on force defrost through quick menu.
If selection is ‘auto’, outdoor unit will run defrost operation once if heat pump have
long hour of heating without any defrost operation before at low ambient condition.
(Even auto is selected, user still can turn on force defrost through quick menu)

Circulation liquid
Heat-Cool SW
Force heater
Force defrost
Select

20. Defrost signal

System setup

Initial setting: No

Defrost signal sharing same terminal as bivalent contact in main board. When
defrost signal set to YES, bivalent connection reset to NO. Only one function can
be set between defrost signal and bivalent.
When defrost signal set to YES, during defrost operation is running at outdoor
unit defrost signal contact turn ON. Defrost signal contact turn OFF after defrost
operation end.
(Purpose of this contact output is to stop indoor fan coil or water pump during
defrost operation).

117

12:00am,Mon

Confirm

12:00am,Mon

Heat-Cool SW
Force heater
Force defrost
Defrost signal
Select

Confirm

--- Page 118 ---
21. Pump flowrate

System setup

Initial setting: ∆T

If pump flowrate setting is ΔT, unit adjust pump duty to get different of water inlet
and outlet base on setting on * ΔT for heating ON and * ΔT for cooling ON in
operation setup menu during room side operation.
If pump flowrate setting is set to Max. duty, unit will set the pump duty to the set
duty at *Pump maximum speed in service setup menu during room side operation.

22. DHW defrost

Force heater
Force defrost
Defrost signal
Pump ﬂowrate
Select

System setup

Initial setting: Yes

When DHW defrost set to YES, hot water of domestic hot water tank will be used
during defrost cycle.
When DHW defrost set to NO, hot water of floor heating circuit will be used during
defrost cycle.

Compressor frequency control can be selected from two modes: Comfort and
Efficiency.
Select “Comfort”
- The compressor operates at maximum frequency at the upper zone limit and
reaches the set temperature faster.

12:00am,Mon

Defrost signal
Pump ﬂowrate
DHW defrost

System setup

Initial setting: Comfort

Confirm

Force defrost

Select

23. Heating control

12:00am,Mon

Confirm

12:00am,Mon

Defrost signal
Pump ﬂowrate
DHW defrost
Heating control

Select
Confirm
Select “Efficiency”
- The compressor frequency is gradually increased to reduce power consumption.
When “Variable” is selected in the “5. DHW capacity” setting, the tank heat-up process will be delayed until a much lower tank water
temperature is reached, which improves the efficiency of the heating process. To ensure sufficient hot water, select either “Comfort”
in this setting or “Standard” in the “5. DHW capacity” setting.
It is a function for Heating + Tank operation.

24. External meter

Initial setting : [ Heat-cool meter : No ]
[ Tank meter : No ] *only available when
Heat-cool meter select Yes
[ Elec. meter HP : No ]
[ Elec. meter 1 (PV meter) : No ]
[ Elec. meter 2 (Total building) : No ]
[ Elec. meter 3 (Reserve) : No ]

System setup

12:00am,Mon

Pump ﬂowrate
DHW defrost
Heating control
External meter

Select
Confirm
There are two systems for generation meter connection : one generation meter
system (Heat-cool meter) or two generation meter system (Heat-cool meter and Tank meter)
Both systems can provide all generation data of heating, cooling and DHW directly from external meter.
If Heat-cool meter is set to Yes, it will read from external meter for heat pump’s energy generation data during heating, cooling and
DHW operation *1.
If Heat-cool meter is set to No, it will base on unit’s calculation for heat pump’s energy generation data during heating, cooling and
DHW operation.
If Tank meter is set to Yes, it will read from external meter for heat pump’s energy generation data during DHW operation *1.
If Elec. meter HP is set to Yes, it will read from external meter for heat pump’s energy consumption data.
If Elec. meter HP is set to No, it will base on unit’s calculation for heat pump’s energy consumption data.
If Elec. meter 1 (PV meter) is set to Yes, it will read from external meter for energy generation data of solar system and display it on
Cloud system.
If Elec. meter 2 (Building) is set to Yes, it will read from external meter for energy consumption data of the building and display it on
Cloud system.
If Elec. meter 3 (Reserve) is set to Yes, it will read from external meter for energy consumption data obtained from reserved electricity
meter and display it on Cloud system.
*1
Set Heat-cool meter to Yes and set Tank meter to No when 1 generation meter system is installed.
Set Heat-cool meter to Yes and set Tank meter to Yes when 2 generation meter system is installed.
Remark : Elec. meter HP refers to Electricity meter that measures Heat Pump unit’s consumption.
Elec. meter 1 / 2 / 3 refers to Electricity meter no. 1 / no. 2 / no. 3
25. Electrical anode

For WH-ADC0509L3E5AN1 model, initial setting : Yes
For other models, initial setting : No

System setup

12:00am,Mon

Pump flowrate
DHW defrost

When Electrical anode set to YES, anode will be turned on.
When Electrical anode set to NO, anode will not be turned on.

Heating control
Electrical anode
Select

118

Confirm

--- Page 119 ---
12.2.3.4

Operation Setup

Heat
26. Water temp. for heating ON

Initial setting: compensation curve

Set target water temperature to operate heating operation.
Compensation curve: Target water temperature change in conjunction with
outdoor ambient temperature change.
Direct: Set direct circulation water temperature.

55°C
Decide temperature
of 4 points as shown
in diagram

Hot water
temperature
35°C

In 2 zone system, zone 1 and zone 2 water temperature can be set separately.

-5°C

15°C

Outdoor
temperature

compensation curve

27. Outdoor temp. for heating OFF

Initial setting: 24°C

ON

Set outdoor temp to stop heating.
Setting range is 5°C ~ 35°C

OFF
24°C

28. ΔT for heating ON

Out

Initial setting: 5°C

Set temp difference between out temp & return temp of circulating water of
Heating operation.
When temp gap is enlarged, it is energy saving but less comfort. When the
gap gets smaller, energy saving effect gets worse but it is more comfortable.
Setting range is 1°C ~ 15°C

Out — Return = 1°C ~ 15°C

ON

29. Heater ON/OFF
a. Outdoor temp. for heater ON

Return

Initial setting: 0°C

OFF

Set outdoor temp when back-up heater starts to operate.
Setting range is -20°C ~ 15°C

0°C

User shall set whether to use or not to use heater.
b. Heater ON delay time

Set delay time from compressor ON for heater to turn ON if not achieve water
set temperature.
Setting range is 10 minutes ~ 60 minutes
c. Heater ON: ΔT of target Temp

Initial setting: -4°C

Compressor
ON
0 : 30

Water
Set
Temp.

Set water temperature for heater to turn on at heat mode.
Setting range is -10°C ~ -2°C
d. Heater OFF: ΔT of target Temp

Heater ON

Initial setting: 30 minutes

Initial setting: -2°C

-4°C

Set water temperature for heater to turn off at heat mode.
Setting range is -3°C ~ 0°C

119

Heater OFF

Heater ON

-2°C

--- Page 120 ---
Cool
30. Water temp. for cooling ON

Initial setting: compensation curve

20°C

Set target water temperature to operate cooling operation.
Compensation curve: Target water temperature change in conjunction with
outdoor ambient temperature change.
Direct: Set direct circulation water temperature.

5°C

In 2 zone system, zone 1 and zone 2 water temperature can be set separately.
20°C

30°C

compensation curve

31. ΔT for cooling ON

Out

Initial setting: 5°C

Set temp difference between out temp & return temp of circulating water of
Cooling operation.
When temp gap is enlarged, it is energy saving but less comfort. When the
gap gets smaller, energy saving effect gets worse but it is more comfortable.
Setting range is 1°C ~ 15°C

Return
Return — Out = 1°C ~ 15°C

Auto
32. Outdoor temp. for (Heat to Cool)

Initial setting: 15°C

Heat

Outdoor temp. rising

Set outdoor temp that switches from heating to cooling by Auto setting.
Setting range is 11°C ~ 25°C

Cool

Timing of judgement is every 1 hour

33. Outdoor temp. for (Cool to Heat)

15°C

Initial setting: 10°C

Heat

Outdoor temp. dropping

Set outdoor temp that switches from Cooling to Heating by Auto setting.
Setting range is 5°C ~ 14°C
Timing of judgement is every 1 hour

Cool
10°C

--- Page 121 ---
Tank
34. Floor operation time (max.)

Initial setting: 8h

Set max operating hours of heating.
When max operation time is shortened, it can boil the tank more frequently.

Heat
30min ~ 10h

It is a function for Heating + Tank operation.

35. Tank heat up time (max.)

Tank

Initial setting: 60min
Heat

Set max boiling hours of tank.
When max boiling hours are shortened, it immediately returns to Heating
operation, but it may not fully boil the tank.
Tank
5min ~ 4h

36. Tank re-heat temp.

Initial setting: -8°C

Set temp to perform reboil of tank water.
Setting range is -12°C ~ -2°C
-12°C ~ -2°C

37. Sterilization

Initial setting: 65°C 10min
2

Set timer to perform sterilization.
1 Set operating day & time. (Weekly timer format)
2 Sterilization temp (55~65°C)
3 Operation time (Time to run sterilization when it reached setting temp
5min ~ 60min)
User shall set whether to use or not to use sterilization mode.

121

1

3

--- Page 122 ---
12.2.3.5

Service Setup

38. Pump maximum speed

12:00am,Mon

Service setup

Initial setting: Depend on model

Normally setting is not necessary.
Please adjust when need to reduce the pump sound etc.
Besides that, it has Air Purge function.
When *Pump flow setting is Max. Duty, this duty set is the fix pump duty run
during room side operation.

Flow rate

Max. Duty

Operation

88:8 L/min

0xCE

Air Purge

Select

45°C

39. Dry concrete

40°C

40°C

35°C

Operate concrete curing operation.
Select Edit, set temp for every stage (1~99 1 is for 1 day).
Setting range is 25~55°C

35°C

30°C

When it is turned ON, dry concrete starts.

1

When it is 2 zone, it dries both zones.

12:00am,Mon

Service contact:
Able to set name & tel no. of contact
person when there is breakdown
etc. or client has trouble. (2 items)

4

5

6

Contact-1: Bryan Adams
ABC/ abc

Contact 1
Contact 2
Select

12.2.3.6

3

Stage

Service setup

40. Service contact

2

Conﬁrm

0-9/ Other

ABCDEFGHIJKLMNOPQR
STUVWXYZ
abcdefghi
jklmnopqrstuvwxyz
Select

Enter

Remote Control Setup

41. RC selection

12:00am,Mon

RC selection

Initial setting: Single

Single

Set to “Single” when only one remote controller is installed.
Set to “Dual” when two remote controllers are installed.

Dual
Select

122

Conﬁrm

--- Page 123 ---
12.3.2 Custom Menu

12.3 Service and Maintenance
If forget Password and cannot operate remote controller

Setting method of Custom menu

Press
for 5 sec.
Password unlock screen appears, press Confirm and it shall
reset.
Password will become 0000. Please reset it again.
(NOTE) Only display when it is locked by password.

Custom menu

12:00am,Mon

Cool mode
Back-up heater
Reset energy monitor
Reset operation history

12.3.1 Maintenance Menu

Smart DHW
Select

Setting method of Maintenance menu

Please press

Actuator check
Test mode
Sensor setup
Reset password
Select
Press

for 5 sec.

Items that can be set
Cool mode (Set With/Without Cooling function) Default is
without
(NOTE) As with/without Cool mode may affect electricity
application, please be careful and do not simply
change it.
In Cool mode, please be careful if piping is not
insulated properly, dew may form on pipe and
water may drip on the floor and damage the floor.
Backup heater (Use/Do not use Backup heater)
(NOTE) It is different from to use/not to use backup heater
set by client. When this setting is used, heater
power on due to protection against frost will be
disabled. (Please use this setting when it is
required by utility company.)
By using this setting, it cannot defrost due to low
Heating’s setting temp and operation may stop
(H75)
Please set under the responsibility of installer.
When it stops frequently, it may be due to
insufficient circulation flow rate, setting temp of
heating is too low etc.

12:00am,Mon

Maintenance menu

Confirm

Confirm
for 5 sec.

Items that can be set
Actuator check (Manual ON/OFF all functional parts)
(NOTE) As there is no protection action, please be careful
not to cause any error when operating each part
(do not turn on pump when there is no water etc.)
Test mode (Test run)
Normally it is not used.
Sensor setup (offset gap of detected temp of each sensor
within -2~2°C range)
(NOTE) Please use only when sensor is deviated.
It affects temperature control.
Reset password (Reset password)

Reset energy monitor (delete memory of Energy monitor)
Please use when moving house and handover the unit.
Reset operation history (delete memory of operation
history)
Please use when moving house and handover the unit.
Smart DHW (Set Smart DHW mode Parameter)
a) Start time: Tank reboil at lower ON Temp. onward.
b) Stop time: Tank reboil at normal ON Temp. onward.
c) ON Temp.: Tank Reboil Temp when Smart DHW start.

--- Page 124 ---
12.3.3 Check Water Pressure from Remote Controller
1. Press

SW and scroll to “System check”.

2. Press

and scroll to “System information”.

3. Press

and search for “Water pressure”.

Non [Main Menu] screen

Main menu

12:00am,Mon

Function setup
System check
Personal setup
Service contact
Select

System check

Conﬁrm

12:00am,Mon

Energy monitor
System information
Error history
Compressor
Select

System check

Conﬁrm

12:00am,Mon

Energy monitor
System information
Error history
Compressor
Select

System information

Conﬁrm

12:00am,Mon

1. Inlet
2. Outlet
3. Zone 1
4. Zone 2
Page

:
:
:
:

25°C
20°C
25°C
20°C

Conﬁrm

Screens
shown are
for illustration
purposes only.
System information

12:00am,Mon

9. COMP frequency
10. Pump ﬂowrate
11. Water pressure

:

Page

: 95Hz
11.7 L/min
: 1.51 bar

Conﬁrm

--- Page 125 ---
12.4

Indoor Unit (For WH-ADC0509L3E5UK1 only)

12.4.1 Select the Best Location

12.4.1.2

Before choosing the installation site, obtain user
approval.
 Install the Tank Unit in indoors with frost free
weather proof location only.
 Must install on a flat horizontal and solid hard
surface.
 There should not be any heat source or steam
near the Tank Unit.
 A place where air circulation in the room is good.
 A place where drainage can be easily done
(e.g. Utility room).
 A place where Tank Unit’s operation noise will not
cause discomfort to the user.
 A place where Tank Unit is far from door way.
 A place where accessible for maintenance.
 Ensure to keep minimum distance of spaces as
illustrated below from wall, ceiling, or other
obstacles.
 A place where flammable gas leaking might not
occur.
 Secure the Tank Unit to prevent it being knocked
over accidentally or during earthquakes.








Hold
Hold arrow section
to slide and move

Please avoid installations which expose the Tank Unit
to any of the following conditions:
 Extraordinary environment conditions; installation
in frost or exposure to unfavorable weather
conditions.
 Voltage input exceeding the specified voltage.

12.4.1.1

1. Make a through hole. (Check pipe diameter and
insulation thickness)
2. Insert the piping sleeve to the hole.
3. Fix the bushing to the sleeve.
4. Cut the sleeve until it extrudes about 15 mm from
the wall.

(Unit : mm)
Min.
350

CAUTION

.
in
M 00
1

in.
M 00
7

Hold

12.4.2 To Drill a Hole in the Wall and
Install a Sleeve of Piping

Required Space for Installation

M
10 in.
0

Transport and Handling

Be careful during transportating the unit so that it
is not damaged by impact.
Only remove the packaging material once it has
reached desired installation location.
It may need three or more people to carry out the
installation work. The weight of Tank Unit might
cause injury if carried by one person.
The Tank Unit can be transported either in vertical
or horizontal.
- If it transported in horizontal, make sure Front
of packaging material (printed with “FRONT”)
must facing upwards.
- If it transported in vertical, use the hand holes
on sides, slide and move to the desired
location.
Fix the Adjustable Feet 1 , if the Tank unit
installed on a uneven surface.

When the wall is hollow, please be sure to use the sleeve for
tube assembly to prevent dangers caused by mice biting the
connection cable.

M
10 in.
0

5. Finish by sealing the sleeve with putty or caulking
compound at the final stage.
Wall
Indoor

Outdoor
15 mm

Sleeve for tube
assembly
Approx. 5 - 7 mm

Through hole

125

Bushing for tube assemblys
Putty or caulking compound

--- Page 126 ---
Open and Close Front Plate ⑱
1. Remove the 2 mounting screws of Front Plate ⑱.
2. Slide it upwards to unhook the Front Plate ⑱
hook.
3. Reverse above steps 1~2 for close it.

12.4.3 Piping Installation
12.4.3.1

Water Quality Requirement

Must use water that complies with European Drinking Water
Directive (EU)2020/2184. The lifespan of the Tank Unit will be
shorter if groundwater (include spring water and well water) is
used.

12.4.3.4


The Tank Unit shall not be used with the tap water containing
contaminants such as salt, acid, and other impurities which may
corrode the tank and its component.



Use sanitized water that is free of Legionella and other bacteria
and microorganisms. If the water contains Legionella bacteria, it
may harm the health of the user.

12.4.3.2



Typical Piping Installation



Temporary
Double
connection to Check Valve
be removed assembly is
immediately acceptable
after filling
in house
T&P Valve
Drainage




Tundish
Air-to-Water
Heatpump
Outdoor Unit

Fan Coil Unit



Radiator /
Floor Heater



2-Way Valve
Expansion
Vessel

Tank Water
Discharge

Drain
Water

Main
Supply



Check Shut Pressure
Valve Off Reducing
Valve Valve

Tundish

12.4.3.3



Tab /
Shower

Access to Internal Components
WARNING

This section is for authorized and licensed electrician/water
system installer only. Work behind the front plate secured by
screws must only be carried out under supervision of qualified
contractor, installation engineer or service person.

Water Piping Installation

Please engage a licensed water circuit installer to
install this water circuit.
This water circuit must comply with relevant
European and national regulations (including
EN61770), and local building regulation codes.
Ensure the components installed in the water
circuit could withstand water pressure during
operation.
Do not use worn out tube or detachable hose-set.
Do not apply excessive force to pipes that may
damage the pipes.
Choose proper sealer which can withstand the
pressures and temperatures of the system.
Make sure to use two spanners to tighten the
connection. Further tighten the nuts with torque
wrench in specified torque as stated in the table.
Cover the pipe end to prevent dirt and dust when
inserting it through a wall.
If non-brass metallic piping is used for installation,
make sure to insulate the pipes to prevent
galvanic corrosion.
Do not connect galvanised pipes, this will cause
galvanic corrosion.
Use correct nut for all Tank Unit tube connections
and clean all tubes with tap water before
installation. See Tube Position Diagram for detail.
Tube Connector

Nut Size

Torque

 a & b

RP 1¼"

117.6 N•m

c & d
e & f

RP ¾"

58.8 N•m

RP 1"

88.2 N•m

Torque wrench Spanner

Hook

2X (screw)
CAUTION
Open or close the Front Plate carefully.
The heavy Front Plate may injures the ﬁngers.

*The remote control cable is connected to the front
panel, so be careful when removing the panel.

--- Page 127 ---
Water piping between outdoor unit and
indoor unit

CAUTION
Model

Do not overtighten, overtightening may cause water leakage.










Make sure to insulate the water circuit pipes to
prevent reduction of heating capacity.
After installation, check the water leakage
condition in connection area during test run.
Failure to connect the tube appropriately might
cause the Tank Unit malfunction.
Protection From Frost:
If the Tank Unit is being exposed to frost while
power supply failure or pump operating failure,
drain the system. When water is idle inside the
system, freezing up is very likely to happen which
could damage the system. Make sure the power
supply is turned off before draining. Heater
Assembly ⑩ may be damaged under dry heating.
Corrosion Resistance:
Duplex stainless steel is naturally corrosion
resistant to mains water supply. No specific
maintenance is required to maintain this
resistance. However, please note that Tank Unit is
not guaranteed for use with a private water supply.
It is recommended to use a tray (field supply) to
collect water from the Tank Unit if water leakage
occur.

WH-WDG05LE5*
WH-WDG07LE5*
WH-WDG09LE5*

(A) Space Heating/Cooling Pipework
 Connect Tank Unit Tube Connector a to outlet
connector of Zone 1 Panel/Floor heater.
 Connect Tank Unit Tube Connector b to inlet
connector of Zone 1 Panel/Floor heater.
 Failure to connect the tube appropriately might
cause the Tank Unit malfunction.
 Refer below table for the rated flow rate of each
particular Outdoor Unit.

Tank Unit

Rated Flow Rate
(l/min)
Outdoor Unit

Cool

Heat

WH-WDG05LE5*

14.3

14.3

WH-ADC0509L3E5UK1 WH-WDG07LE5*

20.1

20.1

WH-WDG09LE5*

23.5

25.8

ø20
ø25

30 m

30 mm
or more

10 m

(C) Domestic Hot Water Tank Pipework
 It’s strongly recommended to install an expansion
vessel (field supply) in the Domestic Hot Water
Tank circuit. Refer Typical Piping Installation
section to locate the expansion vessel.
 Expansion Vessel type and specifications:
- Size : Not more than ¾"
- Pre-charge pressure : 3.5 bar (0.35MPa)
 If secondary return circuits are used then an
additional expansion vessel may be required.
 In high water pressure or water supply is above
5 bar, please install the Pressure Reducing Valve
for water supply. If the pressure higher than that, it
might damage the Tank Unit.
 A Pressure Reducing Valve (field supply) and
Pressure Relief Valve (field supply) with below
specification must be installed along the line of the
tube connector c of Tank Unit. Refer Typical
Piping Installation section to locate both of these
valves.
 Pressure Reducing Valve type and
specifications:
- Size : Not more than ¾"
- Set Pressure : 3.5 bar (0.35MPa)
 Pressure Relief Valve type and specifications:
- Size : Not more than ¾"
- Set Pressure : 8 bar (0.8MPa)
 The pressure after pressure reducing valve is less
than 3.5 bar (0.35MPa).
 Must connect a faucet to Tank Unit Tube
Connector d and urban water supply, in order to
supply water with appropriate temperature for
shower or tap usage. Failure to do so might cause
scalding.
 Failure to connect the tube appropriately might
causing the Tank Unit malfunction.

Recommended piping installation sequence:
(a) → (c) → (e) → (f) → (b) → (d)

Model

Maximum Insulator Maximum
Inner
length
thickness Elevation
diameter

(D) Drain Elbow and Hose Installation
 Fix the Drain Elbow 2 and Packing 3 to the
bottom of Drain Water Hole h .

*Do not install automatic air purge valves on indoor
water pipes. In the unlikely event that the R290
refrigerant leaks into the water circuit, there is a risk
that the refrigerant will leak indoors.
(B) Circulating Pipework
 Connect Tank unit Tube Connector f to outdoor
unit inlet water socket.
 Connect Tank Unit Tube Connector e to Outdoor
unit outlet water socket.
 Failure to connect results in an error stop the
system.

Packing 3
Drain Elbow 2



127

Use inner diameter 17 mm drain hose in the
market, ﬁx to Drain Elbow 2 .

--- Page 128 ---



(F) Temperature and Pressure Relief Valve
The Temperature and Pressure Relief Valve need
appropriate discharge pipework. In accordance with
Building Regulations a tundish must be fitted into the
pipework within 600mm of the safety device. Due to
the distance between the two safety devices it may be
necessary to fit each safety device with its own
tundish before run the pipework together to a safety
discharge. The Rear Plate l has a Bushing so that
the connection can be made to the factory fitted
Temperature and Pressure Relief Valve. Then
connect the Temperature and Pressure Relief Valve to
the discharge pipework (Ø15mm). The following
instructions are a requirement of UK Building
Regulations and must be adhere to. For the other
countries please refer to local legislation. If there is
any doubt the insulation procedure, always contact
local building office.

This hose must to be installed in a continuously
downward direction and in a frost-free
environment. Improper drain piping may cause
water leakage hence damage the furnitures.
If drain hose is long, use a metal support ﬁxture
along the way to eliminate the wavy pattern of
drain tube.
Guide the drain hose to outdoor as illustrated.

Discharge below
ﬁxed grating
Fixed grating
Trapped gulley
Possible wall
Illustration of guide drain hose to outdoor






Cold water supply Pressure reducing valve

Do not insert this hose into sewage or drain pipe
that may generate ammonia gas, sulphuric gas
etc.
If necessary, use hose clamp to further tighten the
hose at drain hose connector to prevent leakage.
Water will drip from this hose, therefore the outlet
of this hose must be installed in an area where the
outlet cannot become blocked.
If drain hose is in the room (where dew may form),
please increase the insulation by using POLY-E
FOAM with thickness 6 mm or above.

(field supply)
Safety
Expansion vessel
valve
(field supply)
<600mm
<6
0

Inlet pipe
Tundish
(field supply)
Drain
valve
(field
supply)
Tee Joint
(field supply)

(E) Domestic Hot Water Tank Discharge (Drain
Tap) and Safety Relief Valve Pipework
 Use R½" male connector for this drainage outlet
connection (Tube connector ).
 Piping must always be installed in a continuously
downward direction. It must not be longer than
2m, with no more than 2 elbows, and must not
allow condensation to build up or freezing to
occur.
 The pipe from this drainage outlet fitting must not
be shut off. The discharge must be freed.
 The end of this pipework must be in such a way
so that the outlet is visible and can not cause any
damage. Keep away from electrical components.
 It is recommended to fit a tundish into this
pipework. Tundish should be visible and
positioned away from frost environment and
electrical components.

0m
m

Tee Joint
(field supply)

>300mm



1. Connect the tundish and route the discharge pipe
as shown above. Tundish should be visible and
positioned away from frost environment and
electrical components.
2. The tundish should be fitted vertically and as
close to the safety device as possible and within
600mm of the device.
3. The tundish should be visible to users and
positioned away from electrical devices.
4. The discharge pipe from the tundish should be
terminate in a safe place where there is no risk to
person nearby to the discharge, be of metal
construction and:
A) Be at least one pipe size larger than the
nominal outlet size of the safety device unless
its total equivalent hydraulic resistance
exceeds that of a straight pipe 9m long.
Bends must be taken into account in
calculating the flow resistance.
B) Have a vertical section of pipe at least 300mm
long, below the tundish before any elbows or
bends in the pipework.
C) Be installed with a continuous fall.
D) Have discharges visible at both the tundish
and final point of discharge.

--- Page 129 ---
12.4.4 Connect the Cable to the Tank Unit
WARNING
This section is for authorized and licensed electrician only. Work behind the Control Board Cover ⑤ secured by screws must only be carried out
under supervision of qualified contractor, installation engineer or service person.
CAUTION
Please take extra precaution when open the control board cover ⑤ and control board ⑥ for unit installation
and servicing. Failure to do so may cause injury.

12.4.4.1

Fixing of Power Supply Cable and Connecting Cable

1. Connecting cable between Tank Unit and Outdoor Unit shall be approved polychloroprene sheathed flexible cord,
type designation 60245 IEC 57 or heavier cord. See below table for cable size requirement.
Model

Connecting Cable Size

Tank Unit

Outdoor Unit

WH-ADC0509L3E5UK1

WH-WDG05LE5*
WH-WDG07LE5*
WH-WDG09LE5*

4 × min 2.5 mm2




Ensure the colour of wires of Outdoor Unit and the terminal no. are the same to the Tank Unit respectively.
Earth wire shall be longer than the other wires as shown in the figure for the electrical safety in case of the
slipping out of the cord from the Holder (Clamper).
2. An isolating device must be connected to the power supply cable.
 Isolating device (disconnecting means) should have minimum 3.0 mm contact gap.
 Connect the approved polychloroprene sheathed power supply 1 cord and power supply 2 cord and type
designation 60245 IEC 57 or heavier cord to the terminal board, and to the other end of the cord to isolating
device (Disconnecting means). See below table for cable size requirement.
Model
Tank Unit

Outdoor Unit

WH-ADC0509L3E5UK1

WH-WDG05LE5*
WH-WDG07LE5*
WH-WDG09LE5*

Power Supply
Cord

Cable Size

Isolating Devices

Recommended RCD

1

3 × min 2.5 mm2

25A

30mA, 2P, type A

2

3 × min 1.5 mm2

15/16A

30mA, 2P, type AC

3. To avoid the cable and cord being damaged by sharp edges, the cable and cord must be passed through a
bushing (located at the bottom of Control Board ⑥) before terminal board. The bushing must be used and must
not be removed.
RCCB/ELCB
Terminals on the Outdoor Unit

1

2

3

1

2

3

Colour of wires (Connecting cables)
L

Terminals on the Tank unit

N

L1 N1

Terminal
Board

(Power Supply Cord)
Terminals on the isolating devices
from power supply (Disconnecting
means)

Tank Unit/
Outdoor Unit
connection
Power Supply 1 Power Supply 2
L

N

L1 N1

*1
Holder
(Clamper)

Power Supply 1
Cable

Terminal screw

Tightening torque cN•m {kgf•cm}

M4

157~196 {16~20}

M5

196~245 {20~25)

*1 - Earth wire must be longer than other cables for safety reasons

129

*1
Holder
(Clamper)

Power Supply 2
Cable

Connecting Cable

--- Page 130 ---
12.4.4.2

Wire Stripping and Connecting Requirement

10 ± 1mm

Wire stripping
Indoor/outdoor
connecting
terminal board

No loose strand
when insert

(gap between wires)

Conductor
fully insert

Conductor
over insert

Conductor not
fully insert

ACCEPT

PROHIBITED

PROHIBITED

5mm or more

12.4.4.3

Connecting Requirement

For Tank Unit WH-ADC0509L3E5UK1 with WH-WDG05LE5*, WH-WDG07LE5*, WH-WDG09LE5*
 The equipment’s Power Supply 1 complies with IEC/EN 61000-3-2.
 The equipment’s Power Supply 1 complies with IEC/EN 61000-3-3 and can be connected to current supply
network.
 The equipment’s Power Supply 2 complies with IEC/EN 61000-3-2.
 The equipment’s Power Supply 2 complies with IEC/EN 61000-3-3 and can be connected to current supply
network.

12.4.5 Charging and Discharging the
Water


Make sure all the piping installations are properly
done before carry out below steps.

12.4.5.1

A

Charge the Water

For Domestic Hot Water Tank
1. Set the Domestic Hot Water Tank Discharge
(Drain Tap)
to “CLOSE”.
Outdoor Unit
“CLOSE”

“OPEN”

Pressure Relief Valve drain pipe
Pressure Relief Valve

Domestic Hot Water Tank Discharge (Drain Tap) g

2. Set all Tap / Shower “OPEN”.
3. Start filling water to the Domestic Hot Water Tank
via Tube Connector c .
After 20~40min, water should flow out from Tap /
Shower.
Else, please contact your local authorized dealer.
4. Check and make sure no water leaking at the tube
connecting points.

12.4.5.2

Discharge the Water

For Domestic Hot Water Tank
1. Turn OFF power supply.
2. Set the Domestic Hot Water Tank Discharge
(Drain Tap)
to “OPEN”.
3. Open Tap / Shower to allow air inlet.
4. After discharge, set Domestic Hot Water Tank
Discharge (Drain Tap)
to “CLOSE”.

For Space Heating / Cooling
1. Start ﬁlling water (with pressure more than 1 bar
(0.1MPa)) to the Space Heating/Cooling circuit via
Tube Connector a .
2. Stop ﬁlling water if the free water ﬂow through
Pressure Relief Valve drain pipe. (Check the
Outdoor Unit)
3. Turn ON the Tank Unit.
4. Remote control menu → Installer setup →
Service setup → pump maximum speed →
Turn on the pump.
5. Make sure Water Pump ④ is running.
6. Check and make sure no water leaking at the tube
connecting points.

--- Page 131 ---
12.4.6 Reconfirmation

12.4.6.4

For Space Heating / Cooling
 Expansion Vessel ⑬ with 10 L air capacity and
initial pressure of 1 bar is installed in this Tank
Unit.
 Total amount of water in system should be below
200 L.
(Inner volume of Tank Unit’s piping is about 5 L)
 If total amount of water is over 200 L, please add
another expansion vessel. (field supply)
 Please keep the installation height difference of
system water circuit within 10 m. (Extra pump may
be required)

WARNING
Be sure to switch off all power supply before performing each of
the below checkings.

12.4.6.1

Check Water Pressure

*(1 bar=0.1MPa)
Water pressure should not lower than 0.5 bar (with
inspects the Water Pressure from Remote Controller).
If necessary add water into Tank Unit (via Tube
Connector a ).

12.4.6.2

Check Pressure Relief Valve

12.4.6.5

*Pressure Relief Valve is mounted in the Outdoor Unit.
1. Conﬁrm that the pressure relief valve is working
properly, Pull the lever horizontal direction.
2. Release the lever when water comes out of the
drain pipe of the pressure relief valve.
(While the air continues to come out of the drain
pipe, keep raising the lever to completely
discharge the air.)
3. Conﬁrm that the water from the drain pipe stops.
4. If water is leaking, pull the lever several times and
return it to make sure the water stops.
5. If water keeps coming out of the drain, drain
water.
Turn off the system and contact your local
authorized dealer.

WARNING
Be careful not to touch parts other than RCCB/ELCB test button
when the power is supplied to Tank Unit. Else, electrical shock
may happen. Before obtaining access to terminals, all supply
circuits must be disconnected.









Check RCCB/ELCB

Ensure the RCCB/ELCB set to “ON” condition before
check RCCB/ELCB.
Turn on the power supply to the Tank Unit.
This testing could only be done when power is
supplied to the Tank Unit.

Lever
Pressure Relief Valve

12.4.6.3

Expansion Vessel ⑬ Pre
Pressure Checking

Push the “TEST” button on the RCCB/ELCB. The
lever would turn down and indicate “0”, if it
functions normal.
Contact authorized dealer if the RCCB/ELCB
malfunction.
Turn off the power supply to the Tank Unit.
If RCCB/ELCB functions normal, set the lever to
“ON” again after testing finish.

12.4.7 Installation of Remote Controller
as Room Thermostat

Check Air Accumulation



Open the air vent plugs on the heating panel, fan
convector, etc., and remove the air accumulated
in the equipment and piping.
If the outdoor unit and the indoor unit are installed
on different ﬂoors, open the air vent plug on the
water plug of the outdoor unit and the air vent plug
on the heater bottle inside the indoor unit to
remove the air. (be careful, water will come out)

Remote Controller ① mounted to the Tank Unit
can be moved to the room and serve as Room
Thermostat.

12.4.7.1






131

Installation Location

Install at the height of 1 to 1.5 m from the floor
(Location where average room temperature can
be detected).
Install vertically against the wall.
Avoid the following locations for installation.
1. By the window, etc. exposed to direct sunlight
or direct air.
2. In the shadow or backside of objects deviated
from the room airflow.
3. Location where condensation occurs (The
Remote Controller is not moisture proof or drip
proof.)
4. Location near heat source.
5. Uneven surface.
Keep distance of 1 m or more from the TV, radio
and PC. (Cause of fuzzy image or noise)

--- Page 132 ---
12.4.7.2

3. Remove the top case from the bottom case.

Remote Controller Wiring

Tank Unit
Remote Controller
Bottom
case

1
Remote Controller wiring
(field supply)
• No polarity

2

Top case

Terminal for Remote Controller wiring







Remote Controller cable shall be (2 × min
0.3 mm2), of double insulation PVC-sheathed or
rubber sheathed cable. Total cable length shall be
50 m or less.
Be careful not to connect cables to other terminals
of Tank Unit (e.g. power source wiring terminal).
Malfunction may occur.
Do not bundle together with the power source
wiring or store in the same metal tube. Operation
error may occur.
When using the 2nd. Remote Controller (option),
connect it to the terminal of the tank unit by
tightning it together.

12.4.7.3

Insert the
driver and
slightly turn.
Flat-blade
screwdriver

4. Remove the wiring between Remote controller ①
and Tank Unit terminal.

Remove the Remote Controller
from Tank Unit

1. Remove both Left Decoration Panel ② and Right
Decoration Panel ③ from Front Plate ⑱ with
gently push the panels from back.

Claw
(3 places)
Disconnect the
Remote controller
wiring

Gently push
from rear

2. Remove the 4 screws and take out the holder with
Remote Controller ①.

Remove 4 screws

132

Slide it
downwards
to unhook

--- Page 133 ---
12.4.7.4

For embedded type
Preparation: Make 2 holes for screws using a driver.

Mounting the Remote
Controller

For exposed type
Preparation: Make 2 holes for screws using a driver.
Mount the top case.
• Align the claws of the top
case and then align the claws
of the bottom case.

Mount the top case.
• Align the claws of the
top case and then align
the claws of the bottom
case.

Mount the bottom case to
the wall.

Mount the bottom case
to the wall.
• Pass the wire through the
hole in the centre of the
bottom case.

Avoid the wire
being caught.

Cut here with
a nipper and
remove the burr
with a ﬁle.

Screw
(ﬁeld supply)

Wall to which
the remote
controller is
ﬁxed

Screws
(ﬁeld supply)

Connect the
remote control
wiring
Connect the remote
control wiring
• Arrange the wires along
the groove of the case.

Top case
Bottom case (Back side)
(Back side)

Remote controller
terminal board
Top case
Bottom case (Back side)
(Back side)

Remove the coating.
Approx. 6 mm

Make sure the wiring
connection is in the correct
direction.

Remote controller terminal board
Remove the coating. Approx. 6 mm

Remove the sheath. Approx. 180 mm.
Make sure the wiring connection is
in the correct direction.

--- Page 134 ---
12.4.7.5

3. For normal operation, Water Pressure reading
should be in between 0.5 bar and 3 bar (0.05 MPa
and 0.3 MPa) If necessary, adjust the Water
Pump ④ SPEED accordingly to obtain normal
water pressure operating range. If adjust Water
Pump ④ SPEED cannot solve the problem,
contact your local authorized dealer.
4. After test run, please clean the Magnetic Water
Filter Set ⑨ and Water Filter Set t. Reinstall it
after finish cleaning.

Replace the Remote Controller
Cover



Replace the existing Remote Controller with
Remote Controller Case 5 to close the hole left
after remove the Remote Controller.
1. Refer Section “Remove The Remote Controller
From Tank Unit” for remove Remote Controller.
2. Remove the top case from the bottom case of
Remote Controller Case 5 .

12.4.8.1

Remote Controller Case 5
(Optional)

Bottom
case

Check Water Flow of Water
Circuit

Select Installer setup → Service setup →
Pump maximum speed → Air purge.
Conﬁrm the maximum water ﬂow during main pump
operation not less than 15 l/min.
*Water ﬂow can be check through service setup
(Pump Max Speed)
[Heating operation at low water temperature with
lower water ﬂow may trigger “H75” during defrost
process.]
*If there is no ﬂow or H62 is displayed, stop operating
the pump and release the air (see Checking for Air
Accumulation 12.4.6.3).

Top case

Insert the
driver and
slightly turn.

12.4.8.2

Flat-blade
screwdriver

Reset Overload Protector ⑫

Overload Protector ⑫ a serves the safety purpose to
prevent the water over heating. When the Overload
Protector ⑫ a trip at high water temperature, take
below steps to reset it.
1. Take out the cover.
2. Use a test pen to push the centre button gently in
order to reset the Overload Protector ⑫.
3. Fix the cover to the original fixing condition.

3. Reverse the steps 1 to 4 of section “Remove The
Remote Controller From Tank Unit” to ﬁx Remote
Controller Case 5 on Tank Unit.

12.4.8 Test Run
1. Before test run, make sure below items have been
checked:a) Pipework are properly done.
b) Electric cable connecting work are properly
done.
c) Tank Unit is filled up with water and trapped
air is released.
d) Please turn on the power supply after filling
the tank until full.
2. Switch ON the power supply of the Tank Unit. Set
the Tank Unit RCCB/ELCB to “ON” condition.
Then, please refer to the Operation Instruction for
operation of Remote Controller ①.

Use test pen to push
this button for reset
Overload protector b .

Note:
 During winter, turn on the power supply and standby the
unit for at least 15 minutes before test run.
Allow sufficient time to warm up refrigerant and prevent
wrong error code judgement.

--- Page 135 ---
12.4.9 Maintenance


12.4.9.3

In order to ensure safety and optimal performance
of the Tank Unit, seasonal inspections on the
Tank Unit, functional check of RCCB/ELCB, field
wiring and piping have to be carried out at regular
intervals. This maintenance should be carried out
by authorized dealer. Contact dealer for
scheduled inspection.

12.4.9.1



Installation of Ventilation Unit
on Top of Tank Unit (Optional)

For installation works of Ventilation Unit on top of
Tank Unit, refer to the Ventilation Unit Installation
Manual.
CAUTION

Before install Ventilation Unit, ﬁx the Feet that provided by
Ventilation Unit to the half punch holes on Top Panel of Tank Unit,
Otherwise, heavy Ventilation Unit may fall and cause injury.

Maintenance for Magnetic
Water Filter Set ⑨

Feet (4 pieces)
- provided by Ventilation Unit

1. Turn OFF power supply.
2. Place a container below Magnetic Water Filter Set
⑨.
3. Turn to remove the Magnet Bar at bottom of
Magnetic Water Filter Set ⑨.
4. By using Allen key (8mm), remove the Cap of
Discharge Port.
5. By using Allen Key (4mm), open the Service Valve
to release the dirty water from the Discharge Port
into a container. Close the service valve when the
container is full to avoid spillage in the tank unit.
Dispose the dirty water.
6. Reinstall the Cap of Discharge Port and Magnet
Bar.
7. Re-charging the water to Space Heating / Cooling
circuit if necessary (refer Section 12.4.5 for
details.)
8. Turn ON power supply.

Half punch holes

12.4.9.4

Technical Data

 Model

WH-ADC0509L3E5UK1

 Tank Capacity
- Nominal
- Actual

120 L
120 L

 Rate Heat Exchanger
Volume

Service
Valve

Discharge port

Open

12.4.9.2


 Weight
- Empty
- Full

79 kg
206 kg

 Maximum operating
Pressure
- Primary
- Secondary

3.0 bar
3.5 bar

 Maximum Operating
Temperature

Magnet Bar
Close

Maintenance for Temperature
and Pressure Relief Valve o

Manually operate the Temperature and Pressure
Relief Valve o by turn the knob counter clockwise
to ensure free water flow through discharge pipe
at regular intervals to ensure it is not blocked and
to remove lime deposit.

Stagnant water in Tank Unit should be drained if it is not going
to be operated for more than 60 days.

6L

75°C

 Operating Pressure
- Tank Unit
- Expansion Relief Valve

3.5 bar
8.0 bar

 Maximum Working / Design
Pressure
- Space Heating / Cooling
- Tank Circuit

3.0 bar
10.0 bar

 Standing Heat Loss

1.15 kWh/24h

 Reheat Time

53 min

 Temperature and Pressure
Relief Valve
- Size
- Pressure Relief
- Temperature Relief

½" × 15mm
10 bar
90°C - 95°C

 Primary Heater Pressure
Drop

0.2 bar

 Primary Flow Rate (Nominal)

9.2 - 25.8 L/min

 Primary Heating Power
Input / Flow Rate

23.1 kW/
15 L/min

 Hot Water Capacity as per
EN 12897:2016

110 L

This Tank Unit comply with EN 12897:2016.

--- Page 136 ---
12.4.9.5

PAW-G3KIT-1 - Panasonic G3 22MM Unvented Kit

Part Code

Description

533117H CST

Inlet Control Set – 3.5 Bar
PRV and 6 Bar SRV

WRAS Approval Number
1907367

AI-002402

½" Drain Cock

1 8 11 80 0

TI-10396151504

15mm × ½" × 15mm Tee

1804353

TI-1130031

22mm × ¾" MI DZR Elbow

1804353

PA-2822362151001

¾" F × ¾" M 1000mm Hose

2201803

DE 18 (7303030)

18 Litre Potable Vessel with
Integral Bracket

2209753

2209753

15 × 22mm Straight Tundish

1901349

12.4.9.6

Control of Water Temperature : PCB, Limit Thermostat
WHT

REACTOR
RED

BRW
BLU

GROUNDING

TO OUTDOOR UNIT

TERMINAL
BOARD
1

(BRW)

FUSE1
AC1-L3 T6.3A L250V
(BRW/GRY)

GRN
GRN

G05
(GRN)

GRN

GROUNDING
BLK

BLK

BRW

BRW

WATER
PUMP

M

7

WHT

1

BLK
RED
BRW
BLU

4
3
2
1

BLK
RED
BRW
BLU

4
5
6
7

4
3
2
1

3
4

3
4

WHT

RCCB/ELCB
(L1)

BRW
OLP
85±3°C

RED

(N1)

BLU

220V~240V 30A~40A
I n=30mA

BLK
GROUNDING

BLU

RECTIFICATION
CIRCUIT

BACKUP HEATER (3kW)

CN6

ROOM TEMP.
ZONE 1
CN5

OUTDOOR AIR
SENSOR

DATA
(BLK)
G02
(GRN)

WHT 7

G03
(GRN)

SW1

COMMUNICATION
CIRCUIT

(BLU)

BLK

L1
(WHT)

BRW
BRW

SIGNAL
DETECTION
CIRCUIT

2
3

L2
(WHT)

NOISE
FILTER
CIRCUIT

NOISE FILTER
CIRCUIT

AC1-N
(BLU)
G01
(GRN)

(BLK)

FUSE 3
T3.15A L250V

GRN

1
2

AC2-N3
(BLU)

BLU

WHT
1
1
WHT

AC2-L3
(BLK)

(N)

220V~240V 30A~40A
I n=30mA

WHT
2
2
WHT

RY-HT (L3)

RCCB/ELCB
(L)
BRW

HT1-L3
(RED)

POWER SUPPLY 1
Single phase AC230V 50Hz

LEAD WIRE FIXING FOR HEATER

1
2

AC2-N2
(BLU)

RED

POWER SUPPLY 2
Single phase AC230V 50Hz

WIRING DIAGRAM

CN-PUMP1
(WHT)

SENSOR

ELECTRONIC CONTROLLER
(MAIN)

NOISE
FILTER
CIRCUIT

RECTIFICATION
CIRCUIT

BUFFER TANK

SW2

CN4
EXTERNAL
CONTROL 1
BLK

WATER
PUMP
CIRCUIT

BLK

CONTROL
PANEL

CN3
RY-CONTACT1
BOILER CONTACT / DEFROST SIGNAL
SSR1
MIXING
VALVE 1

ROOM THERMO 2

POOL WATER

ACL
(BLK)

WATER PUMP
ZONE 1

RY201

CN-COMM
(YLW)

CN208
SSR200

ELECTRONIC CONTROLLER
(SUB)

WATER PUMP
ZONE 2

SSR207

SSR203

ERROR
SIGNAL

CN-PWR202
(YLW)

PUMP

SSR206

SOLAR WATER

SSR204

SIGNAL
DETECTION
CIRCUIT

SSR205

SSR202

PUMP

5

CN207

CN204

1
2
1

DCN
(BLU)
DCP
(RED)

1

CN205

4

CN-PWR204 2
(YLW)
3

SSR201

CN-CNT
(WHT)

1

CN210

CN206

BLK

(BLK)

WHT 5
CN-CNT
WHT
WHT 3 (WHT)
WHT
1

SIGNAL
DETECTION
CIRCUIT

WHT 1 CN-PWR2
WHT 2 (BLU)

BLU

CN-TH2
(BLK)

(BLK)

CN-CNT2
(RED)

5

CN1

CN2

N

OPEN

CLOSE

EXTERNAL
COMP. SW

2-WAY
VALVE

136

M
1~
3-WAY
VALVE

L

N

L

ROOM THERMO 1 CURRENT

4

1

FLOW
OR
SENSOR
4

BRW
WHT
BLU
BLK

1

1 BRW 1

4
5

5

WHT
BLU
BLK
RED

5

WATER INLET TEMP. SENSOR (THERMISTOR)

TANK TEMP. SENSOR 1 (THERMISTOR)
TANK TEMP. SENSOR 2 (THERMISTOR)

RED

1 3

ANODE
DIGITAL PRESSURE SENSOR
SYSTEM

FLOW
SENSOR

WATER OUTLET TEMP. SENSOR (THERMISTOR)

1

BLU

HEAT COOL N

1

4

CN-DPS
(RED)
1 34
WHT BLK

BRW BLK

HEAT/COOL
SWITCH

SG SIGNAL

DEMAND
SIGNAL

SOLAR TEMP.
SENSOR

WATER TEMP.
ZONE 1

POOL TEMP.
SENSOR

WATER TEMP.
ZONE 2

ROOM TEMP.
ZONE 1

ROOM TEMP.
ZONE 2

BRW
WHT
BLU
BLK

(GRN)

1

OPTIONAL

BLK

3 CN-PWR3

RED 1

OLP
85±3°C

BLK

6

WHT 2 CN-PWR4

WHT 1

1
CN-OLP1
(BLU)
2
1
CN-FLWSEN
(WHT)
4
1
CN-TH1
(WHT)

1 CN-PWR

VCC BIT2 BIT1
DC DC
GND 10V

RY-ANODE

RY-V3

WHT 3

N

ACN
(WHT)

CN203

OPEN

CN201

CN209

EXTRA PUMP

N OPEN CLOSE N OPEN CLOSE

N COOL HEAT

RY-V2

L

CLOSE

LEAD WIRE FIXING FOR OLP

MIXING
VALVE 2

REMARKS:
WHT : WHITE
ORG : ORANGE
RED : RED
BLU : BLUE
BLK : BLACK
YLW : YELLOW
BRW : BROWN
GRN : GREEN
GRY : GRAY
Y/G : YELLOW/GREEN
RCCB/ELCB : RESIDUAL CURRENT CIRCUIT BREAKER/
EARTH LEAKAGE CIRCUIT BREAKER

--- Page 137 ---
12.5 Appendix
12.5.1 Variation of System
This section introduces variation of various systems using Air-To-Water Heatpump and actual setting method.
(NOTE) : For this model, both external room thermistor of Zone 1 and external room thermostat of Zone 1 must
always be connected to main indoor PCB only regardless of Optional PCB (CZ-NS5P) connection.

12.5.1.1
12.5.1.1.1

Introduce Application Related to Temperature Setting
Temperature Setting Variation for Heating

1. Remote Controller
Indoor

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - No

Outdoor

Zone & Sensor:
Water temperature
Floor heating

Connect floor heating or radiator directly to the Tank Unit.
Remote controller is installed on Tank Unit.
This is the basic form of the most simple system.
2. Room Thermostat

Indoor

Tank Unit receive Room Thermo signal (ON/OFF) from Remote controller
to control HP and circulation pump.
There is a build-in thermistor in the remote controller.
Setting of remote controller

Outdoor

Installer setting
System setup
Optional PCB connectivity - No

Floor heating

Zone & Sensor:
Room thermostat
Internal

Connect floor heating or radiator directly to the Tank Unit.
Remove remote controller from Tank Unit and install it in the room where floor heating is installed.
This is an application that uses remote controller as Room Thermostat.

--- Page 138 ---
3. External Room Thermostat
Indoor

Room
Thermostat
(Field supply)

Outdoor

Floor heating

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - No
Zone & Sensor:
Room thermostat
(External)

Connect floor heating or radiator directly to Tank Unit.
Remote controller is installed on Tank Unit.
Install separate external Room Thermostat (field supply) in the room where floor heating is installed.
This is an application that uses external Room Thermostat.
4. Room Thermistor
Indoor

Tank Unit compare between room temperature and setting temperature
on the Remote controller to control HP and circulation pump.
Max: 30m
Thermistor

Outdoor

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - No

Floor heating

Zone & Sensor:
Room thermistor

Connect floor heating or radiator directly to Tank Unit.
Remote controller is installed on Tank Unit.
Install separate external room thermistor (specified by Panasonic) in the room where floor heating is installed.
This is an application that uses external room thermistor.
There are 2 kinds of circulation water temperature setting method.
Direct: set direct circulation water temperature (fixed value)
Compensation curve: set circulation water temperature depends on outdoor ambient temperature
In case of Room thermo or Room thermistor, compensation curve can be set.
In this case, compensation curve is shifted according to the thermo ON/OFF situation.
 (Example) If room temperature increasing speed is;
very slow → shift up the compensation curve
very fast → shift down the compensation curve

--- Page 139 ---
12.5.1.1.2

Examples of Installations

Floor heating 1 + Floor heating 2
Setting of remote controller
Room Thermostat
(field supply)

Indoor
Mixing valve 2
Outdoor

Installer setting
System setup
Optional PCB connectivity - Yes

Thermistor 2

Pump 2

Zone and Sensor - 2 Zone system
Zone 1:Sensor
Room thermostat
Internal

Thermistor 1

Zone 2:Sensor
Room
Room thermostat
(External)

Mixing valve 1
Pump 1

Buffer tank
Floor heating 1

Floor heating 2

Connect floor heating to 2 circuits through buffer tank as shown in the figure.
Install mixing valves, pumps and thermistors (specified by Panasonic) on both circuits.
Remove remote controller from Tank Unit, install it in one of the circuit and use it as Room Thermostat.
Install external Room Thermostat (field supply) in another circuit.
Both circuits can set circulation water temperature independently.
Install buffer tank thermistor on buffer tank.
It requires connection setting of buffer tank and ∆T temperature setting at heating operation separately.
This system requires Optional PCB (CZ-NS5P).
Note : Buffer tank thermistor must be connected to main indoor PCB only.
Floor heating + Radiator
Indoor

Radiator
Pump 2

Installer setting
System setup
Optional PCB connectivity - Yes

Thermistor 2

Outdoor
Mixing valve 1

Pump 1

Thermistor 1

Floor heating

Buffer tank

Setting of remote controller

Zone and Sensor - 2 Zone system
Zone 1:Sensor
Water temperature
Zone 2:Sensor
Room
Water temperature

Connect floor heating or radiator to 2 circuits through buffer tank as shown in figure.
Install pumps and thermistors (specified by Panasonic) on both circuits.
Install mixing valve in the circuit with lower temperature among the 2 circuits.
(Generally, if install floor heating and radiator circuit at 2 zones, install mixing valve in floor heating circuit.)
Remote controller is installed on Tank Unit.
For temperature setting, select circulation water temperature for both circuits.
Both circuits can set circulation water temperature independently.
Install buffer tank thermistor on buffer tank.
It requires connection setting of buffer tank and ∆T temperature setting at heating operation separately.
This system requires the Optional PCB (CZ-NS5P).
Mind that if there is no mixing valve at the secondary side, the circulation water temperature may get higher than
setting temperature.
Note : Buffer tank thermistor must be connected to main indoor PCB only.

--- Page 140 ---
Floor heating + Swimming pool
Setting of remote controller
Indoor

Thermistor 3
Mixing valve 2

Outdoor

Mixing valve 1 Pump 1

Thermistor 2

Pump 3

Installer setting
System setup
Optional PCB connectivity - Yes
Zone and Sensor - 2 Zone system
Zone 1:Sensor
Room thermostat
Internal

Pump 2

Thermistor 1

Zone 2
Swimming pool
T

Heat EXT

Buffer tank
Swimming pool

Floor heating 1

Connect floor heating and swimming pool to 2 circuits through buffer tank as shown in figure.
Install mixing valves, pumps and thermistors (specified by Panasonic) on both circuits.
Then, install additional pool heat exchanger, pool pump and pool sensor on pool circuit.
Remove remote controller from Tank Unit and install in room where floor heating is installed. Circulation water
temperature of floor heating and swimming pool can be set independently.
Install buffer tank sensor on buffer tank.
It requires connection setting of buffer tank and ∆T temperature setting at heating operation separately. This system
requires the Optional PCB (CZ-NS5P).
Must connect swimming pool to “Zone 2”.
If it is connected to swimming pool, operation of pool will stop when “Cooling” is operated.
Note : Buffer tank thermistor must be connected to main indoor PCB only.
Swimming pool only
Indoor

Thermistor
Pump

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - Yes

Outdoor

Zone and Sensor - 1 Zone system
Zone :Swimming pool
T
Heat EX
Swimming pool

This is an application that connects to the swimming pool only.
Connects pool heat exchanger directly to Tank Unit without using buffer tank.
Install pool pump and pool sensor (specified by Panasonic) at secondary side of the pool heat exchanger.
Remove remote controller from Tank Unit and install in room where floor heating is installed.
Temperature of swimming pool can be set independently.
This system requires the Optional PCB (CZ-NS5P).
In this application, cooling mode cannot be selected. (not display on remote controller)

--- Page 141 ---
Simple 2 zone (Floor heating + Radiator)
Setting of remote controller
Indoor

Installer setting
System setup
Optional PCB connectivity - Yes

Radiator
Thermistor 1

Zone and Sensor - 2 Zone system
Zone 1:Sensor
Water temperature

Outdoor
Mixing valve

Pump 2

Zone 2:Sensor
Room
Water temperature

Thermistor 2

Operation setup
Heat
T for heating ON – 1°C
Cool
T for cooling ON – 1°C

This is an example of simple 2 zone control without using buffer tank.
Built-in pump from Tank Unit served as a pump in zone 1.
Install mixing valve, pump and thermistor (specified by Panasonic) on zone 2 circuit.
Please be sure to assign high temperature side to zone 1 as temperature of zone 1 cannot be adjusted.
Zone 1 thermistor is required to display temperature of zone 1 on remote controller.
Circulation water temperature of both circuits can be set independently.
(However, temperature of high temperature side and low temperature side cannot be reversed)
This system requires the Optional PCB (CZ-NS5P).
(NOTE)
 Thermistor 1 does not affect operation directly. But error happens if it is not installed.
 Please adjust flow rate of zone 1 and zone 2 to be in balance. If it is not adjusted correctly, it may affects the
performance.
(If zone 2 pump flow rate is too high, there is possibility that no hot water flowing to zone 1.)
Flow rate can be confirmed by “Actuator Check” from maintenance menu.
Buffer tank connection
Indoor

Buffer tank

Setting of remote controller

Outdoor

Installer setting
System setup
Optional PCB connectivity - No
Pump

Thermistor

Buffer Tank connection - Yes
T for buffer tank

Floor heating

This is an application that connects the buffer tank to the Tank Unit.
Buffer tank’s temperature is detected by buffer tank thermistor (specified by Panasonic).
Without connection of Optional PCB, external pump can be used for circulation in the ﬂoor heating circuit.
Note : Buffer tank thermistor must be connected to main indoor PCB only.

--- Page 142 ---
Buffer tank + Solar
Indoor

Outdoor

Solar thermistor
Buffer tank

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - Yes

Solar pump

Mixing valve

Buffer Tank connection - Yes
T for buffer tank
Pump

Solar connection - Yes
Buffer tank
T turn ON
T turn OFF
Antifreeze
Hi limit

Thermistor

Floor heating

This is an application that connects the buffer tank to the Tank Unit before connecting to the solar water heater to
heat up the tank.
Buffer tank’s temperature is detected by buffer tank thermistor (specified by Panasonic).
Solar panel’s temperature is detected by solar thermistor (specified by Panasonic).
Buffer tank shall use tank with built-in solar heat exchange coil independently.
During winter season, solar pump for circuit protection will be activated continuously. If does not want to activate the
solar pump operation, please use glycol and set the anti-freezing operation start temperature to -20°C.
Heat accumulation operates automatically by comparing the temperature of tank thermistor and solar thermistor.
This system requires Optional PCB (CZ-NS5P).
Note : Buffer tank thermistor must be connected to main indoor PCB only.
Boiler connection
Indoor
Outdoor

Buffer tank
Mixing
valve

Pump

Thermistor

Setting of remote controller
Installer setting
System setup
Optional PCB connectivity - Yes

Floor heating

Bivalent - Yes
Turn ON: outdoor temp
Control pattern

Boiler

This is an application that connects the boiler to the Tank Unit, to compensate for insufficient capacity by operate
boiler when outdoor temperature drops & heat pump capacity is insufficient.
Boiler is connected parallel with heat pump against heating circuit.
Besides that, an application that connects to the DHW tank’s circuit to heat up tank’s hot water is also possible.
Boiler output can be control by either SG ready input from optional PCB or Auto control by 3 modes selection pattern.
(Operation setting of boiler shall be responsible by installer.)
This system requires Optional PCB (CZ-NS5P) for SG ready input control.
Depending on the settings of the boiler, it is recommended to install buffer tank as temperature of circulating water
may get higher. (It must connect to buffer tank especially when select Advanced Parallel setting.)
Note : Buffer tank thermistor must be connected to main indoor PCB only.
WARNING
Panasonic is NOT responsible for incorrect or unsafe situation of the boiler system.

CAUTION
Make sure the boiler and its integration in the system complies with applicable legislation.
Make sure the return water temperature from the heating circuit to the Tank Unit does NOT exceed 70°C.
Boiler is turned off by safety control when the water temperature of the heating circuit exceed 85°C.

--- Page 143 ---
12.5.2 How to Fix Cable
12.5.2.1



1.

2.
3.
4.
5.

6.
7.

Connecting with External Device (Optional)

All connections shall follow to the local national wiring standard.
It is strongly recommended to use manufacturer-recommended parts and accessories for installation.
For connection to main PCB ⑦
Two-way valve shall be spring and electronic type, refer to “Field Supply Accessories” table for details. Valve
cable shall be (3 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier, or similarly double insulation
sheathed cable.
*note: - Two-way Valve shall be CE marking compliance component.
- Maximum load for the valve is 12VA.
Room thermostat cable must be (4 or 3 × min 0.5 mm2), of type designation 60245 IEC 57 or heavier cord, or
similarly double insulation sheathed cable.
Extra pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
Boiler contact cable shall be (2 × min 0.5 mm2), of type designation 60245 IEC 57 or heavier.
External control shall be connected to 1-pole switch with min 3.0 mm contact gap. Its cable must be (2 × min
0.5 mm2), double insulation layer of PVC-sheathed or rubber-sheathed cable.
* note: - Switch used shall be CE compliance component.
- Maximum operating current shall be less than 3Arms.
Room sensor zone 1 cable shall be (2 × min 0.3 mm2) double insulation layer of PVC-sheathed or rubbersheathed.
Outdoor air sensor cable shall be (2 × min 0.3 mm2) double insulation layer of PVC-sheathed or rubber-sheathed.

Main PCB 7

Power Supply 1
RCCB/ELCB
Power Supply 2
RCCB/ELCB

Holder
(Clamper)

Indoor terminal for
connecting cables

How to guide the optional cables and power supply cord
(view without internal wiring)
Optional cables:
• External control cable
• Room sensor zone 1
• Outdoor air sensor cable
• Remote controller cable

Optional cables:
• 2-way valve cable
• Room thermostat
zone 1 cable
• Extra pump cable
• Boiler contact cable

• Power Supply 1 cord
• Power Supply 2 cord
• Indoor Unit/Outdoor Unit
Connecting cable

--- Page 144 ---
 For connection to Optional PCB 7 .
1. By connecting Optional PCB, 2 Zone temperature control can be achieved. Please connect mixing valves, water
pumps and thermistors in zone 1 and zone 2 to each terminals in Optional PCB. Temperature of each zone can
be controlled independently by remote controller.
2. Pump zone 1 and zone 2 cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
3. Solar pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
4. Pool pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
5. Room thermostat zone 1 and zone 2 cable shall be (4 × min 0.5 mm2), of type designation 60245 IEC 57 or
heavier.
6. Mixing valve zone 1 and zone 2 cable shall be (3 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
7. Room sensor zone 1 and zone 2 cable shall be (2 × min 0.3 mm2), double insulation layer (with insulation
strength of minimum 30V) of PVC-sheathed or rubber-sheathed cable.
8. Buffer tank sensor, pool water sensor and solar sensor cable shall be (2 × min 0.3 mm2), double insulation layer
(with insulation strength of minimum 30V) of PVC-sheathed or rubber-sheathed cable.
9. Water sensor zone 1 and zone 2 cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or
rubber-sheathed cable.
10. Demand signal cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed
cable.
11. SG signal cable shall be (3 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed cable.
12. Heat/Cool switch cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed
cable.
13. External compressor switch cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubbersheathed cable.
Optional PCB 7

Main PCB 7

Power Supply 1
RCCB/ELCB
Power Supply 2
RCCB/ELCB

Holder
(Clamper)

Indoor terminal for
connecting cables

How to guide the optional cables and power supply cord
(view without internal wiring)

--- Page 145 ---
Optional cables (from Optional PCB):
• External control cable
• Outdoor air sensor cable
• Remote controller cable
• Room sensor zone 1 cable
• Room sensor zone 2 cable
• Buffer tank sensor cable
• Pool sensor cable
• Water sensor zone 1 cable
• Water sensor zone 2 cable
• Demand signal cable
• Solar sensor cable
• SG signal cable
• Heat/Cool switch cable
• External Compressor switch cable

Optional cables:
• 2-way valve cable
• Extra pump cable
• Boiler contact cable

• Power Supply 1 cord
• Power Supply 2 cord
• Indoor Unit/Outdoor
Unit Connecting cable
Optional cables (from Optional PCB):
• Pump zone 1 cable
• Pump zone 2 cable
• Solar pump cable
• Room thermostat zone 1 cable
• Room thermostat zone 2 cable
• Mixing valve zone 1 cable
• Mixing valve zone 2 cable
Terminal screw on PCB

Maximum tightening torque cN•m {kgf•cm}

M3

50 {5.1}

M4

120 {12.24}

--- Page 146 ---
12.5.2.2



Guide Optional Cables and
Power Supply Cords to
Bushings



CAUTION
Wire guiding shall be free from hot surfaces.
Else, cable insulator damage and electrical shock may happen.

Ensure all sensor cables are not touching with
Front Panel
Guide the wiring inside the unit like below figure.
Once all wiring work done, tie the cable / cord with
the banding strap (field supply), to prevent them
touching with hot surfaces such as Heater
Assembly, bare copper pipes and etc.

Wire ways shall be smooth and free from sharp edges.
Else, cable insulator damage and electrical shock may happen.



Use either “COMBINATION-1” or
“COMBINATION-2” for guiding Optional Cables
and Power Supply Cords to Bushings.
D-1
A-1

COMBINATION- 1

A-2
D-2

COMBINATION- 2

Wiring for “COMBINATION-1”

12.5.2.3
















A-1 and A-2 Bushings are for:
Power Supply 1 cord
Power Supply 2 cord
Indoor Unit/Outdoor Unit Connecting cable
Pump zone 1 cable
Pump zone 2 cable
Solar pump cable
Room thermostat zone 1 cable
Room thermostat zone 2 cable
Mixing valve zone 1 cable
Mixing valve zone 2 cable
2-way valve cable
Extra pump cable
Boiler contact cable

















D-1 and D-2 Bushings are for:
External control cable
Outdoor air sensor cable
Remote controller cable
Room sensor zone 1 cable
Room sensor zone 2 cable
Buffer tank sensor cable
Pool sensor cable
Water sensor zone 1 cable
Water sensor zone 2 cable
Demand signal cable
Solar sensor cable
SG signal cable
Heat/Cool switch cable
External Compressor switch cable

Wiring for “COMBINATION-2”

Connecting Cables Length

When connecting cables between Tank Unit and
external devices, the length of the said cables must
not exceed the maximum length as shown in the table.
External device

146

Maximum cables length (m)

Two-way valve

50

Mixing valve

50

Room thermostat

50

Extra pump

50

Solar pump

50

Pool pump

50

Pump

50

Boiler contact / Defrost signal

50

External control

50

Room sensor

30

Outdoor air sensor

30

Buffer tank sensor

30

Pool water sensor

30

Solar sensor

30

Water sensor

30

Demand signal

50

SG signal

50

Heat/Cool switch

50

External compressor switch

50

--- Page 147 ---
12.5.2.4

Connection of the Main PCB
OLP for booster
heater
Zone 1 room sensor
External control
Remote controller
Outdoor air sensor
Buffer Tank sensor
Tank sensor
Boiler contact /
Defrost Signal
Extra pump

C O N C O N H C N L Current
Anode
2-way 3-way Optional
valve valve Thermostat 1 System



Signal inputs

Optional Thermostat

L N =AC230V, Heat, Cool=Thermostat heat, Cool terminal

External control

Dry contact Open=not operate, Short=operate (System setup necessary)
Able to turn ON/OFF the operation by external switch

Remote controller

Connected (Please use 2 cores wire for relocation and extension. Total cable length
shall be 50m or less.)



Outputs

3-way valve

AC230V N=Neutral Open, Close=direction (For circuit
switching when connected to DHW tank)

AC230V, 12 VA

2-way valve

AC230V N=Neutral Open, Close (Prevent water circuit
pass through during cooling mode)

AC230V, 12 VA

Extra pump

AC230V (Used when Tank Unit pump capacity is
insufficient)

Boiler contact /
Defrost signal

Dry contact (System setup necessary)



Thermistor inputs

Zone 1 room sensor

PAW-A2W-TSRT

Outdoor air sensor

PAW-A2W-TSOD (Total cable length shall be 30m or less)

147

AC 230V, 0.6 A max

--- Page 148 ---
12.5.2.5

Connection of Optional PCB (CZ-NS5P)
Optional
Thermostat 2
L N Cool Heat

Mixing
valve 1
N O C

Mixing
valve 2
N O C

Pool
Pump
Solar
Pump

Ext.
comp.
SW
Heat/
Cool
SW

Error
signal
Zone 1
Pump

Bit1
Bit2

Zone 2
Pump

Vcc

Zone 2
room
sensor



Pool Zone 2 Zone 1 Demand Solar
water water water signal sensor
sensor sensor sensor

Signal inputs

Optional Thermostat

L N =AC230V, Heat, Cool=Thermostat heat, Cool terminal

SG signal

Dry contact Vcc-Bit1, Vcc-Bit2 open/short (System setup necessary)
Switching SW (Please connect to the 2 contacts controller)

Heat/Cool SW

Dry contact Open=Heat, Short=Cool (System setup necessary)

External comp.SW

Dry contact Open=Comp.OFF, Short=Comp.ON
(System setup necessary)

Demand signal

DC 0~10V (System setup necessary)
Please connect to the DC 0~10V controller.



Outputs

Mixing valve

AC230V N=Neutral Open, Close=mixture direction
Operating time: 30s~120s

Pool pump

AC230V

AC 230V, 0.6 A max

Solar pump

AC230V

AC 230V, 0.6 A max

Zone pump

AC230V

AC 230V, 0.6 A max



Thermistor inputs

Zone room sensor

PAW-A2W-TSRT

Buffer tank sensor

PAW-A2W-TSBU

Pool water sensor

PAW-A2W-TSHC

Zone water sensor

PAW-A2W-TSHC

Solar sensor

PAW-A2W-TSSO

148

AC230V, 6VA

SG
signal

--- Page 149 ---
12.5.2.6

5. Solar sensor: PAW-A2W-TSSO
Use for measurement of the solar panel
temperature.
Insert the sensor into the sensor pocket and paste
it on the solar panel surface.

Recommended External Device
Specification



This section explains about the external devices
(optional) recommended by Panasonic. Please
always ensure to use the correct external device
during system installation.
 For optional sensor.
1. Buffer tank sensor: PAW-A2W-TSBU
Use for measurement of the buffer tank
temperature.
Insert the sensor into the sensor pocket and paste
it on the buffer tank surface.

Dimensions (mm)
blue
brown

Ø6
black

40

6. Please refer to the table below for sensor
characteristic of the sensors mentioned above.

Dimensions (mm)
blue
brown

Ø6
black

40

2. Zone water sensor: PAW-A2W-TSHC
Use to detect the water temperature of the control
zone.
Mount it on the water piping by using the stainless
steel metal strap and contact paste (both are
included).
93

Dimensions (mm)

35

70

3. Outdoor sensor: PAW-A2W-TSOD
If the installation location of the outdoor unit is
exposed to direct sunlight, the outdoor air
temperature sensor will be unable to measure the
actual outdoor ambient temperature correctly.
In this case, optional outdoor temperature sensor
can be fixed at a suitable location to more
accurately measure ambient temperature.
70

Dimensions (mm)

46

93

4. Room sensor: PAW-A2W-TSRT
Install the room temperature sensor to the room
which requires room temperature control.
Dimensions (mm)
30
86

60

86

149

Temperature (°C)

Resistance (kΩ)

30

5.326

25

6.523

20

8.044

15

9.980

10

12.443

5

15.604

0

19.70

-5

25.05

-10

32.10

-15

41.45

-20

53.92

-25

70.53

-30

93.05

-35

124.24

-40

167.82

Temperature (°C)

Resistance (kΩ)

150

0.147

140

0.186

130

0.236

120

0.302

110

0.390

100

0.511

90

0.686

80

0.932

70

1.279

65

1.504

60

1.777

55

2.106

50

2.508

45

3.003

40

3.615

35

4.375

--- Page 150 ---


3. Pull the CN-CNT cable through the hole in the
bottom of the adaptor and re-attach the front
cover to the back cover.

For optional pump.
Power supply: AC230V/50Hz, <500W
Recommended part: Yonos 25/6: made by Wilo

CN-CNT cable
(Take care not to
pinch the cable)



4. Fix the Network Adaptor 4 to Network
Adaptor Holder.
Guide the cable as shown in the diagram so that
external forces cannot act on the connector in the
adaptor.

For optional mixing valve.
Power supply: AC230V/50Hz (input open/output
close)
Operating time: 30s~120s
Recommended part: 167032: made by Caleffi

Connection examples:
CN-CNT cable

WARNING

Network
Adaptor
Holder

This section is for authorized and licensed electrician/water
system installer only. Work behind the front plate secured by
screws must only be carried out under supervision of qualified
contractor, installation engineer or service person.

12.5.2.7

Network Adaptor 4 Installation

Without Optional PCB

1. Remove the Control Board Cover ⑤, then
connect the cable included with this adaptor to
the CN-CNT connector on the printed circuit
board.
 Pull the cable out of the Tank Unit so that
there is no pinching.
 If an Optional PCB has been installed in the
Tank Unit, connect to the CN-CNT connector
of the Optional PCB.

CN-CNT cable

2. Insert a flat head screwdriver into the slot on
the top of the adaptor and remove the cover.
Connect the other end of the CN-CNT cable
connector to the connector inside the adaptor.

Network
Adaptor
Holder

Slot

With Optional PCB
Connector

--- Page 151 ---
12.5.3 System Installation
12.5.3.1

Remote Controller Outline

The LCD display as shown in this manual are for instructional purpose only, and may differ from the actual unit.

Name
A: Main screen
B: Menu
C: Triangle (Move)
D: Operate
E: Back
F: Quick Menu
G: OK

A

B
C

Function
Display information
Open/Close main menu
Select or change item
Start/Stop operation
Back to previous item
Open/Close Quick menu
Confirm

D

E

F

G

LCD Display
(Actual - Dark background with white icons)
1

12:00am,Mon

24

40˚c

˚c 18˚c

2
Name
1: Function icon

2: Mode

5

6

4

3
Function

Display set function/status
Holiday mode

Demand control

Weekly timer

Room heater

Quiet mode

Tank heater

Remote controller room
thermostat

Solar

Powerful mode

Boiler

Display set mode/current status of mode
Heating

Cooling

Auto

Hot water supply

Auto heating

Auto cooling

Compensation
curve

Set direct water
temp

Set pool temp

Heat pump operating
3: Temp setting

Set room temp

4: Display Heat temp

Display current heating temperature (it is set temperature when enclosed by line)

5: Display tank temp

Display current tank temperature (it is set temperature when enclosed by line)

6: Outdoor temp

Display outdoor temp

--- Page 152 ---
First time of power ON (Start of installation)
12:00am,Mon

Initialization

When power is ON, firstly initialization
screen appears (10 sec)

Initializing.

12:00am,Mon

When initialization screen ends, it turns
to normal screen.
Start

12:00am,Mon

Language
ENGLISH
FRANÇAIS
DEUTSCH

When there are two remote controllers
installed from the beginning, the first remote
controller to set and confirm language will
be recognised as main remote controller.

ITALIANO
Select

When any button is pressed, language
setting screen appears.
(NOTE) If initial setting is not performed, it
does not go into menu.

Conﬁrm

Set language & confirm
12:00am,Mon

Clock format

24h

When language is set, setting screen of
time display appears (24h/am/pm)

am/pm
Select

Conﬁrm

Set time display & confirm
12:00am,Mon

Date & time
Year/Month/Day

Hour : Min

2015 / 01 / 01

12 : 00

Select

YY/MM/DD/Time setup screen appears

Conﬁrm

Set YY/MM/DD/Time & confirm
12:00am,Mon

Front grille
Is O/D front grille ﬁxed?

If set No & confirm, a caution message will
be displayed to ensure outdoor front grille is
installed before proceed to operate the unit.

No

Caution

Yes

Select

To prevent injury, fix
front grille before ope.
[

Conﬁrm

] Close

Set Yes & confirm if outdoor front grille has been installed
12:00am,Mon

Back to initial screen

Start

Press menu, select Installer setup

--- Page 153 ---
12:00am,Mon

Main Menu
System check
Personal setup
Service contact
Installer setup
Select

Conﬁrm

Confirm to go into Installer setup

12.5.3.2

Installer Setup
1

System setup

Optional PCB connectivity
2

Yes/No

Zone & Sensor

Only when the selection for Optional PCB is Yes
1 Zone system / 2 Zone system
Zone settings

Heater capacity

Capacity select

Anti freezing

Yes/No

DHW Capacity

Variable/Standard

3
4
5
6
Buffer Tank connection

Yes/No

∆T setup

Base pan heater

Yes/No

A/B

Alternative outdoor sensor

Yes/No

Bivalent connection

Yes/No

External SW

Yes/No

7
8
9
Bivalent setup

10
Only when the selection for Optional PCB is Yes

11

Solar connection

Yes/No

Tank setup

Only when the selection for Optional PCB is Yes

12

External Error signal

Yes/No

Only when the selection for Optional PCB is Yes

13

Demand control

Yes/No

Only when the selection for Optional PCB is Yes

14
SG ready

Yes/No

Capacity setup

Only when the selection for Optional PCB is Yes

15

External Compressor SW

Yes/No

16
Circulation liquid

Water/glycol

Only when the selection for Optional PCB is Yes

17

Heat-Cool SW

Yes/No

Force Heater

Auto/Manual

Force Defrost

Auto/Manual

Defrost Signal

Yes/No

Pump flowrate

∆T/ Max. Duty

18
19
20
21

153

Solar setup

--- Page 154 ---
22
DHW defrost

Yes/No

Heating control

Comfort/Efficiency

External meter

Heat-cool meter / *Tank meter /
Elec. meter HP / Elec. meter 1 (PV meter) /
Elec. meter 2 (Total building) / Elec. meter 3 (Reserve)

23
24

*Only available when Heat-cool meter select Yes

25
Electrical anode

Yes/No

26
Operation setup

Water temp. for
heating ON

Heat
27

Compensation
curve

Compensation
curve setup

Direct

Direct temp. setup

Outdoor temp.
for heating OFF

Heating OFF Temp. setup

∆T for heating ON

∆T for heating setup

Heater ON/OFF

O/D temp for heater ON setup

28

29
Heater ON Delay Time
∆T of target temperature for Heater ON
Cooling model
only
Cool

Cooling model
only

∆T of target temperature for Heater OFF
(Display only if Cool exist, or else skip)

30

Water temp. for cooling ON

Compensation
curve

Compensation
curve setup

31

Direct

Direct temp. setup

∆T for Cooling ON

∆T for cooling setup

Outdoor temp. for
(Heat to Cool)

Heat

Cool change temp. setup

Outdoor temp. for
(Cool to Heat)

Cool

Heat change temp. setup

32

Auto
33
Only when the
selection for Tank
is Yes (except for
AIO)
34
Tank

Floor operation time (max.)

Max. operation time for Heat & Cool mode setup

35
Tank heat up time (max.)

Max. operation time for Tank mode setup

36
Tank re-heat temp.

Tank re-heat temp. setup

37
Sterilization

Sterilization day and temp. and time setup

38
Service setup

Pump maximum speed

Pump maximum speed setup

Air purge

39
Dry concrete

ON (Dry concrete)
Edit (Dry concrete schedule)

40
Service contact

Contact 1

Name and Tel No. setup

Contact 2

Name and Tel No. setup

41
Remote control setup

RC selection

Single / Dual

154

Day and temp. setup

--- Page 155 ---
12.5.3.3

System Setup

1. Optional PCB connectivity

System setup

Initial setting: No

If function below is necessary, please purchase and install Optional PCB.
Please select Yes after installing Optional PCB.
• 2-zone control
• Pool
• Solar
• External error signal output
• Demand control
• SG ready
• Stop heat source unit by external SW

2. Zone & Sensor

Optional PCB connectivity
Zone & Sensor
Heater capacity
Anti freezing
Select

System setup

Initial setting: Room and Water temp.

12:00am,Mon

Confirm

12:00am,Mon

Optional PCB connectivity
If no Optional PCB connectivity
Select sensor of room temperature control from the following 3 items
1 Water temperature (circulation water temperature)
2 Room thermostat (Internal or External)
3 Room thermistor

Zone & Sensor
Heater capacity
Anti freezing
Select

Confirm

When there is Optional PCB connectivity
1 Select either 1 zone control or 2 zone control.
If it is 1 zone, select either room or pool, select sensor
If it is 2 zone, after select sensor of zone 1, select either room or pool for zone
2, select sensor
(NOTE) In 2 zone system, pool function can be set at zone 2 only.

3. Heater capacity

System setup

Initial setting: Depend on model

12:00am,Mon

Optional PCB connectivity

If there is built-in Heater, set the selectable heater capacity.

Zone & Sensor
Heater capacity

(NOTE) There are models which cannot select Heater capacity.

Anti freezing
Select

4. Anti freezing

System setup

Initial setting: Yes

Operate anti-freezing of water circulation circuit.
If select Yes, when the water temperature is reaching its freezing temperature, the
circulation pump will start up. If the water temperature does not reach the pump
stop temperature, back-up heater will be activated.
(NOTE) If set No, when the water temperature is reaching its freezing temperature
or below 0°C, the water circulation circuit may freeze and cause malfunction.

5. DHW Capacity

Initial setting: Variable

155

12:00am,Mon

Optional PCB connectivity
Zone & Sensor
Heater capacity
Anti freezing
Select

System setup

Variable DHW capacity setting normally run with efficient boiling which is energy
saving heating. But while hot water usage high and tank water temperature low,
variable DHW mode will run with fast heat up which heat up the tank with high
heating capacity.
If standard DHW capacity setting is selected, heat pump run with heating rated
capacity at tank heat up operation.

Confirm

Confirm

12:00am,Mon

Zone & Sensor
Heater capacity
Anti freezing
DHW capacity
Select

Conﬁrm

--- Page 156 ---
6. Buffer Tank connection

12:00am,Mon

System setup

Initial setting: No

Heater capacity
Select whether it is connected to buffer tank for heating or not.
If buffer tank is used, please set Yes.
Connect buffer tank thermistor and set, ΔT (ΔT use to increase primary side temp
against secondary side target temp).
If the buffer tank capacity is not so large, please set larger value for ΔT.

7. Base pan heater

Tank connection
Buffer tank connection
Select

Confirm

12:00am,Mon

System setup

Initial setting: No

Tank connection

Select whether Base pan heater is installed or not.
If set Yes, select to use either heater A or B.

Buffer tank connection
Tank heater

A: Turn on Heater when heating with defrost operation only
B: Turn on Heater at heating

8. Alternative outdoor sensor

Anti freezing

Base pan heater
Select

Confirm

12:00am,Mon

System setup

Initial setting: No

Buffer tank connection
Set Yes if outdoor sensor is installed.
Controlled by optional outdoor sensor without reading the outdoor sensor of heat
pump unit.

Tank heater
Base pan heater
Alternative outdoor sensor
Select

9. Bivalent connection

Conﬁrm

12:00am,Mon

System setup

Initial setting: No

Set if heat pump linked with boiler operation.
Connect the start signal of the boiler in boiler contact terminal (main PCB).
Set Bivalent connection to YES.
After that, please begin setting according to remote controller instruction.
Boiler icon will be displayed on remote controller top screen.

Tank heater
Base pan heater
Alternative outdoor sensor
Bivalent connection
Select

Confirm

After Bivalent connection Set YES, there is two option of control pattern to be select, (SG Ready / Auto)
1) SG ready (Only available to set when optional PCB set to YES)
- SG Ready input from optional PCB terminal control ON/OFF of boiler and heat pump as below condition
SG signal

Operation pattern

Vcc-bit1

Vcc-bit2

Open

Open

Heat pump OFF, Boiler OFF

Short

Open

Heat pump ON, Boiler OFF

Open

Short

Heat pump OFF, Boiler ON

Short

Short

Heat pump ON, Boiler ON

* This bivalent SG ready input is sharing same terminal as [14. SG ready] connection. Only one of these two setting can be set at the
same time.
When one is set, another setting will reset to not set.
2) Auto
There are 3 different modes in the boiler auto pattern operation. Movement of each modes are shown below.
1 Alternative (switch to boiler operation when drops below setting temperature)
2 Parallel (allow boiler operation when drops below setting temperature)
3 Advanced Parallel (able to slightly delay boiler operation time of parallel operation)
When the boiler operation is “ON”, “boiler contact” is “ON”, “_”(underscore) will be displayed below the boiler icon.
Please set target temperature of boiler to be the same as heat pump temperature.
When boiler temperature is higher than heat pump temperature, zone temperature cannot be achieved if mixing valve is not installed.
This product only allows one signal to control the boiler operation. Operation setting of boiler shall be responsible by installer.

--- Page 157 ---
Alternative mode

Parallel mode
operate boiler and heat
pump simultaneously

operate heat pump only

operate boiler only

Outdoor temp.

operate heat pump only
Outdoor temp.

-10°C (setting from remote controller)
-10°C (setting from remote controller)

Advanced Parallel mode
For heating
operate boiler and heat
pump simultaneously

For DHW tank
operate boiler and heat
pump simultaneously

operate heat pump only

operate heat pump only

Outdoor temp.

Outdoor temp.

-10°C (setting from remote controller)
Although heat pump operates
but water temperature does
not reach this temperature for
more than 30 mins (setting from
remote controller)

AND

Circulation water temp.
Boiler temp. ON
= Setting -8°C
(setting from
remote controller)

-10°C (setting from remote controller)

AND

Boiler temp. OFF
= Setting -2°C
(setting from
remote controller)

Setting temp

Heat pump
Tank temp.
thermo ON
Lowering
Boiling
Tank
initial
temp.
temp.
Heat
30 min (setting from
pump
remote control)
Boiler

If actual tank temp. does
not achieve the setting
temp. within 30min
(setting from remote
controller), the boiler
turn ON

When tank temp.
is achieved, both
operations stop
Tank setting
temp.

time

In Advanced Parallel mode, setting for both heating and tank can
be made simultaneously. During operation of “Heating/Tank” mode,
when each time the mode is switched, the boiler output will be
reset to OFF. Please have good understanding on the boiler control
characteristic in order to select the optimal setting for the system.
3) Smart
There are Energy price (both electricity and boiler) and Schedule to be set on remote controller.
Operation setting of Energy price and Schedule shall be responsible by installer.
Based on these settings, system will calculate the final price for both electricity and boiler.
When final price of Electricity is lower than Boiler’s, heat pump will operate.
When final price of Electricity is higher than Boiler’s, boiler will operate.
Operate Boiler

Energy price

Electricity price
Boiler price

Operate Heat pump
Outdoor temp.

10. External SW

12:00am,Mon

System setup

Initial setting: No

Base pan heater

Able to turn ON/OFF the operation by external switch.

Alternative outdoor sensor
Bivalent connection
External SW
Select

11. Solar connection

Confirm

System setup

Initial setting: No

12:00am,Mon

Alternative outdoor sensor

Set when solar water heater is installed.

Bivalent connection

Setting include items below.
External SW
1 Set either buffer tank or DHW tank for connection with solar water heater.
Solar connection
2 Set temperature difference between solar panel thermistor and buffer tank or
Select
Confirm
DHW tank thermistor to operate the solar pump.
3 Set temperature difference between solar panel thermistor and buffer tank or
DHW tank thermistor to stop the solar pump.
4 Anti-freezing operation start temperature (please change setting based on usage of glycol.)
5 Solar pump stop operation when it exceeds high limit temperature (when tank temperature exceed designated temperature
(70~90°C))

--- Page 158 ---
12. External Error Signal

System setup

Initial setting: No

12:00am,Mon

Bivalent connection
Set when external error display unit is installed.
Turn on Dry Contact SW when error happened.

External SW
Solar connection

(NOTE) Does not display when there is no Optional PCB.
When error occurs, error signal will be ON.
After turn off “close” from the display, error signal will still remain ON.

13. Demand control

External error signal
Select

Confirm

System setup

Initial setting: No

12:00am,Mon

External SW
Set when there is demand control.
Adjust terminal voltage within 1 ~ 10 V to change the operating current limit.

Solar connection

(NOTE) Does not display when there is no Optional PCB.

Demand control

External error signal
Select

Analog input
[v]
0.0
0.1 ~ 0.6
0.7
0.8
0.9 ~ 1.1
1.2
1.3
1.4 ~ 1.6
1.7
1.8
1.9 ~ 2.1
2.2
2.3
2.4 ~ 2.6
2.7
2.8
2.9 ~ 3.1
3.2
3.3
3.4 ~ 3.6
3.7
3.8

Rate
[%]
not activate
10

not
activate
10

15

10
15

20

15
20

25

20
25

30

25
30

35

30
35

40

14. SG ready

35

Analog input
[v]
3.9 ~ 4.1
4.2
4.3
4.4 ~ 4.6
4.7
4.8
4.9 ~ 5.1
5.2
5.3
5.4 ~ 5.6
5.7
5.8
5.9 ~ 6.1
6.2
6.3
6.4 ~ 6.6
6.7
6.8
6.9 ~ 7.1
7.2
7.3

Rate
[%]
40
45

Analog input
[v]
7.4 ~ 7.6
7.7
7.8
7.9 ~ 8.1
8.2
8.3
8.4 ~ 8.6
8.7
8.8
8.9 ~ 9.1
9.2
9.3
9.4 ~ 9.6
9.7
9.8
9.9 ~

40
45

50

45
50

55

50
55

60

55
60

65

60
65

70

65
70

75
80

85

80
85

90

85
90

95

90
95

100

95
100

Vcc-bit1

Vcc-bit2

Open

Open

Normal

Short

Open

Heat pump and Heater OFF

Open

Short

Capacity 1

Short

Short

Capacity 2

12:00am,Mon

Solar connection
External error signal
Demand control

Working pattern

Capacity setting 1
- DHW capacity ___%
- Heating capacity ___%
- Cooling capacity ___°C
Capacity setting 2
- DHW capacity ___%
- Heating capacity ___%
- Cooling capacity ___°C

80

System setup

Initial setting: No

Switch operation of heat pump by open-short of 2 terminals.
Setting belows are possible
SG signal

Rate
[%]
75

*A minimum operating current is applied on each model for
protection purpose.
*0.2 voltage hysteresis is provided.
*The value of voltage after 2nd decimal point are cut off.

70
75

Confirm

SG ready
Select

Set by SG ready setting of remote controller

(When SG ready set to YES, Bivalent control pattern will set to Auto.)
(NOTE) Does not display if there is no Optional PCB.

158

Confirm

--- Page 159 ---
15. External Compressor SW

System setup

Initial setting: No

Set when external compressor SW is connected.
SW is connected to external devices to control power consumption, Open Signal
will stop compressor’s operation. (Heating operation etc. are not cancelled).

12:00am,Mon

External error signal
Demand control
SG ready
External compressor SW

(NOTE) Does not display if there is no Optional PCB.

Select

Confirm

If follow Swiss standard power connection, need to turn on DIP SW (SW2 pin3) of
main unit PCB. Short/Open signal used to ON/OFF tank heater (for sterilization purpose)

16. Circulation Liquid

System setup

Initial setting: Water

Demand control

Set circulation of heating water.

SG ready
External compressor SW

There are 2 types of settings, water and glycol.

Circulation liquid

(NOTE) Please set glycol when using anti-freeze liquid.
It may cause error if setting is wrong.

17. Heat-Cool SW

12:00am,Mon

Select

System setup

Initial setting: Disable

Confirm

12:00am,Mon

SG ready

Able to switch (ﬁx) heating & cooling by external switch.

External compressor SW
Circulation liquid

(Open) : Fix at Heating (Heating +DHW)
(Short) : Fix at Cooling (Cooling +DHW)
(NOTE) This setting is disabled for model without Cooling.
(NOTE) Does not display if there is no Optional PCB.

Heat-Cool SW
Select

Confirm

Timer function cannot be used. Cannot use Auto mode.

18. Force Heater

System setup

Initial setting: Manual

Under manual mode, user can turn on force heater through quick menu.
If selection is ‘auto’, force heater mode will turn automatically if pop up error
happen during operation.
Force heater will operate follow the latest mode selection, mode selection is
disable under force heater operation.

12:00am,Mon

External compressor SW
Circulation liquid
Heat-Cool SW
Force Heater
Select

Confirm

Heater source will ON during force heater mode.

19. Force Defrost

System setup

Initial setting: Manual

Under manual code, user can turn on force defrost through quick menu.
If selection is ‘auto’, outdoor unit will run defrost operation once if heat pump have
long hour of heating without any defrost operation before at low ambient condition.
(Even auto is selected, user still can turn on force defrost through quick menu)

Circulation liquid
Heat-Cool SW
Force heater
Force defrost
Select

20. Defrost signal

System setup

Initial setting: No

Defrost signal sharing same terminal as bivalent contact in main board. When
defrost signal set to YES, bivalent connection reset to NO. Only one function can
be set between defrost signal and bivalent.
When defrost signal set to YES, during defrost operation is running at outdoor
unit defrost signal contact turn ON. Defrost signal contact turn OFF after defrost
operation end.
(Purpose of this contact output is to stop indoor fan coil or water pump during
defrost operation).

159

12:00am,Mon

Confirm

12:00am,Mon

Heat-Cool SW
Force heater
Force defrost
Defrost signal
Select

Confirm

--- Page 160 ---
21. Pump flowrate

System setup

Initial setting: ∆T

If pump flowrate setting is ΔT, unit adjust pump duty to get different of water inlet
and outlet base on setting on * ΔT for heating ON and * ΔT for cooling ON in
operation setup menu during room side operation.
If pump flowrate setting is set to Max. duty, unit will set the pump duty to the set
duty at *Pump maximum speed in service setup menu during room side operation.

22. DHW defrost

Force heater
Force defrost
Defrost signal
Pump ﬂowrate
Select

System setup

Initial setting: Yes

When DHW defrost set to YES, hot water of domestic hot water tank will be used
during defrost cycle.
When DHW defrost set to NO, hot water of floor heating circuit will be used during
defrost cycle.

12:00am,Mon

Defrost signal
Pump ﬂowrate
DHW defrost

System setup

Initial setting: Comfort

Confirm

Force defrost

Select

23. Heating control

12:00am,Mon

Confirm

12:00am,Mon

Defrost signal
There are two modes to select for compressor frequency control : Comfort or
Efficiency.
When set to Comfort mode, compressor will run at zone limit maximum frequency
to reach set temperature faster.
When set to Efficiency mode, compressor will run at part load frequency at initial
stage for energy saving.

24. External meter

Initial setting : [ Heat-cool meter : No ]
[ Tank meter : No ] *only available when
Heat-cool meter select Yes
[ Elec. meter HP : No ]
[ Elec. meter 1 (PV meter) : No ]
[ Elec. meter 2 (Total building) : No ]
[ Elec. meter 3 (Reserve) : No ]

Pump ﬂowrate
DHW defrost
Heating control
Select

System setup

Confirm

12:00am,Mon

Pump ﬂowrate
DHW defrost
Heating control
External meter

Select
Confirm
There are two systems for generation meter connection : one generation meter
system (Heat-cool meter) or two generation meter system (Heat-cool meter and Tank meter)
Both systems can provide all generation data of heating, cooling and DHW directly from external meter.
If Heat-cool meter is set to Yes, it will read from external meter for heat pump’s energy generation data during heating, cooling and
DHW operation *1.
If Heat-cool meter is set to No, it will base on unit’s calculation for heat pump’s energy generation data during heating, cooling and
DHW operation.
If Tank meter is set to Yes, it will read from external meter for heat pump’s energy generation data during DHW operation *1.
If Elec. meter HP is set to Yes, it will read from external meter for heat pump’s energy consumption data.
If Elec. meter HP is set to No, it will base on unit’s calculation for heat pump’s energy consumption data.
If Elec. meter 1 (PV meter) is set to Yes, it will read from external meter for energy generation data of solar system and display it on
Cloud system.
If Elec. meter 2 (Building) is set to Yes, it will read from external meter for energy consumption data of the building and display it on
Cloud system.
If Elec. meter 3 (Reserve) is set to Yes, it will read from external meter for energy consumption data obtained from reserved electricity
meter and display it on Cloud system.
*1
Set Heat-cool meter to Yes and set Tank meter to No when 1 generation meter system is installed.
Set Heat-cool meter to Yes and set Tank meter to Yes when 2 generation meter system is installed.
Remark : Elec. meter HP refers to Electricity meter that measures Heat Pump unit’s consumption.
Elec. meter 1 / 2 / 3 refers to Electricity meter no. 1 / no. 2 / no. 3

25. Electrical anode

System setup

Initial setting : No

12:00am,Mon

Pump flowrate
DHW defrost

When Electrical anode set to YES, anode will be turned on.
When Electrical anode set to NO, anode will not be turned on.

Heating control
Electrical anode
Select

160

Confirm

--- Page 161 ---
12.5.3.4

Operation Setup

Heat
26. Water temp. for heating ON

Initial setting: compensation curve

Set target water temperature to operate heating operation.
Compensation curve: Target water temperature change in conjunction with
outdoor ambient temperature change.
Direct: Set direct circulation water temperature.

55°C
Decide temperature
of 4 points as shown
in diagram

Hot water
temperature
35°C

In 2 zone system, zone 1 and zone 2 water temperature can be set separately.

-5°C

15°C

Outdoor
temperature

compensation curve

27. Outdoor temp. for heating OFF

Initial setting: 24°C

ON

Set outdoor temp to stop heating.
Setting range is 5°C ~ 35°C

OFF
24°C

28. ΔT for heating ON

Out

Initial setting: 5°C

Set temp difference between out temp & return temp of circulating water of
Heating operation.
When temp gap is enlarged, it is energy saving but less comfort. When the
gap gets smaller, energy saving effect gets worse but it is more comfortable.
Setting range is 1°C ~ 15°C

Out — Return = 1°C ~ 15°C

ON

29. Heater ON/OFF
a. Outdoor temp. for heater ON

Return

Initial setting: 0°C

OFF

Set outdoor temp when back-up heater starts to operate.
Setting range is -20°C ~ 15°C

0°C

User shall set whether to use or not to use heater.
b. Heater ON delay time

Set delay time from compressor ON for heater to turn ON if not achieve water
set temperature.
Setting range is 10 minutes ~ 60 minutes
c. Heater ON: ΔT of target Temp

Initial setting: -4°C

Compressor
ON
0 : 30

Water
Set
Temp.

Set water temperature for heater to turn on at heat mode.
Setting range is -10°C ~ -2°C
d. Heater OFF: ΔT of target Temp

Heater ON

Initial setting: 30 minutes

Initial setting: -2°C

-4°C

Set water temperature for heater to turn off at heat mode.
Setting range is -3°C ~ 0°C

161

Heater OFF

Heater ON

-2°C

--- Page 162 ---
Cool
30. Water temp. for cooling ON

Initial setting: compensation curve

20°C

Set target water temperature to operate cooling operation.
Compensation curve: Target water temperature change in conjunction with
outdoor ambient temperature change.
Direct: Set direct circulation water temperature.

5°C

In 2 zone system, zone 1 and zone 2 water temperature can be set separately.
20°C

30°C

compensation curve

31. ΔT for cooling ON

Out

Initial setting: 5°C

Set temp difference between out temp & return temp of circulating water of
Cooling operation.
When temp gap is enlarged, it is energy saving but less comfort. When the
gap gets smaller, energy saving effect gets worse but it is more comfortable.
Setting range is 1°C ~ 15°C

Return
Return — Out = 1°C ~ 15°C

Auto
32. Outdoor temp. for (Heat to Cool)

Initial setting: 15°C

Heat

Outdoor temp. rising

Set outdoor temp that switches from heating to cooling by Auto setting.
Setting range is 11°C ~ 25°C

Cool

Timing of judgement is every 1 hour

33. Outdoor temp. for (Cool to Heat)

15°C

Initial setting: 10°C

Heat

Outdoor temp. dropping

Set outdoor temp that switches from Cooling to Heating by Auto setting.
Setting range is 5°C ~ 14°C
Timing of judgement is every 1 hour

Cool
10°C

--- Page 163 ---
Tank
34. Floor operation time (max)

Initial setting: 8h

Set max operating hours of heating.
When max operation time is shortened, it can boil the tank more frequently.

Heat
30min ~ 10h

It is a function for Heating + Tank operation.

35. Tank heat up time (max)

Tank

Initial setting: 60min
Heat

Set max boiling hours of tank.
When max boiling hours are shortened, it immediately returns to Heating
operation, but it may not fully boil the tank.
Tank
5min ~ 4h

36. Tank re-heat temp.

Initial setting: -8°C

Set temp to perform reboil of tank water.
Setting range is -12°C ~ -2°C
-12°C ~ -2°C

37. Sterilization

Initial setting: 65°C 10min

2
Set timer to perform sterilization.

1 Set operating day & time. (Weekly timer format)
2 Sterilization temp (55~65°C)
3 Operation time (Time to run sterilization when it reached setting temp
5min ~ 60min)
User shall set whether to use or not to use sterilization mode.

163

1

3

--- Page 164 ---
12.5.3.5

Service Setup

38. Pump maximum speed

12:00am,Mon

Service setup

Initial setting: Depend on model

Normally setting is not necessary.
Please adjust when need to reduce the pump sound etc.
Besides that, it has Air Purge function.
When *Pump flow setting is Max. Duty, this duty set is the fix pump duty run
during room side operation.

Flow rate

Max. Duty

Operation

88:8 L/min

0xCE

Air Purge

Select

45°C

39. Dry concrete

40°C

40°C

35°C

Operate concrete curing operation.
Select Edit, set temp for every stage (1~99 1 is for 1 day).
Setting range is 25~55°C

35°C

30°C

When it is turned ON, dry concrete starts.
1

When it is 2 zone, it dries both zones.

12:00am,Mon

Service contact:
Able to set name & tel no. of contact
person when there is breakdown
etc. or client has trouble. (2 items)

4

5

6

Contact-1: Bryan Adams
ABC/ abc

Contact 1
Contact 2
Select

12.5.3.6

3

Stage

Service setup

40. Service contact

2

Conﬁrm

0-9/ Other

ABCDEFGHIJKLMNOPQR
STUVWXYZ
abcdefghi
jklmnopqrstuvwxyz
Select

Enter

Remote Control Setup

41. RC selection

12:00am,Mon

RC selection

Initial setting: Single

Single

Set to “Single” when only one remote controller is installed.
Set to “Dual” when two remote controllers are installed.

Dual
Select

164

Conﬁrm

--- Page 165 ---
12.6.2 Custom Menu

12.6 Service and Maintenance
If forget Password and cannot operate remote controller

Setting method of Custom menu

Press
for 5 sec.
Password unlock screen appears, press Confirm and it shall
reset.
Password will become 0000. Please reset it again.
(NOTE) Only display when it is locked by password.

Custom menu

12:00am,Mon

Cool mode
Back-up heater
Reset energy monitor
Reset operation history

12.6.1 Maintenance Menu

Smart DHW
Select

Setting method of Maintenance menu

Please press

Actuator check
Test mode
Sensor setup
Reset password
Select
Press

for 5 sec.

Items that can be set
Cool mode (Set With/Without Cooling function) Default is
without
(NOTE) As with/without Cool mode may affect electricity
application, please be careful and do not simply
change it.
In Cool mode, please be careful if piping is not
insulated properly, dew may form on pipe and
water may drip on the floor and damage the floor.
Backup heater (Use/Do not use Backup heater)
(NOTE) It is different from to use/not to use backup heater
set by client. When this setting is used, heater
power on due to protection against frost will be
disabled. (Please use this setting when it is
required by utility company.)
By using this setting, it cannot defrost due to low
Heating’s setting temp and operation may stop
(H75)
Please set under the responsibility of installer.
When it stops frequently, it may be due to
insufficient circulation flow rate, setting temp of
heating is too low etc.

12:00am,Mon

Maintenance menu

Confirm

Confirm
for 5 sec.

Items that can be set
Actuator check (Manual ON/OFF all functional parts)
(NOTE) As there is no protection action, please be careful
not to cause any error when operating each part
(do not turn on pump when there is no water etc.)
Test mode (Test run)
Normally it is not used.
Sensor setup (offset gap of detected temp of each sensor
within -2~2°C range)
(NOTE) Please use only when sensor is deviated.
It affects temperature control.
Reset password (Reset password)

Reset energy monitor (delete memory of Energy monitor)
Please use when moving house and handover the unit.
Reset operation history (delete memory of operation
history)
Please use when moving house and handover the unit.
Smart DHW (Set Smart DHW mode Parameter)
a) Start time: Tank reboil at lower ON Temp. onward.
b) Stop time: Tank reboil at normal ON Temp. onward.
c) ON Temp.: Tank Reboil Temp when Smart DHW start.

--- Page 166 ---
12.6.3 Check Water Pressure from Remote Controller
1. Press

SW and scroll to “System check”.

2. Press

and scroll to “System information”.

3. Press

and search for “Water pressure”.

Non [Main Menu] screen

Main menu

12:00am,Mon

Function setup
System check
Personal setup
Service contact
Select

System check

Conﬁrm

12:00am,Mon

Energy monitor
System information
Error history
Compressor
Select

System check

Conﬁrm

12:00am,Mon

Energy monitor
System information
Error history
Compressor
Select

System information

Conﬁrm

12:00am,Mon

1. Inlet
2. Outlet
3. Zone 1
4. Zone 2
Page

:
:
:
:

25°C
20°C
25°C
20°C

Conﬁrm

Screens
shown are
for illustration
purposes only.
System information

12:00am,Mon

9. COMP frequency
10. Pump ﬂowrate
11. Water pressure

:

Page

: 95Hz
11.7 L/min
: 1.51 bar

Conﬁrm

--- Page 167 ---
12.7 Outdoor Unit
Attached accessories
No.

Optional accessories

Accessories part

Qty.

No.

Drain elbow
1
□

2
□

6
□

1



Rubber cap

3

Discharge grille (left side)

3
□

Accessories part

Qty.

Base Pan Heater
CZ-NE4P

1

It is strongly recommended to install a Base Pan
Heater (optional) if the outdoor unit is install in
cold climate area. Refer the Base Pan Heater
(optional) installation instruction for details of
installation.

1

Discharge grille (right side)

4
□

1

Screw
5
□

4

12.7.1 Select the Best Location







If an awning is built over the unit to prevent direct sunlight or rain, be careful that heat radiation from the
condenser is not obstructed.
For WH-WDG05LE5, WDG07LE5 and WDG09LE5, avoid installations in areas where the ambient temperature
may drop below -25°C.
A protective zone is deﬁned for the area close around the product. See section “12.7.2 Protective zone”.
Do not place any obstacles which may cause a short circuit of the discharged air.
If outdoor unit installed near sea, region with high content of sulphur or oily location (e.g. machinary oil, etc), it
lifespan maybe shorten.
Please follow the table below for water piping speciﬁcations.
Model
WH-WDG05LE5
WH-WDG07LE5
WH-WDG09LE5

Water piping between outdoor unit and indoor unit
Inner diameter

Maximum length

Insulator thickness

Maximum Elevation

30 m

30 mm or more

10 m

ø20
ø25

--- Page 168 ---
12.7.2 Protective Zone
This outdoor unit is filled with R290(Extremely flammable gas, safety A3 group per ISO 817). Note that this
refrigerant has a higher density than air. In case of a refrigerant leak, the leaked refrigerant may accumulate near the
ground.
Prevent accumulation of refrigerant in any way that is potentially dangerous, explosive or risk suffocation. Prevent
refrigerant from entering the building through building openings. Prevent accumulation of refrigerant in the drain
grooves.
A protective zone is defined around this outdoor unit. There must be no building openings, windows, doors, light
shafts, cellar entrances, escape hatches, flat-roof windows or ventilation openings in the protective zone.
There must be no ignition sources, such as heat above 360°C, sparks, open flame, plug sockets, light switches,
lamps, electrical switches or other permanent ignitions sources, in the protective zone.
The protective zone must not extend to adjacent buildings or public traffic areas (boundaries of neighbors, the public
road, neighbor’s private roads, subsidence area, depressions, pump shafts, sewers intakes, waste water shafts and
so on.).
In the protective zone, you are not permitted to make any subsequent structural alterations which infringe the stated
rules for the protective zone.
1) Protective zone for ground installation (or ﬂat-roof
installation) at the open areas

4) Protective zone for wall installation in front of a
building wall
A

A 1000 mm

A

A 2000 mm
B 3000 mm
C 300 mm
D 1000 mm

B

D

C

2) Protective zone for ground installation in front of a
building wall

A

A

The protective zone under the product extends to the
ﬂoor.

B

B

5) Protective zone for wall installation in a building
corner

D

C

A 2000 mm
B 3000 mm
C 300 mm
D 1000 mm

A

3) Protective zone for ground installation in a building
corner

A
B
C
D
E
F
G

B

C
A

E

A
B
C
D
E
F
G

B

C
E

F

2000 mm
2500 mm
300 mm
500 mm
1000 mm
500 mm
1800 mm

F

2000 mm
2500 mm
300 mm
500 mm
1000 mm
500 mm
1800 mm

D

G

The protective zone under the product extends to the
ﬂoor.

D

G

--- Page 169 ---
12.7.3 Install the Outdoor Unit
Dimension Diagram
33.5
55.5

12.7.3.1

It is advisable to avoid more than 2 blockage directions.
For better ventilation & multiple-outdoor installation,
please consult authorized dealer/specialist.

Top view
126
95
50

430

170

739
669

924

996

980

Front view

(160)

144

Side view

160

10
or 0m
mo m
re

m
0m
30 more
r
o

412.5

35.5

660

Water outlet port

511

15.5
37.5

39

Pressure relief valve
connecting port

Drain hole

Connecting cable
Water inlet port

Bottom view

mm
00 re
10 r mo
o

30
or 0mm
mo
re

After selecting the best location, start installation according to Installation Diagram.
1. When installing at roof, please consider strong wind and earthquake. Please fasten the installation stand
ﬁrmly with bolt or nails.
2. When installing to a concrete or solid surface, use M10 or a W 3/8 bolts and nuts to secure the unit. Ensure
that it installed upright on a horizontal plane. (Use an anchor bolt for the installation as shown in the diagram
below.)
More than
40mm

Base

More than
50mm

More than
25mm
less than
60mm



Rear view

Anchor bolt length

--- Page 170 ---
12.7.3.2




Disposal of Outdoor Unit Drain Water

When a Drain elbow 1 is used, please ensure to follow below:
- the unit should be placed on a stand which is taller than 50 mm.
- cover the ø32mm holes with Rubber cap 2 (refer to illustration below).
- use a tray (ﬁeld supply) when necessary to dispose the outdoor unit drain water.
If the unit is used in an area where temperature falls below 0°C for 2 or 3 consecutive days, it is recommended
not to use the Drain elbow 1 and Rubber cap 2 , for the drain water freezes and the fan will not rotate.

Drain
elbow 1

Rubber
cap 2

Pressure relief valve drainage pipe-work
 Use a drain hose with inner diameter of 15mm.
 The hose must be installed in a continuously downward direction and left open to the frost-free atmosphere.
 If drain hose is long, use a metal support ﬁxture along the way to eliminate the wavy pattern of drain hose.
 Water will drip from this hose, therefore the outlet of this hose must be installed in an area where the outlet
cannot become blocked.
 Do not insert this hose into sewage or drain pipe that may generate ammonia gas, sulfuric gas, etc.
 If necessary, use a hose clamp to tighten the hose at drain hose connector to prevent it from leaking.
Pressure relief
valve connecting
port
Drain hose

Illustration of how to ﬁx
drain hose to unit

12.7.4 Connect the Cable to the Outdoor Unit
(FOR DETAIL REFER TO WIRING DIAGRAM AT UNIT)
1. Attach the discharge grille (left side) 3 for safety before connecting the cable.

4 claw hooks

Screw 5 in 4 places

2. Connecting cable between indoor unit and outdoor unit shall be approved polychloroprene sheathed ﬂexible
cable (see below table), type designation 60245 IEC 57 or heavier cable. Sheath diameter of connecting cable
shall be within speciﬁcation (see below table) to ﬁt cable gland.
Flexible cable speciﬁcation
4 × min 2.5 mm

2

Cable diameter
ø12.0-14.0

--- Page 171 ---
3. Route the cable as follows
*1 Locally procured cabtyre cables with the speciﬁed diameter.
*2 Must be fastened with the speciﬁed torque Viewpoint of gas intrusion prevention.
① Remove the front plate (Fig. 4-1)
② Remove the terminal cover and cable gland cap (Fig. 4-2)
③ Insert the cabtyre cable *1 (Fig. 4-3, 4-4)
(Pulled in from the rear panel and inserted from the bottom of the electric controller BOX)
④ Connect to terminal block (Fig. 4-5)
⑤ Fasten the cable gland *2 (Fig. 4-4)
⑥ Set the terminal cover *2 (Fig. 4-2)
⑦ Set the front plate (Fig. 4-1)

Tightening torque :
147.1 ~ 245.2 cN•m
(15 ~ 25 kgf•cm)
Cable gland
Terminal cover

Cable gland
cap disposal
Fig. 4 - 2

Fig. 4 - 1

The cabinet top plate does not need to be removed.
Fasten with
the cable tie.
Pass the cable
through the groove.
Cabtyre cable
From
Indoor unit

If it is difﬁcult to pass
the cable through, the
cover can be removed.

Fig. 4 - 3
The nut does not need to be removed.
If accidentally the nut is removed, fasten to
the following torque.
Tightening torque : 220 ~ 300 cN•m
(22.43 ~ 30.59 kgf•cm)

Fasten the cable gland
Tightening torque :
180 ~ 250 cN•m
(18.35 ~ 25.49 kgf•cm)

Pass the cable through the cable gland.
Fig. 4 - 4

--- Page 172 ---
WARNING
This equipment must be properly earthed.

Screw
1

2

3

Earth Wire
must be longer
than other
wires for safety
reason.

Terminals on the indoor unit

1

2

3

Colour of wires
Terminals on the outdoor unit

1

2

3

Terminal screw

Tightening torque
cN•m {kgf•cm}

M4

157 ~ 196 {16 ~ 20}

M5

196 ~ 245 {20 ~ 25}

Cable gland

12.7.4.1

Wire Stripping and Connecting Requirement
Inner diameter: Ø5.2 or more
Outer diameter: Ø12.5 or less

Wire stripping and crimp a ring
terminal to the wire

Indoor/outdoor
connecting
terminal board

5 mm or more
(gap between wires)
Fig. 4 - 5

12.7.5 Pipe Insulation
1. Please carry out insulation at pipe connection portion as mentioned in Indoor/Outdoor Unit Installation Diagram.
Please wrap the insulated piping end to prevent water from going inside the piping.

12.7.6 Install the Discharge Grille
1. Remove the 3 screws fastened to the cabinet front plate. (Fig. 6-1)
2. Insert 4 claws of the discharge grille (right side) 4 and fasten the 3 screws. (Fig. 6-2)
CAUTION
Make sure to install the discharge grille to the outdoor unit before
powering ON to protect againts a rotating fan.

Remove the
3 screws
Fasten the
3 screws

Insert 4 claws

Fig. 6-1

Fig. 6-2
CAUTION

If cleaning of the outdoor unit is necessary during installation or
servicing, do not clean the outdoor unit with any hydrocarbon
based solvent.

--- Page 173 ---
13. Installation and Servicing Air-to-Water using R290
WARNING

This symbol shows that this equipment uses a flammable refrigerant with safety A3 group per ISO 817. If the
refrigerant is leaked, together with an external ignition source, there is a possibility of fire / explosion.

13.1 About R290 Refrigerant
Hydrocarbon is a class of organic chemical made up only with the element Carbon (C) and Hydrogen (H). R290 is
the type of Hydrocarbon refrigerant which is environmentally good-natured and odorless refrigerant. Under Kigali
Amendment to the Montreal Protocol, 80% reduction of greenhouse gas emission by next 30 years is required, and
due to this requirement, further reduction in the emission of high greenhouse effect gas is required. Therefore, the
conversion of air-conditioning refrigerant into one which has no greenhouse effect, even if it is dissipated into the
atmosphere became our responsibility.
Nevertheless, in case of air-conditioning refrigerant, it would be the best if there is a refrigerant which has no impact
on global warming but ensures good energy efficiency and performance, and is safe; however, there is no such
refrigerant which satisfies all these conditions. As a result, we have been considering the practical usage, within the
safety frame-work, of R290 refrigerant which has no effect of global warming but highly flammable.

13.2 Characteristics of R290 Refrigerant
1. Chemical Characteristics
R290 (Propane) is refrigerant grade propane, which is natural, non toxic, and chemically stable compound formed by
hydrogen.
R290 is one of natural refrigerant, therefore it has almost zero greenhouse gas effect. R-290 is a single-component
hydrocarbon substance and the most hydrocarbon properties as it is highly flammable.
Chemical Characteristic Table of R290 and R32
R290

R32

Chemical Formula

C3H8

CH2F2

Composition

Single Composition

Single Composition

Boiling point (°C)

-42.1

-51.7

50°C vapor pressure (MPa)

1.71

3.14

Ozone Depletion Potential

0

0

Global Warming Potential (GWP)

3

675

Inflammability

Highly Inflammable (A3)

Slightly Inflammable (A2L)

Toxicity

None

None

2. Characteristic of Pressure
As shown in Table 2, R290 has half the vapor pressure of R32 at the same refrigerant temperature.
As such, it can be installed and maintained with the same high-pressure tools and components as the R32.
Table 2. Saturated vapor pressure comparison table
(Unit: MPaG)
Temperature (°C)

Refrigerant
R290

R32

-20

0.14

0.30

0

0.37

0.71

20

0.74

1.37

40

1.27

2.38

60

2.03

3.84

65

2.23

4.29

Reference : Thermal properties table of Japan Society of Refrigerating and Air Conditioning Engineers (60, 65°C)
NIST REFPROP V8.0 (-20 ~ 40°C)

--- Page 174 ---
3. Flammable characteristic
As shown in below table, R290 is highly flammable and explosive when heated. The installation must be equipped
with ATEX (Atmospheres Explosible) certified equipment and must always turn on the combustible gas detector
during servicing and when entering the service area. Service must also be performed in a well-ventilated area,
especially if the refrigerant system is being accessed.
3.1 Safety class

Increasing
Flammability

SAFETY GROUP
Higher Flammability

Lower Flammibility
No Flame
Propagation

A3

B3

A2

B2

A2L

B2L

A1

B1

Lower
Toxicity

Higher
Toxicity

Increasing Toxicity
Refrigerant

Burning Speed cm/s

R32

6.7

R290

38.7

3.2 Concentration control for R290
Because R290 is highly flammable, it can burn or explode if there is enough product concentrated in one space
and the refrigerant comes in contact with an ignition source.
Control measurement;
Descriptions

Specifications
3

Lower flammability limit (LFL) [kg/m ]

0.038

Lower flammability limit (LFL) [%]

2.1

Practical limit (PL) [kg/m3]

0.008

Density of vapour [kg/m3]

1.83

LFL

UFL

Too lean
to burn

Too rich to burn

10%
2%
Propane (R290)
100% air
0% gas

0% air
100% gas

The concentration of R290 between the lower flammable limit (2%) and upper flammable limits (10%) is enough to
ignite fire.
Note:
LFL – Lower flammable limit whereby the concentration of flammable gas, vapour or mist in the air below which an
explosive gas atmosphere will not be formed.
UFL – Upper flammable limit whereby the concentration of flammable gas, vapour or mist in the air below which an
explosive gas atmosphere will not be formed.
PL – Defined as concentration used for simplified calculation to determine the maximum acceptable amount of
refrigerant in an occupied space (20% of LFL)
3.3 Material classification and Hazard statement
H280

Contain gas under pressure; may explode if heated

CGA-HG01

May cause frostbite

--- Page 175 ---
13.3 Refrigerant piping installation • Tools used in services
13.3.1 Required Tools
R290 refrigerant air conditioners must use ATEX (Atmosphere Explosible) certified equipment. The common parts as
R32 air conditioners for two-way valves and three-way valves (diameters of service ports); thus, they maintain
commonality in the maintenance of the compressive strength, the size of pipe flaring, and the size of flare nuts as
R32. However refrigerant pipe installation and services must use tools certified for highly flammable gas.
However, mixing of refrigerants is not allowed, so that you have to separate the cylinders for the recovery of
refrigerants.
Tools used for installation • relocation • replacement of air conditioning units
Works

R290

R32
Not applicable for Monobloc

Connecting of refrigerant pipes

Not applicable for Monobloc

Manifold gauge charging hose

HC Manifold gauge to avoid refrigerant
contamination

R32 & R410A Common

Air purging

Vacuum pump complied with ATEX (Atmosphere
Explosible)

Vacuum pump + Reducer / expander

Gas leakage test

Combustible gas detector

Detection liquid or soup water, HFC detector

For other installation, you can use general tools such as screw drivers (+, -), metal saws, long-nose pliers, hole core
drills, linen tape, levels, temperature gauges, clamp meters, electric knives, nippers, pipe cutters, reamers or
scrapers, spring benders, monkey wrenches, fixing wrenches, feeler gauges, hexagon wrenches (4 mm), testers,
megohm testers, etc.
Tools used for services.
Works

R290

R32

Insertion of refrigerant

Digital scale for refrigerant charging, refrigerant cylinders, cylinder adopters and packing *a

Recovery of refrigerant

Refrigerant recovery devices, refrigerant cylinders, manifold gauges, charging hoses *b

*a. Use cylinder for each refrigerant, cylinder adopter and packing.
*b. Use refrigerant recovery cylinder separately for each refrigerant (no mixture of refrigerant allowed).

--- Page 176 ---
13.3.2 Tools for R290

High pressure gauges
(red)

-0.1 ~ 5.3 MPa
-76 cmHg ~ 53 kgf / cm2

3. Vacuum pump and isolator.
When using a vacuum pump, it is compulsory to use
an ATEX certified vacuum pump.
When connecting service equipment (such as vacuum
pumps) to a power source, the connection should be
made in outside the Temporary Danger Zone.
It is recommended to use an ATEX Isolator switch to
facilitate a safe shutdown in the danger zone.
It is necessary to set a solenoid valve in order to
prevent backflow of vacuum pump oil into the charge
hoses and use a vacuum pump with oil backflow
prevention function.
If vacuum pump oil (mineral oil-based) mixes with
R290, it may cause damage to the machine.

Low pressure gauges
(blue)

-0.1 ~ 3.8 MPa
-76 cmHg ~ 38 kgf / cm2

Vacuum pump

1. Manifold gauges
R32 gauge can be used for R290 pressure.
Each port of manifold has different shapes in order
to prevent inserting wrong refrigerant.
*However, the port shape for R290 and R32 is the
same; therefore, attention need to be paid not to insert
wrong refrigerant.
Differences in high/low pressure gauges
R290 (common R32)

Difference in manifold port sizes
R290 (common R32)
Port sizes

1/2 UNF20

2. Charging hoses
The material is changed to HC resistant, and the size
of each manifold adopter is common, as the R32 port
size of manifold gauge.
Further, some hoses are with anti-gas pressure
backflow valves placed near the adopters. (hoses with
the valves recommended)
Isolator

Manifold gauges / Charging hoses

Differences in charging hoses
R290 (common R32)
Pressure
Resistance

Normal
operation
pressure
Burst
pressure

Material

5.1 MPa
(52 kgf / cm2)
27.4 MPa
(280 kgf / cm2)
HNBR rubber
Internal nylon coating

--- Page 177 ---
4. Leak Detector
HC refrigerant Electric gas leakage tester is used for
R290. The usage of existing HFC detectors cannot be
use as they can produce spark. We recommend to
use detectors specifically designed for combustible
gas.

6. Refrigerant cylinders
Refrigerant cylinders for R290 are painted in other
colors that might subject to change according to the
international standards. R290 is a single refrigerant,
so that both liquid and gas insertion are possible.
Additional charging is also possible.

Combustible gas leak detector

Refrigerant cylinders

5. Digital scale for refrigerant charging
R290 has lower pressure level and the evaporates
speed is slow. Thus, the digital scale for refrigerant
charging can be used in common with R32. The
charging port for R32 is (1/2 UNF20), common with
R290
Digital scale for refrigerant charging
7. Connection ports of refrigerant cylinders and
packing
Charging ports which fit to the charging hose
connection port size (1/2 UNF20) is needed. At the
same time, the packing has to be of HC resistant
materials.
Connection ports and packing

--- Page 178 ---
8. Tools used for refrigerant piping installations and services
Common tools

R290

R32

1.

Pipe cutters, reamers or scrapers

Not applicable for Monobloc

Not applicable for Monobloc

2.

Flare tools (clutch type)

Not applicable for Monobloc

Not applicable for Monobloc

3.

Torque wrench (1/4, 3/8)

Not applicable for Monobloc

Not applicable for Monobloc

4.

Torque wrench (1/2, 5/8)

Not applicable for Monobloc

Not applicable for Monobloc

○

5.

Manifold gauges, charging hose

○

6.

Vacuum pump, vacuum pump isolator *2

Connection 5/16 [ATEX certified] *1

7.

Electric gas leakage detectors

Combustible gas detector

HFC detector

8.

Digital scale for refrigerant charging

○

○

9.

Recovery devices (connection port 5/16) *2

ATEX certified

HFC recovery devices

10.

Refrigerant cylinder color

Other (colors that might subject to
change according to the
international standards)

Other (colors that might subject to
change according to the
international standards)

11.

Refrigerant cylinder connection port and packing

x

Allen wrench (4mm) Electric knives

x

○
○

12.
*1

Those testers only for HC only cannot be for common use with HFC

*2

Recovery devices which are certified by Atmosphere Explosible (ATEX)
[Knowledge for the common usage of tools for R290 & R32]
R290 and R32 machines use different compressor oils.

If unregulated compressor oil gets mixed into, it may cause damage to the machine function.
[Inserting wrong refrigerant]

It may cause "not cooling" and "not heating" customer claims because each component (expansion valve, compressor, PCB) of
the refrigerant cycle is specially adjusted for R290.

At the same time, it is not subject to product warranty, if wrong refrigerant was inserted into system.

Reference: ASHRAE Standard 34-2016
 ISO Standard ISO 5149
 ISO 817:2014

--- Page 179 ---
13.4 New installation, and Repairing of Refrigerant Cycle System Procedures
Personnels working on A3 systems may be subject to applicable occupational hazard or regulations required by local
or national law.
For safe servicing and disposal, technicians must have detailed knowledge and skills in handling of flammable
refrigerants, prevention of refrigerant leaks, leak detection, personal protective equipment, cylinder handling and
loading. A dry powder or C02 fire extinguisher must be available at the place of service.

New Installation

New Installation

Repairing-refrigerant cycle

Refrigerant recovery

Purging by using Nitrogen Gas

In case of Hot water Coil
(heat exchanger plate) replacement

Remove water from water pipes

• Displacing pipes and wires and
displacing indoor / outdoor units
• Dismantling outdoor units
• Repairing by brazing

Prevention of impurity

Removal

• Indoor / outdoor units
installation and water
piping and wiring

Evacuation (Air purging)
more than 60 minutes

Insertion of refrigerant

Leakage checking

Connecting water pipes and add
water, remove air from water pipes

Operation testing

--- Page 180 ---
13.5 Servicing
13.5.1 Recover R290 refrigerant with refrigerant recovery machine
CAUTION!
 Always turn ON the combustible leak detector.
 Keep all ignition sources, hot surface, and open flames 3 meter away from the product.
 Ensure the servicing area is well ventilated.
 Ensure the product is service by certified serviceman.
 Ensure to always have the approved fire extinguisher.

Service valve

Service
Magnet

1. Replace v-coil with solenoid
service magnet to fully open
the expansion valve.
Note: If this step is not
performed and expansion
valve is not fully open the
recovery process will be
slow.

CAUTION!
All equipment and material must be ATEX certified to be allowed to operate within Atmosphere Explosible zone.

Manifold Gauge

Service valve

LO

Recovery Machine

Recovery Cylinder

HI

Recovery
valve
Weight Scale

CAUTION!
Do not refill R290 refrigerant more that 50% of recovery cylinder capacity to avoid overpressure. (Safety risk)

2.
3.
4.
5.
6.

Refrigerant Type

Recovery Cylinder Capacity

R32

80% of the weight

R290

50% of the weight

Connect the Low side charging hose of the manifold gauge to the service valve (2-way valve) in the outdoor unit.
Connect the center hose of the manifold gauge to the recovery machine.
Attached the manifold gauge correctly and tightly. Ensure both valve (Low side and High side) is in close position.
Connect the hose from recovery machine to the recovery cylinder.
Turn ON the recovery machine, turn the low side valve, service valve and recovery valve to open position.

--- Page 181 ---
13.5.2 Purging by using Nitrogen Gas Before Servicing and Disposal
Manifold Gauge
Set circuit pressure to 0.7MPa (101psi)
Gauge 1

Gauge 2
LO

HI

Air release
valve
Service valve

Low side
valve

High side
valve

Nitrogen
release
valve

Height distance from
floor ≥ 1 meter

Pressure
Regulator

Nitrogen
Cylinder

Weight Scale

1. Connect nitrogen cylinder to the high side at the manifold gauge. Ensure nitrogen cylinder is connected to
pressure regulator.
2. Close air release valve and open service valve.
3. Open High side valve and nitrogen release valve. (Set the pressure regulator to 200psi).
4. Charge nitrogen gas up to 0.7MPa (101psi) or charge 400 grams of nitrogen into the unit.
5. Close high side valve and open air release valve (half open) to release remaining propane to the atmosphere. Air
release valve must be directed 1 meter from the floor to enable the propane gas to spread properly in the
atmosphere. [Beware not to fully open the air release valve to avoid high pressure and compressor oil discharge].
6. When gauge 1 pressure reach near atmospheric (15psi) point the combustible leak detector to air release valve
to detect the presence of propane. If presence of propane can still be detected, repeat procedure 2 to 5 until
presence of propane cannot be detected.
[Then refrigerant circuit repairment or unit decommissioning should be done].
7. Before charging new refrigerant, vacuum the system until it reaches to 500micron (67Pa) to remove foreign gas
in the system and hold for 15 minutes.

--- Page 182 ---
14. Operation and Control
14.1 Basic Function
Inverter control, which equipped with a microcomputer in determining the most suitable operating mode as time
passes, automatically adjusts output power for maximum comfort always. In order to achieve the suitable operating
mode, the microcomputer maintains the set temperature by measuring the temperature of the environment and
performing temperature shifting. The compressor at outdoor unit is operating following the frequency instructed by
the microcomputer at indoor unit that judging the condition according to internal water setting temperature and water
outlet temperature.

14.1.1 Internal Water Setting Temperature
Once the operation starts, control panel setting temperature will be taken as base value for temperature shifting
processes. These shifting processes are depending on the Air-to-Water Heat pump settings and the operation
environment. The final shifted value will be used as internal water setting temperature and it is updated continuously
whenever the electrical power is supplied to the unit.

14.1.2 Heating Operation
14.1.2.1



Thermostat Control

Compressor is OFF when Water Outlet Temperature – Internal Water Setting Temperature > 3°C for
continuously 3 minutes.
Compressor is ON after waiting for 3 minutes, if the Water Outlet Temperature – Water Inlet Temperature
(temperature at thermostat OFF is triggered) <-3°C.

14.1.2.2

Thermostat Control (Outdoor Ambient Temperature)

Stops provide heating to room side during high outdoor ambient condition.
Control content:
 Heating operation and water pump will turn OFF when outdoor ambient temperature > outdoor thermo off
temperature + 3°C.
(Outdoor thermo off set temperature is set by control panel. Thermo off set temperature is between 5°C ~ 35°C)
 Heating operation will resume when Outdoor ambient temperature < Outdoor thermo OFF set temperature + 1°C.

14.1.2.3

Heat Mode Operation

Operation of heat pump provide heating capacity to room side by hot water through heating panel, floor heating or
fan coil unit.
1 3 ways valve control:
o 3 ways valve switch and fix to heating side.
2 Heat pump operates follow normal heating operation.
3 Back up heater operate follow normal operation.
4 2 ways valve control:
o 2 ways valve opens.

14.1.3 Cooling Operation
14.1.3.1



Thermostat Control

Compressor is OFF when Water Outlet Temperature – Internal Water Setting Temperature > -1.5°C for
continuously 3 minutes.
Compressor is ON after waiting for 3 minutes, if the Water Outlet Temperature – Water Inlet Temperature
(temperature at thermostat OFF is triggered) >3°C.

14.1.3.2
1
2
3
4

Cool Mode Operation

3 ways valve control:
o 3 ways valve switch and fix to cooling side.
Heat pump operates follow normal cooling operation.
Room heater DOES NOT operate during cool mode.
2 ways valve control:
o 2 ways valve is closed.

--- Page 183 ---
14.1.4 Target Water Temperature Setting
14.1.4.1

Target Water Temperature Control of Standard System (Optional PCB not
Connected)

There are 2 types of temperature control selection which are Compensation and Direct.
 Temperature control type selection by installer:
1 Compensation : Wlo, WHi, ODLo, ODHi can be set at installer menu.
2 Direct
: Direct Water Temperature Set
 Remote control setting by user:
1 Compensation : Shift value ±5°C from the compensation curve
2 Direct
: Direct water temperature set change
*This setting only able to set when room sensor select as Water Temperature.
*Instead of water temperature, user will set target room temperature when room sensor select as Room Thermistor
OR Internal Room Thermostat.


Target water temperature is calculated as below condition.
o Target water temperature = A (Base temperature) + B (shift temperature)
A (Base Temperature)

o

Compensation

Direct

Value from the curve + User shift value set

Direct value from user setting

B (shift temperature) value is depend on the room sensor selection at remote controller as below table:
B (Shift Temp.)

B shift value depend on the room sensor selection at remocon as table below
Sensor selection

Water temperature

B=0

External Room thermostat

B=0
Cool Mode:
B = 0 ; when Zone OFF or Zone Room Thermo OFF
B = B = 1* (room set temp (R/C) – actual room temp)
Max/Min Regulation of B: (Max = 5 ; Min = -5)

Internal Room thermostat &
Room Thermistor



Heat Mode:
B = 0 ; when Zone OFF or Zone Room Thermo OFF
B = follow Heating Room Temperature PI control logic

Maximum/minimum regulation of Target Water Temperature
Heating

Cooling

Max

55°C (Below Ambient -15°C) *
75°C (Below Ambient -10°C) *

20°C

Min

20°C

5°C

* Between outdoor ambient -10°C and -20°C, max target decreases gradually from 75°C to 55°C.
Compensation Type: (Operation under Heat Mode and Cool Mode)
 The set temperature defines the parameters for the ambient (Outdoor temperature) dependent operation of the
unit. The water temperature is determined automatically depending on the outdoor temperature. Default setting is
the colder outdoor temperature will result in warmer water and vice versa. The user has the possibility to shift up
and shift down the target water by remote control setting.

A

OD (LO) = Setting Of LOW Outdoor Ambient Temperature.
OD (HI) = Setting Of HIGH Outdoor Ambient Temperature.
W (LO) = Setting Of Water Temperature at LOW OD Ambient.
W (HI) = Setting Of Water Temperature at HIGH OD Ambient.

W (LO)
W (HI)

OD (LO)

OD (HI)

183

Outdoor
Ambient

--- Page 184 ---



Outdoor ambient is updated every 30 minutes when operation ON.
Setting water outlet temperature always follow W(LO) or W(HI) whenever is higher if outdoor ambient sensor or
indoor communication error happen.

However, when powerful mode is requested by remote control during heating mode, the higher value of HLo or Whi
will be used for A calculation.
* There are 2 compensation curves (for heating and cooling). During heating mode, the heating curve is used and
during cooling mode, the cooling curve is use.


Compensation curve set shift value:
Tw

Tw_Hi
+5
Tw_Lo

±5

Shift value

-5

To_Lo

To_Hi

To

14.1.5 Target Water Temperature at Extension System (Optional PCB is Connected)
Target water temperature is calculated as below.
 Heat Mode:


When buffer tank selection is “YES:”
Target water temperature = Target buffer tank temperature + [2°C]



When buffer tank selection is “NO”
o If both zone 1 and zone 2 is active
Target Water Temperature = Higher zone target water temperature of Zone 1 and Zone 2.
o If only one zone is active
Target Water Temperature = Zone target water temperature of active zone.



Cool mode:



When buffer tank selection is “YES”
o If both zone 1 and zone 2 active
Target Water Temperature = Lower Zone Target Water Temperature of Zone 1 and Zone 2
o If only one zone is active
Target Water Temperature = Zone Target Water Temperature of active zone



When buffer tank selection is “NO”
o If both zone 1 and zone 2 active
Target Water Temperature = Lower Zone Target Water Temperature of Zone 1 and Zone 2
o If only one zone is active
Target Water Temperature = Zone Target Water Temperature of active zone

*Cool Mode does not have SG ready control

--- Page 185 ---
14.1.6 Target Zone Water Temperature Control
Purpose:- To control zone mixing and zone pump according to the zone sensor temperature

14.1.6.1

Target Zone 1 Water Temperature Setting Control



Start condition
o Heating zone 1 is ON by remote control or Timer or Auto Mode OR
o Cooling zone 1 is ON by remote control or Timer or Auto Mode.



Cancel condition
o Heating zone 1 is OFF by remote control or Timer or Auto mode AND
o Cooling zone 1 is OFF by remote control or Timer or Auto mode.



Target Zone 1 water temperature is calculated as below condition.
o Target Zone 1 water temperature = A (Base temperature) + B (shift temperature)
A (Base Temperature)

Compensation

Direct

Value from the curve + User shift value set

Direct value from user setting

* During heat mode and compensation select, if powerful mode is activated, higher value of WLo or WHi will be use
as curve value.
o

B (shift temperature) value is depend on the room sensor selection at remote controller as below table:
B (Shift Temp.)

B shift value depend on the room sensor selection at remocon as table below
Sensor selection

Water temperature

B=0

External Room thermostat

B=0

Internal Room thermostat &
Room Thermistor

Pool Function Selected

Cool Mode:
B = 0 ; when Zone OFF or Zone Room Thermo OFF
B = B = 1* (room set temp (R/C) – actual room temp)
Max/Min Regulation of B: (Max = 5 ; Min = -5)
Heat Mode:
B = 0 ; when Zone OFF or Zone Room Thermo OFF
B = follow Heating Room Temperature PI control logic
B = Delta value setting from remocon

* B = 0 regardless of which sensor selection, if SHP control bit is enable except Pool function select (maintain Pool
“B” value)
** Pool function also can be select at Zone 1 when optional PCB is connected and Zone 1 system is select.


Maximum/minimum regulation of Target Water Temperature.
Heating

Cooling

Max

55°C (Below Ambient -15°C) *
75°C (Below Ambient -10°C) *

20°C

Min

20°C

5°C

* Between outdoor ambient -10°C and -20°C, max target decreases gradually from 75°C to 55°C.


Target Zone 1 Water Temperature (Heat mode only) during SG ready control
o

o

If buffer tank selection is “NO” then following shift is carried out.
While digital input is “10” or “11” then,


Final Target Zone 1 water temperature
= Target Zone 1 water temperature* (SG ready % setting (remote control menu))%
If buffer tank selection is “YES”
 No shift of Target Zone 1 Water Temperature. Target Buffer Tank Temperature will change accordingly.
* Refer to “Buffer tank temperature control”

--- Page 186 ---
14.1.6.2

Target Zone 2 Water Temperature Setting Control



Start condition
o Heating zone 2 is ON by remote control or Timer or Auto Mode OR
o Cooling zone 2 is ON by remote control or Timer or Auto Mode.



Cancel condition
o Heating zone 2 is OFF by remote control or Timer or Auto mode AND
o Cooling zone 2 is OFF by remote control or Timer or Auto mode.
Target Zone 2 water temperature is calculated as below condition.
o Target Zone 2 water temperature = A (Base temperature) + B (shift temperature)



A (Base Temperature)

Compensation

Direct

Value from the curve + User shift value set

Direct value from user setting

* During heat mode and compensation select, if powerful mode is activated, higher value of WLo or WHi will be use
as curve value.
o

B (shift temperature) value is depend on the room sensor selection at remote controller as below table:
B (Shift Temp.)

B shift value depend on the room sensor selection at remocon as table below
Sensor selection

Water temperature

B=0

External Room thermostat

B=0

Internal Room thermostat &
Room Thermistor

Pool Function Selected

Cool Mode:
B = 0 ; when Zone OFF or Zone Room Thermo OFF
B = B = 1* (room set temp (R/C) – actual room temp)
Max/Min Regulation of B: (Max = 5 ; Min = -5)
Heat Mode:
B = 0 ; when Zone OFF or Zone Room Thermo OFF
B = follow Heating Room Temperature PI control logic
B = Delta value setting from remocon

* B = 0 regardless of which sensor selection, if SHP control bit is enable except Pool function select (maintain Pool
“B” value)
** Pool function also can be select at Zone 2 when optional PCB is connected and Zone 2 system is select.


Maximum/minimum regulation of Target Water Temperature.
Heating

Cooling

Max

55°C (Below Ambient -15°C) *
75°C (Below Ambient -10°C) *

20°C

Min

20°C

5°C

* Between outdoor ambient -10°C and -20°C, max target decreases gradually from 75°C to 55°C.


Target Zone 2 Water Temperature (Heat mode only) during SG ready control
o If buffer tank selection is “NO” then following shift is carried out.
 While digital input is “10” or “11” then,
Final Target Zone 2 water temperature
= Target Zone 1 water temperature* (SG ready % setting (remote control menu))%
o If buffer tank selection is “YES”
 No shift of Target Zone 2 Water Temperature. Target Buffer Tank Temperature will change accordingly.
* Refer to “Buffer tank temperature control”

14.1.6.3


Zone Temperature Control Contents

During Standard System (Optional PCB not connected)
o Only 1 zone temperature control is available
o This zone room temperature is control by either one of the 4 room sensor (Room Th, Int/Ext Room
Thermostat, Water temperature)

--- Page 187 ---
Target Zone Water Temperature is calculated based on selected temperature control type (Compensation or
Direct) and selected room sensor. Target Water Temperature will set same as Target Zone Water
Temperature
o Target Water Temperature is the temperature for heat pump to operate refer to indoor water outlet sensor.
o Heat pump and water pump OFF when ROOM Thermo OFF (Zone thermo OFF by Room Th or Room
Thermostat).
* There will be no zone sensor connected to zone 1 (No zone sensor error), mixing valve and zone pump will not
operate.
o



During Extension System (Optional PCB connected)

* There will be no zone sensor connected to zone 1 (No zone sensor error), mixing valve and zone pump will not
operate.
 During Extension System (Optional PCB connected)


Buffer Tank connection select "NO" &
o One zone system is select
 This zone room temperature control by either one of the 4 room sensor (Room Th, Int/Ext Room
Thermostat, Water temp.)
 Target Zone Water Temperature calculate base on selected temperature control type (Compensation or
Direct) and selected room sensor.
 Target Water Temperature will set same as Target Zone Water Temperature
 Target Water Temperature is a temperature for heat pump to operate refer to indoor water outlet sensor.
 Heat pump and water pump OFF when ROOM Thermo OFF (Zone thermo OFF by Room Th or Room
Thermostat).

* There will be no zone sensor connected to zone 1 (No zone sensor error), mixing valve and zone pump will not
operate.
o



2 zone system select
 Each zone room temperature is control by each sensor which select from either one of the 4 room sensor
 Target Zone 1 & 2 Water Temperature is calculated based on selected temperature control type
(Compensation or Direct) and selected room sensor.
* Zone Mixing Valve & Zone pump will operate to achieve Target Zone Water Temperature which refer to
zone sensor.
* Zone Sensor will detect if zone sensor is open or short.
 Target Water Temperature will set same as the active & higher zone water temperature setting. (When
cooling mode, lower zone water temp setting)
 Target Water Temperature is the temperature for heat pump to operate refer to indoor water outlet
sensor.
 Heat pump and water pump OFF when ROOM Thermo OFF (Both Zone thermo OFF by Room Th or
Room Thermostat).

Buffer Tank Connection select "YES" &
o 1 zone system or 2 zone system select
 Each zone control by each sensor which select from either one of the 4 room sensor
 Target Zone 1 & 2 Water Temperature calculate base on selected temperature control type
(Compensation or Direct) and selected room sensor. Each zone have their own Target Zone Water
Temperature.
* Zone Mixing Valve & Zone pump will operate to achieve each Target Zone Water Temperature which
refer to zone sensor
* Zone Sensor will detect if zone sensor is open or short.
 Target Buffer Tank Temperature will be set as active & higher zone water temperature setting + Buffer
Delta T. (Heating) Target Buffer Tank Temperature will be set as active & lower zone water temperature
setting (Cooling).
 Target Water Temperature will set as Target Buffer Tank Temperature + [2°C] (Heating) Target Water
Temperature will set as Lower or Active Target Zone Water Temp. + [-3°C] (Cooling)
 Target Water Temperature is a temperature for heat pump to operate refer to indoor water outlet sensor.
 Heat pump and water pump OFF when ROOM thermo OFF
 Heat mode: ROOM thermo OFF (Buffer Tank Temperature > Target Buffer Tank + [0°C]
 Cool mode: ROOM Thermo OFF (Both Zone thermo OFF by Room Th or Room Thermostat)

--- Page 188 ---
14.1.7 Auto Mode Operation

COOL
MODE
Heat To Cool
Setting Temp.
HEAT
MODE

Cool To Heat
Setting Temp.

Outdoor Ambient



Control details:
o To enable the unit to operate either heat or cool mode automatically, heat to cool set temperature and
cool to heat set temperature can be set by control panel.
o Automatic operation is judged based on control panel setting temperature and outdoor ambient
temperature.
* Minimum setting of heat to cool set temperature is 1°C higher than cool to heat set temperature.



Judgement control:
o If outdoor ambient temperature < Heat to Cool Set Temperature, unit will operate in Heat Mode or else
the unit will operate in Cool Mode.
o If current operation is Cool mode, outdoor ambient temperature > Cool to Heat Temperature, unit will
maintain Cool mode operation or else the unit will operate Heat mode.
o If current operation is Heat mode, outdoor ambient temperature >Heat to Cool Temperature, unit will
maintain Heat mode operation or else the unit will operate Cool mode.
o Every 60 minutes the outdoor ambient temperature is judged.
o When Auto + Tank mode is selected, operation mode switching is judged by both outdoor ambient
temperature and indoor air temperature.

14.1.8 Auto Cooling Mode Operation Limit

Compressor
ON
19°C
16°C
Compressor
OFF
Outdoor Ambient
Temperature




Auto Mode Cooling Only operation will start once the outdoor ambient temperature reaches 19°C and
compressor will continue to run until the outdoor ambient temperature drops to 16°C.
Due to this limitation,
If Heat to Cool temperature is set lower than 19°C, the compressor will not operates until the outdoor
ambient temperature reaches 19°C or higher.

14.1.9 Tank Mode Operation




3 ways valve direction
o 3 ways valve switch to tank side during Tank Thermo ON condition. Switch 3 ways valve to room side when
tank achieve Tank Thermo OFF temperature.
Tank Thermo ON/OFF Characteristic
Tank Thermo OFF

o

Case 1: Internal Tank Heater is select and Tank Heater ON
Tank temperature > Tank Set Temperature continuously for 15 seconds.
Water outlet >75°C

o
o

--- Page 189 ---


Case 2: Tank Heater OFF OR External Heater is select
When heat pump OFF due to water thermos & Tank temperature > Tank water set temperature for
continuously 20 seconds. OR
o Tank temperature > Tank set temperature + 1°C for continuously 20 seconds.

o

o

Tank Thermo ON

Case 1: Tank Heater ON (Internal Tank Heater)
Tank temperature < Tank set temperature + R/C (Tank re-heat temperature)

o

Case 2: Tank Heater OFF (Internal Tank Heater)
Tank temperature < Tank water set temperature + R/C (Tank re-heat temperature)

o

* When tank thermo ON, water pump will ON for 3 minutes then only heat pump turn ON.
* Tank water set temperature = tank set temperature or 65°C whichever lower.



2 ways valve close
Heat pump Thermostat Characteristic
o Heat pump Water Outlet set temperature is set to below table:
Outdoor ambient temperature

Heat pump water outlet temperature

< -20°C

57°C

> -20°C

65°C

> -10°C

75°C

Characteristic of heat pump thermos ON/OFF under tank mode condition:
Water Outlet Thermo Condition
 Heat pump thermos OFF temperature:
1 Heat pump thermo OFF temperature = Target Water outlet temperature + (2°C)
2 Water outlet temperature > heat pump thermo OFF temperature for continuously 3 minutes, heat pump OFF
but water pump continue ON.


Heat pump thermo ON temperature
1 Heat pump thermo ON temperature = water inlet during thermo OFF time + [-3°C]
2 When water outlet temperature < heat pump thermo ON temperature, heat pump ON.

Water inlet thermo protection condition
 Heat pump thermo OFF temperature:
1 Water inlet temperature > [75°C/55°C] for continuously 30 seconds, heat pump OFF, water pump continue
ON.


Heat pump thermo ON temperature:
1 Heat pump thermos ON temp = water inlet temperature < [75°C/55°C].
Outdoor ambient temperature

Water inlet temperature

< -10°C

55°C

> -10°C

75°C

Thermo ON/OFF for Heat Pump in Tank Operation:
When tank temperature achieve heat pump OFF condition, refer below condition:
Conditon 1 : Tank Heater ON (Internal Tank Heater)
 Heat pump will turn OFF, water pump continue ON and room heater will continue ON if tank temperature below
tank heater thermo ON condition. 3 ways valve will only switch to room side after tank temperature reach tank
heater thermo OFF condition.

--- Page 190 ---
Conditon 2 : Tank Heater OFF (Internal Tank Heater)
 If tank temperature achieve tank thermo OFF, heat pump turn OFF, water pump turn OFF, room heater OFF and
3 ways valve switch to room side.
When tank temperature achieve heat pump ON condition, water pump ON, heat pump ON and room heater turn OFF.
Heat pump OFF condition at Tank Mode
Tank temperature > tank water set temperature continuously for 20 seconds after heat pump thermos OFF
due to water thermo. (Heat pump turn OFF but water pump continue ON and room heater turn ON to achieve
tank set temperature) OR
o Tank temperature > tank set temperature + [1°C] for continuously 20 seconds. (Heat pump OFF, water pump
OFF, room heater OFF and 3 ways valve switch to room side)

o

Heat pump ON condition at Tank Mode
Tank temperature < tank water set temperature + R/C setting (Tank re-heat temp) (Water pump turn ON OR
continue ON, heat pump ON and 3 ways valve switch to tank side or maintain at tank side)

o

Tank heater control
 Internal heater only operates to tank side if Tank heater ON and backup heater is enable.
Internal heater turn ON condition:
 Tank temperature < tank set temperature AND
 Heat pump thermos OFF AND
 20 minutes from previous heater off AND
 Internal tank heater selects USE from control panel.
Internal heater turn OFF condition:
 Tank temperature > tank set temperature for continuously 15 seconds OR
 Heat pump thermo ON OR
 Mode change or operation is off by control panel.

14.1.10 Heat + Tank Mode Operation
1

3 ways valve control:
o 3 ways valve switch to room side during room heat-up interval and switch to tank side during tank heatup interval. Both modes will switch alternately. Tank mode is the initial running mode of Heat + Tank
mode.

2

Heat pump operation control:
o During room heat-up interval
 Follow normal heating operation.
Switching to tank side depends to below cases:
Case 1:
[Previous switch from tank interval to room interval due to thermo OFF]
 Switch to tank heat-up interval when Tank temp < Tank thermos ON temp (Room heat-up interval
ends)
Case 2:
[If heating operation at room side is less than 30 minutes and switch to tank side 3 times
consecutively]
 Maintain at room heat-up interval regardless of the tank temperature. Switch to tank heat-up interval
only when (Room Interval Timer is complete OR Room heat pump thermo OFF) AND Tank
temperature < Tank thermo ON temperature.
Case 3:
[Previous switch from tank interval to room interval due to tank interval timer is complete]
 Maintain at room heat-up interval regardless of the tank temperature. Switch to tank heat-up interval
only when (Room Interval Timer is complete OR Room heat pump thermo OFF) AND tank
temperature < Tank thermo ON temperature.
o During Tank heat-up interval
 Tank interval is the first mode running when heat + tank mode is select.
 Switch to room interval only when tank achieve tank thermo OFF OR tank heat-up interval timer is
complete.
 Heat pump operates according to normal tank mode operation.

--- Page 191 ---
3

Room heater control:
o During heating heat-up interval
 Follow normal room heater control operation.

4

Tank heater control:
o During heating heat-up interval
 Internal tank heater will not function under heating heat-up interval.
o During tank heat-up interval
 Internal tank heater will turn ON after heat pump thermo off to boil tank temperature to tank set
temperature.
o 2 ways valve control is open
o Indoor water pump control:
 Indoor water pump always turn ON if room heat pump thermo ON OR Tank thermo ON.

14.1.11 Cool + Tank Mode Operation
1

3 ways valve control:
o 3 ways valve switch to room side during room cooling interval and switch to tank side during tank heatup interval. Both mode will switch alternately. Tank mode is the initial mode of cool + tank mode.

2

Heat pump operation control:
o During room heat-up interval
 Follow normal cooling operation.
Switching to tank side depends to below cases:
Case 1:
[Previous switch from tank interval to room interval due to thermo OFF]
 Switch to tank heat-up interval when Tank temperature < Tank Thermo ON temperature (Room
interval will ends)
Case 2:
[If cooling operation at room side is less than 30 minutes and switch to tank side for 3 times
consecutively]
 Maintain at room cooling interval regardless of the tank temperature. Switch to tank heat-up interval
only when (Room Interval Timer is complete OR Room heat pump thermo OFF) AND Tank
temperature < Tank thermo ON temperature.
Case 3:
[Previous switch from tank interval to room interval is due to tank interval timer is complete]
 Maintain at room cooling interval regardless of the tank temperature. Switch to tank heat-up interval
only when (Room Interval Timer is complete OR Room heat pump thermo OFF) AND tank
temperature < Tank thermo ON temperature.
*Tank Thermo ON temperature:
Internal Tank Heater select USE
Others

o

<Tank set temperature + R/C setting (Tank re-heat temperature)
<Tank water set temperature + R/C setting (Tank re-heat temperature)

During Tank heat-up interval
 Tank interval is the first mode running when the cool + tank mode is select.
 Switch to room interval only when tank achieve tank thermo OFF OR tank heat-up interval timer is
complete.
 Heat pump operates according to normal tank mode operation.

3

Room heater control:
o During room cooling interval
 Room heater is OFF and not operates.

4

Tank heater control:
o During room cooling interval
 Internal tank heater will not function under room cooling interval.
o During tank heat-up interval
 Internal tank heater will turn ON after heat pump thermos off to boil tank temperature to tank set
temperature.

--- Page 192 ---
5

2 ways valve is close.

6

Indoor water pump control:
o Indoor water pump always turn ON if room heat pump thermo ON OR Tank thermo ON.

14.1.12 Outdoor Fan Motor Operation
Outdoor fan motor is adjusted according to operation condition. It starts when compressor starts operation and it
stops 30 seconds after compressor stops operation.
ON

Compressor:

ON
OFF

ON
Outdoor Fan:

Fan Speed

ON
OFF

30 sec

14.2 Water Pump
The system will start checking on the water flow level after operation start for 70 seconds. If water pressure level is
detected low or high continuously 300 seconds, the water pump and the compressor will be OFF permanently and
OFF/ON control panel LED will blink (H21 error occurs).

14.2.1 Water Pump Control (For WH-ADC0509L3E5, WH-ADC0509L6E5,
WH-ADC0509L3E5AN, WH-ADC0509L6E5AN, WH-ADC0509L3E5UK only)









Once the indoor unit is ON, the water pump will be ON immediately and no error judgment for 70 seconds.
However, during this 70 seconds operation, if there is any abnormality cause at outdoor or malfunction, the
compressor should be OFF immediately and restart delay after 3 minutes.
The system will start checking on the water flow level after operation start for 70 seconds. If water flow level is
detected low continuously 60 seconds, the water pump and the compressor will be OFF permanently and
OFF/ON control panel LED will blink (H62 error occurs).
When error happens, the power has to be reset to clear the error.
If there is no error indication, the water pump shall be continuously running.
The water pump will remain ON when compressor OFF due to thermostat OFF setting is reached.
Water pump will OFF when room thermo OR tank thermo OR buffer tank thermo OFF.
Water pump will delay 15 seconds to turn OFF when request to OFF except during anti-freeze deice activate or
air purge mode.
Pump ON Request
YES
ON Water Pump
YES
Pump ON Time
≥ 70 Sec?

NO

YES

NO

Water Flowrate Abnormal
> 60 Sec?

Water Pressure Abnormal
> 300 Sec?

YES

OFF Water Pump

NO

YES

H62 Error Display
at Remote Controller

OFF Water Pump

192

H21 Error Display
at Remote Controller

--- Page 193 ---
Maximum pump speed setting on remote control

Standard pump speed is automatically controlled to get the designed water temperature different between water
inlet and outlet (ΔT). Instead of setting the standard pump speed, maximum pump speed is manually adjusted by
the installer according to water circuit pressure drop.
However, the following sequences do not follow maximum pump duty setting by remote control.

Pump down mode

Air purge mode

Normal deice
1) P-Q graph for different pump HEX duty
P-Q (AIO L series)
140
130
120
110
100

Duty: 89 Hex

Pressure,P [kPa]

90
80

Max Duty: C5 Hex

70

Duty: 78 Hex

60
50
40
30
20

Min Duty: 46 Hex

10
0
0

5

10

15

20

25

30

35

40

Water Flow Rate Q[L/min]

This condition is under connecting ODU and connecting 5m
piping (inner diameter Φ25) between ODU and IDU (AIO).

14.2.2 Water Pump Control (For WH-ADC0509L3E5B only (No change for other models))









Once the indoor unit is ON, the water pump will be ON immediately and no error judgment for 30 seconds.
However, during this 30 seconds operation, if there is any abnormality cause at outdoor or malfunction, the
compressor should be OFF immediately and restart delay after 3 minutes.
The system will start checking on the water flow level after operation start for 30 seconds. If water flow level is
detected low continuously 140 seconds, the water pump and the compressor will be OFF permanently and
OFF/ON control panel LED will blink (H62 error occurs).
When error happens, the power has to be reset to clear the error.
If there is no error indication, the water pump shall be continuously running.
The water pump will remain ON when compressor OFF due to thermostat OFF setting is reached.
Water pump will OFF when room thermo OR tank thermo OR buffer tank thermo OFF.
Water pump will delay 30 seconds to turn OFF when request to OFF except during anti-freeze deice activate or
air purge mode.

--- Page 194 ---
Pump ON Request
YES
ON Water Pump
YES
NO

Pump ON Time
≥ 30 Sec?
YES

Water Flowrate Abnormal
> 140 Sec?

NO

Water Pressure Abnormal
> 300 Sec?

YES

YES

H62 Error Display
at Remote Controller

OFF Water Pump

NO

H21 Error Display
at Remote Controller

OFF Water Pump

Maximum pump speed setting on remote control
Standard pump speed is automatically controlled to get the designed water temperature different between water
inlet and outlet (ΔT). Instead of setting the standard pump speed, maximum pump speed is manually adjusted by
the installer according to water circuit pressure drop.



However, the following sequences do not follow maximum pump duty setting by remote control.

Pump down mode

Air purge mode

Normal deice
1) P-Q graph for different pump HEX duty
P-Q (AIO L series)
140
130
120
110
100

Duty: 89 Hex

Pressure,P [kPa]

90
80

Max Duty: C5 Hex

70

Duty: 78 Hex

60
50
40
30
20

Min Duty: 46 Hex

10
0
0

5

10

15

20

25

30

35

Water Flow Rate Q[L/min]

This condition is under connecting ODU and connecting 5m
piping (inner diameter Φ25) between ODU and IDU (AIO).
194

40

--- Page 195 ---
14.2.3 Zone Water Pump Control
Purpose:
 Water pump install at each zone to circulate the water inside each zone during buffer tank connection selected
“YES” or 2 zone systems.

Content:
 AC type water pump install for this zone water pump control. When optional PCB connected, 230V output will
drive this zone pump.
 There are three pump can be connected through Optional PCB. (Zone 1 Pump, Zone 2 Pump, & Pool Pump)
* Zone 1 pump [P1] use to circulate zone 1 water circuit & Zone 1 mixing valve [M1] adjust to control the Zone 1
target water temperature.
* Zone 2 pump [P2] use to circulate zone 2 water circuit & Zone 2 mixing valve [M2] adjust to control the Zone 2
target water temperature.
* When Pool Function select as Zone 2 circuit, [P2] use to circulate water to heat exchanger which use to transfer
heat to pool water.
* Pool pump [P3] circulates the pool water through the heat exchanger to get warm water.


Zone 1 and Zone 2 water pump start condition:
o Zone room request ON
(eg. Zone 1 thermo ON, only zone 1 pump will turn ON)



Zone 1 and Zone 2 water pump stop condition:
o Zone room request OFF



Pool water pump start condition:
o Pool Zone request ON AND
o Pool function is selected



Pool water pump stop condition
o Pool zone: Zone room request OFF OR
o Pool function is cancel
* Zone 1 & Zone 2 water pump need to turn OFF when antifreeze deice pump stop control activate and turn
ON back after the antifreeze deice pump stop control end under setting of "NO" buffer tank connection.

Zone Pump Prohibit ON control:
 Start condition:
Zone 1 water temperature ≥ 80°C continuously for 5 minutes
*stop zone water pump operates if the zone water fulfilled.
 Cancel condition:
After 30 minutes from start condition fulfilled.
*zone water pump operates according to normal condition.

--- Page 196 ---
Zone Pump Control during Anti-Freeze
Zone pump control during Zone Anti-Freeze Control:
 When Zone Anti-Freeze Flag=1, Zone Pump Turn ON.
 When Zone Anti-Freeze Flag=0, Zone Pump Turn OFF.
Zone pump control during Indoor Anti-Freeze Control:
 Zone pump only ON/OFF if the Extension PCB connected and Buffer Tank select "NO" condition
When Indoor Anti-Freeze flag=1, Zone Pump Turn ON
When Indoor Anti-Freeze flag=0, Zone Pump Turn OFF
* Pool Water Pump will not affected by both Indoor anti-freeze control or zone anti-freeze control.

14.2.4 Water Pump Speed Feedback Error






Basically pump speed feedback is control by micon.
When pump speed is below low limit or over high limit for a few seconds, micon detect pump error and system is
stopped.
Error detection conditions:
o Detect abnormal water pump speed for continuous 10 secs.
o Current pump speed < 700 rpm or
o Current pump speed > 6000 rpm for 10 seconds.
Control contents:
o When error occurs, water pump, heating and heater is stopped for 30 seconds then restart again (Retry
control).
o When micon detect error again, system is stopped and error code [H20] is displayed at control panel.

--- Page 197 ---
14.3 Indoor Unit Safety
14.3.1 Indoor Unit Safety Control
1
2

3

When water pump is ON, the system will start checking flow switch status (ON/OFF).
If the flow switch ON for 10 seconds, the system will check on the water inlet temperature for 10 seconds.
If the water inlet temperature not exceeds 80°C, the water pump shall be continuously running with normal
mode.
If the water inlet temperature exceeds 80°C for continuously 10 seconds, the water pump will be OFF
immediately.
After water pump OFF for more than 10 minutes, it will be ON back and the indoor unit safety control
checking is restarted.

Pump ON

10s
Flow SW ON?

YES
NO

to normal mode

Water In > 80°C for 10s

YES
Pump OFF

>10 mins
YES

14.4
1

14.5

Auto Restart Control
When the power supply is cut off during the operation of Air-to-Water Heatpump, the compressor will
reoperate after power supply resumes.

Indication Panel
LED

Operation

Color

Green

Light ON

Operation ON

Light OFF

Operation OFF

Note:
 If Operation LED is blinking, there is an abnormality operation occurs.

--- Page 198 ---
14.6 Indoor Back-Up Heater Control
14.6.1 Indoor Electric Heater Control
1

Normal Heating Mode
o Heater On condition:
a. Heater switch is ON
b. After Heatpump thermo ON for [30] mins
c. After water pump operate [9] mins
d. Outdoor air temperature < Outdoor set temperature for heater
e. When water outlet temperature < Water set temperature + [-4°C]
f. [20] minutes since previous Backup heater Off
* When heatpump cannot operate due to error happens during normal operation, heater will go into
force mode automatic
* Heater need to operate during deice operation
o

2

Heater Stop Condition:
a. When outdoor set temperature > outdoor set temperature + [+2°C] for continuous 15 secs OR
b. When water out temp> water set temperature + [-2°C] for continuous 15 secs OR
c. Heater switch is Off OR
d. Heatpump thermo-off or OFF condition

Force Heater Mode
o Heater On condition:
a. After water pump operate [9] mins
b. When water outlet temperature < water set temperature + [-4°C]
c. [20] minutes since previous Backup heater Off
o

Heater Stop condition
a. Force mode off OR
b. When water outlet temperature > water set temperature + [-2°C] for continuous 15 secs

* Do not operate heater at the following situation
1 Water outlet temperature sensor, and water inlet sensor abnormal
2 Flow switch abnormal
3 Circulation pump stop condition

14.6.2 Room Heater Operation during Deice
Purpose:
 To protect the indoor Heat Exchanger from ice forming and prevent heat exchanger plate breakage.
Control content:
 This Heater protection control will activate only if the backup heater is enable at custom setup by remote
controller. Once fulfil the start condition, room heater will turn ON together (base on max heater capacity
selection) and stop together if stop condition is fulfilled.
* If the heater is request to turn ON OLP feedback will be detected.
Starting conditions:
 During normal deice operation 4~9
 Water outlet temperature < 7°C or
Water outlet 2 temperature < 7°C
Heater operates when 1 ~2 fulfilled.
Stop condition:
 When normal deice end or
 Water outlet temperature > 45°C
However, room heater keeps ON if indoor electric heater control activate.

--- Page 199 ---
14.7 Tank Heater Control
14.7.1 Internal Heater Control at Tank Mode

1
2
3
4
5
6

Internal heater turn ON condition:
Internal Heater select for Tank heater by remote controller
Tank Heater select ON by user.
Backup Heater Enable
Tank Temperature < Tank Set Temperature
Heat Pump Thermo OFF
20 minutes from previous heater off.

1
2
3

Room heater turn OFF condition:
Tank Temperature > Tank Set Temperature + [0°C] for continuous 15 seconds. OR
Heat Pump Thermo ON OR
Mode Change or Operation OFF by remote controller OR



* Backup Heater Turn ON/OFF all together according to the selected heater capacity.
Tank
Temp.
65°C

Tank Water Set Temp

Heat Pump
Operation

Backup
Heater
Operation

Time

--- Page 200 ---
14.8




Base Pan Heater Control (Optional)

To enable the base pan heater function, control panel initial setting has to be manually adjusted by activating
Base Pan Heater menu.
There are 2 optional start condition can be selected, Type A or Type B.
Control details:
1 Type A: (Default Auto Mode)
Start conditions:
o When outdoor air temperature ≤ 3°C during heating and deice operation is ON.
Control contents:
o Base pan heater is ON during deice operation and continues ON for 10 minutes after deice operation
ends.
Cancel condition:
o When outdoor temperature > 6°C after deice end or
o When operation is not at heating mode or
o Base pan heater ON timer count is completed.
2

Type B: (ON Mode)
Start conditions:
o When outdoor air temperature is ≤ 5°C and operates in heating mode, base pan heater is ON.
Cancel conditions:
o When outdoor air temperature is > 7°C or
o When operation is not at heating mode.

14.9 Force Heater Mode
Purpose of Force Heater Mode:
 As a backup heat source when heat pump error. Force heater Mode only control backup heater to heat up the
room circuit, and turn ON back up heater or booster heater to boil up tank water base on the tank heater
selection (internal or external).
Force Heater Control start condition:
 Force heater request ON by user during error OR auto turn ON by remote controller during error AND
(Force Heater mode can be operate regardless of mode selection, remocon will send the latest mode selection
force bit by bit to indoor. Indoor will judge to turn ON heater to room side if it is heat mode selected, and turn ON
heater to heat tank water base on tank heater selection)
 During Error Happen (exclude the error list below)
Error List which not allow Force Heater operation
H12

Capacity Mismatch

H76

Indoor-Remote Controller Communication Error

H20

Abnormal Water Pump

H95

Abnormal Voltage Connection

H62

Abnormal Water Flow

F37

Abnormal Water Inlet sensor

H70

Abnormal Back-up Heater OLP

H45

Abnormal Water Outlet sensor

H74

PCB Communication Error

[ When tank mode operate with external heater selected & tank heater select ON ]
H73

Abnormal tank sensor

H91

Abnormal tank heater OLP

Force Heater Control Stop Condition:
 Force Heater request OFF OR
 Operation OFF request OR
 Power reset OR
 Error of above list happens during force heater operation.
Control contents:
 After fulfill start condition, indoor will operate the force heater operation according to below mode condition
Heat mode Only: Turn ON backup heater to achieve room heat pump target water temperature.
Heat + Tank mode: Turn ON backup heater to heat up room OR Turn ON Heater to Boil up tank water.
Cool mode Only: Water pump and backup heater will OFF in force heater mode.
Cool + Tank mode: Operate pump and internal Heater OR External heater to Boil up tank water.
Tank mode Only: Operate pump and internal Heater OR External heater to Boil up tank water.

--- Page 201 ---
* For heat mode condition, backup heater will only turn ON if the backup heater is enable regardless of Room
Heater Selection.
* For tank mode condition, If internal heater selected backup heater will turn ON to boil up tank water.
If external heater selected , booster heater will turn ON to boil up tank water regardless of tank heater selection.
Room Side: (Heat Mode):
 When force heater mode start condition fulfilled, turn ON water pump and turn ON backup heater follow below
control.
 Operate the 3 ways valve at room side only and turn ON 2 ways valve as heat mode operation.
 Turn ON the zone pump and mixing valve if system select 2 zone system or Buffer tank connect YES, control
according to normal zone pump and mixing valve control.
 When Force heater mode stop condition fulfilled, turn OFF heater as below condition and turn OFF water pump
after pump delay time.
Backup Heater On Condition:
 When Force Heater Control start condition fulfill AND
 After water pump operate 2 minutes AND
 When water outlet temperature < water set temperature + [-4°C] AND
 20 minutes since previous Backup heater Off AND
 Backup Heater Enable
Backup Heater Stop condition:
 Force mode off OR
 Operation off OR
 When water outlet temperature > water set temperature + [-2°C] for continuous 15 secs OR
* ON/OFF follow normal heater sequence.
Tank side (Tank mode):
 When tank mode select and force heater bit received, turn ON backup heater (INTERNAL) or Booster Heater
(External) depend on the tank heater selection.
 If tank heater selection is INTERNAL, follow normal thermo judgement to switch 3 ways valve to tank side and
room side.
 If tank heater selection is EXTERNAL, only turn ON booster heater according to tank thermo.
Tank Heater selection is INTERNAL:
Backup Heater ON Condition:
 After water pump operate 2 mins AND
 When tank temperature < Tank set temperature - [Remocon Set Tank Re-heat Temp] AND
 20 minutes since previous Backup heater OFF AND
 Backup Heater Enable
Backup Heater OFF condition:
 Force mode off OR
 When tank temperature > Tank set temperature for continuous 15 secs OR
 Tank Operation OFF
Tank Heater selection is EXTERNAL:
Booster Heater ON condition:
 Force Heater mode ON AND
 Tank temperature < tank set temperature + [Remocon Set Tank Re-heat Temp] - 1°C, AND
 20 minutes since previous heater off.
Booster Heater OFF condition:
 Tank temperature > tank set temperature for continuous 15 secs.
 Force mode OFF
 Tank Mode Operation OFF
(During tank interval or tank mode condition, water pump and 3 ways valve will OFF)

--- Page 202 ---
14.10 Powerful Operation
Powerful mode is use to increase the capacity of heat pump to achieve higher target temperature. Powerful mode is
applicable when heat mode is operating.
Remote control setting:
On quick menu of remote control, there is 4 options of powerful mode can be select.
- OFF
: Cancel powerful mode
- 30 minutes
: Set powerful for 30 minutes
- 60 minutes
: Set powerful for 60 minutes
- 90 minutes
: Set powerful for 90 minutes
Control contents:
During the time set by remote control, powerful will activate according to 2 shift up controls. However, this function is
applicable only for heating. Remote control will transmit the signal to indoor unit once this function is select then
transmit OFF signal to indoor when the timer is complete. Indoor will transmit signal to outdoor for frequency control.
Indoor setting temperature shift



If system is standard system (Optional PCB is not connected)
o Target water temperature will shift up to Wlo or Whi whichever higher.
If system is extension system (Optional PCB is connected)
o Target water Zone 1 and Zone 2 temperature will shift up to Wlo or Whi whichever higher.
* If “Direct Type” temperature control is select, this powerful shift up setting is not effective.



Start condition
o Powerful function is select by remote control.



End Condition
o OFF/ON button is pressed.
o Powerful function is OFF by remote control.

14.11 Quiet Operation
Quiet mode is use to reduce the noise of outdoor unit by reducing the frequency or fan speed.
Quiet level
There are 3 level (Level 1, Level 2, Level 3) to set by quick menu function on remote control.
Control content
Once the quiet function is select, the remote control will transmit the signal to indoor and outdoor unit.
Start condition
 Quiet mode is set on remote control.
 Quiet mode is request ON by weekly timer.
Stop condition
If any of below condition is achieve.
 OFF/ON button is pressed.
 Quiet mode is OFF by remote control.
 Quiet mode is request OFF by weekly timer.

--- Page 203 ---
14.12 Sterilization Mode


Purpose:
o To sterilize water tank by setting the required boiling temperature.



Remote control setting
o Days for sterilization function to start can be select.
o Time of selected day to start sterilization function.
o Boiling temperature (Internal heater is 55°C ~ 65°C)
o Maximum operation time is 5 minutes to 1 hour.



Start condition
o Tank connection set to “YES” by remote control
o Sterilization function selects “YES”.
o Sterilization signal received from remote controller by timer.
o Tank mode request ON.



Stop condition
o When boiling timer is completed. Boiling timer (Remote control set maximum operation time) start counting
once tank achieve boiling set temperature OR
o After 8 hours of operation since sterilization start.
o Tank mode request OFF.



Control content:
o During sterilization function activation time, target tank set temperature will internally change to boiling set
temperature.
o During sterilization activates, heat pump and heater (external or internal) will operate as normal tank mode to
achieve the boiling set temperature.
o Sterilization operation will end when stop condition is fulfill.
o After sterilization is complete, tank set temperature will resume to normal operation.

* Tank temperature may not achieve boiling set temperature if tank heater is select OFF OR external compressor
switch.

14.13 Outdoor Ambient Thermo OFF Control


Purpose:
o Stop provides heating to room side during high outdoor ambient condition.

OFF
Outdoor thermo off set
temperature + 3°C
Outdoor thermo off set temperature +
1°C

ON



Control content:
o Heating outdoor ambient thermos OFF control only applicable when heat pump operate in heat mode. (This
control will not activate when running in tank side)
o Heat pump and water pump will turn OFF when outdoor ambient is higher than outdoor thermo OFF set
temperature.
o Heat pump thermos ON when outdoor ambient < outdoor thermos OFF set temperature + 1°C.

--- Page 204 ---
14.14 Alternative Outdoor Ambient Sensor Control
Purpose of the Alternative Outdoor Ambient Sensor:
 It is some possibility that the air to water heat pump unit will install at a location where the original ambient sensor
is expose to direct sunlight. Therefore, another optional ambient sensor can be connect to indoor PCB and locate
at new and better reading location to improve the heat pump performance.
Control Detail:
 Remocon can select either the extra outdoor ambient sensor is connected or not. (YES/NO)
 The alternative outdoor ambient sensor will connect to indoor unit main PCB terminal.
o

when alternative sensor select NO
 Original Outdoor temperature sensor will use for Indoor & Outdoor heat pump operation reference
sensor.
 Data communication direction : OUTDOOR send outdoor temperature reading to INDOOR.
 Error judge : OUTDOOR will judge the original outdoor sensor error (F36 display if error detect). No
judge error on alternative outdoor sensor

o

when alternative sensor select YES
 Alternative Outdoor temperature sensor will use for Indoor & Outdoor heat pump operation reference
sensor.
 Data communication direction : INDOOR send outdoor temperature reading to OUTDOOR.
 Error judge : INDOOR will judge the Extra outdoor sensor error only after operation ON request received
from remocon.
(F36 display if error detect). No judge error on original outdoor sensor.

14.15 Force DHW mode
Purpose:
When user want to use hot water now, user can press this force DWH mode under the quick menu to operate tank
only mode to boil up the tank temperature.
Remocon setting:
Force DHW function can be activate under quick menu.
Control Content:
 when press the Force DHW function during operation OFF condition:
o When receive this Force DHW bit from remocon, indoor will run tank only mode regardless of the mode
selection.
o After tank temperature achieve tank thermo off temperature, turn OFF force DHW bit and return to operation
OFF with previous mode selection.
 When press the Force DHW function during operation ON condition:
o When receive this Force DHW bit from remocon, indoor will memories the running mode and run tank only
mode regardless of the mode selection.
o After tank temperature achieve tank thermo off temperature, turn OFF force DHW bit and return to previous
memories running mode.
* when operation OFF or mode change request from remocon during force DHW mode operation, End force
DHW mode and follow the new request operation.
* Once receive force DHW mode from remocon, indoor direct start tank mode and consider tank thermo ON.
Thermo OFF only when achieve tank thermo OFF depend on the Tank System Setting.

--- Page 205 ---
14.16 SMART DHW mode
Panasonic All In One model provide the option to choose STANDARD DHW Mode or SMART DHW Mode for Tank
Heat Up according to requirement. SMART DHW mode comparatively consume lower tank heat up power but longer
re-heat time than STANDARD DHW Mode.
SMART DHW control


During SMART DHW start time 20:00 (Default Setting) to SMART DHW stop time 05:00 (Default setting)
Heat pump re-heat the tank water only when tank temperature drop below 20°C (Default setting)



Time between 05:00 to 20:00
Heat pump reheat the tank water when tank temperature as below condition

Condition 1: Tank Heater ON
Reheat when tank temperature below tank set temperature + R/C (Tank re-heat Temperature) - 3°C
Condition 2: Tank Heater OFF
Reheat when tank temperature below Tank set temperature or 51°C (Whichever lower) + R/C (Tank re-heat
Temperature) -3°C
* SMART DHW start time, stop time and SMART ON Temperature can change in CUSTOM menu.

14.17 Anti Freeze Control



Anti freeze protection control menu can be set YES or NO by control panel.
In heatpump system, there are 3 types of anti freeze control:
1. Expansion tank anti-freeze control
 Expansion tank anti freeze heater ON condition:
o Outdoor ambient temp. < 3°C
 Expansion tank anti freeze heater OFF condition:
o Outdoor ambient temp. > 4°C
2. Water pump circulation anti freeze control
 Water pump turns ON when ALL below conditions are fulfilled:
o Heatpump OFF (stand by) OR error occurs.
o Water flowing flag is ON.
o Water flow switch is not abnormal.
o Outdoor ambient temp. < 3°C OR outdoor ambient temp. sensor is abnormal.
o Water inlet/outlet temp. < 6°C.
o After 5 minutes from previous water pump OFF.
 Water pump turn OFF when ANY of below conditions is fulfilled:
o Outdoor ambient temperature ≥ 4°C.
o During -5°C < outdoor ambient temp. < 4°C
 After water pump ON for 4 minutes, and water inlet temp. ≥ 8°C.
 Else, shift to back up heater anti freeze control.
o During outdoor ambient temp. < -5°C
 After water pump ON for 4 minutes, and water inlet/outlet ≥ 20°C.
 Else, shift to back up heater anti freeze control.
 However, if flow switch is abnormal (H62), then water pump circulation anti freeze control will not activate.
3. Back up heater anti freeze control:
 Back up heater turn ON when ALL below conditions is fulfilled:
o Water inlet/outlet temp. < 6°C.
o Water pump circulation anti freeze control activated and water pump ON for 4 minutes.
 Back up heater turns OFF when ANY of below conditions is fulfilled:
o When OD temp < -5°C, Water inlet/outlet temp. > 28°C.
o When OD temp >= -5°C, Water inlet/outlet temp. > 13°C.
 However, if back up heater is abnormal (H70) then back up heater anti freeze control will not activate.

--- Page 206 ---
14.17.1 Zone Anti-Freeze Control


If buffer tank selection is “NO” and Anti- Freeze function select “NO” from remote control, this control cannot
activate.

Start condition:
 After [5] min from previous Zone pump off. AND
 Outdoor air temp < [3] °C OR Outdoor sensor is abnormal. AND
 Zone water temperature < [6]˚C OR Zone Sensor Short or Open
Cancel condition:
 After water Zone pump ON [4] min AND
 Outdoor air temp ≥ [4]°C OR
 During -5 °C ≤ Outdoor air temp < [4] °C OR
Zone water temperature sensor > [8] °C
 During Outdoor air temp < [-5] °C
Zone water temperature sensor > [20] °C
*However, Zone water temperature sensor is Open or Short, Condition C and D is ignored.

14.18 Solar Operation (Optional)
14.18.1 Solar Operation:
Solar function:
 This function allow user to control the solar pump to operate depend on the solar sensor reading compare to the
tank installed. Solar pump will circulate the hot water energy store at solar panel to heat up the DHW Tank or
Buffer Tank.
Solar Connection Diagram:




Solar function can only enable when the Optional PCB is connected.
Few part as below need to install to control the solar operation:
o Solar Panel
o Solar Pump
o Solar Panel Sensor
o Tank Sensor (Buffer tank sensor OR DHW Tank sensor depend on the connection direction)
* During Solar Connection to the system, installer need to alert on the high water temperature may flow to the
zone circuit or DHW piping circuit. Therefore pipe which withstand higher water temperature need to be
installed.

--- Page 207 ---


Solar remote control setting
1 Solar Setting can only be set when the optional PCB connection is select "YES"
2 By remote controller, Setting as below list can be set for solar function operation (Installer Menu)
o Solar Function ("YES" or "NO)
o Tank Connection Direction ("DHW TANK" or "BUFFER TANK")
o Delta T turns ON: Difference temperature setting between solar panel sensor and Tank to turn on solar
pump. (Range :5 ~ 15°C)
o Delta T turns OFF: Difference temperature setting between solar panel thermistor and Tank to turn off
solar pump. (Range :2 ~ 10°C)
o Outdoor temp for Anti-Freeze : Outdoor temp to start Anti-Freeze control for solar circuit. (Range : -20 ~
10°C)
o Tank Temperature HI Limit Set (Range : 70 ~ 90°C)

14.18.2 Solar Operation Control


Solar function can only be activate if the solar function selection “YES” from remote control. To achieve hot water
from solar panel, indoor need to control the solar pump and circulate hot water from solar panel.
Under normal case:
o Solar pump start condition:
 Solar panel temperature > Delta T turn on setting temp (R/C) + Tank temperature (depend on selection,
DHW or Buffer) AND
 Tank temperature (DHW or Buffer) < Solar HI Limit Temp (R/C) AND
 Operation ON with heat mode (apply to solar connect to "Buffer Tank" case)
* Condition c) ignore if the solar system is connect to DHW tank (control active under operation OFF time for
Tank connection case)
o

o
o

Solar pump stop condition:
 Solar panel temperature < Delta T turn OFF setting temp (R/C) + Tank temperature (depend on selection,
DHW or Buffer) OR
 Tank hot water temp >= Solar HI Limit Temp (R/C) + [2]°C
Under solar Anti-freeze protection control:
Solar pump start condition:
 Outdoor temp < Outdoor temp setting for Anti-Freeze (R/C)
Solar pump stop condition:
 Outdoor temp > Outdoor temp setting for Anti-Freeze + [2]°C

**However, During Cool mode this function cannot activate if Tank selection is “Buffer Tank".
**Solar pump can operate even if Heat pump is under error stop.


Solar operation during error:
o During Tank sensor (DHW or Buffer depend on selection) abnormal, Solar operation will not able to function.
o During Solar Panel sensor detect OPEN (not include SHORT), Solar operation will not able to function too.

--- Page 208 ---
14.19 Boiler Bivalent Control






Boiler is an additional or alternative heat source to heat up the room when necessary.
Purpose of this control is to turn ON and turn OFF the Boiler output signal when boiler heating capacity needed in
the system.
Boiler is possible to connect to DHW Tank and Buffer Tank depends on the installer.
Boiler operation parameter need to be set on Boiler itself, indoor do not control the boiler operation direction and
operation.
There are Alternative mode, Parallel mode, & Advance Parallel mode available to select by installer to fit to the
total system.

Bivalent control selection by remote controller
Remote control setting value:
1 Outdoor Ambient Set = (Range: -15°C ~ 15°C)


Alternative Mode
o Only one heat source operates at one time, either heat pump or boiler depends on condition.
Control detail:
During Operation ON at Heat mode or Tank mode or Heat + Tank Mode
o Boiler signal turn ON and heat pump and water pump turn OFF when:
 Outdoor ambient < Outdoor Ambient Set AND
 Boiler prohibit flag = 0

** However indoor water pump can operate when Anti-freeze control condition fulfilled.
o



Boiler signal turn OFF and heat pump and water pump turn ON when:
 Outdoor ambient > Outdoor Ambient Set + [2°C] OR
 Boiler prohibit flag = 1

Parallel Mode
o Parallel mode allows heat pump and boiler ON at the same time. Boiler operates as an additional heating
capacity when low heat pump capacity at low ambient condition.
Control detail:
During operation ON at Heat mode or Tank mode or Heat + Tank mode
o Boiler signal turns ON when:
 Outdoor ambient < Outdoor Ambient Set AND
 Boiler prohibit flag = 0
o Boiler signal turns OFF when:
 Outdoor ambient > Outdoor Ambient Set + [2°C] OR
 Boiler prohibit flag = 1



Advance Parallel Mode
o Advance parallel mode allow heat pump to operate and turn ON boiler only when ambient and temperature
condition is fulfilled.
Remote control setting value:
1 Outdoor Ambient Set = (Range : -15°C ~ 15°C)
2 Selection of boiler connection direction. (Heat only, DHW only, Heat & DHW)
3 Setting data under Heat Direction
o Start Temperature
| START_TEMP |
o Start Delay Timer
| START_TIMER |
o Stop Temperature
| STOP_TEMP |
o Stop Delay Timer
| STOP_TIMER |
4 Setting data under DHW Direction
o Delay Timer
| DELAY_TIMER |

--- Page 209 ---
Control detail:
During operation ON at Heat Mode
o Boiler signal turns ON when
 Outdoor ambient < Outdoor Ambient Set AND
 Buffer tank temperature < Target Buffer Tank Temperature + [START_TEMP] for [START_TIMER]
AND
 Heat pump operate at room side AND
 Connection of Boiler to Heating Select "YES" From installer menu AND
 Buffer Tank connection select "YES" AND
 Boiler prohibit flag = 0
o Boiler signal turns OFF when
 Outdoor ambient > Outdoor Ambient Set + [-2°C] OR
 Buffer Tank temperature > Target Buffer Tank temperature + [STOP_TEMP] for [STOP_TIMER] OR
 Heat pump not at room side. OR]
 Boiler prohibit flag = 1
During operation ON at Tank Mode
o Boiler signal turns ON when
 Outdoor ambient < Outdoor Ambient Set AND
 Heat pump operate at tank side for continuous | DELAY_TIMER | AND
 Connection of Boiler to DWH Tank select "YES" from installer menu. AND
 Boiler prohibit flag = 0
o Boiler signal turns OFF when
 Outdoor ambient > Outdoor Ambient Set + [2°C] OR
 Heat pump not operates at tank side. OR
 Boiler prohibit flag = 1
Boiler prohibit flag control
Purpose:
o For product safety. Boiler signal is OFF when water temperature is too high.
Start condition:
o Water outlet ≥ 85°C continues for 5 minutes.
o Water inlet ≥ 85°C continues for 5 minutes.
o Zone1 water temp ≥ 75°C continues for 5 minutes.
o Zone2 water temp ≥ 75°C continues for 5 minutes.
Contents:
 After start condition fulfilled, set boiler prohibit flag = 1
Cancel condition:
o After 30 minutes from start condition fulfilled.
Contents:
 Set boiler prohibit flag = 0

--- Page 210 ---
14.20 External Room Thermostat Control (Optional)
Purpose:
1 Better room temperature control to fulfill different temperature request by external room thermostat.
Recommended external room thermostat:
Maker

Characteristic

Siemen (REV200)

Touch panel

Siemen (RAA20)

Analog

Connection of external room thermostat:
Wire Connection and thermo characteristic of Siemen REV200:
L/L1 (H)

Heat Thermo

L/L2 (C)

Cool Thermo

Set Temp < Actual Temp

Setting

Open Circuit

OFF

Short Circuit

ON

Set Temp > Actual Temp

Short Circuit

ON

Open Circuit

OFF

Indoor Unit
9

L (label)

10

Siemen REV200

Cooling

11

L1 (label)

Heating

12

L2 (label)

9 : Terminal Board No.

Connect only heating line for heating only model. And connect both
heating and cooling line for heat + cool model.
Wire Connection and thermo characteristic of Siemen RAA20:
Setting

L/Y1 (H)

Heat Thermo

L/Y2 (C)

Cool Thermo

Set Temp < Actual Temp

Open Circuit

OFF

Short Circuit

ON

Set Temp > Actual Temp

Short Circuit

ON

Open Circuit

OFF

Indoor Unit
9

L (label)

10

Siemen RAA20

Cooling

11

Y1 (label)

Heating

12

Y2 (label)

9 : Terminal Board No.

Connect only heating line for heating only model. And connect both
heating and cooling line for heat + cool model.
Control Content:
 External room thermostat control activate only when remote thermostat connection select YES by Indoor control
panel.
 When indoor running heat mode, refer thermo On/Off from heating line feedback. And when indoor running cool
mode, refer thermo On/Off from cooling line feedback.
 Heat pump Off immediately when receive thermo off feedback.

--- Page 211 ---
14.21 Three Ways Valve Control
Purpose:
- 3 ways valve is used to change flow direction of hot water from heat pump between heating side and tank side.
Control contents:
1 3 ways valve switch Off:
o During 3 ways valve switch Off time, the hot water will provide heat capacity to heating side.
2 3 ways valve switch On:
o During 3 ways valve switch On time, the hot water will provide heat capacity to tank side.
3 Stop condition:
o During stop mode, 3 ways valve will be in switch off position.

Spring Return 2 point

SPDT 3 wire

NC

Indoor Unit
L

1

1

1

L

M

3 N1

AC230V
N1 3

5 N2

COM

L

3 N1
5 N2

Open
Close

M

N2 5

NO

1

L

M

3 N1

6: Terminal Board No.

5 N2

* During pump down and force mode, fix 3 ways valve in close condition.
* Recommended Parts : SFA 21/18 (Siemens)

14.22 Two Ways Valve Control
Functionality of 2 ways valve:
 Use to allow hot water to floor heating panel or block cold water to floor heating panel.
Control contents:
1 When indoor running in heat mode, OPEN the 2 ways valve.
2 When indoor running in cool mode, CLOSE the 2 ways valve.
3 Stop condition:
a. During stop mode, fix 2 ways valve in close condition.

Spring Return 2 point

SPDT 3 wire

NC

Indoor Unit
L

1

1 L

1 L

M

3 N1

AC230V
N1 3

5 N2

3 N1
5 N2

COM
Open
Close

N2 5

NO

1 L

M

3 N1
5 N2

* During pump down mode, fix 2 ways valve in close condition.
* During force mode, open 2 ways valve.
* Recommended Parts : SFA 21/18 (Siemens)

211

3: Terminal Board No.

M

--- Page 212 ---
14.23 External OFF/ON Control


Communication circuit between indoor unit and external controller is as per below.
5V

External
Controller

12V
mico
1
2

Panasonic
PCB
CN-THERMO




Maximum length of communication cable is 50 meter.
Control content:
External Control Switch

Control Panel OFF/ON

Control Panel Power LED

System Status

ON

ON

ON

ON

ON

OFF

OFF

OFF

OFF

ON

ON

OFF

OFF

OFF

OFF

OFF

Remocon Screen Display and Control Detail:

10:34am , Mon

1

2

Turned of by external switch.

REMOTE
CONTROLLER
LED

˚c

18 ˚c

CANCEL

˚c

ON
OFF
ON

REMOTE
CONTROLLER
SIGNAL
EXTERNAL
CONTROLLER
SWITCH

23 44

40 ˚c

ON
OFF

OFF

ON
OFF
ON

UNIT

OFF

When External SW connection select "YES" from remocon installer menu:
 Heating or Cooling system will operate normally if the External Switch signal is ON.
 Once the External Switch turn OFF, System Turn OFF (Heat pump, water pump, heater etc…)
 Remocon LED remain ON or OFF according to the current operation request.
 Pop up menu at remocon main screen as above screen to inform customer system stop by External Switch.
 It is possible to press cancel and return to main screen to do change of operation setting while waiting the
External Switch turn ON back.
 Remocon LED will always follow the latest changes from remocon.
 If no action on remocon for continuous 5 minutes, the pop up screen will show again on the screen.
 But once the External Switch Turn ON back, pop up screen will disappear and system can operate normally
according to the latest operation setting and request.

--- Page 213 ---
14.24 External Compressor Switch (Optional PCB)
External compressor switch port can have two purpose of control as below:
 Heat source ON/OFF function (Dip switch Pin 3 on PCB "OFF")
 Heater ON/OFF function (Dip switch Pin 3 on PCB "ON")


Heat source ON/OFF function

Purpose:
 Heat pump ON/OFF function is use to turn OFF the high power consumption device (Heat pump, & Heater) when
there is energy or electric current limitation. Other optional function still can be operate under heat pump and
heater OFF condition.
Control Detail:
 This External Compressor Switch is possible to connect to Optional PCB only.
 Once the remocon select External Compressor Switch connection "YES", & Dip Switch on PCB "OFF"
This heat pump ON/OFF function will activate
 The ON/OFF signal of this External Compressor Switch is same as External Switch.
 When the External Compressor Switch is ON:
o Heat pump system operate normally
 When the External Compressor Switch is OFF:
o Heat pump, Indoor water pump & Heater ( Booster heater & Backup Heater ) need to turn OFF
o Solar, Boiler and zone control can be operate follow normal control condition.
* pump delay OFF also included in this control
(There is NO pop up screen like External Switch when this External Compressor Switch is OFF.)


Heater ON/OFF function

Purpose:
 Heater ON/OFF function is use to turn OFF the heater (backup heater & booster heater) when there is energy or
electric current limitation. Heat pump and other optional function still can operate.
Control detail:
 This External Compressor Switch is possible to connect to Optional PCB only.
 Once the remocon select External Compressor Switch connection "YES", & Dip Switch on PCB "ON"
This heater ON/OFF function will activate
 When the External Compressor Switch is ON:
o Heat pump and heater operate normally
 When the External Compressor Switch is OFF:
o Backup heater and booster heater cannot operate even heater request is ON.
o Heat pump and option function (Solar, Boiler and zone control) can be operate follow normal control
condition.
(There is NO pop up screen like External Switch when this External Compressor Switch is OFF.)

14.25 Heat/Cool Switch (Optional PCB)
Purpose:
 User can switch the running mode from heat to cool or cool to heat through external installed Heat/Cool switch.
This kind of heat / cool switch may built in inside the field supply room remocon as well.
Control contents:
 Heat/Cool Switch can only be set when Cool Function is "enable" at custom menu setting, & Extension PCB
select "YES" & Zone 1 not set "Pool" condition.
 This heat/cool switch control will be activate only when installer set the Heat/Cool Switch "USE" through remocon.
 Once the Heat/Cool Switch Set "USE", remocon will check indoor send Signal to judge the option of mode select.
o When Heat/Cool Switch Contact Open : Remocon only can select Heat Mode, or Heat + Tank Mode, or Tank
Mode
o When Heat/Cool Switch Contact Close : Remocon only can select Cool Mode, or Cool + Tank Mode, or Tank
Mode

--- Page 214 ---



Operation ON/OFF will depend on remocon request.
When Heat Mode is running with Contact Open, user change this setting to contact close, indoor will this signal to
remocon judge and change mode to cool and send back to indoor. And it is same as from cool mode change to
heat mode.
* This switch have higher priority, remocon follow indoor send signal when control activated.
* There is no effect to the operation when the mode running is only Tank Mode.
(Weekly Timer are ignored and cannot be set during Heat / Cool Switch is "Enable" Condition.)

14.26 SG Ready Control (Optional PCB)
Purpose:
 To set ON/OFF of heat pump and target temperature by digital input of third party device if necessary in field.

Digital Input

Optional PCB

Remote Station

BIT1
BIT2
VCC

Remote control setting
For this function, following items need to be set on R/C (installer menu) –





SG control = YES or NO
Capacity up setting 1
o Heating capacity [50 ~ 150 %]
o DHW capacity [50 ~ 150 %]
o Cooling capacity [-15 ~ 0 %]
Capacity up setting 2
o Heating capacity [50 ~ 150 %]
o DHW capacity [50 ~ 150 %]
o Cooling capacity [-15 ~ 0 %]

Control contents:
If SG control on remote control = "Yes", then following control only activate by digital input.









While Digital input is " 00 " (Normal operation)
o Normal operation. Once detect '00' system will operate back to normal condition.
(All the target set temperature for heating side and DHW side will return back to previous set temperature
when digital signal change from "10' or"11" back to "00".)
While digital input is detected " 01 " (HP stop)
o Heat pump & room heater & tank heater cannot operate.
(Solar control and Boiler back up and 2 Zone control can activate.)
While digital input is detected " 10 " (Capacity 1)
o Target temperature for heating and DHW Tank is changed according to the percentage set by Remote
control setting. However, which setting temperature is change depend on system setting.
o Target temperature of cooling is change according to the adjustment value set by remocon setting.
While digital input is detected " 11 " (Capacity 2)
o Target temperature for heating and DHW Tank is changed according to the percentage set by Remote
control setting. However, which setting temperature is change depend on system setting.
o Target temperature of cooling is change according to the adjustment value set by remocon setting.
While digital input is detected " 10 " (Capacity 1)
o Setting temperature for heating and Tank is changed.
However, which setting temperature is change depend on system setting.

--- Page 215 ---
If Buffer selection is “YES”
Room side
New Target Buffer tank temperature = Current Target Buffer Tank Temperature * Remote Control setting
(" capacity 1) %
* Max Min regulation is follow Target Buffer tank temperature control specification
** No change of Target zone water temperature, only set higher buffer tank temperature.
DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW ("Capacity 1) % *
(Max regulation depend on the tank max setting limit)
If Buffer selection is “NO”
Room side
New Target Zone Water Temperature = Current Target Zone Water Temperature * Remote Control Setting
(*Capacity 1) %
(Zone 1 and Zone 2 will change according to its own target zone water temperature.)
(Max regulation depend on the temperature control type select)
DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW ("Capacity 1) %
* (Max regulation depends on the tank max setting limit)


While digital input is detected " 11 " (Capacity 2)
o Setting temperature for heating and Tank is changed.
However, which setting temperature is change depend on system setting.

If Buffer selection is “YES”
Room side
New Target Buffer tank temperature = Current Target Buffer Tank Temperature * Remote Control setting
(" capacity 2) %
* Max Min regulation is follow Target Buffer tank temperature control specification
** No change of Target zone water temperature, only set higher buffer tank temperature.
DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW ("Capacity 2) %
* (Max regulation depends on the tank max setting limit)
If Buffer selection is “NO”
Room side
New Target Zone Water Temperature = Current Target Zone Water Temperature * Remote Control Setting
(*Capacity 2) %
(Zone 1 and Zone 2 will change according to it's own target zone water temperature.)
(Max regulation depend on the temperature control type select)
DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW ("Capacity 2) %
* (Max regulation depends on the tank max setting limit)
** This function is not applicable for Cooling mode.

14.27 Demand Control (Optional PCB)
Remote control setting:
 When Optional PCB connection select 'YES", Demand Control function can select "YES" or "NO".
Purpose:
 After the demand control select YES, below control will activated.
o 0-10V Demand control
0-10V Demand control
 Demand control is use to reduce the current usage of heat pump unit by third party device.
Control start condition:
 Select “YES” at Demand control at installer menu.
 0-10V input for this electrical current control is detected.

--- Page 216 ---
Control content:
 If start condition is fulfilled, indoor will receive the voltage signal from optional PCB. Indoor will send the rate
value to outdoor unit.
 Outdoor will change the current limit according to the percentage receive from indoor unit.

14.28 Holiday Mode


Purpose:
Promotes energy saving by allowing the user to stop the system during holiday and enables the system to
resume at the preset temperature after holiday.



Control details:
o Indoor operate the unit according running mode request. Target temperature will follow holiday setting
temperature.
 If heat mode request is receive, Target Water Out Temperature will change according to holiday shift
temperature set.
[If heat is set OFF at holiday, unit, water pump and zone control will OFF]
 If tank mode request is receive, Target Tank Set Temperature will change according to the holiday tank
shift temperature set.
[If tank is set OFF at holiday, heat pump and tank heater will OFF]
o After days of holiday have been set, heat pump will stop and only resume operation at the end of holiday
countdown.



Start condition:
o Holiday timer set and the holiday timer start
* The day holiday mode was set is counted as day 1.



Stop condition:
o OFF/ON button is pressed.
o Holiday timer is reached.

14.29 Dry Concrete


Purpose
Provide heat to floor heating panel and dry the wet concrete during installation.



Setting condition:
o Dry concrete parameter can be set through remote control under system setup.
o Parameters are possible to set up to 99 days with different target set temperature



Control details:
o Dry concrete mode will be activates when select ON from service setup.
o Once start dry concrete function, remote control will send step 1 setting temperature to indoor unit.
* This temperature is set at zone temperature. If system is 2 zones, both zone target temperature is set as
same temperature.
o Heat pump will start heat mode operation to room side with received target water outlet temperature.
* Heat pump will operate according to Heat pump Target Water Temperature.
o After complete day 1 setup operation, day 2 data will be send to indoor at 12.00am on the second day.
o Each preset data will be send every day until dry concrete mode is complete, unit will turns OFF and exit dry
concrete function.
o 3 ways valve and booster heater will turn OFF and 2 ways valve will turns ON.



Cancel condition:
o Dry concrete mode is complete and OFF signal is received.
o OFF signal is received by pressing OFF/ON button.

14.30 Flow Sensor



The water flow sensor serves as an overload protector that shuts down the unit when the water level is detected
to be low.
Abnormal flow detection:
Sequence

Abnormal flow

Normal flow

Normal case

Flow rate < 7 l/min or ≥ 69 l/min

≥ 7 l/min

During status 2~6 on Anti-freeze deice

Flow rate ≥ 7 l/min

< 7 l/min

--- Page 217 ---
15. Protection Control
15.1

Protection Control for All Operations

15.1.1 Time Delay Safety Control
1

The compressor will not start for three minutes after stop of operation.

15.1.2 30 Seconds Forced Operation
1
2

Once the compressor starts operation, it will not stop its operation for 30 seconds.
However, it can be stopped using control panel at indoor unit.

15.1.3 Total Running Current Control
1
2
3

When the outdoor running current exceeds X value, the compressor frequency will decrease.
If the outdoor running current does not exceed X value, the compressor frequency will return to normal
operating frequency.
If the outdoor running current continue to increase till exceed Y value, compressor will stop, and if this occurs
3 times within 20 minutes, system will stop operation and OFF/ON control panel LED will blink (F16 error
occurs).
WH-WDG05LE5
Operation Mode

WH-WDG07LE5 / WH-WDG09LE5

X (A)

Y (A)

X (A)

Y (A)

Heating

12.0

15.0

14.8

18.0

Cooling

12.0

15.0

14.0

18.0

A. DC Peak Current Control
1 When the current to IPM exceeds set value of 26 A, compressor will stop. Compressor will restart after three
minutes.
2 If the set value exceeds again for more than 30 seconds after the compressor restarts, operation will restart
after two minutes.
3 If the set value exceeds again for within 30 seconds after the compressor restarts, operation will restart after
one minute. If this condition repeats continuously for seven times, system will stop operation and OFF/ON
control panel LED will blink (F23 error occurs).

15.1.4 Compressor Overheating Prevention Control


The compressor operating frequency is regulated in accordance to compressor tank temperature as shown in
below figures. When the compressor tank temperature exceeds 107°C, compressor will stop, and if this occurs
4 times within 30 minutes, system will stop operation and OFF/ON control panel LED will blink (F20 error occurs).

112°C

Compressor = OFF

Compressor
Frequency Reduced

97°C

110°C

108°C

Compressor
Frequency Maintain

Free
Compressor tank temperature

217

97°C

97°C

--- Page 218 ---
15.1.5 High Pressure Sensor Control





Purpose:
- To protect the system operation.
Detection period:
- After compressor on for 1 minute.
Detection conditions:
- When abnormal high voltage detection, 5 V or when open circuit detection 0V for 5 seconds continuously.
After detection:
- When abnormality is detected 4 times within 120 minutes, unit stop operation.
- OFF/ON control panel LED will blink (H64 error occurs).

15.1.6 Outside Temperature Current Control
37°C

14°C

Max.
current
value is
regulated

35°C

12°C
-128°C
-128°C
Compressor stop
Outdoor temperature

15.1.7 Pre-Heat Control



Purpose:
- For compressor protection during low outdoor ambient operation (during heating low temperature operation).
Control content:
a. Trigger Pre-Heat Control condition
o When the outdoor air temperature is below than 4°C, and discharge temperature is 6°C or below.
b. Resetting Pre-Heat Control condition
1. When the outdoor air temperature exceeds entry condition (2°C)
2. When the discharge temperature exceeds entry condition (2°C)

--- Page 219 ---
15.2

Protection Control for Heating Operation

15.2.1 Outdoor Air Temperature Control
The maximum current value is regulated when the outdoor air temperature rises above 14°C in order to avoid
compressor overloading.

15.2.2 Deice Operation
When outdoor pipe temperature and outdoor air temperature is low, deice operation start where outdoor fan motor
stop.


Deice judging condition

OD Pipe Temperature (°C)

Outdoor Unit Deice Control
10

Deice start depends:

5

1. Outdoor air sensor temp.
2. Outdoor pipe sensor temp.

0

3. Heating accumulation time
-5
-10
When Heating Time > 35 minutes
and Pipe Temperature below this
line for continuous 3 minutes

-15
-20
-25
-30
-30



-20

-10

0
Outdoor Temperature (°C)

10

20

30

Deice operation time diagram
a. Deice mode 1 control:
Free
Compressor

Free
1

2

3

5
4

6

ON

Four way valve

8

9

7
ON

OFF
ID pump

ON

OD fan

Free

ON

Free
OFF

Expansion valve

ON

Free
max 9 minutes 30 seconds
deice 1

--- Page 220 ---
15.3

Protection Control for Cooling Operation

15.3.1 Outdoor Air Temperature Control




The Compressor operating frequency is regulated in accordance to the outdoor air temperature as shown in the
diagram below.
This control will begin 1 minute after the compressor starts.
Compressor frequency will adjust base on outdoor air temperature.

25°C

10°C

Free

Limited
Frequency

23°C

8°C
Compressor
stop

15.3.2 Freeze Prevention Control 1
1
2
3

When indoor heat exchanger temperature is lower than 0°C continuously for 10 seconds, compressor will
stop operating.
Compressor will resume its operation three minutes after the indoor heat exchanger is higher than 1°C.
Indoor heat exchanger freeze prevention (H99) will memory in error history.

--- Page 221 ---
16. Servicing Guide
16.1 How to Take Out Front Plate
Hook

Open and Close Front Plate ⑱
1 Remove the 2 mounting screws of Front Plate
⑱.
2 Slide it upwards to unhook the Front Plate ⑱
hook.
3 Reverse above steps 1~2 for close it.

2X (screw)

CAUTION
Open or close the Front Plate carefully.
The heavy Front Plate may injures the fingers.

* The remote control cable is connected to the front
panel, so be careful when removing the panel.

16.2 Test Run
1

2

Before test run, make sure below items have been checked:a) Pipework are properly done.
b) Electric cable connecting work are properly done.
c) Tank Unit is filled up with water and trapped air is released.
d) Please turn on the power supply after filling the tank until full.
Switch ON the power supply of the Tank Unit. Set the Tank Unit RCCB/ELCB to “ON” condition. Then, please
refer to the Operation Instruction for operation of Remote Controller ①.
Note:
 During winter, turn on the power supply and standby the unit for at least 15 minutes before test run.
Allow sufficient time to warm up refrigerant and prevent wrong error code judgement.

3
4

For normal operation, Water Pressure reading should be in between 0.5 bar and 3 bar (0.05 MPa and 0.3 MPa)
If necessary, adjust the Water Pump ④ SPEED accordingly to obtain normal water pressure operating range. If
adjust Water Pump ④ SPEED cannot solve the problem, contact your local authorized dealer.
After test run, please clean the Magnetic Water Filter Set ⑨ and Water Filter Set
. Reinstall it after finish
cleaning.

16.3 Expansion Vessel ⑬ Pre Pressure Checking
For Space Heating / Cooling
 Expansion Vessel ⑬ with 10 L air capacity and initial pressure of 1 bar is installed in this Tank Unit.
 Total amount of water in system should be below 200 L.
(Inner volume of Tank Unit’s piping is about 5 L)
 If total amount of water is over 200 L, please add another expansion vessel. (field supply)
 Please keep the installation height difference of system water circuit within 10 m. (Extra pump may be required)

--- Page 222 ---
[Text read by OCR from the page image: check figures against the PDF]
16.4 Pump Down Procedures
Refer below steps for proper pump down procedure.

42:00am,Mon

Main menu 11 32,Mon

System check
Personal setup

Installer setup 2:52pm,Mon
System setup
> | Operation setup

[dlstart

> ~~ = Service contact oa Service setup
< a > See Installer setup
Vv o

; “Select [+] Confirm “Select [.] Confirm

Press — SW & scroll
[Screen 4] to “Pump down”

Service setup 2:52pm,Mon
Pump maximum speed

Dry concrete
Service contact <

Select [+] Confirm

| =
Service setup 3 03pm,Mon
Pump down BD)

[—] Confirm

| ~

ery
n

ee See

Pump down operation
in progress!

mvs

[OFF

|

3:04pm,Mon

[c>] Start

--- Page 223 ---
16.5 How to Adjust Pump Speed

Press
& scroll to
“Installer setup”

[Screen 4]

[Screen 5]

- Press

or

SW to select & conﬁrm maximum duty. (Range: 0x40~0xFF)

- Range (0.1~99.9)L/min

[Screen 6]

Press

or

SW to select & conﬁrm operation

NOTE:
1.

Whenever at [Screen 5], if press

SW to OFF, pump operation should be turned OFF.

2.

Whenever at [Screen 6], if press

SW to OFF, pump operation should be turned OFF.

--- Page 224 ---
[Text read by OCR from the page image: check figures against the PDF]
16.6 How to Unlock Cool Mode

Operation must be OFF

12:00am,Mon

[Olstart

Press (= + V+ €)SW's
continuously for 5secs

nN

Vv

224

[Custom menu 3:24pm,Mon]
Cool mode

Back-up heater

Reset energy monitor
Reset operation history
~5elect [4] Confirm

<

Display latest status retrieved from EEPROM

Custom menu 3 24pm,Mon
: |Cool mode

Disable

[Select [+] Confirm

a) ty

ool mode

Enable

- select [1] Confirm

Custom menu 3:25pm,Mon]

,lsbe

<<

--- Page 225 ---
16.7 EEPROM Factory Default Data Setup Procedure

Initialization

12:00am,Mon

Initializing . . .

- EEPROM default data setup is only possible during initialization process.
- Press (

,

,

,

) simultaneously for 5secs continuously, initialization process

will stop & EEPROM default data setup process will start.

During EEPROM default data setup process, display should be as shown below.

0.2s
Later

0.2s
Later

0.2s
Later

- Once EEPROM default data setup process is complete, initialization process will re-start from beginning.
Real time and date will blink

--- Page 226 ---
16.8 Dry Concrete Setup

Press
& scroll to
“Installer setup”

[Screen 4]

[Screen 5]

[Screen 6]

Once ‘ON’ is confirm,
stage 1 setup will start

Every day stage will increment
with its respective setup

Next Page

--- Page 227 ---
- Press
- Press
- Press

or
button to select no. of stages.
to store latest status.
button, display will return to [Screen 6].

- If suppose to select 10 stages, then setup will start from stage 1/10.
- Press
or
button to select set temperature.
- Press
button to store latest status.

- Move to next stage 2/10
- Repeat the same procedure

- Move to next stage 10/10
- Repeat the same procedure.
- Press
to store latest status the the display will return to [Screen 4]
- Press
button to return to stage 9/10.

Return to [Screen 6]

--- Page 228 ---
17. Maintenance Guide
In order to ensure safety and optimal performance of the Tank Unit, seasonal inspections on the Tank Unit, functional
check of RCCB/ELCB, field wiring and piping have to be carried out at regular intervals. This maintenance should be
carried out by authorized dealer. Contact dealer for scheduled inspection.
1

Charging and Discharging the Water
Make sure all the piping installations are properly done before carry out below steps.
Charge the Water
 For Domestic Hot Water Tank
to “CLOSE”.
a. Set the Domestic Hot Water Tank Discharge (Drain Tap)

“CLOSE”

“OPEN”

Domestic Hot Water Tank Discharge (Drain Tap) g

b. Set all Tap / Shower “OPEN”.
c. Start filling water to the Domestic Hot Water Tank via Tube Connector c .
After 20~40min, water should flow out from Tap / Shower.
Else, please contact your local authorized dealer.
d. Check and make sure no water leaking at the tube connecting points.
e. Set the Domestic Hot Water Tank Discharge (Drain Tap)
to “OPEN” for 10 seconds to release air
from this pipeline. Then set it “CLOSE”.
knob counterclockwise slightly and hold for 10 seconds to release air
f. Turn the Safety Relief Valve
from this pipeline. Then recover the knob to original position.
g. Ensure Step 5 & 6 is carried out each time after charging water to Domestic Hot Water Tank.
h. To prevent back pressure from happening to the Safety Relief Valve , do turn the Safety Relief
knob counterclockwise.
Valve


For Space Heating / Cooling
a. Start filling water (with pressure more than 1 bar (0.1MPa)) to the Space Heating/Cooling circuit via
Tube Connector .
b. Stop filling water if the free water flow through Pressure Relief Valve drain pipe. (Check the Outdoor
Unit)
c. Turn ON the Tank Unit.
d. Remote control menu → Installer setup → Service setup → pump maximum speed → Turn on the
pump.
e. Make sure Water Pump ④ is running.
f. Check and make sure no water leaking at the tube connecting points.
g. Reinstall the Cabinet front plate f by tightening the 2 mounting screws.

A

Outdoor Unit

Pressure Relief Valve drain pipe

Pressure Relief Valve

--- Page 229 ---
Discharge the Water
 For Domestic Hot Water Tank
a. Turn OFF power supply.
b. Set the Domestic Hot Water Tank Discharge (Drain Tap)
to “OPEN”.
c. Open Tap / Shower to allow air inlet.
knob counterclockwise slightly and hold it until all air is released from
d. Turn the Safety Relief Valve
this pipeline. Then recover the knob to original position after ensured the pipeline is emptied.
e. After discharge, set Domestic Hot Water Tank Discharge (Drain Tap)
to “CLOSE”.
2
3

Check Water Pressure *(1 bar = 0.1 MPa)
Water pressure should not lower than 0.5 bar (with inspects the Water Pressure from Remote Controller). If
necessary add water into Tank Unit (via Tube Connector ).
Check Pressure Relief Valve
*Pressure Relief Valve is mounted in the Outdoor Unit.
o Confirm that the pressure relief valve is working properly, Pull the lever horizontal direction.
o Release the lever when water comes out of the drain pipe of the pressure relief valve.
(While the air continues to come out of the drain pipe, keep raising the lever to completely discharge the
air.)
o Confirm that the water from the drain pipe stops.
o If water is leaking, pull the lever several times and return it to make sure the water stops.
o If water keeps coming out of the drain, drain water.
o Turn off the system and contact your local authorized dealer.
Lever
Pressure Relief Valve

4

Check Air Accumulation
o Open the air vent plugs on the heating panel, fan convector, etc., and remove the air accumulated in the
equipment and piping.
o If the outdoor unit and the indoor unit are installed on different floors, open the air vent plug on the water
plug of the outdoor unit and the air vent plug on the heater bottle inside the indoor unit to remove the air.
(be careful, water will come out)

5

Indoor Unit Control Board Area
Thorough visual inspection of the control board and look for defects, i.e. loose connection, melting of wire
insulator and etc.
RCCB/ELCB
Ensure the RCCB/ELCB set to “ON” condition before check RCCB/ELCB.
Turn on the power supply to the Tank Unit.
This testing could only be done when power is supplied to the Tank Unit.

6

WARNING
Be careful not to touch parts other than RCCB/ELCB test button when the power is supplied to Tank Unit. Else, electrical shock
may happen. Before obtaining access to terminals, all supply circuits must be disconnected.

o
o
o
o

Push the “TEST” button on the RCCB/ELCB. The lever would turn down and indicate “0”, if it functions
normal.
Contact authorized dealer if the RCCB/ELCB malfunction.
Turn off the power supply to the Tank Unit.
If RCCB/ELCB functions normal, set the lever to “ON” again after testing finish.

--- Page 230 ---
7

Reset Overload Protector
Overload Protector serves the safety purpose to prevent the water over heating. When the Overload
Protector trip at high water temperature, take below steps to reset it.
a. Take out the cover.
b. Use a test pen to push the centre button gently in order to reset the Overload Protector.
c. Fix the cover to the original fixing condition.
Use test pen to push
this button for reset
Overload protector a.

8

Maintenance for Magnetic Water Filter Set ⑦
a. Turn OFF power supply.
b. Place a container below Magnetic Water Filter Set ⑦.
c. Turn to remove the Magnet Bar at bottom of Magnetic Water Filter Set ⑦.
d. By using Allen key (8mm), remove the Cap of Discharge Port.
e. By using Allen Key (4mm), open the Service Valve to release the dirty water from the Discharge Port into
a container. Close the service valve when the container is full to avoid spillage in the tank unit. Dispose
the dirty water.
f. Reinstall the Cap of Discharge Port and Magnet Bar.
g. Re-charging the water to Space Heating / Cooling circuit if necessary (refer Section 5 for details.)
h. Turn ON power supply.

Service
Valve

Discharge port
Magnet Bar
Open

9

Close

Maintenance for Safety Relief Valve o
It is strongly recommended to operate the valve by turn the knob counter clockwise to ensure free water flow
through discharge pipe at regular intervals to ensure it is not blocked and to remove lime deposit.
Stagnant water in Tank Unit should be drained if it is not going to be operated for more than 60 days.

--- Page 231 ---
17.1 Maintenance for Magnetic Water Filter Set
17.1.1 Service and Maintenance

17.1.3 Custom Menu

If forget Password and cannot operate remote controller

Setting method of Custom menu

Press
for 5 sec.
Password unlock screen appears, press Confirm and it shall
reset.
Password will become 0000. Please reset it again.
(CAUTION) Only display when it is locked by password.

Custom menu
Cool mode
Back-up heater
Reset energy monitor
Reset operation history

17.1.2 Maintenance Menu

Smart DHW
Select

Setting method of Maintenance menu

Please press

12:00am,Mon

Maintenance menu
Test mode
Sensor setup
Reset password

Press

Confirm

(NOTE) It is different from to use/not to use backup heater
set by client. When this setting is used, heater
power on due to protection against frost will
be disabled. (Please use this setting when it is
required by utility company.)
By using this setting, it cannot defrost due to low
Heating's setting temp and operation may stop
(H75)
Please set under the responsibility of installer.
When it stops frequently, it may be due to
insufficient circulation flow rate, setting temp of
heating is too low etc.

Items that can be set
Actuator check (Manual ON/OFF all functional parts)
(NOTE) As there is no protection action, please be careful
not to cause any error when operating each part
(do not turn on pump when there is no water etc.)

2

Test mode (Test run)
Normally it is not used.

3

Sensor setup (offset gap of detected temp of each sensor
within -2~2°C range)
(NOTE) Please use only when sensor is deviated.
It affects temperature control.

4

for 10 sec.

2 Backup heater (Use/Do not use Backup heater)

for 5 sec.

1

Confirm

Items that can be set
1 Cool mode (Set With/Without Cooling function) Default is
without
(NOTE) As with/without Cool mode may affect electricity
application, please be careful and do not simply
change it.
In Cool mode, please be careful if piping is not
insulated properly, dew may form on pipe and
water may drip on the floor and damage the floor.

Actuator check

Select

12:00am,Mon

3 Reset energy monitor (delete memory of Energy monitor)

Please use when moving house and handover the unit.
4 Reset operation history (delete memory of operation history)

Reset password (Reset password)

Please use when moving house and handover the unit.
5 Smart DHW (Set Smart DHW mode Parameter)

a) Start time: Tank reboil at lower ON Temp. onward.
b) Stop time: Tank reboil at normal ON Temp. onward.
c) ON Temp.: Tank Reboil Temp when Smart DHW start.

--- Page 232 ---
17.1.4 Specifications
17.1.4.1

Parameter
Temperature
pH
Alkalinity
Conductivity
Hardness
Chloride
Sulphate
Nitrate
Chlorine

17.1.4.2

Specifications of Fresh Water was Heat Transfer Medium in Brazed Heat
Exchanger
Quality Limits for Tap Water on the Secondary Side
Below 60°C
7 to 9
60mg/I <HCO3 <300mg/I
< 500μS/cm
[Ca+, Mg+] / [HCO3-] > 0.5
< 200mg/l at 60°C
[SO42-] > 100mg/I and [HCO3-] / [SO42-] > 1
NO3 < 100mg/I
< 0.5mg/l

External Filter

Solids in the water must be filtered.
Minimum filter mesh size required for the field supply external filter in the water inlet is 20 mesh.

--- Page 233 ---
18. Troubleshooting Guide
18.1

Refrigeration Cycle System

In order to diagnose malfunctions, make sure that there are no electrical problems before inspecting the refrigeration
cycle.
Such problems include insufficient insulation, problem with the power source, malfunction of a compressor and a fan.

--- Page 234 ---
18.2 Relationship between the Condition of the Air-to-Water Heatpump
Indoor and Outdoor Units and Pressure and Electric Current
Heating Mode
Condition of the Air-toWater Heatpump
indoor and outdoor units

Low Pressure

High Pressure

Cooling Mode

Electric current
during operation

Low Pressure

High Pressure

Electric current
during operation

Water leakage or
insufficient water flow
rate in the system

Excessive amount of
refrigerant

Inefficient compression

Insufficient refrigerant
(gas leakage)

Outdoor heat exchange
deficiency

Clogged expansion valve
or Strainer



Carry out the measurements of pressure, electric current, and temperature fifteen minutes after an operation is
started.

--- Page 235 ---
18.3

Breakdown Self Diagnosis Function

18.3.1 Self Diagnosis Function (Three Digits Alphanumeric Code)





When abnormality occur during operation, the system will stop operation, and OFF/ON control panel LED will
blink and error code will display on the control panel.
Even error code is reset by turning OFF power supply or by selecting ERROR RESET, if the system abnormality
is still unrepaired, system will again stop operation, and OFF/ON control panel LED will again blinks and error
code will be display.
The error code will store in IC memory.
To check the error code
1 When an abnormality occurs, system will stop operation and OFF/ON control panel LED will blink.
2 Error code of the abnormality will be display on the control panel.
3 To determine the abnormality description, the error code table needs to be referred.

eg:

Error number

Blinking

Press

to select Close / Reset then press



To display past/last error code
1 Turn ON power supply.
2 Refer below procedure to retrieve the error code history.



To permanently delete error code from IC memory
1 Turn ON power supply.
2 Refer below procedure to clear error history.

--- Page 236 ---
[Text read by OCR from the page image: check figures against the PDF]
12:00am,Mon

[Main menu

9:1 7am,Mon

[dl start

Function setup

—

Personal setup
Service contact

Press := button
and select

“System Check” |*Select

[1] Confirm

236

Fa] te or Ko = 10

“alm os ny oe 1

[System check 9:34am,Mon|
Water temperatures
Error history
Compressor
~~ Select [4] Confirm
| Press W SW to select
[Screen 4] V “Error history”
System check 9 43am,Mon
Energy monitor
Water temperatures —
Compressor
Select [4] Confirm

| ~

Display last 4 error retrieved from EEPROM
Error history 8 23am,Mon} >)
1. H76 (2015/05/18) —
2. H15 (2015/05/18)
3. H70 (2015/05/18)
4. H76 (2015/05/18)
[+] Clear history

<——

Do you want to clear
error history?

ves (||

< > :
Vv f

a er ey

Le Ye

Do you want to clear
error history?

Yes > No

Error history

1. --

2. --

3. --

4. --

[+] Clear history

9 41am,Mon

--- Page 237 ---
18.4

Error Codes Table

Diagnosis display

Abnormality/Protection control

Abnormality judgement

Primary location to verify

—

—
 Indoor/outdoor connection wire
 Indoor/outdoor PCB
 Specification and combination table in
catalogue
 Compressor temperature sensor
(defective or disconnected)
 Indoor PCB
 Water pump (malfunction)
 Refrigerant liquid temperature sensor
(defective or disconnected)
 High pressure sensor (defective or
disconnected)
 Solar temperature sensor (defective or
disconnected)
 Pool temperature sensor (defective or
disconnected)
 Buffer tank sensor (defective or
disconnected)

H00

No abnormality detected

H12

Indoor/Outdoor capacity unmatched

90s after power supply

H15

Outdoor compressor temperature sensor
abnormality

Continue for 5 sec.

H20

Water pump abnormality

Continue for 10 sec.

H23

Indoor refrigerant liquid temperature
sensor abnormality

Continue for 5 sec.

H27

Service valve error

Continue for 5 minutes

H28

Abnormal solar sensor

Continue for 5 sec.

H31

Abnormal swimming pool sensor

Continue for 5 sec.

H36

Abnormal buffer tank sensor

Continue for 5 sec.

H38

Brand code not match

When indoor and outdoor
brand code not same

H42

Compressor low pressure abnormality

H43
H44
H62

Abnormal Zone 1 sensor
Abnormal Zone 2 sensor
Water flow switch abnormality

Continue for 5 sec.
Continue for 5 sec.
Continue for 1 min.

H63

Abnormal low pressure sensor

4 times in 20 minutes

H64

Refrigerant high pressure abnormality

Continue for 5 sec.

H65

Abnormal deice water circulation

H67
H68

Abnormal External Thermistor 1
Abnormal External Thermistor 2

water flow > 7 l/min
continuously for 20 seconds
during anti freeze deice
Continue for 5 sec.
Continue for 5 sec.

H70

Back-up heater OLP abnormality

Continue for 60 sec.

H72

Tank sensor abnormal

H74

PCB communication error

H75

Low water temperature control

Continue for 5 sec.
Communication or transfer
error
Room heater disable and deice
request to operate under low
water temperature

H76

Indoor - control panel communication
abnormality

H90

Indoor/outdoor abnormal communication

> 1 min after starting operation

H91

Tank heater OLP abnormality

Continue for 60 sec.

H95

Indoor/Outdoor wrong connection

—

H98 / F95

Outdoor high pressure overload
protection
Cooling high pressure overload
protection

—

H99

—

—

Indoor heat exchanger freeze prevention

F12

Pressure switch activate

F14

Outdoor compressor abnormal revolution

F15

Outdoor fan motor lock abnormality

F16

Total running current protection

—
4 times occurrence within
30 minutes
4 times occurrence within
20 minutes
2 times occurrence within
30 minutes
3 times occurrence within
20 minutes

237

—
 Outdoor pipe temperature sensor
 Clogged expansion valve or strainer
 Insufficient refrigerant
 Outdoor PCB
 Compressor
 Water temperature Zone 1 sensor
 Water temperature Zone 2 sensor
 Water flow switch
 Low pressure sensor (defective or
disconnect)
 Outdoor high pressure sensor
(defective or disconnected)
 Water pump
 Room temperature Zone 1 sensor
 Room temperature Zone 2 sensor
 Back-up heater OLP
(Disconnection or activated)
 Tank sensor
 Indoor main PCB and Sub PCB
 Heater operation must enable to
increase water temperature
 Indoor - control panel
(defective or disconnected)
 Internal/external cable connections
 Indoor/Outdoor PCB
 Tank heater OLP
(Disconnection or activated)
 Indoor/Outdoor supply voltage
 Outdoor high pressure sensor
 Water pump or water leakage
 Clogged expansion valve or strainer
 Excess refrigerant
 Outdoor PCB
 Indoor heat exchanger
 Refrigerant shortage
 Pressure switch
 Outdoor compressor
 Outdoor PCB
 Outdoor fan motor
 Excess refrigerant
 Outdoor PCB

--- Page 238 ---
Diagnosis display

Abnormality/Protection control

Abnormality judgement

Outdoor compressor overheating
protection

4 times occurrence within
30 minutes

IPM (power transistor) overheating
protection
Outdoor Direct Current (DC) peak
detection

3 times occurrence within
30 minutes
7 times occurrence
continuously

Refrigeration cycle abnormality

2 times occurrence within
30 minutes

Cooling/Heating cycle changeover
abnormality
Pressure switch abnormality

4 times occurrence within
30 minutes
Continue for 1 min.

F30

Water outlet sensor 2 abnormality

Continue for 5 sec.

F32

Abnormal Internal Thermostat
Outdoor air temperature sensor
abnormality
Indoor water inlet temperature sensor
abnormality
Outdoor discharge pipe temperature
sensor abnormality

Continue for 5 sec.

F20

F22
F23
F24
F25
F27

F36
F37
F40

Continue for 5 sec.
Continue for 5 sec.
Continue for 5 sec.

F41

PFC control

4 times occurrence within
10 minutes

F42

Outdoor heat exchanger temperature
sensor abnormality

Continue for 5 sec.

F43

Outdoor defrost sensor abnormality

Continue for 5 sec.

F45

Indoor water outlet temperature sensor
abnormality

Continue for 5 sec.

F46

Outdoor Current Transformer open
circuit

F48
F49

Outdoor EVA outlet temperature sensor
abnormality
Outdoor bypass outlet temperature
sensor abnormality

—
Continue for 5 sec.
Continue for 5 sec.

238

Primary location to verify
 Compressor tank temperature sensor
 Clogged expansion valve or strainer
 Insufficient refrigerant
 Outdoor PCB
 Compressor
 Improper heat exchange
 IPM (Power transistor)
 Outdoor PCB
 Compressor
 Insufficient refrigerant
 Outdoor PCB
 Compressor low compression
 4-way valve
 V-coil
 Pressure switch
 Water outlet sensor 2 (defective or
disconnected)
 Control panel PCB thermostat
 Outdoor air temperature sensor
(defective or disconnected)
 Water inlet temperature sensor
(defective or disconnected)
 Outdoor discharge pipe temperature
sensor (defective or disconnected)
 Voltage at PFC
 Outdoor heat exchanger temperature
sensor (defective or disconnected)
 Outdoor defrost sensor (defective or
disconnected)
 Water outlet temperature sensor
(defective or disconnected)
 Insufficient refrigerant
 Outdoor PCB
 Compressor low
 Outdoor EVA outlet temperature sensor
(defective or disconnected)
 Outdoor bypass outlet temperature
sensor (defective or disconnected)

--- Page 239 ---
18.5

Self-Diagnosis Method

18.5.1 Connection Capability Rank Abnormality (H12)
Malfunction Decision Conditions:
During startup operation of cooling and heating, the capability rank of indoor checked by the outdoor is used to
determine connection capability rank abnormality.
Malfunction Caused:
1 Wrong model interconnected.
2 Wrong indoor unit or outdoor unit PCB (main) used.
3 Faulty indoor unit or outdoor unit PCB (main).
Abnormality Judgment:
Continue for 90 seconds.

Troubleshooting:
Does H12 error occur immediately after installation?

Yes

No
Yes Has the installation set-up being
modified at control panel.
No

No

Does H12 error occur after a certain period of usage?
Yes

No

Has any indoor or outdoor PCB being replaced or
serviced?
Yes
Check the spare part number and compare against the
part list.

Change indoor PCB and/or
outdoor PCb for specified model.

No

Is the outdoor unit model and capacity within the rank of
allowable indoor unit capacity?

Does spare part number match with the indoor/outdoor
model?

All in one

Yes
Has the indoor PCB being replaced anew?

No

Allowable Outdoor

WH-ADC0509L3E51
WH-WDG05LE5
WH-ADC0509L3E5UK1 WH-WDG07LE5
WH-WDG09LE5
Yes

Yes
Set the capacity rank at control panel (refer I/I).

After capacity is set, turn off the breaker and turn on the
power again to operate the unit.

239

No

Has the capacity rank being set at the control panel?

Rectify the model selection.

No

--- Page 240 ---
18.5.2 Compressor Tank Temperature Sensor Abnormality (H15)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the compressor tank
temperature sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

Check the CN-TANK connector connection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TANK connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the compressor tank temperature sensor:
- Plug out connector from the outdoor unit PCB (main).
- Measure the resistance of the compressor tank
temperature sensor.
Compressor Tank / Compressor Discharge
Sensor Characteristic
350

Is the measured resistance of the
compressor tank temperature sensor
matches the value specified in its
characteristic chart?

Resistance (K)

300
250
200

No

- Defect in compressor tank
temperature sensor.
- Replace the compressor tank
temperature sensor.

150
100

Yes

50

- Defect in outdoor unit PCB (main).
- Replace the outdoor unit PCB (main).

0
-10

0

10

20

30

40

50

Temperature (° C)

--- Page 241 ---
18.5.3 Water Pump Abnormality (H20)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the rotation speed detected by the IPM of water pump motor
during water pump operation is used to determine abnormal water pump (feedback of rotation > 6,000rpm or <
1,000rpm).
Malfunction Caused:
1 Operation stop due to short circuit inside the water pump motor winding.
2 Operation stop due to breaking of wire inside the water pump motor.
3 Operation stop due to breaking of water pump lead wires.
4 Operation stop due to water pump motor IPM malfunction.
5 Operation error due to faulty indoor unit PCB.
Abnormality Judgment:
Continue for 5 seconds.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Turn OFF the power.
Check if the water
pump connector
connection normal?

Turn ON the power and
operate the water pump.

No

- Connector
poor contact.
- Correct the
connection.

Yes
Disconnect the water pump
connector CN-PUMP1.
Turn ON the power and
check the input voltage of
the water pump from
indoor unit PCB.

No

Does it operate?
Yes
Stop the water pump.

Is the water pump drive
power supply voltage
range between
280~373Vdc
(pin1 & 4) generated?

Check the feedback
signal from water pump
to indoor unit PCB.

Operate the water pump,
is feedback signal (pulse)
generated between
pin7 & 4 of CN-PUMP1?
Yes

No

Replace the
water pump.

Replace the
indoor unit PCB.

No

Replace the
indoor unit PCB.

No

Replace the
indoor unit PCB.

No

Replace the
indoor unit PCB.

Yes
Is the water pump control
power supply 15Vdc
(pin5 & 4) generated?
Yes
Operate the water pump,
is the duty command
range between 0~6Vdc
(pin6 & 4) generated?
Yes

241

Replace the
water pump.

--- Page 242 ---
18.5.4 Indoor Refrigerant Liquid Temperature Sensor Abnormality (H23)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the indoor refrigerant liquid
temperature sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty indoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-TH1 connector connection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TH1 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the indoor refrigerant liquid temperature sensor:
- Plug out connector from the outdoor unit PCB (main).
- Measure the resistance of the indoor refrigerant liquid
temperature sensor.

Resistance (K)

Indoor Refrigerant Liquid / Water Inlet / Water
Outlet Sensor Characteristic
120
110
100
90
80
70

Is the measured resistance of the
indoor refrigerant liquid temperature
sensor matches the value specified
in its characteristic chart?

60
50
40
30
20
10
0

No

- Defect in indoor refrigerant liquid
temperature sensor.
- Replace the indoor refrigerant
liquid temperature sensor.

Yes
-10

0

10

20

30

40

- Defect in indoor unit PCB (main).
- Replace the indoor unit PCB (main).

50

Temperature (°C)

--- Page 243 ---
18.5.5 Service Valve Error (H27)
Malfunction Decision Conditions:
During cooling operation, when:[a] Indoor refrigerant pipe temperature at compressor startup - present indoor refrigerant pipe temperature < 2°C
[b] Present high pressure - high pressure at compressor startup < 5kg/cm2
**Judgment only for first time cooling operation and not during pump down operation.
Malfunction Caused:
1 3 way valves closed.
2 Faulty high pressure sensor.
3 Faulty indoor refrigerant pipe temperature sensor
4 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue for 5 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the 3 way valves.

Is the 3 way valve closed?

Yes

Open the 3 way valve.

No

Check for clogged
expansion valve or strainer.
Yes
Is the expansion valve or
strainer clogged (ice formed)?
No

- Replace the expansion
valve and/or strainer.
- Reclaim and recharge
refrigerant.

Check the indoor ref. pipe
temperature sensor.
Does it conform to the
sensor characteristic chart?

No

Replace the indoor ref. pipe
temperature sensor.

Yes

Turn ON the power and measure the DC
voltage pin 1 & 3 (GND) of CN-HPS before
and after run the system.

Is the measured voltage
before and after run the
system unchanged?

No

Yes

- Defect in outdoor unit
PCB (main).
- Replace the outdoor
unit PCB (main).
- Defect in outdoor high
pressure sensor.
- Replace the outdoor
high pressure sensor.

--- Page 244 ---
18.5.6 Abnormal Solar Sensor (H28)
Malfunction Caused:
1 Faulty connector connection.
2 Faulty solar sensor.
3 Faulty indoor sub PCB.
Abnormality Judgment:
Continue for 5 seconds.
Abnormal solar sensor
Caution

NO

H28 happens check connection at CN207 normal?

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

●

Correct sensor connection

●

Change solar sensor

YES

NO

Measure resistance of sensor match characteristic?
YES
Change Indoor sub PCB

--- Page 245 ---
18.5.7 Abnormal Swimming Pool Sensor (H31)
Malfunction Caused:
1 Faulty connector connection.
2 Faulty swimming pool sensor.
3 Faulty indoor sub PCB.
Abnormality Judgment:
Continue for 5 seconds.
Abnormal swimming pool sensor
Caution

H31 happens check connector sensor at CN204 connection
normal ?

NO

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

●

Correct sensor connection

●

Change swimming pool sensor

YES

NO

Measure sensor resistance match swimming pool sensor
characteristic?
YES
Change Indoor sub PCB

--- Page 246 ---
18.5.8 Abnormal Buffer Tank Sensor (H36)
Malfunction Caused:
1 Faulty connector connection.
2 Faulty buffer tank sensor.
3 Faulty indoor sub PCB.
Abnormality Judgment:
Continue for 5 seconds.
Abnormal buffer tank sensor
Caution

NO

H36 check buffer tank sensor connection at CN5 normal?

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

●

Correct connection

●

Change buffer tank sensor

YES

Disconnect sensor from sub PCB measure resistance of sensor
and compare against characteristic same?
YES
Change sub PCB

246

NO

--- Page 247 ---
18.5.9 Brand Code Not Matching (H38)
Malfunction Caused:
1 Indoor and outdoor brand code not match.
Brand code not match
Caution

Check the brand of indoor and outdoor unit both Panasonic?
YES

Change PCB outdoor

247

NO

●
●

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

Use only Panasonic units.
Change to Panasonic unit.

--- Page 248 ---
18.5.10 Compressor Low Pressure Protection (H42)
Malfunction Decision Conditions:
During operation of heating and after 5 minutes compressor ON, when outdoor pipe temperature below -29°C or
above 26°C is detected by the outdoor pipe temperature sensor.
Malfunction Caused:
1 Dust accumulation on the outdoor unit heat exchanger.
2 Air short circuit at outdoor unit.
3 2 way valve partially closed.
4 Faulty outdoor unit fan motor.
5 Refrigerant shortage (refrigerant leakage).
6 Clogged expansion valve or strainer.
7 Faulty outdoor pipe temperature sensor.
8 Faulty outdoor unit main PCB (main).
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the outdoor unit
fan motor operation.
Is the outdoor unit fan
motor operate normally?
Yes

Check the dust accumulation on the
outdoor unit heat exchanger.
Is the outdoor unit heat
exchanger dirty?

Yes

Is the oil oozing out from
the 2/3 way valve?
Yes

Provide sufficient air
passage.

Is the expansion valve or
strainer clogged (ice formed)?

Check the 2-way valve.
Yes

Open the 2 way valve.

Yes

No
Check for clogged
expansion valve or stainer.

No

Is the 2 way valve partially
closed?

Replace the outdoor unit
fan motor and/or outdoor
unit PCB (main).

Check for gas leakage.

Clean the heat exchanger.

No
Check the outdoor air
passage.
Is there any short circuit?

No

Yes

No
Reclaim and recharge for a
specified amount of fresh refrigerant.
Is abnormality happened
again?

No

No

248

Yes

- Repair the pipe flare or
union nuts.
- Reclaim and recharge
refrigerant.

- Replace the expansion
valve and/or strainer.
- Reclaim and recharge
refrigerant.
- Replace the outdoor unit
PCB (main).
- Replace the outdoor pipe
temperature sensor.
- Replace the compressor.
Procedure complete

--- Page 249 ---
18.5.11 Abnormal Zone 1 Sensor (H43)
Malfunction Caused:
1 Faulty connector connection.
2 Faulty buffer tank sensor.
3 Faulty indoor sub PCB.
Abnormality Judgment:
Continue for 5 seconds.
Abnormal zone 1 sensor
Caution

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

Check the turn off power check connector connection

Normal?

NO

●
●

Poor contact
Correct connection

NO

●
●

Defective zone sensor
Replace sensor

YES
Check plug out connector from zone 1 connector sub PCB in
the PCB measure resistance of zone 1 sensor characteristic
match?
YES

●
●

Defective PCB
Replace PCB

--- Page 250 ---
18.5.12 Abnormal Zone 2 Sensor (H44)
Malfunction Caused:
1 Faulty connector connection.
2 Faulty buffer tank sensor.
3 Faulty indoor sub PCB.
Abnormality Judgment:
Continue for 5 seconds.
Abnormal zone 2 sensor
Caution

Turn off power check connector connection normal?

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

●

Correct abnormal connection

●

Change sensor zone 2

YES
Plug out from sub PCB, check sensor characteristics measure
resistance is it match?
YES
Change PCB

250

NO

--- Page 251 ---
18.5.13 Water Flow Switch Abnormality (H62)
Malfunction Decision Conditions:
During operation of cooling and heating, the water flow detected by the indoor water flow switch is used to
determine water flow error.
Malfunction Caused:
1 Faulty water pump.
2 Water leak in system.
3 Faulty connector connection.
4 Faulty water flow switch.
5 Faulty indoor unit PCB (main).
Abnormality Judgment:
Continue for 10 seconds (but no judgment for 9 minutes after compressor startup/restart).

Troubleshooting:

Caution

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

No

Is the CN4 connector
connection normal?

Check the system water pump

- Connector poor contact.
- Correct the connection.

Yes
Is the water pump working?

No

Replace the faulty water
pump

Yes
Check the water system passage

Is there any water leakage

Yes

Check the Vdc from the indoor unit PCB
(main):
- Disconnect flow sensor from the indoor
unit PCB terminal CN-FLWSEN
- Turn ON the power.
- Measure the Vdc as shown in Figure 1
(pin 1 and 3)
- Is the Vdc measurement 5Vdc?

No

- Defect in indoor unit PCB
(main).
- Replace the indoor unit PCB
(main).

Yes
Fix the water leakage

- Defect in flow sensor.
- Replace the flow sensor

No
5V

Check the CN-FLWSEN connector connection:
- Turn OFF the power.
- Check the connector connection

5Vdc

C92
0.1u
16V

CN-FLWSEN 1
C80
0.047u
25V

R127 R130
1k 10k

Figure 1

251

G1 4

BR
W
B
BL

1

FLOW
SENSOR

4

--- Page 252 ---
18.5.14 Outdoor High Pressure Abnormality (H64)
Malfunction Decision Conditions:
During operation of cooling and heating, when the outdoor high pressure sensor output signal is 0 Vdc or 5 Vdc.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue 4 times in 20 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:
Check the CN-HPS connector connection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-HPS connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Reconnect the high pressure sensor
connector to the outdoor unit PCB
(main). Turn ON the power and run
the system. Measure the DC voltage
pin 1 & 3 (GND) of CN-HPS.

Yes
Check the continuity of the outdoor unit PCB (main)
high pressure sensor connector CN-HPS:
- Plug out connector from the outdoor unit PCB (main).
- Measure the continuity pin 1 & 3 (GND) and pin 1 &
4 (5 V) of CN-HPS.

Is there any continuity?

Yes

Is the measured voltage
0 Vdc or 5 Vdc?
Yes

- Detect in outdoor unit
PCB (main).
- Replace the outdoor
unit PCB (main).

No

252

No

- Defect in outdoor unit
PCB (main).
- Replace the outdoor
unit PCB (main).
- Defect in outdoor high
pressure sensor.
- Replace the outdoor
high pressure sensor.

--- Page 253 ---
18.5.15 Deice Circulation Error (H65)
Malfunction Decision Conditions:
During startup and operation of deice (mode 2), the water flow (> 10l/min) detected by the water flow switch is
used to determine deice circulation error.
Malfunction Caused:
1 Water flow in air-to-water heatpump indoor unit circuitry.
2 Faulty indoor unit water flow switch.
3 Faulty indoor unit water pump.
4 Faulty indoor unit PCB.
Abnormality Judgment:
Continue for 10 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,

Caution always switch off the power before remove and connect the component.

During deice (mode 2), check if indoor
unit water pump operates.
No
Check if internal water pump is
used and it is directly installed to
the air-to-water heatpump
indoor unit circuit. (without buffer
tank)

Yes

Use buffer tank to
separate external water
pump from air-to-water
heatpump indoor unit
circuit.

CAUTION

Panasonic
Air-to-Water
Heatpump
Indoor Unit

External
Pump

No
● When external pump is used, be sure to install
it in independent water circuit and not direct to
the air-to-water heatpump indoor unit circuit.

Stop operation and turn OFF power.
Plug out the connector of water flow
switch (CN-FLWSEN) in the indoor unit
PCB and measure its continuity.

Yes

Is there any continuity?

- Defect in indoor unit water
flow sensor.
- Replace the indoor unit
water flow switch.

No
- Defect in indoor unit PCB.
- Replace the indoor unit PCB.
Turn OFF the power.
Disconnect indoor unit water
pump connector CN-PUMP1.
Operate the auto-water
heatpump unit. During deice
(mode 2), check if the indoor
unit water pump duty
command signal generated?
Yes

No

- Defect in indoor unit water
pump.
- Replace the indoor unit
water pump.

- Defect in indoor unit PCB.
- Replace the indoor unit PCB.

--- Page 254 ---
18.5.16 Abnormal External Thermistor 1 (H67)
Malfunction Caused:
1 Faulty connector connection.
2 Faulty room temperature zone 1 sensor.
3 Faulty indoor sub PCB.
Abnormality Judgment:
Continue for 5 seconds.
Abnormal external thermistor 1
Caution

NO

Check CN205 connector on sub PCB normal?

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

●

Correct connection

●

Change external thermistor 1

YES
Disconnect sensor from sub PCB measure resistance of sensor
and compare against sensor characteristic same?
YES
Change sub PCB

254

NO

--- Page 255 ---
18.5.17 Abnormal External Thermistor 2 (H68)
Malfunction Caused:
1 Faulty connector connection.
2 Faulty room temperature zone 2 sensor.
3 Faulty indoor sub PCB.
Abnormality Judgment:
Continue for 5 seconds.
Abnormal external thermistor 2
Caution

NO

Check connector CN205 on sub PCB normal?

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

●

Correct external thermistor 2 sensor
connector

●

Change external thermistor 2

YES
NO

Check resistance of external thermistor 2 compare against
characteristic of external thermistor same?
YES
Change sub PCB

--- Page 256 ---
18.5.18 Indoor Backup Heater OLP Abnormality (H70)
Malfunction Decision Conditions:
During operation of indoor backup heater, when no power supplies to indoor backup heater or OLP open circuit.
Malfunction Caused:
1 Faulty power supply connector connection.
2 Faulty connector connection.
3 Faulty indoor backup heater overload protector (OLP).
4 Faulty indoor unit PCB (main).
Abnormality Judgment:
Continue for 60 seconds.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

No

Is the abnormality happened during
operation of indoor backup heater?

- Defect in indoor unit PCB (main).
- Replace the indoor unit PCB (main).

Yes
Check the indoor backup heater incoming
AC power supply (2):
- Turn ON power supply (2) & RCCB.
- Measure the AC voltage between RCCB’s
L1 & N1.
- Measure the AC voltage between PCB’s
AC2-L3 & AC2-N2.

Is measured voltage 230Vac?

No

Yes
Check the CN-OLP1 connector connection:
- Turn OFF the power.
- Check the connector connection.

Check indoor backup heater OLP
continuity:
- Turn OFF power supply.
- Reset heater 1 OLP.
- Measure the continuity of OLP.

- Defect in RCCB.
- Replace RCCB.
- Terminal board assembly
connector poor contact.
- Correct the connection or
replace the indoor unit
PCB (main).

Is there any continuity?

No

Yes
Is the CN-OLP1 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes

256

Use a test pen to push
this button to reset OLP

Multimeter to
measure continuity

- Defect in indoor backup
heater OLP.
- Replace indoor backup
heater OLP.
- Defect in indoor unit
PCB (main).
- Replace the indoor unit
PCB (main).

--- Page 257 ---
18.5.19 Tank Temperature Sensor Abnormality (H72)
Malfunction Decision Conditions:
When tank connection is set to ON, the temperatures detected by the tank temperature sensor are used to
determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty indoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

No

Is the abnormality happened during
tank connection set to ON?

- Defect in indoor unit PCB (main).
- Replace the indoor unit PCB (main).

Yes
Check the terminal board assembly no. 15 and
no.16, and CN-TH2 connector connections:
- Turn OFF the power.
- Check the connector connections.

Is the terminal board assembly
no. 15 and no. 16, and CN-TH2
connector connections normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the tank temperature sensor:
- Plug out connector from the indoor unit PCB (main).
- Measure the resistance of the tank temperature
sensor.

Resistance (K)

Tank Sensor Characteristics
11
10
9
8
7
6
5
4
3
2
1
0
-10

0

10

20

30

Temperature (°C)

40

50

Is the measured resistance of the
tank temperature sensor matches
the value specified in its
characteristic chart?
Yes

257

No

- Defect in tank temperature sensor.
- Replace the tank temperature
sensor.

- Defect in indoor unit PCB (main).
- Replace the indoor unit PCB (main).

--- Page 258 ---
18.5.20 PCB Communication Error (H74)
Malfunction Decision Conditions:
When External PCB connection is select “YES” and no communication with External PCB micon for 10 seconds
and above.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty indoor PCB.
3 Faulty indoor sub PCB.
Abnormality Judgment:
After 1 minute operation started.
PCB communication error
Caution

NO

H74 happens check connection at CN-PWR normal?

For safety reason and to prevent
component breakdown, always switch
off the power before remove and
connect the component.

●

Correct connection at CN-PWR

●

Abnormal AC POWER supply

●

Replace sub PCB

YES

NO

Check CN-PWR 230/240 V?
YES

NO

Check CN-COMM situation on terminal 1 & 2 and 3 & 1
YES
Replace indoor PCB

--- Page 259 ---
18.5.21 Indoor-Control Panel Communication Abnormality (H76)
Malfunction Decision Conditions:
During standby and operation of cooling and heating, indoor-control panel error occur.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty control panel.
3 Faulty indoor unit PCB (main).

Troubleshooting:

Caution

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN4 connector connection:
- Turn OFF the power
- Check the connector connection

Is the CN4 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Check the Vdc from the indoor unit PCB (main):
- Disconnect remote control from the indoor unit PCB
terminal CN4
- Turn ON the power.
- Measure the Vdc as shown in Figure 1.
- Is the Vdc measurement 16Vdc?

Yes

Yes
No
Check the control panel
cable connection.

Is the control panel cable
connection normal?

No

- Defect in indoor unit PCB
(main).
- Replace the indoor unit PCB
(main).
- Defect in cable connection.
- Replace control panel cable.

16Vdc

Figure 1

Yes

259

- Defect in remote control
(control panel).
- Replace the remote
control (control panel).

--- Page 260 ---
18.5.22 Indoor/Outdoor Abnormal Communication (H90)
Malfunction Decision Conditions:
During operation of cooling and heating, the data received from outdoor unit in indoor unit signal transmission is
checked whether it is normal.
Malfunction Caused:
1 Faulty outdoor unit PCB (main).
2 Faulty indoor unit PCB (main).
3 Indoor-outdoor signal transmission error due to wrong wiring.
4 Indoor-outdoor signal transmission error due to breaking of wire in the connection wires between the indoor
and outdoor units.
5 Indoor-outdoor signal transmission error due to disturbed power supply waveform.
Abnormality Judgment:
Continue for 1 minute after operation.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:
Check the indoor-outdoor
units connection wires.

Is there any wiring error?

Yes

Correct the indoor-outdoor
units connection wires.

No
Turn OFF the power and disconnect
terminal 3 wire. Turn ON the power
and measure Vdc between terminal
2 & 3 from the outdoor unit.
Is the Vdc fluctuate
between 45-60 Vdc?

No

Replace the outdoor unit
PCB (main).

Yes
Turn OFF the power and reconnect
terminal 3 wire. Turn ON the power
and again measure Vdc between
terminal 2 & 3 from outdoor unit.
Is the Vdc fluctuate
between 15-60 Vdc?

No

260

Replace the indoor unit
PCB (main).

--- Page 261 ---
18.5.23 Tank Booster Heater OLP Abnormality (H91)
Malfunction Decision Conditions:
During operation of tank booster heater, and tank booster heater OLP open circuit.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty tank booster heater overload protector (OLP).
3 Faulty indoor unit PCB (main).
Abnormality Judgment:
Continue for 60 seconds.

Troubleshooting:

Caution

Does the abnormality happen during
operation of tank booster heater?

Yes

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

- Defect in indoor unit PCB (main).
- Replace the indoor unit PCB (main).

No
Check the CN6 connector connection:
- Turn OFF the power.
- Check the connector connection. Is the
CN6 connector connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Turn OFF the power and
disconnect OLP lead wire.
Turn ON the power
and measure Vdc between
CN6 connector.
Is there 12Vdc? See Fig 1
No

Yes

Replace the tank heater booster heater OLP
CN6
OLP BOOSTER
HEATER

12Vdc

Replace the indoor unit main PCB

ROOM TEMP.
ZONE 1
Fig 1

--- Page 262 ---
18.5.24 Unspecified Voltage between Indoor and Outdoor (H95)
Malfunction Decision Conditions:
The supply power is detected for its requirement by the indoor/outdoor transmission.
Malfunction Caused:
1 Insufficient power supply.
2 Faulty outdoor unit PCB (noise filter/main).
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the supply voltage.

Supply voltage as specified?

No

Is the measured AC voltage
230 V?

Correct the power
supply.

No

Yes

Yes

Check the rectification voltage
between DCP & DCN.

Check the AC voltage from outdoor unit PCB (noise filter):
- Turn OFF the power.
- Plug out connector AC-BLK, CN-BLK & CN-WHT from
the outdoor unit PCB (noise filter).
- Turn ON the power.
- Measure the AC voltage between AC-BLK & CN-WHT.

Is the measured voltage
between DCP & DCN~325 Vdc?

No

Yes
Is the measured AC voltage
230 V?
Yes

No

- Defect in outdoor unit
PCB (main).
- Replace the outdoor unit
PCB (main).

- Defect in outdoor
unit PCB (noise filter).
- Replace the outdoor
unit PCB (noise filter).

- Defect in outdoor unit
PCB (main).
- Replace the outdoor unit
PCB (main).

Check the DC filter (capacitor)
PCB connector connection.

Is the DC filter (capacitor) PCB
connector connection normal?

Check the AC voltage supply to outdoor unit PCB (main):
- Turn OFF the power.
- Reconnect connector AC-BLK, CN-BLK & CN-WHT to
the outdoor unit PCB (noise filter).
- Turn ON the power.
- Measure the AC voltage between AC-BLK & CN-WHT.

Yes

262

No

- Connector poor contact.
- Correct the connection.
- Defect in outdoor unit
PCB (main).
- Replace the outdoor unit
PCB (main).

--- Page 263 ---
18.5.25 Outdoor High Pressure Protection (H98 / F95)
Malfunction Decision Conditions:
During operation of cooling / heating, when pressure 4.2 MPa and above is detected by outdoor high pressure
sensor.
Malfunction Caused:
1 Faulty water pump.
2 Insufficient water flow rate in system.
3 Water leak in system.
4 Dust accumulation in the outdoor unit heat exchanger.
5 Air short circuit at outdoor.
6 Faulty outdoor unit fan motor.
7 2/3 way closed.
8 Clogged expansion valve or strainer.
9 Excessive refrigerant.
10 Faulty outdoor high pressure sensor.
11 Faulty outdoor unit PCB (main).

Troubleshooting:

Caution

Heating / Tank

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Operation Mode

Check the 2/3 way valve.

Check the system water pump.

Is the water pump working?

No

Replace the faulty water
pump.

Is the 2/3 way valve closed?

Check for clogged expansion
valve or strainer.

Check the system water
flow rate.

No

Is the expansion valve or
strainer clogged (ice formed)?

Readjust the water
pump speed.

Yes

No

- Replace the expansion
valve and/or strainer.
- Reclaim and recharge
refrigerant.

Check refrigerant amount.

Yes
Check the system water passage.

Is the additional refrigerant
amount filled correctly?
Is there any water leakage?

Open the 2/3 way valve.

No

Yes

Is the water pump speed
adjusted according to system
hydraulic external static pressure?

Yes

Yes

Fix the system water
leakage.

Yes

No

263

No

Reclaim and recharge with
correct amount of
refrigerant.
- Replace the outdoor unit
PCB (main).
- Replace the outdoor high
pressure sensor.

--- Page 264 ---
Troubleshooting:

Caution

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Operation Mode
Cooling
Check the outdoor unit fan
motor operation.

Check the dust accumulation on the
outdoor unit heat exchanger.

Is the outdoor unit heat
exchanger dirty?

Yes

Is the outdoor unit fan
motor operate normally?

No

Replace the outdoor unit
fan motor and/or outdoor
unit PCB (main).

Yes

Clean the heat exchanger.

Check for clogged
expansion valve or strainer.

No
Check the outdoor air
passage.

Is the expansion valve or
strainer clogged (ice formed)?
Yes

Is there any short circuit?

Yes

No

Provide sufficient air
passage

- Replace the expansion
valve and/or strainer.
- Reclaim and recharge
refrigerant.

Check refrigerant amount.

No
Check the 2 way valve.

Is the additional refrigerant
amount filled correctly?
Yes

Is the 2 way valve closed?

Yes

Open the 2 way valve.

No

264

No

Reclaim and recharge with
correct amount of
refrigerant.
- Replace the outdoor unit
PCB (main).
- Replace the outdoor high
pressure sensor.

--- Page 265 ---
18.5.26 Indoor Freeze-up Protection (H99)
Malfunction Decision Conditions:
During anti-freezing control in cooling operation, when the indoor refrigerant liquid temperature < 0°C.
Malfunction Caused:
1 Faulty water pump.
2 Insufficient water flow rate in system.
3 Water leak in system.
4 2 way valve partially closed.
5 Clogged expansion valve or strainer.
6 Refrigerant shortage (refrigerant leakage).
7 Faulty indoor refrigerant liquid temperature sensor.
8 Faulty indoor unit PCB (main).
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the system water pump.

Is the water pump working?

No

Check for clogged
expansion valve or strainer.

Replace the faulty water
pump.

Yes

Is the expansion valve or
strainer clogged (ice formed)?

Check the system water
flow rate.

Yes

No

- Replace the expansion
valve and/or strainer.
- Reclaim and recharge
refrigerant.

Check refrigerant amount.
Is the water pump speed
adjusted according to system
hydraulic external static pressure?

No

Readjust the water pump
speed.

Is the additional refrigerant
amount filled correctly?

Yes

Check the indoor refrigerant
liquid temperature sensor.
Yes

Fix the system water
leakage.

Does it conform to the sensor
characteristic chart?

No
Check the 2 way valve.
Is the 2 way valve partially
closed?

Reclaim and recharge with
correct amount of refrigerant.

Yes

Check the system water passage.

Is there any water leakage?

No

Yes

Open the 2 way valve.

No

265

Yes

Replace the indoor unit PCB
(main).

No

Replace the indoor refrigerant
liquid temperature sensor.

--- Page 266 ---
18.5.27 Outdoor High Pressure Switch Activate (F12)
Malfunction Decision Conditions:
During operation of cooling and heating, when pressure 4.15 MPa and above is detected by outdoor high
pressure switch.
Malfunction Caused:
1 Dust accumulation on the outdoor unit heat exchanger.
2 Air short circuit at outdoor unit.
3 Faulty water pump.
4 Insufficient water flow rate in system.
5 Water leak in system.
6 2/3 way valve closed.
7 Clogged expansion valve or strainer.
8 Excessive refrigerant.
9 Faulty outdoor high pressure sensor and switch.
10 Faulty outdoor unit PCB.
Abnormality Judgment:
Continue 4 times in 20 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the dust accumulation on the
outdoor unit heat exchanger.

Is the outdoor unit heat
exchanger dirty?

Yes

Check the 2/3 way valve.
Clean the heat exchanger.

No

Is the 2/3 way valve closed?

Check the outdoor air
passage.

Yes

Open the 2/3 way valve.

No
Check the system water passage.

Is there any short circuit?

Yes

Provide sufficient air
passage.

No
Check the system water pump.

Is the water pump working?

No

Yes

- Replace the faulty water
pump.
- Replace outdoor high
pressure sensor.

Check the system water
flow rate.
Is the water pump speed
No
adjusted according to system
hydraulic external static pressure?
Yes

Yes
Is there any water leakage?
No
Check for clogged
expansion valve or strainer.

Yes

Is the expansion valve or
strainer clogged (ice formed)?

- Fix the system water leakage.
- Replace outdoor high
pressure sensor.
- Replace the expansion valve
and/or strainer.
- Reclaim and recharge
refrigerant.
- Replace outdoor high
pressure sensor.

No
- Readjust the water pump
speed.
- Replace outdoor high
pressure sensor.

Check refrigerant amount.

Is the additional refrigerant
amount filled correctly?
Yes

266

No

- Reclaim and recharge with
correct amount of refrigerant.
- Replace outdoor high
pressure sensor.
- Replace the outdoor unit
PCB (main).
- Replace the outdoor high
pressure sensor and switch.

--- Page 267 ---
18.5.28 Compressor Rotation Failure (F14)
Malfunction Decision Conditions:
A compressor rotation failure is detected by checking the compressor running condition through the position
detection circuit.
Malfunction Caused:
1 Compressor terminal disconnect.
2 Faulty outdoor unit PCB (main).
3 Faulty compressor.
Abnormality Judgment:
Continue 4 times in 20 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

CORE

Check the U, V, and W connector connection:
- Turn OFF the power.
- Check the U, V, and W connector connection at
outdoor unit PCB (main) and compressor terminal.

R

P
U
V

R
B

W

Y

2T

CORE

Is the connector connection
normal?

No - Connector poor contact.
- Correct the connection.

Yes

FUSE

T 3.15A

COMPRESSOR

L 250W

Outdoor unit
PCB (main)

Compressor
terminal

Disconnect the harnesses U, V, and
W from the compressor terminal.
Red

From the disconnected harnesses U, V, and W,
connect them to the inverter checker. Turn ON
the power and operate the system. Check the
inverter checker 6 LEDs blinking condition.

Blue

Yellow

(YEL) YELLOW

COMMUNICATION
ERROR

INVERTER SIGNAL

Is the blinking of the 6 LEDs in
same sequence/condition?

No

- IPM defective.
- Replace the outdoor unit PCB
(main).

Yes
Replace the compressor.

267

(BLU) BLUE

(RED) RED

TRADE MARK
COMP. TERMINAL

Inverter
checker

--- Page 268 ---
18.5.29 Outdoor Fan Motor (DC Motor) Mechanism Locked (F15)
Malfunction Decision Conditions:
The rotation speed detected by the Hall IC of the fan motor during fan motor operation is used to determine
abnormal fan motor (feedback of rotation > 2550 rpm or < 50 rpm).
Malfunction Caused:
1 Operation stop due to short circuit inside the fan motor winding.
2 Operation stop due to breaking of wire inside the fan motor.
3 Operation stop due to breaking of fan motor lead wires.
4 Operation stop due to fan motor Hall IC malfunction.
5 Operation error due to faulty outdoor unit PCB.
Abnormality Judgment:
Continue 2 times in 30 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:
Turn OFF the power and
operate the fan by hand.
Does the fan rotate
smoothly?

No

Turn OFF the power and
disconnect the fan motor
connector. Turn ON the power.

Replace the fan motor.

Yes
Turn ON the power and
operate the fan motor.

Check the output of the fan motor
from outdoor unit PCB (main)
Is the fan motor power supply voltage No
~325 Vdc (pin 1 & 4) generated?

No

Does it rotate?

Yes

Yes

Is the fan motor control voltage
15 Vdc (pin 5 & 4) generated?

Stop the fan motor.

Yes

No

Replace the outdoor unit
PCB (main).

No

Replace the outdoor unit
PCB (main).

Yes

Check the rotation feedback
output from the fan motor.
Rotate the fan motor by hand, is the
rotation feedback voltage 15 Vdc
(pin 6 & 4) generated?

Replace the outdoor unit
PCB (main).

Operate the fan motor, is the
rotation command voltage 1-5 Vdc
(pin 7 & 4) generated?
No

Yes

Replace the fan motor.
Replace the outdoor unit
PCB (main).

268

Replace the fan motor.

--- Page 269 ---
18.5.30 Input Over Current Detection (F16)
Malfunction Decision Conditions:
During operation of cooling and heating, when outdoor current above WDG05LE5 15.0A & WDG07 / 09LE5
18.0A is detected by the current transformer (CT) in the outdoor unit PCB.
Malfunction Caused:
1 Excessive refrigerant.
2 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue 3 times in 20 minutes.

Troubleshooting:

Caution

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Get restarted and measure
the AC current from the
outdoor LIVE terminal.

Is the measured AC
current over
WDG05LE5 15.0A &
WDG07 / 09LE5 18.0A?

No

Replace the outdoor unit
PCB (main).

Yes

Reclaim and recharge with
correct amount of refrigerant.

Check refrigerant amount.

Excess refrigerant?
No

Replace the outdoor unit
PCB (main).

--- Page 270 ---
18.5.31 Compressor Overheating (F20)
Malfunction Decision Conditions:
During operation of cooling and heating, when temperature above 112°C is detected by the compressor tank
temperature sensor.
Malfunction Caused:
1 Faulty compressor tank temperature sensor.
2 2/3 way valve closed.
3 Refrigerant shortage (refrigerant leakage).
4 Clogged expansion valve or strainer.
5 Faulty outdoor unit PCB (main).
6 Faulty compressor.
Abnormality Judgment:
Continue 4 times in 30 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:
Check the compressor tank
temperature sensor.

Does it conform to the
sensor characteristic chart?

No

Check for clogged expansion
valve or strainer.

Replace the compressor
tank temperature sensor.

Yes

Yes

Check the 2/3 way valve.

Is the expansion valve or
strainer clogged (ice formed)?

Is the 2/3 way valve closed?

Reclaim and recharge for a
specified amount of fresh refrigerant.

No
Yes

Open the 2/3 way valve.

No

Is abnormality happened
again?

Check for gas leakage.

No
Is the oil oozing out from the
2/3 way valve?
No

Yes

- Repair the pipe flare or
union nuts.
- Reclaim and recharge
refrigerant.

270

Yes

- Repair expansion valve
and/or strainer.
- Reclaim and recharge
refrigerant.

- Replace the outdoor unit
PCB (main).
- Replace the compressor.
Procedure complete.

--- Page 271 ---
18.5.32 IPM Overheating (F22)
Malfunction Decision Conditions:
During operation of cooling and heating, when temperature 95°C is detected by the outdoor IPM temperature
sensor.
Malfunction Caused:
1 Faulty outdoor unit fan motor.
2 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue 3 times in 30 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the outdoor unit
installation condition.

Is there any improper heat
radiation?

Yes

- Reinstall the outdoor unit.
- Remove the obstacle(s).

No

Replace the outdoor unit
fan motor.

No
Is the outdoor unit
fan motor operating?
Yes

- Defect in IPM.
- Replace the outdoor unit
PCB (main).

--- Page 272 ---
18.5.33 Output Over Current Detection (F23)
Malfunction Decision Conditions:
During operation of cooling and heating, when outdoor DC current is above set value is detected by the IPM DC
Peak sensing circuitry in the outdoor unit PCB (main).
Malfunction Caused:
1 Faulty outdoor unit PCB (main).
2 Faulty compressor.
Abnormality Judgment:
Continue for 7 times.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the compressor winding resistance:
- Turn OFF the power and disconnect the
harnesses U, V, and W.
- Measure the winding resistance between
U-V, V-W, and W-U.

Are the compressor’s
winding resistance (U-V, VW, or U-W) shorted?

Yes

No
Checking the power transistor
Never touch any live parts for at least 10 minutes after turning off the circuit breaker.
If unavoidably necessary touch a live part, make sure the power transistor’s supply
voltage is below 50 V using the tester.
For the UVW, make measurements at the Faston terminal on the board or the relay
connector.
Tester’s negative terminal
Tester’s positive terminal
Normal resistance
Abnormal resistance

Power transistor
(+)
UVW

Power transistor
UVW
(-)
Power transistor
UVW
(+)
Several kohms to several Mohms
0 or ∞

272

UVW
Power transistor
(-)

- Compressor defective due to
winding shorted.
- Replace the compressor.
- Outdoor eletronic circuit
defect due to power transistor
shorted.
- Replace the outdoor unit
PCB (main).

--- Page 273 ---
18.5.34 Refrigeration Cycle Abnormality (F24)
Malfunction Decision Conditions:
1 During compressor running (heating / cooling) for more than 10 minutes except deice, pumpdown and test
mode.
2 During heating / cooling, water outlet and water inlet difference is less than 1°C.
3 During heating / cooling, high pressure < 1MPa (143 Psi) for more than 10 minutes or < 0.2 MPa (28 Psi) for
more than 5 minutes.
4 During heating / cooling, discharge temperature - saturation temperature of high pressure ≥ 60°C.
Malfunction Caused:
1 Refrigerant shortage (refrigerant leakage).
2 Faulty indoor water inlet, indoor water outlet, compressor discharge temp sensor or high pressure sensor.
3 2/3 way valve closed.
4 Clogged expansion valve or strainer.
5 Faulty indoor or outdoor PCB (main).
Abnormality Judgment:
Continue 2 times in 30 minutes.
Check for gas leaking

Is the leaking found?

Yes

Repair leak point or replace,
reclaim and recharge gas

No
Check for clogged expansion
valve or strainer

Check sensor characteristics
1. Water outlet sensor
2. Water inlet sensor
3. Compressor discharge sensor

Is the expansion valve or strainer
clogged (ice formed)?

Yes

No
Does it conform to
sensor characteristics?

No

Replace the sensor

- Replace expansion valve and / or
strainer
- Reclaim and recharge refrigerant

Reclaim and recharge for a specified
amount of fresh refrigerant

Yes

Yes
Is abnormality happened again?

Check the pressure sensor

- Replace the outdoor or indoor unit
PCB (main)

No
Procedure complete
Yes
Is the pressure sensor value
and actual mismatched?

Replace the pressure sensor

No

--- Page 274 ---
18.5.35 Four Way Valve Abnormality (F25)
Malfunction Decision Conditions:
1 During heating operation, when the indoor pipe temperature of thermostat ON indoor unit < 0°C.
2 During cooling operation, when the indoor pipe temperature of thermostat ON indoor unit > 45°C.
Malfunction Caused:
1 Faulty sensor.
2 Faulty connector connection.
3 Faulty outdoor unit PCB (noise filter/main).
4 Faulty four way valve.
Abnormality Judgment:
Continue 4 times in 30 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Four way valve coil
disconnected (loose)?
Check the indoor pipe
temperature sensor.

Does it conform to the
sensor characteristic chart?

No

Replace the indoor pipe
temperature sensor.

Yes

Reconnect the harness.

No
Check the continuity of the
four way valve coil.

Yes
Yes

Disconnect the harness from the
CN-HOT connector. Resistance
between harness about 1.52 kohm?

No

No

Connect the four
way valve coil.

No
Is the harness out of the
CN-HOT connector?

Is F25 occur during
heating operation?

Is the four way valve coil energize
during cooling operation?

Yes

Yes

Replace the outdoor unit
PCB (noise filter/main).

No

Yes

Is the voltage supply to
4 way valve 4Vdc?
Yes

274

4 WAYS
VALVE

CN-HOT
(VH3-2)

Measure DC voltage supply to
CN-HOT (pin 1 & 3) during heating
operation.

Replace the four way valve.

Replace the four
way valve coil.

1 2 3

No

Replace the outdoor unit
PCB (noise filter/main).
Replace the four way valve.

--- Page 275 ---
18.5.36 Outdoor High Pressure Switch Abnormal (F27)
Malfunction Decision Conditions:
During compressor stop, and outdoor high pressure switch is remain opened.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty switch.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue for 1 minute.

Troubleshooting:

For safety reason and to prevent component breakdown,

Caution always switch off the power before remove and connect the component

Check the CN-PSW1 connector connection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-PSW1 connector
connection normal?

No

- Connect or poor contact.
- Correct the connection.

Yes
1

Check the continuity of the outdoor high
pressure switch:
- Plug out outdoor high pressure switch
connector from CN-PSW1 channel.
- Measure the connector continuity.

CN-EV2
(YELLOW)

CN-PSW1
(BLUE)
2
1

6

M

R

R

ELECTRO MAGNETIC COIL
(BYPASS EXPANSION VALVE)
HIGH PRESSURE SWITCH

Is there any continuity?
No

Yes

- Defect in outdoor unit PCB
(main).
- Replace the outdoor unit
PCB (main).
- Defect in outdoor high
pressure switch.
- Replace the outdoor high
pressure switch.

275

Multimeter

--- Page 276 ---
18.5.37 Low Discharge Superheat (F29)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the outdoor pipe temperature
sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty outdoor unit PCB (main).
4 Faulty High Pressure Switch
5 Refrigerant shortage (refrigerant leakage).
Abnormality Judgment:
1 times occurrence within 2550 minutes.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-DIS & CN-TH1 connection:
- Turn OFF the power.
- Check the connector connection.

- Is the CN-DIS & CN-TH1 connector normal?
- Measured the resistance of the sensor, is
the measured resistance matches the value
specified in its characteristic chart?

No

- Replace the temperature
Sensor.

Yes
Check Refrigeration Cycle Pressure.

Is the refrigerant cycle pressure normal?

No

- Recharge Gas.

Yes
- Defect in Outdoor Unit PCB.
- Replace the Outdoor Unit PCB.

Outdoor Pipe / Outdoor Defrost Sensor
Characteristic

Compressor Tank / Compressor Discharge Sensor
Characteristic
350

30

300

Resistance (K)

Resistance (K)

25
20
15
10

250
200
150
100
50

5

0

0
-10

0

10

20

30

40

-10

50

0

10

20

30

Temperature (°C)

Temperature (°C)

276

40

50

--- Page 277 ---
18.5.38 Indoor Water Outlet Temperature Sensor 2 Abnormality (F30)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the indoor water outlet
temperature sensor 2 are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty indoor unit PCB.
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-TH3 connector connnection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TH3 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the indoor water outlet temperature sensor:
- Plug out connector from the indoor unit PCB.
- Measure the resistance of the indoor water outlet
temperature sensor.

Resistance (K)

Indoor Refrigerant Liquid / Water Inlet / Water
Outlet Sensor Characteristic
120
110
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

Is the measured resistance of the
indoor water outlet temperature
sensor matches the value specified
in its characteristic chart?

No

- Defect in indoor water outlet
temperature sensor.
- Replace the indoor water
outlet temperature sensor.

Yes
-10

0

10

20

30

40

- Defect in indoor unit PCB.
- Replace the indoor unit PCB.

50

Temperature (°C)

--- Page 278 ---
18.5.39 Outdoor Air Temperature Sensor Abnormality (F36)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the outdoor air temperature
sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-TH1 connector connnection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TH1 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the outdoor air temperature sensor:
- Plug out connector from the outdoor unit PCB (main).
- Measure the resistance of the outdoor air
temperature sensor.
Outdoor Intake Air Sensor Characteristic
100

Is the measured resistance of the
outdoor air temperature sensor
matches the value specified in its
characteristic chart?

90

Resistance (K)

80
70
60
50

No

- Defect in outdoor air temperature
sensor.
- Replace the outdoor air
temperature sensor.

40
30
20

Yes

10

- Defect in outdoor unit PCB (main).
- Replace the outdoor unit PCB (main).

0
-10

0

10

20

30

40

50

Temperature (°C)

--- Page 279 ---
18.5.40 Indoor Water Inlet Temperature Sensor Abnormality (F37)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the indoor water inlet
temperature sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty indoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-TH1 connector connnection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TH1 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the indoor water inlet temperature sensor:
- Plug out connector from the indoor unit PCB (main).
- Measure the resistance of the indoor water inlet
temperature sensor.
Indoor Refrigerant Liquid / Water Inlet / Water
Outlet Sensor Characteristic
120

Is the measured resistance of the
indoor water inlet temperature sensor
matches the value specified in its
characteristic chart?

Resistance (K)

110
100
90
80
70
60
50
40
30
20

No

- Defect in indoor water inlet
temperature sensor.
- Replace the indoor water inlet
temperature sensor.

Yes
- Defect in indoor unit PCB (main).
- Replace the indoor unit PCB (main).

10
0
-10

0

10

20

30

40

50

Temperature (°C)

--- Page 280 ---
18.5.41 Outdoor Discharge Pipe Temperature Sensor Abnormality (F40)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the outdoor discharge pipe
temperature sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-DIS connector connnection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-DIS connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the outdoor discharge pipe temperature sensor:
- Plug out connector from the outdoor unit PCB (main).
- Measure the resistance of the outdoor discharge
pipe temperature sensor.
Compressor Tank / Compressor Discharge Sensor
Characteristic
350

Is the measured resistance of the
outdoor discharge pipe temperature
sensor matches the value specified
in its characteristic chart?

Resistance (K)

300
250
200
150

No

- Defect in outdoor discharge pipe
temperature sensor.
- Replace the outdoor discharge pipe
temperature sensor.

100

Yes

50

- Defect in outdoor unit PCB (main).
- Replace the outdoor unit PCB (main).

0
-10

0

10

20

30

40

50

Temperature (°C)

--- Page 281 ---
18.5.42 Power Factor Correction (PFC) Abnormality (F41)
Malfunction Decision Conditions:
During operation of cooling and heating, when the PFC protection circuitry in the outdoor unit PCB (main) senses
abnormal high DC voltage level.
Malfunction Caused:
1 Power supply surge.
2 Compressor windings not uniform.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue 4 times in 10 minutes.
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the supply voltage.

Supply voltage as specified?

No

Correct the power supply.

Check the compressor winding resistance:
- Turn off the power supply and disconnect
the harnesses U, V, and W.
- Measure the winding resistance between U-V,
V-W, and W-U.

Yes
Are the compressor’s winding
resistance (U-V, V-W, U-W)
uniform?

Operate the system. Verify PFC
abnormality by measuring the DC
voltage between DCP-OUT and DCNOUT of the outdoor unit PCB (main).

No
Is the DC voltage between DCPOUT and DCN-OUT normal
(between 285-315 Vdc)?

Yes

- Defect in PFC circuitry.
- Replace the outdoor unit
PCB (main).

No

281

Yes

Replace the compressor.

Replace the outdoor unit
PCB (main).

--- Page 282 ---
18.5.43 Outdoor Pipe Temperature Sensor Abnormality (F42)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the outdoor pipe temperature
sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-TH1 connector connnection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TH1 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the outdoor pipe temperature sensor:
- Plug out connector from the outdoor unit PCB (main).
- Measure the resistance of the outdoor pipe
temperature sensor.
Outdoor Pipe / Outdoor Defrost Sensor
Characteristic
30

Is the measured resistance of the
outdoor pipe temperature sensor
matches the value specified in its
characteristic chart?

Resistance (K)

25
20
15

No

- Defect in outdoor pipe temperature
sensor.
- Replace the outdoor pipe
temperature sensor.

10

Yes

5

- Defect in outdoor unit PCB (main).
- Replace the outdoor unit PCB (main).

0
-10

0

10

20

30

40

50

Temperature (°C)

--- Page 283 ---
18.5.44 Outdoor Defrost Temperature Sensor Abnormality (F43)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the outdoor defrost
temperature sensor are used to determine sensor error.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty outdoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-TH2 connector connnection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TH2 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the outdoor defrost temperature sensor:
- Plug out connector from the outdoor unit PCB (main).
- Measure the resistance of the outdoor defrost
temperature sensor.
Outdoor Pipe / Outdoor Defrost Sensor
Characteristic
30

Is the measured resistance of the
outdoor defrost temperature sensor
matches the value specified in its
characteristic chart?

Resistance (K)

25
20
15

No

- Defect in outdoor defrost
temperature sensor.
- Replace the outdoor defrost
temperature sensor.

10

Yes

5

- Defect in outdoor unit PCB (main).
- Replace the outdoor unit PCB (main).

0
-10

0

10

20

30

40

50

Temperature (°C)

--- Page 284 ---
18.5.45 Indoor Water Outlet Temperature Sensor Abnormality (F45)
Malfunction Decision Conditions:
During startup and operation of cooling and heating, the temperatures detected by the indoor water outlet
temperature sensor are used to determine sensor errors.
Malfunction Caused:
1 Faulty connector connection.
2 Faulty sensor.
3 Faulty indoor unit PCB (main).
Abnormality Judgment:
Continue for 5 seconds.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Check the CN-TH1 connector connnection:
- Turn OFF the power.
- Check the connector connection.

Is the CN-TH1 connector
connection normal?

No

- Connector poor contact.
- Correct the connection.

Yes
Check the indoor water outlet temperature sensor:
- Plug out connector from the indoor unit PCB (main).
- Measure the resistance of the indoor water outlet
temperature sensor.
Indoor Refrigerant Liquid / Water Inlet / Water
Outlet Sensor Characteristic
120

Is the measured resistance of the
indoor water outlet temperature
sensor matches the value specified
in its characteristic chart?

Resistance (K)

110
100
90
80
70
60
50
40
30

No

- Defect in indoor water outlet
temperature sensor.
- Replace the indoor water outlet
temperature sensor.

Yes

20

- Defect in indoor unit PCB (main).
- Replace the indoor unit PCB (main).

10
0
-10

0

10

20

30

40

50

Temperature (°C)

--- Page 285 ---
18.5.46 Outdoor Current Transformer Open Circuit (F46)
Malfunction Decision Conditions:
A current transformer (CT) open circuit is detected by checking the compressor running frequency (
frequency) and CT detected input current (< 0.65 A) for continuously 20 seconds.

rated

Malfunction Caused:
1 CT defective.
2 Faulty outdoor unit PCB (main).
3 Compressor defective (low compression).
Abnormality Judgment:
Continue 3 times in 20 minutes.

Troubleshooting:

For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Measure the current from
the outdoor LIVE terminal.

Operate heating operation.
When F46 occurs again, turn
OFF the power.

Is the current < 0.65 A?
Check the 2/3 way valve.

Is the 2/3 way valve closed?

Yes

While the system is still in
heating operation, check the
discharge pressure.

Open the 2/3 way valve.

Is the pressure unchanged (same
as when compressor stop)?

Check for gas leakage.

No
Turn ON the power, and
operate heating operation.

- Defect in CT.
- Replace the outdoor
unit PCB (main).

Yes

No

Is the oil oozing out from
the 2/3 way valve?

No

Yes

- Replace the pipe flare or
union nuts.
- Reclaim and recharge
refrigerant.

No

Replace the outdoor unit
PCB (main).

Yes
While the system is still in heating operation,
further check (by touching) if;
- Compressor discharge pipe is cold.
- Compressor body is warm to confirm the
compressor low compression.
Yes

285

Replace the compressor.

--- Page 286 ---
18.5.47 Outdoor Bypass Outlet Temperature Sensor (F49)
Malfunction Decision Conditions:
During start up and operation of cooling and heating, the temperature detected by outdoor bypass sensor is used
to determine sensor error.
Malfunction Caused:
1 Faulty connector connection
2 Faulty sensor
3 Faulty outdoor unit PCB (main)
Abnormality Judgment:
Continuous for 5 seconds
For safety reason and to prevent component breakdown,
always switch off the power before remove and connect the component.

Troubleshooting:

Check the CN-TH3 connector connection
- Turn of the power
- Check connector connection

No

Is CN -TH3 connector
connection normal?

Poor contact
- Correct connection

Yes
Check Outdoor bypass outlet temperature sensor
- Plug out connector from outdoor main PCB
- Measure resistance of the outdoor bypass outlet
temperature sensor

Does the measurement resistance
match with values in sensor
characteristic graph?

Defective outdoor main PCB
- Replace outdoor main PCB

kΩ

Bypass Sensor Resistance
20
18
16
14
12
10
Bypass Sensor
Resistance

8
6
4
2
0
-10

0

10

20

30

40

Celcius

286

No

Defective sensor
- Replace outdoor bypass
temperature sensor

--- Page 287 ---
19. Disassembly and Assembly Instructions
WARNING
High Voltage are generated in the electrical parts area by the capacitor. Ensure that the capacitor has discharged sufficiently before proceeding
with repair work. Failure to heed this caution may result in electric shocks.

19.1 Indoor Unit
19.1.1 To Remove Front Plate and Top Plate
Hook

2X (screw)

1
2

Remove 2 screw at the bottom to remove the Front Plate
Remove 8 screw at the top to remove the Top Plate

--- Page 288 ---
19.1.2 To Remove Remote Control

3. Remove 2 screws then take out the bottom case.
Bottom
case

Top case

Claw
(3 places)
Insert the
driver and
slightly turn.

Disconnect the
Remote controller
wiring

Flat-blade
screwdriver
1. Remove the top case from the bottom case.

2. Disconnect the Remote Controller wiring.

19.1.3 To Remove RCCB
2. Disconnect lead wires
(Brown and Blue)
from RCCB.

3. Remove screws and bracket
to remove the RCCB.

1. Remove 2 screws to swing
the Control Board Cover.

288

Slide it
downwards
to unhook

--- Page 289 ---
19.1.4 To Remove Electronic Controller
1. Disconnect all connectors from main PCB.
(CN-FLWSEN, CN-PUMP1, CN-TH1, CN-TH2,
CN-OLP1, CN1, CN2, CN3, CN4, CN5, CN6,
CN-CNT2, CN-DPS, CN-CNT, CN-PWR,
CN-PWR2, CN-PWR3, CN-PWR4).
2. Detach remote controller, 3-way valve and all wires
from terminal board (AC1-N, G01, G05, DATA, G02,
L2, L1, G03, HT1-L3, AC2-L3, AC2-N2, AC2-N3.)

19.1.5 To Remove Flow Sensor, Plug and Valve Body
2. Detach the flow sensor lead wire.
1. Remove the retaining ring
then pull out the plug.
3. Turn the valve body
anti-clockwise then remove.
Plug
Valve Body

Flow sensor

When reinstall Flow Switch, ensure the arrow on the flow switch is parallel with the pipe shaft and is facing in
the direction of flow.

19.1.6 To Remove Water Pump

Water Pump
1. Remove two retaining rings
then disconnect the pipes.
Remove the water pump.

--- Page 290 ---
19.1.7 To Remove Heater Complete
1. Disconnect the connector CN-OLP1 from the
Electronic Controller and detach the lead wire
HT1-L3 (Red) and AC2-L3 (Black).

2. Remove Valve Body.
4. Remove 2 screws
from the bracket.

3. Disconnect 2 pipes
connection.

Side View

19.1.8

To Remove Water Filter
1. Remove the retaining ring
then pull out the plug.

2. Remove 2 retaining rings then pull
out the Magnetic Water Filter set.

Top View

Magnetic Water Filter

--- Page 291 ---
WARNING








This symbol shows that this equipment uses a flammable refrigerant with safety A3 group per ISO 817. If the
refrigerant is leaked, together with an external ignition source, there is a possibility of fire / explosion.

If you are working on the R290 product, before starting work and when entering the service area, always turn ON
the combustible gas leak detector to ensure there is no leakage.
Keep all ignition sources away from the product. In particular, open flames, hot surfaces, electrical devices that
are not free from electrical sources, static discharges.
Ensure the servicing area is well ventilated.
Ensure all the serving tools and equipment complied with ATEX (Atmosphere Explosible) standard.
Ensure the product is service by certified and authorized serviceman.
Ensure to always have the approved fire extinguisher during servicing.
Use a warning placard to ensure that unauthorized personnel cannot enter the protective zone.

19.2 Outdoor Unit
19.2.1 Electronic Controller Removal Procedures

1. Unscrew the right Front
Grille and remove it.

--- Page 292 ---
2. Unscrew and remove the
left Discharge Grille.

3. Unscrew the screws and
remove the Top Plate.

4. Unscrew the screws and
remove the right Cabinet Front
Plate.

--- Page 293 ---
6. Unscrew and remove the control board complete.

5. Remove all connectors.

Terminal board
GND
REACTOR

BASE PAN HEATER

Reactor

Terminal cover

COMP.

Compressor

CONNECTOR

PCB

CN-FM1

M

CN-EV1

M Expansion Valve coil

CN-HOT

M 4-way valve coil

CN-HPS

Pressure sensor

CN-PSW

Pressure switch

CN-DIS

compressor discharge temp.

CN-TH1

outside air temperature
outdoor heat exchanger temperature

CN-TH3

Evaporator outlet temperature
Hot water temperature
Refrigerant temperature
Inlet water temperature

CN-TH4

293

Fan Motor

--- Page 294 ---
7. Unscrew the control board cover
screws and remove the control board

Control board cover
O-ring

9. Unscrew and remove Main PCB.

Terminal board O-ring
Main PCB O-ring
8. Remove all connectors
from Main PCB and remove
the lead wire from terminal
board.
Terminal board
GND
REACTOR

BASE PAN HEATER

Reactor

Terminal cover

COMP.
CONNECTOR

PCB

Compressor

CN-FM1

M

Fan Motor

CN-EV1

M

Expansion Valve coil

CN-HOT

M

4-way valve coil

CN-HPS

Pressure sensor

CN-PSW

Pressure switch

CN-DIS

compressor discharge temp.

CN-TH1

outside air temperature
outdoor heat exchanger temperature

CN-TH3

Evaporator outlet temperature
Hot water temperature
Refrigerant temperature
Inlet water temperature

CN-TH4

Note: During re-assemble the Main PCB, ensure to attach the O-ring properly to avoid gas leakage
into the control board complete.

--- Page 295 ---
20. Technical Data
20.1 Operation Characteristics
20.1.1 WH-WDG05LE5
Heating Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 7°C (DBT), 6°C (WBT)
Indoor water inlet temperature : 30°C
Indoor water outlet temperature : 35°C
Piping length : 7 m
5.500

Capacity (kW)

4.880
4.260
3.640
3.020
2.400
-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

Input Power (kW)

2.250
1.920
1.590
1.260
0.930
0.600
-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

10.000

Current (A)

8.500
7.000
5.500
4.000
2.500
-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

--- Page 296 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 12°C
Indoor water outlet temperature : 7°C
Piping length : 7 m
6.000

Capacity (kW)

5.700
5.400
5.100
4.800
4.500

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

1.600
1.480
1.360
1.240
1.120
1.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

7.500

Current (A)

6.900
6.300
5.700
5.100
4.500
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 297 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 19°C
Indoor water outlet temperature : 14°C
Piping length : 7 m
7.500

Capacity (kW)

7.100
6.700
6.300
5.900
5.500

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

1.650
1.530
1.410
1.290
1.170
1.050
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

7.500

Current (A)

6.900
6.300
5.700
5.100
4.500
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 298 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 23°C
Indoor water outlet temperature : 18°C
Piping length : 7 m
6.000

Capacity (kW)

5.700
5.400
5.100
4.800
4.500

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

1.150
1.050
0.950
0.850
0.750
0.650
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

5.000

Current (A)

4.600
4.200
3.800
3.400
3.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 299 ---
20.1.2 WH-WDG07LE5
Heating Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 7°C (DBT), 6°C (WBT)
Indoor water inlet temperature : 30°C
Indoor water outlet temperature : 35°C
Piping length : 7 m
7.500

Capacity (kW)

6.900
6.300
5.700
5.100
4.500

-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

Input Power (kW)

2.600
2.240
1.880
1.520
1.160
0.800
-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

12.000

Current (A)

10.300
8.600
6.900
5.200
3.500
-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

--- Page 300 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 12°C
Indoor water outlet temperature : 7°C
Piping length : 7 m
7.500

Capacity (kW)

7.200
6.900
6.600
6.300
6.000

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

2.500
2.270
2.040
1.810
1.580
1.350
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

12.000

Current (A)

10.800
9.600
8.400
7.200
6.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 301 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 19°C
Indoor water outlet temperature : 14°C
Piping length : 7 m
8.500

Capacity (kW)

8.200
7.900
7.600
7.300
7.000

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

2.600
2.350
2.100
1.850
1.600
1.350
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

11.500

Current (A)

10.400
9.300
8.200
7.100
6.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 302 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 23°C
Indoor water outlet temperature : 18°C
Piping length : 7 m
8.000

Capacity (kW)

7.500
7.000
6.500
6.000
5.500

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

1.700
1.560
1.420
1.280
1.140
1.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

7.500

Current (A)

6.900
6.300
5.700
5.100
4.500
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 303 ---
20.1.3 WH-WDG09LE5
Heating Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 7°C (DBT), 6°C (WBT)
Indoor water inlet temperature : 30°C
Indoor water outlet temperature : 35°C
Piping length : 7 m
9.500

Capacity (kW)

8.800
8.100
7.400
6.700
6.000

-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

Input Power (kW)

3.600
3.120
2.640
2.160
1.680
1.200
-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

16.000

Current (A)

13.900
11.800
9.700
7.600
5.500
-25 -23 -21 -19 -17 -15 -13 -11 -9 -7 -5 -3 -1

1

3

5

7

9 11 13 15 17 19 21 23 25

Outdoor Temperature (°C)

--- Page 304 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 12°C
Indoor water outlet temperature : 7°C
Piping length : 7 m
9.500

Capacity (kW)

8.800
8.100
7.400
6.700
6.000

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

3.000
2.800
2.600
2.400
2.200
2.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

13.000

Current (A)

12.000
11.000
10.000
9.000
8.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 305 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 19°C
Indoor water outlet temperature : 14°C
Piping length : 7 m
12.000

Capacity (kW)

11.000
10.000
9.000
8.000
7.000

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

3.100
2.900
2.700
2.500
2.300
2.100
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

14.000

Current (A)

13.000
12.000
11.000
10.000
9.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 306 ---
Cooling Characteristics at Different Outdoor Air Temperature
Condition
Outdoor air temperature : 35°C (DBT), -°C (WBT)
Indoor water inlet temperature : 23°C
Indoor water outlet temperature : 18°C
Piping length : 7 m
11.000

Capacity (kW)

10.400
9.800
9.200
8.600
8.000

16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

Input Power (kW)

2.550
2.400
2.250
2.100
1.950
1.800
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

11.500

Current (A)

10.800
10.100
9.400
8.700
8.000
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

Outdoor Temperature (°C)

--- Page 307 ---
20.2 Heating Capacity Table
20.2.1 WH-WDG05LE5
Water Out (°C)

25

35

45

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

-25

2600

1580

7.0

2450

1760

7.8

3800

2300

10.2

-20

4900

2010

8.9

4700

2190

9.7

4500

2370

10.5

-15

5000

1750

7.8

5000

1940

8.6

5000

2310

10.2

-7

5000

1370

6.1

5000

1660

7.4

5000

1940

8.6

2

5000

1120

5.0

5000

1420

6.3

5000

1710

7.6

7

5000

760

3.4

5000

990

4.4

5000

1270

5.6

25

5000

370

1.8

5000

600

2.9

5000

860

3.8

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

-25

3600

2460

10.9

-

-

-

-

-

-

-20

4250

2570

11.4

-

-

-

-

-

-

-15

5000

2630

11.7

4600

2880

12.8

-

-

-

-7

5000

2360

10.5

5000

2620

11.6

4300

2870

12.7

2

5000

2140

9.5

5000

2540

11.3

4600

2760

12.2

7

5000

1630

7.2

5000

2030

9.0

4700

2570

11.4

25

5000

1100

4.9

5000

1470

6.5

4700

1990

8.8

Water Out (°C)

55

65

75

20.2.2 WH-WDG07LE5
Water Out (°C)

25

35

45

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

-25

3150

2020

9.0

4750

2530

11.2

4300

2660

11.8

-20

5500

2390

10.6

5500

2560

11.4

5100

2750

12.2

-15

6000

2200

9.8

6000

2500

11.1

5500

2600

11.5

-7

5600

1640

7.3

5800

1930

8.6

5800

2320

10.3

2

6850

1600

7.1

6850

2000

8.9

6600

2340

10.4

7

7000

1100

4.9

7000

1420

6.3

7000

1900

8.4

25

7000

500

2.4

7000

810

3.7

7000

1230

5.5

Water Out (°C)

55

65

75

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

-25

3950

2780

12.3

-

-

-

-

-

-

-20

4900

2970

13.2

-

-

-

-

-

-

-15

5200

2890

12.8

4800

3000

13.3

-

-

-

-7

5800

2740

12.2

5700

3160

14.0

4800

3560

15.8

2

6250

2670

11.8

5600

2800

12.4

5000

3130

13.9

7

7000

2350

10.4

6600

2850

12.6

6300

3400

15.1

25

7000

1650

7.3

7000

2060

9.1

7000

2800

12.4

--- Page 308 ---
20.2.3 WH-WDG09LE5
Water Out (°C)

25

35

45

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

-25

6400

3120

13.8

6050

3430

15.2

5250

3280

14.6

-20

7200

3200

14.2

7000

3560

15.8

6200

3500

15.5

-15

7600

2920

13.0

7400

3200

14.2

6800

3400

15.1

-7

7000

2150

9.5

7000

2500

11.1

7000

2980

13.2

2

7000

1650

7.3

7000

2050

9.1

7000

2500

11.1

7

9000

1580

7.0

9000

1980

8.8

9000

2580

11.4

25

9000

850

3.8

9000

1280

5.7

9000

1730

7.7

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

-25

4650

3150

14.0

-

-

-

-

-

-

-20

5600

3430

15.2

-

-

-

-

-

-

-15

6300

3550

15.7

5600

3550

15.7

-

-

-

-7

7000

3290

14.6

6500

3530

15.7

5400

3560

15.8

2

7000

2900

12.9

6700

3350

14.9

5700

3400

15.1

7

8900

2940

13.0

8900

3560

15.8

7300

3560

15.8

25

9000

2200

9.8

9000

2700

12.0

8000

2900

12.9

Water Out (°C)

55

65

308

75

--- Page 309 ---
20.3 Cooling Capacity Table
20.3.1 WH-WDG05LE5
Water Out (°C)

7

14

18

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

16

6000

1010

4.5

7500

1050

4.7

6000

670

3.0

25

5700

1200

5.3

7000

1200

5.3

5700

780

3.5

35

5000

1550

6.9

6300

1440

6.4

5000

1000

4.4

43

4500

1600

7.1

5600

1640

7.3

4500

1120

5.0

20.3.2 WH-WDG07LE5
Water Out (°C)

7

14

18

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

16

7000

1360

6.0

8500

1390

6.2

8000

1040

4.6

25

7000

1650

7.3

8000

1570

7.0

7500

1180

5.2

35

7000

2310

10.2

8000

2260

10.0

7000

1480

6.6

43

6000

2500

11.1

7000

2600

11.5

5700

1700

7.5

20.3.3 WH-WDG09LE5
Water Out (°C)

7

14

18

Outdoor Air (°C)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

Capacity
(W)

Input Power
(W)

Current
(A)

16

9000

2000

8.9

11000

2120

9.4

11000

1800

8.0

25

9000

2500

11.1

11000

2600

11.5

10000

1850

8.2

35

8200

2910

12.9

10000

3100

13.8

9000

2150

9.5

43

6400

2670

11.8

7400

2700

12.0

8200

2500

11.1

--- Page 310 ---
21. Exploded View and Replacement Parts List
21.1 Indoor Unit
21.1.1 WH-ADC0509L3E51
12
39
34
87
78
62
55

61

60

86

54

43

57

77

33

88

16

80

53

27

73
74

65

71
59

46

63
135

49

64

PUMP
WIRE

51

79
11

52

41

42

22
21
19

22

7

13
20

38

21

10

19
18

14

17

24
15

5

26
8

5

25
2

9
1

6

3

23

4

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.
310

6
6

5

28

29

--- Page 311 ---
OI

145

146

II

137

40
94

37

148

30
92

149
93
32

32

91

35

40

32
31
90
149

32

84

89

32

138

144

139

130

136

142

83
132

143

36

140
85
131

133
96

141

134

97

147

32
57
102

32

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

311

98

--- Page 312 ---
104

126

119

127

126
129

123

108

128

69
116
103

115
107
124

(50)

126
125
114

126
111

109

122

110
122 121

120 118

126
117

126
113

112

105

106

106

105

106

105

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

312

127

--- Page 313 ---
56

57

58

47

48

50

44

68

45

81
66
58

67

70

69 x2

72
75
95
58

BOTTOM
81

5

82

6

44

44

45
45

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

313

76

--- Page 314 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E51

1

CHASSIS - COMPLETE

1

ACXD50C04840

2

TUBE CONNECTER

1

ACXT29-02570

3

PACKING

1

ACXB81-07070

4

NUT

1

ACXH56-01370

5

PACKING

7

ACXB81-00010

6

RETAINING RING

7

H581007

7

TANK COMPLETE

1

ACXB56C01530

8

FOAMED POLYSTYRENE

1

ACXG07-07690

9

FOAMED POLYSTYRENE

1

ACXG07-07700

10

FOAMED POLYSTYRENE

1

ACXG07-09260

11

FOAMED POLYSTYRENE

1

ACXG07-09270

12

FOAMED POLYSTYRENE

1

ACXG07-07731

13

FOAMED POLYSTYRENE

2

ACXG07-07740

14

FOAMED POLYSTYRENE

3

ACXG07-07750

15

U-SHAPED PLATE

3

ACXD62-02690

16

CAP

1

H521306

17

SCREW

3

H551029J

18

SENSOR - COMPLETE

1

ACXA50C18700

19

PARTICULAR PIECE

2

D934023

20

NUT

4

H561116

21

STRAIGHT TUBE

2

T102044

22

PLATE SPRING

2

H711010

23

COCK - COMPLETE

1

ACXB65C00111

24

SOCKET

1

ACXT27-00090

25

SOCKET

1

ACXT27-00020

26

VALVE BODY [RBM SAFETY VALVE]

1

ACXB62-00920

27

TUBE ASSY - COMPLETE

1

ACXT00C40900

28

SOCKET

3

T271092

29

TUBE ASSY

1

ACXT00-77551

30

L-SHAPED PLATE [LEFT REAR PILLAR]

1

ACXD60-05190

31

L-SHAPED PLATE [RIGHT REAR PILLAR]

1

ACXD60-05200

32

SCREW

14

H551040J

33

CONNECTING BAR

1

ACXE26-02841

34

SCREW

2

H551217

35

U-SHAPED PLATE [LEFT FRONT PILLAR]

1

ACXD62-03070

36

U-SHAPED PLATE [RIGHT FRONT PILLAR]

1

ACXD62-03080

37

L-SHAPED PLATE

1

ACXD60-04532

38

U-SHAPED PLATE [RIGHT MIDDLE BEAM]

1

ACXD62-02390CZ

39

CONNECTING BAR

1

ACXE26-02851

40

U-SHAPED PLATE

2

ACXD62-02720

41

RECEIVER

1

ACXB14-00720

314

REMARK

O

O

O

O

--- Page 315 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E51

REMARK

42

PARTICULAR PLATE

1

ACXD90-26060CZ

43

TUBE ASSY - COMPLETE

1

ACXT00C45260

44

PACKING

3

ACXB81-06910

45

RETAINING RING

3

ACXH58-00370

46

FILTER COMPLETE

1

ACXB51C00170

47

RETAINING RING

1

H581038

48

PACKING

1

ACXB81-06810

49

TUBE ASSY - COMPLETE

1

ACXT00C45481

50

PACKING

1

B811179

51

PUMP

1

ACXB53-00850

O

52

V-COIL [FERRITE CORE]

1

A431122

O

53

TUBE ASSY - COMPLETE

1

ACXT00C45380

54

TUBE ASSY - COMPLETE

1

ACXT00C45390

55

VALVE BODY [FLOW SENSOR]

1

ACXB62-00932

O

56

LEAD WIRE - COMPLETE (FLWSEN)

1

ACXA60C82910

O

57

BAND

3

H88000

58

BAND

3

4605004

59

HEATER ASSY

1

ACXA34K00480

60

SOUND PROOF MATERIAL

1

ACXG30-10530CZ

61

VALVE BODY - COMPLETE [AIR PURGE]

1

ACXB62C01130

62

PACKING

1

ACXB81-00020

63

THERMOSTAT

2

ACXA15-00260

64

U-SHAPED PIECE

1

D721031

65

MACHINE SCREW & WASHER ASSY

4

XYN3+C5FJ

66

LEAD WIRE - COMPLETE (HEAT-OLP1)

1

ACXA60C93670

O

67

LEAD WIRE - COMPLETE (HEAT-CON)

1

ACXA60C93680

O

68

CAP

2

H521215

69

MACHINE SCREW & WASHER ASSY

3

XYN4DC8FJ

70

BAND

2

H881137

71

HEATER ATTACHMENT PLATE

1

ACXD56-00240

72

SCREW

2

H55293J

73

TUBE ASSY - COMPLETE

1

ACXT00C37270

74

VALVE BODY [PRESSURE TRANSDUCER]

1

ACXB62-01110

75

WIRE SPRING

1

ACXH72-00341

76

LEAD WIRE - COMPLETE (SENS-CN)

1

ACXA60C93661

O

77

VALVE BODY [3-WAY VALVE]

1

ACXB62-00092

O

78

TUBE ASSY - COMPLETE

1

ACXT00C45370

79

TUBE ASSY - COMPLETE

1

ACXT00C45320

80

TUBE ASSY - COMPLETE

1

ACXT00C41030

81

PLATE SPRING

2

H711019

82

SENSOR - COMPLETE

1

ACXA50C19160

315

O

O

O

O

O

O

--- Page 316 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E51

REMARK

83

CONNECTING BAR

1

ACXE26-02860

84

CONNECTING BAR

1

ACXE26-02870

85

CONNECTING BAR

1

ACXE26-02880

86

PARTICULAR PIECE

2

ACXD93-25020

87

PARTICULAR PIECE

3

ACXD93-25030

88

PARTICULAR PIECE

1

ACXD93-25040

89

CABINET SIDE PLATE [RIGHT]

1

ACXE04-14380A

90

CABINET REAR PLATE

1

ACXE02-03790

91

PACKING

1

ACXB81-00030

92

PACKING

1

ACXB81-00040

93

SCREW

4

ACXH55-07220

94

HANDLE

2

ACXE16-00300

95

LEAD WIRE - COMPLETE (CON-PUMP)

1

ACXA60C73630

O

96

CONTROL BOARD

1

ACXH10-09860

O

97

ELECTRONIC CONTROLLER

1

ACXA74C20720

O

98

LEAD WIRE - COMPLETE (AC2-L3)

1

ACXA60C94310

O

102

LEAD WIRE - COMPLETE (CN8-CN9)

1

ACXA60C96530

O

103

LEAD WIRE - COMPLETE (L1-L2)

1

A68C1161

O

104

LEAD WIRE - COMPLETE (AC1-N)

1

ACXA61C09090

O

105

SPACER

8

H54294

106

SPACER

9

H54295

107

REACTOR

1

G0C103Z00003

108

SELF TAPPING SCREW

1

XTB4+8FFJ

109

CIRCUIT BREAKER

1

K5KYYAY00003

O

110

CIRCUIT BREAKER

1

ACXA18-00011

O

111

SELF TAPPING SCREW

4

XTN4+25CFJ

112

U-SHAPED PIECE

1

D721014

113

SELF TAPPING SCREW

1

XTT4+8CFJ

114

TERMINAL BOARD ASSY

1

A28K1217

115

SELF TAPPING SCREW

1

XTT4+12CFJ

116

LEAD WIRE - COMPLETE (WIRE1)

1

ACXA60C96540

117

WASHER

3

H571044

118

MACHINE SCREW & WASHER ASSY

3

XYN5DC10FJ

119

SELF TAPPING SCREW

3

XTT4+8FFJ

120

HOLDER - P.S. CORD

3

H31103

121

SHEET

3

H86450

122

SELF TAPPING SCREW

6

XTT4+25DFJ

123

WASHER

1

H57094

124

HOLDER - P.S. CORD

3

H31042

125

A-PIECE

3

D77001

126

BAND

8

4605011

316

O

O

O

--- Page 317 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E51

REMARK

127

BAND

2

4605009

128

HINGE

2

H611006

129

L-PIECE

2

ACXD70-02300

130

CONTROL BOARD COVER

1

ACXH13-09290

131

BOX SHAPED PLATE

1

ACXD66-03961

132

SELF TAPPING SCREW

1

XTB4+8CFJ

133

HOLDER - P.S. CORD

1

ACXH31-00210

134

PACKING

1

B811177

135

TERMINAL COVER

1

H171051

136

WIRING DIAGRAM

1

ACXF29-00880

137

CABINET TOP PLATE

1

ACXE03-04930

138

REMOTE CONTROL SWITCH - COMPLETE

1

ACXA75C23211

O

139

LEAD WIRE - COMPLETE (REMOTE)

1

ACXA60C93691

O

140

BOX SHAPED PLATE

1

ACXD66-03970

141

CABINET FRONT PLATE

1

ACXE06-05780A

142

PACKING

1

ACXB81-07400

143

DECORATION BASE ASSY

1

ACXE35K03630

144

DECORATION BASE ASSY

1

ACXE35K03640

145

OPERATING INSTRUCTION - COMPLETE

1

ACXF55C32270

146

INSTALLATION INSTRUCTION COMPLETE

1

ACXF60C21470

147

MODEL LABEL

2

ACXF87-52080

148

CABINET SIDE PLATE [LEFT]

1

ACXE04-14370A

149

BRACKET - UNIT MOUNTING COMPLETE

2

ACXD57C00450

Note:
 All parts are supplied from PHVACCZ, Czech (Vendor Code: 00029407).
 “O” marked parts are recommended to be kept in stock.

--- Page 318 ---
21.1.2 WH-ADC0509L3E5UK1
12
39
34
87
78

33

88
62
55

61

60

54

43

57

77

86
80

53

27

73
74

65

71
59

46

63
135

49

64

PUMP
WIRE

51

79
11

52

41

42

22
21
19

22

7

13
20

38

21

10

19
18

14

17
15

5

26

5

8
2
9
1

6

3

23

4

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

318

6
6

5

28

29

--- Page 319 ---
OI

145

146

II

137

40
94

37

148

30
92

149
93
32

32

91

35

40

32
31
90
149

32

84

89

32

138

144

139

130

136

142

83
132

143

36

140
85
131

133
96

141

134

97

147

32
57
102

32

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

319

98

--- Page 320 ---
104

126

119

127

126
129

123

108

128

69
116
103

115
107
124

(50)

126
125
114

126
111

109

122

110
122 121

120 118

126
117

126
113

112

105

106

106

105

106

105

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

320

127

--- Page 321 ---
56

57

58

47

48

50

44

68

45

81
66
58

67

70

69 x2

72
75
95
58

BOTTOM
81

5

82

6

44

44

45
45

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

321

76

--- Page 322 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E5UK1

REMARK

1

CHASSIS - COMPLETE

1

ACXD50C04840

2

TUBE CONNECTER

1

ACXT29-02600

3

PACKING

1

ACXB81-07070

4

NUT

1

ACXH56-01370

5

PACKING

7

ACXB81-00010

6

RETAINING RING

7

H581007

7

TANK COMPLETE

1

ACXB56C01530

8

FOAMED POLYSTYRENE

1

ACXG07-07690

9

FOAMED POLYSTYRENE

1

ACXG07-07700

10

FOAMED POLYSTYRENE

1

ACXG07-09260

11

FOAMED POLYSTYRENE

1

ACXG07-09270

12

FOAMED POLYSTYRENE

1

ACXG07-07731

13

FOAMED POLYSTYRENE

2

ACXG07-07740

14

FOAMED POLYSTYRENE

3

ACXG07-07750

15

U-SHAPED PLATE

3

ACXD62-02690

17

SCREW

3

H551029J

18

SENSOR - COMPLETE

1

ACXA50C18700

19

PARTICULAR PIECE

2

D934023

20

NUT

4

H561116

21

STRAIGHT TUBE

2

T102044

22

PLATE SPRING

2

H711010

23

COCK - COMPLETE

1

ACXB65C00111

O

26

VALVE BODY [RBM SAFETY VALVE]

1

B621135

O

27

TUBE ASSY - COMPLETE

1

ACXT00C40900

28

SOCKET

3

T271092

29

TUBE ASSY

1

ACXT00-77930

30

L-SHAPED PLATE [LEFT REAR PILLAR]

1

ACXD60-05190

31

L-SHAPED PLATE [RIGHT REAR PILLAR]

1

ACXD60-05200

32

SCREW

14

H551040J

33

CONNECTING BAR

1

ACXE26-02841

34

SCREW

2

H551217

35

U-SHAPED PLATE [LEFT FRONT PILLAR]

1

ACXD62-03070

36

U-SHAPED PLATE [RIGHT FRONT PILLAR]

1

ACXD62-03080

37

L-SHAPED PLATE

1

ACXD60-04532

38

U-SHAPED PLATE [RIGHT MIDDLE BEAM]

1

ACXD62-02390CZ

39

CONNECTING BAR

1

ACXE26-02851

40

U-SHAPED PLATE

2

ACXD62-02720

41

RECEIVER

1

ACXB14-00720

42

PARTICULAR PLATE

1

ACXD90-26060CZ

43

TUBE ASSY - COMPLETE

1

ACXT00C45260

44

PACKING

3

ACXB81-06910

322

O

O

--- Page 323 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E5UK1

REMARK

45

RETAINING RING

3

ACXH58-00370

46

FILTER COMPLETE

1

ACXB51C00170

47

RETAINING RING

1

H581038

48

PACKING

1

ACXB81-06810

49

TUBE ASSY - COMPLETE

1

ACXT00C45481

50

PACKING

1

B811179

51

PUMP

1

ACXB53-00850

O

52

V-COIL [FERRITE CORE]

1

A431122

O

53

TUBE ASSY - COMPLETE

1

ACXT00C45380

54

TUBE ASSY - COMPLETE

1

ACXT00C45390

55

VALVE BODY [FLOW SENSOR]

1

ACXB62-00932

O

56

LEAD WIRE - COMPLETE (FLWSEN)

1

ACXA60C82910

O

57

BAND

3

H88000

58

BAND

3

4605004

59

HEATER ASSY

1

ACXA34K00480

60

SOUND PROOF MATERIAL

1

ACXG30-10530CZ

61

VALVE BODY - COMPLETE [AIR PURGE]

1

ACXB62C01130

62

PACKING

1

ACXB81-00020

63

THERMOSTAT

2

ACXA15-00260

64

U-SHAPED PIECE

1

D721031

65

MACHINE SCREW & WASHER ASSY

4

XYN3+C5FJ

66

LEAD WIRE - COMPLETE (HEAT-OLP1)

1

ACXA60C93670

O

67

LEAD WIRE - COMPLETE (HEAT-CON)

1

ACXA60C93680

O

68

CAP

2

H521215

69

MACHINE SCREW & WASHER ASSY

3

XYN4DC8FJ

70

BAND

2

H881137

71

HEATER ATTACHMENT PLATE

1

ACXD56-00240

72

SCREW

2

H55293J

73

TUBE ASSY - COMPLETE

1

ACXT00C37270

74

VALVE BODY [PRESSURE TRANSDUCER]

1

ACXB62-01110

75

WIRE SPRING

1

ACXH72-00341

76

LEAD WIRE - COMPLETE (SENS-CN)

1

ACXA60C93661

O

77

VALVE BODY [3-WAY VALVE]

1

ACXB62-00092

O

78

TUBE ASSY - COMPLETE

1

ACXT00C45370

79

TUBE ASSY - COMPLETE

1

ACXT00C45320

80

TUBE ASSY - COMPLETE

1

ACXT00C41030

81

PLATE SPRING

2

H711019

82

SENSOR - COMPLETE

1

ACXA50C19160

83

CONNECTING BAR

1

ACXE26-02860

84

CONNECTING BAR

1

ACXE26-02870

85

CONNECTING BAR

1

ACXE26-02880

323

O

O

O

O

O

O

--- Page 324 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E5UK1

REMARK

86

PARTICULAR PIECE

2

ACXD93-25020

87

PARTICULAR PIECE

3

ACXD93-25030

88

PARTICULAR PIECE

1

ACXD93-25040

89

CABINET SIDE PLATE [RIGHT]

1

ACXE04-14380A

90

CABINET REAR PLATE

1

ACXE02-03980

91

PACKING

1

ACXB81-00030

92

PACKING

1

ACXB81-00040

93

SCREW

4

ACXH55-07220

94

HANDLE

2

ACXE16-00300

95

LEAD WIRE - COMPLETE (CON-PUMP)

1

ACXA60C73630

O

96

CONTROL BOARD

1

ACXH10-09860

O

97

ELECTRONIC CONTROLLER

1

ACXA74C20730

O

98

LEAD WIRE - COMPLETE (AC2-L3)

1

ACXA60C94310

O

102

LEAD WIRE - COMPLETE (CN8-CN9)

1

ACXA60C96530

O

103

LEAD WIRE - COMPLETE (L1-L2)

1

A68C1161

O

104

LEAD WIRE - COMPLETE (AC1-N)

1

ACXA61C09090

O

105

SPACER

8

H54294

106

SPACER

9

H54295

107

REACTOR

1

G0C103Z00003

108

SELF TAPPING SCREW

1

XTB4+8FFJ

109

CIRCUIT BREAKER

1

K5KYYAY00003

O

110

CIRCUIT BREAKER

1

ACXA18-00011

O

111

SELF TAPPING SCREW

4

XTN4+25CFJ

112

U-SHAPED PIECE

1

D721014

113

SELF TAPPING SCREW

1

XTT4+8CFJ

114

TERMINAL BOARD ASSY

1

A28K1217

115

SELF TAPPING SCREW

1

XTT4+12CFJ

116

LEAD WIRE - COMPLETE (WIRE1)

1

ACXA60C96540

117

WASHER

3

H571044

118

MACHINE SCREW & WASHER ASSY

3

XYN5DC10FJ

119

SELF TAPPING SCREW

3

XTT4+8FFJ

120

HOLDER - P.S. CORD

3

H31103

121

SHEET

3

H86450

122

SELF TAPPING SCREW

6

XTT4+25DFJ

123

WASHER

1

H57094

124

HOLDER - P.S. CORD

3

H31042

125

A-PIECE

3

D77001

126

BAND

8

4605011

127

BAND

2

4605009

128

HINGE

2

H611006

129

L-PIECE

2

ACXD70-02300

324

O

O

O

--- Page 325 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-ADC0509L3E5UK1

REMARK

130

CONTROL BOARD COVER

1

ACXH13-09290

131

BOX SHAPED PLATE

1

ACXD66-03961

132

SELF TAPPING SCREW

1

XTB4+8CFJ

133

HOLDER - P.S. CORD

1

ACXH31-00210

134

PACKING

1

B811177

135

TERMINAL COVER

1

H171051

136

WIRING DIAGRAM

1

ACXF29-00880

137

CABINET TOP PLATE

1

ACXE03-04930

138

REMOTE CONTROL SWITCH - COMPLETE

1

ACXA75C23211

O

139

LEAD WIRE - COMPLETE (REMOTE)

1

ACXA60C93691

O

140

BOX SHAPED PLATE

1

ACXD66-03970

141

CABINET FRONT PLATE

1

ACXE06-05780A

142

PACKING

1

ACXB81-07400

143

DECORATION BASE ASSY

1

ACXE35K03630

144

DECORATION BASE ASSY

1

ACXE35K03640

145

OPERATING INSTRUCTION - COMPLETE

1

ACXF55C32280

146

INSTALLATION INSTRUCTION COMPLETE

1

ACXF60C21480

147

MODEL LABEL

2

ACXF87-52100

148

CABINET SIDE PLATE [LEFT]

1

ACXE04-14370A

149

BRACKET - UNIT MOUNTING COMPLETE

2

ACXD57C00450

Note:
 All parts are supplied from PHVACCZ, Czech (Vendor Code: 00029407).
 “O” marked parts are recommended to be kept in stock.

--- Page 326 ---
21.2 Outdoor Unit
For WH-WDG05LE5

For WH-WDG07LE5

90

90

70

For WH-WDG09LE5

90

76

84

87

81

70

62

69

93

28
63

64

68
77
69

66 65

30
79
69
97
77

67

72
82

86

83

96

80

95

74
78

75
85

27

73

29

94
71

72
69
91
1

92

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

--- Page 327 ---
44
10

41
50

39

57

88

11

89

43
41
45
44
42

35

38

For
WH-WDG09LE5

46

37
37

34

47

22

54

24

49

40

33

23

48

36

34

55

58

34
53

21
52
51

60

42

61

31

8

32

9

18

59

15

19

12

7

9
56

26

6

17

7

5

16

20
5

4
13

25
3

2

14
1

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

--- Page 328 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-WDG05LE5

WH-WDG07LE5

REMARK
O

1

BASE PAN ASSY

1

ACXD52K05240

←

2

O-RING (COMPRESSOR)

4

B811017

←

3

ANTI - VIBRATION BUSHING

4

ACXH50-00480

←

4

FLAT PLATE ASSY

1

ACXD64K00031

←

5

NUT

4

H561049

←

6

O-RING (COMPRESSOR)

3

B811017

←

7

ANTI - VIBRATION BUSHING

3

H50055

←

8

COMPRESSOR

1

ACXB09-09340

←

9

NUT

3

H561049

←

10

CONDENSER COMPLETE

1

ACXB32C27490

←

O

11

MANIFOLD TUBE ASSY

1

ACXT07K10850

←

O

12

HOT WATER COIL - COMPLETE

1

ACXB90C01860CZ

←

O

13

PARTICULAR PLATE

1

ACXD90-28980

←

O

14

PARTICULAR PLATE

1

ACXD90-28990

←

O

15

PARTICULAR PLATE

1

ACXD90-29010

←

O

16

FOAMED POLYSTYRENE

1

ACXG07-07800

←

O

17

EXPANTION VALVE

1

B051029

←

18

2-WAYS VALVE

1

ACXB02-03960

←

O

19

RECEIVER

1

ACXB14-00760

←

O

20

STRAINER

2

B111024

←

21

4-WAYS VALVE COMPLETE

1

ACXB00C03121

←

O

22

4-WAYS VALVE

1

ACXB00-01520

←

O

23

HIGH PRESSURE SENSOR

1

ACXA50-06450

←

O

24

HIGH PRESSURE SWITCH

1

ACXA10-00710

←

O

25

MULTIBENT TUBE

1

ACXT31-23920

←

O

26

HOSE BAND

1

4090023

←

27

SOUND PROOF MATERIAL

1

ACXG30-13340

←

O

28

SOUND - PROOF BOARD

1

ACXH15-03931

←

O

29

SOUND PROOF MATERIAL

1

ACXG30-13380

←

O

30

FIXED INDUCTORS

1

G0C392J00060

←

O

31

L-SHAPED TUBE

1

ACXT20-14160

←

O

32

O-RING (TUBE)

1

ACXB81-06910

←

O

33

L-SHAPED TUBE

1

ACXT20-14150

←

O

34

O-RING (TUBE)

2

ACXB81-06910

←

O

35

FILTER COMPLETE

1

ACXB51C00130

←

O

36

TUBE ASSY

1

ACXT00-78420

←

O

37

O-RING (PRESSURE RELIEF VALVE)

2

ACXB81-06820

←

O

38

RELIEF VALVE

1

ACXB62-00740

←

39

TUBE ASSY

1

ACXT00-78430

←

O

40

O-RING (PRESSURE RELIEF VALVE)

1

ACXB81-06820

←

O

41

TUBE CONNECTER

2

ACXT29-02620

←

O

42

O-RING (TUBE)

2

ACXB81-06910

←

O

328

O

O

--- Page 329 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-WDG05LE5

WH-WDG07LE5

REMARK
O

43

HOLDER - COUPLING

1

ACXH35-02320

←

44

PLUG

2

B821027

←

45

O-RING (PLUG)

2

ACXB81-06770

←

46

RETAINING RING

2

H581007

←

47

RETAINING RING

1

H581038

←

48

RETAINING RING

5

ACXH58-00370

←

49

SENSOR - CO. WATER IN OUT (CN-TH4)

1

ACXA50C18860

←

O

50

O-RING (SENSOR)

2

ACXB81-06780

←

O

51

O-RING (TERMINAL COVER)

1

ACXB81-07090

←

O

52

TERMINAL COVER COMPLETE

1

ACXH17C00091

←

O

53

NUT

2

ACXH56-00120

7080300J

54

SOUND PROOF MATERIAL

1

ACXG30-13360

←

O

55

V-COIL CO. (4 WAY VALVE)

1

ACXA43C07580

←

O

56

V-COIL CO. (EXPENSION VALVE)

1

ACXA43C07590

←

O

57

PARTICULAR PLATE

1

ACXD90-29000

←

O

58

SENSOR - CO. OUTDOOR DISCHARGE
(CN-DIS)

1

ACXA50C18870

←

O

59

SENSOR - CO. OUTDOOR HEAT & AMBIENT
(CN-TH1)

1

ACXA50C18880

←

O

60

SENSOR - CO. EVA OUTLET (CN-TH3)

1

ACXA50C18900

←

O

61

SENSOR - CO. REF TEMP (CN-TH4)

1

ACXA50C18910

←

O

62

FAN MOTOR BRACKET

1

ACXD54-05030

←

O

63

FAN MOTOR DC 120W 3PH

1

L6CAYYYL0195

←

O

64

FAN ASSY

1

ACXH03K01200

←

65

WASHER

1

H571075A

←

66

NUT

1

H561112A

←

67

CONTROL BOARD ASSY

1

ACXH10K03170

←

O

68

ELECTRONIC CONTROLLER - MAIN

1

ACXA70C00100

ACXA70C00110

O

69

O-RING (ELECTRONIC CO. - MAIN)

1

ACXB81-07210

←

O

70

SCREW

6

H551198

←

71

BOX SHAPED PLATE - CO. (LEADWIRE)

1

ACXD66C00710

←

O

72

O-RING (BOX SHAPE PLATE)

1

ACXB81-07140

←

O

73

SCREW

4

H551198

←

74

TERMINAL BOARD ASS’Y

1

A28K1213

←

75

SCREW

2

H551198

←

76

CONTROL BOARD COVER

1

ACXH13K00910

←

O

77

O-RING (CONTROL BOARD COVER)

1

ACXB81-07230

←

O

78

CONTROL BOARD COVER - COMPLETE

1

ACXH13C06430

←

O

79

CABINET SIDE PLATE - COMPLETE

1

ACXE04C08840

←

O

80

HANDLE

1

ACXE16-00230G

←

O

81

CABINET SIDE PLATE

1

ACXE04-13370

←

O

82

CABINET FRONT PLATE - COMPLETE

1

ACXE06-05250

←

O

83

HANDLE

1

ACXE16-00230G

←

O

--- Page 330 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-WDG05LE5

WH-WDG07LE5

REMARK

84

CABINET TOP PLATE - COMPLETE

1

ACXE03C02370

←

O

85

CABINET FRONT PLATE - COMPLETE

1

ACXE06C04900

←

O

86

HANDLE

1

ACXE16-00230G

←

O

87

ACCESSORY - COMPLETE

1

ACXH82C24921

←

O

88

INDICATION LABEL

1

ACXF71-17601

←

O

89

INDICATION LABEL

1

ACXF71-17611

←

O

90

MODEL LABEL

2

ACXF87-13521

ACXF87-13531

O

91

DISCHARGE GRILLE - COMPLETE

1

ACXE20C08791

←

O

92

DISCHARGE GRILLE - COMPLETE

1

ACXE20C08801

←

O

93

BAG

1

ACXG86-04431

←

94

BASE BOARD - COMPLETE

1

ACXG62C02960

←

O

95

SHOCK ABSORBER

1

ACXG70-15320

←

O

96

SHOCK ABSORBER

1

ACXG70-15330

←

O

97

C.C. CASE

1

ACXG50-63070

←

O

Note:
 All parts are supplied from PHVACCZ, Czech (Vendor Code: 00029407).
 “O” marked parts are recommended to be kept in stock.

--- Page 331 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-WDG09LE5

REMARK
O

1

BASE PAN ASSY

1

ACXD52K05240

2

O-RING (COMPRESSOR)

4

B811017

3

ANTI - VIBRATION BUSHING

4

ACXH50-00480

4

FLAT PLATE ASSY

1

ACXD64K00031

5

NUT

4

H561049

6

O-RING (COMPRESSOR)

3

B811017

7

ANTI - VIBRATION BUSHING

3

H50055

8

COMPRESSOR

1

ACXB09-09340

9

NUT

3

H561049

10

CONDENSER COMPLETE

1

ACXB32C27490

O

11

MANIFOLD TUBE ASSY

1

ACXT07K10850

O

12

HOT WATER COIL - COMPLETE

1

ACXB90C01880CZ

O

13

PARTICULAR PLATE

1

ACXD90-28980

O

14

PARTICULAR PLATE

1

ACXD90-28990

O

15

PARTICULAR PLATE

1

ACXD90-29010

O

16

FOAMED POLYSTYRENE

1

ACXG07-07800

O

17

EXPANTION VALVE

1

B051029

18

2-WAYS VALVE

1

ACXB02-03960

O

19

RECEIVER

1

ACXB14-00760

O

20

STRAINER

2

B111024

21

4-WAYS VALVE COMPLETE

1

ACXB00C03121

O

22

4-WAYS VALVE

1

ACXB00-01520

O

23

HIGH PRESSURE SENSOR

1

ACXA50-06450

O

24

HIGH PRESSURE SWITCH

1

ACXA10-00710

O

25

MULTIBENT TUBE

1

ACXT31-23920

O

26

HOSE BAND

1

4090023

27

SOUND PROOF MATERIAL

1

ACXG30-13340

O

28

SOUND - PROOF BOARD

1

ACXH15-03931

O

29

SOUND PROOF MATERIAL

1

ACXG30-13380

O

30

FIXED INDUCTORS

1

G0C392J00060

O

31

L-SHAPED TUBE

1

ACXT20-14160

O

32

O-RING (TUBE)

1

ACXB81-06910

O

33

L-SHAPED TUBE

1

ACXT20-14150

O

34

O-RING (TUBE)

1

ACXB81-06910

O

35

FILTER COMPLETE

1

ACXB51C00130

O

36

TUBE ASSY

1

ACXT00-78420

O

37

O-RING (PRESSURE RELIEF VALVE)

2

ACXB81-06820

O

38

RELIEF VALVE

1

ACXB62-00740

39

TUBE ASSY

1

ACXT00-78430

O

40

O-RING (PRESSURE RELIEF VALVE)

1

ACXB81-06820

O

41

TUBE CONNECTER

2

ACXT29-02620

O

42

O-RING (TUBE)

2

ACXB81-06910

O

43

HOLDER - COUPLING

1

ACXH35-02320

O

331

O

O

--- Page 332 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-WDG09LE5

REMARK

44

PLUG

2

ACXH35-02320

45

O-RING (PLUG)

2

ACXB81-06770

46

RETAINING RING

2

H581007

47

RETAINING RING

1

H581038

48

RETAINING RING

5

ACXH58-00370

49

SENSOR - CO. WATER IN OUT (CN-TH4)

1

ACXA50C18860

O

50

O-RING (SENSOR)

2

ACXB81-06780

O

51

O-RING (TERMINAL COVER)

1

ACXB81-07090

O

52

TERMINAL COVER COMPLETE

1

ACXH17C00091

O

53

NUT

2

H561049

54

SOUND PROOF MATERIAL

1

ACXG30-13360

O

55

V-COIL CO. (4 WAY VALVE)

1

ACXA43C07580

O

56

V-COIL CO. (EXPENSION VALVE)

1

ACXA43C07590

O

57

PARTICULAR PLATE

1

ACXD90-29000

O

58

SENSOR - CO. OUTDOOR DISCHARGE (CN-DIS)

1

ACXA50C18870

O

59

SENSOR - CO. OUTDOOR HEAT & AMBIENT
(CN-TH1)

1

ACXA50C18880

O

60

SENSOR - CO. EVA OUTLET (CN-TH3)

1

ACXA50C18900

O

61

SENSOR - CO. REF TEMP (CN-TH4)

1

ACXA50C18910

O

62

FAN MOTOR BRACKET

1

ACXD54-05030

O

63

FAN MOTOR DC 120W 3PH

1

L6CAYYYL0195

O

64

FAN ASSY

1

ACXH03K01200

65

WASHER

1

H571075A

66

NUT

1

H561112A

67

CONTROL BOARD ASSY

1

ACXH10K03170

O

68

ELECTRONIC CONTROLLER - MAIN

1

ACXA70C00120

O

69

O-RING (ELECTRONIC CO. - MAIN)

1

ACXB81-07210

O

70

SCREW

6

H551198

71

BOX SHAPED PLATE - CO. (LEADWIRE)

1

ACXD66C00710

O

72

O-RING (BOX SHAPE PLATE)

1

ACXB81-07140

O

73

SCREW

6

H551198

74

TERMINAL BOARD ASS’Y

1

A28K1213

75

SCREW

6

H551198

76

CONTROL BOARD COVER

1

ACXH13K00910

O

77

O-RING (CONTROL BOARD COVER)

1

ACXB81-07230

O

78

CONTROL BOARD COVER - COMPLETE

1

ACXH13C06430

O

79

CABINET SIDE PLATE - COMPLETE

1

ACXE04C08840

O

80

HANDLE

1

ACXE16-00230G

O

81

CABINET SIDE PLATE

1

ACXE04-13370

O

82

CABINET FRONT PLATE - COMPLETE

1

ACXE06-05250

O

83

HANDLE

1

ACXE16-00230G

O

84

CABINET TOP PLATE - COMPLETE

1

ACXE03C02370

O

85

CABINET FRONT PLATE - COMPLETE

1

ACXE06C04900

O

86

HANDLE

1

ACXE16-00230G

O

--- Page 333 ---
SAFETY

REF. NO.

DESCRIPTION & NAME

QTY.

WH-WDG09LE5

REMARK

87

ACCESSORY - COMPLETE

1

ACXH82C24921

O

88

INDICATION LABEL

1

ACXF71-17601

O

89

INDICATION LABEL

1

ACXF71-17611

O

90

MODEL LABEL

2

ACXF87-13541

O

91

DISCHARGE GRILLE - COMPLETE

1

ACXE20C08791

O

92

DISCHARGE GRILLE - COMPLETE

1

ACXE20C08801

O

93

BAG

1

ACXG86-04431

94

BASE BOARD - COMPLETE

1

ACXG62C02960

O

95

SHOCK ABSORBER

1

ACXG70-15320

O

96

SHOCK ABSORBER

1

ACXG70-15330

O

97

C.C. CASE

1

ACXG50-63070

O

Note:
 All parts are supplied from PHVACCZ, Czech (Vendor Code: 00029407).
 “O” marked parts are recommended to be kept in stock.

[PAPAMY] Printed in Malaysia
SB0425-0
