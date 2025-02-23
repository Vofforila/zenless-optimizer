const STAT_MAPPINGS = {
    'anomaly_ma': 'Anomaly Mastery',
    'anomaly_pro': 'Anomaly Proficiency',
    'crit_dmg': 'CRIT DMG',
    'crit_rate': 'CRIT Rate',
    'hp_': 'HP%',
    'atk_': 'ATK%',
    'def_': 'DEF%',
    'pen_': 'PEN Ratio',
    'hp': 'HP',
    'atk': 'ATK',
    'def': 'DEF',
    'pen': 'PEN',
    'er': 'Energy Regen%',
    'electric_dmg':'Electric DMG',
    'ice_dmg': 'Ice DMG',
    'fire_dmg': 'Fire DMG',
    'ether_dmg': 'Ether DMG',
    'physical_dmg': 'Physical DMG',
    'impact': 'Impact'
} as const;

export default function StatUIConverter(substat: string) {
    let result = substat.toLowerCase().replace("/", " / ");

    for (const [key, value] of Object.entries(STAT_MAPPINGS)) {
        result = result.replace(key, value);
    }

    return result;
}