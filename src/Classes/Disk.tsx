export type MainStatType = "HP%" | "ATK%" | "DEF%" | "CRIT Rate" | "CRIT DMG" |
    "Anomaly Proficiency" | "PEN Ratio" | "Electric DMG" |
    "Fire DMG" | "Ice DMG" | "Wind DMG" | "Physical DMG";

export type SubstatKey = "HP" | "ATK" | "DEF" | "DEF%" | "HP%" | "ATK%" |
    "PEN" | "Crit Rate" | "Crit Dmg" | "Anomaly Proficiency" | "";

export interface Substat
{
    key: SubstatKey;
    value: number;
}

export interface DiskProps
{
    setKey: string;
    level: number;
    slotKey: number;
    mainStatKey: string;
    substats: Substat[];
    location: string;
    lock: boolean;
    id: number;
}

export class Disk
{
    private disk: DiskProps

    constructor(disk: DiskProps)
    {
        this.disk = disk;
    }

    // Get all disk
    getDisks()
    {
        return this.disk;
    }
    
}

export default Disk;
