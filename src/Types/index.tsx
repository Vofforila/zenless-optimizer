import {ImageImport} from "../Utilities"

// Type
export type ImageName = keyof typeof ImageImport;

type MainStatType = "HP%" | "ATK%" | "DEF%" | "CRIT Rate" | "CRIT DMG" |
    "Anomaly Proficiency" | "PEN Ratio" | "Electric DMG" |
    "Fire DMG" | "Ice DMG" | "Wind DMG" | "Physical DMG";

type SubstatKey = "def" | "eleMas" | "def_" | "atk" | "hp" | "critRate" |
    "critDmg" | "atkPercentage" | "hpPercentage" | "defPercentage" | "";

// Props

