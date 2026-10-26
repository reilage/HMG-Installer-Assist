# Panasonic Service Manual – Air-to-Water Hydromodule + Tank K-series (indoor WH-ADC0309K0E5A; outdoor WH-UDZ03KE5, WH-UDZ05KE5, WH-UDZ07KE5, WH-UDZ09KE5), Order No PCZ2508021CE (2025)

<!-- Page markers added for citation; text extracted from the PDF Donal supplied on 26/10/2026, with table rows kept on one line (runs of spaces shortened). Check the PDF page before quoting a figure from a table or drawing. -->


--- Page 1 ---
Order No: PCZ2508021CE

   Air-to-Water Hydromodule + Tank
   Indoor Unit   Outdoor Unit
   WH-ADC0309K0E5A   WH-UDZ03KE5
   WH-UDZ05KE5
   WH-UDZ07KE5
   WH-UDZ09KE5

   Destination
   Europe
   UK

   WARNING
This service information is designed for experienced repair technicians only and is not designed for use by the general public.
It does not contain warnings or cautions to advise non-technical individuals of potential dangers in attempting to service a product.
Products powered by electricity should be serviced or repaired only by experienced professional technicians. Any attempt to
service or repair the products dealt with in this service information by anyone else could result in serious injury or death.

   IMPORTANT SAFETY NOTICE
 There are special components used in this equipment which are important for safety. These parts are marked by   in the Schematic
 Diagrams, Circuit Board Diagrams, Exploded Views and Replacement Parts List. It is essential that these critical parts should be
 replaced with manufacturer’s specified parts to prevent shock, fire or other hazards. Do not modify the original design without permission
 of manufacturer.

   PRECAUTION OF LOW TEMPERATURE
  In order to avoid frostbite, be assured of no refrigerant leakage during the installation or repairing of refrigerant circuit.

   CAUTION
R32 REFRIGERANT – This Air-to-Water Hydromodule + Tank contains and operates with refrigerant R32.
THIS PRODUCT MUST ONLY BE INSTALLED OR SERVICED BY QUALIFIED PERSONNEL.
Refer to National, State, Territory and local legislation, regulations, codes, installation & operation manuals, before the
installation, maintenance and/or service of this product.

   © Panasonic Corporation 2025


--- Page 2 ---
TABLE OF CONTENTS
   14.2 Water Pump .............................................. 157
1. Safety Precautions .............................................4
   14.3 Water Pressure Control ............................ 160
2. Precaution For Using R32 Refrigerant .............7   14.4 Indoor Unit Safety ..................................... 161
   14.5 Auto Restart Control ................................. 161
3. Specifications ...................................................12   14.6 Indication Panel ........................................ 161
   3.1   WH-ADC0309K0E5A WH-UDZ03KE5 .......12   14.7 Indoor Back-Up Heater Control ................ 162
   3.2   WH-ADC0309K0E5A WH-UDZ05KE5 .......16   14.8 Tank Heater Control.................................. 164
   3.3   WH-ADC0309K0E5A WH-UDZ07KE5 .......20   14.9 Base Pan Heater Control (Optional) ......... 165
   3.4   WH-ADC0309K0E5A WH-UDZ09KE5 .......24   14.10 Force Heater Mode ................................... 165
   14.11 Powerful Operation ................................... 167
4. Features.............................................................28   14.12 Quiet Operation......................................... 167
5. Location of Controls and Components ..........29   14.13 Sterilization Mode ..................................... 168
   14.14 Outdoor Ambient Thermo OFF Control .... 169
   5.1   Indoor Unit ...................................................29   14.15 Alternative Outdoor Ambient Sensor Control ..
   5.2   Outdoor Unit.................................................61   ................................................................. 169
6. Dimensions .......................................................62   14.16 Force DHW mode ..................................... 169
   14.17 SMART DHW mode .................................. 170
   6.1   Indoor Unit ...................................................62   14.18 DHW Capacity Setting .............................. 170
   6.2   Outdoor Unit.................................................63   14.19 Anti Freeze Control ................................... 171
7. Refrigeration and Water Cycle Diagram ........65   14.20 Solar Operation (Optional) ........................ 172
   14.21 Boiler Bivalent Control .............................. 173
8. Block Diagram ..................................................66   14.22 External Room Thermostat Control (Optional)
   8.1   WH-ADC0309K0E5A WH-UDZ03KE5 .......66   ................................................................. 175
   8.2   WH-ADC0309K0E5A WH-UDZ05KE5   14.23 Three Ways Valve Control ........................ 176
   WH-UDZ07KE5 WH-UDZ09KE5 ................67   14.24 Two Ways Valve Control........................... 177
   14.25 External OFF/ON Control ......................... 177
9. Wiring Connection Diagram ............................68   14.26 External Compressor Switch (Optional PCB) ..
   9.1   Indoor Unit ...................................................68   ................................................................. 178
   9.2   Outdoor Unit.................................................69   14.27 Heat/Cool Switch (Optional PCB) ............. 179
   14.28 SG Ready Control (Optional PCB) ........... 180
10. Electronic Circuit Diagram ..............................71   14.29 Demand Control (Optional PCB) .............. 182
   10.1 Indoor Unit ...................................................71   14.30 Holiday Mode ............................................ 182
   10.2 Outdoor Unit.................................................72   14.31 Dry Concrete ............................................. 183
   14.32 Flow Sensor .............................................. 183
11. Printed Circuit Board .......................................74
   15. Protection Control (WH-UDZ03KE5) ............ 184
   11.1 Indoor Unit ...................................................74
   11.2 Outdoor Unit.................................................76   15.1 Protection Control for All Operations ........ 184
   15.2 Protection Control for Heating Operation.........
12. Installation Instruction .....................................78   ................................................................. 186
   12.1 Indoor Floor Area Requirement ...................78   15.3 Protection Control for Cooling Operation .........
   12.2 Indoor Unit ...................................................81   ................................................................. 187
   12.3 Outdoor Unit.................................................93   16. Protection Control (WH-UDZ05KE5
   12.4 Appendix ......................................................99   WH-UDZ07KE5 WH-UDZ09KE5) .................. 188
   12.5 Service and Maintenance ..........................127
   16.1 Protection Control for All Operations ........ 188
13. Installation and Servicing Heat Pump using   16.2 Protection Control for Heating Operation.........
   R32 ...................................................................129   ................................................................. 190
   13.1 About R32 Refrigerant ...............................129   16.3 Protection Control for Cooling Operation .........
   13.2 Characteristics of R32 Refrigerant.............129   ................................................................. 191
   13.3 Refrigerant piping installation • Tools used in   17. Servicing Guide ............................................. 192
   services ......................................................131
   13.4 New installation, Relocation, Repairing of   17.1 How to Take Out Front Plate .................... 192
   Refrigerant Cycle System The Procedures .....   17.2 Test Run ................................................... 192
   ..................................................................135   17.3 Expansion Vessel ⑪ Pre Pressure Checking .
   13.5 Piping installation of R32 ...........................136   ................................................................. 192
   13.6 Installation and Service ..............................137   17.4 Pump Down Procedures ........................... 193
   13.7 Repairing of refrigerant cycle / Brazing point ...   17.5 How To Adjust Pump Speed ..................... 194
   ..................................................................140   17.6 How To Unlock Cool Mode ....................... 195
   17.7 EEPROM Factory Default Data Setup
14. Operation and Control ...................................146   Procedure ................................................. 196
   14.1 Basic Function ...........................................146   17.8 Dry Concrete Setup .................................. 197

   2


--- Page 3 ---
18. Maintenance Guide ........................................ 199
   18.1 Maintenance for Magnetic Water Filter Set .....
   .................................................................. 202
19. Troubleshooting Guide .................................. 205
   19.1 Refrigeration Cycle System ....................... 205
   19.2 Relationship between the Condition of the Air-
   to-Water Heatpump Indoor and Outdoor Units
   and Pressure and Electric Current ............ 206
   19.3 Breakdown Self Diagnosis Function .......... 207
   19.4 Error Codes Table ..................................... 209
   19.5 Self-diagnosis Method ............................... 211
20. Disassembly and Assembly Instructions .... 259
   20.1 To Remove Front Plate and Top Plate ...... 259
   20.2 To Remove Remote Control ...................... 260
   20.3 To Remove Electronic Controller............... 260
   20.4 To Remove Flow Sensor and Air Purge Valve
   .................................................................. 261
   20.5 To Remove Water Pump ........................... 261
   20.6 To Remove Water Filter ............................ 262
21. Technical Data ................................................ 263
   21.1 Operation Characteristics .......................... 263
   21.2 Heating Capacity Table ............................. 287
   21.3 Cooling Capacity Table ............................. 288
22. Exploded View and Replacement Parts List .....
   ......................................................................... 289
   22.1 Indoor Unit ................................................. 289
   22.2 Outdoor Unit .............................................. 299

      Specifications, designs and contents in this Service Manual are subject to change without notice.

   3


--- Page 4 ---
1. Safety Precautions
   Read the following “SAFETY PRECAUTIONS” carefully before installation of Air-To-Water Hydromodule + Tank
   (here after referred to as “Tank Unit”).
   Electrical works and water installation works must be done by licensed electrician and licensed water system
   installer respectively. Be sure to use the correct rating and main circuit for the model to be installed.
   The caution items stated here must be followed because these important contents are related to safety. The
   meaning of each indication used is as below. Incorrect installation due to ignorance or negligence of the
   instructions will cause harm or damage, and the seriousness is classified by the following indications.
   Please leave this installation manual with the unit after installation.

   WARNING   This indication shows the possibility of causing death or serious injury.

   CAUTION   This indication shows the possibility of causing injury or damage to properties only.

The items to be followed are classified by the symbols:

   Symbol with white background denotes item that is PROHIBITED.

   Symbol with dark background denotes item that must be carried out.

   Carry out test run to confirm that no abnormality occurs after the installation. Then, explain to user the operation,
   care and maintenance as stated in instructions. Please remind the customer to keep the operating instructions for
   future reference.
   If there is any doubt about the installation procedure or operation, always contact the authorized dealer for advice
   and information.

   WARNING
1. Do not use means to accelerate the defrosting process or to clean, other than those recommended by the manufacturer. Any unﬁt
   method or using incompatible material may cause product damage, burst and serious injury.
2. Do not install outdoor unit near handrail of veranda. When installing outdoor unit at veranda of high rise building, child may climb up to
   outdoor unit and cross over the handrail and causing accident.
3. Do not use unspecified cord, modified cord, joint cord or extension cord for power supply cord. Do not share the single outlet with other
   electrical appliances. Poor contact, poor insulation or over current will cause electrical shock or fire.
4. Do not tie up the power supply cord into a bundle by band. Abnormal temperature rise on power supply cord may happen.

5. Do not insert your ﬁngers or other objects into the unit, high speed rotating fan may cause injury.

6. Do not sit or step on the unit, you may fall down accidentally.

7. Keep plastic bag (packaging material) away from small children, it may cling to nose and mouth and prevent breathing.
8. When install or relocate outdoor unit, do not let any substance other than the speciﬁed refrigerant, e.g. air etc. mix into refrigerant cycle
   (piping). Mixing of air etc. will cause abnormal high pressure in refrigeration cycle and result in explosion, injury etc.
9. Do not use pipe wrench to install refrigerant piping. It might deform the piping and cause the unit to malfunction.

10. Do not purchase unauthorized electrical parts for installation, service, maintenance and etc.. They might cause electrical shock or fire.
11. Do not modify the wiring of outdoor unit for installation of other components (i.e. heater, etc). Overloaded wiring or wire connection
   points may cause electrical shock or ﬁre.
12. Do not pierce or burn as the appliance is pressurized. Do not expose the appliance to heat, ﬂame, sparks, or other sources of ignition.
   Else, it may explode and cause injury or death.
13. Do not add or replace refrigerant other than specified type. It may cause product damage, burst and injury etc.
14. Do not place containers with liquids on top of the Tank Unit. It may cause Tank Unit damage and/or fire could occurs if they leak or
   spill onto the Tank Unit.
15. Do not use joint cable for Tank Unit / Outdoor Unit connection cable. Use specified Tank Unit / Outdoor Unit connection cable, refer to
   instruction 12.2.4 CONNECT THE CABLE TO THE TANK UNIT and connect tightly for Tank Unit / Outdoor Unit connection. Clamp
   the cable so that no external force will be acted on the terminal. If connection or fixing is not perfect, it will cause heat up or fire at the
   connection.
16. Do not use joint cable for outdoor connection cable. Use speciﬁed outdoor connection cable, refer to instruction 12.3.6 CONNECT THE
   CABLE TO THE OUTDOOR UNIT and connect tightly for outdoor connection. Clamp the cable so that no external force will be acted
   on the terminal. If connection or ﬁxing is not perfect, it will cause heat up or ﬁre at the connection.
17. Wire routing must be properly arranged so that control board cover is ﬁxed properly. If control board cover is not ﬁxed perfectly, it will
   cause ﬁre or electrical shock.

   4


--- Page 5 ---
WARNING
18. For electrical work, follow the national regulation, legislation and this installation instructions. An independent circuit and single outlet
   must be used. If electrical circuit capacity is not enough or defect found in the electrical work, it will cause electrical shock or ﬁre.
19. For electrical work, follow local wiring standard, regulation and this installation instruction. An independent circuit and single outlet
   must be used. If electrical circuit capacity is not enough or defect found in electrical work, it will cause electrical shock or fire.
20. For water circuit installation work, follow to relevant European and national regulations (including EN61770) and local plumbing and
   building regulation codes.
21. Engage authorized dealer or specialist for installation. If installation done by the user is incorrect, it will cause water leakage, electrical
   shock or ﬁre.
22. Engage dealer or specialist for installation. If installation done by the user is defective, it will cause water leakage, electrical shock
   or fire.
23. • This is a R32 model, use piping, ﬂare nut and tools which is speciﬁed for R32 refrigerant. Using of existing (R22) piping, ﬂare nut
   and tools may cause abnormally high pressure in the refrigerant cycle (piping), and possibly result in explosion and injury.
   • Thickness for copper pipes used with R32 must be more than 0.8 mm. Never use copper pipes thinner than 0.8 mm.
   • It is desirable that the amount of residual oil is less than 40 mg/10 m.
24. When installing or relocating Tank Unit, do not let any substance other than the speciﬁed refrigerant, eg. air etc. mix into refrigeration
   cycle (piping). Mixing of air etc. will cause abnormal high pressure in refrigeration cycle and result in explosion, injury etc.
25. For refrigeration system work, install according to this installation instructions strictly. If installation is defective, it will cause water
   leakage, electrical shock or ﬁre.
26. Install at a strong and ﬁrm location which is able to withstand weight of the set. If the strength is not enough or installation is not
   properly done, the set will drop and cause injury.
27. This equipment is strongly recommended to be installed with Residual Current Device (RCD) on-site according to the respective
   national wiring rules or country-speciﬁc safety measures in terms of residual current.
28. During installation, install the refrigerant piping properly before running the compressor. Operation of compressor without ﬁxing
   refrigeration piping and valves at opened position will cause suck-in of air, abnormal high pressure in refrigeration cycle and result in
   explosion, injury etc.
29. During pump down operation, stop the compressor before removing the refrigeration piping. Removal of refrigeration piping while
   compressor is operating and valves are opened will cause suck-in of air, abnormal high pressure in refrigeration cycle and result in
   explosion, injury etc.
30. Tighten the ﬂare nut with torque wrench according to speciﬁed method. If the ﬂare nut is over tightened, after a long period, the ﬂare
   may break and cause refrigerant gas leakage.
31. After completion of installation, conﬁrm there is no leakage of refrigerant gas. It may generate toxic gas when the refrigerant contacts
   with ﬁre.
32. Ventilate if there is refrigerant gas leakage during operation. It may cause toxic gas when the refrigerant contacts with ﬁre.
33. Use the attached accessories parts and speciﬁed parts for installation. Otherwise, it will cause the set to fall, water leakage, ﬁre or
   electrical shock.
34. Only use the supplied or speciﬁed installation parts. Else, it may causes unit vibrate, fall, water leakage, electrical shock or ﬁre.

35. If there is any doubt about the installation procedure or operation, always contact the authorized dealer for advice and information.

36. Select a location where in case of water leakage, the leakage will not cause damage to other properties.
37. When installing electrical equipment at wooden building of metal lath or wire lath, in accordance with electrical facility standard, no
   electrical contact between equipment and building is allowed. Insulator must be installed in between.
38. Any work carried out on the Tank Unit after removing any panels which is secured by screws, must be carried out under the
   supervision of authorized dealer and licensed installation contractor.
39. This system is multi supply appliance. All circuits must be disconnected before accessing the unit terminals.
40. For cold water supply has a backﬂow regulator, check valve or water meter with check valve, provisions for thermal expansion of water
   in the hot water system must be provided. Otherwise it will cause water leakage.
41. The piping installation work must be ﬂushed before Tank Unit is connected to remove contaminants. Contaminants may damage the
   Tank Unit components.
42. This installation may be subjected to building regulation approval applicable to respective country that may require to notify the local
   authority before installation.
43. The Tank Unit must be shipped and stored in upright condition and dry environment. It may laid on its back when being moved into the
   building.
44. Work done to the Tank Unit after remove the front plate cover that secured by screws, must be carried out under the supervision of
   authorized dealer, licensed installation contractor, skilled person and instructed person.
45. Be aware that refrigerants may not contain an odour.
46. This equipment must be properly earthed. Earth line must not be connected to gas pipe, water pipe, earth of lightning rod and
   telephone. Otherwise, it may cause electrical shock in case of equipment breakdown or insulation breakdown.
47. This unit must be properly earthed. The electrical earth must not be connected to a gas pipe, water pipe, the earth of lightening rod or
   a telephone. Otherwise there is a danger of electrical shock in the event of an insulation breakdown or electrical earth fault in the
   outdoor unit.

   5


--- Page 6 ---
CAUTION
1. Do not install the Tank Unit at place where leakage of flammable gas may occur. In case gas leaks and accumulates at surrounding of
   the unit, it may cause fire.
2. Prevent liquid or vapor from entering sumps or sewers since vapor is heavier than air and may form suffocating atmospheres.
3. Do not release refrigerant during piping work for installation, re-installation and during repairing a refrigeration parts. Take care of the
   liquid refrigerant, it may cause frostbite.
4. Do not install this appliance in a laundry room or other high humidity location. This condition will cause rust and damage to the unit.
5. Make sure the insulation of power supply cord does not contact hot part (i.e. refrigerant piping, water piping) to prevent from insulation
   failure (melt).
6. Do not touch the sharp aluminium ﬁn, sharp parts may cause injury.
7. Do not apply excessive force to water pipes that may damage the pipes. If water leakage occurs, it will cause flooding and damage to
   other properties.
8. Do not transport the Tank Unit with water inside the unit. It may cause damage to the unit.
9. Carry out drainage piping as mentioned in installation instructions. If drainage is not perfect, water may enter the room and damage
   the furniture.
10. Select an installation location which is easy for maintenance.
   Incorrect installation, service or repair of this Tank Unit may increase the risk of rupture and this may result in loss damage or injury
   and/or property.
   Power supply connection to Tank Unit.
    Power supply point should be in easily accessible place for power disconnection in case of emergency.
    Must follow local national wiring standard, regulation and this installation instruction.
    Strongly recommended to make permanent connection to a circuit breaker.
   ■ For Tank Unit WH-ADC0309K0E5A:
11.   - Power Supply 1: For WH-UDZ03KE5* and WH-UDZ05KE5*, use approved 15/16A 2-poles circuit breaker with a minimum
   contact gap of 3.0mm.
   For WH-UDZ07KE5* and WH-UDZ09KE5*, use approved 25A 2-poles circuit breaker with a minimum
   contact gap of 3.0mm.
   - Power Supply 2 (Optional): Use approved 16A 2-poles circuit breaker with a minimum contact gap of 3.0mm (if Optional
   Back-up Heater CZ-NB3 installed).
12. Ensure the correct polarity is maintained throughout all wiring. Otherwise, it will cause electrical shock or fire.
13. After installation, check the water leakage condition in connection area during test run. If leakage occurs, it will cause damage to other
   properties.
14. If the Tank Unit not operates for long time, the water inside the Tank Unit should be drained.
15. Installation work.
   It may need three or more people to carry out the installation work. The weight of Tank Unit might cause injury if carried by one person.
16. Keep any required ventilation openings clear of obstruction.

   6


--- Page 7 ---
2. Precaution For Using R32 Refrigerant
   The basic installation work procedures are the same as conventional refrigerant (R410A, R22) models.
   However, pay careful attention to the following points:

   WARNING
   Since the working pressure is higher than that of refrigerant R22 models, some of the piping and installation and service tools
   are special.
   1.   Especially, when replacing a refrigerant R22 model with a new refrigerant R32 model, always replace the conventional piping
   and ﬂare nuts with the R32 and R410A piping and ﬂare nuts on the outdoor unit side.
   For R32 and R410A, the same ﬂare nut on the outdoor unit side and pipe can be used.
   The mixing of different refrigerants within a system is prohibited. Models that use refrigerant R32 and R410A have a different
   2.   charging port thread diameter to prevent erroneous charging with refrigerant R22 and for safety.
   Therefore, check beforehand. [The charging port thread diameter for R32 and R410A is 12.7 mm (1/2 inch).]
   Ensure that foreign matter (oil, water, etc.) does not enter the piping.
   3.
   Also, when storing the piping, securely seal the opening by pinching, taping, etc. (Handling of R32 is similar to R410A.)
   Operation, maintenance, repairing and refrigerant recovery should be carried out by trained and certiﬁed personnel in the use of
   4.   ﬂammable refrigerants and as recommended by the manufacturer. Any personnel conducting an operation, servicing or
   maintenance on a system or associated parts of the equipment should be trained and certiﬁed.
   Any part of refrigerating circuit (evaporators, air coolers, AHU, condensers or liquid receivers) or piping should not be located in
   5.
   the proximity of heat sources, open ﬂames, operating gas appliance or an operating electric heater.
   The user/owner or their authorized representative shall regularly check the alarms, mechanical ventilation and detectors, at
   6.
   least once a year, where as required by national regulations, to ensure their correct functioning.
   7.   A logbook shall be maintained. The results of these checks shall be recorded in the logbook.

   8.   In case of ventilations in occupied spaces shall be checked to conﬁrm no obstruction.
   Before a new refrigerating system is put into service, the person responsible for placing the system in operation should ensure
   that trained and certiﬁed operating personnel are instructed on the basis of the instruction manual about the construction,
   9.
   supervision, operation and maintenance of the refrigerating system, as well as the safety measures to be observed, and the
   properties and handling of the refrigerant used.
   The general requirement of trained and certiﬁed personnel are indicated as below:
   a) Knowledge of legislation, regulations and standards relating to ﬂammable refrigerants; and,
   b) Detailed knowledge of and skills in handling ﬂammable refrigerants, personal protective equipment, refrigerant leakage
   10.
   prevention, handling of cylinders, charging, leak detection, recovery and disposal; and,
   c) Able to understand and to apply in practice the requirements in the national legislation, regulations and Standards; and,
   d) Continuously undergo regular and further training to maintain this expertise.
   Air-to-Water Heatpump piping in the occupied space shall be installed in such a way to protect against accidental damage in
   11.
   operation and service.
   12.   Precautions shall be taken to avoid excessive vibration or pulsation to refrigerating piping.
   Ensure protection devices, refrigerating piping and fittings are well protected against adverse environmental effects (such as the
   13.
   danger of water collecting and freezing in relief pipes or the accumulation of dirt and debris).
   Expansion and contraction of long runs piping in refrigerating systems shall be designed and installed securely (mounted and
   14.
   guarded) to minimize the likelihood hydraulic shock damaging the system.
   15.   Protect the refrigerating system from accidental rupture due to moving furniture or reconstruction activities.
   To ensure no leaking, field-made refrigerant joints indoors shall be tightness tested. The test method shall have a sensitivity of
   16.   5 grams per year of refrigerant or better under a pressure of at least 0,25 times the maximum allowable pressure (>1.04MPa,
   max 4.15MPa). No leak shall be detected.

   7


--- Page 8 ---
CAUTION
   Installation (Space)
      Must ensure the installation of pipe-work shall be kept to a minimum. Avoid use dented pipe and do not allow acute
   bending.
      Must ensure that pipe-work shall be protected from physical damage.
      Must comply with national gas regulations, state municipal rules and legislation. Notify relevant authorities in accordance
   with all applicable regulations.
1.
      Must ensure mechanical connections be accessible for maintenance purposes.
      In cases that require mechanical ventilation, ventilation openings shall be kept clear of obstruction.
      When disposal of the product, do follow to the precautions in #12 and comply with national regulations.
      In case of ﬁeld charge, the effect on refrigerant charge caused by the different pipe length has to be quantiﬁed, measured
   and labelled.
      Always contact to local municipal ofﬁces for proper handling.
   Servicing
   2-1. Service personnel
      Any qualified person who is involved with working on or breaking into a refrigerant circuit should hold a current valid
   certificate from an industry-accredited assessment authority, which authorizes their competence to handle refrigerants
   safely in accordance with an industry recognized assessment specification.
      Servicing shall only be performed as recommended by the equipment manufacturer. Maintenance and repair requiring the
   assistance of other skilled personnel shall be carried out under the supervision of the person competent in the use of
   flammable refrigerants.
      Servicing shall be performed only as recommended by the manufacturer.
      The system is inspected, regularly supervised and maintained by a trained and certiﬁed service personnel who is employed
   by the person user or party responsible.
      Ensure the actual refrigerant charge is in accordance with the room size within which the refrigerant containing parts are
   installed.
      Ensure refrigerant charge not to leak.
   2-2. Work
      Prior to beginning work on systems containing flammable refrigerants, safety checks are necessary to ensure that the risk
   of ignition is minimised.
   For repair to the refrigerating system, the precautions in #2-2 to #2-8 must be followed before conducting work on the
   system.
      Work shall be undertaken under a controlled procedure so as to minimize the risk of a flammable gas or vapour being
   present while the work is being performed.
      All maintenance staff and others working in the local area shall be instructed and supervised on the nature of work being
   carried out.
      Avoid working in confined spaces. Always ensure away from source, at least 2 meter of safety distance, or zoning of free
   space area of at least 2 meter in radius.
      Wear appropriate protective equipment, including respiratory protection, as conditions warrant.
2.      Keep all sources of ignition and hot metal surfaces away.
   2-3. Checking for presence of refrigerant
      The area shall be checked with an appropriate refrigerant detector prior to and during work, to ensure the technician is
   aware of potentially flammable atmospheres.
      Ensure that the leak detection equipment being used is suitable for use with flammable refrigerants, i.e. non sparking,
   adequately sealed or intrinsically safe.
      In case of leakage/spillage happened, immediately ventilate area and stay upwind and away from spill/release.
      In case of leakage/spillage happened, do notify persons down wind of the leaking/spill, isolate immediate hazard area and
   keep unauthorized personnel out.
   2-4. Presence of fire extinguisher
      If any hot work is to be conducted on the refrigerating equipment or any associated parts, appropriate fire extinguishing
   equipment shall be available at hand.
      Have a dry powder or CO2 fire extinguisher adjacent to the charging area.
   2-5. No ignition sources
      No person carrying out work in relation to a refrigerating system which involves exposing any pipe work that contains or
   has contained flammable refrigerant shall use any sources of ignition in such a manner that it may lead to the risk of fire or
   explosion. He/She must not be smoking when carrying out such work.
      All possible ignition sources, including cigarette smoking, should be kept sufficiently far away from the site of installation,
   repairing, removing and disposal, during which flammable refrigerant can possibly be released to the surrounding space.
      Prior to work taking place, the area around the equipment is to be surveyed to make sure that there are no flammable
   hazards or ignition risks.
      “No Smoking” signs shall be displayed.
   2-6. Ventilated area
      Ensure that the area is in the open or that it is adequately ventilated before breaking into the system or conducting any hot
   work.
      A degree of ventilation shall continue during the period that the work is carried out.
      The ventilation should safely disperse any released refrigerant and preferably expel it externally into the atmosphere.

   8


--- Page 9 ---
CAUTION
   2-7. Checks to the refrigerating equipment
      Where electrical components are being changed, they shall be fit for the purpose and to the correct specification.
      At all times the manufacturer’s maintenance and service guidelines shall be followed.
      If in doubt consult the manufacturer’s technical department for assistance.
      The following checks shall be applied to installations using flammable refrigerants.
   -   The actual refrigerant charge is in accordance with the room size within which the refrigerant containing parts are
   installed.
   -   The ventilation machinery and outlets are operating adequately and are not obstructed.
   -   If an indirect refrigerating circuit is being used, the secondary circuit shall be checked for the presence of refrigerant.
   -   Marking to the equipment continues to be visible and legible. Markings and signs that are illegible shall be corrected.
   -   Refrigerating pipe or components are installed in a position where they are unlikely to be exposed to any substance
   which may corrode refrigerant containing components, unless the components are constructed of materials which are
   inherently resistant to being corroded or are properly protected against being so corroded.
2.   2-8. Checks to electrical devices
      Repair and maintenance to electrical components shall include initial safety checks and component inspection procedures.
      Initial safety checks shall include but not limit to:-
   -   That capacitors are discharged: this shall be done in a safe manner to avoid possibility of sparking.
   -   That there is no live electrical components and wiring are exposed while charging, recovering or purging the system.
   -   That there is continuity of earth bonding.
      At all times the manufacturer’s maintenance and service guidelines shall be followed.
      If in doubt consult the manufacturer’s technical department for assistance.
      If a fault exists that could compromise safety, then no electrical supply shall be connected to the circuit until it is
   satisfactorily dealt with.
      If the fault cannot be corrected immediately but it is necessary to continue operation, an adequate temporary solution shall
   be used.
      The owner of the equipment must be informed or reported so all parties are advised thereinafter.
   Repairs to sealed components
      During repairs to sealed components, all electrical supplies shall be disconnected from the equipment being worked upon
   prior to any removal of sealed covers, etc.
      If it is absolutely necessary to have an electrical supply to equipment during servicing, then a permanently operating form
   of leak detection shall be located at the most critical point to warn of a potentially hazardous situation.
      Particular attention shall be paid to the following to ensure that by working on electrical components, the casing is not
   altered in such a way that the level of protection is affected. This shall include damage to cables, excessive number of
3.   connections, terminals not made to original specification, damage to seals, incorrect fitting of glands, etc.
      Ensure that apparatus is mounted securely.
      Ensure that seals or sealing materials have not degraded such that they no longer serve the purpose of preventing the
   ingress of flammable atmospheres.
      Replacement parts shall be in accordance with the manufacturer’s specifications.

   The use of silicon sealant may inhibit the effectiveness of some types of leak detection equipment.
   NOTE:
   Intrinsically safe components do not have to be isolated prior to working on them.

   Repair to intrinsically safe components
      Do not apply any permanent inductive or capacitance loads to the circuit without ensuring that this will not exceed the
   permissible voltage and current permitted for the equipment in use.
      Intrinsically safe components are the only types that can be worked on while live in the presence of a flammable
4.
   atmosphere.
      The test apparatus shall be at the correct rating.
      Replace components only with parts specified by the manufacturer. Unspecified parts by manufacturer may result ignition
   of refrigerant in the atmosphere from a leak.
   Cabling
      Check that cabling will not be subject to wear, corrosion, excessive pressure, vibration, sharp edges or any other adverse
5.   environmental effects.
      The check shall also take into account the effects of aging or continual vibration from sources such as compressors or
   fans.
   Detection of flammable refrigerants
6.      Under no circumstances shall potential sources of ignition be used in the searching or detection of refrigerant leaks.
      A halide torch (or any other detector using a naked flame) shall not be used.

   9


--- Page 10 ---
CAUTION
   The following leak detection methods are deemed acceptable for all refrigerant systems.
      No leaks shall be detected when using detection equipment with a sensitivity of 5 grams per year of refrigerant or better
   under a pressure of at least 0,25 times the maximum allowable pressure (>1.04MPa, max 4.15MPa). For example, a
   universal sniffer.
      Electronic leak detectors may be used to detect flammable refrigerants, but the sensitivity may not be adequate, or may
   need re-calibration.
   (Detection equipment shall be calibrated in a refrigerant-free area.)
      Ensure that the detector is not a potential source of ignition and is suitable for the refrigerant used.
7.      Leak detection equipment shall be set at a percentage of the LFL of the refrigerant and shall be calibrated to the refrigerant
   employed and the appropriate percentage of gas (25 % maximum) is confirmed.
      Leak detection fluids are also suitable for use with most refrigerants, for example, bubble method and fluorescent method
   agents. The use of detergents containing chlorine shall be avoided as the chlorine may react with the refrigerant and
   corrode the copper pipe-work.
      If a leak is suspected, all naked flames shall be removed/extinguished.
      If a leakage of refrigerant is found which requires brazing, all of the refrigerant shall be recovered from the system, or
   isolated (by means of shut off valves) in a part of the system remote from the leak.
   The precautions in #8 must be followed to remove the refrigerant.
   Removal and evacuation
     When breaking into the refrigerant circuit to make repairs – or for any other purpose – conventional procedures shall be
   used.
   However, it is important that best practice is followed since flammability is a consideration.
   The following procedure shall be adhered to:

   • remove refrigerant -> • purge the circuit with inert gas -> • evacuate -> • purge with inert gas ->
   • open the circuit by cutting or brazing

8.      The refrigerant charge shall be recovered into the correct recovery cylinders.
      The system shall be purged with OFN to render the appliance safe. (remark: OFN = oxygen free nitrogen, type of inert gas)
      This process may need to be repeated several times.
      Compressed air or oxygen shall not be used for this task.
      Purging shall be achieved by breaking the vacuum in the system with OFN and continuing to fill until the working pressure
   is achieved, then venting to atmosphere, and finally pulling down to a vacuum.
      This process shall be repeated until no refrigerant is within the system.
      When the final OFN charge is used, the system shall be vented down to atmospheric pressure to enable work to take
   place.
      This operation is absolutely vital if brazing operations on the pipe work are to take place.
      Ensure that the outlet for the vacuum pump is not close to any potential ignition sources and there is ventilation available.
   Charging procedures
      In addition to conventional charging procedures, the following requirements shall be followed.
   -   Ensure that contamination of different refrigerants does not occur when using charging equipment.
   -   Hoses or lines shall be as short as possible to minimize the amount of refrigerant contained in them.
   -   Cylinders shall be kept in an appropriate position according to the instructions.
   -   Ensure that the refrigerating system is earthed prior to charging the system with refrigerant.
9.   -   Label the system when charging is complete (if not already).
   -   Extreme care shall be taken not to over fill the refrigerating system.
      Prior to recharging the system it shall be pressure tested with OFN (refer to #7).
      The system shall be leak tested on completion of charging but prior to commissioning.
      A follow up leak test shall be carried out prior to leaving the site.
      Electrostatic charge may accumulate and create a hazardous condition when charging and discharging the refrigerant.
   To avoid fire or explosion, dissipate static electricity during transfer by grounding and bonding containers and equipment
   before charging/discharging.

   10


--- Page 11 ---
CAUTION
   Decommissioning
      Before carrying out this procedure, it is essential that the technician is completely familiar with the equipment and all its
   details.
      It is recommended good practice that all refrigerants are recovered safely.
      Prior to the task being carried out, an oil and refrigerant sample shall be taken in case analysis is required prior to re-use of
   recovered refrigerant.
      It is essential that electrical power is available before the task is commenced.
   a) Become familiar with the equipment and its operation.
   b) Isolate system electrically.
   c) Before attempting the procedure ensure that:

   • mechanical handling equipment is available, if required, for handling refrigerant cylinders;
   • all personal protective equipment is available and being used correctly;
10.   • the recovery process is supervised at all times by a competent person;
   • recovery equipment and cylinders conform to the appropriate standards.

   d)   Pump down refrigerant system, if possible.
   e)   If a vacuum is not possible, make a manifold so that refrigerant can be removed from various parts of the system.
   f)   Make sure that cylinder is situated on the scales before recovery takes place.
   g)   Start the recovery machine and operate in accordance with instructions.
   h)   Do not over fill cylinders. (No more than 80 % volume liquid charge).
   i)   Do not exceed the maximum working pressure of the cylinder, even temporarily.
   j)   When the cylinders have been filled correctly and the process completed, make sure that the cylinders and the
   equipment are removed from site promptly and all isolation valves on the equipment are closed off.
   k) Recovered refrigerant shall not be charged into another refrigerating system unless it has been cleaned and checked.
      Electrostatic charge may accumulate and create a hazardous condition when charging or discharging the refrigerant.
   To avoid fire or explosion, dissipate static electricity during transfer by grounding and bonding containers and equipment
   before charging/discharging.
   Labelling
      Equipment shall be labelled stating that it has been de-commissioned and emptied of refrigerant.
11.
      The label shall be dated and signed.
      Ensure that there are labels on the equipment stating the equipment contains flammable refrigerant.
   Recovery
      When removing refrigerant from a system, either for servicing or decommissioning, it is recommended good practice that
   all refrigerants are removed safely.
      When transferring refrigerant into cylinders, ensure that only appropriate refrigerant recovery cylinders are employed.
      Ensure that the correct number of cylinders for holding the total system charge are available.
      All cylinders to be used are designated for the recovered refrigerant and labelled for that refrigerant (i.e. special cylinders
   for the recovery of refrigerant).
      Cylinders shall be complete with pressure relief valve and associated shut-off valves in good working order.
      Recovery cylinders are evacuated and, if possible, cooled before recovery occurs.
      The recovery equipment shall be in good working order with a set of instructions concerning the equipment that is at hand
   and shall be suitable for the recovery of flammable refrigerants.
      In addition, a set of calibrated weighing scales shall be available and in good working order.
12.
      Hoses shall be complete with leak-free disconnect couplings and in good condition.
      Before using the recovery machine, check that it is in satisfactory working order, has been properly maintained and that
   any associated electrical components are sealed to prevent ignition in the event of a refrigerant release.
   Consult manufacturer if in doubt.
      The recovered refrigerant shall be returned to the refrigerant supplier in the correct recovery cylinder, and the relevant
   Waste Transfer Note arranged.
      Do not mix refrigerants in recovery units and especially not in cylinders.
      If compressors or compressor oils are to be removed, ensure that they have been evacuated to an acceptable level to
   make certain that flammable refrigerant does not remain within the lubricant.
      The evacuation process shall be carried out prior to returning the compressor to the suppliers.
      Only electric heating to the compressor body shall be employed to accelerate this process.
      When oil is drained from a system, it shall be carried out safely.

   11


--- Page 12 ---
3. Specifications
3.1   WH-ADC0309K0E5A WH-UDZ03KE5

   Item   Unit   Outdoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Condition
   A35W7
   (Ambient/Water)
Cooling Capacity   kW   3.20
   BTU/h   10900
Cooling EER   W/W   3.52
   Condition
   A7W35   A2W35
   (Ambient/Water)
Heating Capacity   kW   3.20   3.20
   BTU/h   10900   10900
Heating COP   W/W   5.33   3.64
   Low Temperature Application (W35)
   Warmer   Average   Colder
   Application   Climate
   Pdesign   kW   4.0   4.0   3.0
   Tbivalent/TOL   °C   2/2   -10 / -10   -20 / -22
   SCOP/ns   (W/W)/%   6.20 / 245   4.90 / 193   4.00 / 157
   Annual Consumption   kWh   862   1685   1848
   Class   A+++   A+++   A++
   Medium Temperature Application (W55)
   Warmer   Average   Colder
   Application   Climate
Heating Erp   Pdesign   kW   4.0   3.0   2.0
   Tbivalent/TOL   °C   2/2   -10 / -10   -20 / -22
   SCOP/ns   (W/W)/%   4.20 / 165   3.30 / 129   2.83 / 110
   Annual Consumption   kWh   1274   1878   1740
   Class   A+++   A++   A+
   DHW
   Warmer   Average   Colder
   Application   Climate
   COP/nwh   (W/W)/%   3.86 / 154   3.10 / 124   2.48 / 99
   AEC   kWh   654   816   1023
   Class   A++   A+   A
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 45***   Heating: 44***
   Heating: 60***
   Power Level dB   Cooling: 61***
   Heating: 55****
   Cooling: 33.9 (1200)
Air Flow   m3/min (ft3/min)
   Heating: 28.9 (1020)
Refrigeration Control Device   Expansion Valve
Refrigeration Oil   cm3   FW50S (450)
   R32, 0.90 (31.8) (Pre-charged)
Refrigerant   kg (oz)
   R32, 1.20 (42.4) (Maximum)
   GWP   675
F-GAS
   CO2eq (ton) (Precharged/Maximum)   0.608 / 0.810

   12


--- Page 13 ---
Item   Unit   Outdoor Unit
   Height   mm (inch)   622 (24-1/2)
Dimension   Width   mm (inch)   824 (32-15/32)
   Depth   mm (inch)   298 (11-24/32)
Net Weight   kg (Ibs)   37 (82)
   Liquid   mm (inch)   6.35 (1/4)
Pipe Diameter
   Gas   mm (inch)   12.70 (1/2)
Standard Length   m (ft)   7 (23.0)
Pipe Length Range   m (ft)   3 (9.8) ~ 25 (82.0)
I/D & O/D Height Difference   m (ft)   20 (65.6)
Additional Gas Amount   g/m (oz/ft)   20 (0.2)
Refrigeration Charge Less   m (ft)   10 (32.8)
   Type   Hermetic Motor
Compressor   Motor Type   Brushless (6-poles)
   Rated Output   kW   0.90
   Type   Propeller Fan
   Material   PP
   Motor Type   DC (8-poles)
Fan
   Input Power   W   -
   Output Power   W   40
   Cooling: 840
   Fan Speed   rpm
   Heating: 720
   Fin material   Aluminium (Pre Coat)
   Fin Type   Corrugated Fin
Heat Exchanger
   Row × Stage × FPI   2 × 28 × 19
   Size (W × H × L)   mm   36.4 × 588 × 827.7:856.3
   Ø   Single
Power Source (Phase, Voltage, Cycle)   V   230
   Hz   50
   Condition
   A35W7   A7W35   A2W35
Input Power   (Ambient/Water)
   kW   Cooling: 0.91   Heating: 0.60   Heating: 0.88
Maximum Input Power For Heatpump System   kW   2.59
Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 12.0 / 2.59k
Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 13.0 / 3.00k
Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   -/-/-
Starting Current   A   2.9
   Condition
   A35W7   A7W35   A2W35
Running Current   (Ambient/Water)
   A   Cooling: 4.3   Heating: 2.9   Heating: 4.2
Maximum Current For Heatpump System   A   12.0

Power Factor   Condition
   A35W7   A7W35   A2W35
Power factor means total figure of compressor and   (Ambient/Water)
outdoor fan motor.   %   Cooling: 92   Heating: 90   Heating: 91
   Number of core   -
Power Cord
   Length   m (ft)   -
Thermostat   Electronic Control
Protection Device   Electronic Control

   13


--- Page 14 ---
Item   Unit   Indoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Cooling: 10 / 43
   Outdoor Ambient   °C (min./max.)   Heating (Tank): -20 / 35
   Heating (Circuit): -20 / 35
Operation Range   Cooling: 5 / 20
   Heating (Tank): - / 65*³,
   Water Outlet   °C (min./max.)
   Heating (Circuit): 20 / 55 (Below Ambient -15 °C) *⁴
   Heating (Circuit): 20 / 60 (Above Ambient -10 °C) *⁴
   Cooling: 5.0
Internal Pressure Differential   kPa
   Heating: 5.0
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 28***   Heating: 28***
   Power Level dB   Cooling: 41***   Heating: 41***
   Depth   mm (inch)   602 (23-45/64)
Dimension   Width   mm (inch)   599 (23-37/64)
   Height   mm (inch)   1642 (64-41/64)
Net Weight   kg (lbs)   96 (212)
   Liquid   mm (inch)   6.35 (1/4)
Refrigerant Pipe Diameter
   Gas   mm (inch)   12.70 (1/2)
   Room   mm (inch)   1
Water Pipe Diameter
   Shower   mm (inch)   19 (3/4)
Water Drain Hose Inner Diameter   mm (inch)   12.00 (17/36)
   Motor Type   Brushless DC Motor
Pump   No. of Speed   7 (Software Selection)
   Input Power   W   145
   Type   Brazed Plate
   No. of Plates   36
Hot Water Coil
   Size (W × H × L)   mm   120 × 65 × 376
   Cooling: 9.2 (0.6)
   Water Flow Rate   l/min (m3/h)
   Heating: 9.2 (0.6)
Pressure Relief Valve Water Circuit   kPa   Open: 300, Close: 210 and below
   Type   Vortex (Piezoelectric sensor)
Flow Sensor
   Measuring range   l/min   5 ~ 60
Pressure Transducer Pressure range   Bar   0~4
   Volume   I   10
Expansion Vessel
   MWP   bar   3
Capacity of Integrated Electric Heater / OLP TEMP   kW/°C   -/-
Tank Volume (Spec / Nett)   L   200 / 185
Max. Tank Water Set Temperature   °C   65
Tank Coil Surface   m2   1.8

Maximum Working   Heat/Cool   Bar   3.0
Pressure   Tank Circuit   Bar   10.0
   Tank Unit   Bar   3.5
Operating Pressure
   Expansion Relief Valve   Bar   8.0
Expansion Vessel Pre-charge Pressure (DHW Circuit)   Bar   3.5
Pressure Reducing Valve Set Pressure (DHW Circuit)   Bar   3.5

   14


--- Page 15 ---
Item   Unit   Indoor Unit
   Material   EN-1.4521
Pressure Vessel   Volume   L   185
   Design Pressure   Bar   10
   Material   EN-1.4521
   Diameter   mm   22
Heat Exchanger   Thickness   mm   0.8
   Surface Area   m2   1.8
   Total Length   m   25
   Total Corrosion ion
   (Chloride + Sulphate   mg/L   < 150
   + Nitric)
   Conductivity
   @ Water Tank
   µS/cm   < 1250
   Water Temperature
   < 60°C
DHW Tank   Conductivity
   @ Water Tank
   µS/cm   < 1200
   Water Temperature
   < 65°C
   Saturation Index (LSI)
   > -4.0 / < 0.4
   @ 20°C
   PH   6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
   rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
   -8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
   outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
   ΔT=5°C.
 EER and COP classification is at 230V only in accordance with EU directive 2003/32/EC.
 *3 Above 55°C, only possible with backup heater operation.
 *4 Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to
   55°C.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
   (Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
   water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 It is recommended to follow DHW tank water quality limit for Panasonic Air to Water All in One according to
   Drinking Water Directive 98/83 EC

   15


--- Page 16 ---
3.2   WH-ADC0309K0E5A WH-UDZ05KE5
   Item   Unit   Outdoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Condition
   A35W7
   (Ambient/Water)
Cooling Capacity   kW   5.00
   BTU/h   17100
Cooling EER   W/W   3.05
   Condition
   A7W35   A2W35
   (Ambient/Water)
Heating Capacity   kW   5.00   5.00
   BTU/h   17100   17100
Heating COP   W/W   5.10   3.57
   Low Temperature Application (W35)
   Warmer   Average   Colder
   Application   Climate
   Pdesign   kW   5.0   5.0   6.0
   Tbivalent/TOL   °C   2/2   -10 / -10   -15 / -22
   SCOP/ns   (W/W)/%   6.00 / 237   4.60 / 181   4.08 / 160
   Annual Consumption   kWh   1113   2245   3625
   Class   A+++   A+++   A++
   Medium Temperature Application (W55)
   Warmer   Average   Colder
   Application   Climate
Heating Erp   Pdesign   kW   4.0   5.0   4.0
   Tbivalent/TOL   °C   2/2   -10 / -10   -15 / -22
   SCOP/ns   (W/W)/%   4.20 / 165   3.40 / 133   2.95 / 115
   Annual Consumption   kWh   1274   3035   3338
   Class   A+++   A++   A+
   DHW
   Warmer   Average   Colder
   Application   Climate
   COP/nwh   (W/W)/%   4.00 / 160   3.34 / 134   2.80 / 112
   AEC   kWh   630   750   900
   Class   A++   A+   A
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 49***   Heating: 48***
   Heating: 60***
   Power Level dB   Cooling: 62***
   Heating: 55****
   Cooling: 55.0 (1942)
Air Flow   m3/min (ft3/min)
   Heating: 35.3 (1246)
Refrigeration Control Device   Expansion Valve
   3
Refrigeration Oil   cm   FW50S (600)
   R32, 1.30 (45.9) (Pre-charged)
Refrigerant   kg (oz)
   R32, 2.30 (81.2) (Maximum)
   GWP   675
F-GAS
   CO2eq (ton) (Precharged/Maximum)   0.878 / 1.553
   Height   mm (inch)   795 (31-19/64)
Dimension   Width   mm (inch)   875 (34-29/64)
   Depth   mm (inch)   380 (14-31/32)
Net Weight   kg (lbs)   55 (121)

   16


--- Page 17 ---
Item   Unit   Outdoor Unit
   Liquid   mm (inch)   6.35 (1/4)
Pipe Diameter
   Gas   mm (inch)   15.88 (5/8)
Standard Length   m (ft)   7 (23.0)
Pipe Length Range   m (ft)   3 (9.8) ~ 40 (131.2) / 3 (9.8) ~ 50 (164.0)
I/D & O/D Height Difference   m (ft)   30 (98.4)
Additional Gas Amount   g/m (oz/ft)   25 (0.3)
Refrigeration Charge Less   m (ft)   10 (32.8)
   Type   Hermetic Motor
Compressor   Motor Type   Brushless (6-poles)
   Rated Output   kW   1.50
   Type   Propeller Fan
   Material   PP
   Motor Type   DC (8-poles)
Fan
   Input Power   W   -
   Output Power   W   60
   Cooling: 640
   Fan Speed   rpm
   Heating: 520
   Fin material   Aluminium (Blue Coat)
   Fin Type   Corrugated Fin
Heat Exchanger
   Row × Stage × FPI   2 × 36 × 19
   Size (W × H × L)   mm   36.38 × 756.0 × 868.8:897
   Ø   Single
Power Source (Phase, Voltage, Cycle)   V   230
   Hz   50
   Condition
   A35W7   A7W35   A2W35
Input Power   (Ambient/Water)
   kW   Cooling: 1.64   Heating: 0.98   Heating: 1.40
Maximum Input Power For Heatpump System   kW   3.36
Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 14.9 / 3.36k
Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 13.0 / 3.00k
Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   -/-/-
Starting Current   A   4.4
   Condition
   A35W7   A7W35   A2W35
Running Current   (Ambient/Water)
   A   Cooling: 7.3   Heating: 4.4   Heating: 6.3
Maximum Current For Heatpump System   A   14.9
Power Factor
   A35W7   A7W35   A2W35
Power factor means total figure of compressor and   %
   Cooling: 98   Heating: 97   Heating: 97
outdoor fan motor.
   Number of core   -
Power Cord
   Length   m (ft)   -
Thermostat   Electronic Control
Protection Device   Electronic Control

   17


--- Page 18 ---
Item   Unit   Indoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Cooling: 10 / 43
   Outdoor Ambient   °C (min./max.)   Heating (Tank): -25 / 35
   Heating (Circuit): -25 / 35
Operation Range   Cooling: 5 / 20
   Heating (Tank): - / 65*³,
   Water Outlet   °C (min./max.)
   Heating (Circuit): 20 / 55 (Below Ambient -15 °C) *⁴
   Heating (Circuit): 20 / 60 (Above Ambient -10 °C) *⁴
   Cooling: 11.0
Internal Pressure Differential   kPa
   Heating: 11.0
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 28***   Heating: 28***
   Power Level dB   Cooling: 41***   Heating: 41***
   Depth   mm (inch)   602 (23-45/64)
Dimension   Width   mm (inch)   599 (23-37/64)
   Height   mm (inch)   1642 (64-41/64)
Net Weight   kg (lbs)   96 (212)
   Liquid   mm (inch)   6.35 (1/4)
Refrigerant Pipe Diameter
   Gas   mm (inch)   15.88 (5/8)
   Room   mm (inch)   1
Water Pipe Diameter
   Shower   mm (inch)   19 (3/4)
Water Drain Hose Inner Diameter   mm (inch)   12.00 (17/36)
   Motor Type   DC Motor
Pump   No. of Speed   7 (Software Selection)
   Input Power   W   145
   Type   Brazed Plate
   No. of Plates   36
Hot Water Coil
   Size (W × H × L)   mm   120 × 65 × 376
   Cooling: 14.3 (0.9)
   Water Flow Rate   l/min (m3/h)
   Heating: 14.3 (0.9)
Pressure Relief Valve Water Circuit   kPa   Open: 300, Close: 210 and below
   Type   Vortex (Piezoelectric sensor)
Flow Sensor
   Measuring range   l/min   5 ~ 60
Pressure Transducer Pressure range   Bar   0~4
   Volume   I   10
Expansion Vessel
   MWP   bar   3
Capacity of Integrated Electric Heater / OLP TEMP   kW/°C   -/-
Tank Volume (Spec / Nett)   L   200 / 185
Max. Tank Water Set Temperature   °C   65
Tank Coil Surface   m2   1.8

Maximum Working   Heat/Cool   Bar   3.0
Pressure   Tank Circuit   Bar   10.0
   Tank Unit   Bar   3.5
Operating Pressure
   Expansion Relief Valve   Bar   8.0
Expansion Vessel Pre-charge Pressure (DHW Circuit)   Bar   3.5
Pressure Reducing Valve Set Pressure (DHW Circuit)   Bar   3.5

   18


--- Page 19 ---
Item   Unit   Indoor Unit
   Material   En-1.4521
Pressure Vessel   Volume   L   185
   Design Pressure   Bar   10
   Material   EN-1.4521
   Diameter   mm   22
Heat Exchanger   Thickness   mm   0.8
   Surface Area   m2   1.8
   Total Length   m   25
   Total Corrosion ion
   (Chloride + Sulphate   mg/L   < 150
   + Nitric)
   Conductivity
   @ Water Tank
   µS/cm   < 1250
   Water Temperature
   < 60°C
DHW Tank   Conductivity
   @ Water Tank
   µS/cm   < 1200
   Water Temperature
   < 65°C
   Saturation Index (LSI)
   > -4.0 / < 0.4
   @ 20°C
   PH   6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
   rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
   -8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
   outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
   ΔT=5°C.
 EER and COP classification is at 230V only in accordance with EU directive 2003/32/EC.
 *3 Above 55°C, only possible with backup heater operation.
 *4 Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to
   55°C.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
   (Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
   water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 It is recommended to follow DHW tank water quality limit for Panasonic Air to Water All in One according to
   Drinking Water Directive 98/83 EC

   19


--- Page 20 ---
3.3   WH-ADC0309K0E5A WH-UDZ07KE5
   Item   Unit   Outdoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Condition
   A35W7
   (Ambient/Water)
Cooling Capacity   kW   6.70
   BTU/h   22800
Cooling EER   W/W   3.03
   Condition
   A7W35   A2W35
   (Ambient/Water)
Heating Capacity   kW   7.00   6.85
   BTU/h   23900   23400
Heating COP   W/W   4.86   3.43
   Low Temperature Application (W35)
   Warmer   Average   Colder
   Application   Climate
   Pdesign   kW   7.0   7.0   7.0
   Tbivalent/TOL   °C   2/2   -10 / -10   -15 / -22
   SCOP/ns   (W/W)/%   5.75 / 227   4.65 / 183   4.18 / 164
   Annual Consumption   kWh   1627   3111   4132
   Class   A+++   A+++   A++
   Medium Temperature Application (W55)
   Warmer   Average   Colder
   Application   Climate
Heating Erp   Pdesign   kW   6.0   7.0   6.0
   Tbivalent/TOL   °C   2/2   -7 / -10   -15 / -22
   SCOP/ns   (W/W)/%   4.07 / 160   3.43 / 134   2.98 / 116
   Annual Consumption   kWh   1971   4216   4967
   Class   A+++   A++   A+
   DHW
   Warmer   Average   Colder
   Application   Climate
   COP/nwh   (W/W)/%   4.00 / 160   3.34 / 134   2.80 / 112
   AEC   kWh   630   750   900
   Class   A++   A++   A
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 50***   Heating: 50***
   Heating: 62***
   Power Level dB   Cooling: 64***
   Heating: 56****
   Cooling: 55.0 (1942)
Air Flow   m3/min (ft3/min)
   Heating: 43.2 (1525)
Refrigeration Control Device   Expansion Valve
Refrigeration Oil   cm3   FW50S (600)
   R32, 1.30 (45.9) (Pre-charged)
Refrigerant   kg (oz)
   R32, 2.30 (81.2) (Maximum)
   GWP   675
F-GAS
   CO2eq (ton) (Precharged/Maximum)   0.878 / 1.553

   20


--- Page 21 ---
Item   Unit   Outdoor Unit
   Height   mm (inch)   795 (31-5/16)
Dimension   Width   mm (inch)   875 (34-15/32)
   Depth   mm (inch)   380 (14-31/32)
Net Weight   kg (lbs)   55 (121)
   Liquid   mm (inch)   6.35 (1/4)
Pipe Diameter
   Gas   mm (inch)   15.88 (5/8)
Standard Length   m (ft)   7 (23.0)
Pipe Length Range   m (ft)   3 (9.8) ~ 40 (131.2) / 3 (9.8) ~ 50 (164.0)
I/D & O/D Height Difference   m (ft)   30 (98.4)
Additional Gas Amount   g/m (oz/ft)   25 (0.3)
Refrigeration Charge Less   m (ft)   10 (32.8)
   Type   Hermetic Motor
Compressor   Motor Type   Brushless (4-poles)
   Rated Output   kW   1.50
   Type   Propeller Fan
   Material   PP
   Motor Type   DC (8-poles)
Fan
   Input Power   W   -
   Output Power   W   60
   Cooling: 670
   Fan Speed   rpm
   Heating: 520
   Fin material   Aluminium (Pre Coat)
   Fin Type   Corrugated Fin
Heat Exchanger
   Row × Stage × FPI   2 × 36 × 19
   Size (W × H × L)   mm   36.38 × 756.0 × 868.8:897.0
   Ø   Single
Power Source (Phase, Voltage, Cycle)   V   230
   Hz   50
   Condition
   A35W7   A7W35   A2W35
Input Power   (Ambient/Water)
   kW   Cooling: 2.21   Heating: 1.44   Heating: 2.00
Maximum Input Power For Heatpump System   kW   3.58
Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 15.9 / 3.58k
Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 13.0 / 3.00k
Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   -/-/-
Starting Current   A   6.5
   Condition
   A35W7   A7W35   A2W35
Running Current   (Ambient/Water)
   A   Cooling: 9.8   Heating: 6.5   Heating: 8.9
Maximum Current For Heatpump System   A   15.9

Power Factor   Condition
   A35W7   A7W35   A2W35
Power factor means total figure of compressor and   (Ambient/Water)
outdoor fan motor.   %   Cooling: 98   Heating: 96   Heating: 98
   Number of core   -
Power Cord
   Length   m (ft)   -
Thermostat   Electronic Control
Protection Device   Electronic Control

   21


--- Page 22 ---
Item   Unit   Indoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Cooling: 10 / 43
   Outdoor Ambient   °C (min./max.)   Heating (Tank): -25 / 35
   Heating (Circuit): -25 / 35
Operation Range   Cooling: 5 / 20
   Heating (Tank): - / 65*³,
   Water Outlet   °C (min./max.)
   Heating (Circuit): 20 / 55 (Below Ambient -15 °C) *⁴
   Heating (Circuit): 20 / 60 (Above Ambient -10 °C) *⁴
   Cooling: 18.0
Internal Pressure Differential   kPa
   Heating: 19.0
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 28***   Heating: 28***
   Power Level dB   Cooling: 41***   Heating: 41***
   Depth   mm (inch)   602 (23-45/64)
Dimension   Width   mm (inch)   599 (23-37/64)
   Height   mm (inch)   1642 (64-41/64)
Net Weight   kg (lbs)   96 (212)
   Liquid   mm (inch)   6.35 (1/4)
Refrigerant Pipe Diameter
   Gas   mm (inch)   15.88 (5/8)
   Room   mm (inch)   1
Water Pipe Diameter
   Shower   mm (inch)   19 (3/4)
Water Drain Hose Inner Diameter   mm (inch)   12.00 (17/36)
   Motor Type   DC Motor
Pump   No. of Speed   7 (Software Selection)
   Input Power   W   145
   Type   Brazed Plate
   No. of Plates   36
Hot Water Coil
   Size (W × H × L)   mm   120 × 65 × 376
   Cooling: 19.2 (1.2)
   Water Flow Rate   l/min (m3/h)
   Heating: 20.1 (1.2)
Pressure Relief Valve Water Circuit   kPa   Open: 300, Close: 210 and below
   Type   Vortex (Piezoelectric sensor)
Flow Sensor
   Measuring range   l/min   5 ~ 60
Pressure Transducer Pressure range   Bar   0~4
   Volume   I   10
Expansion Vessel
   MWP   bar   3
Capacity of Integrated Electric Heater / OLP TEMP   kW/°C   -/-
Tank Volume (Spec / Nett)   L   200 / 185
Max. Tank Water Set Temperature   °C   65
Tank Coil Surface   m2   1.8

Maximum Working   Heat/Cool   Bar   3.0
Pressure   Tank Circuit   Bar   10.0
   Tank Unit   Bar   3.5
Operating Pressure
   Expansion Relief Valve   Bar   8.0
Expansion Vessel Pre-charge Pressure (DHW Circuit)   Bar   3.5
Pressure Reducing Valve Set Pressure (DHW Circuit)   Bar   3.5

   22


--- Page 23 ---
Item   Unit   Indoor Unit
   Material   En-1.4521
Pressure Vessel   Volume   L   185
   Design Pressure   Bar   10
   Material   EN-1.4521
   Diameter   mm   22
Heat Exchanger   Thickness   mm   0.8
   Surface Area   m2   1.8
   Total Length   m   25
   Total Corrosion ion
   (Chloride + Sulphate   mg/L   < 150
   + Nitric)
   Conductivity
   @ Water Tank
   µS/cm   < 1250
   Water Temperature
   < 60°C
DHW Tank   Conductivity
   @ Water Tank
   µS/cm   < 1200
   Water Temperature
   < 65°C
   Saturation Index (LSI)
   > -4.0 / < 0.4
   @ 20°C
   PH   6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
   rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
   -8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
   outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
   ΔT=5°C.
 EER and COP classification is at 230V only in accordance with EU directive 2003/32/EC.
 *3 Above 55°C, only possible with backup heater operation.
 *4 Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to
   55°C.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
   (Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
   water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 It is recommended to follow DHW tank water quality limit for Panasonic Air to Water All in One according to
   Drinking Water Directive 98/83 EC

   23


--- Page 24 ---
3.4   WH-ADC0309K0E5A WH-UDZ09KE5
   Item   Unit   Outdoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Condition
   A35W7
   (Ambient/Water)
Cooling Capacity   kW   8.20
   BTU/h   28000
Cooling EER   W/W   2.72
   Condition
   A7W35   A2W35
   (Ambient/Water)
Heating Capacity   kW   9.00   7.00
   BTU/h   30700   23900
Heating COP   W/W   4.55   3.40
   Low Temperature Application (W35)
   Warmer   Average   Colder
   Application   Climate
   Pdesign   kW   7.0   8.0   7.0
   Tbivalent/TOL   °C   2/2   -7 / -10   -15 / -22
   SCOP/ns   (W/W)/%   5.75 / 227   4.44 / 175   4.18 / 164
   Annual Consumption   kWh   1627   3720   4132
   Class   A+++   A+++   A++
   Medium Temperature Application (W55)
   Warmer   Average   Colder
   Application   Climate
Heating Erp   Pdesign   kW   6.0   8.0   6.0
   Tbivalent/TOL   °C   2/2   -7 / -10   -15 / -22
   SCOP/ns   (W/W)/%   4.07 / 160   3.41 / 133   2.98 / 116
   Annual Consumption   kWh   1971   4851   4967
   Class   A+++   A++   A+
   DHW
   Warmer   Average   Colder
   Application   Climate
   COP/nwh   (W/W)/%   4.00 / 160   3.34 / 134   2.80 / 112
   AEC   kWh   630   750   900
   Class   A++   A+   A
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 51***   Heating: 51***
   Heating: 63***
   Power Level dB   Cooling: 65***
   Heating: 56****
   Cooling: 55.0 (1942)
Air Flow   m3/min (ft3/min)
   Heating: 52.7 (1860)
Refrigeration Control Device   Expansion Valve
   3
Refrigeration Oil   cm   FW50S (600)
   R32, 1.30 (45.9) (Pre-charged)
Refrigerant   kg (oz)
   R32, 2.30 (81.2) (Maximum)
   GWP   675
F-GAS
   CO2eq (ton) (Precharged/Maximum)   0.878 / 1.553
   Height   mm (inch)   795 (31-5/16)
Dimension   Width   mm (inch)   875 (34-15/32)
   Depth   mm (inch)   380 (14-31/32)
Net Weight   kg (lbs)   55 (121)

   24


--- Page 25 ---
Item   Unit   Outdoor Unit
   Liquid   mm (inch)   6.35 (1/4)
Pipe Diameter
   Gas   mm (inch)   15.88 (5/8)
Standard Length   m (ft)   7 (23.0)
Pipe Length Range   m (ft)   3 (9.8) ~ 40 (131.2) / 3 (9.8) ~ 50 (164.0)
I/D & O/D Height Difference   m (ft)   30 (98.4)
Additional Gas Amount   g/m (oz/ft)   25 (0.3)
Refrigeration Charge Less   m (ft)   10 (32.8)
   Type   Hermetic Motor
Compressor   Motor Type   Brushless (4-poles)
   Rated Output   kW   1.50
   Type   Propeller Fan
   Material   PP
   Motor Type   DC (8-poles)
Fan
   Input Power   W   -
   Output Power   W   60
   Cooling: 700
   Fan Speed   rpm
   Heating: 550
   Fin material   Aluminium (Pre Coat)
   Fin Type   Corrugated Fin
Heat Exchanger
   Row × Stage × FPI   2 × 36 × 19
   Size (W × H × L)   mm   36.38 × 756.0 × 868.0:897.0
   Ø   Single
Power Source (Phase, Voltage, Cycle)   V   230
   Hz   50
   Condition
   A35W7   A7W35   A2W35
Input Power   (Ambient/Water)
   kW   Cooling: 3.02   Heating: 1.98   Heating: 2.06
Maximum Input Power For Heatpump System   kW   3.58
Power Supply 1 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 15.9 / 3.58k
Power Supply 2 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   1Ø / 13.0 / 3.00k
Power Supply 3 : Phase (Ø) / Max. Current (A) / Max. Input Power (W)   -/-/-
Starting Current   A   8.9
   Condition
   A35W7   A7W35   A2W35
Running Current   (Ambient/Water)
   A   Cooling: 13.4   Heating: 8.9   Heating: 9.1
Maximum Current For Heatpump System   A   15.9

Power Factor   Condition
   A35W7   A7W35   A2W35
Power factor means total figure of compressor and   (Ambient/Water)
outdoor fan motor.   %   Cooling: 98   Heating: 97   Heating: 98
   Number of core   -
Power Cord
   Length   m (ft)   -
Thermostat   Electronic Control
Protection Device   Electronic Control

   25


--- Page 26 ---
Item   Unit   Indoor Unit
   EN 14511
Performance Test Condition
   EN 14825
   Cooling: 10 / 43
   Outdoor Ambient   °C (min./max.)   Heating (Tank): -25 / 35
   Heating (Circuit): -25 / 35
Operation Range   Cooling: 5 / 20
   Heating (Tank): - / 65*³,
   Water Outlet   °C (min./max.)
   Heating (Circuit): 20 / 55 (Below Ambient -15 °C) *⁴
   Heating (Circuit): 20 / 60 (Above Ambient -10 °C) *⁴
   Cooling: 24.0
Internal Pressure Differential   kPa
   Heating: 27.0
   Condition
   A35W7   A7W35   A2W35
   (Ambient/Water)
Noise Level   dB (A)   Cooling: 28***   Heating: 28***
   Power Level dB   Cooling: 41***   Heating: 41***
   Depth   mm (inch)   602 (23-45/64)
Dimension   Width   mm (inch)   599 (23-37/64)
   Height   mm (inch)   1642 (64-41/64)
Net Weight   kg (lbs)   96 (212)
   Liquid   mm (inch)   6.35 (1/4)
Refrigerant Pipe Diameter
   Gas   mm (inch)   15.88 (5/8)
   Room   mm (inch)   1
Water Pipe Diameter
   Shower   mm (inch)   19 (3/4)
Water Drain Hose Inner Diameter   mm (inch)   12.00 (17/36)
   Motor Type   DC Motor
Pump   No. of Speed   7 (Software Selection)
   Input Power   W   145
   Type   Brazed Plate
   No. of Plates   36
Hot Water Coil
   Size (W × H × L)   mm   120 × 65 × 376
   Cooling: 23.5 (1.4)
   Water Flow Rate   l/min (m3/h)
   Heating: 25.8 (1.5)
Pressure Relief Valve Water Circuit   kPa   Open: 300, Close: 210 and below
   Type   Vortex (Piezoelectric sensor)
Flow Sensor
   Measuring range   l/min   5 ~ 60
Pressure Transducer Pressure range   Bar   0~4
   Volume   I   10
Expansion Vessel
   MWP   bar   3
Capacity of Integrated Electric Heater / OLP TEMP   kW/°C   -/-
Tank Volume (Spec / Nett)   L   200 / 185
Max. Tank Water Set Temperature   °C   65
Tank Coil Surface   m2   1.8

Maximum Working   Heat/Cool   Bar   3.0
Pressure   Tank Circuit   Bar   10.0
   Tank Unit   Bar   3.5
Operating Pressure
   Expansion Relief Valve   Bar   8.0
Expansion Vessel Pre-charge Pressure (DHW Circuit)   Bar   3.5
Pressure Reducing Valve Set Pressure (DHW Circuit)   Bar   3.5

   26


--- Page 27 ---
Item   Unit   Indoor Unit
   Material   En-1.4521
Pressure Vessel   Volume   L   185
   Design Pressure   Bar   10
   Material   EN-1.4521
   Diameter   mm   22
Heat Exchanger   Thickness   mm   0.8
   Surface Area   m2   1.8
   Total Length   m   25
   Total Corrosion ion
   (Chloride + Sulphate   mg/L   < 150
   + Nitric)
   Conductivity
   @ Water Tank
   µS/cm   < 1250
   Water Temperature
   < 60°C
DHW Tank   Conductivity
   @ Water Tank
   µS/cm   < 1200
   Water Temperature
   < 65°C
   Saturation Index (LSI)
   > -4.0 / < 0.4
   @ 20°C
   PH   6.5 - 8.5

Note:
 In case it is necessary to indicate the air flow volume in (I/s), the value in (m3/min.) shall be multiplied by 16.7 and
   rounded down the decimal point.
 If the EUROVENT Certified models can be operated under the “extra-low” temperature condition, -7°C DB and
   -8°C WB temperature with rated voltage 230V shall be used.
 Capacity is measured at outdoor temperature 7°C DB and 6°C WB with controlled water inlet 30°C and water
   outlet 35°C (EN 14511-2)
 Flowrate indicated are based on nominal capacity adjustment of leaving water temperature (LWT) 35°C and
   ΔT=5°C.
 EER and COP classification is at 230V only in accordance with EU directive 2003/32/EC.
 *3 Above 55°C, only possible with backup heater operation.
 *4 Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to
   55°C.
 *** The sound pressure and sound power level is measured with distance 1.0m from the unit and height at 1.5m.
   (Test carry out for cooling at ambient 35°C DB and Water Out 7°C, heating at ambient 7°C DB / 6°C WB and
   water out 55°C)
 **** The sound power level is measured with accordance to EN12102 under conditions of the EN14825.
 It is recommended to follow DHW tank water quality limit for Panasonic Air to Water All in One according to
   Drinking Water Directive 98/83 EC

   27


--- Page 28 ---
4. Features
   Inverter Technology
   o Energy saving

   High Efficiency

   Environment Protection
   o Non-ozone depletion substances refrigerant (R32)

   Long Installation Piping
   o Long piping up to 25 meter (UDZ03KE5), 50 meter (UDZ05/07/09KE5) with height difference
   20 meter (UDZ03KE5), 30 meter (UDZ05/07/09KE5)

   Easy to use control panel
   o Auto mode
   o Holiday mode
   o Dry concrete function
   o Weekly timer setting

   A-class energy efficiency pump
   o Water pump speed can be set by selection at control panel

   Improved deice cycle

   Protection Feature
   o Random auto restart after power failure for safety restart operation
   o Gas leakage protection
   o Prevent compressor reverse cycle
   o Inner protector to protect compressor

   Serviceability Feature
   o Breakdown Self Diagnosis function
   o System Status Check Buttons for servicing purpose
   o System Pumpdown Button for servicing purpose

   28


--- Page 29 ---
5. Location of Controls and Components
5.1   Indoor Unit
5.1.1   Remote Controller buttons and display

   The LCD display as shown in this manual are for   B   C   D
   instructional purpose only, and may differ from the
   actual unit.
   Buttons / Indicator
   1   Quick Menu button   A
   E
   Back button
   2   3
   Returns to the previous screen
   LCD Display   F
   3
   (Actual - Dark background with white icons)
   Main Menu button   G
   4
   For function setup   2   4
   ON/OFF button
   5
   Starts/Stops operation
   Operation indicator
   6   Illuminates during operation, blinks during   1   5
   alarm.
   6

   Press centre   Cross key buttons
   Selects an item.
   Up

   Left   Right
   No glove

   Down
   Enter button
   Fixes the selected content.
   No pen

   29


--- Page 30 ---
Display
A   Mode selection

   *1, *2 AUTO   • Depending on the preset outdoor *1, *2 COOL   • COOL operation is either turned
   temperature, the system selects   ON or OFF.
   HEAT or *1, *2 COOL operation   • The outdoor unit provides cooling
   mode.   to the system.
   Auto Heat   Auto Cool
   *1, *2 AUTO   • Depending on the preset outdoor *1, *2 COOL   • The outdoor unit provides cooling
   + TANK   temperature, the system selects + TANK   to the system.
   HEAT + TANK or *1, *2 COOL +   • The outdoor unit provides heating
   TANK operation mode.   when boiling tank.
   Auto Heat   Auto Cool
   HEAT   • HEAT operation is either turned   TANK   • TANK operation is either turned
   ON or OFF.   ON or OFF.
   • The outdoor unit provides heat to   • The outdoor unit provides heat to
   the system.   the water tank.
   HEAT   • The outdoor unit provides heat to   * The direction icons point to the currently
   + TANK   the water tank and the system.   active mode.
   • This mode can be selected only
   when the water tank is installed.   • Room operation / Tank operation.

   • Deice operation.

B   Operation icons
   The status of operation is displayed.
   Icon will not display (under operation OFF screen) whenever operation is OFF except weekly timer.
   Holiday operation status   Weekly Timer operation status   Quiet operation status
   Zone:Room Thermostat   Demand Control or
   Powerful operation status
   →Internal sensor status   SG ready or SHP status
   Room Heater status   Tank Heater status   Solar status
   Bivalent status
   (Boiler)
C   Temperature of each zone
D   Time and day
E   Water Tank temperature
F   Outdoor temperature
G   Sensor type/Set temperature type icons
   Water Temperature   Water Temperature
   Pool only
   →Compensation curve   →Direct
   Room Thermostat   Room Thermostat
   Room Thermistor
   →External   →Internal

*1 The system is locked to operate without COOL mode. It can be unlocked only by authorised installers or our authorised service partners.
*2 Only displayed when COOL mode is unlocked (This means when COOL mode is available).

   30


--- Page 31 ---
5.1.2   Initialization

   Before starting to install the various menu settings, please initiate the Remote Controller by selecting the language of
   operation and installing the date and time correctly.
   When power is turned on for the ﬁrst time, it becomes the setting screen automatically. It can also be set from personal
   setting of the menu.
   Selecting the language   LCD blinking
   Wait while the display is initializing.
   When initializing screen ends, it turns to
   normal screen.
   When any button is pressed, language
   setting screen appears.

   1 Scroll with   and   to select the language.

   2 Press   to confirm the selection.

   Setting the clock   Clock format   12:00am,Sat

   1 Select with   or   how to display the time,   24h
   either 24h or am/pm format (for example, 15:00
   or 3:00 pm).   am/pm

   Select   Confirm
   2 Press   to confirm the selection.
   Date & Time   12:00am,Sat
   3 Use   and   to select year, month, day,   Year/Month/Day   Hour : Min
   hour and minutes. (Select and move with
   2022 / 01 / 01   12 : 00 am
   and press   to confirm.)
   Select   Confirm
   4 Once the time is set, time and day will appear
   on the display even if the Remote Controller is
   turned OFF.
   Front grille   12:00am,Sat
   5 Final precaution step to check and confirm
   whether outdoor front grille is fixed before   Is O/D front grille fixed?
   operating the unit for safety purpose.   No
   Select Yes if outdoor front grille is already   Yes
   fixed. Then it will proceed to main screen.
   Select   Confirm
   Select No if outdoor front grille is not yet fixed.
   A caution message will pop up to remind on the   Front grille   12:00am,Sat
   Caution
   installation.   Is O/D front grille fixed?
   To preventNoinjury, fix
   front grille before ope.
   Yes
   Close
   Select   Confirm
   12:00am,Sat

   Start

   31


--- Page 32 ---
5.1.3   Quick Menu

   After the initial settings have been completed, you can select a quick menu from the following options and edit
   the setting.

   1   Press   to display the quick menu.   2   Use   to select menu.
   3   Press   to turn on/off the select menu.

   Quick Menu
   Force DHW   Powerful   Quiet   Force Heater

   Weekly Timer   Force Defrost   Error Reset   R/C Lock

   Select each setting and conﬁrm the setting according to
   the instructions displayed at the bottom of the screen.
   (The icons refer to each selection key.)

   To return to the Main Screen,

   Press   or   .

   32


--- Page 33 ---
5.1.4   How to use the Quick Menu

   Force DHW
   Select this icon to turn the Tank DHW on or off.
   Press   to confirm your selection.

   • Force DHW is turned off.

   • Force DHW is turned on.

   Note:
   • Force DHW is disabled when Force Heater is turned on.
   • When Force DHW is turned off, operation & mode should change back to the previous memorized status.

   Powerful
   Select this icon to operate the heating/cooling system powerfully.
   Press   to confirm your selection.
   (The powerful operation starts approximately 1 minute after   is pressed.)

   • Powerful mode is set off.

   • The Powerful mode operates for 30 minutes.

   • The Powerful mode operates for 60 minutes.

   • The Powerful mode operates for 90 minutes.

   Note:
   • Powerful is disabled when operation is turned OFF.

   33


--- Page 34 ---
Quiet
Select this icon to operate quietly.
Press   to confirm your selection.
(The quiet operation starts approximately 1 minute after   is pressed.)

   • Quiet mode is set off.

   • The Quiet mode operates at level 1.

   • The Quiet mode operates at level 2.

   • The Quiet mode operates at level 3.
   Level 3 is the most quiet mode.

   • Select this to set a timer for the Quiet mode operation.

   After 1 sec delay.

   Select “Yes”.
   • Select “Yes” using   buttons.

   Select pattern “1” ~ “6”.

   Select “Edit”.
   • If you select “Delete”, the timer setting of the selected pattern will be deleted.

   Set the hour and minutes.

   Select the level of Quiet.

   Note:
   • If the time overlaps with another pattern, “Set time is overlapped!” will appear on the
   screen.

   34


--- Page 35 ---
Force Heater
Select to force the Heater on.
Press   to confirm your selection.
(The Force Heater mode starts approximately 1 minute after   is pressed.)

   • Force Heater is turned off.

   • Force Heater is turned on.

Note:
• Force Heater is disabled whenever operation is already on and “Disabled due to
  operation ON!” will be displayed.

   35


--- Page 36 ---
Weekly Timer
Select this icon to delete (cancel) or change the pre-set Weekly Timer.
Press   to confirm your selection.

   • Timer is not ON.

   • Timer is set.

   After 1 sec delay.

   Select “Yes”.
   • If you select “No”, the screen will return to the Main Screen.

   • Timer setup: Select Timer setup to edit the Weekly Timer.
   • Timer copy: Select to copy a timer setting.

   [Example of a Timer setup]
   Select the day(s) which you wish to edit using   buttons.

   If all 6 patterns are not preset, this screen will be displayed.

   1   Select pattern “1” ~ “6”.
   2   Set the hour and minutes of the Timer.
   3   Select ON/OFF of the Timer.
   4   Select the operation mode.
   1   2   3   4   5   6   /   /   /   /   /   /
   • Select mode using   buttons.

   5   Set the temperature for both Zone 1 and 2 (if your
   system has the 2-Zone setting).

   6   Set the Tank temperature.

Note:
• Timer is disabled when Force Heater is turned on or Heat-Cool SW is enabled.
• If you have preset the Weekly Timer on 2 zones, you must repeat the same procedure with Zone 2.

   36


--- Page 37 ---
Force Defrost
Select to defrost the frozen pipes.
Press   to confirm your selection.
(When the mode is accepted, below screen will be displayed.)

   Error Reset
Select to restore the previous settings when error has occurred.
Press   to confirm your selection.
(When the mode has been accepted, below screen will be displayed.)

   • Make sure all units are turned off before selecting this mode which restores the whole
   system to the previous settings.

   R/C Lock
Select to lock the Remote Controller.
Press   to confirm your selection.
(When the mode has been accepted, below screen will be displayed.)

   Select “Yes”.
   (The Main Screen will be locked.)
   • If “No” is selected, the screen will return to the Main Screen.

To unlock the Remote Controller
Press any key.
(When the mode has been accepted, below screen will be displayed.)

   Enter any 4 digits of number (if the number is correct, the screen will be unlocked).

To reset forgotten password (under operation OFF screen)
Press   ,   and continuously for 5 seconds.
(When the mode has been accepted, below screen will be displayed.)
   Select “Reset”.

   (The screen will be off after 3 seconds.)

   37


--- Page 38 ---
5.1.5   Menus (For user)

   Select menus and determine settings according to the system
   available in the household. All initial settings must be done by an
   authorised dealer or a specialist. It is recommended that all alterations
   of the initial settings are also done by an authorised dealer or a
   specialist.
   • After initial installation, you may manually adjust the settings.
   • The initial setting remains active until the user changes it.
   • The Remote Controller can be used for multiple installations.
   • Ensure the operation indicator is OFF before setting.
   • The system may not work properly if set wrongly.
   Please consult an authorised dealer.

   To display <Main Menu>:
   To select menu:
   To confirm the selected content:

   Menu   Default Setting   Setting Options / Display

   1 Function setup
   1.1  Weekly timer
   Once the weekly timer is set up,   Timer setup
   User can edit from Quick Menu.   Select day of the week and
   To set up to 6 patterns of   set the patterns needed
   operation on a daily basis.   (Time / Operation ON/OFF / Mode)
   • Disabled if Heat-Cool SW is   Timer copy
   select “Yes” or if Force Heater
   is on.   Select day of the week
   1.2   Holiday timer
   To save energy, a holiday   OFF
   period may be set to either turn
   OFF the system or lower the   ON
   temperature during the period.   Holiday start and end.   Holiday: End   10:34am,Mon
   Date and time   Year/Month/Day   Hour : Min
   OFF or lowered temperature
   2022 / 01 / 01   10 : 00 am
   • Weekly timer setting may be temporarily disabled during Holiday timer setting
   but it will be restored once the Holiday timer is completed.   Select   Confirm

   1.3   Quiet timer
   To operate quietly during the   Time to start Quiet :
   preset period.   Date and time
   6 patterns may be set.
   Level 0 means the mode is off.   Level of quietness:
   0~3

   38


--- Page 39 ---
Menu   Default Setting   Setting Options / Display

1.4   Quiet priority
   • To select priority during Quiet
   mode between Sound and
   Capacity.
   • If Sound priority is selected,
   unit will operate in quiet   Sound
   condition only.   Sound
   Capacity
   • If Capacity priority is selected,
   unit will operate in quiet
   condition but it will prioritize on
   providing required capacity at
   the same time.
1.5   Room heater
   To set the room heater ON or
   OFF
   OFF.
1.6   Tank heater
   To set the tank heater ON or
   OFF
   OFF.
1.7   Sterilization
   To set the auto sterilization ON
   ON
   or OFF.
   • Do not use the system during sterilization in order to prevent scalding with hot water, or overheating of shower.
   • Ask an authorised dealer to determine the level of sterilization function ﬁeld settings according to the local laws and
   regulations.
1.8   DHW mode (Domestic Hot Water)
   To set the DHW mode to
   Standard or Smart.
   • Standard mode have faster
   DHW Tank heat up time.   Standard
   Meanwhile Smart mode
   take longer time to heat up
   DHW time with lower energy
   consumption.
   To set the tank sensor to Top
   or Center.
   • Selection of the tank sensor
   to top slow down the start of
   boiling up the tank and reduce   Top
   power consumption.
   Please change this selection
   to “Center” when the hot water
   becomes insufﬁcient.

   39


--- Page 40 ---
Menu   Default Setting   Setting Options / Display

 2 System check
2.1  Energy monitor
   Present or historical chart of   Present
   energy consumption, generation   Select and retrieve
   or COP.   Historical chart   Total consumption (1year)
   Select and retrieve   0.0
   kWh

   • COP= Coefﬁcient of Performance.
   • For historical chart, the period is selected from 1 day/1 week/1year.   1year 1 2 3 4 5 6 7 8 9 10 11 12 CMth
   • Energy consumption (kWh) of heating, *1, *2 cooling, tank and total may be   Jan, 2022:   0.0 kWh   Approx.

   Month   Mode
   retrieved.
   • The total power consumption is an estimated value based on AC 230 V and
   may differ from value measured by precise equipment.
2.2   System information
   Shows all system information in   Actual system information of 11 items:
   each area.   Inlet / Outlet / Zone 1 / Zone 2 / Tank /
   Buffer tank / Solar / Pool / COMP
   frequency / Pump flowrate / Water pressure
   Select and retrieve
2.3   Error history
   • Refer to Troubleshooting for
   error codes.
   • The most recent error code is   Select and retrieve
   displayed at the top.

2.4   Compressor
   Shows the compressor
   performance.
   Select and retrieve

2.5   Heater
   Total hours of ON time for
   Room heater/Tank heater.
   Select and retrieve

*1 The system is locked to operate without COOL mode. It can be unlocked only by authorised installers or our authorised service partners.
*2 Only displayed when COOL mode is unlocked (This means when COOL mode is available).

   40


--- Page 41 ---
Menu   Default Setting   Setting Options / Display

 3 Personal setup
3.1  Remote control No.
   • To display remote control
   number of a particular remote   RC No.   10:34am,Mon
   controller so that installer and
   end user are well informed.   RC-1
   Select and retrieve
   • Main remote controller is
   displayed as RC-1. Second
   remote controller is displayed   Confirm
   as RC-2.
3.2   Touch sound
   Turns the operation sound ON/
   ON
   OFF.
3.3   LCD contrast
   Sets the screen contrast.

   3

3.4   Backlight
   Sets the duration of screen
   backlight.
   1 min

3.5   Backlight intensity
   Sets screen backlight
   brightness.
   4

3.6   Clock format
   Sets the type of clock display.   Clock format   10:34am,Mon

   24h
   am/pm
   am/pm

   Select   Confirm

3.7   Date & Time
   Sets the present date and time.   Date & Time   10:34am,Mon
   Year/Month/Day   Hour : Min

   Year / Month / Day / Hour / Min   2022 / 01 / 01   10 : 00 am

   Select   Confirm

   41


--- Page 42 ---
Menu   Default Setting   Setting Options / Display

3.8   Language
   Sets the display language for   ENGLISH / FRANÇAIS / DEUTSCH /
   the top screen.   ITALIANO / ESPAÑOL / DANISH /
   SWEDISH / NORWEGIAN / POLISH /
   CZECH / NEDERLANDS / TÜRKÇE /
   SUOMI / MAGYAR / SLOVENŠČINA /
   HRVATSKI / LIETUVIŲ / PORTUGUÊS /
   БЪЛГАРСКИ / EESTI / LATVIEŠU /
   ROMÂNĂ / SHQIP / SLOVENČINA /
   МАКЕДОНСКИ / УКРАЇНСЬКА / ΕΛΛΗΝΙΚΑ
3.9   Unlock password
   4 digit password for all the
   settings.
   0000

 4 Service contact
4.1  Contact 1 / Contact 2
   Preset contact number for
   installer.
   Select and retrieve

   42


--- Page 43 ---
5.1.6   Menus (For installer)

   Menu   Default Setting   Setting Options / Display

   5 Installer setup System setup
   5.1   Optional PCB connectivity
   To connect to the external PCB
   No
   required for servicing.
   • If the external PCB is connected (optional), the system will have following additional functions:
   1 Control over 2 zones (including the swimming pool and the function to heat water in it).
   2 Solar function (the solar thermal panels connected to either the DHW (Domestic Hot Water) Tank or the Buffer Tank.
   • DHW is not applicable for WH-ADC *models.
   3 External compressor switch.
   4 External error signal.
   5 SG ready control.
   6 Demand control.
   7 Heat-Cool SW

   5.2   Zone & Sensor
   To select the sensors and to   Zone
   select either 1 zone or 2 zone   • After selecting 1 or 2 zone system, proceed
   system.   to the selection of room or swimming pool.
   • If the swimming pool is selected, the
   temperature must be selected for
   T temperature between 0°C ~ 10 °C.
   Sensor
   * For room thermostat, there is a further
   selection of external or internal.
   • If select internal, there is a further selection
   of RC-1 or RC-2 (only available when Zone
   selection is 1 zone system).
   Select RC-1 if main remote controller’s
   thermistor is to be used for room temperature
   control and vice versa.
   5.3   Heater capacity
   To reduce the heater power if
   unnecessary.*
   3 kW / 6 kW / 9 kW

   * Options of kW vary depending
   on the model.
   5.4 Anti freezing
   To activate or deactivate the
   water freeze prevention when   Yes
   the system is OFF

   43


--- Page 44 ---
Menu   Default Setting   Setting Options / Display

5.5   DHW capacity
   To select tank heating capacity
   to variable or standard. Variable
   capacity heat up tank with
   fast mode and keep the tank   Variable
   temperature with efﬁcient mode.
   While standard capacity heat up
   tank with rated heating capacity.
5.6   Buffer tank connection
   To connect tank to the system   No
   and if selected YES, to set
   T temperature.   Yes
   Buffer tank   10:34am,Mon
   T for Buffer tank
   Set T for Buffer   Range: (0°C~10°C)
   5 °C   Steps: ±1°C   °C
   Tank   5

   Select   Confirm

5.7   Base pan heater
   To select whether or not   No
   optional base pan heater is
   connected.   Yes
   * Type A - The base pan heater
   activates only during
   deice operation.
   * Type B - The base pan heater   Set base pan heater
   A
   activates when outdoor   type*.
   ambient temperature is
   5 °C or lower.
5.8   Alternative outdoor sensor
   To select an alternative outdoor
   No
   sensor.
5.9   Bivalent connection
   To select to enable or disable
   No
   bivalent connection.
   Yes
   To select either auto control
   pattern or SG ready input
   control pattern or smart control   Auto
   pattern.   Auto   SG ready
   * This selection only display   Smart
   to select when optional pcb
   connection set to Yes.

   44


--- Page 45 ---
Menu   Default Setting   Setting Options / Display

  To select a bivalent connection   Yes Auto
  to allow an additional heat
  source such as a boiler to heat-   Set outdoor
  up the buffer tank and domestic   temperature for
   -5 °C
  hot water tank when heatpump   turn ON Bivalent
  capacity is insufﬁcient at low   connection.
  outdoor temperature. The
  bivalent feature can be set-up   Yes After selecting the outdoor temperature
  either in alternative mode   Control pattern
  (heatpump and boiler operate   Alternative / Parallel / Advanced parallel
  alternately), or in parallel
  mode (both heatpump and   • Select advanced parallel for bivalent use of
  boiler operate simultaneously),   the tanks.
  or in advance parallel mode
  (heatpump operates and boiler   Control pattern Alternative
  turns on for buffer-tank and/or
  domestic hot water depending   Option to set external
  on the control pattern setting   pump either ON or
  options).   OFF during bivalent
   OFF
   operation. Set to ON
   if system is simple
   bivalent connection.
   Control pattern Advanced parallel
   Heat   Selection of the tank

   • “Heat” implies Buffer Tank and “DHW”
   implies Domestic Hot Water Tank.

   Control pattern Advanced parallel Heat Yes

   • Buffer Tank is activated only after selecting
   “Yes”.

   Set the temperature
   -8 °C   threshold to start the
   bivalent heat source.

   Delay timer to start
   the bivalent heat
   0:30
   source
   (in hour and minutes).

   Set the temperature
   -2 °C   threshold to stop the
   bivalent heat source.

   45


--- Page 46 ---
Menu   Default Setting   Setting Options / Display

   Delay timer to stop
   the bivalent heat
   0:30
   source
   (in hour and minutes).

   Control pattern Advanced parallel DHW Yes

   • DHW Tank is activated only after selecting
   “Yes”.

   Delay timer to start
   the bivalent heat
   0:30
   source
   (in hour and minutes).

  SG ready input control for   Yes SG ready
  bivalent system follow below
  input condition.
   SG signal   Operation pattern
   Vcc-bit1 Vcc-bit2
   Option to set external
   Heat Pump OFF,   pump either ON or
   Open   Open
   Boiler OFF   OFF during bivalent
   Heat Pump ON,   OFF
   Short   Open   operation. Set to ON
   Boiler OFF
   Heat Pump OFF,
   if system is simple
   Open   Short   bivalent connection.
   Boiler ON
   Heat Pump ON,
   Short   Short
   Boiler ON

  To do settings related to   Yes Smart
  electricity and boiler so that unit   Option to set external
  is able to determine whether   pump either ON or
  to operate heat pump or boiler   OFF during bivalent
  at a particular period depends   OFF
   operation. Set to ON
  on operating cost of both heat   if system is simple
  sources. These settings are   bivalent connection.
  electricity price, boiler price,   Yes Smart After selecting for the external pump Energy price
  season, schedule etc.
   Bivalent connection   10:34am,Mon
   Energy price
   - Select Electricity to set on electricity price.
   Electricity
   - Select Boiler to set on boiler price and its   Boiler
   efﬁciency.
   Select   Confirm

   46


--- Page 47 ---
Menu   Default Setting   Setting Options / Display

   Yes Smart After selecting for the external pump Energy price
   Electricity
   Bivalent connection 10:34am,Mon
   0.0 * / kWh
   Electricity price 1
   - There are total 10 different prices can be set
   Range: (0~999.9 /kWh)
   for Electricity:   Steps: ±0.1 /kWh   0.0
   Electricity price 1 ~ Electricity price 10
   - Range is 0 ~ 999.9 * / kWh   Select

   - Press or to enter a setting screen as   Figure 1
   shown in Figure 1. Then start setting the   Bivalent connection 10:34am,Mon
   value of electricity price.   Electricity price 1

   (eg. Electricity price 1), press or to go
   0 0 0.0
   - After ﬁnish setting a particular electricity price Range: (0~999.9 /kWh)
   Steps: ±0.1 /kWh   0.0
   and set for other electricity price.   Select   Confirm
   * Set the price according to value provided by   Select
   electrical supply company.
   Yes Smart After selecting for the external pump Energy price Boiler
   0.0 * / kWh   Bivalent connection 10:34am,Mon
   - Refer to method of Electricity price setting   Boiler price
   above for setting of boiler price.   Range: (0~999.9 /kWh)
   - After ﬁnish setting of boiler price, set the   Steps: ±0.1 /kWh   0.0
   boiler efﬁciency (Range : 0 ~ 99%).
   Select   Confirm

   0%   Bivalent connection   10:34am,Mon
   * Set the price according to value provided by   Boiler efficiency
   boiler or gas supply company.   Range: (0~99%)
   Steps: ±1%   0

   Select   Confirm

Remark : * implies cents in most currency except Czech crown.

   47


--- Page 48 ---
Menu   Default Setting   Setting Options / Display

   Yes Smart After selecting for the external pump Schedule Season
   setting
   Season 1 : Dec (Refers to Winter   Bivalent connection 10:34am,Mon
   season)   Schedule
   Season 2 : Mar (Refers to Spring   Season setting
   season)   Schedule setting
   Season 3 : Jun (Refers to Summer
   season)   Select   Confirm
   Season 4 : Oct (Refers to Autumn season)
   - There are total 4 seasons to be set   Bivalent connection 10:34am,Mon
   - Set the starting month for each   Season 1: Start month
   season.   Range: (Jan~Dec)
   Steps: ±1month   Dec
   (Eg. when Season 1 is set to Dec and
   Season 2 is set to Mar, month of December   Select   Confirm
   to February will be treated as Season 1).
   Yes Smart After selecting for the external pump Schedule Schedule
   setting
   Start time (Pattern 1) : 3:00am   Bivalent connection 10:34am,Mon
   Start time (Pattern 2) : 9:00am   Schedule setting
   Start time (Pattern 3) : 4:00pm   Season 1
   Start time (Pattern 4) : 9:00pm   Season 2
   - For each season, there are total 4 patterns   Season 3
   can be set.   Select   Confirm

   Season 1   10:34am,Mon
   Start time   Price( /kWh)
   Price (Pattern 1/2/3/4) : 1
   1. 3:00am   0.0
   - Set the target start time and the appropriate   2. 9:00am   0.0
   electricity price for each pattern.   3. 4:00pm   0.0
   Select   Edit

   Bivalent connection 10:34am,Mon
   Schedule settingSelect
   - Select “1” to edit both start time and   1: To edit time & price
   Season  1
   electricity price. Select “2” to edit electricity   2: To edit price only2
   Season
   price only.   1Season 23
   Select   Confirm

   48


--- Page 49 ---
Menu   Default Setting   Setting Options / Display
   - Range of start time displayed can be in “24h”   Season 1   10:34am,Mon
   or “am/pm” format depend on setting of   Pattern 1: Start time
   “Clock format”.   Range: (0.00~23.00)
   Steps: ±1hour   3.00

   Select   Confirm

   - Range of electricity price is 0 ~ 10 which   Season 1   10:34am,Mon
   refers back to the 10 different electricity   Pattern 1: Price   0.0   /kWh
   price set previously (under “Energy price >   Range: (0~10)
   Electricity”:   Steps: ±1   0
   Electricity price 1 ~ Electricity price 10).
   The price displayed on the upper right corner   Select   Confirm
   indicates the previous set value of Electricity
   price 1 to Electricity price 10.
   * When the price is set to “0”, the electricity
   price will be treated as 0.0 * / kWh. It is for
   the convenience of installer when 0.0 is the
   desired setting value for a particular time.
5.10   External SW

   No

5.11   Solar connection
   • The optional PCB connectivity
   No
   must be selected YES to
   enable the function.
   Yes
   • If the optional PCB
   connectivity is not selected,
   the function will not appear on
   the display.   Buffer tank   Selection of the tank
   • DHW is not applicable for
   WH-ADC *models.
   Yes After selecting the tank

   Set T ON
   10 °C
   temperature

   49


--- Page 50 ---
Menu   Default Setting   Setting Options / Display

   Yes After selecting the tank   T ON temperature

   Set T OFF
   5 °C
   temperature

   Yes After selecting the tank   T ON temperature   T OFF temperature

   Set Antifreeze
   5 °C
   temperature

   Yes After selecting the tank   T ON temperature   T OFF temperature
   After setting the antifreeze temperature

   80 °C   Set Hi limit

5.12   External error signal

   No

5.13   Demand control

   No

5.14   SG ready

   No

   Yes

   Capacity (1) & (2)
   of DHW (in %),
   120 %
   Heat (in %) and
   Cool (in °C)

5.15   External compressor SW

   No

5.16   Circulation liquid
   To select whether to circulate
   water or glycol in the system.
   Water

   50


--- Page 51 ---
Menu   Default Setting   Setting Options / Display

5.17   Heat-Cool SW

   No

5.18   Force heater
   To turn on Force heater either
   manually (by default) or
   automatically.   Manual

5.19   Force defrost
   If auto selection is set, outdoor
   unit will start defrost operation
   Manual
   if long heating hour operate
   during low outdoor temperature.
5.20   Defrost signal
   To turn on defrost signal to stop
   fan coil during defrost operation.
   (If defrost signal set to yes,   No
   bivalent function will not
   available to use)
5.21   Pump flowrate
   To set variable ﬂow pump
   control or ﬁx pump duty control.   T

5.22   DHW Defrost
   Allow system to run defrost by
   using hot water instead of room   Yes
   unit for better room comfort.
5.23   Heating control
   To select unit operation
   Comfort
   condition whether to achieve
   Comfort
   set temperature faster or to   Efficiency
   save energy.

   51


--- Page 52 ---
Menu   Default Setting   Setting Options / Display

5.24   External meter
   To set which external meter   Heat-cool meter : No   External meter   10:34am,Mon
   to be used depends on meter   * Tank meter : No   Heat-Cool meter
   connection.   Elec. meter HP : No   Tank meter
   There are generation   Elec. meter 1 (PV) : No   Elec. meter HP
   Elec. meter 2 (Building) : No   Elec. meter 1 (PV)
   meters and various types of
   Elec. meter 3 (Reserve) : No   Select   Confirm
   electricity meters.
   For generation meters,   External meter   10:34am,Mon
   there are two connection   * Only available when Heat-cool meter select   Elec. meter HP
   systems :-   Yes   Elec. meter 1 (PV)
   a) One generation meter   Elec. meter 2 (Building)
   system :   Elec. meter 3 (Reserve)
   Heat-cool meter only   Select   Confirm
   b) Two generation meter   Heat-cool meter
   system :
   - Set Heat-cool meter to Yes when this
   Heat-cool meter and Tank
   generation meter is connected.
   meter
   - It is to measure energy generation of heat
   pump unit during heating, cooling and DHW
   operation (one generation meter system)
   or during heating and cooling only (two
   generation meter system).
   Tank meter
   - Set Tank meter to Yes when this generation
   meter is connected.
   - It is to measure energy generation of heat
   pump unit during DHW operation.
   * Only available to select when Heat-cool
   meter is set to Yes.
   Only set Tank meter to Yes when the
   connection is two generation meter system.
   Elec. meter HP
   - Set Elec. meter HP to Yes when this
   electricity meter is connected.
   - It is to measure energy consumption of heat
   pump unit.
   Elec. meter 1 (PV)
   - Set Elec. meter 1 (PV) to Yes when this
   electricity meter is connected.
   - It is to measure energy generation of solar
   system.
   * This data will be displayed only on Cloud
   system.
   Elec. meter 2 (Building)
   - Set Elec. meter 2 (Building) to Yes when this
   electricity meter is connected.
   - It is to measure energy consumption of the
   building.
   * This data will be displayed only on Cloud
   system.

   52


--- Page 53 ---
Menu   Default Setting   Setting Options / Display

   Elec. meter 3 (Reserve)
   - Set Elec. meter 3 (Reserve) to Yes when this
   electricity meter is connected.
   - It is to measure energy consumption
   * This data will be displayed only on Cloud
   system.
5.25   Electrical anode
   To enable or disable operation   Yes (only for WH-ADC0309K6E5AN model)
   of electrical anode.   No (for non -AN models)

(NOTE) : If [Approx.] is shown on Energy Monitor display, data displayed on the remote controller is obtained through heat
   pump’s internal calculation.
   If [Approx.] is NOT shown on Energy Monitor display, data** displayed on the remote controller is obtained by
   External Meters.
   Data stored on the Aquarea unit can be mixed between internal calculation and External Meters.
   **In order to know the exact consumption or generation, please use as reference always the External Meters’ data.
Remark : Elec. stands for “Electricity”
   HP stands for “Heat pump”

   53


--- Page 54 ---
Menu   Default Setting   Setting Options / Display

6 Installer setup Operation setup
   To access to the four major
   functions or modes.   4 main modes

   Heat / *1, *2 Cool / *1, *2 Auto / Tank

6.1   Heat
   To set various water & ambient
   temperatures for heating.   Water temp. for heating ON /
   Outdoor temp. for heating OFF /
   T for heating ON /
   Heater ON/OFF

   Water temp. for heating ON

   Heating ON
   temperatures in
   Compensation curve
   compensation curve
   or direct input.

   Water temp. for heating ON Compensation curve
   Input the 4
   temperature points
   X axis: -5 °C, 15 °C
   (2 on horizontal X
   Y axis: 55 °C, 35 °C
   axis, 2 on vertical Y
   axis).
   • Temperature range: X axis: -20 °C ~ 15 °C, Y axis: See below
   • Temperature range for the Y axis input:
   1. WH-UD model: 20 °C ~ 60 °C
   2. WH-UH model & Back up heater is enabled: 25 °C ~ 65 °C
   3. WH-UH model & Back up heater is disabled: 35 °C ~ 65 °C
   4. WH-UX model: 20 °C ~ 60 °C
   • If 2 zone system is selected, the 4 temperature points must also be input for Zone
   2.
   • “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.
   Water temp. for heating ON Direct

   Temperature for
   35 °C
   heating ON

   • Min. ~ Max. range is conditional as follows:
   1. WH-UD model: 20 °C ~ 60 °C
   2. WH-UH model & Back up heater is enabled: 25 °C ~ 65 °C
   3. WH-UH model & Back up heater is disabled: 35 °C ~ 65 °C
   4. WH-UX model: 20 °C ~ 60 °C
   • If 2 zone system is selected, temperature set point must input for Zone 2.
   • “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.

*1 The system is locked to operate without COOL mode. It can be unlocked only by authorised installers or our authorised service partners.
*2 Only displayed when COOL mode is unlocked (This means when COOL mode is available).

   54


--- Page 55 ---
Menu   Default Setting   Setting Options / Display

   Outdoor temp. for heating OFF

   Temperature for
   24 °C
   heating OFF

   T for heating ON
   Set T for heating
   ON.
   * This setting will not
   5 °C
   available to set when
   pump ﬂowrate set to
   Max. duty.
   Heater ON/OFF
   Heater ON/OFF Outdoor temp. for heater ON

   Temperature for
   0 °C
   heater ON

   Heater ON/OFF Delay time for heater ON

   Delay time for heater
   0:30 min
   to turn on

   Heater ON/OFF Water temperature for heater ON

   Setting of water
   temperature to turn
   -4 °C
   on from water set
   temperature.

   Heater ON/OFF Water temperature for heater OFF

   Setting of water
   temperature to turn
   -2 °C
   off from water set
   temperature.

6.2   *1, *2 Cool
   To set various water & ambient   Water temperatures for cooling ON
   temperatures for cooling.   and T for cooling ON.

*1 The system is locked to operate without COOL mode. It can be unlocked only by authorised installers or our authorised service partners.
*2 Only displayed when COOL mode is unlocked (This means when COOL mode is available).

   55


--- Page 56 ---
Menu   Default Setting   Setting Options / Display

   Water temp. for cooling ON

   Cooling ON
   temperatures in
   Compensation curve
   compensation curve
   or direct input.

   Water temp. for cooling ON Compensation curve
   Input the 4
   temperature points
   X axis: 20 °C, 30 °C
   (2 on horizontal X
   Y axis: 15 °C, 10 °C
   axis, 2 on vertical Y
   axis)
   • If 2 zone system is selected, the 4 temperature points must also be input for Zone
   2.
   • “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.
   Water temp. for cooling ON Direct

   Set temperature for
   10 °C
   Cooling ON

   • If 2 zone system is selected, temperature set point must input for Zone 2.
   • “Zone 1” and “Zone 2” will not appear on the display if only 1 zone system.
   T for cooling ON
   Set T for cooling ON
   * This setting will not
   5 °C   available to set when
   pump ﬂowrate set to
   Max. duty.
6.3   *1, *2 Auto
   Automatic switch from Heat to   Outdoor temperatures for switching from Heat
   Cool or Cool to Heat.   to Cool or Cool to Heat.

   Outdoor temp. for (Heat to Cool) /
   Outdoor temp. for (Cool to Heat)

   Outdoor temp. for (Heat to Cool)

   Set outdoor
   temperature for
   15 °C
   switching
   from Heat to Cool.

*1 The system is locked to operate without COOL mode. It can be unlocked only by authorised installers or our authorised service partners.
*2 Only displayed when COOL mode is unlocked (This means when COOL mode is available).

   56


--- Page 57 ---
Menu   Default Setting   Setting Options / Display

   Outdoor temp. for (Cool to Heat)

   Set outdoor
   temperature for
   10 °C
   switching
   from Cool to Heat.

6.4   Tank
   Setting functions for the tank.
   Floor operation time (max) /
   Tank heat up time (max) /
   Tank re-heat temp. /
   Sterilization

   • The display will show 3 functions at a time.
   Floor operation time (max)

   Maximum time for
   8:00   ﬂoor operation
   (in hours and minutes)

   Tank heat up time (max)

   Maximum time for
   1:00   heating the tank
   (in hours and minutes)

   Tank re-heat temp.

   Set temperature to
   -8 °C   perform reboil of tank
   water.

   Sterilization
   Sterilization may be
   set for 1 or more days
   Monday   of the week.
   Sun / Mon / Tue /
   Wed / Thu / Fri / Sat
   Sterilization: Time
   Time of the selected
   day(s) of the week to
   12:00   sterilize the tank

   0:00 ~ 23:59

   57


--- Page 58 ---
Menu   Default Setting   Setting Options / Display

   Sterilization: Boiling temp.

   Set boiling
   65 °C   temperatures for
   sterilize the tank.

   Sterilization: Ope. time (max)

   Set sterilizing time
   0:10
   (in hours and minutes)

 7 Installer setup Service setup
7.1   Pump maximum speed
   To set the maximum speed of   Setting the ﬂow rate, max. duty and operation
   the pump.   ON/OFF of the pump.
   Flow rate: XX:X L/min
   Max. Duty: 0x40 ~ 0xFE,
   Pump: ON/OFF/Air Purge
7.2   Pump down
   To set the pump down   Pump down operation
   operation.

   ON

7.3   Dry concrete
   To dry the concrete (ﬂoor, walls,   Edit to set the temperature of dry concrete.
   etc.) during construction.

   Do not use this menu for any   ON / Edit
   other purposes and in period
   other than during construction
   Edit
   Heating temperature
   for drying the
   Stages: 1   concrete.
   Temperature: 25 °C   Select the desired
   stages: 1 ~ 10,
   range: 1 ~ 99
   ON
   Conﬁrm the setting temperatures of dry
   concrete for each stage.

   58


--- Page 59 ---
Menu   Default Setting   Setting Options / Display

7.4   Service contact
   To set up to 2 contact names
   Service engineer’s name and contact number.
   and numbers for the User.

   Contact 1 / Contact 2

   Contact 1 / Contact 2
   Contact name or number.

   Name / phone icon

   Input name and number

   Contact name: alphabet a ~ z.
   Contact number: 1 ~ 9

8 Installer setup Remote control setup
   • To select whether to use
   one remote controller or two   Selection of one   Single
   remote controllers.   or two remote
   Dual
   • Select Single when   controllers.
   one remote controller is
   connected. Select Dual when
   When Dual is
   two remote controllers are
   connected. Second remote   selected, Main remote
   controller can be used for   controller (RC-1) will
   zone 2 room temperature   start to communicate
   RC-1 & RC-2
   control.   with second remote   sync. in progress!
   Single   controller (RC-2) and
   display “RC-1 & RC-2
   sync. in progress”.
   They are ready to be
   used after this pop up
   screen disappears.
   When both remote
   controllers have   Communication with
   communication   RC-2 failed!
   failure, it will display
   “Communication with   Close
   RC-2 failed”.

   59


--- Page 60 ---
5.1.7   Main Components

   7

   2
   6
   3   5
   1   23

   8-1 8-2

   22

   9 12 14 17

   13

   11

   10   15
   4
   19
   20   18

   16   21

   24

   1   Remote Controller   9   Magnetic Water Filter Set   17 Top Plate
   2   Left Decoration Panel   10 3-Way Valve   18 Right Plate
   3   Right Decoration Panel   11 Expansion Vessel   19 Left Plate
   4   Water Pump   12 Air Purge Valve   20 Rear Plate
   5   Control Board Cover   13 Pressure Relief Valve   21 Tank Sensor (Not Visible)
   6   Control Board   14 Flow Sensor   22 Bushing (4 pieces)
   7   Main PCB   15 Water Pressure Sensor   23 Network Adaptor Holder
   8-1 Terminal Board   16 Front Plate   24 Drain Tap
   (Main Power)
   8-2 Terminal Board
   (Back-up Heater, if applicable)

   60


--- Page 61 ---
5.2   Outdoor Unit
   Air inlet (rear)

   Air inlet (side)

   Air outlet

   WH-UDZ03KE5

   Air inlet (rear)

   Air inlet (side)

   Air outlet

   WH-UDZ05_07_09KE5

   61


--- Page 62 ---
6. Dimensions
6.1   Indoor Unit

   599   602

   115
   b a e f c d

   118
   68

   68

   62

   70
   1642

   FRONT VIEW   SIDE VIEW

   43   514   43   345 70
   215 60   g

   425   7574
   63
   77

   59
   465

   55
   59
   440
   60

   Adjustable Feet 1 position

   BOTTOM VIEW   TOP VIEW

   Tube Connector   Function   Connector Size
   a   Water Inlet (From Space Heating/Cooling)   R 1"
   b   Water Outlet (To Space Heating/Cooling)   R 1"
   c   Cold Water Inlet (Domestic Hot Water Tank)   R ¾"
   d   Hot Water Outlet (Domestic Hot Water Tank)   R ¾"
   e   Refrigerant Gas   7/8-14UNF
   f   Refrigerant Liquid   7/16-20UNF
   g   Drain Water Hole   ---

   Unit: mm

   62


--- Page 63 ---
6.2   Outdoor Unit
6.2.1   WH-UDZ03KE5

   <Top View>
   Space necessary for
   824   68.5
   installation
   21.9   (124)   540   160   53.4

   32
   100 mm

100 mm

   97
   167
   1000 mm

   330
   Anchor Bolt Pitch
   540 x 330

   <Side View>   <Side View>
   <Front View>   37   298

   622
   69 61
   (23)

   Unit: mm

   63


--- Page 64 ---
6.2.2   WH-UDZ05KE5 WH-UDZ07KE5 WH-UDZ09KE5

   <Top View>
   Space necessary for
   installation   875   74

   38
   27.5   (131)   613   131
   100 mm

   85
   152
100 mm

   360.5
   1000 mm

   Anchor Bolt Pitch
   360.5 × 613

   <Side View>
   320
   <Side View>   <Front View>

   795
   64

   75
   (25)
   70

   3-way valve at Gas side
   (Low Pressure)
   Unit :mm   2-way valve at Liquid side
   (High Pressure)

   64


--- Page 65 ---
7. Refrigeration and Water Cycle Diagram
1 ZONE
   OUTDOOR UNIT   INDOOR UNIT

   FLOOR HEATING
   PRESSURE   WATER OUTLET
   TRANSDUCER   3-WAY
   VALVE
   P
   WATER OUTLET
   EXPANSION   TEMP. SENSOR
   MUFFLER   STRAINER   VALVE   STRAINER   FLOW SENSOR
  (UDZ03KE5)
  PIPE   SANITARY HOT
 TEMP.   REFRIGERANT   WATER OUTLET
   HEX WATER OUTLET
SENSOR   TEMP.
   TEMP. SENSOR
   SENSOR

   WATER TANK
   AIR TEMP.   HEAT EXCHANGER   TEMP. SENSOR
   SENSOR
   WATER TANK

   HEAT EXCHANGER
   WATER INLET
   TEMP. SENSOR

   SANITARY COLD
   EVA.   HIGH PRESSURE   WATER INLET
   EXIT   SENSOR   HIGH PRESSURE   4-WAY
  TEMP.   VALVE   WATER
   SWITCH
 SENSOR   DISCHARGE
   WATER PUMP   VALVE
   DISCHARGE   FILTER
   DISCHARGE
   TEMP.
   MUFFLER   FLOOR HEATING
   SENSOR
   WATER INLET
   TANK TEMP.
   SENSOR   PRESSURE RELIEF
   AIR PURGE
   VALVE
   VALVE
   EXPANSION
   VESSEL
   COMPRESSOR

   REFRIGERANT CYCLE (HEATING)

   REFRIGERANT CYCLE (COOLING)

   Piping size   Rated Length (m)   Min.   Max.
   Pre-charged   Max.   Additional
   Piping   Piping
   Model   Refrigerant   For Heat   For   Elevation   Refrigerant
   Length   Length
   Gas   Liquid   (kg)   Pump   Hydromodule   (m)   (g/m)
   (m)   (m)
   Indoor Unit   + Tank
   Ø12.7mm   Ø6.35mm
WH-UDZ03KE5*   0.90   7   7   20   3   25   20
   (1/2")   (1/4")
WH-UDZ05KE5*,
   Ø15.88mm   Ø6.35mm
WH-UDZ07KE5* and   1.30   7   7   30   3   50   25
   (5/8")   (1/4")
WH-UDZ09KE5*

Example: WH-UDZ03KE5*
If piping length is 15m, the quantity of additional refrigerant should be 100g. [(15-10)m × 20 g/m = 100g]

   65


--- Page 66 ---
8.1
   8. Block Diagram

   INDOOR UNIT   OUTDOOR UNIT

   FUSE1
   ELCB/RCCB
   SUB
   L   FUSE3
   RY-V2   RY-V3   RY-ANODE
   REACTOR
   N   SSR1   SSR200   SSR201   SSR202   SSR203 SSR204   SSR205 SSR206   SSR207
   SC   M   FUSE6
   FUSE1   SEN1   FUSE8   IC19
   POWER SUPPLY 1

   WATER
   PUMP
   CIRCUIT

   NOISE FILTER
   1-phase   WATER   M   M   1
   PUMP   1~   M   M   M   M   M   M   M
   AC230V 50Hz   1~   1~   1~   1~   1~   1~   MS
   1~   1~
   3~   MS
   2-WAYS   3-WAYS  CURRENT   EXTRA   WATER   WATER   POOL   SOLAR   MIXING   MIXING   TH1   3~
   VALVE   VALVE ANODE SYSTEM   PUMP   VALVE 1   VALVE 2   SC
   PUMP   PUMP   WATER   WATER   NTC
   ZONE 1   ZONE 2   PUMP   PUMP

66
   NOISE FILTER
   4 WAYS
   VALVE   FUSE5
   WH-ADC0309K0E5A WH-UDZ03KE5

   2
   PTC
   PTC2   RY-AC

   RY-PWR

   3
   ELCB/RCCB   OPTIONAL
   RY-HT(L3)
   L

   N   BACKUP HEATER

   POWER SUPPLY 2
   1-phase
   AC230V 50Hz


--- Page 67 ---
8.2

   INDOOR UNIT   OUTDOOR UNIT

   FUSE1
   ELCB/RCCB
   SUB
   L
   RY-V2   RY-V3   RY-ANODE
   REACTOR   Q510
   N   SSR1   SSR200   SSR201   SSR202   SSR203 SSR204   SSR205 SSR206   SSR207
   SC   M
   FUSE1   SEN1   FUSE3   FUSE2
   POWER SUPPLY 1   Q1

   WATER
   PUMP
   CIRCUIT

   NOISE FILTER
   1-phase   WATER   M   M   1   IC19
   PUMP   M   M   M   M   M   M   M   FAN
   AC230V 50Hz   1~   1~   FUSE4   DB101   COMPRESSOR
   1~   1~   1~   1~   1~   1~   1~   DB102   MOTOR
   RY-HT2   MS   MS
   2-WAYS   3-WAYS  CURRENT   EXTRA   WATER   WATER   POOL   SOLAR   MIXING   MIXING   FUSE5   3~   3~
   VALVE   VALVE ANODE SYSTEM   PUMP   PUMP   PUMP   WATER   WATER   VALVE 1   VALVE 2   NTC   SC
   ZONE 1   ZONE 2   PUMP   PUMP   TH1
   BASE PAN Q511

67
   HEATER

   NOISE FILTER
   4-WAY
   VALVE
   2
   PTC1 PTC   RY-AC
   3
   RY-PWR

   ELCB/RCCB   OPTIONAL
   RY-HT(L3)
   L

   N   BACKUP HEATER

   POWER SUPPLY 2
   1-phase
   AC230V 50Hz
   WH-ADC0309K0E5A WH-UDZ05KE5 WH-UDZ07KE5 WH-UDZ09KE5


--- Page 68 ---
BLACK   RED   WHITE

   9.1
   BLACK
   BROWN   TERMINAL
   BOARD
   BR   L1
   1   1   (BR)
   BROWN   BR
   REACTOR   B   (B)
   N1
   2   2   BR   OLP
   R   3   3   R   80±3°C
   LEAD WIRE FIXING FOR HEATER
   W   W   4   4

   AC230V ~ 50Hz
   G   W

   POWER SUPPLY 2
   2   1   BL
   TERMINAL   LEAD WIRE FIXING FOR OLP   OPTIONAL   2   1   GROUNDING
   BOARD   W   W   B
   L   BR
   (BR)   L2   L1   G03   OPTIONAL
   (WHT)   (WHT) (GRN)
   N   B   BACKUP HEATER (3kW)

   (BLK)

   (RED)
   (BLU)
   (BLU)

   HT1-L3
   AC2-L3
   (B)

   AC2-N2
   AC2-N3
   Indoor Unit

   FUSE1   FUSE 3
   T3.15A L250V

   AC230V ~ 50Hz
   BR AC1-L3 T6.3A L250V   NOISE
   RECTIFICATION

   POWER SUPPLY 1
   (BRW/GRY)   NOISE FILTER   FILTER
   CIRCUIT   CIRCUIT
   CIRCUIT   CN6

   RY-HT (L3)
   B   AC1-N   OLP BOOSTER
   (BLU)   HEATER
   GROUNDING   SIGNAL
   G01   DETECTION   ROOM TEMP.
   TERMINAL   G   (GRN)   CIRCUIT   ZONE 1
   BOARD
   1   G05   CN5
   (BR)   G   (GRN)
   OUTDOOR AIR
   2   SENSOR
   (B)   COMMUNICATION   SW1   SW2
   CIRCUIT   BUFFER TANK
   3   BL   DATA
   SENSOR
   (BL)   (BLK)
   G   G02   TANK
   (GRN)   ELECTRONIC CONTROLLER   SENSOR

   TO OUTDOOR UNIT
   NOISE   (MAIN)
   GROUNDING   RECTIFICATION   FILTER   CN4
   9. Wiring Connection Diagram

   W   7   7   W   1
   CIRCUIT   CIRCUIT   EXTERNAL
   CONTROL 1
   WATER   BL   4   4   BL   4
   M   R   3   3   R   5   WATER   BL
   PUMP   BR   CONTROL
   BR   2   2   6   PUMP
   B   1   1   B   7   BL   PANEL
   CIRCUIT
   CN-PUMP1

68
   (WHT)   CN3
   RY-CONTACT1
   BOILER CONTACT / DEFROST SIGNAL

   SSR1
   MIXING   MIXING
   VALVE 1   VALVE 2   EXTRA PUMP
   ROOM THERMO 2
   N OPEN CLOSE N OPEN CLOSE
   L   N COOL HEAT
   OLP
   80±3°C
   CN-OLP1 1   BL
   ACN

   RY-V2
   RY-V3
   RY-ANODE

   (BLU) 2   BL
   CN201   CN203   (WHT)   W   3   OPTIONAL
   CN209
   POOL WATER   ACL   BL   1 CN-PWR   1   BR   1   1   BR   1   1 BR 1
   SSR202   W   W
   PUMP   (BLK)   (BLK)   W   B   B   FLOW
   SIGNAL   CN-FLWSEN   B   FLOW   OR   BL   BL
   DETECTION   W   5   (WHT)   SENSOR   4   4   R   SENSOR
   1   BL
   SOLAR WATER   CIRCUIT   W   CN-CNT   4   5   5   5
   PUMP   SSR203   3   4
   W   (WHT)

   (YLW)
   1

   SSR204
   SSR205
   SSR206
   SSR207
   W   SIGNAL   t˚   WATER OUTLET TEMP. SENSOR (THERMISTOR)
   ERROR   4   1
   RY201   DETECTION   CN-TH1   t˚
   SIGNAL   (WHT)   REFRIGERANT TEMP. SENSOR (THERMISTOR)
   1   W   CIRCUIT   t˚
   1 CN-PWR2   WATER INLET TEMP. SENSOR (THERMISTOR)
   CN208   6
   2   2 (BLU)

   (YLW) CN-COMM
   W
   WATER PUMP   CN-TH3 1   t˚
   HEX WATER OUTLET TEMP. SENSOR

   CN-PWR202
   ZONE 1   SSR200   1   W   2 CN-PWR4   (WHT) 2   (THERMISTOR)
   CN-PWR204 2   1 (BLK)
   ELECTRONIC CONTROLLER   (YLW)   3   W
   WATER PUMP   1   t˚   TANK TEMP. SENSOR 1 (THERMISTOR)
   (SUB)   DCN   CN-TH2
   ZONE 2   SSR201
   B   (BLK)   t˚   TANK TEMP. SENSOR 2 (THERMISTOR)
   (BLU)   3 CN-PWR3
   4
   1   DCP   1 (GRN)
   CN-CNT   (RED)   R   REMARKS
   (WHT)   CN205   CN204   CN207   CN206   CN210   W : WHITE
   5   CN-DPS
   CN-CNT2   (RED)   O : ORANGE
   CLOSE
   OPEN
   N

   1 (RED) 5   CN1   CN2   1 34   R : RED
   B : BLUE
   W BL   R
   VCC BIT2 BIT1   BL : BLACK
   BR BL B
   DC DC   Y : YELLOW
   GND 10V   CLOSE OPEN N   HEAT COOL N   L   N   L   1 3
   BR : BROWN
   2-WAY   ROOM THERMO 1 CURRENT

   ZONE 2
   ZONE 1
   ZONE 2
   ZONE 1
   G : GREEN
   SWITCH
   VALVE   M   ANODE

   SENSOR
   SENSOR
   DIGITAL
   SYSTEM
   COMP. SW
   EXTERNAL

   GR : GRAY

   SG SIGNAL
   1~   PRESSURE

   SIGNAL
   HEAT/COOL

   POOL TEMP.
   DEMAND

   ROOM TEMP.
   ROOM TEMP.
   OPTIONAL   SENSOR

   SOLAR TEMP.
   Y/G : YELLOW/GREEN

   WATER TEMP.
   WATER TEMP.
   3-WAY
   VALVE


--- Page 69 ---
9.2   Outdoor Unit
9.2.1   WH-UDZ03KE5
   TO INDOOR UNIT
   REACTOR

TERMINAL  1   2   3   GRY   GRY
 BOARD (BLACK)   (WHITE) (RED)
   ELECTRONIC CONTROLLER   RAT2   RAT1
   (GRY)   (GRY)   OUTDOOR AIR TEMPERATURE
   SENSOR (THERMISTOR)
   RED   DATA (RED)
   1
   FUSE8   CN-TH1   t°

   NOISE FILTER   T3.15A L250V   COMMUNICATION   (WHT)   t°
   CIRCUIT   CIRCUIT   4
   AC-BLK (BLK)   PIPING TEMPERATURE
   BLK   FUSE6   FUSE5
   SENSOR (THERMISTOR)
   (20A 250V)   (20A 250V)
   FUSE1
   (20A 250V)   RECTIFICATION   EVAPORATOR EXIT
   WHT   AC-WHT (WHT)   CN-TH3 1   TEMPERATURE
   CIRCUIT   (YLW) 2
   GRN   FG1 (GRN)   SWITCHING   t°
   SENSOR
   POWER SUPPLY   (THERMISTOR)
   GRN   FG2 (GRN)
   CIRCUIT   1
   CN-STM1   M
   OPTIONAL
   1 BLU HT2 (BLU)   RY-HT2   PFC   RECTIFICATION   (WHT)
   CIRCUIT   CIRCUIT   6   ELECTRO-MAGNETIC
   FUSE3
   COIL (EXPANSION VALVE)
   3 BLU ACN2 (BLU)   T3.15A L250V
   1
   BASE PAN   CN-HOT   ELECTRO-MAGNETIC
   HEATER   (WHT) 3   COIL (4-WAY VALVE)
   10
   1   Q1   COMPRESSOR
   YELLOW (YLW)   W
   FAN   MS   3   U(RED)   RED
   U   P   U
   MOTOR   3~   V(BLU)   BLU
   V   V   MS
   CN-MTR2   14   3~
   BLUE (BLU)   RED (RED)   5   W(YLW)   YLW
   (WHT)   16   N   W
   IC19   HIGH PRESSURE SENSOR
   (TRADEMARK)
   COMPRESSOR TERMINAL   1   BLK
   CN-MTR1   1   1
THE PARENTHESIZED LETTERS ARE   3 (RED)   CN-HPS   WHT   2
 INDICATED ON TERMINAL COVER.   3
   (RED)   RED   3
   4

   RED   HIGH
   REMARKS:   CN-PSW 1
   PRESSURE
   BLACK: (BLK)  BLUE: (BLU)   (WHT) 2
   SWITCH
   WHITE: (WHT)  RED: (RED)   RED
   YELLOW: (YLW) GRAY: (GRY)   DISCHARGE
   GREEN: (GRN) BROWN: (BRW)   CN-DIS 1   TEMPERATURE
   ORANGE: (ORG)   (WHT) 2   SENSOR
   t°
   YELLOW/GREEN: (YLW/GRN)   (THERMISTOR)

Resistance of Compressor Windings
   MODEL   WH-UDZ03KE5
   CONNECTION   9RD138ZAB21
   U-V   2.215 Ω
   V-W   2.194 Ω
   U-W   2.208 Ω
Note: Resistance at 20°C of ambient temperature.

   69


--- Page 70 ---
9.2.2   WH-UDZ05KE5 WH-UDZ07KE5 WH-UDZ09KE5
   YELLOW (YEL)
   0R T (W)   REMARKS:
   BLU : BLUE
   BLK : BLACK
   WHT : WHITE
   RED : RED
   BLUE (BLU)   YLW : YELLOW
   REACTOR   RED (RED)   GRY : GRAY
   OR S (V)   OR R (U)
   GRN : GREEN
   (TRADEMARK)   ORG : ORANGE
   GRY   GRY   COMPRESSOR TERMINAL

   RAT2   RAT1   IC19
   (GRY)   (GRY)
   28   1   RED
   BLK   W
   COMMUNICATION   FUSE4   FUSE5   FUSE2   3   YLW   MS
   DATA   U
   (BLK)   CIRCUIT   (20A 250V)   (20A 250V)   T3.15A L250V   3~
   1   V
   5   BLU
   2
   PFC   11   CN-MTR2   FAN MOTOR
   TERMINAL BOARD
   CIRCUIT   (WHT)
   TO INDOOR UNIT

   Q1
   1   BRW
   AC-BRW FUSE1
   COMPRESSOR
   BLU   NOISE FILTER   P   (RED) U   RED
   2   (BRW)  (30A 250V)
   CIRCUIT   RECTIFICATION
   U
   (BLU) V   BLU   MS
   V   (YLW) W   YLW
   3   CIRCUIT   W   3~
   AC-BLU   N
   (BLU)
   OUTDOOR AIR TEMPERATURE
   GRN   FG1   SENSOR (THERMISTOR)
   (GRN)
   1   t°
   CONTROL   FUSE3
   GRN   FG2   CN-TH1
   YLW/GRN   BOARD   T3.15A L250V   (WHT)
   (GRN)   t°
   SOUND   4
   PIPING TEMPERATURE SENSOR
   CONTROL   PROOF   (THERMISTOR)
   BOARD   BOARD   SWITCHING
   HT2   RECTIFICATION   POWER SUPPLY
   BASE PAN   (BLU) RY-HT2   CIRCUIT   CN-TANK 1   t°
CABINET   1   1   CIRCUIT   (WHT)   3
  SIDE   HEATER   BLU   COMPRESSOR TEMPERATURE
 PLATE   SENSOR (THERMISTOR)
   3   3 BLU   ACN2
   OPTIONAL   (BLU)   RED   RED HIGH
   CN-PSW 1
   ELECTRONIC CONTROLLER   (WHT)  2   PRESSURE
   HIGH   1   1   SWITCH
   2   BLK   CN-HPS
   PRESSURE
   WHT   3(RED)   CN-HOT 1   ELECTRO-MAGNETIC
   SENSOR   3
   RED   (WHT)   COIL (4-WAY VALVE)
   4   3

   1 CN-DIS   6
   DISCHARGE TEMP.   t°
   SENSOR (THERMISTOR)   2 (WHT)   CN-STM1   M
   (WHT)
   1   ELECTRO-MAGNETIC
   COIL (EXPANSION VALVE)
   CN-TH3 1   t°
   (YLW) 2
   EVA EXIT TEMP.
   SENSOR (THERMISTOR)

Resistance of Compressor Windings
   MODEL   WH-UDZ05/07/09KE5
   CONNECTION   9RD220XBC21
   U-V   0.998 Ω
   U-W   0.998 Ω
   V-W   0.998 Ω
Note: Resistance at 20°C of ambient temperature.

   70


--- Page 71 ---
TERMINAL
   BOARD
   BR   L1
   1   1   (BR)
   BR
   B   (B)
   N1
   2   2   BR   OLP
   R   3   3   R   80±3°C
   4   4

   AC230V ~ 50Hz
   W

   POWER SUPPLY 2
   REACTOR

   GROUNDING
   W   W   G   BL
   2   1   OPTIONAL
   B
   TERMINAL   2   1   BACKUP HEATER (3kW)
   BOARD   W   W
   L   BR
   (BR)   L2   L1   G03
   (WHT)   (WHT) (GRN)   12V
   N   B

   (BLK)
   5V

   (RED)
   (BLU)
   (BLU)

   HT1-L3
   AC2-L3
   (B)

   AC2-N2
   AC2-N3
   FUSE1   FUSE 3
   10.1 Indoor Unit

   T3.15A L250V   R141   CN6

   AC230V ~ 50Hz
   BR AC1-L3 T6.3A L250V   NOISE   6.49k
   RECTIFICATION   *RY-BOOSTER   OLP BOOSTER

   POWER SUPPLY 1
   (BRW/GRY)   NOISE FILTER   FILTER   1%
   CIRCUIT   CIRCUIT   HEATER
   CIRCUIT   IC15

   RY-HT (L3)
   B   AC1-N   1   16
   (BLU)   2   15
   R126 R133   ROOM TEMP.
   1/2W 1/2W   5V   ZONE 1
   GROUNDING   SIGNAL   5V
   G01   DETECTION   5% 5%
   TERMINAL   G   (GRN)   CIRCUIT   R171
   R143   6.49k
   BOARD   6.49k
   G05   1%
   1   1%   CN5
   (BR)   G   (GRN)
   OUTDOOR AIR
   C98   SENSOR
   2   1u
   (B)   COMMUNICATION   SW1   SW2
   CIRCUIT   16V
   BL   DATA   BUFFER TANK
   3   G2   C143   SENSOR
   (BL)   (BLK)   1u
   G   G02   16V
   TANK
   (GRN)   G2

   TO OUTDOOR UNIT
   SENSOR
   NOISE
   GROUNDING   RECTIFICATION   FILTER   ELECTRONIC CONTROLLER   G2
   CIRCUIT   CIRCUIT   (MAIN)   CN4
   W   7   7   W   1   R1
   10k   EXTERNAL
   4
   PC1   1   CONTROL 1
   WATER   BL   4   4   BL   4
   M   R   3   3   R   5   WATER
   PUMP   3   2   C123   BL
   BR 2   2   BR   6   PUMP
   B 1   1   B   7   1u   CONTROL
   CIRCUIT   50V   BL   PANEL
   CN-PUMP1
   (WHT)
   LF3
   10. Electronic Circuit Diagram

   CN3
   RY-CONTACT1
   MIXING   MIXING
   VALVE 1   VALVE 2   BOILER CONTACT / DEFROST SIGNAL
   ROOM THERMO 2
   N OPEN CLOSE N OPEN CLOSE
   L   N COOL HEAT   SSR1

71
   EXTRA PUMP

   ACN
   CN201   CN203   (WHT)   W   3
   CN209   12V   OLP
   5V   80±3°C
   POOL WATER   ACL   BL   1 CN-PWR   RY-HTL3   1   BL

   RY-V2
   RY-V3
   RY-ANODE
   SSR202   5V_2
   PUMP   (BLK)   (BLK)
   SIGNAL   CN-OLP1 2   BL   OPTIONAL
   DETECTION   IC9   Blue
   SOLAR WATER   CN-CNT   R81   R86   1   16   *R22   *R11
   CIRCUIT   2   15   5V
   PUMP   SSR203   5   L4   10k   10k
   W   CN-FLWSEN
   1

   SSR204
   SSR205
   SSR206
   SSR207
   W   3   1   BR   1   1   BR   1   1 BR 1
   ERROR   W   W   W
   RY201   C61   C63   W   B   B   FLOW

   (YLW)
   SIGNAL   W   5V   B   FLOW   OR   BL   BL
   4   1000p   1000p   R130   R   SENSOR

   CN-COMM
   1   BL   SENSOR   4   4
   G2   50V   50V   SIGNAL   10k   5   5   5
   CN208   4   4
   20V   DETECTION
   WATER PUMP   CN-PWR2   G2   CIRCUIT   G2
   ZONE 1   SSR200
   1   1 Blue   R128   R135   R139   R140
   CN-PWR202   W   *R166   20k   R132   20k   20k   20k
   WATER PUMP   (YLW)   2   W   2   1%   1%   1%   1%   CN-TH1
   ZONE 2   SSR201   ELECTRONIC CONTROLLER   5V_2   1
   t˚   WATER OUTLET TEMP. SENSOR (THERMISTOR)
   (SUB)
   t˚   REFRIGERANT TEMP. SENSOR (THERMISTOR)
   1   W   2   CN-PWR4
   CN-PWR204 2   t˚   WATER INLET TEMP. SENSOR (THERMISTOR)
   Black
   (YLW)   3   W   1   6
   1
   CN-CNT   *CN-TH3
   (WHT)   CN-PWR3
   DCN   1   HEX WATER OUTLET TEMP. SENSOR
   5   (BLU)   B   3 Green   t˚
   (THERMISTOR)
   DCP   2
   (RED)   R   1   5V
   G6
   CN205   CN204   CN207   CN206   CN210   *CN-TH2
   1
   t˚   TANK TEMP. SENSOR 1 (THERMISTOR)
   R175   R176
   C104   t˚   TANK TEMP. SENSOR 2 (THERMISTOR)
   10k   10k
   0.1u   4
   VCC BIT2 BIT1   5V
   16V
   DC DC   G2   C122   C139   R169
   GND 10V   G2
   1000p   1000p   10k
   C128   50V   50V   C137   C73   C79   C81   C84   C90

   ZONE 2
   ZONE 1
   ZONE 2
   ZONE 1
   SWITCH

   SENSOR
   SENSOR
   1u   1u   1u   1u   1u   1u   1u

   COMP. SW
   EXTERNAL
   16V   16V   16V   16V   16V   16V

   SG SIGNAL
   16V   G1

   SIGNAL
   G2   G2

   HEAT/COOL

   POOL TEMP.
   DEMAND
   G2

   ROOM TEMP.
   ROOM TEMP.
   OPTIONAL

   SOLAR TEMP.
   G2   CN-DPS

   WATER TEMP.
   WATER TEMP.
   CLOSE
   OPEN
   N

   1   5 CN-CNT2   CN1   CN2   Red 1 3 4   G2

   W BL   R
   BR BL B
   CLOSE OPEN N   HEAT COOL N   L   N   L   1 3
   2-WAY   ROOM THERMO 1 CURRENT
   VALVE   M   ANODE   DIGITAL
   1~   SYSTEM   PRESSURE
   SENSOR
   3-WAY
   VALVE


--- Page 72 ---
10.2 Outdoor Unit
10.2.1 WH-UDZ03KE5
   REACTOR

   GRY   GRY

   ELECTRONIC CONTROLLER   RAT2   RAT1   5V
   (GRY)   (GRY)
   TO INDOOR UNIT   R21
   7.5k   R22   C98
   1%   15k   470u
   1% C10   10V
   1   2   3   C9   1u
   1u   10V   OUTDOOR
   (BLACK)   (WHITE) (RED)   10V   AIR TEMPERATURE
   CN-TH1
   G5   SENSOR (THERMISTOR)
TERMINAL   G5   1
 BOARD   t°

   RED   DATA (RED)
   t°
   FUSE8   4
   COMMUNICATION   5V   PIPING TEMPERATURE
   NOISE FILTER   T3.15A L250V   SENSOR (THERMISTOR)
   CIRCUIT   G5
   CIRCUIT
   BLK   AC-BLK (BLK)   FUSE6   FUSE5   R28
   7.5k   CN-TH3
   (20A 250V)   (20A 250V)   Yellow
   FUSE1   1%
   1   EVAPORATOR EXIT
   WHT   AC-WHT (WHT) (20A 250V)   RECTIFICATION
   C99   TEMPERATURE
   CIRCUIT   1u   2   SENSOR
   GRN   FG1 (GRN)   SWITCHING
   t°
   10V   (THERMISTOR)
   GRN   FG2 (GRN)   POWER SUPPLY   G5 G5
   CIRCUIT
   *CN-STM1
   4   15   1
   PFC   RECTIFICATION   3   16
   CIRCUIT   CIRCUIT   M
   2   17
   1   18
   6   ELECTRO-MAGNETIC
   *IC8   5V
   OPTIONAL   COIL (EXPANSION VALVE)
   1 BLU HT2 (BLU)   RY-HT2
   FUSE3
   T3.15A L250V
   10
   3 BLU ACN2 (BLU)   C921 COMMON
   0.1u   GND  *IC8
   BASE PAN   50V
   HEATER   9

   G4A   *CN-HOT
   16V   1
   *Q55
   *C108   3

   D
   S
   *R143   ELECTRO-MAGNETIC

   K
   G
   *D57
   COIL (4-WAY VALVE)

   A
   5V 16V   G4A

   K
   *D58   *R137

   A
   *R112   *R136
   *Q54
   D
   S

   *C101   *R139
   G

   10
   1   Q1   COMPRESSOR
   FAN   3   W   U(RED)
   MS   RED
   U   P   U
   MOTOR   3~   V(BLU)   BLU
   V   V   MS
   CN-MTR2   14   3~
   5   W(YLW)   YLW
   (WHT)   16   N   W
   IC19   R148
   R403   5V   1k
   1   1k   5%
   E   Q56   1/10W   1   BLK
   5V   1
   C414   10K B   R135
   3   0.01u   10k   R157   WHT   2
   C   Q57   C115   20k   3
   4.7k   5%   3
   CN-MTR1 C401   50V   1000p   4   RED
   1/8W   5%
   Red  0.1u   R124 C -50V   4.7k B   50V   5V 1/10W
   25V   G6   10k   -100mA   10K   G6   HIGH PRESSURE SENSOR
   G6   CN-HPS
   5%
   E   C119 R155   Red
   G5   1/10W   50V   0.01u 10k   C100   C111
   G6   100mA 50V   5%   R160   100u   1u
   1/10W   4.7k   16V   16V
   5%   15V
   G4   R163   1/10W   G5   1   RED   HIGH
   2.2k
   5%   Q58 E   PRESSURE
   1/4W   2   SWITCH
   B
   RED
   CN-PSW
   -32V   C
   -500mA   5V
   Q59 C   R164   *CN-DIS
   5%   DISCHARGE
   B 4.7k   1
   10K
   TEMPERATURE
   D60
   50V   600V   SENSOR
   K

   100mA   E   RY-PWR2   C244 2   t°
   (THERMISTOR)
   1A5   1u
   R37
   A

   1A   10V
   G4   G5

   Sensor (Thermistor)   Compressor Temp. Sensor
   Characteristics   (Thermistor) Characteristics
   70   70
   1 Outdoor Air Sensor
   2 Outdoor Heat Exchanger
   60   60
   Sensor

   50   50
   Resistance (kΩ)

   Resistance (kΩ)

   40   40
   1

   30   30
   2
   20   20

   10   10

   0   0
   -10   0   10   20   30   40   50   20   40   60   80   100   120   140

   Temperature ( C)   o
   Temperature (oC)

   72


--- Page 73 ---
10.2.2 WH-UDZ05KE5 WH-UDZ07KE5 WH-UDZ09KE5
   REACTOR

   GRY   GRY

   RAT2   RAT1   IC19
   (GRY)   (GRY)
   28   1   RED
   BLK   W
   COMMUNICATION   FUSE4   FUSE5   FUSE2   3   YLW   MS
   DATA   U
   (BLK)   CIRCUIT   (20A 250V)   (20A 250V)   T3.15A L250V   3~
   1   V
   5   BLU
   2
   PFC   11   CN-MTR2   FAN MOTOR
   TERMINAL BOARD
   CIRCUIT   (WHT)
   TO INDOOR UNIT

   Q1
   1   BRW
   AC-BRW FUSE1
   BLU   NOISE FILTER   P   (RED) U   RED
   2   (BRW)  (30A 250V)
   CIRCUIT   RECTIFICATION
   U
   (BLU) V   BLU   MS
   V   (YLW) W   YLW
   3   CIRCUIT   W   3~
   AC-BLU   N
   (BLU)
   COMPRESSOR
   GRN   FG1
   (GRN)   C9   C10
   CONTROL   FUSE3   OUTDOOR AIR TEMPERATURE
   BOARD   GRN   FG2   CN-TH1
   YLW/GRN   (GRN)   T3.15A L250V   G5   SENSOR (THERMISTOR)
   1
   SOUND   t°
   CONTROL   PROOF
   BOARD   BOARD   SWITCHING   t°
   HT2   RECTIFICATION   POWER SUPPLY
   CIRCUIT   4   PIPING TEMPERATURE SENSOR
   BASE PAN   1   1   (BLU) RY-HT2   CIRCUIT   5V
CABINET
   HEATER   BLU   (THERMISTOR)
  SIDE   *CN-TANK
 PLATE   Natural
   3   3 BLU   ACN2
   OPTIONAL   (BLU)   1
   R74   t°
   1k   ELECTRONIC CONTROLLER
   CN-HPS   5%   3   COMPRESSOR TEMPERATURE
   Red   R935
   1   1/10W   R71   C935   4.99k   15V   SENSOR (THERMISTOR)
   HIGH   1
   BLK   10k   1%
   PRESSURE   2   R75   CN-PSW
   WHT   3   20k   C120   5%
   SENSOR   3   R72   1/10W
   RED   4   5%   1000p   G5   1   RED   RED HIGH
   50V   3.3k
   1/10W 5V   5%   PRESSURE
   Q7 E   2
   G6   G6   1/4W   B   SWITCH
   C115   C107   -32V   C   16V   *CN-HOT
   1u   100u   -500mA
   Q8   1
   16V   16V   C   *Q609   ELECTRO-MAGNETIC
   R73   COIL (4-WAY VALVE)
   B 4.7k
   5V   G5   5%   3

   D
   S
   CN-DIS   50V   10K   C602   *R613

   K
   D78   D606

   G
   100mA

   K
   1   E   RY-PWR
   DISCHARGE TEMP.   100V

   A
   t°
   2   150mA   *R601

   A
   SENSOR (THERMISTOR)
   C244   R37   15V
   1u   G5   G4   G4A
   4.99k
   10V
   *Q601 C   *CN-STM1
   G5   6
   B 4.7k   *IC8
   10K   1   16
   E   2   15   M
   G5   5V   3   14
   4   13   ELECTRO-MAGNETIC
   1
   R206   COIL (EXPANSION VALVE)
   7.5k   CN-TH3
   1%   Yellow
   1
   t°
   C99   2
   1u   EVA EXIT TEMP.
   10V
   SENSOR (THERMISTOR)
   G5   G5

   Sensor (Thermistor)   Compressor Temp. Sensor
   Characteristics   (Thermistor) Characteristics
   70   70
   1 Outdoor Air Sensor
   2 Outdoor Heat Exchanger
   60   60
   Sensor

   50   50
   Resistance (kΩ)

   Resistance (kΩ)

   40   40
   1

   30   30
   2
   20   20

   10   10

   0   0
   -10   0   10   20   30   40   50   20   40   60   80   100   120   140

   Temperature (oC)   Temperature (oC)

   73


--- Page 74 ---
11. Printed Circuit Board
11.1 Indoor Unit
11.1.1 Main Printed Circuit Board

   HT1-L3   CN-OLP1

  AC2-N2   G02
  AC2-N3

  AC2-L3

   G05
 CN-PWR

   G03

   CN-PWR2
   CN-PWR3
   G01

   CN1   DATA

   AC1-N   CN-PUMP1
  AC1-L3
CN-PWR4   CN-DPS
   CN-FLWSEN
   CN2   CN-TH2

   CN-TH1

   CN-TH3

   SW1

   CN-CNT2

   CN-CNT

   CN3   CN5   CN4   CN6

   74


--- Page 75 ---
11.1.2 Sub Printed Circuit Board (Optional)

   CN208   CN209   ACL

   ACN

   CN201

   CN-205

CN-PWR204

   CN-CNT

   CN204

   DCN
 CN-COMM   CN-PWR202
   CN207
   CN203

   CN206   DCP CN210

   75


--- Page 76 ---
11.2 Outdoor Unit
11.2.1 Main Printed Circuit Board

11.2.1.1   WH-UDZ03KE5

   RAT1

   CN-MTR2

   CN-MTR1
   CN-STM1
   CN-DIS

   CN-TH1
   CN-HOT
   CN-TH3
   CN-HPS

   HT2
   DATA
   CN-PSW
   AC-WHT
   AC-BLK   ACN2

   FG1   FG2   RAT2

   76


--- Page 77 ---
11.2.1.2   WH-UDZ05KE5 WH-UDZ07KE5 WH-UDZ09KE5

   RAT1

   CN-MTR2

   CN-DIS
   CN-STM1
   CN-TH3

   CN-HPS

   CN-TANK
   HT2
   CN-HOT

   AC-BLU   CN-TH1
   CN-PSW
   DATA
   ACN2

   AC-BRW

   FG1   FG2   RAT2

   77


--- Page 78 ---
12. Installation Instruction
12.1 Indoor Floor Area Requirement
   If the total refrigerant charge in the system is <1.84 kg, no additional minimum floor area is required.
   If the total refrigerant charge in the system is ≥1.84 kg, additional minimum floor area requirements is
   complied as described below:

   Symbol   Description   Unit
   mc   Total refrigerant charge in system   kg
   mmax   Maximum refrigerant charge allowed   kg
   mexcess   mc - mmax   kg   Total refrigerant charge in system,mc (kg)
   H   Installation height   m   = Pre-charged refrigerant amount in unit (kg)
   + Additional refrigerant amount after installation (kg)
   VAmin   Minimum ventilation opening area   cm2

   A) Determine Maximum refrigerant charge allowed, mmax
1. Calculate Installation Room Area, Aroom.
2. Based on Table I, select mmax which corresponds to the calculated Aroom value.
3. If mmax ≥ mc, the unit can be installed in the installation room with the specified installation height (H=600mm) in
   Table I and without additional room area or any additional ventilation.
4. Else, proceed to B) and C).

   B) Determine Total Floor Area of Aroom and Broom compliance to Amin total
1. Calculate the Broom area adjacent to the Aroom.
2. Determine the Amin total based on the Total Refrigerant Charge, mc from Table II.
3. The total floor area of both Aroom and Broom must exceed Amin total.

   C) Determine Minimum Venting Opening Area, VAmin for natural ventilation
1. From Table III, calculate mexcess.
2. Then determine VAmin corresponding to the calculated mexcess for natural ventilation between Aroom and Broom.
3. The unit can be installed at specific room only when the following conditions are fulfilled:
    Two permanent openings (cannot be closed), one at bottom, another at top, for ventilation purposes are
   made between Aroom and Broom.
    Bottom opening: - Must comply to the minimum area requirement of VAmin.
   - Opening must be located ≤300mm from the floor.
   - At least 50% of required opening area must be
   ≤200mm from the floor.
   - The bottom of the opening shall not be higher   Installation
   than the point of release when the unit is   Room   Adjacent
   installed and must be situated ≤100mm above (Aroom)   Room
   (Broom)
   the floor.
   - Must be as close as possible to the floor and
   >1500mm

   lower than H.
    Top opening:   - The total size of the Top opening must be
   more than 50% of VAmin.   >0.5 VAmin
   - Opening must be located ≥1500mm above the   >VAmin
   floor.
    The height of the openings must more than 20mm.
    A direct ventilation opening to outside is NOT encouraged for ventilation opening (the user can block the
   opening when it is cold).
    The value of H is considered as 0.6m to comply to IEC 60335-2-40:2018 Clause GG2.

   78


--- Page 79 ---
Table I - Maximum refrigerant charge allowed in a   Table II - Minimum floor area
room   Minimum floor area (Amin total (m2))
   mc (kg)
   Maximum refrigerant charge in a room   H=0.6m
   Aroom (m2)   (mmax) (kg)   1.84   28.81
   H=0.6m   1.86   29.44
   1   0.138   1.88   30.08
   2   0.276   1.90   30.72
   1.92   31.37
   3   0.414
   1.94   32.03
   4   0.553
   1.96   32.70
   5   0.691
   1.98   33.37
   6   0.829   2.00   34.04
   7   0.907   2.02   34.73
   8   0.970   2.04   35.42
   9   1.028   2.06   36.12
   10   1.084   2.08   36.82
   11   1.137   2.10   37.53
   12   1.187   2.12   38.25
   13   1.236   2.14   38.98
   14   1.283   2.16   39.71
   15   1.328   2.18   40.45
   16   1.371   2.20   41.19
   2.22   41.94
   17   1.413
   2.24   42.70
   18   1.454
   2.26   43.47
   19   1.494
   2.28   44.24
   20   1.533   2.30   45.02
   21   1.571
   22   1.608
   23   1.644
      For H values lower than 0.6m, the value of H is
   24   1.679   considered as 0.6m to comply to
   25   1.714   IEC 60335-2-40:2018 Clause GG2.
   26   1.748      For intermediate mc values, the value that
   27   1.781   corresponds to the higher mc value from the table
   28   1.814   is considered.
   29   1.846   Example:
   30   1.877
   If mc = 1.85 kg, the value that corresponds to
   31   1.909
   32   1.939
   “mc = 1.86 kg” is considered.
   33   1.969      Systems with total refrigerant charge lower than
   34   1.999   1.84 kg are not subjected to any room area
   35   2.028   requirements.
   36   2.057      Charges above 2.30 kg are not allowed in the unit.
   37   2.085
   38   2.113
   Table III - Minimum venting opening area for
   39   2.141
   40   2.168
   natural ventilation
   41   2.195   Minimum venting
   42   2.221   mc   mmax   mexcess (kg) =   opening area
   43   2.248   (kg)   (kg)   mc - mmax   (VAmin) (cm2)
   44   2.274   H=0.6m
   45   2.299   2.3   0.1   2.20   890
   2.3   0.3   2.00   809
   2.3   0.5   1.80   728
   For H values lower than 0.6m, the value of H is   2.3   0.7   1.60   647
   considered as 0.6m to comply to   2.3   0.9   1.40   583
   IEC 60335-2-40:2018 Clause GG2.   2.3   1.1   1.20   552
   For intermediate Aroom values, the value that   2.3   1.3   1.00   500
   2.3   1.5   0.80   430
   corresponds to the lower Aroom value from the   2.3   1.7   0.60   343
   table is considered.   2.3   1.9   0.40   242
   Example:   2.3   2.1   0.20   127
   For Aroom = 10.5 m2, the value that corresponds to   2.3   2.3   0.00   0
   “Aroom = 10 m2” is considered.
      For H values lower than 0.6m, the value of H is
   considered as 0.6m to comply to
   IEC 60335-2-40:2018 Clause GG2.
      For intermediate mexcess values, the value that
   corresponds to the higher mexcess value from the
   table is considered.
   Example:
   mexcess = 1.45 kg, the value that corresponds to
   “mexcess = 1.6 kg” is considered.

   79


--- Page 80 ---
Attached accessories   Optional Accessories

   No.   Accessory part   Qty.   No.   Accessories part   Qty.
   Adjustable Feet   □
   5   Remote Controller Case   1
   □
   1   4   Network Adaptor (CZ-TAW*) and
   □
   6
   Extension Cable (CZ-TAW1-CBL)
   1

   Reducing Adapter   □
   7   Optional PCB (CZ-NS5P)   1
   □
   2   1
   □
   8   Optional Back-up Heater (CZ-NB3)   1
   Drain Elbow
   □
   3   1

   Packing
   □
   4   1

Field Supply Accessories (Optional)

   No.   Part   Model   Specifications   Maker

   2-way valve kit   Electromotoric Actuator   SFA21/18   AC230V, 12 VA   Siemens
   i
   *Cooling model   2-port Valve   VVI46/25   Siemens
   Wired   PAW-A2W-RTWIRED
   ii   Room thermostat   AC230V   -
   Wireless   PAW-A2W-RTWIRELESS
   iii   Mixing valve   -   167032   AC230V, 6VA   Caleffi
   iv   Pump   -   Yonos 25/6   AC 230V, 0.6 A max   Wilo
   v   Buffer tank sensor   -   PAW-A2W-TSBU   -   -
   vi   Outdoor sensor   -   PAW-A2W-TSOD   -   -
   vii   Zone water sensor   -   PAW-A2W-TSHC   -   -
   viii   Zone room sensor   -   PAW-A2W-TSRT   -   -
   ix   Solar sensor   -   PAW-A2W-TSSO   -   -

   It is recommended to purchase the field supply accessories listed in above table.

   80


--- Page 81 ---
12.2   Indoor Unit   12.2.1.2   Transport and Handling
      Be careful during transporting the unit so that it is
12.2.1 Select the Best Location   not damaged by impact.
Before choosing the installation site, obtain user      Only remove the packaging material once it has
approval.   reached it is desired installation location.
 Install the Tank Unit in indoors with frost free      It may need three or more people to carry out the
   weather proof location only.   installation work. The weight of Tank Unit might
 Must install on a flat horizontal and solid hard   cause injury if carried by one person.
   surface.      The Tank Unit can be transported either in vertical
 There should not be any heat source or steam   or horizontal.
   near the Tank Unit.   - If it transported in horizontal, make sure Front
   of packaging material (printed with “FRONT”)
 A place where air circulation in the room is good.
   must facing upwards.
 A place where drainage can be easily done (e.g.
   - If it transported in vertical, use the hand holes
   Utility room).
   on sides, slide and move to the desired
 A place where Tank Unit’s operation noise will not
   location.
   cause discomfort to the user.
      Fix the Adjustable Feet 1 , if the Tank unit
 A place where Tank Unit is far from door way.
   installed on a uneven surface.
 A place where accessible for maintenance.
 Ensure to keep minimum distance of spaces as
   illustrated below from wall, ceiling, or other
   obstacles.
 A place where flammable gas leaking might not
   Hold
   occur.
 Secure the Tank Unit to prevent it being knocked   Hold arrow section   Hold
   to slide and move
   over accidentally or during earthquakes.

Please avoid installations which expose the Tank Unit
to any of the following conditions:   12.2.2 To Drill a Hole in the Wall and
 Extraordinary environment conditions; installation   Install a Sleeve of Piping
   in frost or exposure to unfavorable weather   1.   Make a Ø70 mm through hole.
   conditions.   2.   Insert the piping sleeve to the hole.
 Voltage input exceeding the specified voltage.   3.   Fix the bushing to the sleeve.
   4.   Cut the sleeve until it extrudes about 15 mm from
12.2.1.1   Required Space for Installation   the wall.

   CAUTION
   (Unit : mm)
   When the wall is hollow, please be sure to use the sleeve for
   350
   Min.

   M
   10 in.   tube assembly to prevent dangers caused by mice biting the
   0
   connection cable.

   in.
   M 00
   1   5. Finish by sealing the sleeve with putty or caulking
   compound at the final stage.
   M
   10 in.
   in.   0   Wall
   M 00
   7   Outdoor
   Indoor
   15 mm

   Sleeve for tube
   assembly
   Approx. 5 - 7 mm

   ø70 mm   Bushing for tube assemblys
   through hole
   Putty or caulking compound

   81


--- Page 82 ---
12.2.3 Piping Installation   Open and Close Front Plate ⑯
   1. Remove the 2 mounting screws of Front Plate ⑯.
12.2.3.1   Water Quality Requirement   2. Slide it upwards to unhook the Front Plate ⑯
   hook.
   3. Reverse above steps 1~2 for close it.
Must use water that complies with European Drinking Water
Directive (EU)2020/2184. The lifespan of the Tank Unit will be
shorter if groundwater (include spring water and well water) is   12.2.3.4   Refrigerant Piping Installation
used.
   This Tank Unit is designed for combination with
The Tank Unit shall not be used with the tap water containing
contaminants such as salt, acid, and other impurities which may   Panasonic Air-to-Water Heat Pump Outdoor Unit. If
corrode the tank and its component.   Outdoor Unit from other manufacturer are being used
Use sanitized water that is free of Legionella and other bacteria   in combination with Panasonic Tank Unit, optimum
and microorganisms. If the water contains Legionella bacteria, it   operation and reliability of the system is not
may harm the health of the user.   guaranteed. Thus warranty cannot be given in such
   case.
12.2.3.2   Typical Piping Installation   1. Connect Tank Unit to Air-to-Water Heatpump
   Outdoor Unit with correct piping size. Use
   Reducing Adapter 2 for Outdoor Unit
   WH-UDZ03KE5* Refrigerant Gas e piping
   Temporary   Double
   connection to Check Valve   connection.
   be removed assembly is
   immediately acceptable   Use
   Model   Piping size (Torque)
   after filling in house   Reducing
   Adapter
   Tank Unit   Outdoor Unit   Gas   Liquid
   2 .
Air-to-Water   Fan Coil Unit   ø12.7mm ø6.35mm
 Heatpump   WH-
   (1/2")   (1/4")   Yes
Outdoor Unit   Radiator /   UDZ03KE5*
   Floor Heater   [55 N•m] [18 N•m]
   WH-   WH-
   2-Way Valve
   Expansion
   ADC0309K0E5A UDZ05KE5*, ø15.88mm ø6.35mm
   Tab /   WH-
   Vessel   (5/8")   (1/4")   No
   Shower   UDZ07KE5*,
   [65 N•m] [18 N•m]
   WH-
   Main
   Supply
   UDZ09KE5*
   Drain water /   Safety   Check Shut Pressure
   Tank Water   Relief   Valve Off Reducing
   Discharge   Tundish   Torque
   Valve   Valve Valve
   wrench

12.2.3.3   Access to Internal Components

   WARNING
This section is for authorized and licensed electrician/water
system installer only. Work behind the front plate secured by
screws must only be carried out under supervision of qualified
   Spanner
contractor, installation engineer or service person.

   Hook   CAUTION
   Do not overtighten, overtightening may cause gas leakage.
   Do not pull and push refrigerant piping excessively, deformed
   pipe may cause refrigerant leak.

   2. Please make flare after inserting flare nut (located
   at joint portion of tube assembly) onto the copper
   pipe. (In case of using long piping)
   3. Do not use pipe wrench to open refrigerant piping.
   Flare nut may be broken and cause leakage. Use
   proper spanner or ring wrench.
   2X (screw)   4. Connect the piping:
    Align the centre of piping and sufficiently
   CAUTION   tighten the flare nut with fingers.
Open or close the Front Plate carefully.    Further tighten the flare nut with torque
The heavy Front Plate may injures the fingers.   wrench in specified torque as stated in the
   table.

   82


--- Page 83 ---
Additional Precautions For R32 Models when   12.2.3.6   Water Piping Installation
connecting by flaring at indoor side
      Please engage a licensed water circuit installer to
   install this water circuit.
   Ensure to do the re-flaring of pipes before connecting to
   units to avoid leaking.      This water circuit must comply with relevant
   Connections made between components of refrigerant   European and national regulations (including
   system shall be accessible for ease of maintenance.   EN61770), and local building regulation codes.
      Ensure the components installed in the water
Seal sufficiently the flare nut (both gas and liquid sides)   circuit could withstand water pressure during
with neutral cure (Alkoxy type) & ammonia-free   operation.
silicone sealant and insulation material to avoid the      Do not use worn out tube or detachable hose set.
gas leak caused by freezing.      Do not apply excessive force to pipes that may
   damage the pipes.
   Apply neutral cure (Alkoxy type) and      Choose proper sealer which can withstand the
   ammonia-free silicone   pressures and temperatures of the system.
   sealant along the
   circumference
      Make sure to use two spanners to tighten the
   connection. Further tighten the nuts with torque
   wrench in specified torque as stated in the table.
      Cover the pipe end to prevent dirt and dust when
   inserting it through a wall.
      If non-brass metallic piping is used for installation,
   make sure to insulate the pipes to prevent
Neutral cure (Alkoxy type) & ammonia-free silicone   galvanic corrosion.
sealant is only to be applied after pressure testing and
      Do not connect galvanised pipes, this will cause
cleaning up by following instructions of sealant, only to
   galvanic corrosion.
the outside of the connection. The aim is to prevent
      Use correct nut for all Tank Unit tube connections
moisture from entering the connection joint and
   and clean all tubes with tap water before
possible occurrence of freezing. Curing sealant will
   installation. See Tube Position Diagram for detail.
take some time. Make sure sealant will not peel off
when wrapping the insulation.
   Tube Connector   Nut Size   Torque

12.2.3.4.1   Checking for Gas Leakage   a & b   R 1"   88.2 N•m

   Check for leakage of gas after air purging.   c & d   RP ¾"   58.8 N•m
   See the in the installation manual for the outdoor.
   Torque wrench Spanner
12.2.3.5   Cutting and Flaring the Piping
1. Please cut using pipe cutter and then remove the
   burrs.
2. Remove the burrs by using reamer. If burrs is not
   removed, gas leakage may be caused. Turn the
   piping end down to avoid the metal powder
   entering the pipe.
3. Please make flare after inserting the flare nut onto
   the copper pipes.
   Pipe
   Handle
   Reamer   Bar   0 – 0.5 mm
   Bar   Yoke   CAUTION
   Core
   Copper   Do not overtighten, overtightening may cause water leakage.
   Point down   Clamp handle   Red arrow mark   pipe
1. To cut   2. To remove burrs   3. To flare
      Make sure to insulate the water circuit pipes to
   ■ Improper ﬂaring ■
   When properly flared, the internal surface   prevent reduction of heating capacity.
   of the flare will evenly shine and be of      After installation, check the water leakage
   even thickness. Since the flare part
Inclined Surface Cracked Uneven comes into contact with the connections,   condition in connection area during test run.
   damaged   thickness carefully check the flare finish.
      Failure to connect the tube appropriately might
   cause the Tank Unit malfunction.
      Protection From Frost:
   If the Tank Unit is being exposed to frost while
   power supply failure or pump operating failure,
   drain the system. When water is idle inside the
   system, freezing up is very likely to happen which
   could damage the system. Make sure the power
   supply is turned off before draining.

   83


--- Page 84 ---
   Corrosion Resistance:      In high water pressure or water supply is above
   Duplex stainless steel is naturally corrosion   500kPa, please install the Pressure Reducing
   resistant to mains water supply. No specific   Valve for water supply. If the pressure higher than
   maintenance is required to maintain this   that, it might damage the Tank Unit.
   resistance. However, please note that Tank Unit is      A Pressure Reducing Valve (field supply) with
   not guaranteed for use with a private water supply.   below specification is strongly advised to be
   It is recommended to use a tray (field supply) to   installed along the line of the tube connector c of
   collect water from the Tank Unit if water leakage   Tank Unit. Refer Typical Piping Installation section
   occur.   to locate both of these valves.
   Recommended Pressure Reducing Valve
   Recommended piping installation sequence:   specifications:
   (a)  (c)  (e)  (f)  (b)  (d)   - Set pressure: 0.35 MPa (3.5 bars)
      Must connect a faucet to Tank Unit Tube
(A) Space Heating/Cooling Pipework   Connector d and main water supply, in order to
 Connect Tank Unit Tube Connector   to outlet   supply water with appropriate temperature for
   connector of Zone 1 Panel/Floor heater.   shower or tap usage. Failure to do so might cause
 Connect Tank Unit Tube Connector   to inlet   scalding.
   connector of Zone 1 Panel/Floor heater.      Failure to connect the tube appropriately might
 Failure to connect the tube appropriately might   causing the Tank Unit malfunction.
   cause the Tank Unit malfunction.
 Refer below table for the rated flow rate of each   (C) Drain Elbow and Hose Installation
   particular Outdoor Unit.    Fix the Drain Elbow 3 and Packing 4 to the
   bottom of Drain Water Hole .
   Model   Rated Flow Rate (l/min)
   Tank Unit   Outdoor Unit   Cool   Heat
   WH-
   9.2   9.2
   UDZ03KE5*
   WH-
   14.3   14.3
   WH-   UDZ05KE5*
ADC0309K0E5A   WH-
   19.2   20.1
   UDZ07KE5*
   Packing 4
   WH-
   23.5   25.8
   UDZ09KE5*   Drain Elbow 3

(B) Domestic Hot Water Tank Pipework      Use inner diameter 17 mm drain hose in the
 A Safety Relief Valve (field supply) with below   market, fix to Drain Elbow 3 .
   specification is required to be installed along the      This hose must to be installed in a continuously
   line of the tube connector (c) of Tank Unit.   downward direction and in a frost-free
   Refer Typical Piping Installation section to locate   environment. Improper drain piping may cause
   this valve.   water leakage hence damage the furnitures.
   Recommended Safety Relief Valve specifications:      If drain hose is long, use a metal support fixture
   - Pressure setting: 0.80 MPa (8 bars)   along the way to eliminate the wavy pattern of
 Piping must always be installed in a continuously   drain tube.
   downward direction. It must not be longer than 2m,      Guide the drain hose to outdoor as illustrated.
   with no more than 2 elbows, and must not allow
   condensation to build up or freezing to occur.
 The pipe from this drainage outlet fitting must not
   be shut off. The discharge must be freed.   Discharge below
 The end of this pipework must be in such a way   ﬁxed grating
   so that the outlet is visible and can not cause any   Fixed grating
   damage. Keep away from electrical components.
 It is recommended to fit a tundish into this   Trapped gulley
   pipework. Tundish should be visible and   Possible wall
   positioned away from frost environment and   Illustration of guide drain hose to outdoor
   electrical components.
 It’s strongly recommended to install an expansion      Do not insert this hose into sewage or drain pipe
   vessel (field supply) in the Domestic Hot Water   that may generate ammonia gas, sulphuric gas
   Tank circuit. Refer Typical Piping Installation   etc.
   section to locate the expansion vessel.
      If necessary, use hose clamp to further tighten the
   o Recommended pre-charge pressure of the
   hose at drain hose connector to prevent leakage.
   expansion vessel (field supply) = 0.35MPa
      Water will drip from this hose, therefore the outlet
   (3.5 bars)
   of this hose must be installed in an area where the
   outlet cannot become blocked.

   84


--- Page 85 ---
12.2.4 Connect the Cable to the Tank Unit

   WARNING
This section is for authorized and licensed electrician only. Work behind the Control Board Cover ⑤ secured by screws must only be carried out
under supervision of qualified contractor, installation engineer or service person.

   CAUTION

Please take extra precaution when open the control board cover ⑤ and control board ⑥ for unit installation
and servicing. Failure to do so may cause injury.

12.2.4.1   Fixing of Power Supply Cable and Connecting Cable
1. Connecting cable between Tank Unit and Outdoor Unit shall be approved polychloroprene sheathed flexible cord,
   type designation 60245 IEC 57 or heavier cord. See below table for cable size requirement.

   Model
   Connecting Cable Size
   Tank Unit   Outdoor Unit
   WH-UDZ03KE5*,
   4 × min 1.5 mm2
   WH-UDZ05KE5*
   WH-ADC0309K0E5A
   WH-UDZ07KE5*,
   4 × min 2.5 mm2
   WH-UDZ09KE5*

      Ensure the colour of wires of Outdoor Unit and the terminal no. are the same to the Tank Unit respectively.
      Earth wire shall be longer than the other wires as shown in the figure for the electrical safety in case of the
   slipping out of the cord from the Holder (Clamper).

2. An isolating device must be connected to the power supply cable.
    Isolating device (disconnecting means) should have minimum 3.0 mm contact gap.
    Connect the approved polychloroprene sheathed power supply 1 cord and power supply 2 cord (Only if
   Optional Back-up Heater (CZ-NB3) installed) and type designation 60245 IEC 57 or heavier cord to the
   terminal board, and to the other end of the cord to isolating device (Disconnecting means). See below table
   for cable size requirement.

   Model   Power Supply
   Cable Size   Isolating Devices   Recommended RCD
   Tank Unit   Outdoor Unit   Cord

   WH-UDZ03KE5*,   1   3 × min 1.5 mm2   15/16A   30mA, 2P, type A
   WH-UDZ05KE5*   2   3 × min 1.5 mm   2
   16A   30mA, 2P, type AC
   WH-ADC0309K0E5A
   WH-UDZ07KE5*,   1   3 × min 2.5 mm2   25A   30mA, 2P, type A
   WH-UDZ09KE5*   2   3 × min 1.5 mm   2
   16A   30mA, 2P, type AC

3. To avoid the cable and cord being damaged by sharp edges, the cable and cord must be passed through a
   bushing (located at the bottom of Control Board ⑥) before terminal board. The bushing must be used and must
   not be removed.

   85


--- Page 86 ---
Terminal Board

Terminals on the Outdoor Unit   1   2   3
Colour of wires (Connecting cables)
Terminals on the Tank unit   L   N   L1 N1   1   2   3
(Power Supply Cord)
   Tank Unit/
Terminals on the isolating devices   L   N   L1 N1   Outdoor Unit
from power supply (Disconnecting
   connection   *1   *1   *1
means)
   Power Supply 1 Power Supply 2   *2
   Only if Optional Back-up Heater (CZ-NB3) installed   Power Supply
   Power Supply   Connecting Cable
   1 Cable   2 Cable (Optional)
   (Only if Optional Back-up
   Heater CZ-NB3 installed)
   Holder (Clamper)   Holder (Clamper)

   Terminal screw   Tightening torque cN•m {kgf•cm}
   M4   157~196 {16~20}
   M5   196~245 {20~25)

*1 - Earth wire must be longer than other cables for safety reasons
*2 - Power supply cord 2 is optional and connected only if Optional Back-up Heater (CZ-NB3) installed.

12.2.4.2   Wire Stripping and Connecting Requirement

   Wire stripping
   Conductor   Conductor   Conductor not
   Indoor/outdoor   fully insert   over insert   fully insert
   10 ± 1mm

   connecting
   terminal board

   5mm or more
   No loose strand   (gap between wires)   ACCEPT   PROHIBITED   PROHIBITED
   when insert

12.2.4.3   Connecting Requirement
For Tank Unit WH-ADC0309K0E5A with WH-UDZ03KE5*, WH-UDZ05KE5*, WH-UDZ07KE5*, WH-UDZ09KE5*
 The equipment’s Power Supply 1 complies with IEC/EN 61000-3-2.
 The equipment’s Power Supply 1 complies with IEC/EN 61000-3-3 and can be connected to current supply
   network.

   86


--- Page 87 ---
12.2.5 Charging and Discharging the   3. Start filling water (with pressure more than
   Water   0.1 MPa (1 bar)) to the Space Heating / Cooling
   circuit via Tube Connector a . Stop filling water if
   Make sure all the piping installations are properly
   the free water flow through Pressure Relief Valve
   done before carry out below steps.
   ⑬ discharge hose.
   4. Turn ON the Tank Unit and make sure Water
12.2.5.1   Charge the Water   Pump ④ is running.
For Domestic Hot Water Tank   5. Check and make sure no water leaking at the tube
1. Set the Drain Tap n to “CLOSE”.   connecting points.
   6. The water may drip from this discharge hose.
   Therefore must guide the hose without close or
   block the outlet of the hose.
   “CLOSE”   “OPEN”

   12.2.5.2   Discharge the Water
   For Domestic Hot Water Tank
   Drain Tap n   1. Turn OFF power supply.
   2. Set the Drain Tap n to “OPEN”.
2. Set all Tap / Shower “OPEN”.   3. Open Tap / Shower to allow air inlet.
3. Start filling water to the Domestic Hot Water Tank   4. Turn the Safety Relief Valve (field supply) knob
   via Tube Connector . After 20~40min, water   slightly and hold it until all air is released from this
   should flow out from Tap / Shower.   pipeline. Then recover the knob to original
   Else, please contact your local authorized dealer.   position after ensured the pipeline is emptied.
4. Check and make sure no water leaking at the tube   5. After discharge, set Drain Tap n to “CLOSE”.
   connecting points.
5. Set the Drain Tap n to “OPEN” for 10 seconds to   12.2.6 Reconfirmation
   release air from this pipeline. Then set it “CLOSE”.
6. Turn the Safety Relief Valve (field supply) knob
   slightly and hold for 10 seconds to release air   WARNING
   from this pipeline. Then recover the knob to   Be sure to switch off all power supply before performing each of
   original position.   the below checkings.
7. Ensure Step 5 & 6 is carried out each time after
   charging water to Domestic Hot Water Tank.   12.2.6.1   Check Water Pressure
8. To prevent back pressure from happening to the   *(0.1 MPa = 1 bar)
   Safety Relief Valve (field supply), do turn the   Water pressure should not lower than 0.05 MPa (with
   Safety Relief Valve (field supply) knob.   inspects the Water Pressure from Remote Controller).
   If necessary add water into Tank Unit (via Tube
For Space Heating / Cooling
   Connector ).
1. Turn the plug on the Air Purge Valve ⑫ outlet
   anticlockwise by one complete turn from fully
   closed position.   12.2.6.2   Check Pressure Relief Valve ⑬
      Check for correct operation of Pressure Relief
   Plug (turn   Valve ⑬ by turning on the lever to become
   anticlockwise by
   one complete turn)
   horizontal.
      If you do not hear a clacking sound (due to water
   drainage), contact your local authorized dealer.
      Push down the lever after finish checking.
      In case the water keep on draining out from the
   Air purge valve
   Tank Unit, switch off the system, and then contact
   your local authorized dealer.
2. Set the Pressure Relief Valve ⑬ lever “DOWN”.

   Pressure relief valve
   Pressure relief valve

Lever   Lever
   or

   Turn down   Turn down
   Pressure relief valve   Pressure relief valve

   87


--- Page 88 ---
12.2.6.3   Expansion Vessel ⑪ Pre   12.2.7.3   Remove the Remote Controller
   Pressure Checking   from Tank Unit
For Space Heating / Cooling   1. Remove both Left Decoration Panel ② and Right
 Expansion Vessel ⑪ with 10 L air capacity and   Decoration Panel ③ from Front Plate ⑯ with
   initial pressure of 1 bar is installed in this Tank   gently push the panels from back.
   Unit.
 Total amount of water in system should be below
   200 L.
   (Inner volume of Tank Unit’s piping is about 5 L)   Gently push
 If total amount of water is over 200 L, please add   from rear
   another expansion vessel. (field supply)
 Please keep the installation height difference of
   system water circuit within 10 m.

12.2.7 Installation of Remote Controller as
   Room Thermostat
   Remote Controller ① mounted to the Tank Unit
   can be moved to the room and serve as Room   2. Remove the 4 screws and take out the holder with
   Thermostat.   Remote Controller ①.

12.2.7.1   Installation Location
   Install at the height of 1 to 1.5 m from the floor
   (Location where average room temperature can
   be detected).
   Install vertically against the wall.
   Avoid the following locations for installation.
   1. By the window, etc. exposed to direct sunlight
   or direct air.
   2. In the shadow or backside of objects deviated
   from the room airflow.
   3. Location where condensation occurs (The   Remove 4 screws
   Remote Controller is not moisture proof or
   drip proof.)
   3. Remove the top case from the bottom case.
   4. Location near heat source.
   5. Uneven surface.
   Keep distance of 1 m or more from the TV, radio
   and PC. (Cause of fuzzy image or noise)

12.2.7.2   Remote Controller Wiring
   Bottom   Top case
   case
   Tank Unit

   Remote Controller

   1
   2
   Remote Controller wiring   Insert the
   (field supply)   driver and
   • No polarity   slightly turn.
   Terminal for Remote Controller wiring

   Flat-blade
   Remote Controller cable shall be (2 × min   screwdriver
   0.3 mm2), of double insulation PVC-sheathed or
   rubber sheathed cable. Total cable length shall be
   50 m or less.
   Be careful not to connect cables to other terminals
   of Tank Unit (e.g. power source wiring terminal).
   Malfunction may occur.
   Do not bundle together with the power source
   wiring or store in the same metal tube. Operation
   error may occur.

   88


--- Page 89 ---
4. Remove the wiring between Remote controller ①   For embedded type
   and Tank Unit terminal.   Preparation: Make 2 holes for screws using a driver.

   Mount the top case.   Mount the bottom case
   • Align the claws of the   to the wall.
   top case and then align   • Pass the wire through the
   the claws of the bottom   hole in the centre of the
   case.   bottom case.

   Claw   Avoid the wire
   (3 places)   being caught.

Disconnect the
Remote controller
wiring   Slide it
   downwards
   to unhook

12.2.7.4   Mounting the Remote
   Controller   Screws
For exposed type   (ﬁeld supply)
Preparation: Make 2 holes for screws using a driver.

   Mount the top case.   Mount the bottom case to
   • Align the claws of the top   the wall.
   case and then align the claws
   of the bottom case.   Connect the   Remote controller
   remote control   terminal board
   wiring   Top case   Remove the coating.
   Cut here with   Bottom case (Back side)   Approx. 6 mm
   a nipper and   (Back side)
   remove the burr
   with a ﬁle.
   Make sure the wiring
   connection is in the correct
   direction.

   12.2.7.5   Replace the Remote Controller
   Cover
   Wall to which     Replace the existing Remote Controller with
   the remote   Remote Controller Case 5 to close the hole left
   controller is   after remove the Remote Controller.
   Screw   ﬁxed
   (ﬁeld supply)
   1. Refer Section “Remove The Remote Controller
   From Tank Unit” for remove Remote Controller.
   2. Remove the top case from the bottom case of
   Remote Controller Case 5 .

   Connect the remote
   control wiring
   • Arrange the wires along
   the groove of the case.   Top case
   Bottom
   case

   Remote controller terminal board
   Remove the coating. Approx. 6 mm
   Top case
   Bottom case (Back side)
   (Back side)
   Remove the sheath. Approx. 180 mm.   Insert the
   Make sure the wiring connection is   driver and
   in the correct direction.   slightly turn.

   Flat-blade
   screwdriver

   3. Reverse the steps 1 to 4 of section “Remove The
   Remote Controller From Tank Unit” to fix Remote
   Controller Case 5 on Tank Unit.

   89


--- Page 90 ---
12.2.8 Test Run   12.2.8.2   Reset Overload Protector
1. Before test run, make sure below items have been   (Prefixed on Optional Back-up
   checked:-   Heater (CZ-NB3))
   a) Pipework are properly done.   Overload Protector serves the safety purpose to
   b) Electric cable connecting work are properly   prevent the water over heating. When the Overload
   done.   Protector a trip at high water temperature, take below
   c) Tank Unit is filled up with water and trapped   steps to reset it.
   air is released.   1. Take out the cover.
   d) Please turn on the power supply after filling   2. Use a test pen to push the centre button gently in
   the tank until full.   order to reset the Overload Protector.
2. Switch ON the power supply of the Tank Unit.   3. Fix the cover to the original fixing condition.
   Then, please refer to the Operation Instruction for
   operation of Remote Controller ①.   Use test pen to push
   this button for reset
  Note:   Overload protector.
   During winter, turn on the power supply and standby the
   unit for at least 15 minutes before test run.
   Allow sufficient time to warm up refrigerant and prevent
   wrong error code judgement.

3. For normal operation, Water Pressure reading
   should be in between 0.05 MPa and 0.3 MPa   -   Must ensure that Overload Protector is
   (0.5 bar and 3 bar). If necessary, adjust the Water   fixed/installed on the Optional Back-up heater
   Pump ④ SPEED accordingly to obtain normal   (CZ-NB3).
   water pressure operating range. If adjust Water   -   Overload Protector Specifications:
   Pump ④ SPEED cannot solve the problem,    Operating Temperature : 80 ±3°C (OFF)
   contact your local authorized dealer.    Rated Voltage, Current : AC 250V, 16A;
4. After test run, please clean the Magnetic Water   DC 12V, 50mA
   Filter Set ⑨. Reinstall it after finish cleaning.    Type: Single pole single throw type thermostat
   with disk bimetal.
   -   For installation works of Optional Back-up Heater
12.2.8.1   Check Water Flow of Water
   (CZ-NB3), refer to the Optional Back-up Heater
   Circuit   (CZ-NB3) Installation Instruction.
Confirm the maximum water flow during main pump
operation not less than 15 l/min.   12.2.8.3   Before Test Run
*Water flow can be check through service setup
(Pump Max Speed)      Before test-running the water circulation circuit,
[Heating operation at low water temperature with   loosen the plug on the unit’s air purge valve
lower water flow may trigger “H75” during defrost   counter-clockwise. Make sure to thoroughly
process.]   release the air from the drain plugs on each
   terminal.

   Drain
   Air purge
   valve
   Pressure
   relief
   valve
   Heating Panel

   90


--- Page 91 ---
12.2.8.4   During Test Run (Air Purging)   Service setup   12:00am,Mon
   Make sure to carry out thorough air purging during   Flow rate   Max. Duty   Operation
   commissioning to prevent pump from dry running.
   Access Remote Controller service setup for   0.0 L/min   0xCE   OFF
   initiate air purging function.

   Main menu   12:00am,Mon   Select

   Function setup
   System check
   Personal setup
   Service setup   12:00am,Mon
   Service contact
   Flow rate   Max. Duty   Operation
   Select   Confirm

   0.0 L/min   0xCE   Air Purge

   Main menu   12:00am,Mon   Select

   System check
   Personal setup
   Service contact
   Air Purge starts
   Installer setup
   Select   Confirm   Note:
   • When air purge operation during initial commissioning, ensure
   constant water pressure applied by supplying water to the
   circulation circuit.
   • Do not leave pump running dry for a long time, it may cause
   Installer setup   12:00am,Mon   pump malfunction.

   System setup
   • Ensure to check pre-charge pressure of the expansion vessel
   during installation, as air is gradually escape after a certain
   Operation setup   period. If the static pressure in the expansion vessel falls below
   0.5 bar, cavitation and pump lock may happen.
   Service setup
   • It is strongly recommended to check the expansion vessel
   Remote control setup   pre-charged pressure once a year. (The pressure may be
   reduced by half in two years)
   Select   Confirm
   • After the air purge operation, carry out normal operation.
   When you can no longer hear the sound of air flowing from the
   water circulation circuit, turn the air purge valve plug clockwise
   to tighten it.

   Service setup   12:00am,Mon
   Pump maximum speed
   Pump down
   Dry concrete
   Service contact   Water
   connection   Air valve
   Select   Confirm
   port

   Expansion Vessel

   91


--- Page 92 ---
12.2.9 Maintenance   12.2.9.3   Proper Pump Down Procedure
   In order to ensure safety and optimal performance
   of the Tank Unit, seasonal inspections on the   WARNING
   Tank Unit, field wiring and piping have to be
   Strictly follow the steps below for proper pump down procedure.
   carried out at regular intervals. This maintenance   Explosion may occur if the steps are not followed as per
   should be carried out by authorized dealer.   sequence.
   Contact dealer for scheduled inspection.   1. When the Tank Unit is not in operation (standby), enter the
   Service setup menu in the Remote Controller and select Pump
   down operation to turn it ON. (See APPENDIX for
12.2.9.1   Maintenance for Magnetic   detail)
   2. After 10~15 minutes, (after 1 or 2 minutes in case very low
   Water Filter Set ⑨   ambient temperature (< 10°C)), fully close 2 way valve on
1. Turn OFF power supply.   Outdoor Unit.
2. Place a container below Magnetic Water Filter Set   3. After 3 minutes, fully close 3 way valve on Outdoor Unit.
   4. Press the “OFF/ON” switch on the Remote Controller ① to
   ⑨.   stop pump down operation.
3. Turn to remove the Magnet Bar at bottom of   5. Remove the refrigerant piping.
   Magnetic Water Filter Set ⑨.
4. By using Allen key (8mm), remove the Cap of   12.2.9.4   Installation of Ventilation Unit
   Discharge Port.
5. By using Allen Key (4mm), open the Service Valve
   on Top of Tank Unit (Optional)
   to release the dirty water from the Discharge Port      For installation works of Ventilation Unit on top of
   into a container. Close the service valve when the   Tank Unit, refer to the Ventilation Unit Installation
   container is full to avoid spillage in the tank unit.   Manual.
   Dispose the dirty water.
6. Reinstall the Cap of Discharge Port and Magnet   CAUTION
   Bar.   Before install Ventilation Unit, ﬁx the Feet that provided by
7. Re-charging the water to Space Heating / Cooling   Ventilation Unit to the half punch holes on Top Panel of Tank Unit,
   circuit if necessary (refer Section 12.2.5 for   Otherwise, heavy Ventilation Unit may fall and cause injury.
   details.)
8. Turn ON power supply.   Feet (4 pieces)
   - provided by Ventilation Unit

   Service
   Valve

   Discharge port
   Magnet Bar
   Half punch holes
   Open   Close

12.2.9.2   Maintenance for Safety Relief
   Valve (Field Supply)
   It is strongly recommended to operate the valve
   by turn the knob counter clockwise to ensure free
   water flow through discharge pipe at regular
   intervals to ensure it is not blocked and to remove
   lime deposit.

Stagnant water in Tank Unit should be drained if it is not going to
be operated for more than 60 days.

   92


--- Page 93 ---
12.3 Outdoor Unit
Attached accessories   Optional accessories
No.   Accessories part   Qty.   No.   Accessories part   Qty.
   Drain elbow   Base Pan Heater
   6   1
   1   1   CZ-NE2P

   • It is strongly recommended to install a Base Pan Heater (optional)
   Rubber cap   7 (For WH-UDZ03KE5*)
   if the outdoor unit is install in cold climate area. Refer the Base Pan
   2   3 (For WH-UDZ05KE5*, WH-UDZ07KE5* and
   Heater (optional) installation instruction for details of installation.
   WH-UDZ09KE5*)
   • Applicable Piping Kit (For WH-UDZ05KE5*, WH-UDZ07KE5* and
   Discharge grille   1 (For WH-UDZ05KE5*, WH-UDZ07KE5* and   WH-UDZ09KE5*) CZ-52F5,7,10BP
   WH-UDZ09KE5*)
   • Applicable Piping Kit (For WH-UDZ03KE5*) CZ-4F5,7,10BP
   3

   Metal plate   2 (For WH-UDZ05KE5*, WH-UDZ07KE5* and
   WH-UDZ09KE5*)
   4

   Screw   8 (For WH-UDZ05KE5*, WH-UDZ07KE5* and
   WH-UDZ09KE5*)
   5

12.3.1 Select the Best Location
   If an awning is built over the unit to prevent direct sunlight or rain, be careful that heat radiation from the
   condenser is not obstructed.
   For WH-UDZ03KE5*, avoid installation in areas where the ambient temperature may drop below -20°C.
   For WH-UDZ05KE5*, WH-UDZ07KE5* and WH-UDZ09KE5*, avoid installations in areas where the ambient
   temperature may drop below -25°C.
   Keep the spaces indicated by arrows from wall, ceiling, fence or other obstacles.
   Do not place any obstacles which may cause a short circuit of the discharged air.
   If outdoor unit installed near sea, region with high content of sulphur or oily location (e.g. machinary oil, etc), it
   lifespan maybe shorten.
   If piping length is over 10 m, additional refrigerant should be added as shown in the table.

   Piping size   Rated Length (m)   Max.
   Pre-charged   Max.   Min. Piping   Additional
   For Heat   For   Piping
   Model   Refrigerant   Elevation   Length   Refrigerant
   Gas   Liquid   Pump   Hydromodule   Length
   (kg)   (m)   (m)   (g/m)
   Indoor Unit   + Tank   (m)
   ø12.7mm   ø6.35mm
   WH-UDZ03KE5*   0.90   7   7   20   3   25   20
   (1/2")   (1/4")
   WH-UDZ05KE5*,
   WH-UDZ07KE5*   ø15.88mm   ø6.35mm
   1.30   7   7   30   3   50   25
   and   (5/8")   (1/4")
   WH-UDZ09KE5*

Example: WH-UDZ03KE5*
If piping length is 15m, the quantity of additional refrigerant should be 100g. [(15-10)m x 20 g/m = 100g]

   93


--- Page 94 ---
12.3.2 Install the Outdoor Unit

12.3.2.1   Installation Diagram
   It is advisable to avoid more than 2 blockage directions. For better ventilation & multiple-outdoor installation,
   please consult authorized dealer/specialist.
   This illustration is for explanation purposes only.

   Vinyl tape (Wide)   Vinyl tape (Wide)

   Saddle   Saddle
   Indoor unit/Outdoor unit connecting
   Indoor unit/Outdoor unit   cable
   connecting cable   WH-UDZ05KE5*
   (4-CORE WIRE/1.5 mm2)   (4-CORE WIRE/1.5mm²)
   Type designation 60245 IEC 57   WH-UDZ07KE5*, WH-UDZ09KE5*

   or 0m m
   or 0m m

   1   1

   re
   or 0 0m   o r 00 m
   re

   or heavier cable   (4-CORE WIRE/2.5mm²)

   mo
   mo

   m m   m m

   10
   10

   or   or   Type designation 60245 IEC 57 or
   e   e
   heavier cable
   ø6.35mm (1/4")   ø6.35mm (1/4")
   Liquid refrigerant piping   Liquid refrigerant piping
   m   m
   m e   ø12.7mm (1/2")   ø15.88mm (5/8")
   00 m or   0 0m or e
   0   Gas refrigerant piping   Gas refrigerant piping
   1 r
   o   10 r m
   o
   3   3
   or 00m   or 00 m
   mo m   mo m
   re   re

   For WH-UDZ03KE5*   For WH-UDZ05KE5*, WH-UDZ07KE5* and WH-UDZ09KE5*

   E   Model   A   B   C   D   E   F
   WH-UDZ03KE5*   540   160   20   330   430   46
   C
   F

   WH-UDZ05KE5*,
   WH-UDZ07KE5*   613   130   24   360.5   543   32
   (Anchor pitch)

   and WH-UDZ09KE5*
   D

   (Unit : mm)

   A   B
   (Anchor pitch)

   After selecting the best location, start installation according to Installation Diagram.
   1 Fix the unit on concrete or rigid frame firmly and horizontally by bolt nut (ø10 mm).
   2 When installing at roof, please consider strong wind and earthquake. Please fasten the installation stand
   firmly with bolt or nails.

12.3.2.2   Disposal of Outdoor Unit Drain Water
   When a Drain elbow   is used, please ensure to follow below:
   o the unit should be placed on a stand which is taller than 50 mm.
   o cover the ø20mm holes with Rubber cap   (refer to illustration below).
   o use a tray (field supply) when necessary to dispose the outdoor unit drain water.
   If the unit is used in an area where temperature falls below 0°C for 2 or 3 consecutive days, it is recommended
   not to use the Drain elbow   and Rubber cap , for the drain water freezes and the fan will not rotate.

   Drain elbow 1   Drain elbow 1

Rubber cap 2   x7
   Rubber cap 2   x3

   WH-UDZ03KE5*   WH-UDZ05KE5*, WH-UDZ07KE5* and WH-UDZ09KE5*

   94


--- Page 95 ---
12.3.3 Install the Discharge Grille
   This section is for WH-UDZ05KE5*, WH-UDZ07KE5* and WH-UDZ09KE5* only.
   Make sure to install the outdoor unit on concrete or rigid frame by bold nut before install the discharge grille   .
   Hook the metal plate   on the cabinet front plate at 2 locations and tighten with screw . (Figure a)
   Hook the discharge grille   to the cabinet front plate at 4 locations. (Figure b)
   Tighten the discharge grille to the cabinet front plate at 6 locations with screw . (Figure c)

   CAUTION

   Make sure to install the discharge grille to the outdoor unit
   before powering ON to protect againts a rotating fan

   x4
   x2

   Figure b
   Figure a

   x4   x2

   Figure c

12.3.4 Connecting the Piping

12.3.4.1   Connecting the Piping to Outdoor Unit
Decide piping length and then cut by using pipe cutter.
Remove burrs from cut edge. Make flare after
   Spanner
inserting the flare nut (locate at valve) onto the copper   or Wrench
pipe. Align center of piping to valves and then tighten
with torque wrench to the specified torque as stated in   Torque
the table.   wrench

   Piping size (Torque)
   Be sure to use two spanners to tighten.
   Model   (If the nuts are overtightened, it may cause the flares
   Gas   Liquid
   to break or leak.)
   ø12.7mm (1/2")   ø6.35mm (1/4")
WH-UDZ03KE5*
   [55 N•m]   [18 N•m]
WH-UDZ05KE5*,
   ø15.88mm (5/8")   ø6.35mm (1/4")
WH-UDZ07KE5* and
   [65 N•m]   [18 N•m]
WH-UDZ09KE5*

   95


--- Page 96 ---
12.3.4.1.1   Cutting and Flaring the Piping
   1   Please cut using pipe cutter and then remove the burrs.
   2   Remove the burrs by using reamer. If burrs is not removed, gas leakage may be caused.
   Turn the piping end down to avoid the metal powder entering the pipe.
   3   Please make flare after inserting the flare nut onto the copper pipes.

   Pipe   Handle    Improper flaring    When properly flared, the internal
   Reamer   Bar   0 – 0.5 mm
   Bar   Yoke   surface of the flare will evenly shine
   Core   and be of even thickness. Since the
   Point   Clamp   Inclined Surface Cracked Uneven   flare part comes into contact with
   down   Red arrow mark   Copper pipe   the connections, carefully check
   handle   damaged   thickness
1. To cut   2. To remove burrs   3. To flare   the flare finish.

   96


--- Page 97 ---
AIR PURGING METHOD IS PROHIBITED FOR R32 SYSTEM

12.3.5 Air Tightness Test on the Refrigerating System

   Do not purge the air with refrigerants but use a vacuum pump to vacuum the installation.

   There is no extra refrigerant in the outdoor unit for air purging.

   Before system is charged with refrigerant and before the refrigerating system is put into operation, below site test
   procedure and acceptance criteria shall be vertified by the certified technicians, and/or the installer.
   Be sure to check whole system for gas leakage.

   Preparation   1)   Connect a charging hose with a push pin to the Low side of a charging set and the
   (Step 1-2)   service port of the 3-way valve.
   2)   Attach the gauge manifold set correctly and tightly. Make sure that both valves of
   the manifold gauge (low pressure and high pressure) is in close position.

   3)   Connect the center hose of the manifold gauge to a vacuum pump.
   Evacuation
   4)   Turn on the power switch of the vacuum pump, then turn open the low side manifold
   (Step 3-4)   gauge valve and make sure that the needle in the gauge moves from
   0cmHg (0 MPa) to –76 cmHg (–0.1 MPa) or vacuum until 500 microns is achieved. This process
   continues for approximately ten minutes. Then close the low side manifold gauge valve.

   5)   Remove the vacuum pump from the centre hose and connect the center hose to cylinder of
   any applicable inert gas as test gas.
   Tightness Test   6)   Charge test gas into the system and wait until the pressure within the system to reach
   with Inert Gas   min. 1.04MPa (10.4barg).
   (Step 5-7)
   7)   Wait and monitor the pressure reading on the gauges. Check if there is any pressure drop. Waiting
   time depends on the size of the system.

   8)   If there is any pressure drop, perform step 9-12. If there is no pressure drop, perform step 13.

   9)  Use Gas Leak Detector to check for leaks. Must use the detection equipment
   YES   Leak detection   with a sensitivity of 5 grams per year of test gas or better.
   Pressure drop   and repair
   (Step 8)   10) Move the probe along the Air-to-Water Heatpump system to check for leaks, and mark
   (Step 9-12)   for repair.
   11) Any leak detected and marked shall be repaired.
   NO   12) After repair, repeat evacuation steps 3-4 and tightness test steps 5-7.
   Check the pressure drop as in step 8.

   Recovery of   13) If no leak,   Liquid side
   Recover the test gas.   Indoor unit
   Test Gas   Outdoor unit
   Two-way valve
   (Step 13)   Perform evacuation of
   steps 3-4.
   Then proceed to step 14.   Close

   Gas side

   Evacuation
   (Step 3-4)   Three-way valve
   Tank   OPEN
   Cylinder   Close
   14) Disconnect the charging
   hose from the service
   port of the 3-way valve.   Vacuum
   Inert   CLOSE
   Open
   15) Tighten the service port   gas
   pump
   2 and 3 valves   caps of the 3-way valve
   (Step 14-18)   at a torque of 18 N•m
   with a torque wrench.
   16) Remove the valve caps of both of the 2-way valve and 3-way valve.
   17) Open both of the valves, using a hexagonal wrench (4mm). It is recommended to allow refrigerant
   slowly ﬂow into the refrigerant system to prevent refrigerant freezing. Slightly open 2-way valve for
   5 seconds then close the valve. Repeat this action for 3 cycles then fully open the valve.
   Complete   18) Mount back the valve caps onto the 2-way valve and the 3-way valve to complete this process.

Notes:
   Recommended use of any of the following leak detector,
   I) Universal Sniffer leak detector
   II) Electronic halogen leak detector
   III) Ultrasonic Leak Detector

   97


--- Page 98 ---
12.3.6 Connect the Cable to the Outdoor Unit
   (FOR DETAIL REFER TO WIRING DIAGRAM AT UNIT)
   1 Remove the control board cover from the unit by loosening the screw.
   2 Connecting cable between indoor unit and outdoor unit shall be approved polychloroprene sheathed flexible
   cable (see below table), type designation 60245 IEC 57 or heavier cable.

   Model   Flexible cable specification   Terminal
   Board
   WH-UDZ03KE5*,   2
   4 x (1.5 mm )   1   2   3
   WH-UDZ05KE5*   Earth Wire
   WH-UDZ07KE5*,   must be
   2
   4 x (2.5 mm )   longer than
   WH-UDZ09KE5*   others cables
   for safety
   reason.
   Terminals on the indoor unit   1   2   3
   Holder (Clamper)
   Colour of wires
   Terminals on the outdoor unit   1   2   3
   WARNING
   This equipment must be properly earthed.

   3   Secure the cable onto the control board with the holder (clamper).
   4   Attach the control board cover back to the original position with screw.

12.3.6.1   Wire Stripping and Connecting Requirement
   Wire stripping
   Indoor/outdoor   Conductor fully   Conductor over   Conductor not
   insert   insert   fully insert
   10 ± 1 mm

   connecting terminal
   board

   5 mm or more
   (gap between wires)
   No loose strand when insert   ACCEPT   PROHIBITED   PROHIBITED

12.3.7 Pipe Insulation
   1   Please carry out insulation at pipe connection portion as mentioned in Indoor/Outdoor Unit Installation
   Diagram. Please wrap the insulated piping end to prevent water from going inside the piping.
   2   If drain hose or connecting piping is in the room (where dew may form), please increase the insulation by
   using POLY-E FOAM with thickness 6 mm or above.

   CAUTION

   If cleaning of the outdoor unit is necessary during installation or servicing,
   do not clean the outdoor unit with any hydrocarbon based solvent.

   98


--- Page 99 ---
12.4 Appendix
12.4.1 Variation of System
This section introduces variation of various systems using Air-To-Water Heatpump and actual setting method.
(NOTE) : For this model, both external room thermistor of Zone 1 and external room thermostat of Zone 1 must
   always be connected to main indoor PCB only regardless of Optional PCB (CZ-NS5P) connection.

12.4.1.1   Introduce Application Related to Temperature Setting

12.4.1.1.1   Temperature Setting Variation for Heating

1. Remote Controller

   Indoor
   Setting of remote controller

   Installer setting
   Outdoor   System setup
   Optional PCB connectivity - No

   Zone & Sensor:
   Water temperature

   Floor heating

Connect floor heating or radiator directly to the Tank Unit.
Remote controller is installed on Tank Unit.
This is the basic form of the most simple system.

2. Room Thermostat

   Tank Unit receive Room Thermo signal (ON/OFF) from Remote controller
   to control HP and circulation pump.
   Indoor   There is a build-in thermistor in the remote controller.

   Setting of remote controller
   Outdoor   Installer setting
   System setup
   Optional PCB connectivity - No
   Zone & Sensor:
   Room thermostat
   Internal
   Floor heating

Connect floor heating or radiator directly to the Tank Unit.
Remove remote controller from Tank Unit and install it in the room where floor heating is installed.
This is an application that uses remote controller as Room Thermostat.

   99


--- Page 100 ---
3. External Room Thermostat

   Indoor   Room   Setting of remote controller
   Thermostat
   (Field supply)   Installer setting
   System setup
   Outdoor   Optional PCB connectivity - No
   Zone & Sensor:
   Room thermostat
   (External)
   Floor heating

Connect floor heating or radiator directly to Tank Unit.
Remote controller is installed on Tank Unit.
Install separate external Room Thermostat (field supply) in the room where floor heating is installed.
This is an application that uses external Room Thermostat.

4. Room Thermistor

   Tank Unit compare between room temperature and setting temperature
   Indoor   on the Remote controller to control HP and circulation pump.

   Max: 30m
   Thermistor   Setting of remote controller
   Outdoor
   Installer setting
   System setup
   Optional PCB connectivity - No
   Zone & Sensor:
   Floor heating   Room thermistor

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

   100


--- Page 101 ---
12.4.1.1.2   Examples of Installations

Floor heating 1 + Floor heating 2

   Setting of remote controller
   Room Thermostat   Installer setting
   Indoor
   (field supply)   System setup
   Optional PCB connectivity - Yes
   Mixing valve 2   Thermistor 2
   Zone and Sensor - 2 Zone system
   Zone 1:Sensor
   Outdoor
   Mixing valve 1   Room thermostat
   Pump 2   Internal
   Zone 2:Sensor
   Pump 1
   Room
   Room thermostat
   Thermistor 1   (External)

   Buffer tank
   Floor heating 1   Floor heating 2

Connect floor heating to 2 circuits through buffer tank as shown in the figure.
Install mixing valves, pumps and thermistors (specified by Panasonic) on both circuits.
Remove remote controller from Tank Unit, install it in one of the circuit and use it as Room Thermostat.
Install external Room Thermostat (field supply) in another circuit.
Both circuits can set circulation water temperature independently.
Install buffer tank thermistor on buffer tank.
It requires connection setting of buffer tank and ΔT temperature setting at heating operation separately.
This system requires Optional PCB (CZ-NS5P).
Note : Buffer tank thermistor must be connected to main indoor PCB only.

Floor heating + Radiator

   Indoor
   Radiator   Setting of remote controller
   Pump 2
   Thermistor 2   Installer setting
   System setup
   Outdoor   Optional PCB connectivity - Yes
   Pump 1
   Mixing valve 1
   Zone and Sensor - 2 Zone system
   Zone 1:Sensor
   Water temperature

   Thermistor 1   Zone 2:Sensor
   Room
   Water temperature
   Buffer tank
   Floor heating

Connect floor heating or radiator to 2 circuits through buffer tank as shown in figure.
Install pumps and thermistors (specified by Panasonic) on both circuits.
Install mixing valve in the circuit with lower temperature among the 2 circuits.
(Generally, if install floor heating and radiator circuit at 2 zones, install mixing valve in floor heating circuit.)
Remote controller is installed on Tank Unit.
For temperature setting, select circulation water temperature for both circuits.
Both circuits can set circulation water temperature independently.
Install buffer tank thermistor on buffer tank.
It requires connection setting of buffer tank and ΔT temperature setting at heating operation separately.
This system requires the Optional PCB (CZ-NS5P).
Mind that if there is no mixing valve at the secondary side, the circulation water temperature may get higher than
setting temperature.
Note : Buffer tank thermistor must be connected to main indoor PCB only.

   101


--- Page 102 ---
Floor heating + Swimming pool

   Setting of remote controller
   Indoor   Thermistor 3   Installer setting
   System setup
   Mixing valve 2   Thermistor 2   Pump 3
   Optional PCB connectivity - Yes

   Outdoor   Zone and Sensor - 2 Zone system
   Mixing valve 1 Pump 1   Pump 2   Zone 1:Sensor
   Room thermostat
   Internal
   Zone 2
   Swimming pool
   Thermistor 1
   T
   Heat EXT

   Buffer tank
   Floor heating 1   Swimming pool

Connect floor heating and swimming pool to 2 circuits through buffer tank as shown in figure.
Install mixing valves, pumps and thermistors (specified by Panasonic) on both circuits.
Then, install additional pool heat exchanger, pool pump and pool sensor on pool circuit.
Remove remote controller from Tank Unit and install in room where floor heating is installed. Circulation water
temperature of floor heating and swimming pool can be set independently.
Install buffer tank sensor on buffer tank.
It requires connection setting of buffer tank and ΔT temperature setting at heating operation separately. This system
requires the Optional PCB (CZ-NS5P).

   Must connect swimming pool to “Zone 2”.
If it is connected to swimming pool, operation of pool will stop when “Cooling” is operated.
Note : Buffer tank thermistor must be connected to main indoor PCB only.

Swimming pool only

   Indoor   Thermistor

   Pump   Setting of remote controller

   Outdoor   Installer setting
   System setup
   Optional PCB connectivity - Yes

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

   102


--- Page 103 ---
Simple 2 zone (Floor heating + Radiator)

   Setting of remote controller
   Indoor   Installer setting
   Radiator   System setup
   Optional PCB connectivity - Yes
   Thermistor 1
   Zone and Sensor - 2 Zone system
   Outdoor   Zone 1:Sensor
   Mixing valve   Pump 2   Water temperature
   Zone 2:Sensor
   Room
   Thermistor 2   Water temperature
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

   Indoor   Buffer tank
   Setting of remote controller
   Outdoor   Installer setting
   System setup
   Optional PCB connectivity - No
   Pump   Thermistor
   Buffer Tank connection - Yes
   T for buffer tank

   Floor heating

This is an application that connects the buffer tank to the Tank Unit.
Buffer tank’s temperature is detected by buffer tank thermistor (specified by Panasonic).
Without connection of Optional PCB, external pump can be used for circulation in the floor heating circuit.
Note : Buffer tank thermistor must be connected to main indoor PCB only.

   103


--- Page 104 ---
Buffer tank + Solar

   Solar thermistor
   Indoor   Setting of remote controller
   Buffer tank
   Installer setting
   System setup
   Optional PCB connectivity - Yes
   Outdoor
   Solar pump   Buffer Tank connection - Yes
   T for buffer tank

   Pump   Solar connection - Yes
   Mixing valve   Thermistor   Buffer tank
   T turn ON
   T turn OFF
   Antifreeze
   Floor heating   Hi limit

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

   Indoor   Buffer tank

   Outdoor   Mixing   Pump
   valve   Thermistor
   Setting of remote controller

   Installer setting
   System setup
   Optional PCB connectivity - Yes
   Bivalent - Yes
   Floor heating   Turn ON: outdoor temp.
   Control pattern

   Boiler

This is an application that connects the boiler to the Tank Unit, to compensate for insufficient capacity by operate
boiler when outdoor temperature drops & heat pump capacity is insufficient.
Boiler is connected parallel with heat pump against heating circuit.
Besides that, an application that connects to the DHW tank’s circuit to heat up tank ‘s hot water is also possible.
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
Make sure the return water temperature from the heating circuit to the Tank Unit does NOT exceed 55°C.
Boiler is turned off by safety control when the water temperature of the heating circuit exceed 85°C.

   104


--- Page 105 ---
12.4.2 How to Fix Cable

12.4.2.1   Connecting with External Device (Optional)
   All connections shall follow to the local national wiring standard.
   It is strongly recommended to use manufacturer-recommended parts and accessories for installation.
   For connection to main PCB ⑦
1.   Two-way valve shall be spring and electronic type, refer to “Field Supply Accessories” table for details. Valve
   cable shall be (3 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier, or similarly double insulation
   sheathed cable.
   *note: - Two-way Valve shall be CE marking compliance component.
   - Maximum load for the valve is 9.8VA.
2.   Room thermostat zone 1 cable must be (4 or 3 × min 0.5 mm2), of type designation 60245 IEC 57 or heavier
   cord, or similarly double insulation sheathed cable.
3.   Extra pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
4.   Boiler contact/defrost signal cable shall be (2 × min 0.5 mm2), of type designation 60245 IEC 57 or heavier.
5.   External control shall be connected to 1-pole switch with min 3.0 mm contact gap. Its cable must be (2 × min
   0.5 mm2), double insulation layer of PVC-sheathed or rubber-sheathed cable.
   *note: - Switch used shall be CE compliance component.
   - Maximum operating current shall be less than 3Arms.
6.   Room sensor zone 1, outdoor air sensor and buffer tank sensor cable shall be (2 × min 0.3 mm2) double
   insulation layer of PVC-sheathed or rubber-sheathed.

   Main PCB 7

   Power Supply 1
   Terminal board
   Power Supply 2
   Terminal board

   Holder  Indoor terminal for
   (Clamper) connecting cables

   How to guide the optional cables and power supply cord
   (view without internal wiring)

   Optional cables:
   • External control cable
   • Room sensor zone 1
   • Outdoor air sensor cable
   • Remote controller cable
   • Buffer tank sensor

   Optional cables:
   • 2-way valve cable
   • Room thermostat
   zone 1 cable
   • Extra pump cable
   • Boiler contact/defrost signal
   cable
   • Power Supply 1 cord
   • Power Supply 2 cord (Only if Optional Back-up
   Heater (CZ-NB3) installed)
   • Indoor Unit/Outdoor Unit Connecting cable

   105


--- Page 106 ---
 For connection to Optional PCB 7 .
1. By connecting Optional PCB, 2 Zone temperature control can be achieved. Please connect mixing valves, water
   pumps and thermistors in zone 1 and zone 2 to each terminals in Optional PCB. Temperature of each zone can
   be controlled independently by remote controller.
2. Pump zone 1 and zone 2 cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
3. Solar pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
4. Pool pump cable shall be (2 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
5. Room thermostat zone 2 cable shall be (4 × min 0.5 mm2), of type designation 60245 IEC 57 or heavier.
6. Mixing valve zone 1 and zone 2 cable shall be (3 × min 1.5 mm2), of type designation 60245 IEC 57 or heavier.
7. Room sensor zone 1 and zone 2 cable shall be (2 × min 0.3 mm2), double insulation layer (with insulation
   strength of minimum 30V) of PVC-sheathed or rubber-sheathed cable.
8. Pool water sensor and solar sensor cable shall be (2 × min 0.3 mm2), double insulation layer (with insulation
   strength of minimum 30V) of PVC-sheathed or rubber-sheathed cable.
9. Water sensor zone 1 and zone 2 cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or
   rubber-sheathed cable.
10. Demand signal cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed
   cable.
11. SG signal cable shall be (3 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed cable.
12. Heat/Cool switch cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-sheathed
   cable.
13. External compressor switch cable shall be (2 × min 0.3 mm2), double insulation layer of PVC-sheathed or rubber-
   sheathed cable.

   Optional PCB 7

   Main PCB 7

   Power Supply 1
   Terminal board
   Power Supply 2
   Terminal board

   Holder  Indoor terminal for
   (Clamper) connecting cables

   How to guide the optional cables and power supply cord
   (view without internal wiring)

   106


--- Page 107 ---
Optional cables:
   • External control cable
   • Outdoor air sensor cable
   • Remote controller cable
   • Buffer tank sensor cable
   Optional cables (from Optional PCB)
   • Room sensor zone 1 cable
   • Room sensor zone 2 cable
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
• Room thermostat
  zone 1 cable
• Extra pump cable
• Boiler contact/defrost
  signal cable
   • Power Supply 1 cord
   • Power Supply 2 cord (Only if Optional Back-up
   Heater (CZ-NB3) installed)
   • Indoor Unit/Outdoor Unit Connecting cable
   Optional cables (from Optional PCB):
   • Pump zone 1 cable
   • Pump zone 2 cable
   • Solar pump cable
   • Error signal cable
   • Pool pump cable
   • Room thermostat zone 2 cable
   • Mixing valve zone 1 cable
   • Mixing valve zone 2 cable

   Terminal screw on PCB   Maximum tightening torque cN•m {kgf•cm}
   M3   50 {5.1}
   M4   120 {12.24}

   107


--- Page 108 ---
12.4.2.2   Guide Optional Cables and      Ensure all sensor cables are not touching with
   Power Supply Cords to   Front Plate ⑱
      Guide the wiring inside the unit like below figure.
   Bushings   Once all wiring work done, tie the cable / cord with
   the banding strap (field supply), to prevent them
   CAUTION   touching with hot surfaces such as Optional
Wire guiding shall be free from hot surfaces.   Back-up Heater (CZ-NB3), bare copper pipes and
Else, cable insulator damage and electrical shock may happen.   etc.
Wire ways shall be smooth and free from sharp edges.
Else, cable insulator damage and electrical shock may happen.

   Use either “COMBINATION-1” or
   “COMBINATION-2” for guiding Optional Cables
   and Power Supply Cords to Bushings.

   D-1
   COMBINATION- 1
   A-1

   Wiring for   Wiring for
   “COMBINATION-1”   “COMBINATION-2”
   A-2
   D-2   COMBINATION- 2

   12.4.2.3   Connecting Cables Length
   When connecting cables between Tank Unit and
   external devices, the length of the said cables must
   not exceed the maximum length as shown in the table.
   A-1 and A-2 Bushings are for:
   External device   Maximum cables length (m)
   Power Supply 1 cord
   Power Supply 2 cord   Two-way valve   50
   Indoor Unit/Outdoor Unit Connecting cable   Mixing valve   50
   Pump zone 1 cable   Room thermostat   50
   Pump zone 2 cable
   Extra pump   50
   Solar pump cable
   Room thermostat zone 1 cable   Solar pump   50
   Room thermostat zone 2 cable   Pool pump   50
   Mixing valve zone 1 cable   Pump   50
   Mixing valve zone 2 cable   Boiler contact / Defrost signal   50
   2-way valve cable
   External control   50
   Extra pump cable
   Boiler contact cable   Room sensor   30
   Outdoor air sensor   30
   D-1 and D-2 Bushings are for:   Buffer tank sensor   30
   External control cable
   Pool water sensor   30
   Outdoor air sensor cable
   Remote controller cable   Solar sensor   30

   Room sensor zone 1 cable   Water sensor   30
   Room sensor zone 2 cable   Demand signal   50
   Buffer tank sensor cable   SG signal   50
   Pool sensor cable
   Heat/Cool switch   50
   Water sensor zone 1 cable
   Water sensor zone 2 cable   External compressor switch   50
   Demand signal cable
   Solar sensor cable
   SG signal cable
   Heat/Cool switch cable
   External Compressor switch cable

   108


--- Page 109 ---
12.4.2.4   Connection of the Main PCB

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

   C O N C O N   HC N L   Current
   2-way 3-way   Room   Anode
   valve valve Thermostat 1 System

   Signal inputs

Optional Thermostat   L N=AC230V, Heat, Cool=Thermostat heat, Cool terminal
   Dry contact Open=not operate, Short=operate (System setup necessary)
External control
   Able to turn ON/OFF the operation by external switch
   Connected (Please use 2 cores wire for relocation and extension. Total cable length
Remote controller
   shall be 50m or less.)

   Outputs

   AC230V N=Neutral Open, Close=direction (For circuit
3-way valve   AC230V, 12 VA
   switching when connected to DHW tank)
   AC230V N=Neutral Open, Close (Prevent water circuit pass
2-way valve   AC230V, 12 VA
   through during cooling mode)
Extra pump   AC230V (Used when Tank Unit pump capacity is insufficient)   AC 230V, 0.6 A max
Boiler contact /
   Dry contact (System setup necessary)
Defrost signal

   Thermistor inputs

   PAW-A2W-TSRT   It does not work when using the
Zone 1 room sensor
   Optional PCB
Outdoor air sensor   PAW-A2W-TSOD (Total cable length shall be 30m or less)
Buffer tank sensor   PAW-A2W-TSBU

   109


--- Page 110 ---
12.4.2.5   Connection of Optional PCB (CZ-NS5P)

   Room   Mixing   Mixing
   Thermostat 2   valve 1   valve 2
   L N Cool Heat   N O C   N O C

   Pool
   Pump

   Solar
   Ext.
   Pump
   comp.
   SW
   Error
   Heat/
   signal
   Cool
   SW
   Zone 1
   Pump   Bit1
   Bit2 SG
   Zone 2   Vcc signal
   Pump

   Zone 2 Zone 1   Pool Zone 2 Zone 1 Demand Solar
   room room   water water water signal sensor
   sensor sensor   sensor sensor sensor

   Signal inputs

Optional Thermostat   L N =AC230V, Heat, Cool=Thermostat heat, Cool terminal
   Dry contact Vcc-Bit1, Vcc-Bit2 open/short (System setup necessary)
SG signal
   Switching SW (Please connect to the 2 contacts controller)
Heat/Cool SW   Dry contact Open=Heat, Short=Cool (System setup necessary)
   Dry contact Open=Comp. OFF, Short=Comp. ON
External comp.SW
   (System setup necessary)
   DC 0~10V (System setup necessary)
Demand signal
   Please connect to the DC 0~10V controller.

   Outputs

   AC230V N=Neutral Open, Close=mixture direction
Mixing valve   AC230V, 6VA
   Operating time: 30s~120s
Pool pump   AC230V   AC 230V, 0.6 A max
Solar pump   AC230V   AC 230V, 0.6 A max
Zone pump   AC230V   AC 230V, 0.6 A max

   Thermistor inputs

Zone room sensor   PAW-A2W-TSRT
Pool water sensor   PAW-A2W-TSHC
Zone water sensor   PAW-A2W-TSHC
Solar sensor   PAW-A2W-TSSO

   110


--- Page 111 ---
12.4.2.6   Recommended External Device   5. Solar sensor: PAW-A2W-TSSO
   Specification   Use for measurement of the solar panel
   temperature.
  This section explains about the external devices   Insert the sensor into the sensor pocket and paste
   (optional) recommended by Panasonic. Please   it on the solar panel surface.
   always ensure to use the correct external device
   during system installation.   Dimensions (mm)
 For optional sensor.   blue
1. Buffer tank sensor: PAW-A2W-TSBU   Ø6
   Use for measurement of the buffer tank   brown   black
   40
   temperature.
   Insert the sensor into the sensor pocket and paste
   6. Please refer to the table below for sensor
   it on the buffer tank surface.
   characteristic of the sensors mentioned above.
   Dimensions (mm)
   blue   Temperature (°C)   Resistance (kΩ)
   Ø6   30   5.326
   brown   black
   40   25   6.523
   20   8.044
2. Zone water sensor: PAW-A2W-TSHC
   15   9.980
   Use to detect the water temperature of the control
   zone.   10   12.443
   Mount it on the water piping by using the stainless   5   15.604
   steel metal strap and contact paste (both are
   0   19.70
   included).
   -5   25.05
   Dimensions (mm)   93   -10   32.10
   -15   41.45
   35   -20   53.92
   70
   -25   70.53
   -30   93.05

3. Outdoor sensor: PAW-A2W-TSOD   -35   124.24
   If the installation location of the outdoor unit is   -40   167.82
   exposed to direct sunlight, the outdoor air
   temperature sensor will be unable to measure the
   Temperature (°C)   Resistance (kΩ)
   actual outdoor ambient temperature correctly.
   In this case, optional outdoor temperature sensor   150   0.147
   can be fixed at a suitable location to more   140   0.186
   accurately measure ambient temperature.   130   0.236

   Dimensions (mm)   70   120   0.302
   110   0.390
   46   93   100   0.511
   90   0.686
   80   0.932
   70   1.279
4. Room sensor: PAW-A2W-TSRT
   Install the room temperature sensor to the room   65   1.504
   which requires room temperature control.   60   1.777

   Dimensions (mm)   55   2.106
   30   86   60   50   2.508
   45   3.003
   86   40   3.615
   35   4.375

   111


--- Page 112 ---
   For optional pump.   4. Fix the Network Adaptor 6 to Network
   Power supply: AC230V/50Hz, <500W   Adaptor Holder.
   Recommended part: Yonos 25/6: made by Wilo   Guide the cable as shown in the diagram so that
   external forces cannot act on the connector in the
   adaptor.

   Connection examples:

   CN-CNT cable

   For optional mixing valve.
   Power supply: AC230V/50Hz (input open/output
   close)
   Operating time: 30s~120s
   Recommended part: 167032: made by Caleffi

   Network
   Adaptor
   Holder

   Without Optional PCB
   WARNING
This section is for authorized and licensed electrician/water   CN-CNT cable
system installer only. Work behind the front plate secured by
screws must only be carried out under supervision of qualiﬁed
contractor, installation engineer or service person.

12.4.2.7   Network Adaptor 6 .
   Installation (Optional)
1. Remove the Control Board Cover ⑤, then
   connect the cable included with this adaptor to
   the CN-CNT connector on the printed circuit   Network
   board.   Adaptor
    Pull the cable out of the Tank Unit so that   Holder
   there is no pinching.
    If an Optional PCB has been installed in the
   Tank Unit, connect to the CN-CNT connector   With Optional PCB
   of the Optional PCB.
2. Insert a flat head screwdriver into the slot on
   the top of the adaptor and remove the cover.
   Connect the other end of the CN-CNT cable
   connector to the connector inside the adaptor.

   Slot

   Connector

3. Pull the CN-CNT cable through the hole in the
   bottom of the adaptor and re-attach the front
   cover to the back cover.

   CN-CNT cable
   (Take care not to
   pinch the cable)

   112


--- Page 113 ---
12.4.3 System Installation

12.4.3.1   Remote Controller Outline
The LCD display as shown in this manual are for instructional purpose only, and may differ from the actual unit.

   Name   Function
   A: Main screen   Display information
   A   B: Menu   Open/Close main menu
   C: Triangle (Move)   Select or change item
   D: Operate   Start/Stop operation
   E: Back   Back to previous item
   B
   F: Quick Menu   Open/Close Quick menu
   C   G: OK   Confirm

   D

   E   F   G
   LCD Display
   (Actual - Dark background with white icons)
   1

   12:00am,Mon

   24
   5

   40˚c

   ˚c 18˚c   6

   2   3   4
   Name   Function
1: Function icon   Display set function/status

   Holiday mode   Demand control

   Room heater
   Weekly timer
   *Only displayed when Back-up heater function is enabled.
   Tank heater
   Quiet mode
   *Only displayed when Back-up heater function is enabled.
   Remote controller room
   Solar
   thermostat

   Powerful mode   Boiler

2: Mode   Display set mode/current status of mode

   Heating   Cooling

   Auto   Hot water supply   Auto heating   Auto cooling

   Heat pump operating

   Compensation   Set direct water
3: Temp setting   Set room temp   Set pool temp
   curve   temp

4: Display Heat temp   Display current heating temperature (it is set temperature when enclosed by line)
5: Display tank temp   Display current tank temperature (it is set temperature when enclosed by line)
   The zone 2 will shown in LCD display if is connected with Optional PCB.
6: Outdoor temp   Display outdoor temp

   113


--- Page 114 ---
First time of power ON (Start of installation)

Initialization   12:00am,Mon

   When power is ON, firstly initialization
   Initializing.   screen appears (10 sec)

   12:00am,Mon

   When initialization screen ends, it turns
   to normal screen.

   Start

Language   12:00am,Mon   When any button is pressed, language
   setting screen appears.
 ENGLISH
   (NOTE) If initial setting is not performed, it
 FRANÇAIS   does not go into menu.
 DEUTSCH   When there are two remote controllers
 ITALIANO   installed from the beginning, the first remote
   controller to set and confirm language will
   Select   Conﬁrm
   be recognised as main remote controller.
   Set language & confirm

Clock format   12:00am,Mon

   24h
   When language is set, setting screen of
   time display appears (24h/am/pm)
   am/pm

   Select   Conﬁrm

   Set time display & confirm

Date & time   12:00am,Mon

   Year/Month/Day   Hour : Min

   YY/MM/DD/Time setup screen appears
   2015 / 01 / 01   12 : 00

   Select   Conﬁrm

   Set YY/MM/DD/Time & confirm
   If set No & confirm, a caution message will
Front grille   12:00am,Mon
   be displayed to ensure outdoor front grille is
 Is O/D front grille ﬁxed?   installed before proceed to operate the unit.
   No
   Caution
   Yes
   To prevent injury, fix
   front grille before ope.
   Select   Conﬁrm   [   ] Close

   Set Yes & confirm if outdoor front grille has been installed

   12:00am,Mon

   Back to initial screen

   Start

   Press menu, select Installer setup

   114


--- Page 115 ---
Main Menu   12:00am,Mon

 System check
 Personal setup
 Service contact
 Installer setup
   Select   Conﬁrm

   Confirm to go into Installer setup

12.4.3.2   Installer Setup
   1
  System setup   Optional PCB connectivity   Yes/No

   2   Only when the selection for Optional PCB is Yes
   Zone & Sensor   1 Zone system / 2 Zone system   Zone settings

   3
   Heater capacity   Capacity select
   *Only available when Back-up heater function is enabled.
   4
   Anti freezing   Yes/No

   5
   DHW Capacity   Variable/Standard

   6
   Buffer Tank connection   Yes/No   ∆T setup

   7
   Base pan heater   Yes/No   A/B

   8
   Alternative outdoor sensor   Yes/No

   9
   Bivalent connection   Yes/No   Bivalent setup

   10
   External SW   Yes/No

   11   Only when the selection for Optional PCB is Yes
   Solar connection   Yes/No   Tank setup   Solar setup

   12   Only when the selection for Optional PCB is Yes
   External Error signal   Yes/No

   13   Only when the selection for Optional PCB is Yes
   Demand control   Yes/No

   14   Only when the selection for Optional PCB is Yes
   SG ready   Yes/No   Capacity setup

   15   Only when the selection for Optional PCB is Yes
   External Compressor SW   Yes/No

   16
   Circulation liquid   Water/glycol

   17   Only when the selection for Optional PCB is Yes
   Heat-Cool SW   Yes/No

   18
   Force Heater   Auto/Manual
   *Only available when Back-up heater function is enabled.
   19
   Force Defrost   Auto/Manual

   20
   Defrost Signal   Yes/No

   21
   Pump flowrate   ∆T/ Max. Duty

   115


--- Page 116 ---
22
   DHW defrost   Yes/No

   23
   Heating control   Comfort/Efficiency

   24   Heat-cool meter / *Tank meter /
   External meter   Elec. meter HP / Elec. meter 1 (PV meter) /
   Elec. meter 2 (Total building) / Elec. meter 3 (Reserve)
   25   *Only available when Heat-cool meter select Yes
   Electrical anode   Yes/No
   26
   Water temp. for   Compensation   Compensation
Operation setup   Heat   heating ON   curve   curve setup
   Direct   Direct temp. setup
   27
   Outdoor temp.
   for heating OFF   Heating OFF Temp. setup

   28
   ∆T for heating ON   ∆T for heating setup
   *Only available when Back-up heater function
   29   is enabled.
   Heater ON/OFF   O/D temp for heater ON setup
   Heater ON Delay Time
   ∆T of target temperature for Heater ON
   ∆T of target temperature for Heater OFF
   Cooling model
   only   30   (Display only if Cool exist, or else skip)
   Compensation   Compensation
   Cool   Water temp. for cooling ON   curve   curve setup

   31   Direct   Direct temp. setup

   ∆T for cooling ON   ∆T for cooling setup
   Cooling model
   only   32
   Outdoor temp. for
   Auto   (Heat to Cool)   Heat   Cool change temp. setup

   33
   Outdoor temp. for
   Only when the   (Cool to Heat)   Cool   Heat change temp. setup
   selection for Tank
   is Yes   34
   Tank   Floor operation time (max.)   Max. operation time for Heat & Cool mode setup

   35
   Tank heat up time (max.)   Max. operation time for Tank mode setup

   36
   Tank re-heat temp.   Tank re-heat temp. setup

   37
   Sterilization   Sterilization day and temp. and time setup
   38
   Service setup   Pump maximum speed   Pump maximum speed setup   Air purge

   39
   Pump down   Pump down ON / OFF

   40
   Dry concrete   ON (Dry concrete)

   41   Edit (Dry concrete schedule)   Day and temp. setup
   Service contact   Contact 1   Name and Tel No. setup
   Contact 2   Name and Tel No. setup
   42
Remote control setup   RC selection   Single / Dual

   116


--- Page 117 ---
12.4.3.3   System Setup

  1. Optional PCB connectivity   Initial setting: No   System setup   12:00am,Mon
   Optional PCB connectivity
 If function below is necessary, please purchase and install Optional PCB.
 Please select Yes after installing Optional PCB.   Zone & Sensor
 • 2-zone control   Heater capacity
 • Pool   Anti freezing
 • Solar
   Select   Confirm
 • External error signal output
 • Demand control
 • SG ready
 • Stop heat source unit by external SW

  2. Zone & Sensor   Initial setting: Room and Water temp.   System setup   12:00am,Mon
   Optional PCB connectivity
 If no Optional PCB connectivity
   Zone & Sensor
 Select sensor of room temperature control from the following 3 items
 1 Water temperature (circulation water temperature)   Heater capacity
 2 Room thermostat (Internal or External)   Anti freezing
 3 Room thermistor
   Select   Confirm
 When there is Optional PCB connectivity
 1 Select either 1 zone control or 2 zone control.
   If it is 1 zone, select either room or pool, select sensor
   If it is 2 zone, after select sensor of zone 1, select either room or pool for zone
   2, select sensor
 (NOTE) In 2 zone system, pool function can be set at zone 2 only.

  3. Heater capacity   Initial setting: Depend on model   System setup   12:00am,Mon
   Optional PCB connectivity
 If there is built-in Heater, set the selectable heater capacity.   Zone & Sensor
 (NOTE) There are models which cannot select Heater capacity.   Heater capacity
 *Only available when Back-up heater function is enabled.   Anti freezing
   Select   Confirm

  4. Anti freezing   Initial setting: Yes   System setup   12:00am,Mon
   Optional PCB connectivity
 Operate anti-freezing of water circulation circuit.
   Zone & Sensor
 If select Yes, when the water temperature is reaching its freezing temperature, the
 circulation pump will start up. If the water temperature does not reach the pump   Heater capacity
 stop temperature, back-up heater will be activated.   Anti freezing
   Select   Confirm
 (NOTE) If set No, when the water temperature is reaching its freezing temperature
   or below 0°C, the water circulation circuit may freeze and cause malfunction.

  5. DHW Capacity   Initial setting: Variable   System setup   12:00am,Mon

 Select “Variable”   Zone & Sensor
 - The heat pump runs with efficient boiling, which is an energy-saving mode.   Heater capacity
   However, if hot water usage is high and the tank water temperature is low, the   Anti freezing
   heat pump will switch to fast heat-up mode, which uses higher heating capacity
   to heat up the tank. When “Efficiency” is selected in the “23. Heating control”   DHW capacity
   setting, the tank heat-up process will be delayed until a much lower tank water   Select   Conﬁrm
   temperature is reached, which improves the efficiency of the heating process.
   To ensure sufficient hot water, select either “Standard” in this setting or “Comfort” in the “23. Heating control” setting.
 Select “Standard”
 - The heat pump operates at its rated heating capacity during tank heating.

   117


--- Page 118 ---
6. Buffer Tank connection   Initial setting: No   System setup   12:00am,Mon
   Heater capacity
Select whether it is connected to buffer tank for heating or not.   Anti freezing
If buffer tank is used, please set Yes.
Connect buffer tank thermistor and set, ΔT (ΔT use to increase primary side temp   Tank connection
against secondary side target temp).   Buffer tank connection
If the buffer tank capacity is not so large, please set larger value for ΔT.
   Select   Confirm

 7. Base pan heater   Initial setting: No   System setup   12:00am,Mon
   Tank connection
Select whether Base pan heater is installed or not.
   Buffer tank connection
If set Yes, select to use either heater A or B.
   Tank heater
A: Turn on Heater when heating with defrost operation only   Base pan heater
B: Turn on Heater at heating
   Select   Confirm

 8. Alternative outdoor sensor   Initial setting: No   System setup   12:00am,Mon
   Buffer tank connection
Set Yes if outdoor sensor is installed.   Tank heater
Controlled by optional outdoor sensor without reading the outdoor sensor of heat
pump unit.   Base pan heater
   Alternative outdoor sensor
   Select   Conﬁrm

 9. Bivalent connection   Initial setting: No   System setup   12:00am,Mon
   Tank heater
Set if heat pump linked with boiler operation.
   Base pan heater
Connect the start signal of the boiler in boiler contact terminal (main PCB).
Set Bivalent connection to YES.   Alternative outdoor sensor
After that, please begin setting according to remote controller instruction.   Bivalent connection
Boiler icon will be displayed on remote controller top screen.
   Select   Confirm

After Bivalent connection Set YES, there is two option of control pattern to be select, (SG Ready / Auto)
1) SG ready (Only available to set when optional PCB set to YES)
   - SG Ready input from optional PCB terminal control ON/OFF of boiler and heat pump as below condition

   SG signal   Operation pattern
   Vcc-bit1   Vcc-bit2
   Open   Open   Heat pump OFF, Boiler OFF
   Short   Open   Heat pump ON, Boiler OFF
   Open   Short   Heat pump OFF, Boiler ON
   Short   Short   Heat pump ON, Boiler ON

* This bivalent SG ready input is sharing same terminal as [14. SG ready] connection. Only one of these two setting can be set at the
same time.
  When one is set, another setting will reset to not set.
2) Auto
There are 3 different modes in the boiler auto pattern operation. Movement of each modes are shown below.
2 Alternative (switch to boiler operation when drops below setting temperature)
3 Parallel (allow boiler operation when drops below setting temperature)
4 Advanced Parallel (able to slightly delay boiler operation time of parallel operation)
When the boiler operation is “ON”, “boiler contact” is “ON”, “_”(underscore) will be displayed below the boiler icon.
Please set target temperature of boiler to be the same as heat pump temperature.
When boiler temperature is higher than heat pump temperature, zone temperature cannot be achieved if mixing valve is not installed.
This product only allows one signal to control the boiler operation. Operation setting of boiler shall be responsible by installer.

   118


--- Page 119 ---
Alternative mode   Parallel mode
   operate boiler only   operate heat pump only   operate boiler and heat   operate heat pump only
   pump simultaneously
   Outdoor temp.
   Outdoor temp.
   -10°C (setting from remote controller)
   -10°C (setting from remote controller)
Advanced Parallel mode
   For heating   For DHW tank
   operate boiler and heat   operate heat pump only
   pump simultaneously   operate boiler and heat   operate heat pump only
   pump simultaneously

   Outdoor temp.
   Outdoor temp.
   -10°C (setting from remote controller)
   -10°C (setting from remote controller)
   Although heat pump operates   AND   AND
   but water temperature does
   not reach this temperature for   If actual tank temp. does
   more than 30 mins (setting   not achieve the setting
   from remote controller)   temp. within 30min   When tank temp.
   Tank temp.   Heat pump   (setting from remote   is achieved, both
   Lowering   thermo ON   controller), the boiler   operations stop
   Circulation water temp.   Tank   Boiling   turn ON   Tank setting
   temp.   initial   temp.
   temp.
   Boiler temp. ON   Boiler temp. OFF   Setting temp
   = Setting -8°C   = Setting -2°C   Heat
   30 min (setting from
   (setting from   (setting from   pump   remote control)
   remote controller)   remote controller)   Boiler
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
   Electricity price
Energy price

   Boiler price

   Operate Heat pump
   Outdoor temp.

   10. External SW   Initial setting: No   System setup   12:00am,Mon
   Base pan heater
Able to turn ON/OFF the operation by external switch.
   Alternative outdoor sensor
   Bivalent connection
   External SW
   Select   Confirm

   11. Solar connection   Initial setting: No   System setup   12:00am,Mon
   Alternative outdoor sensor
Set when solar water heater is installed.
   Bivalent connection
Setting include items below.   External SW
1 Set either buffer tank or DHW tank for connection with solar water heater.   Solar connection
2 Set temperature difference between solar panel thermistor and buffer tank or
   DHW tank thermistor to operate the solar pump.   Select   Confirm
3 Set temperature difference between solar panel thermistor and buffer tank or
   DHW tank thermistor to stop the solar pump.
4 Anti-freezing operation start temperature (please change setting based on usage of glycol.)
5 Solar pump stop operation when it exceeds high limit temperature (when tank temperature exceed designated temperature
   (70~90°C))

   119


--- Page 120 ---
12. External Error Signal   Initial setting: No   System setup   12:00am,Mon
   Bivalent connection
Set when external error display unit is installed.   External SW
Turn on Dry Contact SW when error happened.
   Solar connection
(NOTE) Does not display when there is no Optional PCB.
   External error signal
When error occurs, error signal will be ON.
After turn off “close” from the display, error signal will still remain ON.   Select   Confirm

 13. Demand control   Initial setting: No   System setup   12:00am,Mon
   External SW
Set when there is demand control.   Solar connection
Adjust terminal voltage within 1 ~ 10 V to change the operating current limit.
   External error signal
(NOTE) Does not display when there is no Optional PCB.   Demand control
   Select   Confirm

 Analog input   Rate   Analog input   Rate   Analog input   Rate
   [v]   [%]   [v]   [%]   [v]   [%]
   0.0   3.9 ~ 4.1   40   7.4 ~ 7.6   75
   not activate
   0.1 ~ 0.6   4.2   7.7
   45   40   80   75
   0.7   not   4.3   7.8
   10
   0.8   activate   4.4 ~ 4.6   45   7.9 ~ 8.1   80
   0.9 ~ 1.1   10   4.7   8.2
   50   45   85   80
   1.2   4.8   8.3
   15   10
   1.3   4.9 ~ 5.1   50   8.4 ~ 8.6   85
   1.4 ~ 1.6   15   5.2   8.7
   55   50   90   85
   1.7   5.3   8.8
   20   15
   1.8   5.4 ~ 5.6   55   8.9 ~ 9.1   90
   1.9 ~ 2.1   20   5.7   9.2
   60   55   95   90
   2.2   5.8   9.3
   25   20
   2.3   5.9 ~ 6.1   60   9.4 ~ 9.6   95
   2.4 ~ 2.6   25   6.2   9.7
   65   60   100   95
   2.7   6.3   9.8
   30   25
   2.8   6.4 ~ 6.6   65   9.9 ~   100
   2.9 ~ 3.1   30   6.7
   70   65   *A minimum operating current is applied on each model for
   3.2   6.8
   35   30   protection purpose.
   3.3   6.9 ~ 7.1   70
   *0.2 voltage hysteresis is provided.
   3.4 ~ 3.6   35   7.2
   75   70   *The value of voltage after 2nd decimal point are cut off.
   3.7   7.3
   40   35
   3.8

 14. SG ready   Initial setting: No   System setup   12:00am,Mon

Switch operation of heat pump by open-short of 2 terminals.   Solar connection
Setting belows are possible   External error signal
   SG signal   Working pattern   Demand control
 Vcc-bit1   Vcc-bit2   SG ready
 Open   Open   Normal
   Select   Conﬁrm
 Short   Open   Heat pump and Heater OFF
 Open   Short   Capacity 1
 Short   Short   Capacity 2
   SG Ready HPU STOP Consumption Mode Control Setting
   Main PCB DIP SW
Capacity setting 1
   ON
  - DHW capacity ___%   Remote control setting
   MODE
  - Heating capacity ___%   SW 2
   Set by
  - Cooling capacity ___°C   SG   External
   SG ready   ready compressor SW   DIP SW 3
Capacity setting 2   setting
   OFF   No SG ready and External compressor SW function
  - DHW capacity ___%   of remote   No   No
   ON   No SG ready and External compressor SW function
  - Heating capacity ___%   controller
   OFF   Normal External compressor SW control
  - Cooling capacity ___°C   No   Yes
   ON   Normal External compressor SW control
(When SG ready set to YES, Bivalent   OFF   Normal SG ready control
control pattern will set to Auto.)   SG ready control limit operation to 4.2kW (SG ready =
(NOTE) Does not display if there is   *Yes   No
   *ON   10 or 11, heater OFF while heatpump ON, Heat pump
   no Optional PCB.   OFF if >4.2kW and Heater ON 1 element)
   OFF   Normal SG ready and External compressor SW control
   *Yes   Yes   SG ready control limit operation to 4.2kW (SG ready =
   *ON   10 or 11, heater OFF while heatpump ON, Heat pump
   OFF if >4.2kW and Heater ON 1 element)

   120


--- Page 121 ---
15. External Compressor SW   Initial setting: No   System setup   12:00am,Mon
   External error signal
Set when external compressor SW is connected.
SW is connected to external devices to control power consumption, Open Signal   Demand control
will stop compressor’s operation. (Heating operation etc. are not cancelled).   SG ready
   External compressor SW
(NOTE) Does not display if there is no Optional PCB.
   Select   Confirm
If follow Swiss standard power connection, need to turn on DIP SW (SW2 pin3) of
main unit PCB. Short/Open signal used to ON/OFF tank heater (for sterilization purpose)

 16. Circulation Liquid   Initial setting: Water   System setup   12:00am,Mon
   Demand control
Set circulation of heating water.
   SG ready
There are 2 types of settings, water and glycol.   External compressor SW
   Circulation liquid
(NOTE) Please set glycol when using anti-freeze liquid.
   It may cause error if setting is wrong.   Select   Confirm

 17. Heat-Cool SW   Initial setting: Disable   System setup   12:00am,Mon
   SG ready
Able to switch (ﬁx) heating & cooling by external switch.
   External compressor SW
(Open) : Fix at Heating (Heating +DHW)   Circulation liquid
(Short) : Fix at Cooling (Cooling +DHW)   Heat-Cool SW
(NOTE) This setting is disabled for model without Cooling.
(NOTE) Does not display if there is no Optional PCB.   Select   Confirm

Timer function cannot be used. Cannot use Auto mode.

 18. Force Heater   Initial setting: Manual   System setup   12:00am,Mon
   External compressor SW
Under manual mode, user can turn on force heater through quick menu.
   Circulation liquid
If selection is ‘auto’, force heater mode will turn automatically if pop up error   Heat-Cool SW
happen during operation.   Force Heater
Force heater will operate follow the latest mode selection, mode selection is
disable under force heater operation.   Select   Confirm

Heater source will ON during force heater mode.
*Only available when Back-up heater function is enabled.

 19. Force Defrost   Initial setting: Manual   System setup   12:00am,Mon
   Circulation liquid
Under manual code, user can turn on force defrost through quick menu.
   Heat-Cool SW
If selection is ‘auto’, outdoor unit will run defrost operation once if heat pump have   Force heater
long hour of heating without any defrost operation before at low ambient condition.
   Force defrost
(Even auto is selected, user still can turn on force defrost through quick menu)
   Select   Confirm

 20. Defrost signal   Initial setting: No   System setup   12:00am,Mon
   Heat-Cool SW
Defrost signal sharing same terminal as bivalent contact in main board. When
   Force heater
defrost signal set to YES, bivalent connection reset to NO. Only one function can
be set between defrost signal and bivalent.   Force defrost
   Defrost signal
When defrost signal set to YES, during defrost operation is running at outdoor
unit defrost signal contact turn ON. Defrost signal contact turn OFF after defrost   Select   Confirm
operation end.
(Purpose of this contact output is to stop indoor fan coil or water pump during
defrost operation).

   121


--- Page 122 ---
21. Pump flowrate   Initial setting: ∆T   System setup   12:00am,Mon
   Force heater
If pump flowrate setting is ΔT, unit adjust pump duty to get different of water inlet
   Force defrost
and outlet base on setting on * ΔT for heating ON and * ΔT for cooling ON in
operation setup menu during room side operation.   Defrost signal
   Pump ﬂowrate
If pump flowrate setting is set to Max. duty, unit will set the pump duty to the set
duty at *Pump maximum speed in service setup menu during room side operation.   Select   Confirm

 22. DHW defrost   Initial setting: Yes   System setup   12:00am,Mon
   Force defrost
When DHW defrost set to YES, hot water of domestic hot water tank will be used
   Defrost signal
during defrost cycle.
When DHW defrost set to NO, hot water of floor heating circuit will be used during   Pump ﬂowrate
defrost cycle.   DHW defrost
   Select   Confirm

 23. Heating control   Initial setting: Comfort   System setup   12:00am,Mon

Compressor frequency control can be selected from two modes:   Defrost signal
Comfort and Efficiency.   Pump ﬂowrate
Select “Comfort”   DHW defrost
- The compressor operates at maximum frequency at the upper zone limit and
  reaches the set temperature faster.   Heating control
Select “Efficiency”   Select   Confirm
- The compressor frequency is gradually increased to reduce power consumption.
  When “Variable” is selected in the “5. DHW capacity” setting, the tank heat-up
  process will be delayed until a much lower tank water temperature is reached, which improves
  the efficiency of the heating process. To ensure sufficient hot water, select either “Comfort”
  in this setting or “Standard” in the “5. DHW capacity” setting.
  It is a function for Heating + Tank operation.

 24. External meter   Initial setting : [ Heat-cool meter : No ]   System setup   12:00am,Mon
   [ Tank meter : No ] *only available when
   Pump ﬂowrate
   Heat-cool meter select Yes
   [ Elec. meter HP : No ]   DHW defrost
   [ Elec. meter 1 (PV meter) : No ]   Heating control
   [ Elec. meter 2 (Total building) : No ]
   External meter
   [ Elec. meter 3 (Reserve) : No ]
   Select   Confirm
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

 25. Electrical anode   Initial setting: No   System setup   12:00am,Mon
   Pump flowrate
When Electrical anode set to YES, anode will be turned on.   DHW defrost
When Electrical anode set to NO, anode will not be turned on.   Heating control
   Electrical anode
   Select   Confirm

   122


--- Page 123 ---
12.4.3.4   Operation Setup

Heat

  26. Water temp. for heating ON   Initial setting: compensation curve   55°C
   Decide temperature
 Set target water temperature to operate heating operation.   Hot water   of 4 points as shown
 Compensation curve: Target water temperature change in conjunction with   temperature   in diagram
   outdoor ambient temperature change.
 Direct: Set direct circulation water temperature.   35°C

 In 2 zone system, zone 1 and zone 2 water temperature can be set separately.   Outdoor
   -5°C   15°C   temperature
   compensation curve

  27. Outdoor temp. for heating OFF   Initial setting: 24°C   ON

 Set outdoor temp to stop heating.
 Setting range is 5°C ~ 35°C   OFF
   24°C

  28. ΔT for heating ON   Initial setting: 5°C   Out

 Set temp difference between out temp & return temp of circulating water of
 Heating operation.
 When temp gap is enlarged, it is energy saving but less comfort. When the   Return
 gap gets smaller, energy saving effect gets worse but it is more comfortable.
   Out — Return = 1°C ~ 15°C
 Setting range is 1°C ~ 15°C

  29. Heater ON/OFF   *Only available when Back-up heater function is enabled.   ON

  a. Outdoor temp. for heater ON   Initial setting: 0°C
   OFF
 Set outdoor temp when back-up heater starts to operate.
 Setting range is -20°C ~ 15°C   0°C
 User shall set whether to use or not to use heater.

  b. Heater ON delay time   Initial setting: 30 minutes   Heater ON
   Compressor
 Set delay time from compressor ON for heater to turn ON if not achieve water   ON
 set temperature.   0 : 30
 Setting range is 10 minutes ~ 60 minutes

  c. Heater ON: ΔT of target Temp   Initial setting: -4°C
   Water
 Set water temperature for heater to turn on at heat mode.   Set
 Setting range is -10°C ~ -2°C   Temp.   -2°C
   Heater OFF

  d. Heater OFF: ΔT of target Temp   Initial setting: -2°C
   -4°C
   Heater ON
 Set water temperature for heater to turn off at heat mode.
 Setting range is -8°C ~ 0°C

   123


--- Page 124 ---
Cool

  30. Water temp. for cooling ON   Initial setting: compensation curve
   20°C
 Set target water temperature to operate cooling operation.
 Compensation curve: Target water temperature change in conjunction with
 outdoor ambient temperature change.
 Direct: Set direct circulation water temperature.
   5°C
 In 2 zone system, zone 1 and zone 2 water temperature can be set separately.
   20°C   30°C

   compensation curve

  31. ΔT for cooling ON   Initial setting: 5°C   Out

 Set temp difference between out temp & return temp of circulating water of
 Cooling operation.
 When temp gap is enlarged, it is energy saving but less comfort. When the   Return
 gap gets smaller, energy saving effect gets worse but it is more comfortable.   Return — Out = 1°C ~ 15°C
 Setting range is 1°C ~ 15°C

Auto

  32. Outdoor temp. for (Heat to Cool)   Initial setting: 15°C   Heat   Outdoor temp. rising

 Set outdoor temp that switches from heating to cooling by Auto setting.
 Setting range is 5°C ~ 25°C
   Cool
 Timing of judgement is every 1 hour
   15°C

  33. Outdoor temp. for (Cool to Heat)   Initial setting: 10°C   Heat   Outdoor temp. dropping

 Set outdoor temp that switches from Cooling to Heating by Auto setting.
 Setting range is 5°C ~ 25°C
   Cool
 Timing of judgement is every 1 hour
   10°C

   124


--- Page 125 ---
Tank

  34. Floor operation time (max.)   Initial setting: 8h

Set max operating hours of heating.   Heat
When max operation time is shortened, it can boil the tank more frequently.   30min ~ 10h

It is a function for Heating + Tank operation.   Tank

  35. Tank heat up time (max.)   Initial setting: 60min
   Heat
Set max boiling hours of tank.
When max boiling hours are shortened, it immediately returns to Heating
operation, but it may not fully boil the tank.
   Tank

   5min ~ 4h

  36. Tank re-heat temp.   Initial setting: -8°C

Set temp to perform reboil of tank water.
(When boiled by heat pump only, (51°C – Tank re-heat temp) shall become
max temp.)
   -12°C ~ -2°C
Setting range is -12°C ~ -2°C

  37. Sterilization   Initial setting: 65°C 10min
   2
Set timer to perform sterilization.
1 Set operating day & time. (Weekly timer format)
2 Sterilization temp (55~75°C   If use back-up heater, it is 65°C)
3 Operation time (Time to run sterilization when it reached setting temp   1   3
  5min ~ 60min)
User shall set whether to use or not to use sterilization mode.

   125


--- Page 126 ---
12.4.3.5   Service Setup

  38. Pump maximum speed   Initial setting: Depend on model   Service setup   12:00am,Mon
   Flow rate   Max. Duty   Operation
 Normally setting is not necessary.
 Please adjust when need to reduce the pump sound etc.
 Besides that, it has Air Purge function.   88:8 L/min   0xCE   Air Purge

 When *Pump flow setting is Max. Duty, this duty set is the fix pump duty run
 during room side operation.   Select

  39. Pump down   Service setup   12:00am,Mon   Service setup   1212:00am,Mon
   Pump down operation
   Pump down:   Pump down:   in progress!
 Operate pump down operation
   ON   ON

   OFF
   Conﬁrm   Conﬁrm

   45°C
  40. Dry concrete
   40°C   40°C
   35°C   35°C
 Operate concrete curing operation.
 Select Edit, set temp for every stage (1~99 1 is for 1 day).   30°C
 Setting range is 25~55°C

 When it is turned ON, dry concrete starts.
   1   2   3   4   5   6
 When it is 2 zone, it dries both zones.   Stage

  41. Service contact   Service setup   12:00am,Mon   Contact-1: Bryan Adams
   Service contact:   ABC/ abc   0-9/ Other
 Able to set name & tel no. of contact
   Contact 1   ABCDEFGHIJKLMNOPQR
 person when there is breakdown
 etc. or client has trouble. (2 items)   Contact 2   STUVWXYZ   abcdefghi
   jklmnopqrstuvwxyz
   Select   Conﬁrm   Select   Enter

12.4.3.6   Remote Control Setup

  42. RC selection   Initial setting: Single   RC selection   12:00am,Mon

 Set to “Single” when only one remote controller is installed.   Single
 Set to “Dual” when two remote controllers are installed.
   Dual

   Select   Conﬁrm

   126


--- Page 127 ---
12.5 Service and Maintenance   12.5.2 Custom Menu

 If forget Password and cannot operate remote controller   Setting method of Custom menu

Press   for 5 sec.   Custom menu   12:00am,Mon
Password unlock screen appears, press Confirm and it shall
reset.   Cool mode
Password will become 0000. Please reset it again.   Back-up heater
(NOTE) Only display when it is locked by password.   Reset energy monitor
   Reset operation history
12.5.1 Maintenance Menu   Smart DHW
   Select   Confirm

 Setting method of Maintenance menu   Please press   for 10 sec.
   Items that can be set
 Maintenance menu   12:00am,Mon   Cool mode (Set With/Without Cooling function) Default is
 Actuator check   without
   (NOTE) As with/without Cool mode may affect electricity
 Test mode   application, please be careful and do not simply
 Sensor setup   change it.
   In Cool mode, please be careful if piping is not
 Reset password
   insulated properly, dew may form on pipe and
   Select   Confirm   water may drip on the floor and damage the floor.
   Back-up heater (Use/Do not use Back-up heater)
Press   for 5 sec.   (Optional)
   Default is without
Items that can be set
   (NOTE) It is different from to use/not to use Back-up
   Actuator check (Manual ON/OFF all functional parts)   heater set by client. When this setting is used,
   (NOTE) As there is no protection action, please be careful   heater power on due to protection against frost
   not to cause any error when operating each part   will be disabled. (Please use this setting when
   (do not turn on pump when there is no water etc.)   it is required by utility company.)
   Test mode (Test run)   By using this setting, it cannot defrost due to low
   Normally it is not used.   Heating’s setting temp and operation may stop
   (H75)
   Sensor setup (offset gap of detected temp of each sensor   Please set under the responsibility of installer.
   within -2~2°C range)   When it stops frequently, it may be due to
   (NOTE) Please use only when sensor is deviated.   insufficient circulation flow rate, setting temp of
   It affects temperature control.   heating is too low etc.
   Reset password (Reset password)   Reset energy monitor (delete memory of Energy monitor)
   Please use when moving house and handover the unit.
   Reset operation history (delete memory of operation
   history)
   Please use when moving house and handover the unit.
   Smart DHW (Set Smart DHW mode Parameter)
   a) Start time: Tank reboil at lower ON Temp. onward.
   b) Stop time: Tank reboil at normal ON Temp. onward.
   c) ON Temp.: Tank Reboil Temp when Smart DHW start.

   127


--- Page 128 ---
12.5.3 Check Water Pressure from Remote Controller

 1. Press   SW and scroll to “System check”.
 2. Press   and scroll to “System information”.
 3. Press   and search for “Water pressure”.

   Non [Main Menu] screen

   Main menu   12:00am,Mon
   Function setup
   System check
   Personal setup
   Service contact
   Select   Conﬁrm

   System check   12:00am,Mon
   Energy monitor
   System information
   Error history
   Compressor
   Select   Conﬁrm

   System check   12:00am,Mon
   Energy monitor
   System information
   Error history
   Compressor
   Select   Conﬁrm

   System information   12:00am,Mon
   1. Inlet   :   25°C
   2. Outlet   :   20°C
   3. Zone 1   :   25°C
   4. Zone 2   :   20°C
   Page   Conﬁrm

Screens
shown are
for illustration
purposes only.
   System information   12:00am,Mon
   9. COMP frequency   : 95Hz
   10. Pump ﬂowrate   :   11.7 L/min
   11. Water pressure   : 1.51 bar

   Page   Conﬁrm

   128


--- Page 129 ---
13. Installation and Servicing Heat Pump using R32
13.1 About R32 Refrigerant
For heat pump refrigerants such as R410A, the refrigerants were collected back in order to prevent their air
dissipation, to curbe the global warming impact, in case they were released into the atmosphere. In the “4th
Environmental Basic Plan”, 80% reduction of greenhouse gas emissions by 2050 is required, and due to this
requirement, further reduction in the emission of high greenhouse effect gas, such as CFCs, is required. Therefore,
the conversion of heat pump refrigerant into the ones who has smaller greenhouse effect, even if it is dissipated into
the atmosphere, became our responsibility.

Nevertheless, in case of heat pump refrigerant, it would be the best if there is a refrigerant which has smaller impact
on global warming, but ensures good energy efficiency and performance, and is safe; however, there is no such
refrigerant which satisfies all these conditions. As a result, we have been considering the practical usage, within the
safety frame-work, of R32 refrigerant which has short lifetime in the atmosphere, and has smaller effect of global
warming, but is slightly flammable.

In 2004, due to the revision of heat pump safety standards by the International Electro-safety Commission (IEC), the
safety standards of heat pump using slightly flammable refrigerant was issued. In 2010, the regulations of American
Society of Heating, Refrigerating and Air-Conditioning Engineers in the United States (ANSI/ASHRAE34) was issued
adopting the grades for refrigerants which are difficult to inflame due to their slow burning rates, and as a result have
smaller damages in cases of fire. The burning rate of R32 is lower by 10cm / per second, and safety standardization
for various usage is now being processed.

13.2 Characteristics of R32 Refrigerant
1. Chemical Characteristics
R32 is one of the refrigerants used in R410A, has almost no toxicity, and chemically stable compound formed by
hydrogen, carbon and fluorine.

R32 has short lifetime of 4 to 9 years in case of being released into the atmosphere; therefore, it has smaller
greenhouse gas effect but has slight inflammability because of the large proportion of hydrogen.

Chemical Characteristic Table of R32, R410A and R22.

   R32   R410A   R22
   Chemical Formula   CH2F2   CH2F2 / CHF2CF3   CHCLF2
   Composition   R32 / R125A
   Single Composition   Single Composition
   (mixture ratio wt.%)   (50 / 50 wt.%)
   Boiling Point (°C)   -51.7   -51.5   -40.8
   Pressure (physical) *1   3.14   3.07   1.94
   Capacity (physical) *2   160   141   100
   COP (physical) *3   95   91   100
 Ozone Depletion Potential (ODP)   0   0   0.055
   Global Warming Potential
   675   2090   1810
   (GWP) *4
   Slightly Inflammable
   Inflammability *5   Non-inflammable (A1)   Non-inflammable (A1)
   (A2L)
   Toxicity   None   None   None

*1：Physical property of temperature condition 50°C
*2：Relative value of temperature condition 0/50°C, providing R22=100
*3：Te/Tc/SC/SH=5/50/3/0°C
*4：GWP=Global Warming Potential, each figure is based on “4th IPCC4 Report”
*5：Based on ANSI / ASHRAE std. 34-2010

   129


--- Page 130 ---
2. Characteristic of Pressure
As shown in Table 2, R32 does not have much difference in vapor pressure at the same refrigerant temperature
comparing to R410A, but comparing to R22, it is higher at 1.6 times more. Thus, the same as in case of R410A, it is
necessary to do installation and service using high-pressure tools and components.

Table 2. Saturated vapor pressure comparison table
   (Unit: MPa)

   Refrigerant
   Temperature
   R32   R410A   R22
   -20   0.30   0.30   0.14
   0   0.71   0.70   0.40
   20   1.37   1.35   0.81
   40   2.38   2.32   1.43
   60   3.84   3.73   2.33
   65   4.29   4.17   2.60

Reference： Thermal properties table of Japan Society of Refrigerating and Air Conditioning Engineers (60, 65°C)
NIST REFPROP V8.0 (-20 ~ 40°C)

   130


--- Page 131 ---
13.3 Refrigerant piping installation • Tools used in services
13.3.1 Required Tools
R32 refrigerant heat pump use the common parts as R410A heat pump for two-way valves and three-way valves
(diameters of service ports); thus, they maintain commonality in the maintenance of the compressive strength, the
size of pipe flaring, and the size of flare nuts as R410A. Therefore, for refrigerant pipe installation and services, you
can use tools for R410A.

However, mixing of refrigerants is not allowed, so that you have to separate the cylinders for the recovery of
refrigerants.

Tools used for installation • relocation • replacement of heat pump units

   Works   R32   R410A   R22
   Flaring   Flare tools for R410A (clutch type)   Flare tools for R22 (clutch type)
   Torque wrench (diameter 1/4 3/8)
   Connection of pipes
   Torque wrench (diameter 1/2 5/8) *1   Toque wrench (diameter 1/2 5/8)
  Manifold gauge charging hose   R32 & R410A Common (As at November 2013)   R22 Only
   Air purging   Vacuum pump + Reducer / expander   Vacuum pump
   Gas leakage test   Detection liquid or soup water, HFC detector

*1. Nut diameters of 1/2 5/8, the size of torque wrench common with R410A
For other installation, you can use general tools such as screw drivers (+, -), metal saws, electric drills, long-nose
pliers, hole core drills (ø70 or ø65), linen tape, levels, temperature gauges, clamp meters, electric knives, nippers,
pipe cutters, reamers or scrapers, spring benders, (diameters 1/4 3/8 1/2 5/8), monkey wrenches, fixing wrenches
(17 or 12 mm), feeler gauges, hexagon wrenches (4 mm), testers, megohm testers, etc.

Tools used for services

   Works   R32   R410A   R22
   Insertion of refrigerant   Digital scale for refrigerant charging, refrigerant cylinders, cylinder adopters and packing *a
   Recovery of refrigerant   Refrigerant recovery devices, refrigerant cylinders, manifold gauges, charging hoses *b

*a. Use cylinder for each refrigerant, cylinder adopter and packing.
*b. Use refrigerant recovery cylinder separately for each refrigerant (no mixture of refrigerant allowed). Please be
aware that there are some refrigerant collection devices which do not have self-certification.

13.3.2 Tools for R32 (common with R410A)
1. Flare gauges   2. Flare tools (clutch type)
Use flare gauges when you perform flaring with flare   Flare tools have larger holes of clump bars in order
tools (crutch type). Flare gauges are used to set the   to set the pipe end at 0 ~ 0.5 mm, and have stronger
pipe ends at 0.5 ~ 1.5 mm from clump bars of flare   springs inside to ensure solid flaring torques. These
tools.   flare tools can be used commonly for R22.

Flare gauges   Flare tools (clutch type)

   131


--- Page 132 ---
3. Torque wrenches (diameters 1/2, 5/8)   Manifold gauges / Charging hoses
In order to strengthen the compressive strength, the
diameters of wrenches change depending on the flare
nut sizes.

Torque wrenches

   Differences in charging hoses

Differences in torque wrenches   R32
   R22
   (common R410A)
   R32   Normal
   R22   5.1 MPa   3.4 MPa
   (common R410A)   operation
   Pressure   (52 kgf / cm2)   (35 kgf / cm2)
   pressure
   1/2   26 mm × 55 N•m   24 mm × 55 N•m   Resistance
 (diameter × torque)   (550 kgf•cm)   (550 kgf•cm)   Burst   27.4 MPa   17.2 MPa
   pressure   (280 kgf / cm2)   (175 kgf / cm2)
   5/8   29 mm × 65 N•m   27 mm × 65 N•m
   HNBR rubber
 (diameter × torque)   (650 kgf•cm)   (650 kgf•cm)
   Material   Internal nylon   NBR rubber
   coating
4. Manifold gauges
R22 gauges cannot be used because of the high   6. Vacuum pump and Vacuum pump adopter
pressures.   When using a vacuum pump, it is necessary to set a
   solenoid valve in order to prevent backflow of vacuum
Each port of manifold has different shapes in order   pump oil into the charge hoses, and use a vacuum
to prevent inserting wrong refrigerant.   pump with oil backflow prevention function, or use the
*However, the port shape for R410A and R32 is the   vacuum pump with vacuum pump adopter.
same; therefore, attention need to be paid not to insert   If vacuum pump oil（mineral oil-based）mixes with
wrong refrigerant.   R410A (R32), it may cause damage to the machine.

Differences in high/low pressure gauges   Vacuum pump

   R32
   R22
   (common R410A)
 High pressure   -0.1 ~ 5.3 MPa
   -76 cmHg ~ 35 kgf / cm2
 gauges (red) -76 cmHg ~ 53 kgf / cm2
 Low pressure   -0.1 ~ 3.8 MPa
   -76 cmHg ~ 17 kgf / cm2
 gauges (blue) -76 cmHg ~ 38 kgf / cm2

Difference in manifold port sizes

   R32
   R22
   (common R410A)   Vacuum pump adopter
  Port sizes   1/2 UNF20   7/16 UNF20

5. Charging hoses
The pressure resistance of charge hoses is increased.
At the same time, the material is changed to HFC
resistant, and the size of each manifold adopter is
changed, as the port size of manifold gauge itself.
Further, some hoses are with anti-gas pressure
backflow valves placed near the adopters. (hoses with
the valves recommended)

   132


--- Page 133 ---
7. HFC refrigerant_Electric gas leakage tester   9. Refrigerant cylinders
R32 refrigerant is often used for other mixed   Refrigerant cylinders for R410A are painted in pink,
refrigerant (R410A, R404A, R407C etc.). Therefore,   and the ones for R32 are painted in other colors that
the usage of existing HFC detectors is possible, but in   might subject to change according to the international
order to detect more accurately, we recommend to   standards. R32 is a single refrigerant, so that both
use detectors specially set and adjusted for R32   liquid and gas insertion are possible. Additional
detection.   charging is also possible.
   (R410A is a mixed refrigerant, so only liquid insertion
HFC refrigerant_Electric gas leakage tester   is possible)

   Refrigerant cylinders

8. Digital scale for refrigerant charging   10. Connection ports of refrigerant cylinders and
R32 and R410A have high pressure level and their   packing
evaporation speed is high.   Charging ports which fit to the charging hose
Thus, if you recover the refrigerant by cylinder   connection port size (1/2 UNF20) is needed. At the
charging method, the refrigerant evaporates within the   same time, the packing has to be of HFC resistant
weighing scale glass, which makes reading the scale   materials.
difficult, rather than liquidating the refrigerant into the
cylinder. (Charging cylinders for R22 have different   Connection ports and packing
pressure resistance, scale, connection port size;
therefore, they are not usable) At the same time, the
digital scale for refrigerant charging is strengthened by
receiving the weight of the refrigerant cylinders with
four pillars at the corners. The connection ports of
charging hoses have two separate ports for R22 (7/16
UNF20) and R32/R410A (1/2 UNF20) therefore, they
can be used for the insertion of the existing
refrigerants.

Digital scale for refrigerant charging

   133


--- Page 134 ---
11. Tools used for refrigerant piping installations and services

   Tools for R410A   Common with R32   Possibility of usage for R22
   1.   Pipe cutters, reamers or scrapers   ○   ○
   2.   Flare tools (clutch type)   ○   ○
   3.   Torque wrench (1/4, 3/8)   ○   ○
   4.   Torque wrench (1/2, 5/8)   ○   ×
   5.   Manifold gauges・charging hoses   ○   ×
   6.   Vacuum pumps, vacuum pump adopters   ○ Connection   ○ Connection
   5/16   1/4
   7.   Electric gas leakage testers for HFC *1   ○   △

   8.   Digital scale for refrigerant charging   ○   ○
   9.   HCF recovery devices (connection port 5/16) *2   ○ Connection   ○ Connection
   5/16   1/4
  10.   Refrigerant cylinders (pressure resistant: FC3)   Same specs ×   ×
   Other (colors that might subject to
  11.   Refrigerant cylinders (pink)   change according to the   ×
   international standards).
  12.   Refrigerant cylinder connection ports and packing   ○   ×
  13.   Allen wrench (4 mm) Electric knives   ○   ○
   *1   Those testers only for HCFC22 (R22), but not for HCF32 (R32) and HCF410A (R410A) cannot be for common use.
   *2   Recovery devices which are self-certified for each HCF type can be used.
   [Knowledge for the common usage of tools for R410A & R32]
      R410A and R32 machines use different compressor oils.
      If unregulated compressor oil gets mixed into, it may cause damage to the machine function.
      Careful pump down will ensure the recovery of compressor oil, and it will minimize the remaining amount of the oil in the manifold
   gauge and charging hose.
      If you only perform the recovery of refrigerant and not be able to perform pump down, you have to dispose the compressor oil in
   the charging hose.
   [Precaution of repairing refrigerant cycle]
      In the brazing, open 2-way and 3-way valves, and make sure the refrigerant is completely recovered back and not remaining the
   system.
      When repairing outside, make sure no refrigerant is in the air, ensure good air flow, and perform the brazing.

   [Inserting wrong refrigerant]
      It may cause “not cooling” and “not heating” customer claims because each component (expansion valve, compressor, PCB) of the
   refrigeration cycle is specially adjusted for R32.
      At the same time, it is not subject to product warranty, if wrong refrigerant was inserted into the system.

   134


--- Page 135 ---
13.4 New installation, Relocation, Repairing of Refrigerant Cycle System The
   Procedures

   New
   Relocation   Repairing refrigerant cycle
   Installation

   Indoor / outdoor units and piping

   Pump down

   Refrigerant recovery

   • Displacing pipes and wires, and displacing indoor / outdoor units

   Prevention of impurity   • Dismantling indoor / outdoor units
   • Repairing by brazing

   Removal

   ・Indoor / outdoor units installation and piping, and wiring

   Evacuation (Air purging) new installation and relocation for at or
   more than 15 minutes, re-charging at or more than 60 minutes

   Insertion of refrigerant

   Leakage checking

   Operation testing

   135


--- Page 136 ---
13.5 Piping installation of R32
13.5.1 Pipe materials used and flaring
Copper pipes are used for refrigerant piping. Pipes   Pipe thickness
which comply with JIS Regulations need to be used.
Room heat pump which use R410A and R32 have   O and OL materials   Thickness (mm)
higher pressure; thus, using pipes which comply with   Diameter
   Diameter
   R410A   R32   R22
the Regulations is important.   (mm)
The pipe thickness is regulated by revised JIS B 8607   1/4   6.35   0.80
“Flaring and brazing fittings for refrigerant” and the   3/8   9.52   0.80
pipe thickness for R410A, R32 is shown in the table.   1/2   12.70   0.80
   5/8   15.88   1.00

Caution
 For connection piping, use copper phosphate seamless pipes (1220T) as regulated in “JIS H 3300” and the pipe
   thickness is 0.8 mm.
 In the market, there are some pipes of 0.7 mm thickness, but do not use these pipes (0.8 mm thickness has to be
   strictly followed).
 It is recommended to use pipes whose adhesion amount of oil is at or less than 40 mg / 10 m.
   At the same time, do not use pipes with dent, de-shape, and color change (especially inside).

13.5.2 Processing and connection of pipes
For refrigerant pipe installation, be aware of moisture and dirt do not get into the pipes, and make sure of no
refrigerant leakage.
◎ The procedure of flaring and precautions
a) Cutting of pipes：use pipe cutter and cut the pipe slowly not to de-shape the pipe.
b) Removal of burrs on the edge of pipe (reamer or scraper)
   If the condition of pipe edge after the deburring is no good or if burrs attaches on the flaring, it may cause
   refrigerant leakage. Turn the pipe end down and perform deburring carefully.
c) Insert the flare nut (use the nut which is a part of the CZ parts)
d) Flaring
   Ensure the cleanliness of clump bar and pipe, and perform flaring carefully.
   Use the existing flare tools or flare tools for R410A. Be aware that the sizes and dimensions of flaring is different
   in each flaring tool. If you use the existing flaring tools, use flaring gauge to measure the length of the flaring part.

   Dimensions “a” (mm)   Dimensions “a” (mm)
   Nut outer diameter (mm)
   R22   R410A/R32
   Piping
   Flare tools   Flare tools
   size   Flare tools   Flare tools   R410A
   for R410A   for R410A
   a

   (mm)   R22
   Wing nut   Wing nut
   Clutch type   Clutch type   Clutch type   Clutch type   R32
   type   type
 6.35 (1/4")   0.5 ~ 1.0   1.0 ~ 1.5   0 ~ 0.5   1.0 ~ 1.5   1.5 ~ 2.0   0 ~ 0.5   17   17
 9.52 (3/8")   0.5 ~ 1.0   1.0 ~ 1.5   0 ~ 0.5   1.0 ~ 1.5   1.5 ~ 2.0   0 ~ 0.5   22   22
12.70 (1/2")   0.5 ~ 1.0   1.5 ~ 2.0   0 ~ 0.5   1.0 ~ 1.5   2.0 ~ 2.5   0 ~ 0.5   Bar   24   26
15.88 (5/8")   0.5 ~ 1.0   1.5 ~ 2.0   0 ~ 0.5   1.0 ~ 1.5   2.0 ~ 2.5   0 ~ 0.5   27   29

   136


--- Page 137 ---
13.6 Installation and Service
13.6.1 Air purge and gas leak test for new installation (using new refrigerant pipes) using
   vacuum pump
(From the point of view of global environment protection, do not release CFCs into the atmosphere during installation
work)
1. Connect the charging hose of manifold gauge to the service port of 3-way valve (pushing insect pin).
2. Fully open the handle Lo of manifold gauge and operate vacuum pump.
   (If the needle of the low-pressure gauge reaches the vacuum immediately, check 1 procedure again)
3. Perform vacuuming 15 minutes or more, and make sure low pressure gauge reaches to －0.1 MPa (-76cmHg).
   When the vacuuming completes, fully open the handle Lo of manifold gauge and stop the operation of vacuum
   pump, and leave it for 1 ~ 2 minutes. Then, remove the connection side of the charging hose of vacuum pump
   adopter after checking the needle of manifold gauge does not turn back.
4. Open the stem of 2-way valve to 90° in anti-clock wise, and close the 2-way valve after 10 seconds, and perform
   gas leakage test.
5. Remove the charge hose from the service port of 3-way valve, and open the stems of 2-way and 3-way valves
   (open the valves to anti-clock wise carefully, do not use full strength to open)
6. Tighten the service port cap with torque wrench 18 N•m (1.8 kgf•m)
   Tighten the caps of 2-way and 3-way valves with torque wrench 18 N•m (1.8kg f•m)
7. After the tightening of each cap, check gas leakage around the cap.

   Liquid side
   Gas side
   2-way valve
   Hex wrench

   Valve stem caps

   3-way valve
   Low-pressure   High-pressure
   gauge   gauge
   Service port   Manifold gauge
   valve core
   Service
   port cap   Hi Handle
   -0.1 MPa
   (-76cmHg)
   Charging hoses
   Lo Handle

   Vacuum pump
   adaptor
   Vacuum
   pump

   137


--- Page 138 ---
13.6.2 Process of refrigerant recovery
1. Connect the center charging hose of manifold gauge to the in-let side of recovery device.
2. Connect the valves of the discharge side of recovery device and liquid side of refrigerant cylinder with red hose
   (charging hose).
3. Connect the yellow float switch cable of the recovery device to the refrigerant cylinder.
4. Open the low pressure side valve of manifold gauge.
5. Slightly loosen the charging hose of in-let connecting side of recovery device and perform air purge.
6. Open the liquid valve of refrigerant cylinder and slightly loosen the charging hose in discharging side of recovery
   device, and perform air purge (the recovery cylinder needs slight inside pressure).
7. Insert electric plug of recovery device into electrical outlet (the fan operation starts).
8. Turn the valve 1 and 2 of recovery device to pressure equalization point.
9. After a few seconds, turn back the valve 1 and 2 to the original position.
10. Turn the switch of the recovery device to “ON”. (the compressor operation starts)
11. When the low pressure of manifold gauge is close to “0”, close the low pressure side valve, turn “OFF” the
   recovery device switch.
12. Remove the center charging hose of manifold gauge from the recovery device.

   (Indoor unit)   (Liquid side)   (Outdoor unit)

   Two-way valve
   Close

   (Gas side)

   Three-way valve
   Close
   Lo   Hi

   Vacuum
   Pump

13.6.3 Replacement of heat pump units and evacuation (when re-using the existing pipes)
When replacing the heat pump units, you might use the existing pipes, but it is recommended to perform flaring again.
In case of unit replacement, even if the unit is new refrigerant heat pump, if the refrigerant oil is different, it may
cause problem. Further, when re-using the existing refrigerant pipes, it is recommended to evacuate the pipes as
much as possible, due to the reason that much refrigerant oil may be attached on the surface of the pipes. If the
pipes are used without evacuation, the remaining refrigerant oil may cause under-performance and abnormal
refrigerant cycle caused by non-compatibility of those oils.

13.6.4 Inter-changeability of refrigerant
Do not operate heat pump units inserting wrong (or mixed) refrigerant (R22, R410A, R32). It may cause mal-function
of the units, and at the same time, may cause serious incident such as rupture of the refrigerant cycle.

   138


--- Page 139 ---
13.6.5 Re-insertion of refrigerant in service
When re-insertion is needed, follow the procedures to ensure the insertion of new refrigerant at correct amount.
1. Attach charging hose (blue) to the service port of the outdoor unit.
2. Attach charging hose (red) to the vacuum pump. Fully open the 2-way and 3-way valves or both 3 way valves.
3. Place the refrigerant cylinder on the digital scale for refrigerant charging and connect the charge hose (yellow) to
   the connection port of the vacuum pump and the digital scale. Leave the cylinder valve fully open.
4. Fully open the handles Lo and Hi of the manifold gauge, and switch on the vacuum pump, and then perform
   evacuation for at or more than one hour.
5. Confirm the compound gauge of -0.1 MPa (-76cmHg) and fully open the handles of Lo and Hi, and switch off the
   vacuum pump. Leave it for about 1 ~ 2 minutes and confirm the needle of the compound gauge does not turn
   back.
   Refer to the picture below to follow the procedures below.
6. Remove the charging hose (red) of the manifold gauge from the vacuum pump adopter.
7. After adjusting the digital scale to zero, open the cylinder valve and the valve Lo of the manifold gauge, and
   insert the refrigerant.
8. If it is not possible to insert the refrigerant at regulated amount at once, operate the cooling mode and gradually
   insert the refrigerant (recommended amount approx. 150 g / 1 time)
   *Do not insert much refrigerant at once.
9. Close the open/close valve and insert the refrigerant in the charging hose to the outdoor unit.
   *Perform this procedure during operating cooling operation. Close the stem of the two-way valve, and when the
   pressure of the manifold gauge becomes zero (0), quickly remove the charging hose (blue). Immediately open
   the 2-way valve, and stop the cooling operation.
10. Final checking • • • Confirm the 2-way and 3-way valves are fully open.
   Attach the caps of the service port and control valve, and then check the gas leakage around the caps.

   (Indoor unit)   (Liquid side)   (Outdoor unit)
   Open

   Two-way
   valve

   (Gas side)

 Vacuum pump
 charging hose   Open

   Three-way
   valve
   Lo   Hi
   Vacuum
   pump
   adaptor

   Vacuum
   pump

   Electronic scale

   139


--- Page 140 ---
13.7 Repairing of refrigerant cycle / Brazing point
13.7.1 Preparation for repairing of refrigerant cycle / brazing
Brazing which is a technique needed for repairing refrigerant cycle requires advanced technique and experience, and
this brazing procedure can only be performed by the workers who completed “Gas Welding Skill Training” regulated
by the Occupational Safety and Health Act, and went through the training programs of refrigerant operations.
Dismantling and re-connecting (assembling) refrigerant system requires working space, and the space has to ensure
good air flow and fire prevention (water bucket and fire extinguisher). Moreover, the worker has to ensure the
wearing of goggles, grabs, safety shoes, and long sleeve shirts, and be aware of work safety and attempt to prevent
secondary defect (quality assurance of products). For brazing the indoor / outdoor unit structural components (heat
exchangers, compressors, expansion valves, four-way valve blocks), after the recovery of all refrigerant, confirm that
no refrigerant remains in the system, and fully open the 2-way and 3-way valves. When the brazing is conducted
outside, check and make sure no refrigerant is contained in the air (be careful with vaporized refrigerant).
Furthermore, protect the compressor terminal with metal plates, and heat but use wet clothes to cool down (releasing
the heat) the expansion valves, and four way valves (prevent destruction of parts). In brazing, it is important to pour
the brazing material without melting the base metal based on capillary action principle. In case of holes and oxidizing
caused by overheating, do not perform re-brazing or alteration but replace the parts.

13.7.2 Adjustment of vacuum pump pressure
1. Cylinder with adjustment handle
   1. Check and confirm the adjustment handle of the 1st pressure adjuster is loosen (anticlockwise). If cylinder
   valve is opened when the 1st gauge pressure adjust handle is closed, the 2nd gauge might get broken.

   The primary gauge   Main valve
   (High pressure)   Adjustment
   Main valve   handle

   The secondary gauge
   (Low pressure) Adjustment
   handle   The secondary gauge
   (Low pressure)

   Oxygen regulator
   Propane regulator

   2. Open the cylinder valve, and check the remaining amount with the first t side pressure gauge.
   3. Check the pressure of 2nd gauge and turn the adjustment handle to clock-wise direction to adjust the
   pressure.
   ◎ Oxygen 2nd side gauge pressure・・・・・・・・・・0.5 MPa (5.0 kgf / cm2)
   ◎ Propane 2nd side gauge pressure・・・・・・・0.05 MPa (0.5 kgf / cm2)

   140


--- Page 141 ---
2. Cylinder without adjustment valve
   2nd side gauge pressure is adjusted by the adjuster.
   Check the both side valves of the torch and open the cylinder valve to check the remaining refrigerant in the
   cylinder.
   Caution: Do not attach oil component on the connection port of the adjuster.
   Especially, use an oxygen cylinder adjuster which is no oil substance type. Do not dismantle or repair the
   adjuster and pressure gauge.

   Main valve   Fuel gauge
   Fuel gauge   0~25 MPa
   0~3 MPa   (0~250 kgf / cm²)
   (0~30 kgf / cm²)

   Main valve
   Regulator

   Regulator   Oxygen tank
   (Black)

   Propane tank   Black hose
   (Gray)
   Orange hose

13.7.3 Checking of gas provision
Checking there is no fire around the torch, and then confirm the provision of gas.
1. Slightly open the “propane valve” of the torch, and make sure the gas comes out from the torch crater and then
   close the “propane valve”.
2. Slightly open the “oxygen valve” of the torch and make sure the gas comes out from the torch crater and then
   close the “oxygen valve”.
   Check there is no gas leakage around the hose connection.

13.7.4 Adjustment of flame
1. Slightly open the “propane valve” of the torch and lit with spark lighter.
   This moment, the flame is only by propane and the color is red.
2. Gradually open the “oxygen valve” of the torch to mix oxygen, and adjust the amount of propane and oxygen with
   the valve to make the flame suitable for brazing work.
   If the white core flame splits into two, the torch crater might be clogged. In this case, remove the crater from the
   torch and check.

   Oxygen (Black hose)

   Oxygen valve

   Propane valve   Propane (Orange hose)
   Nozzle

   141


--- Page 142 ---
13.7.5 Types of flame
Types of flame change based on the proportion of propane and oxygen.
[Neutral Flame]
Perform brazing with this flame
(This is a flame when oxygen and propane are mixed at proper proportion, and has lesser effect on the brazed
metals)

   White core flame

   10 ~ 15 mm
   Outer flame (Light orange color)

[Carbide Flame]
When propane is excessive, the flame has white color flame in between the white core flame and outer flame.
(This is due to the lack of oxygen and the proportion of unburned propane is excessive.
The black carbon created during the brazing work may contaminate the surface of the brazed metal).

   White core flame

   Pale white
   Outer flame (Blue color)

[Oxidizing Flame]
Oxygen is more compared to the neutral flame. Although the flame size is small, this has the highest flame heat.
However, due to the excessive oxygen contained in the flame, the brazing point gets oxidized. (This flame may cause
holes, due to the high heat. The pipe may get melt）

   White core flame

   Outer flame (Blue orange color)

13.7.6 Closing the flame
[In case of short break]
1. Close the “propane valve” of the torch.
2. Close the “oxygen valve” of the torch.
[In case of finishing work]
1. As above, close the flame following the procedure of “In case of short break”.
2. Completely close the valves of oxygen and propane cylinders.
3. Release the remaining gas inside the hose by opening the “oxygen valve” and “propane valve” of the torch.
Confirm the 1st and 2nd side gauge pressures of “oxygen” and “propane” cylinder pressure adopter are “zero”.

   142


--- Page 143 ---
13.7.7 Selection of brazing material
Use BAg brazing material (silver solder) to increase the welding performance.

   Tensile strength
   JIS   Composition of ingredients (%)   Temperature (°C)   Characteristics
   (Reference)
 Category   Standard   and
   Brazing   Base
   Number   Ag   Cu   Zu   Cd   Ni   P   Solidus Liquidus   Kgf•cm2   applications
   temp   material
   Liquidity is good at
   low temperature,
   49.0   14.5   14.5   17.0   635
   approx. approx.   45.5   it is preferable to
   BAg • 1A   ~   ~   ~   ~   —   —   ~   S20C
   625   635   a small junction of
   51.0   16.5   18.5   19.0   760
   the gap in the
   universal form.
   It has similar
   performance to the
   44.0   14.0   14.0   23.0   620   BAg • 1A, and
   approx. approx.
   BAg • 1   ~   ~   ~   ~   —   —   ~   45.5   S20C   suitable for every
   605   620
   56.0   16.0   18.0   25.0   760   base material
   except the light
   weight metal.
   BAg   It is a brazing
   filler metal in
   34.0   25.0   19.0   17.0   700
   approx. approx.   universal form,
   BAg • 2   ~   ~   ~   ~   —   —   ~   45.5   S20C
   605   700   suitable for a
   36.0   27.0   23.0   19.0   845
   slightly larger gap
   junction.
   It has good
   corrosion
   resistance in
   48.0   14.5   13.5   15.0   2.5   690   35   SS   stainless
   approx. approx.
   BAg • 3   ~   ~   ~   ~   ~   —   ~   ~   ~   steel-based
   630   690
   51.0   16.5   17.5   17.0   3.5   815   70   SUS   brazing, suitable for
   brazing tungsten
   carbide, aluminum
   bronze and copper.
   6.8   690   21   Good liquidity,
   approx. approx.
   BCuP-2   —   remain   —   —   —   ~   ~   ~   Cu   suitable for brazing
   710   785
   7.5   815   24.5   copper tube.
   Suitable for brazing
   4.8   5.8   720   21
   approx. approx.   when the joint
   BCuP-3   ~   remain   —   —   —   ~   ~   ~   Cu
   645   815   spacing is not
   5.2   6.7   815   24.5
  BCuP   constant
   When brazing of
   copper and copper,
   14.5   4.8   705   21
   approx. approx.   it is used without a
   BCuP-5   ~   remain   —   —   —   ~   ~   ~   Cu
   645   800   flux, but not
   15.5   5.3   815   24.5
   possible for brazing
   basic materials

Caution
BCuP (phosphorus copper wax) is easy to react with sulfur, and makes a brittle compound water soluble, and causes
gas leakage. In hot spring areas, use other brazing materials or paint the surface for protection.

13.7.8 Need of flux
Use flux to protect the base materials.
1. Remove impurity and oxide film on the metal base, and improve the flow of the brazing material.
2. Prevent oxidation of the metal surface in brazing.
3. Reduce the surface tension of the brazing material.

13.7.9 Need of nitrogen gas
In order to prevent oxidation in the pipe, perform the brazing operation in nitrogen gas flow.
Flow rate 0.05 m3 / h, or pressure reducing valve at 0.02 MPa (0.2kgf / cm2) below.

   143


--- Page 144 ---
13.7.10 Checking of brazing (insert) points
1. No impurity on the brazing point   Gap 0.025 ~ 0.05 mm
   If dirt or oil is attached on the brazing point, the
   brazing filler metal does not reach to junction, and   Inner diameter ø6.45
   it may cause poor welding.

2. Adequate gap space in the brazing point
   The advantage of capillary current situation is
   used in brazing. If the gap space is too large, this
   phenomenon may not occur and it may cause   Insert diameter 10 ~ 25 mm
   poor welding because brazing filler metal does not
   flow to join the front part.   Outer diameter ø6.35

3. Appropriate size for insertion   Brazing material
   The guideline for pipe insertion dimensions is to   (Runny)
   three times the diameter of the base material, but
   you need to decide the insertion size in
   consideration of the clogging of the brazing
   material. Generally, for thin pipes, you need to   Brazing material
   increase the insert size, and for thick pipe vice   (Hard to flow)
   versa.

   Dryer
4. Brazing material to flow from top to bottom   120°
   Brazing filler metal will easily flow to the
   connecting portion by capillary action.
   Further, by bending the brazing portion of [dryer
   side] of the capillary tube at 15 mm from the tube   Capillary
   top to the angle of about 120°, you can prevent   tube
   the damage of dryer inside and the clogging of
   brazing material caused by the excessive insertion   15 mm   Filter
   of capillary tube.   (Wire mesh)

13.7.11 Brazing and heating
1. Place the flame to a pipe which has more heat
   capacity in order to let the brazing material melt by   Brazing
   the pipe heat. Heat the pipe up to the melting   material
   temperature of the brazing material, but when it is   Burner   Burner
   overheating, assess the temperature by pipe color   Brazing
   material
   in order not to melt the pipe.

The pre-heating is to heat the base material until the melting temperature, and requires certain training to distinguish
the color of the heated base material in order not to melt the material.
The color and temperature of copper tube
 Becoming red color • • • • • • • 480°C
 Dull red • • • • • • • 650°C
 Cherish red • • • • • • • 760°C
 Brightening cherish red • • • • • • • 870°C

   144


--- Page 145 ---
(Reference)
Melting temperature of copper • • • • • • • Approx. 1083°C
Maximum temperature obtained in propane and oxygen • • • • • • • Approx. 1083°C
The important point is to heat the bonding part uniformly within a short period of time until reaching to the brazing
temperature in the following manner.
2. Apply the flame on to the side with better heat transmission. If the pipe thickness is consistent, by heating like
   30% iron and 70% copper, the copper pipe inside reaches to brazing temperature.
   Iron pipes have low heat transmission and only the part the flame is applied get high temperature, and this
   causes oxidization of the pipe. The flow of the brazing filler is affected negatively.

3. Apply the flame on to the side of larger heat
   capacity.
   When brazing a thin tubes such as capillary tube
   and dryer, etc., caution has to be taken to apply
   the flame to the dryer side (thick pipe side), in
   order to prevent burn out by the heat.

4. When brazing the compressor connection pipes
   (suction and discharge), remove the sound
   insulation plate and the fan, and place the
   compressor stand vertically (to prevent the
   leakage of compressor refrigerating machine oil),
   and apply the flame from the compressor body
   side.

13.7.12 Terminologies of brazing
Pin holes → Small holes are generated on the surface of the brazing metal.
Wet temperature → Liquidus temperature at which the brazing material starts flowing out by heating, generally it is
   the liquidus-line temperature.
Blow holes → Hollows made by gas in the brazing material of brazing portion (gas reservoirs).
Pits → As a result of blow holes, small dents generated on the outside surface of welding.
Voids → The blazing material does not reach completely to the brazing part. It cannot be identified from outside.

   145


--- Page 146 ---
14. Operation and Control
14.1 Basic Function
Inverter control, which equipped with a microcomputer in determining the most suitable operating mode as time
passes, automatically adjusts output power for maximum comfort always. In order to achieve the suitable operating
mode, the microcomputer maintains the set temperature by measuring the temperature of the environment and
performing temperature shifting. The compressor at outdoor unit is operating following the frequency instructed by
the microcomputer at indoor unit that judging the condition according to internal water setting temperature and water
outlet temperature.
(For Heater related controls, it is only functional with the installation of CZ-NB3 (optional back-up heater))

14.1.1 Internal Water Setting Temperature
Once the operation starts, control panel setting temperature will be taken as base value for temperature shifting
processes. These shifting processes are depending on the Air-to-Water Heat pump settings and the operation
environment. The final shifted value will be used as internal water setting temperature and it is updated continuously
whenever the electrical power is supplied to the unit.

14.1.2 Heating Operation

14.1.2.1   Thermostat Control
   Compressor is OFF when Water Outlet Temperature – Internal Water Setting Temperature > 2°C for
   continuously 3 minutes.
   Compressor is ON after waiting for 3 minutes, if the Water Outlet Temperature – Water Inlet Temperature
   (temperature at thermostat OFF is triggered) <-3°C.

14.1.2.2   Thermostat Control (Outdoor Ambient Temperature)
Stops provide heating to room side during high outdoor ambient condition.
Control content:
 Heating operation and water pump will turn OFF when outdoor ambient temperature > outdoor thermo off
   temperature + 3°C.
   (Outdoor thermo off set temperature is set by control panel. Thermo off set temperature is between 5°C ~ 35°C)
 Heating operation will resume when Outdoor ambient temperature < Outdoor thermo OFF set temperature + 1°C.

14.1.2.3   Heat Mode Operation
Operation of heat pump provide heating capacity to room side by hot water through heating panel, floor heating or
fan coil unit.
   1. 3 ways valve control:
   o 3 ways valve switch and fix to heating side.
   2. Heat pump operates follow normal heating operation.
   3. Back up heater operate follow normal operation.
   4. 2 ways valve control:
   o 2 ways valve opens.

14.1.2.4   Compressor Maximum Frequency Control During Heating Operation
Purpose:- To ensure that the compressor does not directly operate at the maximum frequency from beginning.
Installer can activate this control by setting on remote control : “Efficiency” under “Heating control” in the Installer
setup menu.

Start condition
When all of the below conditions achieved
    Remote control setting = Efficiency
    It is not test mode
    Compressor run time < 1 hour
    Present water outlet temperature - Water outlet set temperature ≥ -10°C
    Outdoor ambient ≥ -10°C

Under this control, heating operation frequency will be based on heating coefficient calculation.

Compressor maximum Hz = Heat mode zone limit max Hz X Coefficient

   146


--- Page 147 ---
Time from start (minutes)   Below 20 minutes   Below 40 minutes   Below 60 minutes   Above 60 minutes

   Coefficient   0.5   0.5 + (0.5/3)   0.5 + 2*(0.5/3)   1.0

The operating frequency will gradually increase when the capacity is deemed insufficient by referring to dRange
value:-
    dRange = Current water outlet temperature - Water outlet set temperature
   dRange value is checked every 10 minutes.
    If current dRange < previous dRange, the new coefficient value will increase by 0.1.
   Maximum frequency after change is limited by Zone limit maximum Hz.

Stop condition
When any one of below conditions achieved
    Remote control setting = Comfort
    It is test mode
    Compressor run time ≥ 1 hour
    Present water outlet temperature - Water outlet set temperature < -10°C
    Outdoor ambient < -10°C

14.1.3 Cooling Operation

14.1.3.1   Thermostat Control
   Compressor is OFF when Water Outlet Temperature – Internal Water Setting Temperature > -1.5°C for
   continuously 3 minutes.
   Compressor is ON after waiting for 3 minutes, if the Water Outlet Temperature – Water Inlet Temperature
   (temperature at thermostat OFF is triggered) >3°C.

14.1.3.2   Cool Mode Operation
   1. 3 ways valve control:
   o 3 ways valve switch and fix to cooling side.
   2. Heat pump operates follow normal cooling operation.
   3. Room heater DOES NOT operate during cool mode.
   4. 2 ways valve control:
   o 2 ways valve is closed.

14.1.4 Target Water Temperature Setting

14.1.4.1   Target Water Temperature Control of Standard System (Optional PCB not
   connected)
There are 2 types of temperature control selection which are Compensation and Direct.
 Temperature control type selection by installer:
   1 Compensation : Wlo, WHi, ODLo, ODHi can be set at installer menu.
   2 Direct   : Direct Water Temperature Set
 Remote control setting by user:
   1 Compensation : Shift value ±5°C from the compensation curve
   2 Direct   : Direct water temperature set change

*This setting only able to set when room sensor select as Water Temperature.
*Instead of water temperature, user will set target room temperature when room sensor select as Room Thermistor
OR Internal Room Thermostat.

   Target water temperature is calculated as below condition.
   o Target water temperature = A (Base temperature) + B (shift temperature)

   Compensation   Direct
   A (Base Temperature)
   Value from the curve + User shift value set   Direct value from user setting

   147


--- Page 148 ---
o   B (shift temperature) value is depend on the room sensor selection at remote controller as below table:

   B (Shift Temp.)   B shift value depend on the room sensor selection at remocon as table below

   Sensor selection
   Water temperature   B=0
   External Room thermostat   B=0
   Cool Mode:
   B = 0 ; when Zone OFF or Zone Room Thermo OFF
   B = B = 1* (room set temp (R/C) – actual room temp)
   Internal Room thermostat &   Max/Min Regulation of B: (Max = 5 ; Min = -5)
   Room Thermistor
   Heat Mode:
   B = 0 ; when Zone OFF or Zone Room Thermo OFF
   B = follow Heating Room Temperature PI control logic

   Maximum/minimum regulation of Target Water Temperature

   Heating   Cooling
   Max   55°C / 60°C*   20°C
   Min   20°C   5°C

* Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to 55°C

Compensation Type: (Operation under Heat Mode and Cool Mode)
 The set temperature defines the parameters for the ambient (Outdoor temperature) dependent operation of the
   unit. The water temperature is determined automatically depending on the outdoor temperature. Default setting is
   the colder outdoor temperature will result in warmer water and vice versa. The user has the possibility to shift up
   and shift down the target water by remote control setting.
   OD (LO) = Setting Of LOW Outdoor Ambient Temperature.
   OD (HI) = Setting Of HIGH Outdoor Ambient Temperature.
   A   W (LO) = Setting Of Water Temperature at LOW OD Ambient.
   W (HI) = Setting Of Water Temperature at HIGH OD Ambient.

   W (LO)

   W (HI)

   OD (LO)   OD (HI)   Outdoor
   Ambient
   Outdoor ambient is updated every 5 minutes when operation ON.
   Setting water outlet temperature always follow W(LO) or W(HI) whenever is higher if outdoor ambient sensor or
   indoor communication error happen.

However, when powerful mode is requested by remote control during heating mode, the higher value of HLo or Whi
will be used for A calculation.

* There are 2 compensation curves (for heating and cooling). During heating mode, the heating curve is used and
  during cooling mode, the cooling curve is use.

   Compensation curve set shift value:

   Tw

   Tw_Hi

   +5
   Tw_Lo   ±5   Shift value

   -5

   To_Lo   To_Hi   To

   148


--- Page 149 ---
14.1.5 Target Water Temperature at Extension System (Optional PCB is connected)
Target water temperature is calculated as below.
 Heat Mode:
   o Target water temperature setting:
   o Max= 55°C / 60°C* Min= 20°C

* Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to 55°C

   When buffer tank selection is “YES:”
   Target water temperature = Target buffer tank temperature + [2°C]

   When buffer tank selection is “NO”
   o If both zone 1 and zone 2 is active
   Target Water Temperature = Higher zone target water temperature of Zone 1 and Zone 2.
   o If only one zone is active
   Target Water Temperature = Zone target water temperature of active zone.

   Cool mode:
   o Target water temperature setting:
   Max = 20°C Min= 5°C

   When buffer tank selection is “YES”
   o If both zone 1 and zone 2 active
   Target Water Temperature = Lower Zone Target Water Temperature of Zone 1 and Zone 2
   o If only one zone is active
   Target Water Temperature = Zone Target Water Temperature of active zone

   When buffer tank selection is “NO”
   o If both zone 1 and zone 2 active
   Target Water Temperature = Lower Zone Target Water Temperature of Zone 1 and Zone 2
   o If only one zone is active
   Target Water Temperature = Zone Target Water Temperature of active zone

14.1.6 Target Zone Water Temperature Control
Purpose:- To control zone mixing and zone pump according to the zone sensor temperature

14.1.6.1   Target Zone 1 water temperature setting control
   Start condition
   o Heating zone 1 is ON by remote control or Timer or Auto Mode OR
   o Cooling zone 1 is ON by remote control or Timer or Auto Mode.

   Cancel condition
   o Heating zone 1 is OFF by remote control or Timer or Auto mode AND
   o Cooling zone 1 is OFF by remote control or Timer or Auto mode.

   Target Zone 1 water temperature is calculated as below condition.
   o Target Zone 1 water temperature = A (Base temperature) + B (shift temperature)

   Compensation   Direct
   A (Base Temperature)
   Value from the curve + User shift value set   Direct value from user setting

* During heat mode and compensation select, if powerful mode is activated, higher value of WLo or WHi will be use
  as curve value.

   149


--- Page 150 ---
o   B (shift temperature) value is depend on the room sensor selection at remote controller as below table:

   B (Shift Temp.)   B shift value depend on the room sensor selection at remocon as table below

   Sensor selection
   Water temperature   B=0
   External Room thermostat   B=0
   Cool Mode:
   B = 0 ; when Zone OFF or Zone Room Thermo OFF
   B = B = 1* (room set temp (R/C) – actual room temp)
   Internal Room thermostat &   Max/Min Regulation of B: (Max = 5 ; Min = -5)
   Room Thermistor
   Heat Mode:
   B = 0 ; when Zone OFF or Zone Room Thermo OFF
   B = follow Heating Room Temperature PI control logic
   Pool Function Selected   B = Delta value setting from remocon

* B = 0 regardless of which sensor selection, if SHP control bit is enable except Pool function select (maintain Pool
  “B” value)

** Pool function also can be select at Zone 1 when optional PCB is connected and Zone 1 system is select.

   Maximum/minimum regulation of Target Water Temperature.

   Heating   Cooling
   Max   55°C / 60°C*   20°C
   Min   20°C   5°C

* Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to 55°C

   Target Zone 1 Water Temperature (Heat mode) during SG ready control
   o If buffer tank selection is “NO” then following shift is carried out.
    While digital input is “10” or “11” then,
   Final Target Zone 1 water temperature
   = Target Zone 1 water temperature* (SG ready % setting (remote control menu))%
   o If buffer tank selection is “YES”
    No shift of Target Zone 1 Water Temperature. Target Buffer Tank Temperature will change accordingly.
   * Refer to “Buffer tank temperature control”

   Target Zone 1 Water Temperature (Cool mode) during SG ready control
   o Final Target Zone 1 water temperature = Target Zone 1 water temperature + SG Cool Setting

14.1.6.2   Target Zone 2 water temperature setting control
   Start condition
   o Heating zone 2 is ON by remote control or Timer or Auto Mode OR
   o Cooling zone 2 is ON by remote control or Timer or Auto Mode.

   Cancel condition
   o Heating zone 2 is OFF by remote control or Timer or Auto mode AND
   o Cooling zone 2 is OFF by remote control or Timer or Auto mode.

   Target Zone 2 water temperature is calculated as below condition.
   o Target Zone 2 water temperature = A (Base temperature) + B (shift temperature)

   Compensation   Direct
   A (Base Temperature)
   Value from the curve + User shift value set   Direct value from user setting

* During heat mode and compensation select, if powerful mode is activated, higher value of WLo or WHi will be use
  as curve value.

   150


--- Page 151 ---
o   B (shift temperature) value is depend on the room sensor selection at remote controller as below table:

   B (Shift Temp.)   B shift value depend on the room sensor selection at remocon as table below

   Sensor selection
   Water temperature   B=0
   External Room thermostat   B=0
   Cool Mode:
   B = 0 ; when Zone OFF or Zone Room Thermo OFF
   B = B = 1* (room set temp (R/C) – actual room temp)
   Internal Room thermostat &   Max/Min Regulation of B: (Max = 5 ; Min = -5)
   Room Thermistor
   Heat Mode:
   B = 0 ; when Zone OFF or Zone Room Thermo OFF
   B = follow Heating Room Temperature PI control logic
   Pool Function Selected   B = Delta value setting from remocon

* B = 0 regardless of which sensor selection, if SHP control bit is enable except Pool function select (maintain Pool
  “B” value)

** Pool function also can be select at Zone 2 when optional PCB is connected and Zone 2 system is select.

   Maximum/minimum regulation of Target Water Temperature.

   Heating   Cooling
   Max   55°C / 60°C*   20°C
   Min   20°C   5°C

* Between outdoor ambient -10°C and -15°C, the water outlet temperature gradually decreases from 60°C to 55°C

   Target Zone 2 Water Temperature (Heat mode) during SG ready control
   o If buffer tank selection is “NO” then following shift is carried out.
    While digital input is “10” or “11” then,
   Final Target Zone 2 water temperature
   = Target Zone 2 water temperature* (SG ready % setting (remote control menu))%
   o If buffer tank selection is “YES”
    No shift of Target Zone 2 Water Temperature. Target Buffer Tank Temperature will change accordingly.
   * Refer to “Buffer tank temperature control”

   Target Zone 2 Water Temperature (Cool mode) during SG ready control
   o Final Target Zone 2 water temperature = Target Zone 2 water temperature + SG Cool Setting

14.1.6.3   Zone Temperature Control Contents
   During Standard System (Optional PCB not connected)
   o Only 1 zone temperature control is available
   o This zone room temperature is control by either one of the 4 room sensor (Room Th, Int/Ext Room
   Thermostat, Water temperature)
   o Target Zone Water Temperature is calculated based on selected temperature control type (Compensation or
   Direct) and selected room sensor. Target Water Temperature will set same as Target Zone Water
   Temperature
   o Target Water Temperature is the temperature for heat pump to operate refer to indoor water outlet sensor.
   o Heat pump and water pump OFF when ROOM Thermo OFF (Zone Thermo OFF by Room Th or Room
   Thermostat).

* There will be no zone sensor connected to zone 1 (No zone sensor error), mixing valve and zone pump will not
operate.

   During Extension System (Optional PCB connected)

* There will be no zone sensor connected to zone 1 (No zone sensor error), mixing valve and zone pump will not
operate.
 During Extension System (Optional PCB connected)

   Buffer Tank connection select “NO” &
   o One zone system is select

   151


--- Page 152 ---
   This zone room temperature control by either one of the 4 room sensor (Room Th, Int/Ext Room
   Thermostat, Water temp.)
      Target Zone Water Temperature calculate base on selected temperature control type (Compensation or
   Direct) and selected room sensor.
      Target Water Temperature will set same as Target Zone Water Temperature
      Target Water Temperature is a temperature for heat pump to operate refer to indoor water outlet sensor.
      Heat pump and water pump OFF when ROOM Thermo OFF (Zone thermo OFF by Room Th or Room
   Thermostat).

* There will be no zone sensor connected to zone 1 (No zone sensor error), mixing valve and zone pump will not
operate.

   o   2 zone system select
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

   Buffer Tank Connection select “YES” &
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

14.1.7 Auto Mode Operation

   COOL
   MODE
   Heat To Cool
   Setting Temp.   Cool To Heat
   Setting Temp.
   HEAT
   MODE

   Outdoor Ambient

      Control details:
   o To enable the unit to operate either heat or cool mode automatically, heat to cool set temperature and
   cool to heat set temperature can be set by control panel.
   o Automatic operation is judged based on control panel setting temperature and outdoor ambient
   temperature.
   * Minimum setting of heat to cool set temperature is 1°C higher than cool to heat set temperature.

   152


--- Page 153 ---
   Judgement control:
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
   10°C
   8°C
   Compressor
   OFF

   Outdoor Ambient
   Temperature

      Auto Mode Cooling Only operation will start once the outdoor ambient temperature reaches 10°C and
   compressor will continue to run until the outdoor ambient temperature drops to 8°C.
      Due to this limitation,
   If Heat to Cool temperature is set lower than 10°C, the compressor will not operates until the outdoor
   ambient temperature reaches 10°C or higher.

14.1.9 Tank Mode Operation
   3 ways valve direction
   o 3 ways valve switch to tank side during Tank Thermo ON condition. Switch 3 ways valve to room side when
   tank achieve Tank Thermo OFF temperature.

   Tank Thermo ON/OFF Characteristic

   Tank Thermo OFF
   Case 1: Internal Tank Heater is select and Tank Heater ON
   o Tank temperature > Tank Set Temperature continuously for 15 seconds. OR
   o Water outlet >75°C
   Case 2: Tank Heater OFF OR External Heater is select
   o When heat pump OFF due to water thermos & Tank temperature > Tank water set temperature for
   continuously 20 seconds. OR
   o Tank temperature > Tank set temperature + 1°C for continuously 20 seconds.

   Tank Thermo ON
   Case 1: Tank Heater ON (Internal Tank Heater)
   o Tank temperature < Tank set temperature + R/C (Tank re-heat temperature)

   Case 2: Tank Heater OFF (Internal Tank Heater)
   o  Tank temperature < Tank water set temperature + R/C (Tank re-heat temperature)

   * When tank thermo ON, water pump will ON for 3 minutes then only heat pump turn ON.
   * Tank water set temperature = tank set temperature or 52°C whichever lower.

   2 ways valve close
   Heat pump Thermostat Characteristic
   o Heat pump Water Outlet set temperature is set to below table:

   Outdoor ambient temperature   Heat pump target water outlet temperature
   < -10°C   56°C
   > -10°C   59°C

Characteristic of heat pump thermos ON/OFF under tank mode condition:

   153


--- Page 154 ---
Water Outlet Thermo Condition
 Heat pump thermos OFF temperature:
   1 Heat pump thermo OFF temperature = Target Water outlet temperature + (1°C)
   2 Water outlet temperature > heat pump thermo OFF temperature for continuously 3 minutes, heat pump OFF
   but water pump continue ON.

   Heat pump thermo ON temperature
   1 Heat pump thermo ON temperature = water inlet during thermo OFF time + [-3°C]
   2 When water outlet temperature < heat pump thermo ON temperature, heat pump ON.

Water inlet thermo protection condition
 Heat pump thermo OFF temperature:
   1 Water inlet temperature > [60°C/55°C] for continuously 30 seconds, heat pump OFF, water pump continue
   ON.

   Heat pump thermo ON temperature:
   1 Heat pump thermos ON temp = water inlet temperature < [60°C/55°C].

   Outdoor ambient temperature   Water inlet temperature
   < -10°C   55°C
   > -10°C   60°C

Thermo ON/OFF for Heat Pump in Tank Operation:

When tank temperature achieve heat pump OFF condition, refer below condition:
Conditon 1 : Tank Heater ON (Internal Tank Heater)
 Heat pump will turn OFF, water pump continue ON and room heater will continue ON if tank temperature below
   tank heater thermo ON condition. 3 ways valve will only switch to room side after tank temperature reach tank
   heater thermo OFF condition.

Conditon 2 : Tank Heater OFF (Internal Tank Heater)
 If tank temperature achieve tank thermo OFF, heat pump turn OFF, water pump turn OFF, room heater OFF and
   3 ways valve switch to room side.

When tank temperature achieve heat pump ON condition, water pump ON, heat pump ON and room heater turn OFF.

   Heat pump OFF condition at Tank Mode
   o  Tank temperature > tank water set temperature continuously for 20 seconds after heat pump thermos OFF
   due to water thermo. (Heat pump turn OFF but water pump continue ON and room heater turn ON to achieve
   tank set temperature) OR
   o Tank temperature > tank set temperature + [1°C] for continuously 20 seconds. (Heat pump OFF, water pump
   OFF, room heater OFF and 3 ways valve switch to room side)

   Heat pump ON condition at Tank Mode
   o  Tank temperature < tank water set temperature + R/C setting (Tank re-heat temp) (Water pump turn ON OR
   continue ON, heat pump ON and 3 ways valve switch to tank side or maintain at tank side)

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

   154


--- Page 155 ---
14.1.10 Heat + Tank Mode Operation
  1   3 ways valve control:
   o 3 ways valve switch to room side during room heat-up interval and switch to tank side during tank heat-
   up interval. Both modes will switch alternately. Tank mode is the initial running mode of Heat + Tank
   mode.

  2   Heat pump operation control:
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

  3   Room heater control:
   o During heating heat-up interval
    Follow normal room heater control operation.

  4   Tank heater control:
   o During heating heat-up interval
    Internal tank heater will not function under heating heat-up interval.
   o During tank heat-up interval
    Internal tank heater will turn ON after heat pump thermo off to boil tank temperature to tank set
   temperature.
   o 2 ways valve control is open
   o Indoor water pump control:
    Indoor water pump always turn ON if room heat pump thermo ON OR Tank thermo ON.

14.1.11 Cool + Tank Mode Operation
  1   3 ways valve control:
   o 3 ways valve switch to room side during room cooling interval and switch to tank side during tank heat-
   up interval. Both mode will switch alternately. Tank mode is the initial mode of cool + tank mode.

  2   Heat pump operation control:
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

   155


--- Page 156 ---
 Maintain at room cooling interval regardless of the tank temperature. Switch to tank heat-up interval
   only when (Room Interval Timer is complete OR Room heat pump thermo OFF) AND Tank
   temperature < Tank thermo ON temperature.
   Case 3:
   [Previous switch from tank interval to room interval is due to tank interval timer is complete]
    Maintain at room cooling interval regardless of the tank temperature. Switch to tank heat-up interval
   only when (Room Interval Timer is complete OR Room heat pump thermo OFF) AND tank
   temperature < Tank thermo ON temperature.

   *Tank Thermo ON temperature:

   Internal Tank Heater select USE   <Tank set temperature + R/C setting (Tank re-heat temperature)
   Others   <Tank water set temperature + R/C setting (Tank re-heat temperature)

   o   During Tank heat-up interval
    Tank interval is the first mode running when the cool + tank mode is select.
    Switch to room interval only when tank achieve tank thermo OFF OR tank heat-up interval timer is
   complete.
    Heat pump operates according to normal tank mode operation.

   3   Room heater control:
   o During room cooling interval
    Room heater is OFF and not operates.

   4   Tank heater control:
   o During room cooling interval
    Internal tank heater will not function under room cooling interval.
   o During tank heat-up interval
    Internal tank heater will turn ON after heat pump thermos off to boil tank temperature to tank set
   temperature.

   5   2 ways valve is close.

   6   Indoor water pump control:

   o   Indoor water pump always turn ON if room heat pump thermo ON OR Tank thermo ON.

14.1.12 Outdoor Fan Motor Operation
Outdoor fan motor is adjusted according to operation condition. It starts when compressor starts operation and it
stops 30 seconds after compressor stops operation.
   ON   ON
   Compressor:
   OFF

   ON   Fan Speed   ON
   Outdoor Fan:
   30 sec
   OFF

   156


--- Page 157 ---
14.2 Water Pump
14.2.1 Water Pump Control
   Once the indoor unit is ON, the water pump will be ON immediately and no error judgment for 70 seconds.
   However, during this 70 seconds operation, if there is any abnormality cause at outdoor or malfunction, the
   compressor should be OFF immediately and restart delay after 3 minutes.
   The system will start checking on the water flow level after operation start for 70 seconds. If water flow level is
   detected low continuously 60 seconds, the water pump and the compressor will be OFF permanently and
   OFF/ON control panel LED will blink (H62 error occurs).
   When error happens, the power has to be reset to clear the error.
   If there is no error indication, the water pump shall be continuously running.
   The water pump will remain ON when compressor OFF due to thermostat OFF setting is reached.
   Water pump will OFF when room thermo OR tank thermo OR buffer tank thermo OFF.
   Water pump will delay 15 seconds to turn OFF when request to OFF except during anti-freeze deice activate or
   air purge mode.

   Pump ON Request

   YES

   ON Water Pump

   NO
   Pump ON Time
   ≥ 70 Sec?

   YES
   NO
   Water Flowrate Abnormal
   > 60 Sec?

   YES

   OFF Water Pump   H62 Error Display
   at Remote Controller

Maximum pump speed setting on remote control

1) When Pump flowrate setting is ΔT
   Standard pump speed is automatically controlled to get the designed water temperature different between water
   inlet and outlet (ΔT). The maximum pump speed setting limitation can be adjusted by the installer according to
   water circuit pressure drop condition.

2) When pump flowrate setting is Max. Duty
   Indoor water pump speed will operate at the maximum pump speed setting at room side operation. The
   maximum pump speed setting can be adjusted by the installer according to water circuit pressure drop condition.

However, the following sequences do not follow maximum pump duty setting by remote control.
  Pump down mode
  Air purge mode
  Normal deice

   157


--- Page 158 ---
1) P-Q graph for different pump HEX duty

   P-Q (AIO K Series Model)
   170

   160

   150

   140

   130

   120

   110
   Pressure,P(kpa)

   100

   90

   80

   70
   Max Duty C5
   60

   50

   40

   30
   Duty 6E
   20

   10
   Min Duty 59
   0
   0   10   20   30   40   50

   Water Flow Rate,Q(L/min)

14.2.2 Zone Water Pump Control
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

   Zone 1 and Zone 2 water pump start condition:
   o Zone room request ON
   (eg. Zone 1 thermo ON, only zone 1 pump will turn ON)
   Zone 1 and Zone 2 water pump stop condition:
   o Zone room request OFF
   Pool water pump start condition:
   o Pool Zone request ON AND
   o Pool function is selected

   158


--- Page 159 ---
   Pool water pump stop condition
   o Pool zone: Zone room request OFF OR
   o Pool function is cancel

   * Zone 1 & Zone 2 water pump need to turn OFF when antifreeze deice pump stop control activate and turn
   ON back after the antifreeze deice pump stop control end under setting of “NO” buffer tank connection.

Zone Pump Prohibit ON control:
 Start condition:
   Zone 1 water temperature ≥ 75°C continuously for 5 minutes
   *stop zone water pump operates if the zone water fulfilled.
 Cancel condition:
   After 30 minutes from start condition fulfilled.
   *zone water pump operates according to normal condition.

Zone Pump Control during Anti-Freeze
Zone pump control during Zone Anti-Freeze Control:
 When Zone Anti-Freeze Flag=1, Zone Pump Turn ON.
 When Zone Anti-Freeze Flag=0, Zone Pump Turn OFF.
Zone pump control during Indoor Anti-Freeze Control:
 Zone pump only ON/OFF if the Extension PCB connected and Buffer Tank select “NO” condition

   When Indoor Anti-Freeze flag=1, Zone Pump Turn ON
   When Indoor Anti-Freeze flag=0, Zone Pump Turn OFF
* Pool Water Pump will not affected by both Indoor anti-freeze control or zone anti-freeze control.

14.2.3 Water Pump Speed Feedback Error
   Basically pump speed feedback is control by micon.
   When pump speed is below low limit or over high limit for a few seconds, micon detect pump error and system is
   stopped.
   Error detection conditions:
   o Detect abnormal water pump speed for continuous 10 secs.
   o Current pump speed < 700 rpm or
   o Current pump speed > 6000 rpm for 10 seconds.
   Control contents:
   o When error occurs, water pump, heating and heater is stopped for 30 seconds then restart again (Retry
   control).
   o When micon detect error again, system is stopped and error code [H20] is displayed at control panel.

   159


--- Page 160 ---
14.3 Water Pressure Control
     Once the indoor unit is ON, the water pump will be ON immediately and no error judgment for 70 seconds.
   However, during this 70 seconds operation, if there is any abnormality cause at outdoor or malfunction, the
   compressor should be OFF immediately and restart delay after 3 minutes.
     The system will start checking on the water pressure after operation start for 70 seconds. If water pressure is
   detected low continuously 300 seconds, the water pump and the compressor will be OFF permanently and
   OFF/ON control panel LED will blink (H21 error occurs).
     When error happens, the power has to be reset to clear the error.
     If there is no error indication, the water pump shall be continuously running.

   Pump ON Request

   YES

   ON Water Pump

   NO
   Pump ON Time
   ≥ 70 Sec?

   YES
   NO
   Water Pressure Abnormal
   > 300 Sec?

   YES

   OFF Water Pump   H21 Error Display
   at Remote Controller

   160


--- Page 161 ---
14.4 Indoor Unit Safety
14.4.1 Indoor Unit Safety Control
   1   When water pump is ON, the system will start checking flow switch status (ON/OFF).
   2   If the flow switch ON for 10 seconds, the system will check on the water inlet temperature for 10 seconds.
   If the water inlet temperature not exceeds 80°C, the water pump shall be continuously running with normal
   mode.
   If the water inlet temperature exceeds 80°C for continuously 10 seconds, the water pump will be OFF
   immediately.
   3   After water pump OFF for more than 10 minutes, it will be ON back and the indoor unit safety control
   checking is restarted.

   Pump ON

   10s
   Flow SW ON?

   YES

   NO   to normal mode
   Water In > 80°C for 10s

   YES

   Pump OFF

   >10 mins

   YES

14.5   Auto Restart Control
   1   When the power supply is cut off during the operation of Air-to-Water Heatpump, the compressor will
   reoperate after power supply resumes.

14.6   Indication Panel

   LED   Operation
   Color   Green
   Light ON   Operation ON
   Light OFF   Operation OFF

Note:
 If Operation LED is blinking, there is an abnormality operation occurs.

   161


--- Page 162 ---
14.7 Indoor Back-Up Heater Control
14.7.1 Indoor Electric Heater Control
   1   Normal Heating Mode
   o Heater On condition:
   a. Heater switch is ON
   b. After Heatpump thermo ON for Remote Control Set Delay Time mins
   c. After water pump operate [3] mins
   d. Outdoor air temperature < Outdoor set temperature for heater
   e. When water outlet temperature < Water set temperature + Remote Control Heater ON Setting
   f. [20] minutes since previous Backup heater Off
   * When heatpump cannot operate due to error happens during normal operation, heater will go into
   force mode automatic
   * Heater need to operate during deice operation

   o   Heater Stop Condition:
   a. When outdoor set temperature > outdoor set temperature + [+2°C] for continuous 15 secs OR
   b. When water out temp > water set temperature + Remote Control Heater OFF Setting for continuous 15
   secs OR
   c. Heater switch is Off OR
   d. Heatpump thermo-off or OFF condition

   2   Force Heater Mode
   o Heater On condition:
   a. After water pump operate [3] mins
   b. When water outlet temperature < water set temperature + Remote Control Heater ON Setting
   c. [20] minutes since previous Backup heater Off

   o   Heater Stop condition
   a. Force mode off OR
   b. When water outlet temperature > water set temperature + Remote Control Heater OFF Setting for
   continuous 15 secs

   * Do not operate heater at the following situation
   1 Water outlet temperature sensor, and water inlet sensor abnormal
   2 Flow switch abnormal
   3 Circulation pump stop condition

   162


--- Page 163 ---
14.7.2 Room Heater Operation during Deice
Purpose:
 To protect the indoor Heat Exchanger from ice forming and prevent heat exchanger plate breakage.

Control content:
 This Heater protection control will activate only if the backup heater is enable at custom setup by remote
   controller. Once fulfil the start condition, room heater will turn ON together (base on max heater capacity
   selection) and stop together if stop condition is fulfilled.
   * If the heater is request to turn ON OLP feedback will be detected.

Starting conditions:
   1. During normal deice operation 4~9
   2. Water outlet temperature < 10°C or
   3. Outdoor air temperature < -10°C or
   4. Water inlet temperature < 27°C

Heater operates when 1 ~2 fulfilled OR When 1 and 3 ~ 4 is fulfilled.
However, this control does not relate to Heater ON/OFF button on remote control.

Stop condition:
 When normal deice end or
 Water outlet temperature > 45°C

However, room heater keeps ON if indoor electric heater control activate.

   163


--- Page 164 ---
14.8 Tank Heater Control
14.8.1 Tank Heater Remote Control Setting
   1   Tank heater selection:
   External: - Booster Heater use to heat up tank when select external
   Internal: - Backup Heater use to heat up tank when select internal
   * When select External Tank Heater, Heater Delay ON Timer need to set. (range 20 min ~ 3 hrs)

   2   Tank Heater ON/OFF selection by user.

The remote control Tank set Temperature range will change according to the External and Internal Tank Heater use.

   Tank Heater Selection   Range
   External   40 ~ 75°C
   Internal   40 ~ 65°C

14.8.2 Internal Heater Control at Tank Mode
   Internal heater turn ON condition:
   1   Internal Heater select for Tank heater by remote controller
   2   Tank Heater select ON by user.
   3   Backup Heater Enable
   4   Tank Temperature < Tank Set Temperature
   5   Heat Pump Thermo OFF
   6   20 minutes from previous heater off.

   Room heater turn OFF condition:
   1   Tank Temperature > Tank Set Temperature + [0°C] for continuous 15 seconds. OR
   2   Heat Pump Thermo ON OR
   3   Mode Change or Operation OFF by remote controller OR

   * Backup Heater Turn ON/OFF all together according to the selected heater capacity.

   Tank
   Temp.

   65°C

   Tank Water Set Temp

   Backup
   Heater
   Operation
   Heat Pump
   Operation

   Time

   164


--- Page 165 ---
14.9   Base Pan Heater Control (Optional)
   To enable the base pan heater function, control panel initial setting has to be manually adjusted by activating
   Base Pan Heater menu.
   There are 2 optional start condition can be selected, Type A or Type B.
   Control details:
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

   2   Type B: (ON Mode)
   Start conditions:
   o When outdoor air temperature is ≤ 5°C and operates in heating mode, base pan heater is ON.

   Cancel conditions:
   o When outdoor air temperature is > 7°C or
   o When operation is not at heating mode.

14.10 Force Heater Mode
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

   H12   Capacity Mismatch   H76   Indoor-Remote Controller Communication Error
   H20   Abnormal Water Pump   H95   Abnormal Voltage Connection
   H62   Abnormal Water Flow   F37   Abnormal Water Inlet sensor
   H70   Abnormal Back-up Heater OLP   H45   Abnormal Water Outlet sensor
   H74   PCB Communication Error   H21   Water Pressure Error
   [ When tank mode operate with external heater selected & tank heater select ON ]
   H72   Abnormal tank sensor   H91   Abnormal tank heater OLP

Force Heater Control Stop Condition:
 Force Heater request OFF OR
 Operation OFF request OR
 Power reset OR
 Error of above list happens during force heater operation.

   165


--- Page 166 ---
Control contents:
 After fulfill start condition, indoor will operate the force heater operation according to below mode condition
   Heat mode Only: Turn ON backup heater to achieve room heat pump target water temperature.
   Heat + Tank mode: Turn ON backup heater to heat up room OR Turn ON Heater to Boil up tank water.
   Cool mode Only: Water pump and backup heater will OFF in force heater mode.
   Cool + Tank mode: Operate pump and internal Heater OR External heater to Boil up tank water.
   Tank mode Only: Operate pump and internal Heater OR External heater to Boil up tank water.
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
 When water outlet temperature < water set temperature + Remote Control Heater ON Setting AND
 20 minutes since previous Backup heater Off AND
 Backup Heater Enable

Backup Heater Stop condition:
 Force mode off OR
 Operation off OR
 When water outlet temperature > water set temperature + Remote Control Heater OFF Setting for continuous 15
   secs OR
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

   166


--- Page 167 ---
Booster Heater OFF condition:
 Tank temperature > tank set temperature for continuous 15 secs.
 Force mode OFF
 Tank Mode Operation OFF
   (During tank interval or tank mode condition, water pump and 3 ways valve will OFF)

14.11 Powerful Operation
Powerful mode is use to increase the capacity of heat pump to achieve higher target temperature. Powerful mode is
applicable when heat mode is operating.

Remote control setting:
On quick menu of remote control, there is 4 options of powerful mode can be select.
- OFF   : Cancel powerful mode
- 30 minutes   : Set powerful for 30 minutes
- 60 minutes   : Set powerful for 60 minutes
- 90 minutes   : Set powerful for 90 minutes

Control contents:
During the time set by remote control, powerful will activate according to 2 shift up controls. However, this function is
applicable only for heating. Remote control will transmit the signal to indoor unit once this function is select then
transmit OFF signal to indoor when the timer is complete. Indoor will transmit signal to outdoor for frequency control.

Indoor setting temperature shift

   If system is standard system (Optional PCB is not connected)
   o Target water temperature will shift up to Wlo or Whi whichever higher.
   If system is extension system (Optional PCB is connected)
   o Target water Zone 1 and Zone 2 temperature will shift up to Wlo or Whi whichever higher.

   * If “Direct Type” temperature control is select, this powerful shift up setting is not effective.

   Start condition
   o Powerful function is select by remote control.

   End Condition
   o OFF/ON button is pressed.
   o Powerful function is OFF by remote control.

14.12 Quiet Operation
Quiet mode is use to reduce the noise of outdoor unit by reducing the frequency or fan speed.

Quiet level
There are 3 level (Level 1, Level 2, Level 3) to set by quick menu function on remote control.

Control content
Once the quiet function is select, the remote control will transmit the signal to indoor and outdoor unit.

Start condition
1) In case of “Sound” is set for “Quiet priority” on the remote control
   If any of below condition is achieved
    Quiet mode is set on remote control.
    Quiet mode is request ON by weekly timer.

2) In case of “Capacity” is set for “Quiet priority” on the remote control
   If condition { a) or b) } and { c) or d) or e) } is achieved
   a) Quiet mode is set on remote control.
   b) Quiet mode is request ON by weekly timer.
   c) During heating : Water outlet temperature > Target Water Temperature + [ -3°C ]
   d) During Cooling : Water outlet temperature < Target Water Temperature + [ 3°C ]
   e) During tank heat up : Tank temperature > Tank set Temperature + [ -3°C ]

   167


--- Page 168 ---
Stop condition
1) In case of “Sound” is set for “Quiet priority” on the remote control
   If any of below condition is achieved
    OFF/ON button is pressed.
    Quiet mode is OFF by remote control.
    Quiet mode is request OFF by weekly timer.

2) In case of “Capacity” is set for “Quiet priority” on the remote control
   If any of below condition is achieved
    OFF/ON button is pressed.
    Quiet mode is OFF by remote control.
    Quiet mode is request OFF by weekly timer.
    During heating : Water outlet temperature ≤ Target Water Temperature + [ -5°C ] for continuously
   [ 30 ] minutes.
    During Cooling : Water outlet temperature ≥ Target Water Temperature + [ 5°C ] for continuously
   [ 30 ] minutes.
    During tank heat up : Tank temperature ≤ Tank set temperature + [ -5°C ] for continuously [ 30 ] minutes.

14.13 Sterilization Mode
   Purpose:
   o To sterilize water tank by setting the required boiling temperature.

   Remote control setting
   o Days for sterilization function to start can be select.
   o Time of selected day to start sterilization function.
   o Boiling temperature (Internal heater is 55°C ~ 65°C)
   o Maximum operation time is 5 minutes to 1 hour.

   Start condition
   o Tank connection set to “YES” by remote control
   o Sterilization function selects “YES”.
   o Sterilization signal received from remote controller by timer.
   o Tank mode request ON.

   Stop condition
   o When boiling timer is completed. Boiling timer (Remote control set maximum operation time) start counting
   once tank achieve boiling set temperature OR
   o After 8 hours of operation since sterilization start.
   o Tank mode request OFF.

   Control content:
   o During sterilization function activation time, target tank set temperature will internally change to boiling set
   temperature.
   o During sterilization activates, heat pump and heater (external or internal) will operate as normal tank mode to
   achieve the boiling set temperature.
   o Sterilization operation will end when stop condition is fulfill.
   o After sterilization is complete, tank set temperature will resume to normal operation.

* Tank temperature may not achieve boiling set temperature if tank heater is select OFF OR external compressor
switch.

   168


--- Page 169 ---
14.14 Outdoor Ambient Thermo OFF Control
   Purpose:
   o Stop provides heating to room side during high outdoor ambient condition.

   OFF

   Outdoor thermo off set
   temperature + 3°C

   ON   Outdoor thermo off set temperature +
   1°C

   Control content:
   o Heating outdoor ambient thermos OFF control only applicable when heat pump operate in heat mode. (This
   control will not activate when running in tank side)
   o Heat pump and water pump will turn OFF when outdoor ambient is higher than outdoor thermo OFF set
   temperature.
   o Heat pump thermos ON when outdoor ambient < outdoor thermos OFF set temperature + 1°C.

14.15 Alternative Outdoor Ambient Sensor Control
Purpose of the Alternative Outdoor Ambient Sensor:
 It is some possibility that the air to water heat pump unit will install at a location where the original ambient sensor
   is expose to direct sunlight. Therefore, another optional ambient sensor can be connect to indoor PCB and locate
   at new and better reading location to improve the heat pump performance.

Control Detail:
 Remocon can select either the extra outdoor ambient sensor is connected or not. (YES/NO)
 The alternative outdoor ambient sensor will connect to indoor unit main PCB terminal.

   o   when alternative sensor select NO
    Original Outdoor temperature sensor will use for Indoor & Outdoor heat pump operation reference
   sensor.
    Data communication direction : OUTDOOR send outdoor temperature reading to INDOOR.
    Error judge : OUTDOOR will judge the original outdoor sensor error (F36 display if error detect). No
   judge error on alternative outdoor sensor

   o   when alternative sensor select YES
    Alternative Outdoor temperature sensor will use for Indoor & Outdoor heat pump operation reference
   sensor.
    Data communication direction : INDOOR send outdoor temperature reading to OUTDOOR.
    Error judge : INDOOR will judge the Extra outdoor sensor error only after operation ON request received
   from remocon.
   (F36 display if error detect). No judge error on original outdoor sensor.

14.16 Force DHW mode
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

   169


--- Page 170 ---
o   When receive this Force DHW bit from remocon, indoor will memories the running mode and run tank only
   mode regardless of the mode selection.
   o   After tank temperature achieve tank thermo off temperature, turn OFF force DHW bit and return to previous
   memories running mode.

   * when operation OFF or mode change request from remocon during force DHW mode operation, End force
   DHW mode and follow the new request operation.

   * Once receive force DHW mode from remocon, indoor direct start tank mode and consider tank thermo ON.
   Thermo OFF only when achieve tank thermo OFF depend on the Tank System Setting.

14.17 SMART DHW mode
Panasonic All In One model provide the option to choose STANDARD DHW Mode or SMART DHW Mode for Tank
Heat Up according to requirement. SMART DHW mode comparatively consume lower tank heat up power but longer
re-heat time than STANDARD DHW Mode.

SMART DHW control

   During SMART DHW start time 20:00 (Default Setting) to SMART DHW stop time 05:00 (Default setting)
   Heat pump re-heat the tank water only when tank temperature drop below 20°C (Default setting)

   Time between 05:00 to 20:00
   Heat pump reheat the tank water when tank temperature as below condition

Condition 1: Tank Heater ON
Reheat when tank temperature below tank set temperature + R/C (Tank re-heat Temperature) - 3°C

Condition 2: Tank Heater OFF
Reheat when tank temperature below Tank set temperature or 52°C (Whichever lower) + R/C (Tank re-heat
Temperature) -3°C

* SMART DHW start time, stop time and SMART ON Temperature can change in CUSTOM menu.

STANDARD DHW Mode

   Heat pump always reheat the tank water when tank temperature as below condition

Condition 1: Tank Heater ON
Reheat when tank temperature below tank set temperature + R/C (Tank re-heat temperature)

Condition 2: Tank Heater OFF
Reheat when tank temperature below Tank set temperature or 52°C (Whichever lower) + R/C (Tank re-heat
temperature)

14.18 DHW Capacity Setting
DHW Capacity is heat pump heating capacity output control during tank boiling operation. There are two DHW
capacity setting (VARIABLE & STANDARD) which can be set in remote control.

VARIABLE DHW Capacity:
 Heat pump operate with efficient (Low) Capacity to boil tank temperature during re-heat process. And heat pump
   regulated to operate with high capacity to boil tank temperature when tank temperature drop below 25°C.

STANDARD DHW Capacity:
 Heat pump operate according to outdoor rated heating capacity during tank boiling process.

   170


--- Page 171 ---
14.19 Anti Freeze Control
   Anti freeze protection control menu can be set YES or NO by control panel.
   In heatpump system, there are 3 types of anti freeze control:
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
   o When operation ON and once compressor starts
    However, if flow switch is abnormal (H62), then water pump circulation anti freeze control will not activate.

   3. Back up heater anti freeze control:
    Back up heater turn ON when ALL below conditions is fulfilled:
   o Water inlet/outlet temp. < 6°C.
   o Water pump circulation anti freeze control activated and water pump ON for 4 minutes.
    Back up heater turns OFF when ANY of below conditions is fulfilled:
   o Water inlet/outlet temp. > 28°C.
   o Water pump circulation anti freeze control deactivated/water pump OFF.
    However, if back up heater is abnormal (H70) then back up heater anti freeze control will not activate.

14.19.1 Zone Anti-Freeze Control
   If buffer tank selection is “NO” and Anti- Freeze function select “NO” from remote control, this control cannot
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

   171


--- Page 172 ---
14.20 Solar Operation (Optional)
14.20.1 Solar Operation:
Solar function:
 This function allow user to control the solar pump to operate depend on the solar sensor reading compare to the
   tank installed. Solar pump will circulate the hot water energy store at solar panel to heat up the DHW Tank or
   Buffer Tank.

Solar Connection Diagram:

   Solar function can only enable when the Optional PCB is connected.
   Few part as below need to install to control the solar operation:
   o Solar Panel
   o Solar Pump
   o Solar Panel Sensor
   o Tank Sensor (Buffer tank sensor OR DHW Tank sensor depend on the connection direction)
   * During Solar Connection to the system, installer need to alert on the high water temperature may flow to the
   zone circuit or DHW piping circuit. Therefore pipe which withstand higher water temperature need to be
   installed.
   Solar remote control setting
   1 Solar Setting can only be set when the optional PCB connection is select “YES”
   2 By remote controller, Setting as below list can be set for solar function operation (Installer Menu)
   o Solar Function (“YES” or “NO)
   o Tank Connection Direction (“DHW TANK” or “BUFFER TANK”)
   o Delta T turns ON: Difference temperature setting between solar panel sensor and Tank to turn on solar
   pump. (Range :5 ~ 15°C)
   o Delta T turns OFF: Difference temperature setting between solar panel thermistor and Tank to turn off
   solar pump. (Range :2 ~ 10°C)
   o Outdoor temp for Anti-Freeze : Outdoor temp to start Anti-Freeze control for solar circuit. (Range : -20 ~
   10°C)
   o Tank Temperature HI Limit Set (Range : 70 ~ 90°C)

   172


--- Page 173 ---
14.20.2 Solar Operation Control
   Solar function can only be activate if the solar function selection “YES” from remote control. To achieve hot water
   from solar panel, indoor need to control the solar pump and circulate hot water from solar panel.

   Under normal case:
   o Solar pump start condition:
    Solar panel temperature > Delta T turn on setting temp (R/C) + Tank temperature (depend on selection,
   DHW or Buffer) AND
    Tank temperature (DHW or Buffer) < Solar HI Limit Temp (R/C) AND
    Operation ON with heat mode (apply to solar connect to “Buffer Tank” case)

   * Condition c) ignore if the solar system is connect to DHW tank (control active under operation OFF time for
   Tank connection case)

   o   Solar pump stop condition:
    Solar panel temperature < Delta T turn OFF setting temp (R/C) + Tank temperature (depend on selection,
   DHW or Buffer) OR
    Tank hot water temp >= Solar HI Limit Temp (R/C) + [2]°C

   Under solar Anti-freeze protection control:
   o   Solar pump start condition:
    Outdoor temp < Outdoor temp setting for Anti-Freeze (R/C)
   o   Solar pump stop condition:
    Outdoor temp > Outdoor temp setting for Anti-Freeze + [2]°C

**However, During Cool mode this function cannot activate if Tank selection is “Buffer Tank”.
**Solar pump can operate even if Heat pump is under error stop.

   Solar operation during error:
   o During Tank sensor (DHW or Buffer depend on selection) abnormal, Solar operation will not able to function.
   o During Solar Panel sensor detect OPEN (not include SHORT), Solar operation will not able to function too.

14.21 Boiler Bivalent Control
   Boiler is an additional or alternative heat source to heat up the room when necessary.
   Purpose of this control is to turn ON and turn OFF the Boiler output signal when boiler heating capacity needed in
   the system.
   Boiler is possible to connect to DHW Tank and Buffer Tank depends on the installer.
   Boiler operation parameter need to be set on Boiler itself, indoor do not control the boiler operation direction and
   operation.
   There is two option of control pattern can be set by remote controller: AUTO OR SG ready Mode

   Auto Control Mode:
   1 There are Alternative mode, Parallel mode, & Advance Parallel mode available to select by installer to fit to
   the total system.

   Remote control setting value:
   1 Outdoor Ambient Set = (Range: -15°C ~ 35°C)

   Alternative Mode
   o Only one heat source operates at one time, either heat pump or boiler depends on condition.
   * External pump will turn ON when the external pump selection is ON when boiler is ON even heat pump is OFF.

   Control detail:
   During Operation ON at Heat mode or Tank mode or Heat + Tank Mode
   o Boiler signal turn ON and heat pump and water pump turn OFF when:
    Outdoor ambient < Outdoor Ambient Set AND
    Boiler prohibit flag = 0

** However indoor water pump can operate when Anti-freeze control condition fulfilled.

   o   Boiler signal turn OFF and heat pump and water pump turn ON when:
    Outdoor ambient > Outdoor Ambient Set + [2°C] OR
    Boiler prohibit flag = 1

   173


--- Page 174 ---
   Parallel Mode
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

   Advance Parallel Mode
   o Advance parallel mode allow heat pump to operate and turn ON boiler only when ambient and temperature
   condition is fulfilled.

   Remote control setting value:
   1 Outdoor Ambient Set = (Range : -15°C ~ 35°C)
   2 Selection of boiler connection direction. (Heat only, DHW only, Heat & DHW)
   3 Setting data under Heat Direction
   o Start Temperature   | START_TEMP |
   o Start Delay Timer   | START_TIMER |
   o Stop Temperature   | STOP_TEMP |
   o Stop Delay Timer   | STOP_TIMER |
   4 Setting data under DHW Direction
   o Delay Timer   | DELAY_TIMER |

   SG ready Control Mode
   o Using same SG ready from Sub Board input to control boiler ON/OFF output.
   * When this SG ready is select for bivalent control, default SG ready function will change to control bivalent
   output
   o Remote controller can set the External Pump ON/OFF like bivalent alternative mode

   Control Content
   Indoor will follow the SG ready bit input to control ON/OFF heat pump and boiler
   00 : Heat pump OFF, Boiler OFF   10 : Heat pump OFF, Boiler ON
   01 : Heat pump ON, Boiler OFF   11 : Heat pump ON, Boiler
   * External pump will turn ON when the external pump selection is ON when boiler is ON even heat pump is OFF.

   Control detail:
   During operation ON at Heat Mode
   o Boiler signal turns ON when
    Outdoor ambient < Outdoor Ambient Set AND
    Buffer tank temperature < Target Buffer Tank Temperature + [START_TEMP] for [START_TIMER]
   AND
    Heat pump operate at room side AND
    Connection of Boiler to Heating Select “YES” From installer menu AND
    Buffer Tank connection select “YES” AND
    Boiler prohibit flag = 0

   o   Boiler signal turns OFF when
    Outdoor ambient > Outdoor Ambient Set + [-2°C] OR
    Buffer Tank temperature > Target Buffer Tank temperature + [STOP_TEMP] for [STOP_TIMER] OR
    Heat pump not at room side. OR]
    Boiler prohibit flag = 1

   During operation ON at Tank Mode
   o Boiler signal turns ON when
    Outdoor ambient < Outdoor Ambient Set AND
    Heat pump operate at tank side for continuous | DELAY_TIMER | AND
    Connection of Boiler to DWH Tank select “YES” from installer menu. AND
    Boiler prohibit flag = 0

   174


--- Page 175 ---
o   Boiler signal turns OFF when
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

   Smart Bivalent Control Mode:
   1 When this mode is selected by installer, it will decide whether to use heat pump or boiler to heat up room and
   sanitary tank.

   Remote control setting value:
   1 Energy price → Electricity price 1 ~ 10 = (Range : 0 ~ 999.9 */kWh)
   Energy price → Boiler price = (Range : 0 ~ 999.9 */kWh) → Boiler efficiency = (Range : 0 ~ 99%)
   2 Season setting → Season 1 ~ 4 = (Range : Jan ~ Dec)
   3 Schedule setting → Season 1 ~ 4 → Pattern 1 ~ 4 → Start time = (Range : 12am ~ 11pm) → Price =
   (Range : 0 ~ 10)
   * Installer is to input all the remote control setting as shown above based on regional electricity price rate and
   various season.

   Control detail:
   o Usage of heat pump or boiler to heat up is decided based on which heat source is cheaper as a result of the
   calculation from these remote control setting.
   o It varies depends on heat pump’s efficiency at various outdoor ambient condition and the boiler’s efficiency.

14.22 External Room Thermostat Control (Optional)
Purpose:
   1 Better room temperature control to fulfill different temperature request by external room thermostat.
   Recommended external room thermostat:

   Maker   Characteristic
   Siemen (REV200)   Touch panel
   Siemen (RAA20)   Analog

   Connection of external room thermostat:
   Wire Connection and thermo characteristic of Siemen REV200:

   Setting   L/L1 (H)   Heat Thermo   L/L2 (C)   Cool Thermo
   Set Temp < Actual Temp   Open Circuit   OFF   Short Circuit   ON
   Set Temp > Actual Temp   Short Circuit   ON   Open Circuit   OFF

   175


--- Page 176 ---
Indoor Unit
   L   L (label)
   N   Siemen REV200
   Cooling   C   L1 (label)
   Heating   H   L2 (label)
   9 : Terminal Board No.

   Connect only heating line for heating only model. And connect both
   heating and cooling line for heat + cool model.

   Wire Connection and thermo characteristic of Siemen RAA20:

   Setting   L/Y1 (H)   Heat Thermo   L/Y2 (C)   Cool Thermo
   Set Temp < Actual Temp   Open Circuit   OFF   Short Circuit   ON
   Set Temp > Actual Temp   Short Circuit   ON   Open Circuit   OFF

   Indoor Unit
   L   L (label)
   N   Siemen RAA20
   Cooling   C   Y1 (label)
   Heating   H   Y2 (label)
   9 : Terminal Board No.

   Connect only heating line for heating only model. And connect both
   heating and cooling line for heat + cool model.

Control Content:
 External room thermostat control activate only when remote thermostat connection select YES by Indoor control
   panel.
 When indoor running heat mode, refer thermo On/Off from heating line feedback. And when indoor running cool
   mode, refer thermo On/Off from cooling line feedback.
 Heat pump Off immediately when receive thermo off feedback.

14.23 Three Ways Valve Control
Purpose:
   - 3 ways valve is used to change flow direction of hot water from heat pump between heating side and tank side.

Control contents:
   1 3 ways valve switch Off:
   o During 3 ways valve switch Off time, the hot water will provide heat capacity to heating side.
   2 3 ways valve switch On:
   o During 3 ways valve switch On time, the hot water will provide heat capacity to tank side.
   3 Stop condition:
   o During stop mode, 3 ways valve will be in switch off position.
   4 When deice flag received from outdoor
   o During Heat mode, 3 ways valve maintain at room side.
   o During Tank mode, 3 ways valve switch ON to tank side regardless of tank thermo conditions.
   o During Heat + Tank mode, 3 ways valve direction is as below
   a) When receive deice bit from outdoor, if 3 ways valve is ON to tank side, maintain at tank side.
   b) When receive deice bit from outdoor, if 3 ways valve is OFF at room side, maintain at room side
   when any of below condition achieved :-
   i) Tank temperature < [ 40°C ]
   ii) Remote controller ‘DHW Defrost’ select ‘NO’
   Else, switch ON to Tank side.
   * Resume back to room interval after deice operation complete.

   176


--- Page 177 ---
Spring Return 2 point   SPDT 3 wire
   NC
   COM
   Indoor Unit   1   L   1   L
   L   1
   AC230V   3 N1   M   3 N1
   Open
   M
   Close
   N1 3   5 N2   5 N2
   N2 5

   NO
   1   L

   6: Terminal Board No.
   3 N1   M
   5 N2

   * During pump down and force mode, fix 3 ways valve in close condition.

   * Recommended Parts : SFA 21/18 (Siemens)

14.24 Two Ways Valve Control
Functionality of 2 ways valve:
 Use to allow hot water to floor heating panel or block cold water to floor heating panel.

Control contents:
   1 When indoor running in heat mode, OPEN the 2 ways valve.
   2 When indoor running in cool mode, CLOSE the 2 ways valve.
   3 Stop condition:
   a. During stop mode, fix 2 ways valve in close condition.

   Spring Return 2 point   SPDT 3 wire
   NC
   COM
   Indoor Unit   1 L   1 L
   L   1
   AC230V   3 N1   M   3 N1
   Open
   M
   Close
   N1 3   5 N2   5 N2
   N2 5

   NO
   1 L
   3: Terminal Board No.
   3 N1   M
   5 N2

   * During pump down mode, fix 2 ways valve in close condition.
   * During force mode, open 2 ways valve.

   * Recommended Parts : SFA 21/18 (Siemens)

14.25 External OFF/ON Control
   Communication circuit between indoor unit and external controller is as per below.

   5V
   External
   12V   Controller
   mico
   1
   2

   Panasonic
   PCB
   CN-THERMO

   177


--- Page 178 ---
   Maximum length of communication cable is 50 meter.
   Control content:

   External Control Switch   Control Panel OFF/ON   Control Panel Power LED   System Status
   ON   ON   ON   ON
   ON   OFF   OFF   OFF
   OFF   ON   ON   OFF
   OFF   OFF   OFF   OFF

Remocon Screen Display and Control Detail:

   10:34am , Mon
   1   2
   Turned of by external switch.
   40 ˚c
   23 44   CANCEL
   ˚c   ˚c   18 ˚c
   REMOTE   ON
   CONTROLLER   OFF
   LED
   REMOTE   ON   ON
   CONTROLLER
   SIGNAL   OFF   OFF

   EXTERNAL
   ON
   OFF
   CONTROLLER
   SWITCH
   ON
   UNIT   OFF

When External SW connection select “YES” from remocon installer menu:
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

14.26 External Compressor Switch (Optional PCB)
External compressor switch port can have two purpose of control as below:
 Heat source ON/OFF function (Dip switch Pin 3 on PCB “OFF”)
 Heater ON/OFF function (Dip switch Pin 3 on PCB “ON”)
 Heat source ON/OFF function

Purpose:
 Heat pump ON/OFF function is use to turn OFF the high power consumption device (Heat pump, & Heater) when
   there is energy or electric current limitation. Other optional function still can be operate under heat pump and
   heater OFF condition.

   178


--- Page 179 ---
Control Detail:
 This External Compressor Switch is possible to connect to Optional PCB only.
 Once the remocon select External Compressor Switch connection “YES”, & Dip Switch on PCB “OFF”
   This heat pump ON/OFF function will activate
 The ON/OFF signal of this External Compressor Switch is same as External Switch.
 When the External Compressor Switch is ON:
   o Heat pump system operate normally
 When the External Compressor Switch is OFF:
   o Heat pump, Indoor water pump & Heater ( Booster heater & Backup Heater ) need to turn OFF
   o Solar, Boiler and zone control can be operate follow normal control condition.
   * pump delay OFF also included in this control

   (There is NO pop up screen like External Switch when this External Compressor Switch is OFF.)

   Heater ON/OFF function

Purpose:
 Heater ON/OFF function is use to turn OFF the heater (backup heater & booster heater) when there is energy or
   electric current limitation. Heat pump and other optional function still can operate.

Control detail:
 This External Compressor Switch is possible to connect to Optional PCB only.
 Once the remocon select External Compressor Switch connection “YES”, & Dip Switch on PCB “ON”
   This heater ON/OFF function will activate
 When the External Compressor Switch is ON:
   o Heat pump and heater operate normally
 When the External Compressor Switch is OFF:
   o Backup heater and booster heater cannot operate even heater request is ON.
   o Heat pump and option function (Solar, Boiler and zone control) can be operate follow normal control
   condition.

   (There is NO pop up screen like External Switch when this External Compressor Switch is OFF.)

14.27 Heat/Cool Switch (Optional PCB)
Purpose:
 User can switch the running mode from heat to cool or cool to heat through external installed Heat/Cool switch.
   This kind of heat / cool switch may built in inside the field supply room remocon as well.

Control contents:
 Heat/Cool Switch can only be set when Cool Function is “enable” at custom menu setting, & Extension PCB
   select “YES” & Zone 1 not set “Pool” condition.
 This heat/cool switch control will be activate only when installer set the Heat/Cool Switch “USE” through remocon.
 Once the Heat/Cool Switch Set “USE”, remocon will check indoor send Signal to judge the option of mode select.
   o When Heat/Cool Switch Contact Open : Remocon only can select Heat Mode, or Heat + Tank Mode, or Tank
   Mode
   o When Heat/Cool Switch Contact Close : Remocon only can select Cool Mode, or Cool + Tank Mode, or Tank
   Mode
 Operation ON/OFF will depend on remocon request.
 When Heat Mode is running with Contact Open, user change this setting to contact close, indoor will this signal to
   remocon judge and change mode to cool and send back to indoor. And it is same as from cool mode change to
   heat mode.
   * This switch have higher priority, remocon follow indoor send signal when control activated.
   * There is no effect to the operation when the mode running is only Tank Mode.

   (Weekly Timer are ignored and cannot be set during Heat / Cool Switch is “Enable” Condition.)

   179


--- Page 180 ---
14.28 SG Ready Control (Optional PCB)
Purpose:
 To set ON/OFF of heat pump and target temperature by digital input of third party device if necessary in field.

   Optional PCB   Remote Station

   + DI2 Com

   Digital Input
   + DI1 Com

   - Com

Remote control setting

For this function, following items need to be set on Remote Control (installer menu) –

   SG control = YES or NO
   Capacity up setting 1
   o Heating capacity [50 ~ 150 %]
   o DHW capacity [50 ~ 150 %]
   o Cooling capacity [-15 ~ 0 %]
   Capacity up setting 2
   o Heating capacity [50 ~ 150 %]
   o DHW capacity [50 ~ 150 %]
   o Cooling capacity [-15 ~ 0 %]

Control contents:

If SG control on remote control = “Yes”, then following control only activate by digital input.

   While Digital input is “ 00 “ (Normal operation)
   o Normal operation. Once detect ‘00’ system will operate back to normal condition.
   (All the target set temperature for heating side and DHW side will return back to previous set temperature
   when digital signal change from “10’ or “11” back to “00”.)
   While digital input is detected “ 01 “ (HP stop)
   o Heat pump & room heater & tank heater cannot operate.
   (Solar control and Boiler back up and 2 Zone control can activate.)
   While digital input is detected “ 10 “ (Capacity 1)
   o Target temperature for heating and DHW Tank is changed according to the percentage set by Remote
   control setting. However, which setting temperature is change depend on system setting.
   o Target water temperature of cooling is changed according to the adjustment value set by remocon setting.
   While digital input is detected “ 11 “ (Capacity 2)
   o Target temperature for heating and DHW Tank is changed according to the percentage set by Remote
   control setting. However, which setting temperature is change depend on system setting.
   o Target water temperature of cooling is changed according to the adjustment value set by remocon setting.
   While digital input is detected “ 10 “ (Capacity 1)
   o Setting temperature for heating and Tank is changed.
   However, which setting temperature is change depend on system setting.

If Buffer selection is “YES”
Room side
New Target Buffer tank temperature = Current Target Buffer Tank Temperature * Remote Control setting
(“ capacity 1) %
* Max Min regulation is follow Target Buffer tank temperature control specification
** No change of Target zone water temperature, only set higher buffer tank temperature.

   180


--- Page 181 ---
DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW (“Capacity 1) % *
(Max regulation depend on the tank max setting limit)

If Buffer selection is “NO”
Room side
New Target Zone Water Temperature = Current Target Zone Water Temperature * Remote Control Setting
(*Capacity 1) %
(Zone 1 and Zone 2 will change according to its own target zone water temperature.)
(Max regulation depend on the temperature control type select)

DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW (“Capacity 1) %
* (Max regulation depends on the tank max setting limit)

Setting temperature for cooling is changed
New Target water temperature = target water temperature + Remote Control setting for cool (*Capacity 1)
* (Min/Max regulation of cooling water set apply)

   While digital input is detected “ 11 “ (Capacity 2)
   o Setting temperature for heating and Tank is changed.
   However, which setting temperature is change depend on system setting.

If Buffer selection is “YES”
Room side
New Target Buffer tank temperature = Current Target Buffer Tank Temperature * Remote Control setting
(“ capacity 2) %
* Max Min regulation is follow Target Buffer tank temperature control specification
** No change of Target zone water temperature, only set higher buffer tank temperature.

DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW (“Capacity 2) %
* (Max regulation depends on the tank max setting limit)

If Buffer selection is “NO”
Room side
New Target Zone Water Temperature = Current Target Zone Water Temperature * Remote Control Setting
(*Capacity 2) %
(Zone 1 and Zone 2 will change according to it’s own target zone water temperature.)
(Max regulation depend on the temperature control type select)

DHW Tank side
New Tank Set Temperature = Tank Set Temperature * Remote Control setting for DHW (“Capacity 2) %
* (Max regulation depends on the tank max setting limit)
** This function is not applicable for Cooling mode.

Setting temperature for cooling is changed
New Target water temperature = target water temperature + Remote Control setting for cool (*Capacity 2)
* (Min/Max regulation of cooling water set apply)

   181


--- Page 182 ---
14.29 Demand Control (Optional PCB)
Remote control setting:
 When Optional PCB connection select ‘YES”, Demand Control function can select “YES” or “NO”.

Purpose:
 After the demand control select YES, below control will activated.
   o 0-10V Demand control

0-10V Demand control
 Demand control is use to reduce the current usage of heat pump unit by third party device.

Control start condition:
 Select “YES” at Demand control at installer menu.
 0-10V input for this electrical current control is detected.

Control content:
 If start condition is fulfilled, indoor will receive the voltage signal from optional PCB. Indoor will send the rate
   value to outdoor unit.
 Outdoor will change the current limit according to the percentage receive from indoor unit.

14.30 Holiday Mode
   Purpose:
   Promotes energy saving by allowing the user to stop the system during holiday and enables the system to
   resume at the preset temperature after holiday.

   Control details:
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

   Start condition:
   o Holiday timer set and the holiday timer start
   * The day holiday mode was set is counted as day 1.

   Stop condition:
   o OFF/ON button is pressed.
   o Holiday timer is reached.

   182


--- Page 183 ---
14.31 Dry Concrete
   Purpose
   Provide heat to floor heating panel and dry the wet concrete during installation.

   Setting condition:
   o Dry concrete parameter can be set through remote control under system setup.
   o Parameters are possible to set up to 99 days with different target set temperature

   Control details:
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

   Cancel condition:
   o Dry concrete mode is complete and OFF signal is received.
   o OFF signal is received by pressing OFF/ON button.

14.32 Flow Sensor
   The water flow sensor serves as an overload protector that shuts down the unit when the water level is detected
   to be low.
   Abnormal flow detection:

   Sequence   Abnormal flow   Normal flow
   Normal case   Flow rate < 7 l/min or ≥ 69 l/min   ≥ 7 l/min
   During status 2~6 on Anti-freeze deice   Flow rate ≥ 7 l/min   < 7 l/min

   183


--- Page 184 ---
15. Protection Control (WH-UDZ03KE5)
15.1   Protection Control for All Operations
15.1.1 Time Delay Safety Control
   1   The compressor will not start for three minutes after stop of operation.

15.1.2 30 Seconds Forced Operation
   1   Once the compressor starts operation, it will not stop its operation for 30 seconds.
   2   However, it can be stopped using control panel at indoor unit.

15.1.3 Total Running Current Control
   1   When the outdoor running current exceeds X value, the compressor frequency will decrease.
   2   If the outdoor running current does not exceed X value, the compressor frequency will return to normal
   operating frequency.
   3   If the outdoor running current continue to increase till exceed Y value, compressor will stop, and if this occurs
   3 times within 20 minutes, system will stop operation and OFF/ON control panel LED will blink (F16 error
   occurs).

   WH-UDZ03KE5
   Operation Mode   X (A)   Y (A)
   Heating   11.0   14.0
   Cooling   7.0   14.0

   A. DC Peak Current Control
   1 When the current to IPM exceeds set value, compressor will stop. Compressor will restart after three minutes.
   2 If the set value exceeds again for more than 30 seconds after the compressor restarts, operation will restart
   after two minutes.
   3 If the set value exceeds again for within 30 seconds after the compressor restarts, operation will restart after
   one minute. If this condition repeats continuously for seven times, system will stop operation and OFF/ON
   control panel LED will blink (F23 error occurs).

15.1.4 Compressor Overheating Prevention Control
   The compressor operating frequency is regulated in accordance to compressor tank temperature as shown in
   below figures. When the compressor tank temperature exceeds 112°C, compressor will stop, and if this occurs
   4 times within 30 minutes, system will stop operation and OFF/ON control panel LED will blink (F20 error occurs).

   Compressor = OFF
   112°C
   97°C
   Compressor
   Frequency Reduced
   110°C
   97°C
   Compressor
   Frequency Maintain
   108°C
   97°C
   Free

   Compressor tank temperature

   184


--- Page 185 ---
15.1.5 High Pressure Sensor Control
   Purpose:
   - To protect the system operation.
   Detection period:
   - After compressor on for 1 minute.
   Detection conditions:
   - When abnormal high voltage detection, 5 V or when open circuit detection 0V for 5 seconds continuously.
   After detection:
   - When abnormality is detected continue 5 seconds, unit stop operation.
   - OFF/ON control panel LED will blink (H64 error occurs).

15.1.6 Outside Temperature Current Control

   50°C   Compressor stop

   48°C

   23°C

   Max.   21°C
   current
   value is
   14°C
   regulated
   12°C

   -20°C

   -23°C
   Compressor stop

   Outdoor temperature

   185


--- Page 186 ---
15.2   Protection Control for Heating Operation
15.2.1 Outdoor Air Temperature Control
The maximum current value is regulated when the outdoor air temperature rises above 14°C in order to avoid
compressor overloading.

15.2.2 Deice Operation
When outdoor pipe temperature and outdoor air temperature is low, deice operation start where outdoor fan motor
stop.
Normally, deice start if pipe sensor temperature fulfill deice condition. If remote controller set to AUTO force defrost
setting, unit will start force deice after heat pump operate for 3 hours without deice at below outdoor temperature 5°C
or outdoor pipe sensor temperature fulfill deice condition and Deice accumulation timer reach 2 hours.

   Deice judging condition
   Outdoor Unit Deice Control
   10
   Deice starts depends:
   5   1. Outdoor air sensor temp.
   2. Outdoor pipe sensor temp.
   0
   OD Pipe Temperature (°C)

   3. Heating accumulation time.
   -5

   -10
   When Heating Time > 35 minutes
   -15   and Pipe Temperature below this
   line for continuous 3 minutes.
   -20

   -25

   -30
   -30   -20   -10   0   10   20   30
   Outdoor Temperature (°C)

Deice operation time diagram

   a. Deice mode 1 control:

   Free   Free
   Compressor   1   2   3   5   8   9
   4   6   7

   Four way valve   ON   ON
   OFF
   ID pump   ON   ON   ON

   OD fan   Free   Free

   OFF

   Expansion valve   Free

   max 9 minutes 30 seconds
   deice 1

15.2.3 Force Defrost Operation
Force defrost can be set through remote control with two selection (Manual OR Auto).

   If Manual defrost set, heat pump only run force defrost at heat mode when force defrost request from quick menu
   remote control.
   If Auto defrost set, heat pump automatically run force defrost operation when any of below conditions is
   achieved :
   i) after 3 hours heating accumulation time without defrost when ambient below 5°C.
   ii) after outdoor pipe sensor temperature fulfill deice condition and Deice accumulation timer reach 2 hours.
   * Deice accumulation timer will not reset when remote control is pressed OFF.

   186


--- Page 187 ---
15.3   Protection Control for Cooling Operation
15.3.1 Outdoor Air Temperature Control
   The Compressor operating frequency is regulated in accordance to the outdoor air temperature as shown in the
   diagram below.
   This control will begin 1 minute after the compressor starts.
   Compressor frequency will adjust base on outdoor air temperature.

   25°C   Free

   22°C
   Limited
   10°C   frequency

   8°C
   Compressor
   stop

15.3.2 Freeze Prevention Control 1
   1   When indoor heat exchanger temperature is lower than 0°C continuously for 10 seconds, compressor will
   stop operating.
   2   Compressor will resume its operation three minutes after the indoor heat exchanger is higher than 1°C.
   3   Indoor heat exchanger freeze prevention (H99) will memory in error history.

   187


--- Page 188 ---
16. Protection Control (WH-UDZ05KE5 WH-UDZ07KE5
   WH-UDZ09KE5)
16.1   Protection Control for All Operations
16.1.1 Time Delay Safety Control
   1   The compressor will not start for three minutes after stop of operation.

16.1.2 30 Seconds Forced Operation
   1   Once the compressor starts operation, it will not stop its operation for 30 seconds.
   2   However, it can be stopped using control panel at indoor unit.

16.1.3 Total Running Current Control
   1   When the outdoor running current exceeds X value, the compressor frequency will decrease.
   2   If the outdoor running current does not exceed X value, the compressor frequency will return to normal
   operating frequency.
   3   If the outdoor running current continue to increase till exceed Y value, compressor will stop, and if this occurs
   3 times within 20 minutes, system will stop operation and OFF/ON control panel LED will blink (F16 error
   occurs).

   UDZ05KE5   UDZ07KE5   UDZ09KE5
   Operation Mode   X (A)   Y (A)   Y (A)   Y (A)   X (A)   Y (A)
   Heating   12.5   14.6   14.9   16.9   14.9   16.9
   Cooling   8.5   14.6   14.1   16.9   14.1   16.9

   A. DC Peak Current Control
   1 When the current to IPM exceeds set value, compressor will stop. Compressor will restart after three minutes.
   2 If the set value exceeds again for more than 30 seconds after the compressor restarts, operation will restart
   after two minutes.
   3 If the set value exceeds again for within 30 seconds after the compressor restarts, operation will restart after
   one minute. If this condition repeats continuously for seven times, system will stop operation and OFF/ON
   control panel LED will blink (F23 error occurs).

16.1.4 Compressor Overheating Prevention Control
   The compressor operating frequency is regulated in accordance to compressor tank temperature as shown in
   below figures. When the compressor tank temperature exceeds 112°C, compressor will stop, and if this occurs
   4 times within 30 minutes, system will stop operation and OFF/ON control panel LED will blink (F20 error occurs).

   Compressor = OFF
   112°C
   97°C
   Compressor
   Frequency Reduced
   110°C
   97°C
   Compressor
   Frequency Maintain
   108°C
   97°C
   Free

   Compressor tank temperature

   188


--- Page 189 ---
16.1.5 High Pressure Sensor Control
   Purpose:
   - To protect the system operation.
   Detection period:
   - After compressor on for 1 minute.
   Detection conditions:
   - When abnormal high voltage detection, 5 V or when open circuit detection 0V for 5 seconds continuously.
   After detection:
   - When abnormality is detected 4 times within 120 minutes, unit stop operation.
   - OFF/ON control panel LED will blink (H64 error occurs).

16.1.6 Outside Temperature Current Control

   50°C   Compressor stop

   48°C

   23°C

   Max.   21°C
   current
   value is
   14°C
   regulated
   12°C

   -25°C

   -28°C
   Compressor stop

   Outdoor temperature

   189


--- Page 190 ---
16.2   Protection Control for Heating Operation
16.2.1 Outdoor Air Temperature Control
The maximum current value is regulated when the outdoor air temperature rises above 14°C in order to avoid
compressor overloading.

16.2.2 Deice Operation
When outdoor pipe temperature and outdoor air temperature is low, deice operation start where outdoor fan motor
stop.
Normally, deice start if pipe sensor temperature fulfill deice condition. If remote controller set to AUTO force defrost
setting, unit will start force deice after heat pump operate for 3 hours without deice at below outdoor temperature 5°C
or outdoor pipe sensor temperature fulfill deice condition and Deice accumulation timer reach 2 hours.

   Deice judging condition

   Outdoor Unit Deice Control
   10
   Deice start depends:
   5   1. Outdoor air sensor temp.
   2. Outdoor pipe sensor temp.
   OD Pipe Temperature (°C)

   0
   3. Heating accumulation time
   -5

   -10

   When Heating Time > 35 minutes
   -15
   and Pipe Temperature below this
   line for continuous 3 minutes
   -20

   -25

   -30
   -30   -20   -10   0   10   20   30
   Outdoor Temperature (°C)

Deice operation time diagram

   a. Deice mode 1 control:

   Free   Free
   Compressor   1   2   3   5   8   9
   4   6   7

   Four way valve   ON   ON
   OFF
   ID pump   ON   ON   ON

   OD fan   Free   Free

   OFF

   Expansion valve Free

   max 9 minutes 30 seconds
   deice 1

16.2.3 Force Defrost Operation
Force defrost can be set through remote control with two selection (Manual OR Auto).

   If Manual defrost set, heat pump only run force defrost at heat mode when force defrost request from quick menu
   remote control.
   If Auto defrost set, heat pump automatically run force defrost operation when any of below conditions is
   achieved :
   i) after 3 hours heating accumulation time without defrost when ambient below 5°C.
   ii) after outdoor pipe sensor temperature fulfill deice condition and Deice accumulation timer reach 2 hours.
   * Deice accumulation timer will not reset when remote control is pressed OFF.

   190


--- Page 191 ---
16.3   Protection Control for Cooling Operation
16.3.1 Outdoor Air Temperature Control
   The Compressor operating frequency is regulated in accordance to the outdoor air temperature as shown in the
   diagram below.
   This control will begin 1 minute after the compressor starts.
   Compressor frequency will adjust base on outdoor air temperature.

   25°C   Free

   22°C
   Limited
   10°C   frequency

   8°C
   Compressor
   stop

16.3.2 Freeze Prevention Control 1
   1   When indoor heat exchanger temperature is lower than 0°C continuously for 10 seconds, compressor will
   stop operating.
   2   Compressor will resume its operation three minutes after the indoor heat exchanger is higher than 1°C.
   3   Indoor heat exchanger freeze prevention (H99) will memory in error history.

   191


--- Page 192 ---
17. Servicing Guide
17.1 How to Take Out Front Plate
Open and Close Front Plate ⑯   Hook
1. Remove the 2 mounting screws of Front Plate ⑯.
2. Slide it upwards to unhook the Front Plate ⑯
   hook.
3. Reverse above steps 1~2 for close it.

   2X (screw)

   CAUTION
   Open or close the Front Plate carefully.
   The heavy Front Plate may injures the fingers.

17.2 Test Run
1. Before test run, make sure below items have been checked:-
   a) Pipework are properly done.
   b) Electric cable connecting work are properly done.
   c) Tank Unit is filled up with water and trapped air is released.
   d) Please turn on the power supply after filling the tank until full.
2. Switch ON the power supply of the Tank Unit. Then, please refer to the Operation Instruction for operation of
   Remote Controller ①.

   Note:
    During winter, turn on the power supply and standby the unit for at least 15 minutes before test run.
   Allow sufficient time to warm up refrigerant and prevent wrong error code judgement.

3. For normal operation, Water Pressure reading should be in between 0.05 MPa and 0.3 MPa (0.5 bar and 3 bar).
   If necessary, adjust the Water Pump ④ SPEED accordingly to obtain normal water pressure operating range. If
   adjust Water Pump ④ SPEED cannot solve the problem, contact your local authorized dealer.
4. After test run, please clean the Magnetic Water Filter Set ⑨. Reinstall it after finish cleaning.

17.3 Expansion Vessel ⑪ Pre Pressure Checking
For Space Heating / Cooling
 Expansion Vessel ⑪ with 10 L air capacity and initial pressure of 1 bar is installed in this Tank Unit.
 Total amount of water in system should be below 200 L.
   (Inner volume of Tank Unit’s piping is about 5 L)
 If total amount of water is over 200 L, please add another expansion vessel. (field supply)
 Please keep the installation height difference of system water circuit within 10 m.

   192


--- Page 193 ---
17.4 Pump Down Procedures
Refer below steps for proper pump down procedure.

   Press

   Press   SW & scroll
   [Screen 4]   to “Pump down”

   193


--- Page 194 ---
17.5 How To Adjust Pump Speed

   Press
   & scroll to
   “Installer setup”

   [Screen 4]

   - Press   or   SW to select & conﬁrm maximum duty. (Range: 0x40~0xFF)
   [Screen 5]

   - Range (0.1~99.9)L/min

   [Screen 6]

   Press   or   SW to select & conﬁrm operation

NOTE:
1.   Whenever at [Screen 5], if press   SW to OFF, pump operation should be turned OFF.
2.   Whenever at [Screen 6], if press   SW to OFF, pump operation should be turned OFF.

   194


--- Page 195 ---
17.6 How To Unlock Cool Mode
   Operation must be OFF

   Press (   +   +   ) SW’s
   continuously for 5secs

   Display latest status retrieved from EEPROM

   195


--- Page 196 ---
17.7 EEPROM Factory Default Data Setup Procedure

   Initialization   12:00am,Mon

   Initializing . . .

   - EEPROM default data setup is only possible during initialization process.

   - Press (   ,   ,   ,   ) simultaneously for 5secs continuously, initialization process
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

   196


--- Page 197 ---
17.8 Dry Concrete Setup

   Press
   & scroll to
   “Installer setup”

   [Screen 4]

   [Screen 5]   [Screen 6]

   Once ‘ON’ is confirm,
   stage 1 setup will start

   Every day stage will increment
   with its respective setup

   Next Page

   197


--- Page 198 ---
- Press   or   button to select no. of stages.
   - Press   to store latest status.
   - Press   button, display will return to [Screen 6].

   - If suppose to select 10 stages, then setup will start from stage 1/10.
   - Press   or   button to select set temperature.
   - Press   button to store latest status.

   - Move to next stage 2/10
   - Repeat the same procedure

- Move to next stage 10/10
- Repeat the same procedure.
- Press   to store latest status the the display will return to [Screen 4]
- Press   button to return to stage 9/10.

   Return to [Screen 6]

   198


--- Page 199 ---
18. Maintenance Guide
In order to ensure safety and optimal performance of the Tank Unit, seasonal inspections on the Tank Unit, field
wiring and piping have to be carried out at regular intervals. This maintenance should be carried out by authorized
dealer. Contact dealer for scheduled inspection.

   1. Charging and Discharging the Water
   Make sure all the piping installations are properly done before carry out below steps.
   Charge the Water
    For Domestic Hot Water Tank
   a. Set the Drain Tap n to “CLOSE”.

   “CLOSE”   “OPEN”

   Drain Tap n

   b. Set all Tap / Shower “OPEN”.
   c. Start filling water to the Domestic Hot Water Tank via Tube Connector . After 20~40min, water
   should flow out from Tap / Shower.
   Else, please contact your local authorized dealer.
   d. Check and make sure no water leaking at the tube connecting points.
   e. Set the Drain Tap n to “OPEN” for 10 seconds to release air from this pipeline. Then set it “CLOSE”.
   f. Turn the Safety Relief Valve (field supply) knob slightly and hold for 10 seconds to release air from
   this pipeline. Then recover the knob to original position.
   g. Ensure Step 5 & 6 is carried out each time after charging water to Domestic Hot Water Tank.
   h. To prevent back pressure from happening to the Safety Relief Valve (field supply), do turn the Safety
   Relief Valve (field supply) knob.

      For Space Heating / Cooling
   a. Turn the plug on the Air Purge Valve ⑫ outlet anticlockwise by one complete turn from fully closed
   position.

   Plug (turn
   anticlockwise by
   one complete turn)

   Air purge valve

   b. Set the Pressure Relief Valve ⑬ lever “DOWN”.

   Pressure relief valve
   Pressure relief valve

   Lever   Lever
   or

   Turn down   Turn down
   Pressure relief valve   Pressure relief valve

   c. Start filling water (with pressure more than 0.1 MPa (1 bar)) to the Space Heating / Cooling circuit via
   Tube Connector a . Stop filling water if the free water flow through Pressure Relief Valve ⑬ discharge
   hose.
   d. Turn ON the Tank Unit and make sure Water Pump ④ is running.
   e. Check and make sure no water leaking at the tube connecting points.
   f. The water may drip from this discharge hose. Therefore must guide the hose without close or block the
   outlet of the hose.

   199


--- Page 200 ---
Discharge the Water
    For Domestic Hot Water Tank
   a. Turn OFF power supply.
   b. Set the Drain Tap n to “OPEN”.
   c. Open Tap / Shower to allow air inlet.
   d. Turn the Safety Relief Valve (field supply) knob slightly and hold it until all air is released from this
   pipeline. Then recover the knob to original position after ensured the pipeline is emptied.
   e. After discharge, set Drain Tap n to “CLOSE”.

2. Check Water Pressure *(0.1 MPa = 1 bar)
   Water pressure should not lower than 0.05 MPa (with inspects the Water Pressure from Remote Controller).
   If necessary add water into Tank Unit (via Tube Connector a ).

3. Check Pressure Relief Valve ⑬
   o Check for correct operation of Pressure Relief Valve ⑬ by turning on the lever to become horizontal.
   o If you do not hear a clacking sound (due to water drainage), contact your local authorized dealer.
   o Push down the lever after finish checking.
   o In case the water keep on draining out from the Tank Unit, switch off the system, and then contact your
   local authorized dealer.

4. Reset Overload Protector (prefixed on Optional Back-up Heater (CZ-NB3))
   Overload Protector serves the safety purpose to prevent the water over heating. When the Overload
   Protector a trip at high water temperature, take below steps to reset it.
   a. Take out the cover.
   b. Use a test pen to push the centre button gently in order to reset the Overload Protector.
   c. Fix the cover to the original fixing condition.

   Use test pen to push
   this button for reset
   Overload protector.

   -   Must ensure that Overload Protector is fixed/installed on the Optional Back-up heater (CZ-NB3).
   -   Overload Protector Specifications:
    Operating Temperature : 80 ±3°C (OFF)
    Rated Voltage, Current : AC 250V, 16A; DC 12V, 50mA
    Type: Single pole single throw type thermostat with disk bimetal.
   -   For installation works of Optional Back-up Heater (CZ-NB3), refer to the Optional Back-up Heater
   (CZ-NB3) Installation Instruction.

   200


--- Page 201 ---
5. Maintenance for Magnetic Water Filter Set ⑨
   a. Turn OFF power supply.
   b. Place a container below Magnetic Water Filter Set ⑨.
   c. Turn to remove the Magnet Bar at bottom of Magnetic Water Filter Set ⑨.
   d. By using Allen key (8mm), remove the Cap of Discharge Port.
   e. By using Allen Key (4mm), open the Service Valve to release the dirty water from the Discharge Port into
   a container. Close the service valve when the container is full to avoid spillage in the tank unit. Dispose
   the dirty water.
   f. Reinstall the Cap of Discharge Port and Magnet Bar.
   g. Re-charging the water to Space Heating / Cooling circuit if necessary (refer Section 12.2.5 for details.)
   h. Turn ON power supply.

   Service
   Valve

   Discharge port
   Magnet Bar

   Open   Close

6. Maintenance for Safety Relief Valve (field supply)
   It is strongly recommended to operate the valve by turn the knob counter clockwise to ensure free water flow
   through discharge pipe at regular intervals to ensure it is not blocked and to remove lime deposit.

   Stagnant water in Tank Unit should be drained if it is not going to be operated for more than 60 days.

   201


--- Page 202 ---
18.1 Maintenance for Magnetic   18.1.2 Custom Menu
   Water Filter Set
   Setting method of Custom menu

 If forget Password and cannot operate remote controller
   Custom menu   12:00am,Mon
Press   for 5 sec.   Cool mode
Password unlock screen appears, press Confirm and it shall   Back-up heater
reset.
Password will become 0000. Please reset it again.   Reset energy monitor
(NOTE) Only display when it is locked by password.   Reset operation history
   Smart DHW
18.1.1 Maintenance Menu   Select   Confirm

   Please press   for 10 sec.
 Setting method of Maintenance menu   Items that can be set
   Cool mode (Set With/Without Cooling function) Default is
   without
 Maintenance menu   12:00am,Mon
   (NOTE) As with/without Cool mode may affect electricity
 Actuator check   application, please be careful and do not simply
 Test mode   change it.
   In Cool mode, please be careful if piping is not
 Sensor setup   insulated properly, dew may form on pipe and
 Reset password   water may drip on the floor and damage the floor.
   Select   Confirm   Back-up heater (Use/Do not use Back-up heater)
   (Optional)
   Default is without
Press   for 5 sec.   (NOTE) It is different from to use/not to use Back-up
Items that can be set   heater set by client. When this setting is used,
   heater power on due to protection against frost
   Actuator check (Manual ON/OFF all functional parts)
   will be disabled. (Please use this setting when
   (NOTE) As there is no protection action, please be careful
   it is required by utility company.)
   not to cause any error when operating each part
   By using this setting, it cannot defrost due to low
   (do not turn on pump when there is no water etc.)
   Heating’s setting temp and operation may stop
   Test mode (Test run)   (H75)
   Normally it is not used.   Please set under the responsibility of installer.
   Sensor setup (offset gap of detected temp of each sensor   When it stops frequently, it may be due to
   within -2~2°C range)   insufficient circulation flow rate, setting temp of
   (NOTE) Please use only when sensor is deviated.   heating is too low etc.
   It affects temperature control.   Reset energy monitor (delete memory of Energy monitor)
   Reset password (Reset password)   Please use when moving house and handover the unit.
   Reset operation history (delete memory of operation
   history)
   Please use when moving house and handover the unit.
   Smart DHW (Set Smart DHW mode Parameter)
   a) Start time: Tank reboil at lower ON Temp. onward.
   b) Stop time: Tank reboil at normal ON Temp. onward.
   c) ON Temp.: Tank Reboil Temp when Smart DHW start.

   202


--- Page 203 ---
18.1.3 Check Water Pressure from Remote Controller

 1. Press   SW and scroll to “System check”.
 2. Press   and scroll to “System information”.
 3. Press   and search for “Water pressure”.

   Non [Main Menu] screen

   Main menu   12:00am,Mon
   Function setup
   System check
   Personal setup
   Service contact
   Select   Conﬁrm

   System check   12:00am,Mon
   Energy monitor
   System information
   Error history
   Compressor
   Select   Conﬁrm

   System check   12:00am,Mon
   Energy monitor
   System information
   Error history
   Compressor
   Select   Conﬁrm

   System information   12:00am,Mon
   1. Inlet   :   25°C
   2. Outlet   :   20°C
   3. Zone 1   :   25°C
   4. Zone 2   :   20°C
   Page   Conﬁrm

Screens
shown are
for illustration
purposes only.
   System information   12:00am,Mon
   9. COMP frequency   : 95Hz
   10. Pump ﬂowrate   :   11.7 L/min
   11. Water pressure   : 1.51 bar

   Page   Conﬁrm

   203


--- Page 204 ---
18.1.4 Specifications

18.1.4.1   Specifications of fresh water was heat transfer medium in brazed heat
   exchanger

Parameter   Quality Limits for Tap Water on the Secondary Side
Temperature   Below 60°C
pH   7 to 9
Alkalinity   60mg/l < HCO₃ < 300mg/l
Conductivity   < 500μS/cm
Hardness   [Ca⁺, Mg⁺] / [HCO₃⁻] > 0.5
Chloride   < 200mg/l at 60°C
Sulphate   [SO₄²⁻] < 100mg/l and [HCO₃⁻] / [SO₄²⁻] > 1
Nitrate   NO₃ < 100mg/l
Chlorine   < 0.5mg/l

18.1.4.2   External filter
Solids in the water must be filtered.
Minimum filter mesh size required for the field supply external filter in the water inlet is 20 mesh.

   204


--- Page 205 ---
19. Troubleshooting Guide
19.1   Refrigeration Cycle System
In order to diagnose malfunctions, make sure that there
are no electrical problems before inspecting the
refrigeration cycle.
Such problems include insufficient insulation, problem
with the power source, malfunction of a compressor and a
fan.
The normal pressure of the refrigeration cycle depends
on various conditions, the standard values for them are
shown in the table on the right.

   205


--- Page 206 ---
19.2 Relationship between the Condition of the Air-to-Water Heatpump
   Indoor and Outdoor Units and Pressure and Electric Current

   Heating Mode   Cooling Mode

   Condition of the Air-to-
   Water Heatpump   Electric current   Electric current
   indoor and outdoor units   Low Pressure   High Pressure   Low Pressure   High Pressure
   during operation   during operation

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

   Carry out the measurements of pressure, electric current, and temperature fifteen minutes after an operation is
   started.

   206


--- Page 207 ---
19.3   Breakdown Self Diagnosis Function
19.3.1 Self Diagnosis Function (Three Digits Alphanumeric Code)
   When abnormality occur during operation, the system will stop operation, and OFF/ON control panel LED will
   blink and error code will display on the control panel.
   Even error code is reset by turning OFF power supply or by selecting ERROR RESET, if the system abnormality
   is still unrepaired, system will again stop operation, and OFF/ON control panel LED will again blinks and error
   code will be display.
   The error code will store in IC memory.

   To check the error code
   1 When an abnormality occurs, system will stop operation and OFF/ON control panel LED will blink.
   2 Error code of the abnormality will be display on the control panel.
   3 To determine the abnormality description, the error code table needs to be referred.

eg:

   Error number

   Blinking

   Press   to select Close / Reset then press

   To display past/last error code
   1 Turn ON power supply.
   2 Refer below procedure to retrieve the error code history.

   To permanently delete error code from IC memory
   1 Turn ON power supply.
   2 Refer below procedure to clear error history.

   207


--- Page 208 ---
Press   button
and select
“System Check”

   Press   SW to select
   [Screen 4]   “Error history”

   Display last 4 error retrieved from EEPROM

   208


--- Page 209 ---
19.4   Error Codes Table

Diagnosis display   Abnormality/Protection control   Abnormality judgement   Primary location to verify

   H00   No abnormality detected   —   —
    Indoor/outdoor connection wire
    Indoor/outdoor PCB
   H12   Indoor/Outdoor capacity unmatched   90s after power supply
    Specification and combination table in
   catalogue
   Outdoor compressor temperature sensor    Compressor temperature sensor
   H15   Continue for 5 sec.
   abnormality   (defective or disconnected)
    Indoor PCB
   H20   Water pump abnormality   Continue for 10 sec.
    Water pump (malfunction)
   Indoor refrigerant liquid temperature    Refrigerant liquid temperature sensor
   H23   Continue for 5 sec.
   sensor abnormality   (defective or disconnected)
    High pressure sensor (defective or
   H27   Service valve error   Continue for 5 minutes
   disconnected)
    Solar temperature sensor (defective or
   H28   Abnormal solar sensor   Continue for 5 sec.
   disconnected)
    Pool temperature sensor (defective or
   H31   Abnormal swimming pool sensor   Continue for 5 sec.
   disconnected)
    Buffer tank sensor (defective or
   H36   Abnormal buffer tank sensor   Continue for 5 sec.
   disconnected)
   When indoor and outdoor
   H38   Brand code not match   —
   brand code not same
    Outdoor pipe temperature sensor
    Clogged expansion valve or strainer
   H42   Compressor low pressure abnormality   —    Insufficient refrigerant
    Outdoor PCB
    Compressor
   H43   Abnormal Zone 1 sensor   Continue for 5 sec.    Water temperature Zone 1 sensor
   H44   Abnormal Zone 2 sensor   Continue for 5 sec.    Water temperature Zone 2 sensor
   H62   Water flow switch abnormality   Continue for 1 min.    Water flow switch
    Outdoor low pressure sensor
   *H63   Refrigerant low pressure abnormality   Continue for 5 sec.
   (defective or disconnected)
    Outdoor high pressure sensor
   H64   Refrigerant high pressure abnormality   Continue for 5 sec.
   (defective or disconnected)
    Water flow switch sensor (defective or
   disconnected)
   *H65   Deice circulation error   Continue for 10 sec.
    Water pump malfunction
    Buffer tank (is used)
   H67   Abnormal External Thermistor 1   Continue for 5 sec.    Room temperature Zone 1 sensor
   H68   Abnormal External Thermistor 2   Continue for 5 sec.    Room temperature Zone 2 sensor
    Back-up heater OLP
   H70   Back-up heater OLP abnormality   Continue for 60 sec.
   (Disconnection or activated)
   H72   Tank sensor abnormal   Continue for 5 sec.    Tank sensor
   Communication or transfer
   H74   PCB communication error    Indoor main PCB and Sub PCB
   error
   Room heater disable and deice
    Heater operation must enable to
   H75   Low water temperature control   request to operate under low
   increase water temperature
   water temperature
   Indoor - control panel communication    Indoor - control panel
   H76   —
   abnormality   (defective or disconnected)
    Internal/external cable connections
   H90   Indoor/outdoor abnormal communication   > 1 min after starting operation
    Indoor/Outdoor PCB
    Tank heater OLP
   H91   Tank heater OLP abnormality   Continue for 60 sec.
   (Disconnection or activated)
   H95   Indoor/Outdoor wrong connection   —    Indoor/Outdoor supply voltage
    Outdoor high pressure sensor
   Outdoor high pressure overload
    Water pump or water leakage
   protection
   H98 / F95   —    Clogged expansion valve or strainer
   Cooling high pressure overload
   protection    Excess refrigerant
    Outdoor PCB
    Indoor heat exchanger
   H99   Indoor heat exchanger freeze prevention   —
    Refrigerant shortage
   4 times occurrence within
   F12   Pressure switch activate    Pressure switch
   20 minutes
   4 times occurrence within
   F14   Outdoor compressor abnormal revolution    Outdoor compressor
   20 minutes
   2 times occurrence within    Outdoor PCB
   F15   Outdoor fan motor lock abnormality
   30 minutes    Outdoor fan motor
   3 times occurrence within    Excess refrigerant
   F16   Total running current protection
   20 minutes    Outdoor PCB

   209


--- Page 210 ---
Diagnosis display   Abnormality/Protection control   Abnormality judgement   Primary location to verify

    Compressor tank temperature sensor
    Clogged expansion valve or strainer
   Outdoor compressor overheating   4 times occurrence within
   F20    Insufficient refrigerant
   protection   30 minutes
    Outdoor PCB
    Compressor
   IPM (power transistor) overheating   3 times occurrence within    Improper heat exchange
   F22
   protection   30 minutes    IPM (Power transistor)
   Outdoor Direct Current (DC) peak   7 times occurrence    Outdoor PCB
   F23
   detection   continuously    Compressor
    Insufficient refrigerant
   2 times occurrence within
   F24   Refrigeration cycle abnormality    Outdoor PCB
   20 minutes
    Compressor low compression
   Cooling/Heating cycle changeover   4 times occurrence within    4-way valve
   F25
   abnormality   30 minutes    V-coil
   F27   Pressure switch abnormality   Continue for 1 min.    Pressure switch
    Discharge Temperature Sensor
   1 times occurrence within    Discharge Pressure Sensor
   F29   Low Discharge Superheat
   2550 minutes    Pressure Switch
    Outdoor PCB
    Water outlet sensor 2 (defective or
   F30   Water outlet sensor 2 abnormality   Continue for 5 sec.
   disconnected)
   F32   Abnormal Internal Thermostat   Continue for 5 sec.    Control panel PCB thermostat
   Outdoor air temperature sensor    Outdoor air temperature sensor
   F36   Continue for 5 sec.
   abnormality   (defective or disconnected)
   Indoor water inlet temperature sensor    Water inlet temperature sensor
   F37   Continue for 5 sec.
   abnormality   (defective or disconnected)
   Outdoor discharge pipe temperature    Outdoor discharge pipe temperature
   F40   Continue for 5 sec.
   sensor abnormality   sensor (defective or disconnected)
   4 times occurrence within
   F41   PFC control    Voltage at PFC
   10 minutes
   Outdoor heat exchanger temperature    Outdoor heat exchanger temperature
   F42   Continue for 5 sec.
   sensor abnormality   sensor (defective or disconnected)
    Outdoor defrost sensor (defective or
   F43   Outdoor defrost sensor abnormality   Continue for 5 sec.
   disconnected)
   Indoor water outlet temperature sensor    Water outlet temperature sensor
   F45   Continue for 5 sec.
   abnormality   (defective or disconnected)
    Insufficient refrigerant
   Outdoor Current Transformer open
   F46   —    Outdoor PCB
   circuit
    Compressor low
   Outdoor EVA outlet temperature sensor    Outdoor EVA outlet temperature sensor
   F48   Continue for 5 sec.
   abnormality   (defective or disconnected)
   Outdoor bypass outlet temperature    Outdoor bypass outlet temperature
   F49   Continue for 5 sec.
   sensor abnormality   sensor (defective or disconnected)
Note: * This error code is not applicable for this system.

   210


--- Page 211 ---
19.5   Self-diagnosis Method
19.5.1 Connection Capability Rank Abnormality (H12)
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
   Yes
   Does H12 error occur immediately after installation?

   No

Yes Has the installation set-up being   No
   Does H12 error occur after a certain period of usage?
   modified at control panel.
   No   Yes

   No   Has any indoor or outdoor PCB being replaced or
   serviced?
   Yes

   Check the spare part number and compare against the
   part list.

   Is the outdoor unit model and capacity within the rank of   No
   Change indoor PCB and/or   No   Does spare part number match with the indoor/outdoor   allowable indoor unit capacity?
   outdoor PCb for specified model.   model?   All in one   Allowable Outdoor
   Yes   WH-ADC0309K0E5A   WH-UDZ03KE5
   WH-UDZ05KE5
   No   WH-UDZ07KE5
   Has the indoor PCB being replaced anew?   WH-UDZ09KE5
   Yes   Yes

   No
   Set the capacity rank at control panel (refer I/I).   Has the capacity rank being set at the control panel?

   Rectify the model selection.
   After capacity is set, turn off the breaker and turn on the
   power again to operate the unit.

   211


--- Page 212 ---
19.5.2 Compressor Tank Temperature Sensor Abnormality (H15)
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
   No   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the compressor tank temperature sensor:
   - Plug out connector from the outdoor unit PCB (main).
   - Measure the resistance of the compressor tank
   temperature sensor.

   Compressor Tank / Compressor Discharge
   Sensor Characteristic
   350
   Is the measured resistance of the   - Defect in compressor tank
   300
   compressor tank temperature sensor   No   temperature sensor.
   250
   matches the value specified in its
   Resistance (K)

   - Replace the compressor tank
   200
   characteristic chart?   temperature sensor.
   150

   100

   50
   Yes
   0
   - Defect in outdoor unit PCB (main).
   -10   0   10   20   30   40   50   - Replace the outdoor unit PCB (main).
   Temperature (° C)

   212


--- Page 213 ---
19.5.3 Water Pump Abnormality (H20)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Turn OFF the power.   - Connector
   Check if the water   No   poor contact.
   Turn ON the power and   pump connector   - Correct the
   operate the water pump.   connection normal?   connection.
   Yes
   No   Disconnect the water pump
   Does it operate?   connector CN-PUMP1.
   Turn ON the power and
   Yes   check the input voltage of
   the water pump from
   Stop the water pump.   indoor unit PCB.

   Check the feedback   Is the water pump drive
   signal from water pump   power supply voltage   No   Replace the
   to indoor unit PCB.   range between
   indoor unit PCB.
   280~373Vdc
   (pin1 & 4) generated?
   Operate the water pump,   Yes
   is feedback signal (pulse)   No   Replace the
   water pump.   Is the water pump control
   generated between   No   Replace the
   power supply 15Vdc
   pin7 & 4 of CN-PUMP1?   indoor unit PCB.
   (pin5 & 4) generated?
   Yes   Yes
   Replace the
   indoor unit PCB.   Operate the water pump,
   is the duty command   No   Replace the
   range between 0~6Vdc   indoor unit PCB.
   (pin6 & 4) generated?

   Yes   Replace the
   water pump.

   213


--- Page 214 ---
19.5.4 Indoor Refrigerant Liquid Temperature Sensor Abnormality (H23)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the indoor refrigerant liquid
   temperature sensor are used to determine sensor error.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty indoor unit PCB (main).

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH1 connector connection:
   - Turn OFF the power.
   - Check the connector connection.

   Is the CN-TH1 connector
   No   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the indoor refrigerant liquid temperature sensor:
   - Plug out connector from the outdoor unit PCB (main).
   - Measure the resistance of the indoor refrigerant liquid
   temperature sensor.

   Indoor Refrigerant Liquid / Water Inlet / Water
   Outlet Sensor Characteristic
   120
   110   Is the measured resistance of the   - Defect in indoor refrigerant liquid
   100
   indoor refrigerant liquid temperature   No   temperature sensor.
   90
   sensor matches the value specified   - Replace the indoor refrigerant
   Resistance (K)

   80
   70
   60
   in its characteristic chart?   liquid temperature sensor.
   50
   40
   30
   20
   Yes
   10   - Defect in indoor unit PCB (main).
   0
   -10   0   10   20   30   40   50   - Replace the indoor unit PCB (main).
   Temperature (°C)

   214


--- Page 215 ---
19.5.5 Service Valve Error (H27)
Malfunction Decision Conditions:
   During cooling operation, when:-
   [a] Indoor refrigerant pipe temperature at compressor startup - present indoor refrigerant pipe temperature < 2°C
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the 3 way valves.

   Yes
   Is the 3 way valve closed?   Open the 3 way valve.

   No

   Check for clogged
   expansion valve or strainer.

   - Replace the expansion
   Is the expansion valve or   Yes   valve and/or strainer.
   strainer clogged (ice formed)?   - Reclaim and recharge
   refrigerant.
   No
   Check the indoor ref. pipe
   temperature sensor.

   Does it conform to the   No   Replace the indoor ref. pipe
   sensor characteristic chart?   temperature sensor.
   Yes

   Turn ON the power and measure the DC
   voltage pin 1 & 3 (GND) of CN-HPS before
   and after run the system.

   - Defect in outdoor unit
   Is the measured voltage   No
   PCB (main).
   before and after run the
   - Replace the outdoor
   system unchanged?
   unit PCB (main).

   Yes   - Defect in outdoor high
   pressure sensor.
   - Replace the outdoor
   high pressure sensor.

   215


--- Page 216 ---
19.5.6 Abnormal Solar Sensor (H28)
Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty solar sensor.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent
   Abnormal solar sensor   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   NO
   H28 happens check connection at CN207 normal?   ●   Correct sensor connection

   YES

   NO
   Measure resistance of sensor match characteristic?   ●   Change solar sensor

   YES

   Change Indoor sub PCB

   216


--- Page 217 ---
19.5.7 Abnormal Swimming Pool Sensor (H31)
Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty swimming pool sensor.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent
   Abnormal swimming pool sensor   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   H31 happens check connector sensor at CN204 connection   NO
   ●   Correct sensor connection
   normal ?

   YES

   Measure sensor resistance match swimming pool sensor   NO
   ●   Change swimming pool sensor
   characteristic?

   YES

   Change Indoor sub PCB

   217


--- Page 218 ---
19.5.8 Abnormal Buffer Tank Sensor (H36)
Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty buffer tank sensor.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent
   Abnormal buffer tank sensor   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   NO
   H36 check buffer tank sensor connection at CN5 normal?   ●   Correct connection

   YES

   Disconnect sensor from sub PCB measure resistance of sensor   NO
   ●   Change buffer tank sensor
   and compare against characteristic same?

   YES

   Change sub PCB

   218


--- Page 219 ---
19.5.9 Brand Code Not Matching (H38)
Malfunction Caused:
   1 Indoor and outdoor brand code not match.

   For safety reason and to prevent
   Brand code not match   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   NO
   Check the brand of indoor and outdoor unit both Panasonic?   ●   Use only Panasonic units.
   ●   Change to Panasonic unit.
   YES

   Change PCB outdoor

   219


--- Page 220 ---
19.5.10 Compressor Low Pressure Protection (H42)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the outdoor unit
   fan motor operation.

   Is the outdoor unit fan   No   Replace the outdoor unit
   Check the dust accumulation on the   fan motor and/or outdoor
   outdoor unit heat exchanger.   motor operate normally?
   unit PCB (main).
   Yes

   Is the outdoor unit heat   Yes   Check for gas leakage.
   Clean the heat exchanger.
   exchanger dirty?
   - Repair the pipe flare or
   No   Yes
   Is the oil oozing out from   union nuts.
   Check the outdoor air   the 2/3 way valve?   - Reclaim and recharge
   passage.
   No   refrigerant.
   Check for clogged
   Yes   Provide sufficient air
   Is there any short circuit?   expansion valve or stainer.
   passage.
   No   - Replace the expansion
   Is the expansion valve or   Yes   valve and/or strainer.
   Check the 2-way valve.   strainer clogged (ice formed)?   - Reclaim and recharge
   No   refrigerant.

   Yes   Reclaim and recharge for a
   Is the 2 way valve partially   specified amount of fresh refrigerant.
   Open the 2 way valve.
   closed?   - Replace the outdoor unit
   PCB (main).
   Is abnormality happened   Yes
   No   - Replace the outdoor pipe
   again?   temperature sensor.
   - Replace the compressor.
   No
   Procedure complete

   220


--- Page 221 ---
19.5.11 Abnormal Zone 1 Sensor (H43)
Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty buffer tank sensor.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent
   Abnormal zone 1 sensor   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   Check the turn off power check connector connection

   NO   ●   Poor contact
   Normal?
   ●   Correct connection

   YES

   Check plug out connector from zone 1 connector sub PCB in
   NO   ●   Defective zone sensor
   the PCB measure resistance of zone 1 sensor characteristic
   ●   Replace sensor
   match?

   YES

   ●   Defective PCB
   ●   Replace PCB

   221


--- Page 222 ---
19.5.12 Abnormal Zone 2 Sensor (H44)
Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty buffer tank sensor.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent
   Abnormal zone 2 sensor   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   Turn off power check connector connection normal?   ●   Correct abnormal connection

   YES

   Plug out from sub PCB, check sensor characteristics measure   NO
   ●   Change sensor zone 2
   resistance is it match?

   YES

   Change PCB

   222


--- Page 223 ---
19.5.13 Water Flow Switch Abnormality (H62)
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

   For safety reason and to prevent component breakdown,
   Troubleshooting:   Caution   always switch off the power before remove and connect the component.

   Is the CN4 connector   No   - Connector poor contact.
   Check the system water pump   connection normal?   - Correct the connection.

   Yes
   No   Replace the faulty water   Check the Vdc from the indoor unit PCB
   Is the water pump working?   (main):
   pump
   - Disconnect flow sensor from the indoor   - Defect in indoor unit PCB
   No   (main).
   Yes   unit PCB terminal CN-FLWSEN
   - Turn ON the power.   - Replace the indoor unit PCB
   - Measure the Vdc as shown in Figure 1   (main).
   Check the water system passage
   (pin 1 and 3)
   - Is the Vdc measurement 5Vdc?

   Yes   Yes
   Is there any water leakage   Fix the water leakage
   - Defect in flow sensor.
   - Replace the flow sensor
   No
   5V
 Check the CN-FLWSEN connector connection:   CN-FLWSEN 1   BR
   C92   1
 - Turn OFF the power.   5Vdc   W
   0.1u   C80   B
   FLOW
 - Check the connector connection   16V   0.047u
   R127 R130   SENSOR
   1k 10k   BL
   25V   4
   G1 4

   Figure 1

   223


--- Page 224 ---
19.5.14 Outdoor High Pressure Abnormality (H64)
Malfunction Decision Conditions:
   During operation of cooling and heating, when the outdoor high pressure sensor output signal is 0 Vdc or 5 Vdc.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue 4 times in 20 minutes.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-HPS connector connection:
   - Turn OFF the power.
   - Check the connector connection.
   Reconnect the high pressure sensor
   connector to the outdoor unit PCB
   No   (main). Turn ON the power and run
   Is the CN-HPS connector   - Connector poor contact.
   the system. Measure the DC voltage
   connection normal?   - Correct the connection.
   pin 1 & 3 (GND) of CN-HPS.
   Yes
   - Defect in outdoor unit
 Check the continuity of the outdoor unit PCB (main)   Is the measured voltage   No   PCB (main).
 high pressure sensor connector CN-HPS:   0 Vdc or 5 Vdc?   - Replace the outdoor
 - Plug out connector from the outdoor unit PCB (main).   unit PCB (main).
 - Measure the continuity pin 1 & 3 (GND) and pin 1 &
   4 (5 V) of CN-HPS.   Yes   - Defect in outdoor high
   pressure sensor.
   - Detect in outdoor unit   - Replace the outdoor
   Yes
   Is there any continuity?   PCB (main).   high pressure sensor.
   - Replace the outdoor
   unit PCB (main).
   No

   224


--- Page 225 ---
19.5.15 Deice Circulation Error (H65)
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

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   During deice (mode 2), check if
   indoor unit water pump operates.
   No

   Check if internal water pump   Use buffer tank to   CAUTION
   is used and it is directly   Yes   separate external
   installed to the air-to-water   water pump from
   Panasonic
   heatpump indoor unit circuit.   air-to-water heatpump   Air-to-Water   External
   Heatpump   Pump
   (without buffer tank)   indoor unit circuit.   Indoor Unit

   No
   ● When external pump is used, be sure to install
   Stop operation and turn OFF power.   it in independent water circuit and not direct to
   Plug out the connector of water flow   the air-to-water heatpump indoor unit circuit.
   switch (CN-FLOW) in the indoor unit
   PCB and measure its continuity.

   - Defect in indoor unit water
   Yes   flow switch.
   Is there any continuity?
   - Replace the indoor unit
   water flow switch.
   No
   - Defect in indoor unit PCB.
   - Replace the indoor unit PCB.

   Turn OFF the power.
   Disconnect indoor unit
   water pump connector
   CN-PUMP1. Operate the   - Defect in indoor unit water
   No   pump.
   auto-water heatpump unit.
   During deice (mode 2),   - Replace the indoor unit
   check if the indoor unit   water pump.
   water pump duty command
   signal generated?

   Yes   - Defect in indoor unit PCB.
   - Replace the indoor unit PCB.

   225


--- Page 226 ---
19.5.16 Abnormal External Thermistor 1 (H67)
Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty room temperature zone 1 sensor.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent
   Abnormal external thermistor 1   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   NO
   Check CN205 connector on sub PCB normal?   ●   Correct connection

   YES

   Disconnect sensor from sub PCB measure resistance of sensor   NO
   ●   Change external thermistor 1
   and compare against sensor characteristic same?

   YES

   Change sub PCB

   226


--- Page 227 ---
19.5.17 Abnormal External Thermistor 2 (H68)
Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty room temperature zone 2 sensor.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent
   Abnormal external thermistor 2   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   NO   ●   Correct external thermistor 2 sensor
   Check connector CN205 on sub PCB normal?
   connector

   YES

   Check resistance of external thermistor 2 compare against   NO
   ●   Change external thermistor 2
   characteristic of external thermistor same?

   YES

   Change sub PCB

   227


--- Page 228 ---
19.5.18 Indoor Backup Heater OLP Abnormality (H70)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Is the abnormality happened during   No   - Defect in indoor unit PCB (main).
   operation of indoor backup heater?   - Replace the indoor unit PCB (main).

   Yes
   Check indoor backup heater OLP   Use a test pen to push
   Check the indoor backup heater incoming   continuity:   this button to reset OLP
   AC power supply (2):   - Turn OFF power supply.
   - Turn ON power supply (2) & RCCB.   - Reset heater 1 OLP.
   - Measure the AC voltage between RCCB’s   - Measure the continuity of OLP.
   L1 & N1.
   - Measure the AC voltage between PCB’s
   AC2-L3 & AC2-N2.   Multimeter to
   - Defect in RCCB.   Is there any continuity?
   measure continuity
   - Replace RCCB.
   No   - Terminal board assembly
   Is measured voltage 230Vac?   connector poor contact.   - Defect in indoor backup
   - Correct the connection or   No   heater OLP.
   Yes   replace the indoor unit   - Replace indoor backup
   PCB (main).   heater OLP.
   Check the CN-OLP1 connector connection:
   - Turn OFF the power.
   - Check the connector connection.   - Defect in indoor unit
   Yes   PCB (main).
   No   - Replace the indoor unit
   Is the CN-OLP1 connector   - Connector poor contact.
   PCB (main).
   connection normal?   - Correct the connection.
   Yes

   228


--- Page 229 ---
19.5.19 Tank Temperature Sensor Abnormality (H72)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Is the abnormality happened during   No   - Defect in indoor unit PCB (main).
   tank connection set to ON?   - Replace the indoor unit PCB (main).

   Yes

   Check the terminal board assembly no. 15 and
   Is the terminal board assembly   No
   no.16, and CN-TH2 connector connections:   - Connector poor contact.
   no. 15 and no. 16, and CN-TH2
   - Turn OFF the power.   - Correct the connection.
   connector connections normal?
   - Check the connector connections.
   Yes
   Tank Sensor Characteristics   Check the tank temperature sensor:
   11   - Plug out connector from the indoor unit PCB (main).
   10
   9
   - Measure the resistance of the tank temperature
   8   sensor.
   Resistance (K)

   7
   6
   5
   4
   3   Is the measured resistance of the
   2   No   - Defect in tank temperature sensor.
   tank temperature sensor matches
   1   - Replace the tank temperature
   0   the value specified in its
   -10   0   10   20   30   40   50   sensor.
   characteristic chart?
   Temperature (°C)

   Yes
   - Defect in indoor unit PCB (main).
   - Replace the indoor unit PCB (main).

   229


--- Page 230 ---
19.5.20 PCB Communication Error (H74)
Malfunction Decision Conditions:
   When External PCB connection is select “YES” and no communication with External PCB micon for 10 seconds
   and above.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty indoor PCB.
   3 Faulty indoor sub PCB.

Abnormality Judgment:
   After 1 minute operation started.

   For safety reason and to prevent
   PCB communication error   component breakdown, always switch
   Caution   off the power before remove and
   connect the component.

   NO
   H74 happens check connection at CN-PWR normal?   ●   Correct connection at CN-PWR

   YES

   NO
   Check CN-PWR 230/240 V?   ●   Abnormal AC POWER supply

   YES

   NO
   Check CN-COMM situation on terminal 1 & 2 and 3 & 1   ●   Replace sub PCB

   YES

   Replace indoor PCB

   230


--- Page 231 ---
19.5.21 Indoor-Control Panel Communication Abnormality (H76)
Malfunction Decision Conditions:
   During standby and operation of cooling and heating, indoor-control panel error occur.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty control panel.
   3 Faulty indoor unit PCB (main).
   For safety reason and to prevent component breakdown,
   Troubleshooting:   Caution   always switch off the power before remove and connect the component.

  Check the CN4 connector connection:
  - Turn OFF the power
  - Check the connector connection
   Check the Vdc from the indoor unit PCB (main):
   - Disconnect remote control from the indoor unit PCB   - Defect in remote control
   terminal CN4   Yes   (control panel).
   Is the CN4 connector   No   - Connector poor contact.   - Turn ON the power.   - Replace the remote
   connection normal?   - Correct the connection.   - Measure the Vdc as shown in Figure 1.   control (control panel).
   - Is the Vdc measurement 16Vdc?
   Yes
   No
   Check the control panel
   cable connection.   - Defect in indoor unit PCB
   (main).
   - Replace the indoor unit PCB   16Vdc
   (main).
   Is the control panel cable   No   - Defect in cable connection.
   connection normal?   - Replace control panel cable.
   Figure 1

   Yes

   231


--- Page 232 ---
19.5.22 Indoor/Outdoor Abnormal Communication (H90)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the indoor-outdoor
   units connection wires.

   Yes   Correct the indoor-outdoor
   Is there any wiring error?
   units connection wires.
   No
   Turn OFF the power and disconnect
   terminal 3 wire. Turn ON the power
   and measure Vdc between terminal
   2 & 3 from the outdoor unit.

   Is the Vdc fluctuate   No
   Replace the outdoor unit
   between 45-60 Vdc?   PCB (main).
   Yes
   Turn OFF the power and reconnect
   terminal 3 wire. Turn ON the power
   and again measure Vdc between
   terminal 2 & 3 from outdoor unit.

   No
   Is the Vdc fluctuate   Replace the indoor unit
   between 15-60 Vdc?   PCB (main).

   232


--- Page 233 ---
19.5.23 Tank Booster Heater OLP Abnormality (H91)
Malfunction Decision Conditions:
   During operation of tank booster heater, and tank booster heater OLP open circuit.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty tank booster heater overload protector (OLP).
   3 Faulty indoor unit PCB (main).

Abnormality Judgment:
   Continue for 60 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   Caution   always switch off the power before remove and connect the component.

   Does the abnormality happen during   Yes   - Defect in indoor unit PCB (main).
   operation of tank booster heater?   - Replace the indoor unit PCB (main).

   No
   Check the CN6 connector connection:
   No
   - Turn OFF the power.   - Connector poor contact.
   - Check the connector connection. Is the   - Correct the connection.
   CN6 connector connection normal?
   Yes
   Turn OFF the power and
   disconnect OLP lead wire.
   Yes
   Turn ON the power   Replace the tank heater booster heater OLP
   and measure Vdc between
   CN6 connector.
   Is there 12Vdc? See Fig 1   CN6

   No   12Vdc   OLP BOOSTER
   HEATER

   Replace the indoor unit main PCB   ROOM TEMP.
   ZONE 1

   Fig 1

   233


--- Page 234 ---
19.5.24 Unspecified Voltage between Indoor and Outdoor (H95)
Malfunction Decision Conditions:
   The supply power is detected for its requirement by the indoor/outdoor transmission.

Malfunction Caused:
   1 Insufficient power supply.
   2 Faulty outdoor unit PCB (noise filter/main).

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the supply voltage.
   - Defect in outdoor unit
   Is the measured AC voltage   No   PCB (main).
   No   Correct the power   230 V?   - Replace the outdoor unit
   Supply voltage as specified?
   supply.   PCB (main).
   Yes
   Yes
   Check the rectification voltage
   Check the AC voltage from outdoor unit PCB (noise filter):   between DCP & DCN.
   - Turn OFF the power.
   - Plug out connector AC-BLK, CN-BLK & CN-WHT from   - Defect in outdoor unit
   the outdoor unit PCB (noise filter).   Is the measured voltage   No   PCB (main).
   - Turn ON the power.   between DCP & DCN~325 Vdc?   - Replace the outdoor unit
   - Measure the AC voltage between AC-BLK & CN-WHT.   PCB (main).
   Yes
   - Defect in outdoor   Check the DC filter (capacitor)
   Is the measured AC voltage   No   unit PCB (noise filter).   PCB connector connection.
   230 V?   - Replace the outdoor
   unit PCB (noise filter).
   Yes
   Is the DC filter (capacitor) PCB   No   - Connector poor contact.
   Check the AC voltage supply to outdoor unit PCB (main):
   connector connection normal?   - Correct the connection.
   - Turn OFF the power.
   - Reconnect connector AC-BLK, CN-BLK & CN-WHT to
   the outdoor unit PCB (noise filter).   Yes   - Defect in outdoor unit
   - Turn ON the power.   PCB (main).
   - Measure the AC voltage between AC-BLK & CN-WHT.   - Replace the outdoor unit
   PCB (main).

   234


--- Page 235 ---
19.5.25 Outdoor High Pressure Protection (H98 / F95)
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

   For safety reason and to prevent component breakdown,
   Troubleshooting:   Caution   always switch off the power before remove and connect the component.

   Operation Mode
   Heating / Tank

   Check the system water pump.   Check the 2/3 way valve.

   No   Yes
   Replace the faulty water   Is the 2/3 way valve closed?   Open the 2/3 way valve.
   Is the water pump working?   pump.

   Yes   No
   Check for clogged expansion
   Check the system water
   valve or strainer.
   flow rate.
   - Replace the expansion
   Is the expansion valve or   Yes   valve and/or strainer.
   Is the water pump speed   No   strainer clogged (ice formed)?   - Reclaim and recharge
   Readjust the water
   adjusted according to system   refrigerant.
   pump speed.   No
 hydraulic external static pressure?

   Yes   Check refrigerant amount.

  Check the system water passage.
   No   Reclaim and recharge with
   Is the additional refrigerant
   correct amount of
   amount filled correctly?
   refrigerant.
   Yes   Fix the system water
   Is there any water leakage?
   leakage.   Yes   - Replace the outdoor unit
   PCB (main).
   No
   - Replace the outdoor high
   pressure sensor.

   235


--- Page 236 ---
For safety reason and to prevent component breakdown,
   Troubleshooting:   Caution   always switch off the power before remove and connect the component.

   Operation Mode

   Cooling

   Check the outdoor unit fan
Check the dust accumulation on the   motor operation.
   outdoor unit heat exchanger.
   No   Replace the outdoor unit
   Is the outdoor unit fan
   fan motor and/or outdoor
   motor operate normally?
   Yes   unit PCB (main).
   Is the outdoor unit heat
   Clean the heat exchanger.   Yes
   exchanger dirty?
   Check for clogged
   No   expansion valve or strainer.
   Check the outdoor air   - Replace the expansion
   passage.   Is the expansion valve or   Yes   valve and/or strainer.
   strainer clogged (ice formed)?   - Reclaim and recharge
   Yes   refrigerant.
   Provide sufficient air   No
   Is there any short circuit?
   passage
   Check refrigerant amount.
   No

   Check the 2 way valve.   No   Reclaim and recharge with
   Is the additional refrigerant
   correct amount of
   amount filled correctly?
   refrigerant.
   Yes   Yes   - Replace the outdoor unit
   Is the 2 way valve closed?   Open the 2 way valve.   PCB (main).
   - Replace the outdoor high
   No   pressure sensor.

   236


--- Page 237 ---
19.5.26 Indoor Freeze-up Protection (H99)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the system water pump.

   Check for clogged
   No   Replace the faulty water   expansion valve or strainer.
   Is the water pump working?   pump.
   - Replace the expansion
   Yes   Is the expansion valve or   Yes   valve and/or strainer.
   Check the system water   strainer clogged (ice formed)?   - Reclaim and recharge
   flow rate.   No   refrigerant.

   Check refrigerant amount.
   Is the water pump speed   No   Readjust the water pump
   adjusted according to system
   speed.   No
   hydraulic external static pressure?   Is the additional refrigerant   Reclaim and recharge with
   amount filled correctly?   correct amount of refrigerant.
   Yes
   Yes
   Check the system water passage.
   Check the indoor refrigerant
   liquid temperature sensor.
   Yes   Fix the system water
   Is there any water leakage?
   leakage.   Does it conform to the sensor
   No   characteristic chart?

   Check the 2 way valve.   Yes   Replace the indoor unit PCB
   (main).

   Is the 2 way valve partially   Yes   No   Replace the indoor refrigerant
   Open the 2 way valve.   liquid temperature sensor.
   closed?
   No

   237


--- Page 238 ---
19.5.27 Outdoor High Pressure Switch Activate (F12)
Malfunction Decision Conditions:
   During operation of cooling and heating, when pressure 4.5 MPa and above is detected by outdoor high pressure
   switch.

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
   Troubleshooting:   always switch off the power before remove and connect the component.

 Check the dust accumulation on the
   outdoor unit heat exchanger.

   Check the 2/3 way valve.
   Is the outdoor unit heat   Yes
   Clean the heat exchanger.
   exchanger dirty?
   Yes
   No   Is the 2/3 way valve closed?   Open the 2/3 way valve.
   Check the outdoor air
   passage.   No

   Check the system water passage.
   Yes   Provide sufficient air
   Is there any short circuit?   Yes
   passage.   - Fix the system water leakage.
   No   Is there any water leakage?   - Replace outdoor high
   pressure sensor.
   Check the system water pump.   No
   Check for clogged   - Replace the expansion valve
   - Replace the faulty water   expansion valve or strainer.   and/or strainer.
   No   Yes
   Is the water pump working?   pump.   - Reclaim and recharge
   - Replace outdoor high   refrigerant.
   Yes   pressure sensor.   Is the expansion valve or   - Replace outdoor high
   strainer clogged (ice formed)?   pressure sensor.
   Check the system water
   flow rate.   No
   Check refrigerant amount.   No   - Reclaim and recharge with
   - Readjust the water pump   correct amount of refrigerant.
   Is the water pump speed   No   speed.   - Replace outdoor high
   adjusted according to system   - Replace outdoor high   pressure sensor.
 hydraulic external static pressure?   pressure sensor.   Is the additional refrigerant
   amount filled correctly?
   Yes   - Replace the outdoor unit
   Yes   PCB (main).
   - Replace the outdoor high
   pressure sensor and switch.

   238


--- Page 239 ---
19.5.28 Compressor Rotation Failure (F14)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   CORE   R

   Check the U, V, and W connector connection:
   P
   - Turn OFF the power.
   2T
   - Check the U, V, and W connector connection at   U   R
   V   B
   outdoor unit PCB (main) and compressor terminal.   W   Y
   COMPRESSOR
   CORE

   Is the connector connection   No - Connector poor contact.   FUSE   T 3.15A   L 250W

   normal?   - Correct the connection.   Outdoor unit   Compressor
   PCB (main)   terminal
   Yes
   Disconnect the harnesses U, V, and
   W from the compressor terminal.
   Red   Blue   Yellow

   From the disconnected harnesses U, V, and W,
   connect them to the inverter checker. Turn ON   COMMUNICATION
   (YEL) YELLOW   ERROR
   the power and operate the system. Check the
   inverter checker 6 LEDs blinking condition.
   INVERTER SIGNAL

   - IPM defective.   (BLU) BLUE   (RED) RED
   Is the blinking of the 6 LEDs in   No
   - Replace the outdoor unit PCB   TRADE MARK
   same sequence/condition?
   (main).   COMP. TERMINAL
   Yes   Inverter
   Replace the compressor.   checker

   239


--- Page 240 ---
19.5.29 Outdoor Fan Motor (DC Motor) Mechanism Locked (F15)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Turn OFF the power and
   operate the fan by hand.
   Turn OFF the power and
   disconnect the fan motor
   Does the fan rotate   No   connector. Turn ON the power.
   Replace the fan motor.
   smoothly?
   Yes   Check the output of the fan motor
   Turn ON the power and   from outdoor unit PCB (main)
   operate the fan motor.

   No   Is the fan motor power supply voltage No   Replace the outdoor unit
   Does it rotate?   ~325 Vdc (pin 1 & 4) generated?   PCB (main).

   Yes   Yes

   Is the fan motor control voltage   No   Replace the outdoor unit
   Stop the fan motor.
   15 Vdc (pin 5 & 4) generated?   PCB (main).

   Yes
   Check the rotation feedback
   output from the fan motor.   Operate the fan motor, is the   No   Replace the outdoor unit
   rotation command voltage 1-5 Vdc   PCB (main).
   (pin 7 & 4) generated?
   Rotate the fan motor by hand, is the   No
   rotation feedback voltage 15 Vdc   Replace the fan motor.   Yes
   Replace the fan motor.
   (pin 6 & 4) generated?
   Yes   Replace the outdoor unit
   PCB (main).

   240


--- Page 241 ---
19.5.30 Input Over Current Detection (F16)
Malfunction Decision Conditions:
   During operation of cooling and heating, when outdoor current above UDZ03 / 05KE5 14.6A & UDZ07 / 09KE5
   16.9A is detected by the current transformer (CT) in the outdoor unit PCB.

Malfunction Caused:
   1 Excessive refrigerant.
   2 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue 3 times in 20 minutes.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   Caution   always switch off the power before remove and connect the component.

   Get restarted and measure
   the AC current from the
   outdoor LIVE terminal.

   Is the measured AC
   current over   No   Replace the outdoor unit
   UDZ03 / 05KE5 14.6A &   PCB (main).
   UDZ07 / 09KE5 16.9A?

   Check refrigerant amount.

   Yes   Reclaim and recharge with
   Excess refrigerant?
   correct amount of refrigerant.

   No
   Replace the outdoor unit
   PCB (main).

   241


--- Page 242 ---
19.5.31 Compressor Overheating (F20)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the compressor tank
   temperature sensor.

   Check for clogged expansion
   Does it conform to the   No   Replace the compressor   valve or strainer.
   sensor characteristic chart?   tank temperature sensor.
   Yes   - Repair expansion valve
   Is the expansion valve or   Yes
   and/or strainer.
   Check the 2/3 way valve.   strainer clogged (ice formed)?   - Reclaim and recharge
   refrigerant.
   No
   Reclaim and recharge for a
   Yes
   Is the 2/3 way valve closed?   Open the 2/3 way valve.   specified amount of fresh refrigerant.

   No   - Replace the outdoor unit
   Is abnormality happened   Yes
   PCB (main).
   Check for gas leakage.   again?
   - Replace the compressor.
   No
   - Repair the pipe flare or   Procedure complete.
   Is the oil oozing out from the   Yes   union nuts.
   2/3 way valve?   - Reclaim and recharge
   refrigerant.
   No

   242


--- Page 243 ---
19.5.32 IPM Overheating (F22)
Malfunction Decision Conditions:
   During operation of cooling and heating, when temperature 95°C is detected by the outdoor IPM temperature
   sensor.

Malfunction Caused:
   1 Faulty outdoor unit fan motor.
   2 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue 3 times in 30 minutes.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the outdoor unit
   installation condition.

   Is there any improper heat   Yes   - Reinstall the outdoor unit.
   radiation?   - Remove the obstacle(s).

   No
   Is the outdoor unit   No   Replace the outdoor unit
   fan motor operating?   fan motor.

   Yes
   - Defect in IPM.
   - Replace the outdoor unit
   PCB (main).

   243


--- Page 244 ---
19.5.33 Output Over Current Detection (F23)
Malfunction Decision Conditions:
   During operation of cooling and heating, when outdoor DC current is above set value is detected by the IPM DC
   Peak sensing circuitry in the outdoor unit PCB (main).

Malfunction Caused:
   1 Faulty outdoor unit PCB (main).
   2 Faulty compressor.

Abnormality Judgment:
   Continue for 7 times.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

  Check the compressor winding resistance:
  - Turn OFF the power and disconnect the   Are the compressor’s   - Compressor defective due to
   Yes
   harnesses U, V, and W.   winding resistance (U-V, V-   winding shorted.
  - Measure the winding resistance between   W, or U-W) shorted?   - Replace the compressor.
   U-V, V-W, and W-U.
   - Outdoor eletronic circuit
   No   defect due to power transistor
   shorted.
   Checking the power transistor   - Replace the outdoor unit
   Never touch any live parts for at least 10 minutes after turning off the circuit breaker.
   If unavoidably necessary touch a live part, make sure the power transistor’s supply
   PCB (main).
   voltage is below 50 V using the tester.
   For the UVW, make measurements at the Faston terminal on the board or the relay
   connector.

   Power transistor   Power transistor
   Tester’s negative terminal   UVW   UVW
   (+)   (-)
   Power transistor   Power transistor
   Tester’s positive terminal   UVW   UVW
   (+)   (-)
   Normal resistance   Several kohms to several Mohms
   Abnormal resistance   0 or ∞

   244


--- Page 245 ---
19.5.34 Refrigeration Cycle Abnormality (F24)
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

   Yes   Repair leak point or replace,
   Is the leaking found?
   reclaim and recharge gas

   No
   Check for clogged expansion
   Check sensor characteristics   valve or strainer

   1. Water outlet sensor
   2. Water inlet sensor
   Yes   - Replace expansion valve and / or
   3. Compressor discharge sensor   Is the expansion valve or strainer
   strainer
   clogged (ice formed)?
   - Reclaim and recharge refrigerant
   No

   No
   Does it conform to   Replace the sensor   Reclaim and recharge for a specified
   sensor characteristics?   amount of fresh refrigerant

   Yes
   Yes
   - Replace the outdoor or indoor unit
   Is abnormality happened again?
   Check the pressure sensor   PCB (main)

   No
   Procedure complete

   Yes
   Is the pressure sensor value   Replace the pressure sensor
   and actual mismatched?

   No

   245


--- Page 246 ---
19.5.35 Four Way Valve Abnormality (F25)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Four way valve coil   Yes   Connect the four
   disconnected (loose)?   way valve coil.
   Check the indoor pipe   No
   temperature sensor.   Yes
   Is the harness out of the
   Reconnect the harness.
   CN-HOT connector?

   Does it conform to the   No   Replace the indoor pipe   No
   sensor characteristic chart?   temperature sensor.
   Check the continuity of the
   Yes   four way valve coil.

   Is F25 occur during   Yes
   heating operation?
   Disconnect the harness from the   No   Replace the four
   No   CN-HOT connector. Resistance
   way valve coil.
   between harness about 1.52 kohm?
   Is the four way valve coil energize   Yes   Replace the outdoor unit
   during cooling operation?   PCB (noise filter/main).   Yes   CN-HOT
   4 WAYS
   VALVE
   (VH3-2)
   Measure DC voltage supply to   1 2 3

   No   CN-HOT (pin 1 & 3) during heating
   Replace the four way valve.   operation.

   Is the voltage supply to   No   Replace the outdoor unit
   4 way valve 4Vdc?   PCB (noise filter/main).

   Yes
   Replace the four way valve.

   246


--- Page 247 ---
19.5.36 Outdoor High Pressure Switch Abnormal (F27)
Malfunction Decision Conditions:
   During compressor stop, and outdoor high pressure switch is remain opened.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty switch.
   3 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue for 1 minute.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   Caution always switch off the power before remove and connect the component

   Check the CN-PSW1 connector connection:
   - Turn OFF the power.
   - Check the connector connection.

   Is the CN-PSW1 connector   No   - Connect or poor contact.
   connection normal?   - Correct the connection.

   Yes   CN-EV2
   (YELLOW)
   CN-PSW1
   (BLUE)
   1   6   1   2

   Check the continuity of the outdoor high
   pressure switch:   R
   - Plug out outdoor high pressure switch   M   R

   connector from CN-PSW1 channel.
   - Measure the connector continuity.   ELECTRO MAGNETIC COIL
   (BYPASS EXPANSION VALVE)

   HIGH PRESSURE SWITCH
   Multimeter

   - Defect in outdoor unit PCB
   Yes   (main).
   Is there any continuity?
   - Replace the outdoor unit
   PCB (main).
   No   - Defect in outdoor high
   pressure switch.
   - Replace the outdoor high
   pressure switch.

   247


--- Page 248 ---
19.5.37 Low Discharge Superheat (F29)
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

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-DIS & CN-TH1 connection:
   - Turn OFF the power.
   - Check the connector connection.

   - Is the CN-DIS & CN-TH1 connector normal?
   - Measured the resistance of the sensor, is   No
   - Replace the temperature
   the measured resistance matches the value   Sensor.
   specified in its characteristic chart?

   Yes

   Check Refrigeration Cycle Pressure.

   No
   Is the refrigerant cycle pressure normal?   - Recharge Gas.
   Yes

   Outdoor Pipe / Outdoor Defrost Sensor
   - Defect in Outdoor Unit PCB.   Compressor Tank / Compressor Discharge Sensor
   Characteristic   - Replace the Outdoor Unit PCB.   Characteristic
   30   350

   300
   25
   250
   Resistance (K)
  Resistance (K)

   20
   200
   15
   150

   10   100

   5   50

   0
   0
   -10   0   10   20   30   40   50
   -10   0   10   20   30   40   50
   Temperature (°C)
   Temperature (°C)

   248


--- Page 249 ---
19.5.38 Indoor Water Outlet Temperature Sensor 2 Abnormality (F30)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the indoor water outlet
   temperature sensor 2 are used to determine sensor error.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty indoor unit PCB.

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH3 connector connnection:
   - Turn OFF the power.
   - Check the connector connection.

   No
   Is the CN-TH3 connector   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the indoor water outlet temperature sensor:
   - Plug out connector from the indoor unit PCB.
   - Measure the resistance of the indoor water outlet
   temperature sensor.
   Indoor Refrigerant Liquid / Water Inlet / Water
   Outlet Sensor Characteristic
   120
   110   Is the measured resistance of the   - Defect in indoor water outlet
   100
   indoor water outlet temperature   No   temperature sensor.
   90
  Resistance (K)

   80
   70
   sensor matches the value specified   - Replace the indoor water
   60   in its characteristic chart?   outlet temperature sensor.
   50
   40
   30
   20   Yes
   10
   0
   - Defect in indoor unit PCB.
   -10   0   10   20   30   40   50   - Replace the indoor unit PCB.
   Temperature (°C)

   249


--- Page 250 ---
19.5.39 Outdoor Air Temperature Sensor Abnormality (F36)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the outdoor air temperature
   sensor are used to determine sensor error.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH1 connector connnection:
   - Turn OFF the power.
   - Check the connector connection.

   No
   Is the CN-TH1 connector   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the outdoor air temperature sensor:
   - Plug out connector from the outdoor unit PCB (main).
   - Measure the resistance of the outdoor air
   temperature sensor.

   Outdoor Intake Air Sensor Characteristic

   100
   90   Is the measured resistance of the   - Defect in outdoor air temperature
   80
   outdoor air temperature sensor   No   sensor.
   70
   Resistance (K)

   60   matches the value specified in its   - Replace the outdoor air
   50   characteristic chart?   temperature sensor.
   40
   30
   20
   10
   Yes
   0   - Defect in outdoor unit PCB (main).
   -10   0   10   20   30   40   50   - Replace the outdoor unit PCB (main).
   Temperature (°C)

   250


--- Page 251 ---
19.5.40 Indoor Water Inlet Temperature Sensor Abnormality (F37)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the indoor water inlet
   temperature sensor are used to determine sensor error.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty indoor unit PCB (main).

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH1 connector connnection:
   - Turn OFF the power.
   - Check the connector connection.

   No
   Is the CN-TH1 connector   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the indoor water inlet temperature sensor:
   - Plug out connector from the indoor unit PCB (main).
   - Measure the resistance of the indoor water inlet
   temperature sensor.
   Indoor Refrigerant Liquid / Water Inlet / Water
   Outlet Sensor Characteristic
   120
   110   Is the measured resistance of the   - Defect in indoor water inlet
   100
   indoor water inlet temperature sensor   No   temperature sensor.
   90
   Resistance (K)

   80
   70
   matches the value specified in its   - Replace the indoor water inlet
   60   characteristic chart?   temperature sensor.
   50
   40
   30
   20   Yes
   10
   0
   - Defect in indoor unit PCB (main).
   -10   0   10   20   30   40   50   - Replace the indoor unit PCB (main).
   Temperature (°C)

   251


--- Page 252 ---
19.5.41 Outdoor Discharge Pipe Temperature Sensor Abnormality (F40)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the outdoor discharge pipe
   temperature sensor are used to determine sensor error.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-DIS connector connnection:
   - Turn OFF the power.
   - Check the connector connection.

   No
   Is the CN-DIS connector   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the outdoor discharge pipe temperature sensor:
   - Plug out connector from the outdoor unit PCB (main).
   - Measure the resistance of the outdoor discharge
   pipe temperature sensor.

   Compressor Tank / Compressor Discharge Sensor
   Characteristic
   350
   Is the measured resistance of the   - Defect in outdoor discharge pipe
   300
   outdoor discharge pipe temperature   No   temperature sensor.
   250
   Resistance (K)

   sensor matches the value specified   - Replace the outdoor discharge pipe
   200
   in its characteristic chart?   temperature sensor.
   150

   100

   50   Yes
   0
   - Defect in outdoor unit PCB (main).
   -10   0   10   20   30   40   50   - Replace the outdoor unit PCB (main).
   Temperature (°C)

   252


--- Page 253 ---
19.5.42 Power Factor Correction (PFC) Abnormality (F41)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the compressor winding resistance:
   Check the supply voltage.   - Turn off the power supply and disconnect
   the harnesses U, V, and W.
   - Measure the winding resistance between U-V,
   No   V-W, and W-U.
   Supply voltage as specified?   Correct the power supply.

   Yes
   Are the compressor’s winding
   Operate the system. Verify PFC   resistance (U-V, V-W, U-W)
   abnormality by measuring the DC   uniform?
   voltage between DCP-OUT and DCN-
   OUT of the outdoor unit PCB (main).
   No
   Replace the compressor.
   Is the DC voltage between DCP-   Yes   - Defect in PFC circuitry.
   OUT and DCN-OUT normal   - Replace the outdoor unit
   (between 285-315 Vdc)?   PCB (main).   Yes   Replace the outdoor unit
   PCB (main).
   No

   253


--- Page 254 ---
19.5.43 Outdoor Pipe Temperature Sensor Abnormality (F42)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the outdoor pipe temperature
   sensor are used to determine sensor error.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH1 connector connnection:
   - Turn OFF the power.
   - Check the connector connection.

   No
   Is the CN-TH1 connector   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the outdoor pipe temperature sensor:
   - Plug out connector from the outdoor unit PCB (main).
   - Measure the resistance of the outdoor pipe
   temperature sensor.
   Outdoor Pipe / Outdoor Defrost Sensor
   Characteristic
   30
   Is the measured resistance of the   - Defect in outdoor pipe temperature
   25
   outdoor pipe temperature sensor   No   sensor.
   Resistance (K)

   20   matches the value specified in its   - Replace the outdoor pipe
   15   characteristic chart?   temperature sensor.
   10

   5   Yes
   - Defect in outdoor unit PCB (main).
   0
   -10   0   10   20   30   40   50   - Replace the outdoor unit PCB (main).
   Temperature (°C)

   254


--- Page 255 ---
19.5.44 Outdoor Defrost Temperature Sensor Abnormality (F43)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the outdoor defrost
   temperature sensor are used to determine sensor error.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty outdoor unit PCB (main).

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH2 connector connnection:
   - Turn OFF the power.
   - Check the connector connection.

   No
   Is the CN-TH2 connector   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the outdoor defrost temperature sensor:
   - Plug out connector from the outdoor unit PCB (main).
   - Measure the resistance of the outdoor defrost
   temperature sensor.
   Outdoor Pipe / Outdoor Defrost Sensor
   Characteristic
   30
   Is the measured resistance of the   - Defect in outdoor defrost
   25
   outdoor defrost temperature sensor   No   temperature sensor.
   Resistance (K)

   20
   matches the value specified in its   - Replace the outdoor defrost
   15   characteristic chart?   temperature sensor.
   10

   5   Yes
   0
   - Defect in outdoor unit PCB (main).
   -10   0   10   20   30   40   50   - Replace the outdoor unit PCB (main).
   Temperature (°C)

   255


--- Page 256 ---
19.5.45 Indoor Water Outlet Temperature Sensor Abnormality (F45)
Malfunction Decision Conditions:
   During startup and operation of cooling and heating, the temperatures detected by the indoor water outlet
   temperature sensor are used to determine sensor errors.

Malfunction Caused:
   1 Faulty connector connection.
   2 Faulty sensor.
   3 Faulty indoor unit PCB (main).

Abnormality Judgment:
   Continue for 5 seconds.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH1 connector connnection:
   - Turn OFF the power.
   - Check the connector connection.

   No
   Is the CN-TH1 connector   - Connector poor contact.
   connection normal?   - Correct the connection.

   Yes

   Check the indoor water outlet temperature sensor:
   - Plug out connector from the indoor unit PCB (main).
   - Measure the resistance of the indoor water outlet
   temperature sensor.
   Indoor Refrigerant Liquid / Water Inlet / Water
   Outlet Sensor Characteristic
   120
   110   Is the measured resistance of the   - Defect in indoor water outlet
   100
   indoor water outlet temperature   No   temperature sensor.
   90
   Resistance (K)

   80
   70
   sensor matches the value specified   - Replace the indoor water outlet
   60   in its characteristic chart?   temperature sensor.
   50
   40
   30
   20   Yes
   10
   0
   - Defect in indoor unit PCB (main).
   -10   0   10   20   30   40   50   - Replace the indoor unit PCB (main).
   Temperature (°C)

   256


--- Page 257 ---
19.5.46 Outdoor Current Transformer Open Circuit (F46)
Malfunction Decision Conditions:
   A current transformer (CT) open circuit is detected by checking the compressor running frequency (   rated
   frequency) and CT detected input current (< 0.65 A) for continuously 20 seconds.

Malfunction Caused:
   1 CT defective.
   2 Faulty outdoor unit PCB (main).
   3 Compressor defective (low compression).

Abnormality Judgment:
   Continue 3 times in 20 minutes.

   For safety reason and to prevent component breakdown,
   Troubleshooting:   always switch off the power before remove and connect the component.

   Measure the current from
   Operate heating operation.   the outdoor LIVE terminal.
   When F46 occurs again, turn
   OFF the power.
   No   - Defect in CT.
   Is the current < 0.65 A?   - Replace the outdoor
   unit PCB (main).
   Check the 2/3 way valve.   Yes

   While the system is still in
   heating operation, check the
   Yes
   Is the 2/3 way valve closed?   Open the 2/3 way valve.   discharge pressure.

   No
   Is the pressure unchanged (same   No   Replace the outdoor unit
   Check for gas leakage.   as when compressor stop)?   PCB (main).
   Yes
   - Replace the pipe flare or
   Is the oil oozing out from   Yes   union nuts.   While the system is still in heating operation,
   the 2/3 way valve?   - Reclaim and recharge   further check (by touching) if;
   refrigerant.   - Compressor discharge pipe is cold.
   No   - Compressor body is warm to confirm the
   Turn ON the power, and   compressor low compression.
   operate heating operation.   Yes
   Replace the compressor.

   257


--- Page 258 ---
19.5.47 Outdoor Bypass Outlet Temperature Sensor (F49)
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
   Troubleshooting:   always switch off the power before remove and connect the component.

   Check the CN-TH3 connector connection
   - Turn of the power
   - Check connector connection

   No
   Is CN -TH3 connector   Poor contact
   connection normal?   - Correct connection

   Yes

   Check Outdoor bypass outlet temperature sensor
   - Plug out connector from outdoor main PCB
   - Measure resistance of the outdoor bypass outlet
   temperature sensor

   Defective sensor
   Does the measurement resistance   No
   match with values in sensor   - Replace outdoor bypass
   characteristic graph?   temperature sensor

   Defective outdoor main PCB
   - Replace outdoor main PCB

   Bypass Sensor Resistance
   20
   kΩ

   18
   16
   14
   12
   10
   8   Bypass Sensor
   Resistance
   6
   4
   2
   0
   -10   0   10   20   30   40
   Celcius

   258


--- Page 259 ---
20. Disassembly and Assembly Instructions
   WARNING
 High Voltage are generated in the electrical parts area by the capacitor. Ensure that the capacitor has discharged sufficiently before proceeding
 with repair work. Failure to heed this caution may result in electric shocks.

20.1 To Remove Front Plate and Top Plate

   Hook

   2x (screw)

1. Remove 2 screws at the bottom to remove the Front Plate
2. Remove 8 screws at the top to remove the Top Plate

   259


--- Page 260 ---
20.2 To Remove Remote Control

   3. Remove 2 screws then take out the bottom case.

Bottom   Top case
case

   Claw
   (3 places)
   Insert the
   driver and
   slightly turn.   Disconnect the
   Remote controller
   wiring
   Slide it
   Flat-blade
   downwards
   screwdriver
   to unhook
1. Remove the top case from the bottom case.   2. Disconnect the Remote Controller wiring.

20.3 To Remove Electronic Controller
   1. Remove 2 screws to swing
   the Control Board Cover.

   2. Disconnect all connectors from
   main PCB. (CN-FLWSEN, CN-PUMP1,
   CN-TH1, CN-TH2, CN-TH3, CN-OLP1,
   CN1, CN2, CN3, CN4, CN5, CN6, CN-CNT,
   CN-CNT2, CN-DPS, CN-PWR, CN-PWR2,
   CN-PWR3, CN-PWR4)

   3. Detach remote controller, 3-way valve and
   all wires. (AC1-L3, AC1-N, G01, G05, DATA,
   G02, L2, L1, G03, HT1-L3, AC2-L3, AC2-N2,
   AC2-N3)

   260


--- Page 261 ---
20.4 To Remove Flow Sensor and Air Purge Valve
   1. Turn the Air Purge Valve
   anti-clockwise then remove.

   2. Detach the Flow
   Sensor lead wire.
   3. Remove 2 retaining rings,
   then remove the Flow
   Sensor.

  When reinstall Flow Switch, ensure the arrow on the flow switch is parallel with the pipe shaft and is facing in
  the direction of flow.

  During reinstall Air Purge Valve.

   Make sure plug is fully close
   in clockwise direction.

   Packing
   Apply some water based grease
   on packing surface before fix
   with shut off valve.

20.5 To Remove Water Pump

   2. Disconnect 2
   pipes connection.

   1. Disconnect CN-PUMP1
   from electronic controller.

   261


--- Page 262 ---
20.6 To Remove Water Filter

   Filter

   1. Turn to remove the   2. Disconnect 2 pipes
   Magnet Bar at bottom of   connection for each filter.
   Magnetic Water Filter Set.

   262


--- Page 263 ---
21. Technical Data
21.1 Operation Characteristics
21.1.1 WH-UDZ03KE5
Heating Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 7 m

   3.500

   3.300
   Capacity (kW)

   3.100

   2.900

   2.700

   2.500
   -20   -16   -12   -8   -4   0   4   8   12   16   20   24   28

   Outdoor Temperature (°C)

   2.100

   1.700
   Input Power (kW)

   1.300

   0.900

   0.500

   0.100
   -20   -16   -12   -8   -4   0   4   8   12   16   20   24   28

   Outdoor Temperature (°C)

   263


--- Page 264 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 7 m

   3.600

   3.400
   Capacity (kW)

   3.200

   3.000

   2.800

   2.600
   16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

   Outdoor Temperature (°C)

   1.300

   1.100
   Input Power (kW)

   0.900

   0.700

   0.500

   0.300
   16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

   Outdoor Temperature (°C)

   264


--- Page 265 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 19°C
   Indoor water outlet temperature : 14°C
   Piping length : 7 m

   5.000

   4.600
   Capacity (kW)

   4.200

   3.800

   3.400

   3.000
   16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

   Outdoor Temperature (°C)

   1.300

   1.100
   Input Power (kW)

   0.900

   0.700

   0.500

   0.300
   16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

   Outdoor Temperature (°C)

   265


--- Page 266 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 23°C
   Indoor water outlet temperature : 18°C
   Piping length : 7 m

   3.600

   3.400
   Capacity (kW)

   3.200

   3.000

   2.800

   2.600
   16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

   Outdoor Temperature (°C)

   1.100

   0.900
   Input Power (kW)

   0.700

   0.500

   0.300

   0.100
   16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43

   Outdoor Temperature (°C)

   266


--- Page 267 ---
Heating Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 7 m

   3.500

   3.300
   Capacity (kW)

   3.100

   2.900

   2.700

   2.500
   3   4   5   6   7   8   9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

   Piping Length (m)

   1.200

   1.000

   0.800
   Input Power (kW)

   0.600

   0.400

   0.200
   3   4   5   6   7   8   9   10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

   Piping Length (m)

   267


--- Page 268 ---
Cooling Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 7 m

   3.500

   3.300
   Capacity (kW)

   3.100

   2.900

   2.700

   2.500
   3   4   5   6   7   8   9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

   Piping Length (m)

   1.500

   1.300

   1.100
   Input Power (kW)

   0.900

   0.700

   0.500
   3   4   5   6   7   8   9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

   Piping Length (m)

   268


--- Page 269 ---
21.1.2 WH-UDZ05KE5
Heating Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 7 m

   6.500

   6.000
   Capacity (kW)

   5.500

   5.000

   4.500

   4.000
   -20   -17   -14   -11   -8   -5   -2   1   4   7   10   13   16   19   22   25
   Outdoor Temperature (°C)

   2.250

   1.950
   Input Power (kW)

   1.650

   1.350

   1.050

   0.750
   -20   -17   -14   -11   -8   -5   -2   1   4   7   10   13   16   19   22   25
   Outdoor Temperature (°C)

   269


--- Page 270 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 7 m

   5.600

   5.300
   Capacity (kW)

   5.000

   4.700

   4.400

   4.100
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   1.850

   1.750
   Input Power (kW)

   1.650

   1.550

   1.450

   1.350
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   270


--- Page 271 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 19°C
   Indoor water outlet temperature : 14°C
   Piping length : 7 m

   7.000

   6.700
   Capacity (kW)

   6.400

   6.100

   5.800

   5.500
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   1.850

   1.750
   Input Power (kW)

   1.650

   1.550

   1.450

   1.350
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   271


--- Page 272 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 23°C
   Indoor water outlet temperature : 18°C
   Piping length : 7 m

   5.700

   5.450
   Capacity (kW)

   5.200

   4.950

   4.700

   4.450
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   1.300

   1.200
   Input Power (kW)

   1.100

   1.000

   0.900

   0.800
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   272


--- Page 273 ---
Heating Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 30 m/50 m

   5.000

   4.950
   Capacity (kW)

   4.900

   4.850

   4.800

   4.750
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   1.160

   1.140
   Input Power (kW)

   1.120

   1.100

   1.080

   1.060
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   273


--- Page 274 ---
Cooling Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 30 m/50 m

   4.680

   4.650
   Capacity (kW)

   4.620

   4.590

   4.560

   4.530
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   1.770

   1.764
   Input Power (kW)

   1.758

   1.752

   1.746

   1.740
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   274


--- Page 275 ---
21.1.3 WH-UDZ07KE5
Heating Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 7 m

   7.500

   6.800
   Capacity (kW)

   6.100

   5.400

   4.700

   4.000
   -20   -17   -14   -11   -8   -5   -2   1   4   7   10   13   16   19   22   25
   Outdoor Temperature (°C)

   2.500

   2.200
   Input Power (kW)

   1.900

   1.600

   1.300

   1.000
   -20   -17   -14   -11   -8   -5   -2   1   4   7   10   13   16   19   22   25
   Outdoor Temperature (°C)

   275


--- Page 276 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 7 m

   6.750

   6.500
   Capacity (kW)

   6.250

   6.000

   5.750

   5.500
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   2.700

   2.500
   Input Power (kW)

   2.300

   2.100

   1.900

   1.700
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   276


--- Page 277 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 19°C
   Indoor water outlet temperature : 14°C
   Piping length : 7 m

   8.400

   8.200
   Capacity (kW)

   8.000

   7.800

   7.600

   7.400
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   2.900

   2.700
   Input Power (kW)

   2.500

   2.300

   2.100

   1.900
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   277


--- Page 278 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 23°C
   Indoor water outlet temperature : 18°C
   Piping length : 7 m

   6.800

   6.660
   Capacity (kW)

   6.520

   6.380

   6.240

   6.100
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   1.800

   1.660
   Input Power (kW)

   1.520

   1.380

   1.240

   1.100
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   278


--- Page 279 ---
Heating Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 30 m/50 m

   6.750

   6.700
   Capacity (kW)

   6.650

   6.600

   6.550

   6.500
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   1.590

   1.570
   Input Power (kW)

   1.550

   1.530

   1.510

   1.490
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   279


--- Page 280 ---
Cooling Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 30 m/50 m

   6.160

   6.110
   Capacity (kW)

   6.060

   6.010

   5.960

   5.910
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   2.360

   2.354
   Input Power (kW)

   2.348

   2.342

   2.336

   2.330
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   280


--- Page 281 ---
21.1.4 WH-UDZ09KE5
Heating Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 7 m

   9.500

   8.500
   Capacity (kW)

   7.500

   6.500

   5.500

   4.500
   -20   -17   -14   -11   -8   -5   -2   1   4   7   10   13   16   19   22   25
   Outdoor Temperature (°C)

   3.500

   3.000
   Input Power (kW)

   2.500

   2.000

   1.500

   1.000
   -20   -17   -14   -11   -8   -5   -2   1   4   7   10   13   16   19   22   25
   Outdoor Temperature (°C)

   281


--- Page 282 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 7 m

   8.500

   7.800
   Capacity (kW)

   7.100

   6.400

   5.700

   5.000
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   3.100

   2.900
   Input Power (kW)

   2.700

   2.500

   2.300

   2.100
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   282


--- Page 283 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 19°C
   Indoor water outlet temperature : 14°C
   Piping length : 7 m

   11.000

   10.000
   Capacity (kW)

   9.000

   8.000

   7.000

   6.000
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   3.400

   3.150
   Input Power (kW)

   2.900

   2.650

   2.400

   2.150
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   283


--- Page 284 ---
Cooling Characteristics at Different Outdoor Air Temperature
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 23°C
   Indoor water outlet temperature : 18°C
   Piping length : 7 m

   9.500

   9.000
   Capacity (kW)

   8.500

   8.000

   7.500

   7.000
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   2.200

   2.100
   Input Power (kW)

   2.000

   1.900

   1.800

   1.700
   25   28   31   34   37   40   43
   Outdoor Temperature (°C)

   284


--- Page 285 ---
Heating Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 7°C (DBT), 6°C (WBT)
   Indoor water inlet temperature : 30°C
   Indoor water outlet temperature : 35°C
   Piping length : 30 m/50 m

   8.350

   8.310
   Capacity (kW)

   8.270

   8.230

   8.190

   8.150
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   2.020

   2.018
   Input Power (kW)

   2.016

   2.014

   2.012

   2.010
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   285


--- Page 286 ---
Cooling Characteristics at Different Piping Length
   Condition
   Outdoor air temperature : 35°C (DBT), -°C (WBT)
   Indoor water inlet temperature : 12°C
   Indoor water outlet temperature : 7°C
   Piping length : 30 m/50 m

   7.700

   7.600
   Capacity (kW)

   7.500

   7.400

   7.300

   7.200
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   3.110

   3.106
   Input Power (kW)

   3.102

   3.098

   3.094

   3.090
   30   32   34   36   38   40   42   44   46   48   50
   Piping Length (m)

   286


--- Page 287 ---
21.2 Heating Capacity Table
21.2.1 WH-UDZ03KE5

  Water Out (°C)   25   35   45   55   60
   Input   Input   Input   Input   Input
   Capacity   Capacity   Capacity   Capacity   Capacity
 Outdoor Air (°C)   Power   Power   Power   Power   Power
   (W)   (W)   (W)   (W)   (W)
   (W)   (W)   (W)   (W)   (W)
   -20   2500   1110   2520   1310   2240   1590   2120   1800   -   -
   -15   3000   1140   3200   1370   3000   1620   2750   1920   -   -
   -7   2990   910   3300   1180   3250   1470   3200   1790   3000   1880
   2   2920   690   3200   880   3200   1130   3200   1460   3150   1670
   7   3090   490   3200   600   3200   840   3200   1140   2950   1220
   25   3270   230   3270   380   3610   630   4060   1110   4030   1140

21.2.2 WH-UDZ05KE5

  Water Out (°C)   35   45   55   60
   Input   Input   Input   Input
   Capacity   Capacity   Capacity   Capacity
 Outdoor Air (°C)   Power   Power   Power   Power
   (W)   (W)   (W)   (W)
   (W)   (W)   (W)   (W)
   -20   4050   1950   3760   2200   3390   2480   -   -
   -15   5000   2110   4750   2490   4300   2610   -   -
   -7   5000   1790   5000   2140   5000   2650   4680   2710
   2   5000   1400   5000   1790   5000   2180   4800   2400
   7   5000   980   5000   1310   5000   1650   4580   1900
   25   6390   780   6170   1190   6530   1580   5150   1330

21.2.3 WH-UDZ07KE5

  Water Out (°C)   35   45   55   60
   Input   Input   Input   Input
   Capacity   Capacity   Capacity   Capacity
 Outdoor Air (°C)   Power   Power   Power   Power
   (W)   (W)   (W)   (W)
   (W)   (W)   (W)   (W)
   -20   4450   2120   4230   2480   3900   2850   -   -
   -15   5600   2380   5300   2780   5000   3200   -   -
   -7   5750   1950   5650   2300   5350   2700   4980   2900
   2   6850   2000   6750   2400   6250   2800   6180   2910
   7   7000   1440   7000   1920   7000   2400   6860   2730
   25   6070   1070   6670   1500   7150   1770   6880   1900

21.2.4 WH-UDZ09KE5

  Water Out (°C)   35   45   55   60
   Input   Input   Input   Input
   Capacity   Capacity   Capacity   Capacity
 Outdoor Air (°C)   Power   Power   Power   Power
   (W)   (W)   (W)   (W)
   (W)   (W)   (W)   (W)
   -20   4950   2430   4580   2700   4040   3000   -   -
   -15   7400   3200   6450   3280   5400   3420   -   -
   -7   6250   2200   6100   2680   5900   3060   5650   3240
   2   7000   2060   6850   2500   6300   2890   7260   3310
   7   9000   1980   9000   2580   8900   3040   8600   3420
   25   7970   1370   8750   1930   9160   2340   6080   1720

   287


--- Page 288 ---
21.3 Cooling Capacity Table
21.3.1 WH-UDZ03KE5

 Water Out (°C)   7   14   18
 Outdoor Air (°C)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)
   16   3560   570   4320   550   3470   410
   25   3290   730   4060   720   3270   520
   35   3200   910   3560   930   3200   680
   43   2680   1060   3340   1090   2790   820

21.3.2 WH-UDZ05KE5

 Water Out (°C)   7   14   18
 Outdoor Air (°C)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)
   25   5470   1370   6620   1390   5540   800
   35   5000   1640   6690   1760   5000   1020
   43   4180   1830   5540   1840   4450   1270

21.3.3 WH-UDZ07KE5

 Water Out (°C)   7   14   18
 Outdoor Air (°C)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)
   25   6320   1720   8160   1930   6630   1120
   35   6700   2210   8190   2420   6700   1420
   43   5720   2620   7470   2800   6150   1780

21.3.4 WH-UDZ09KE5

 Water Out (°C)   7   14   18
 Outdoor Air (°C)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)   Capacity (W)   Input Power (W)
   25   8310   2500   10430   2670   8850   1720
   35   8200   3020   10280   3250   9000   2150
   43   5000   2150   6380   2150   7020   2140

   288


--- Page 289 ---
22. Exploded View and Replacement Parts List
22.1 Indoor Unit
   100
   37
   O/I   146   I/I   147
   101
   37   100

   100   96
   100

   43   101

   “REAR”   134
   97
  “FRONT”   37   100   149
   37

   40   99
   HOW TO ATTACH POLY-E   103
FOAM ON CABINET SIDE PLATE
   37

   33
   102
   43
   35   34

   41

   35
   8   37

   38

   90
   132   37
   139   49

   133
   98
   89
   141
   136   37   35
   48
   135
   137   140
   142   128
   48   39
   130
   48   129
   92
   123
   35   105
   130   35

   131
   32

   2
   5
   138

   1

   144
   3

   143

   35

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   289


--- Page 290 ---
93
   95
   94
   65   13

   82
   83   85   42
   84
   74
   63   86
   36
   53
   64   73
   56
   77
   86
   75   47
   55
   66   27
   69
   86   44

   57   62   45
   DTL B   37
   86
   80
   46   52

   59   37
   60   51
   50
   104
   81

   19   51
   12
   18

   14   25
   24   7
   23
   22
   24   25

   23   22

   11
   21

   17

   28
   30
   29

   28
   29
   26
   15

   15
   16

   BASE PAN

   20 x3

   9
   10

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   290


--- Page 291 ---
115

   107

   37

   116   31

   31   32

   8   118
  124
   106
   122

   127
   107   113
   37
   125
   121
   109
   125
   125
   31

   111 125 126 125 126   112   114 111 108   112 31 32

   31
   100

   (240)

   120   117
   119

   110

   110

   119   110   119

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   291


--- Page 292 ---
54
   76   54 x2   76 x2
   76

   (INSIDE
   54   JOINT)
   76
   76

   54
   54
   54

   76   54   76
   28   54
   29   76

   PUMP

   37 x2   37 x4
   91

   88

   28
   87

   59   58 (INSIDE JOINT)

   67
   37 x5
   59
   68
   DTL B

   B

   28
   28

   29

   37 x4

   1 23 4

   71   61
   72   70

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   292


--- Page 293 ---
158

   157

   158

   156

   151

   148

   152

   x4 150

   153
   154

   155

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   293


--- Page 294 ---
37 x4

   37

   37 x2   37 x2

   E

   37

   37

   37

   DTL E

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   294


--- Page 295 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-ADC0309K0E5A   REMARK

   1   CHASSIS - COMPLETE   1   ACXD50C05890

   2   SCREW   4   H55451J

   3   BASE PAN ASSY   1   ACXD52K05960

   5   BRACKET - UNIT MOUNTING COMPLETE   2   ACXD57C00420

   7   TANK COMPLETE   1   ACXB56C01211

   8   SELF TAPPING SCREW   5   XTB4+8FFJ

   9   FOAMED POLYSTYRENE   1   ACXG07-07690

   10   FOAMED POLYSTYRENE   1   ACXG07-07700

   11   FOAMED POLYSTYRENE   1   ACXG07-07710

   12   FOAMED POLYSTYRENE   1   ACXG07-07720

   13   FOAMED POLYSTYRENE   1   ACXG07-07731

   14   FOAMED POLYSTYRENE   2   ACXG07-07740

   15   FOAMED POLYSTYRENE   3   ACXG07-07750

   16   U-SHAPED PLATE   3   ACXD62-02690

   17   NON - COMBUSTIBLE FOAM   1   ACXG05-00540

   18   CAP   1   H521306

   19   CAP   1   ACXH52-04200

   20   SCREW   3   H551029J

   21   SENSOR - COMPLETE   1   ACXA50C18700   O

   22   PARTICULAR PIECE   2   D934023

   23   NUT   4   H561116

   24   STRAIGHT TUBE   2   T102044

   25   PLATE SPRING   2   H711010

   26   COCK - COMPLETE   1   ACXB65C00111   O

   27   TUBE ASSY - COMPLETE   1   ACXT00C55330

   28   PACKING   6   ACXB81-00010

   29   RETAINING RING (12.7)   4   H581007

   30   TUBE ASSY   1   ACXT00-96890

   31   BAND   9   4605011

   32   BAND   3   4605009

   33   L-SHAPED PLATE   1   ACXD60-04771

   34   L-SHAPED PLATE   1   ACXD60-04781

   35   SCREW   14   H551040J

   36   CONNECTING BAR   1   ACXE26-02841

   37   SCREW   64   H551217

   38   U-SHAPED PLATE   1   ACXD62-02700

   39   U-SHAPED PLATE   1   ACXD62-02712

   40   L-SHAPED PLATE   1   ACXD60-04532

   41   U-SHAPED PLATE   1   ACXD62-02390CZ

   42   CONNECTING BAR   1   ACXE26-02852

   43   U-SHAPED PLATE   2   ACXD62-02720

   295


--- Page 296 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-ADC0309K0E5A   REMARK

   44   FOAMED POLYSTYRENE   1   ACXG07-07000

   45   FOAMED POLYSTYRENE   1   G071738

   46   HOT WATER COIL - COMPLETE   1   ACXB90C01700

   47   CONVEX PLATE   1   ACXD65-01720

   48   POLY - E. FOAM   4   ACXE5A18-28CZ

   49   POLY - E. FOAM   1   E20A40-40CZ

   50   RECEIVER   1   ACXB14-00610   O

   51   EPT SEAL   4   D8A40-120

   52   PARTICULAR PLATE   1   ACXD90-26060CZ

   53   TUBE ASSY - COMPLETE INHOUSE   1   ACXT00C55270

   54   RETAINING RING (25.4)   14   ACXH58-00370

   55   FILTER COMPLETE   1   ACXB51C00110   O

   56   VALVE BODY (AIR PURGE)   1   ACXB62-00130   O

   57   QAC - COMPLETE INHOUSE   1   ACXT00C50151

   58   PACKING   1   B811179

   59   RETAINING RING (14-23)   3   H581038

   60   PUMP   1   ACXB53-00850   O

   61   V-COIL   1   A431122   O

   62   TUBE ASSY - COMPLETE INHOUSE   1   ACXT00C45990

   63   TUBE ASSY - COMPLETE INHOUSE   1   ACXT00C46002

   64   FLOW SENSOR   1   ACXB62-00932   O

   65   LEAD WIRE - COMPLETE (VB04-FLWS)   1   ACXA60C82910   O

   66   TUBE ASSY - COMPLETE INHOUSE   1   ACXT00C54730

   67   Z-SHAPED PLATE   1   ACXD63-01650

   68   SCREW   2   H55293J

   69   TUBE ASSY - COMPLETE INHOUSE   1   ACXT00C37270

   70   PRESSURE SENSOR   1   ACXB62-01110   O

   71   WIRE SPRING   1   ACXH72-00341

   72   LEAD WIRE - COMPLETE (PRSENS-CN)   1   ACXA60C93661   O

   73   VALVE BODY [3-WAY VALVE]   1   ACXB62-00092   O

   74   TUBE ASSY - COMPLETE INHOUSE   1   ACXT00C55280

   75   TUBE ASSY - COMPLETE INHOUSE   1   ACXT00C46010

   76   PACKING   13   ACXB81-06910

   77   TUBE ASSY   1   ACXT00-96420

   80   VALVE BODY [RELIEF VALVE]   1   ACXB62-00740   O

   81   TUBE ASSY   1   ACXT00-77260

   82   UNION NUT   1   T251064

   83   CAP   1   H52275

   84   UNION NUT   1   T251063

   85   CAP   1   H52061

   86   PLATE SPRING   4   H711019

   296


--- Page 297 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-ADC0309K0E5A   REMARK

   87   SENSOR - COMPLETE   1   ACXA50C16380   O

   88   SENSOR - COMPLETE   1   ACXA50C16390   O

   89   CONNECTING BAR   1   ACXE26-02860

   90   CONNECTING BAR   1   ACXE26-02870

   91   EPT SEAL   1   D3A10-195

   92   CONNECTING BAR   1   ACXE26-02880

   93   PARTICULAR PIECE   1   ACXD93-01860

   94   PARTICULAR PIECE   1   ACXD93-01870

   95   PARTICULAR PIECE   2   ACXD93-25030

   96   CABINET SIDE PLATE L   1   ACXE04-13290ACZ

   97   POLY - E. FOAM   1   ACXE3A210-370

   98   CABINET SIDE PLATE R   1   ACXE04-13300ACZ

   99   CABINET REAR PLATE   1   ACXE02-03400

   100   PACKING   9   ACXB81-00030

   101   PACKING   7   ACXB81-00040

   102   SCREW   2   ACXH55-07220

   103   HANDLE   2   ACXE16-00300

   104   LEAD WIRE - COMPLETE (CON-PUMP)   1   ACXA60C73630   O

   105   ELECTRONIC CONTROLLER (MAIN)   1   ACXA74C23570

   106   MACHINE SCREW WASHER ASSY   1   XYN4DC8FJ

   107   HINGE   2   H611006

   108   WASHER   3   H571044

   109   TERMINAL BOARD ASSY   1   A28K1217   O

   110   SPACER   9   H54295

   111   MACHINE SCREW WASHER ASSY   3   XYN5DC10FJ

   112   SELF TAPPING SCREW   6   XTT4+25DFJ

   113   HOLDER - P.S. CORD   3   H31042

   114   HOLDER - P.S. CORD   3   H31103

   115   POLY - E. FOAM (FLAME PROOF)   1   ACXEN15A10-50CZ

   116   SELF TAPPING SCREW   4   XTT4+8FFJ

   117   POLY - E. FOAM (FLAME PROOF)   1   ACXEN8A350-500

   118   WASHER   1   H57094

   119   SPACER   8   H54294

   120   POLY - E. FOAM (FLAME PROOF)   1   ACXEN8A30-240CZ

   121   A-PIECE   3   D77001

   122   PEAKING COILS   1   G0C103Z00003   O

   123   CONTROL BOARD ASSY   1   ACXH10-09861

   124   L-PIECE   2   ACXD70-02300

   125   SELF TAPPING SCREW   11   XTT4+12CFJ

   126   TERMINAL BOARD ASSY   2   A28K1238CZ   O

   127   LEAD WIRE - COMPLETE (WIRE1)   1   ACXA61C10340   O

   297


--- Page 298 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-ADC0309K0E5A   REMARK

   128   CONTROL BOARD COVER   1   ACXH13-09290

   129   BOX SHAPED PLATE   1   ACXD66-03961

   130   SELF TAPPING SCREW   3   XTB4+8CFJ

   131   HOLDER - P.S. CORD   1   ACXH31-00210

   132   WIRING DIAGRAM   1   ACXF29-01250

   133   CAUTION LABEL   1   ACXF75-15040

   134   CABINET TOP PLATE   1   ACXE03-04870

   135   REMOTE CONTROL SWITCH - COMPLETE   1   ACXA75C28920   O

   136   LEAD WIRE - COMPLETE (REMOTE)   1   ACXA60C99510   O

   137   BOX SHAPED PLATE (DECO)   1   ACXD66-03970

   138   CABINET FRONT PLATE   1   ACXE06-05161ACZ

   139   RUBBER (DECO)   1   ACXB81-07400

   140   DECORATION BASE ASSY (PANASONIC)   1   ACXE35K03820

   141   DECORATION BASE ASSY (AQUAREA)   1   ACXE35K03830

   142   QR CODE   1   ACXF71-03400

   143   ACCESSORY - ADJUSTABLE FEET   1   H82C2112

   144   ACCESSORY - DRAIN ELBOW   1   G87C900

   146   OPERATING INSTRUCTION - COMPLETE   1   ACXF55C32390

   147   INSTALLATION INSTRUCTION COMPL   1   ACXF60C21510

   148   MODEL LABEL   1   ACXF87-54310

   149   NAME PLATE   1   ACXF09-10850

   150   SHOCK ABSORBER   4   G713134

   151   C.C. CASE   1   ACXG50-61793

   152   BAG (UNIT)   1   ACXG86-04783

   153   BASE BOARD - COMPLETE   1   ACXG62C02791

   154   SHOCK ABSORBER (BOTTOM)   1   ACXG70-15201

   155   CORRUGATED CARDBOARD (BOTTOM)   1   ACXG57-09491

   156   TOP BOARD COMPLETE   1   ACXG60C00301

   157   CORRUGATED CARDBOARD (TOP)   1   ACXG57-12321

   158   SHOCK ABSORBER (TOP)   2   ACXG70-15211

Note:
 All parts are supplied from PHVACCZ, Czech (Vendor Code: 00029407).
 “O” marked parts are recommended to be kept in stock.

   298


--- Page 299 ---
22.2 Outdoor Unit
22.2.1 WH-UDZ03KE5

   55
   42

   54

   12

   31
   53

   38

   40   13
   32
   17
   38

   43
   51
   34
   6

   52

   7
   10
   46
   33

   50   35
   9
   29
   11
   39
   16   19
   41   30
   5
   36
   26   14
   15
   44
   28
   27   21
   37
   22
   45
   3   25

   4   19

   2   20

   38

   23   24   47
   1

   8

   18

   48
   56   56

   49

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   299


--- Page 300 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-UDZ03KE5   REMARK

   1   CHASSY ASS’Y   1   CWD52K1317

   2   ANTI - VIBRATION BUSHING   3   CWH50077

   3   COMPRESSOR   1   9RD138ZAB21   O

   4   NUT - COMPRESSOR MOUNT   3   CWH561096

   5   SOUND PROOF MATERIAL   1   CWG302762

   6   BRACKET FAN MOTOR   1   CWD541167

   7   FAN MOTOR, DC 40W 3PH   1   L6CAYYYL0064   O

   8   SCREW - BRACKET FAN MOTOR   2   ACXH55-07140

   9   SCREW - FAN MOTOR MOUNT   4   CWH55252J

   10   PROPELLER FAN ASSY   1   CWH03K1066

   11   NUT - PROPELLER FAN   1   CWH56053J

   12   CONDENSER   1   ACXB32C26820

   13   MANIFOLD TUBE ASS’Y (CAP TUBE)   1   CWT07K1831

   14   4-WAYS VALVE   1   CWB001063   O

   15   HIGH PRESSURE SENSOR CN-HPS   1   CWA501463   O

   16   PRESSURE SWITCH   1   ACXA10-00640   O

   17   LEAD WIRE - COMPLETE   1   CWA68C1224   O

   18   3-WAYS VALVE   1   ACXB01-04050   O

   19   STRAINER   2   CWB11094

   20   DISCHARGE MUFFLER (1)   1   CWB121010

   21   DISCHARGE MUFFLER (2)   1   CWB121063

   22   HOLDER - SENSOR   1   CWH32075

   23   HOLDER - COUPLING   1   CWH351233

   24   2-WAYS VALVE   1   ACXB02-02680   O

   25   EXPANSION VALVE   1   CWB051029   O

   26   SENSOR - CO. (DISCHARGE TEMP CN-DIS)   1   ACXA50C15550   O

   27   TERMINAL COVER   1   CWH171039A

   28   NUT - TERMINAL COVER   1   CWH7080300J

   29   SOUND - PROOF BOARD   1   CWH151345

   30   REACTOR   1   G0C392J00027   O
   SENSOR - CO. (OUTDDOR AIR & PIPING TEMP
   31   1   CWA50C2893   O
   CN-TH1)
   32   SENSOR - CO. (EVA EXIT TEMP CN-TH3)   1   CWA50C3374   O

   33   TERMINAL BOARD ASS’Y (1,2,3)   1   CWA28K1036J   O

   34   ELECTRONIC CONTROLLER - MAIN   1   ACXA73C92000R   O

   35   PLATE - C.B. COVER   1   CWH131470

   36   V-COIL COMP. (4 WAY VALVE)   1   CWA43C2431   O

   37   V-COIL CO. (EXPANSION VALVE)   1   ACXA43C06020   O

   38   HOLDER - SENSOR   3   CWH32143

   39   CABINET SIDE PLATE CO.   1   ACXE04C08670

   40   CABINET SIDE PLATE (L)   1   ACXE04-13070G

   300


--- Page 301 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-UDZ03KE5   REMARK

   41   CABINET FRONT PLATE - CO.   1   ACXE06C04700

   42   CABINET TOP PLATE   1   ACXE03-04830G

   43   CONTROL BOARD COVER   1   CWH131473

   44   CONTROL BOARD COVER - COMPLETE   1   ACXH13C06420

   45   SOUND PROOF MATERIAL   1   ACXG30-08570

   46   SOUND PROOF MATERIAL   1   CWG302630

   47   SOUND PROOF MATERIAL   1   CWG302788

   48   ACCESSORY COMP. (CAP)   1   ACXH82C03830

   49   ACCESSORY COMP. (DRAIN ELBOW)   1   ACXH82C21740

   50   PANASONIC BADGE   1   ACXE37-19200

   51   BAG   1   CWG861078

   52   BASE BOARD - COMPLETE   1   CWG62C1162

   53   SHOCK ABSORBER   1   ACXG70-14440A

   54   SHOCK ABSORBER   1   ACXG70-14450A

   55   C.C. CASE   1   ACXG50-48673

   56   MODEL LABEL   2   ACXF85-99600

Note:
 All parts are supplied from PAPAMY, Malaysia (Vendor Code: 00029488).
 “O” marked parts are recommended to be kept in stock.

   301


--- Page 302 ---
22.2.2 WH-UDZ05KE5 WH-UDZ07KE5 WH-UDZ09KE5

 For WH-UDZ05KE5   For WH-UDZ07KE5
   51
   58   58

 For WH-UDZ09KE5   56

   58

   50

   48   46

   43   15
   64

   14
   6
 62

   63
   37   39
   54
   5

   7

   38
   60   13
   11   18
   9   40   36
   8   17   47
   41
   12   10   29
   61
   55
   16
   52
   28
   35
   42
   49
   31
   27
   21
   53
   34
   33   20
   26
   3   19
   4

   25

   30   24
   59
   23
   2

   45
   8   22
   1   32
   44

   57

Note:
The above exploded view is for the purpose of parts disassembly and replacement.
The non-numbered parts are not kept as standard service parts.

   302


--- Page 303 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-UDZ05KE5   WH-UDZ07KE5   REMARK

   1   BASE PAN ASSY   1   ACXD52K05210   ←

   2   ANTI - VIBRATION BUSHING   3   CWH50077   ←

   3   COMPRESSOR   1   9RD220XBC21   ←   O

   4   NUT - COMPRESSOR MOUNT   3   CWH561096   ←

   5   BRACKET FAN MOTOR   1   ACXD54-04490   ←

   6   PARTICULAR PLATE   1   CWD911802   ←

   7   FAN MOTOR, DC 60W 3PH   1   L6CBYYYL0422   ←   O

   8   SCREW - BRACKET FAN MOTOR   3   ACXH55-07140   ←

   9   SCREW - FAN MOTOR MOUNT   4   CWH551323   ←

   10   PROPELLER FAN ASSY   1   CWH00K1006   ←

   11   NUT - PROPELLER FAN   1   CWH561092   ←

   12   WASHER   1   CWH571067   ←

   13   WASHER   1   CWH571068   ←

   14   CONDENSER   1   ACXB32C26350   ←

   15   MANIFOLD TUBE ASS’Y (CAP TUBE)   1   ACXT00C27650   ←

   16   4-WAYS VALVE   1   ACXB00-00140   ←   O

   17   HIGH PRESSURE SENSOR CN-HPS   1   CWA501463   ←   O

   18   PRESSURE SWITCH   1   ACXA10-00640   ←   O

   19   RECEIVER   1   CWB14017   ←

   20   STRAINER   2   CWB111063   ←

   21   DISCHARGE MUFFLER   1   CWB121013   ←

   22   LEAD WIRE - CO. (CN-HPS)   1   ACXA60C94010   ←   O

   23   3-WAYS VALVE   1   CWB011363   ←   O

   24   HOLDER - COUPLING   1   CWH351228   ←

   25   2-WAYS VALVE   1   CWB021464   ←   O

   26   SOUND PROOF MATERIAL   1   ACXG30-13230   ←

   27   SOUND PROOF MATERIAL   1   ACXG30-13240   ←

   28   SOUND PROOF MATERIAL   1   ACXG30-13310   ←

   29   SOUND - PROOF BOARD   1   ACXH15-03900   ←

   30   SOUND PROOF MATERIAL   1   ACXG30-13250   ←

   31   EXPANSION VALVE   1   CWB051029   ←   O
   SENSOR - CO. COMPRESSOR TEMP
   32   1   ACXA50C17400   ←   O
   (CN-TANK)
   33   TERMINAL COVER   1   CWH171039A   ←

   34   NUT - TERMINAL COVER   1   CWH7080300J   ←

   35   REACTOR   1   G0C392J00027   ←   O

   36   TERMINAL BOARD ASS’Y (1,2,3)   1   CWA28K1076J   ←   O

   37   ELECTRONIC CONTROLLER - MAIN   1   ACXA73C91120R   ACXA73C91130R   O

   38   PLATE - C.B. COVER   1   CWH102361   ←

   39   CONTROL BOARD COVER   1   ACXH13-09170   ←

   40   CONTROL BOARD COVER - COMPLETE   1   ACXH13K00830   ←

   41   V-COIL COMP. (4 WAY VALVE)   1   ACXA43C00250   ←   O

   42   V-COIL CO. (EXPANSION VALVE)   1   A43C2342   ←   O
   SENSOR - CO. OUTDOOR AIR & PIPE TEMP
   43   1   CWA50C2822   ←   O
   (CN-TH1)

   303


--- Page 304 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-UDZ05KE5   WH-UDZ07KE5   REMARK

   44   SENSOR - CO. DISCHARGE (CN-DIS)   1   CWA50C2722   ←   O

   45   SENSOR - CO. EVA EXIT (CN-TH3)   1   ACXA50C14960   ←   O

   46   HOLDER - SENSOR   1   CWH321096G   ←

   47   CABINET SIDE PLATE CO.   1   ACXE04-13310G   ←

   48   CABINET SIDE PLATE (L)   1   CWE041585G   ←

   49   CABINET FRONT PLATE - CO.   1   ACXE06C04610   ←

   50   HANDLE   1   CWE161010G   ←

   51   CABINET TOP PLATE   1   CWE031083G   ←

   52   CONTROL BOARD COVER   1   CWH131332   ←

   53   CONTROL BOARD COVER - COMPLETE   1   ACXH13C06350   ←

   54   SOUND PROOF MATERIAL   1   ACXG30-13260   ←

   55   SOUND PROOF MATERIAL   1   ACXG30-13270   ←

   56   ACCESSORY COMP. (CAP)   1   ACXH82C09831   ←

   57   ACCESSORY COMP. (DRAIN ELBOW)   1   ACXH82C21740   ←

   58   MODEL LABEL   2   ACXF85-99610   ACXF85-99620

   59   DISCHARGE GRILLE - COMPLETE   1   ACXE20C07970   ←

   60   BAG   1   CWG861154   ←

   61   BASE BOARD - COMPLETE   1   ACXG62C02810   ←

   62   SHOCK ABSORBER   1   ACXG70-15180   ←

   63   SHOCK ABSORBER   1   ACXG70-15190   ←

   64   C.C. CASE   1   ACXG50-61910   ←

Note:
 All parts are supplied from PAPAMY, Malaysia (Vendor Code: 00029488).
 “O” marked parts are recommended to be kept in stock.

   304


--- Page 305 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-UDZ09KE5   REMARK

   1   BASE PAN ASSY   1   ACXD52K05210

   2   ANTI - VIBRATION BUSHING   3   CWH50077

   3   COMPRESSOR   1   9RD220XBC21   O

   4   NUT - COMPRESSOR MOUNT   3   CWH561096

   5   BRACKET FAN MOTOR   1   ACXD54-04490

   6   PARTICULAR PLATE   1   CWD911802

   7   FAN MOTOR, DC 60W 3PH   1   L6CBYYYL0422   O

   8   SCREW - BRACKET FAN MOTOR   3   ACXH55-07140

   9   SCREW - FAN MOTOR MOUNT   4   CWH551323

   10   PROPELLER FAN ASSY   1   CWH00K1006

   11   NUT - PROPELLER FAN   1   CWH561092

   12   WASHER   1   CWH571067

   13   WASHER   1   CWH571068

   14   CONDENSER   1   ACXB32C26350

   15   MANIFOLD TUBE ASS’Y (CAP TUBE)   1   ACXT00C27650

   16   4-WAYS VALVE   1   ACXB00-00140   O

   17   HIGH PRESSURE SENSOR CN-HPS   1   CWA501463   O

   18   PRESSURE SWITCH   1   ACXA10-00640   O

   19   RECEIVER   1   CWB14017

   20   STRAINER   2   CWB111063

   21   DISCHARGE MUFFLER   1   CWB121013

   22   LEAD WIRE - CO. (CN-HPS)   1   ACXA60C94010   O

   23   3-WAYS VALVE   1   CWB011363   O

   24   HOLDER - COUPLING   1   CWH351228

   25   2-WAYS VALVE   1   CWB021464   O

   26   SOUND PROOF MATERIAL   1   ACXG30-13230

   27   SOUND PROOF MATERIAL   1   ACXG30-13240

   28   SOUND PROOF MATERIAL   1   ACXG30-13310

   29   SOUND - PROOF BOARD   1   ACXH15-03900

   30   SOUND PROOF MATERIAL   1   ACXG30-13250

   31   EXPANSION VALVE   1   CWB051029   O

   32   SENSOR - CO. COMPRESSOR TEMP (CN-TANK)   1   ACXA50C17400   O

   33   TERMINAL COVER   1   CWH171039A

   34   NUT - TERMINAL COVER   1   CWH7080300J

   35   REACTOR   1   G0C392J00027   O

   36   TERMINAL BOARD ASS’Y (1,2,3)   1   CWA28K1076J   O

   37   ELECTRONIC CONTROLLER - MAIN   1   ACXA73C91140R   O

   38   PLATE - C.B. COVER   1   CWH102361

   39   CONTROL BOARD COVER   1   ACXH13-09170

   40   CONTROL BOARD COVER - COMPLETE   1   ACXH13K00830

   41   V-COIL COMP. (4 WAY VALVE)   1   ACXA43C00250   O

   42   V-COIL CO. (EXPANSION VALVE)   1   A43C2342   O
   SENSOR - CO. OUTDOOR AIR & PIPE TEMP
   43   1   CWA50C2822   O
   (CN-TH1)

   305


--- Page 306 ---
SAFETY   REF. NO.   DESCRIPTION & NAME   QTY.   WH-UDZ09KE5   REMARK

   44   SENSOR - CO. DISCHARGE (CN-DIS)   1   CWA50C2722   O

   45   SENSOR - CO. EVA EXIT (CN-TH3)   1   ACXA50C14960   O

   46   HOLDER - SENSOR   1   CWH321096G

   47   CABINET SIDE PLATE CO.   1   ACXE04-13310G

   48   CABINET SIDE PLATE (L)   1   CWE041585G

   49   CABINET FRONT PLATE - CO.   1   ACXE06C04610

   50   HANDLE   1   CWE161010G

   51   CABINET TOP PLATE   1   CWE031083G

   52   CONTROL BOARD COVER   1   CWH131332

   53   CONTROL BOARD COVER - COMPLETE   1   ACXH13C06350

   54   SOUND PROOF MATERIAL   1   ACXG30-13260

   55   SOUND PROOF MATERIAL   1   ACXG30-13270

   56   ACCESSORY COMP. (CAP)   1   ACXH82C09831

   57   ACCESSORY COMP. (DRAIN ELBOW)   1   ACXH82C21740

   58   MODEL LABEL   2   ACXF85-99630

   59   DISCHARGE GRILLE - COMPLETE   1   ACXE20C07970

   60   BAG   1   CWG861154

   61   BASE BOARD - COMPLETE   1   ACXG62C02810

   62   SHOCK ABSORBER   1   ACXG70-15180

   63   SHOCK ABSORBER   1   ACXG70-15190

   64   C.C. CASE   1   ACXG50-61910

Note:
 All parts are supplied from PAPAMY, Malaysia (Vendor Code: 00029488).
 “O” marked parts are recommended to be kept in stock.

\

   [PAPAMY] Printed in Malaysia
   SB0825-0

   306
