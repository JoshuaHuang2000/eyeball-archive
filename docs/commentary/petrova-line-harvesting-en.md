---
title: "Why Not Harvest Astrophage Directly? Engineering and Energy Budgets on the Petrova Line"
description: "Using the novel's own premises, photon-rocket dynamics, narrowband optical lures, and stationkeeping budgets to examine when a small Astrophage harvester could export net energy."
outline: deep
lang: en-US
---

# Why Not Harvest Astrophage Directly? Engineering and Energy Budgets on the Petrova Line

[中文版](./petrova-line-harvesting)

**A technical exploration of Project Hail Mary | English edition | September 11, 2026**

> **Spoilers for major scientific premises and plot developments in the novel.** This article accepts Astrophage and Spin Drive technology as described in the story and explores their engineering implications within that fictional world.

Astrophage acquire energy from the Sun, then travel along the Petrova line to Venus to reproduce. If humanity can already build Astrophage engines and knows how to attract the organisms with artificial light, a natural question follows: **could a small station enter this natural energy stream and collect more Astrophage than it consumes to operate?**

The proposed architecture is straightforward: a chemical rocket places the equipment in low Earth orbit; a Spin Drive handles deep-space transfer and stationkeeping; a directional infrared beacon attracts Venus-bound cells; and a terminal collector guides them into light-tight storage tanks. Some of the product powers the system, while the rest is periodically shipped out.

The calculations yield two distinct results. First, under an explicit single-cell model, Astrophage can retain a specific energy of about **87 PJ/kg** upon collection, even after accelerating to 0.92c and braking under their own power. Second, a reference station with a total mass of 100 kg at 0.30 AU would consume only about **1.82 g/day** of that product for stationkeeping. Turning these results into actual production depends on whether local flux, remote attraction, and terminal collection can together achieve the required efficiency.

The following sections lay out those conditions. All citations are to Andy Weir's *Project Hail Mary*. Canonical premises, modeling assumptions, and calculated results are identified separately.

## 1. What capabilities does the novel already provide?

### Natural charging and migration

Grace infers that Astrophage accumulate energy near the Sun, follow magnetic field lines away from its north pole, and then turn toward Venus to obtain the resources needed for reproduction. After reproduction, both parent and daughter cell return to the Sun. The Petrova line is therefore a directional migration stream whose participants occupy different stages of a life cycle.[1](#ref-1)

The intended targets are **cells heading toward Venus that have not yet reproduced**. They have acquired stored energy and are in the life-cycle state that responds to planetary navigation signals. “Enriched” does not mean every cell remains fully charged throughout its journey: migration itself consumes energy.

### Artificial light attracts cells, and light intensity controls thrust

The novel explicitly identifies two navigation wavelengths: **4.26 μm and 18.31 μm**. Grace attracts cells using a white lightbulb and filters, then repeats the experiment with 18.31 μm alone and 4.26 μm alone. Either channel attracts cells in the appropriate life-cycle state.[2](#ref-2)

The Spin Drive takes this behavior further. Dim lure light makes Astrophage push gently and adhere to a rotor. After the rotor turns, stronger lure light increases their thrust, with the propulsion light leaving the engine. The prototype is configured to exhaust their stored energy in about four seconds to avoid damaging the rotor with excessive force; the depleted, dead cells are then removed.[3](#ref-3)

This provides direct canonical support for a sequence of remote attraction, terminal control, and collection. However, the weak-light attachment demonstration does not establish how to brake a relativistic incoming stream safely. That step still needs dedicated validation.

### Collection and light-tight storage both have precedents

ArcLight's mission plan includes twelve sampling orbits around Venus, and its returned sample initially contains 174 living cells. Later, the Hail Mary's external collector also successfully retains substantial numbers of cells.[4](#ref-4)

Grace uses light-sealed sample containers and proposes that cells being charged will wait if they cannot see the CO₂ spectral signature. Astrophage maintain **96.415°C**; below that temperature, they spend stored energy to warm themselves.[5](#ref-5)

The storage concept therefore calls for light exclusion, containment, and control of outward heat loss. Simply putting the tank in a cold environment would cause the product to keep consuming its own energy.

## 2. How much does a collected cell weigh, and how much energy remains?

The cell's non-propellant carrier mass must be distinguished from the mass associated with stored energy.

In one passage, early samples have an average mass of about **20 pg**. In another, a single cell receives **1 kW of laser light for 25 minutes**, approaches saturation after absorbing **1.5 MJ**, and gains approximately **17 ng**. The novel also calculates engine output through mass–energy conversion: 6 g/s corresponds to about 540 TJ/s.[6](#ref-6)

Thus, 20 pg cannot be treated as a constant total cell mass at every charge state. This article adopts the following **modeling assumptions**:

| Parameter | Value | Status |
| --- | ---: | --- |
| Non-propellant dry carrier mass mᵦ | 20 pg | Approximated from the early samples; the book does not explicitly identify it as dry mass |
| Stored energy at departure E₀ | 1.5 MJ | Based on the charging experiment, assumed recoverable |
| Peak speed βc | 0.92c | A speed the book says cells can reach, not a uniform speed throughout the stream |
| Acceleration and braking | Ideal directed photon emission | Used for the energy budget |
| Other losses | Initially neglected | To be revised using measurements |

The novel's 0.92c figure comes from Doppler analysis of Astrophage emissions.[7](#ref-7) Here it defines an energy-intensive flight scenario: a cell departs fully charged, completes one acceleration and one braking phase, and enters the tank approximately at rest.

### The relativistic photon-rocket equation

Define rapidity as χ = atanh(β). For an ideal photon rocket, the mass ratio is the exponential of the accumulated change in rapidity. Accelerating from rest to βc and then braking back to rest in the same reference frame gives:

```text
m_collected / m_departure = exp[−2 atanh(β)]
                          = (1 − β) / (1 + β)
```

At β = 0.92, this ratio is **1/24**. Neglecting gravity, differences in endpoint orbital velocity, and additional maneuvering costs, and taking c = 299,792,458 m/s:

```text
m_departure = mᵦ + E₀/c² ≈ 16.710 ng
m_collected = m_departure / 24 ≈ 0.6962 ng
E_collected = (m_collected − mᵦ)c² ≈ 60.8 kJ
ε_collected = E_collected / m_collected ≈ 87.3 PJ/kg
```

**Only about 4.05% of the cell's initial stored energy remains, but its total mass has also fallen sharply.** Most of the remaining product mass still represents stored energy, so its specific energy remains close to c².

| Peak speed | Collected mass per cell | Remaining energy per cell | Specific energy upon collection |
| ---: | ---: | ---: | ---: |
| 0.50c | 5.570 ng | 499 kJ | 89.6 PJ/kg |
| 0.80c | 1.857 ng | 165 kJ | 88.9 PJ/kg |
| 0.90c | 0.8795 ng | 77.2 kJ | 87.8 PJ/kg |
| 0.92c | 0.6962 ng | 60.8 kJ | 87.3 PJ/kg |

The remaining calculations use the final row. It already includes a complete braking phase; that cost must not be deducted again from net output. Additional turning, heat loss, or nonideal emission during actual collection would reduce the remaining energy.

The book also describes 2 g as approximately 95 billion cells, again implying about 21 pg/cell, without consistently specifying the charge state in that passage.[6](#ref-6) The dry-carrier assumption is therefore a conditional interpretation of dispersed parameters, not a complete mass-versus-charge curve supplied by the novel.

### Can both legs of the full life cycle reach 0.92c?

Suppose a cell uses material from Venus to make a second identical carrier, reproduction consumes negligible energy, and the two cells split the remaining stored energy equally. There is still insufficient energy for both the outbound and return legs to reach 0.92c with entirely self-powered acceleration and braking.

Let Q = (1 + β)/(1 − β), and R = m_departure/mᵦ ≈ 835.5. Because the extra carrier mass at reproduction comes from the planet, the minimum condition for a complete round trip with equal peak speeds is:

```text
R ≥ 2Q² − Q
```

At β = 0.92, this requires R ≥ 1,128, exceeding 835.5. The limit for equal peak speeds on both legs is approximately **0.908c**, with no additional energy margin. The natural life cycle could involve different speeds on its two legs, or atmospheric braking. The book's statement that cells can reach 0.92c does not require every leg to reach that peak.

The harvesting station intercepts only the first acceleration–braking sequence, before reproduction, so it does not need to reserve fuel for the cells' post-reproduction return journey.

## 3. The minimum station: beacon, collector, dark tank, and engine

The reference architecture is:

```text
Deployment in LEO → Spin Drive transfer → Map the stream and maintain station
                                                    ↓
Remote IR beacon → Redirect incoming cells → Terminal guidance and braking
                                                    ↓
                                             Light-tight storage
                                               ├→ System consumption
                                               └→ Transport handoff → Receiving facility
```

The collector's physical aperture does not have to span the entire region of influence. If cells actively change course, the remote beacon can direct a dispersed stream toward a smaller collection opening. The spacecraft still needs stream diagnostics, communications, attitude control, thermal control, metering, and independent containment mechanisms.

The reference station is provisionally assigned a **total mass of 100 kg**, including its operating inventory. That mass budget needs validation. The novel already includes small return probes and attitude-control Spin Drives, so small-scale photon propulsion is not an added fictional technology. This does not automatically establish that a complete harvesting system can fit within 100 kg.[8](#ref-8)

## 4. How large a region could a one-kilowatt beacon influence?

### Compare brightness within the same navigation channel

Under a linear-response approximation, the effective signal a cell receives from a source can be written as:

```text
S = ∫ R(λ) Fλ(λ) dλ
```

R is the response function and Fλ is spectral irradiance. The artificial beacon must compete with Venus in this channel, rather than outshine Venus's total radiation across all wavelengths.

To establish a reproducible reference model, assume:

| Optical parameter | Reference value |
| --- | ---: |
| Station's heliocentric distance | 0.30 AU |
| Venus's heliocentric distance | 0.723 AU |
| Separation D | 0.423 AU, approximately 6.33 × 10¹⁰ m |
| Venus model | Uniform 230 K blackbody with radius 6.052 × 10⁶ m |
| Approximate navigation wavelength | 18.3 μm |
| Equivalent response bandwidth Δλ | 0.1 μm |
| Emitted optical power P in the useful band | 1 kW |

Apart from the navigation wavelength, which comes from the novel, these are reference astronomical values or modeling assumptions. In particular, **the 230 K blackbody and 0.1 μm bandwidth are not canonical parameters**, nor are they guaranteed to give a conservative estimate of Venus's competing signal.

Calculate blackbody spectral radiance Bλ using Planck's law, then multiply by the solid angle of Venus's apparent disk:

```text
Bλ(T) = (2hc²/λ⁵) / [exp(hc/λkT) − 1]
Fλ,V = π Bλ(T) (RV/D)²
```

Under these assumptions, Venus's spectral irradiance at the station is about **5.65 × 10⁻⁸ W·m⁻²·μm⁻¹**, and its in-band irradiance is about **5.65 × 10⁻⁹ W/m²**.

### Optical dominance area is not a validated capture area

Assume the beacon distributes its light uniformly within solid angle Ω, and provisionally take equal apparent brightness with Venus as the threshold for changing behavior:

```text
F_beacon(x) = P/(Ωx²)
x_max² = P/(ΩFV)
A_opt = Ωx_max² = P/FV
```

This gives an optical dominance cross section of about **1.8 × 10⁵ km²**, equivalent to a circle with a radius of roughly **237 km**. It is neither a physical collection aperture nor a demonstrated “net” that captures every cell within it.

Directional gain G = 4π/Ω increases the range of influence, but cancels out of this cross-section expression. It must not be multiplied into P/FV a second time. If changing behavior requires the beacon to be K times brighter than Venus, the area must also be divided by K.

| Equivalent bandwidth | Optical dominance area at 1 kW |
| ---: | ---: |
| 0.01 μm | Approximately 1.8 × 10⁶ km² |
| 0.10 μm | Approximately 1.8 × 10⁵ km² |
| 0.20 μm | Approximately 8.9 × 10⁴ km² |
| 1.00 μm | Approximately 1.8 × 10⁴ km² |

The 1 kW figure is **emitted optical power** in the useful band. If the system has only 1 kW of electrical power available, source and optical-path efficiencies must be included separately. The bandwidth table is a sensitivity sweep; the single-band experiments do not establish the receptor's actual bandwidth.

### The beacon imitates Venus's source spectrum

Astrophage must already recognize Venus's CO₂ signal during high-speed migration. Natural Venusian light undergoes a Doppler transformation in the cell's frame too.[1](#ref-1)[7](#ref-7) The two wavelengths used in stationary experiments therefore cannot simply be interpreted as fixed cell-frame wavelengths that the organism accepts at every speed, with the artificial beacon alone required to compensate.

For the non-Keplerian station considered here, its velocity relative to Venus is small on relativistic scales. If the beacon and Venus lie in approximately the same direction as seen by an incoming cell, their spectra and irradiances undergo approximately the same Doppler transformation. **The appropriate design baseline is to imitate Venus's navigation spectrum in the source frame, using the novel's 4.26 μm or 18.31 μm channel directly, rather than pre-shifting it to compensate for 0.92c.** Under this approximation, the common transformation does not by itself change the beacon-to-Venus brightness ratio within the same response channel.

The novel does not explain how cells maintain recognition across different speeds. Active compensation, a response that changes with state, and other mechanisms are possible explanations. The relevant premise is the high-speed navigation capability the novel already grants them; its implementation need not be specified additionally. Angular differences outside the approximately aligned geometry, the actual response bandwidth, and target-selection rules still need measurement. High cell speed alone does not establish that the beacon must actively tune its wavelength.

## 5. How do sample counts translate into production scenarios?

ArcLight's twelve-orbit mission plan and its 174 surviving returned cells provide a counting clue. The novel does not specify its collection area, orbital period, or actual time within the stream. The roughly half-meter-square collector and the 21-hour-17-minute exposure belong to the Hail Mary's separate sampling operation at Adrian and cannot simply be assigned to ArcLight.[4](#ref-4)

Keep these quantities as parameters: Aₛ is sampling area, T is total duration, f is the fraction of time in the stream, and ηₛ is collection-and-survival efficiency.

```text
T_effective = T f
Φ_total = 174 / (Aₛ T_effective ηₛ)
```

Total mission duration is not the same as effective exposure time. If half the orbit lies on the side where Venus blocks the incoming stream, and that segment is approximated as having no target flux, effective sampling time is about 45 minutes per orbit. Across twelve orbits this is **9 hours**, or f = 0.5, not 45 minutes in total. Occlusion must be assessed relative to the incoming stream, not simply by whether the spacecraft is on Venus's night side. The actual fraction also depends on orbital altitude, orbital plane, and the stream's width and direction. The novel does not provide enough geometry to fix this fraction.[4](#ref-4)

To avoid treating the half-orbit assumption as a known trajectory, the main calculation retains a full-exposure normalization and then explicitly shows the half-exposure case. Set Aₛ = 0.25 m², T = 12 × 90 minutes = 64,800 s, and f = ηₛ = 1. Following the one-cell-out, two-cells-back reproduction picture, provisionally assign one-third of the total number flux to planet-bound cells. The book explicitly states that expected ratio, but the actual ratio at Adrian differs, so one-third is not a direct measurement at Venus.[9](#ref-9)

The resulting reference flux of enriched incoming cells is about **3.6 × 10⁻³ cells·m⁻²·s⁻¹**. Further assuming the same local flux at 0.30 AU and using the preceding optical area:

```text
Ṅ_ref = Φ_incoming A_opt ≈ 6.3 × 10⁸ cells/s
```

The main tables below consistently use this rounded f = 1 baseline. It is a **count-rate normalization generated by explicit assumptions**, not a reliable central prediction or a lower bound on flux. Holding other quantities fixed, inferred in-stream flux is inversely proportional to f: if the same 174 cells were collected in half the time, the required local flux doubles. This correction must not then be counted again as an additional multiplier for the harvester's continuous exposure.

There is also a directional condition. Assigning one-third of the total sample to the enriched direction assumes comparable sampling weights for both directions. If Venus's occlusion changes the effective exposure time or efficiency differently for the two streams, each must be inferred separately from its own counts, exposure, and efficiency; dividing the total by three is insufficient. The half-exposure case below retains the original directional fraction solely to isolate the effect of the time correction.

Define ηc as the effective fraction of the reference count that reaches storage, including beam overlap, behavioral response, successful braking, entry, and retention. If retained cells all satisfy the state modeled in Section 2:

```text
Ṅ_collected = Ṅ_ref ηc
ṁ_product = Ṅ_collected × 696 pg
P_stored = Ṅ_collected × 60.8 kJ
```

| ηc | Gross collected product | Gross stored-energy rate |
| ---: | ---: | ---: |
| 100%: ideal arithmetic baseline | 37.9 kg/day | 38.3 TW |
| 1% | 379 g/day | 383 GW |
| 0.1% | 37.9 g/day | 38.3 GW |
| 0.01% | 3.79 g/day | 3.83 GW |

### Sensitivity case: exposure during half of each orbit

Taking f = 0.5 with other conditions unchanged gives a reference enriched-cell flux of about **7.2 × 10⁻³ cells·m⁻²·s⁻¹** and a reference count rate of **1.26 × 10⁹ cells/s**. For a harvesting station that can remain continuously in the stream:

| ηc | Gross output, f = 1 | Gross output, f = 0.5 | Gross stored-energy rate, f = 0.5 |
| ---: | ---: | ---: | ---: |
| 1% | 379 g/day | 758 g/day | 766 GW |
| 0.1% | 37.9 g/day | 75.8 g/day | 76.6 GW |
| 0.01% | 3.79 g/day | 7.58 g/day | 7.66 GW |

This is an explicit correction for the orbital sampling duty cycle, not another measured benefit. A lower actual f would imply a higher flux with other assumptions held fixed. The real trajectory and directional sampling data still need to be established.

### Two sampling-area cases: 0.25 m² and 75 m²

Because ArcLight's sampling area is unknown, a low-flux scenario implied by a larger collector must also be examined. This article additionally adopts **5 m × 15 m = 75 m²** as a generous area allowance for a collector launched in one piece, without folding or in-orbit assembly, for stress testing. It is not a canonical parameter, a complete rectangle verified to fit a particular rocket's internal payload envelope, or a universal area limit for modern launch vehicles.

The comparison concerns **ArcLight's sampling area Aₛ used to infer flux**, not the active harvester's optical dominance area A_opt. Area should mean the effective projection normal to the incoming stream. Front and back surfaces, or surfaces that do not face the stream, cannot simply be added together. Treating the entire 75 m² as effective projected sampling area is deliberately generous; for a fixed returned sample count, it lowers the inferred flux.

75 m² is **300 times** 0.25 m². With exposure time, directional fraction, and sampling efficiency held fixed, both inferred flux and the active station's reference gross output fall to 1/300. Using the existing rounded baseline:

```text
Ṅ_ref(Aₛ, f) = 6.3 × 10⁸ × (0.25 m²/Aₛ) × (1/f) cells/s
```

| Assumed ArcLight sampling area | In-stream fraction f | Total effective exposure | Active station reference count rate | Gross output at ηc = 100% |
| --- | ---: | ---: | ---: | ---: |
| 0.5 × 0.5 m = 0.25 m² | 1 | 18 h | 6.3 × 10⁸ cells/s | 37.9 kg/day |
| 0.5 × 0.5 m = 0.25 m² | 0.5 | 9 h | 1.26 × 10⁹ cells/s | 75.8 kg/day |
| 5 × 15 m = 75 m² | 1 | 18 h | 2.1 × 10⁶ cells/s | 126 g/day |
| 5 × 15 m = 75 m² | 0.5 | 9 h | 4.2 × 10⁶ cells/s | 253 g/day |

All rows describe a station at 0.30 AU, with the optical model, cell state, and sampling-survival efficiency unchanged. The 75 m² case is the unfavorable endpoint of this chosen area range. Combined with f = 1, it gives the table's lowest flux; combined with half-orbit exposure, it gives the f = 0.5 row. It does not rule out a lower actual local flux, because extrapolation between locations, directional selection, and optical behavior remain independently uncertain.

These are transportable stores of energy, not terrestrial power-plant output. For mixed charge states, the more general calculation sums “cell count × remaining energy upon collection” over each group, rather than multiplying by a universal cell mass.

## 6. How much does the station itself consume?

### Reference stationkeeping at Venus's angular velocity

First approximate the Sun–Venus system with circular, coplanar orbits. A station inside Venus's orbit moving at Venus's angular velocity requires continuous outward thrust to offset the difference between local gravity and the required centripetal acceleration.

Take the solar gravitational parameter μ = 1.3271 × 10²⁰ m³/s², 1 AU = 1.4960 × 10¹¹ m, and Venus's orbital radius rV = 0.723 AU:

```text
ωV² = μ/rV³
a(r) = μ/r² − ωV²r
F = Ma
ṁ_keep = Fc/ε_collected = Mac/ε_collected
```

Thus ṁ_keep = Mac/ε_collected, in kg/s. The last expression assumes all usable product energy becomes photon momentum in the required direction. If the overall momentum efficiency is ηp, divide by ηp as well.

| 100 kg reference station | 0.30 AU | 0.50 AU |
| --- | ---: | ---: |
| Outward acceleration | 0.06118 m/s² | 0.01587 m/s² |
| Thrust | 6.118 N | 1.587 N |
| Photon propulsion power Fc | 1.834 GW | 0.476 GW |
| Product consumption | 1.815 g/day | 0.471 g/day |

The actual operating trajectory must be determined by mapping the stream. The novel's description of cells leaving the Sun's north pole before turning toward Venus does not guarantee that the stream lies along the coplanar line used here.[1](#ref-1) The table therefore provides reference operating points for orbital costs.

Consumption measured in grams per day does not mean the engine handles only kilowatts. The 0.30 AU case emits about 1.83 GW in exhaust light. If one millionth is absorbed by the station, that is still about 1.8 kW of thermal load. The novel's Spin Drive sends the propulsion light directly outward specifically to keep spacecraft structure out of the emission path.[3](#ref-3)

### Transport budget

Using an impulse approximation for low-speed travel within the Solar System, assume a transport vehicle of approximately constant total mass 100 kg and provisionally assign a round-trip Δv of 45 km/s:

```text
m_transport_product ≈ M_transport Δv c / ε_collected ≈ 15.45 g/round trip
```

Spread across 180 production days, this is about **0.0859 g/day**. It is an illustrative budget, not an optimized trajectory from low Earth orbit through deep-space rendezvous to final delivery. Low consumption does not imply arbitrarily short travel time. Payload, tank mass, service intervals, and delivery location must be determined through mission design.

## 7. Under what conditions can the system export net energy?

For the 100 kg reference station at 0.30 AU, initially deduct only stationkeeping and the transport allowance above, totaling approximately **1.901 g/day**.

| ηc | Gross output | Product remaining after both costs | Remaining stored-energy rate |
| ---: | ---: | ---: | ---: |
| 1% | 379 g/day | 377 g/day | 381 GW |
| 0.1% | 37.9 g/day | 36.0 g/day | 36.4 GW |
| 0.01% | 3.79 g/day | 1.89 g/day | 1.91 GW |

The efficiency needed to cover just these two costs is:

```text
ηc,break-even ≈ 1.901 / 37,898 ≈ 0.0000502 = 0.00502%
```

That is roughly one in twenty thousand of the reference cell count. This low threshold makes prototype testing attractive, but inherits all the uncertainty of the reference flux and optical model. If actual flux is only one-hundredth of the reference value, the same threshold rises to about 0.5%.

In the half-exposure case, f = 0.5, reference production doubles while costs at the same station mass remain unchanged. The break-even efficiency for the two costs therefore falls to about **0.00251%**, or one in forty thousand. For example, at ηc = 0.1%, gross output at 0.30 AU is about 75.8 g/day, leaving **73.9 g/day, or 74.7 GW**, after both costs. These remain short-term budgets at an assumed total operating mass of 100 kg.

### Does the large sampling-area case remain self-sustaining?

Keep the total operating mass at 100 kg, the station at 0.30 AU, and the combined stationkeeping and illustrative transport consumption at **1.901 g/day**. The sampling assumptions give the following break-even efficiencies:

| Assumed ArcLight area | f | Required ηc |
| --- | ---: | ---: |
| 0.25 m² | 1 | 0.00502% |
| 0.25 m² | 0.5 | 0.00251% |
| 75 m² | 1 | 1.505% |
| 75 m² | 0.5 | 0.753% |

Specifically, for **75 m² and exposure during half of each orbit**:

| Active collection efficiency ηc | Gross output | Product balance after both costs | Result |
| ---: | ---: | ---: | --- |
| 1% | 2.527 g/day | +0.625 g/day | About 0.632 GW of stored-energy surplus remains |
| 0.1% | 0.253 g/day | −1.649 g/day | Requires drawing down startup inventory; not self-sustaining |

With full exposure, f = 1, even ηc = 1% yields only about 1.263 g/day, below the combined costs. It would therefore be incorrect to claim that extremely low capture efficiency suffices regardless of sampling area. More precisely, across the areas and exposure times examined here, the reference station needs approximately **0.0025% to 1.5%** efficiency to cover these two costs. The unfavorable large-area case moves the engineering target to the order of one percent.

A complete energy budget must also include operations, storage losses, downtime, and amortized startup consumption. Using a consistent energy accounting basis:

```text
P_net_export = Ṅ_collected E_collected
               − P_stationkeeping_consumption − P_transport_amortized − P_other_consumption
```

Initial deployment, equipment manufacture, and replacement inputs must also be accumulated over the system's life. The true validation criterion is whether total delivered, verifiable product energy exceeds the complete input, not whether a momentary gross capture rate looks favorable.

### Why not move the station closer to Venus?

Moving closer to Venus reduces stationkeeping thrust but strengthens its competing optical signal. In the same static blackbody geometry, the optical area at 0.50 AU is approximately this fraction of the area at 0.30 AU:

```text
[(0.723 − 0.50)/(0.723 − 0.30)]² ≈ 0.278
```

If local flux, collected cell state, and other efficiencies remain unchanged, at ηc = 0.1% the 0.50 AU station collects about **10.53 g/day** gross and retains **9.98 g/day** after stationkeeping and transport. Its break-even efficiency for those costs is approximately **0.00529%**, close to the 0.30 AU value. Site selection must consider both capture and consumption, rather than comparing stationkeeping fuel alone.

### Growing inventory changes station mass

100 kg is a specified total operating mass. For example, the 0.1% scenario accumulates about 6.82 kg of gross product in 180 days; the 1% scenario accumulates about 68.2 kg. Long storage intervals increase station mass and stationkeeping consumption, and may require a heavier transport vehicle.

If depleted residue is expelled or accounted for separately, inventory should be integrated according to:

```text
dm_inventory/dt = ṁ_capture − k(M_hardware + m_inventory) − ṁ_other − ṁ_export
k = ac/ε_collected
```

All rates must use consistent time units. The short-term margins in the tables can screen candidate designs, but long-term annual production must be calculated together with transport intervals, inventory limits, and tank mass.

## 8. What must a prototype demonstrate?

This architecture is valuable because its stages can be tested experimentally.

| Stage | Measurements | Failure mode to rule out |
| --- | --- | --- |
| Navigation response | Single-channel response, intensity curves, competition between two targets | Artificial signals cannot redirect natural migration |
| Stream and optics | Direction, speed, number flux, target competition in the same channel | Actual effective area or incoming cell count is far below budget |
| Terminal collection | Braking behavior, entry efficiency, remaining energy per cell | Cells change direction but cannot stop safely, or exhaust the product's energy |
| Storage and continuous operation | Heat leakage, escape, residue handling, operating inventory | Gross capture is positive but long-term net accumulation is negative |
| Transport and delivery | Product handoff, return consumption, final energy verification | On-station accumulation cannot become exported energy |

Count, mass, and energy should be measured separately. Beacon-on and beacon-off controls can distinguish active attraction from natural flux variation. Extended tests must cover representative operating conditions rather than select a single best reading.

The most valuable engineering milestone is a first demonstrator that establishes, through repeatable measurements, that **net energy remains available for storage and delivery after necessary operating and transport costs are included**. Only then is there a basis for discussing mass deployment and constellation size.

## 9. What would this route imply?

Under the reference conditions used here, Astrophage retain extremely high specific energy upon collection even after spending most of their per-cell energy on flight. The harvester's propulsion consumption is also only on the order of grams per day. This leaves a conditional range of potential returns worth testing. However, increasing the assumed ArcLight sampling area from 0.25 m² to 75 m² lowers inferred flux by a factor of 300. The self-sustaining threshold must therefore be reported alongside sampling geometry, rather than quoting only the one-in-twenty-thousand efficiency from the small-area case.

The novel already provides artificial optical attraction, intensity-controlled thrust, sampling, light exclusion, and photon propulsion. The central remaining question is whether those capabilities can be combined into a sufficiently effective collection system in the natural high-speed stream. The book supplies neither capture-rate data sufficient to rule this out quantitatively nor data sufficient to guarantee success.

The conclusion supported here is therefore that **active harvesting of the Petrova line deserves engineering validation as an independent energy strategy**. Obtaining energy does not automatically cure solar dimming or build terrestrial heating, lighting, and agricultural infrastructure. It changes the energy budget available for responding to the crisis.

The most useful response to this analysis would identify a canonical property, a dynamical constraint, or a quantifiable engineering limit that prevents the net-positive conditions above from being achieved.

## References and scene locators

Sole source: **Andy Weir, *Project Hail Mary* (2021)**. Page numbers count sequentially from the cover of the 523-page English PDF consulted for this article. Pagination may differ in other editions, so scenes are also identified. The entries below summarize events and parameters; this website does not distribute the novel.

<span id="ref-1"></span>
**[1] Life cycle and route.** PDF pp. 95–96: Grace uses attraction responses and cell division to infer the migration cycle from the Sun's north pole to Venus and back to the Sun.

<span id="ref-2"></span>
**[2] Two navigation channels and independent attraction.** Pp. 91, 94–95: the white-lightbulb-and-filter experiment, followed by separate tests at 18.31 μm and 4.26 μm.

<span id="ref-3"></span>
**[3] Spin Drive intensity control and residue handling.** Pp. 175–177: Dimitri demonstrates dim-light attachment, bright-light propulsion, depletion in about four seconds, and removal of dead cells. The prototype produces 60,000 N for 100 μs while releasing about 1.8 GJ, consistent with photon impulse E/c.

<span id="ref-4"></span>
**[4] Two sampling missions.** P. 37: ArcLight's twelve-orbit sampling plan. P. 80: the returned sample initially contains 174 living cells. Pp. 312–315: the Hail Mary's collector is open for 21 hours and 17 minutes, is roughly half a meter square, and retrieves samples at Adrian.

<span id="ref-5"></span>
**[5] Temperature regulation and light exclusion.** P. 66: the 96.415°C temperature experiments. Pp. 96, 103: light-tight storage and waiting after charging. P. 246: stored energy is used for self-heating when cells become too cold.

<span id="ref-6"></span>
**[6] Mass and stored energy.** P. 60: approximately 20 pg average sample mass. Pp. 109–110: 1 kW, 25 minutes, 1.5 MJ, and approximately 17 ng of added mass. P. 116: 6 g/s and approximately 540 TJ/s. P. 174: 2 g and approximately 95 billion cells.

<span id="ref-7"></span>
**[7] Migration speed.** P. 87: Grace explains that the Indian team used Doppler analysis to establish speeds up to 0.92c and distinguish the two directions of travel.

<span id="ref-8"></span>
**[8] Small propulsion units.** Pp. 331–333: the beetle return probes. Pp. 410, 502: small Spin Drives and attitude-control engines in use.

<span id="ref-9"></span>
**[9] Number-flux ratio.** P. 315: Grace describes the expected one-out, two-back ratio, while the observed populations in the two directions at Adrian are approximately equal.
