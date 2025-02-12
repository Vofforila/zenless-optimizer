// Define possible stats as type literals
type MainStatType = "HP%" | "ATK%" | "DEF%" | "CRIT Rate" | "CRIT DMG" |
    "Anomaly Proficiency" | "PEN Ratio" | "Electric DMG" |
    "Fire DMG" | "Ice DMG" | "Wind DMG" | "Physical DMG";

type SubstatKey = "def" | "eleMas" | "def_" | "atk" | "hp" | "critRate" |
    "critDmg" | "atkPercentage" | "hpPercentage" | "defPercentage" | "";

interface Substat
{
    key: SubstatKey;
    value: number;
}

interface DiskProps
{
    setKey: string;        // e.g., "GladiatorsFinale"
    rarity: number;        // e.g., 5
    level: number;         // e.g., 0
    slotKey: string;       // e.g., "plume"
    mainStatKey: string;   // e.g., "atk"
    substats: Substat[];   // Array of substats
    location: string;      // e.g., ""
    lock: boolean;         // e.g., false
    id: string;           // e.g., "artifact_471"
}

class Disk implements DiskProps
{
    setKey: string;
    rarity: number;
    level: number;
    slotKey: string;
    mainStatKey: string;
    substats: Substat[];
    location: string;
    lock: boolean;
    id: string;

    constructor({
                    setKey,
                    rarity,
                    level,
                    slotKey,
                    mainStatKey,
                    substats,
                    location = "",
                    lock = false,
                    id
                }: DiskProps)
    {
        this.setKey = setKey;
        this.rarity = rarity;
        this.level = level;
        this.slotKey = slotKey;
        this.mainStatKey = mainStatKey;
        this.substats = substats;
        this.location = location;
        this.lock = lock;
        this.id = id;
    }

    // Utility method to add a substat
    addSubstat(
        key: SubstatKey,
        value: number
    )
    {
        this.substats.push({key, value});
    }

    // Method to level up the disk
    levelUp(levels: number = 1)
    {
        this.level = Math.min(20, this.level + levels);
    }

    // Method to toggle lock status
    toggleLock()
    {
        this.lock = !this.lock;
    }

    // Method to get formatted main stat
    getMainStat(): string
    {
        return `${this.mainStatKey.toUpperCase()}: ${this.calculateMainStatValue()}`;
    }

    // Helper method to calculate main stat value based on level
    private calculateMainStatValue(): number
    {
        // Implementation would depend on your game's scaling rules
        return 0; // Placeholder
    }
}

// Example usage:
const diskData: DiskProps = {
    setKey: "GladiatorsFinale",
    rarity: 5,
    level: 0,
    slotKey: "plume",
    mainStatKey: "atk",
    substats: [
        {key: "def", value: 16},
        {key: "eleMas", value: 16},
        {key: "def_", value: 5.1},
        {key: "", value: 0}
    ],
    location: "",
    lock: false,
    id: "artifact_471"
};

const disk = new Disk(diskData);