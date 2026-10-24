# HMG Field Notes

In-house knowledge of common problems not covered (or not clearly covered) in the manufacturer manuals. Check the manual first, then these notes. Cite as "Source: HMG Field Notes – <problem>".

---

## Can't get into Installer setup on the controller

- **Product/model:** Panasonic J-series Mini Monobloc R32 (WH-MDC05/07/09J3E5); also applies to the K-series split controller
- **Problem:** Installer setup menu can't be accessed
- **Symptoms / fault code:** No fault code. Installer setup won't open from [Menu] while the heat pump is running.
- **Cause:** Installer settings are locked while the unit is in operation. The J-series manual says "Ensure the operation indicator is OFF before setting" (Service Manual p.23). The K-series manual doesn't say this.
- **Fix:** Press the power button ([Operate] ⏻) on the controller to switch the heat pump OFF, so the operation LED goes out. Then press [Menu] (top-right button) and go to Installer setup. Switch the unit back on with [Operate] when finished.
- **Confirmed by / date:** Donal Reilly, 23/10/2026

## F12 high pressure trips on site

- **Product/model:** Panasonic J-series Mini Monobloc R32 (WH-MDC05/07/09J3E5).
- **Problem:** Heat pump keeps running and cuts out on high pressure
- **Symptoms / fault code:** F12 (Pressure switch activate, high pressure). Unit runs constantly before tripping; cylinder or dwelling never reaches temperature.
- **Cause:** Two known site causes, on top of the manual's list (J-series SM p.192):
  1. DHW cylinder sensor not in the correct position, so it isn't reading the actual cylinder temperature. The heat pump keeps running to satisfy it and cuts out on high pressure.
  2. The duct carrying the flow and return pipes from the outdoor unit to the indoor unit isn't sealed and has water in it. The unit works constantly, never gets the dwelling up to temperature, and trips on high pressure.
  These are not causes of "flow temperature not achieved": flow temperature is sensed in the unit after the condenser, so the DHW sensor position and a wet duct don't affect it (Donal).
- **Fix:**
  1. Check the DHW sensor is fully in the cylinder sensor pocket at the correct position, so it reads the real cylinder temperature. Refit and secure it.
  2. Check the flow/return pipe duct between the outdoor and indoor unit. If there is water in it, clear the water and seal the duct properly.
- **Confirmed by / date:** Donal Reilly, 24/10/2026
