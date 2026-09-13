"""Conditional PLH budget; standard-library only. No measured yield implied."""
import json

C = 299_792_458.0
AU = 1.495978707e11
MU = 1.3271244e20
DRY_CELL_KG = 20e-15  # Assumed dry carrier, not established by the book.
INITIAL_ENERGY_J = 1.5e6
BETA = 0.92
REFERENCE_CELLS_S = 6.3e8  # Retained rounded scenario, not a measurement.


def calculate():
    initial_mass = DRY_CELL_KG + INITIAL_ENERGY_J / C**2
    mass = initial_mass * (1 - BETA) / (1 + BETA)
    energy = (mass - DRY_CELL_KG) * C**2
    specific = energy / mass
    transfer_kg = 100 * 45_000 * C / specific
    rows = []
    for r in (0.3, 0.5):
        acceleration = MU / (r * AU)**2 - MU * r * AU / (0.723 * AU)**3
        keep_kg_day = 100 * acceleration * C / specific * 86400
        geometry = ((0.723 - r) / (0.723 - 0.3))**2
        gross_kg_day = REFERENCE_CELLS_S * geometry * mass * 86400
        for efficiency in (1, 0.01, 0.001, 0.0001):
            gross = gross_kg_day * efficiency
            net = gross - keep_kg_day - transfer_kg / 180
            rows.append(dict(radius_AU=r, capture_efficiency=efficiency,
                             gross_g_day=gross * 1000, net_g_day=net * 1000,
                             net_GW=net * specific / 86400 / 1e9))
        rows.append(dict(radius_AU=r, keep_g_day=keep_kg_day*1000,
                         break_even_efficiency=(keep_kg_day+transfer_kg/180)/gross_kg_day))
    return dict(cell_mass_pg=mass*1e15, cell_energy_J=energy,
                specific_PJ_kg=specific/1e15,
                mass_multiplier=mass/DRY_CELL_KG,
                energy_multiplier=energy/(DRY_CELL_KG*45e15),
                transfer_g=transfer_kg*1000,
                equal_leg_beta_limit=((initial_mass/(2*DRY_CELL_KG))**0.5-1)/
                                     ((initial_mass/(2*DRY_CELL_KG))**0.5+1),
                scenarios=rows)


if __name__ == '__main__':
    print(json.dumps(calculate(), ensure_ascii=False, indent=2))
