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

export class Disks
{
    private disks: DiskProps[] = [];

    // Add a new disk
    addDisk(disk: DiskProps)
    {
        this.disks.push(disk);
    }

    // Get all disks
    getDisks()
    {
        return this.disks;
    }

    // Get disk by ID
    getDisk(id: number)
    {
        return this.disks.find(disk => disk.id === id);
    }

    // Update disk
    updateDisk(
        id: number,
        updates: Partial<DiskProps>
    )
    {
        const index = this.disks.findIndex(disk => disk.id === id);
        if (index !== -1)
        {
            this.disks[index] = {...this.disks[index], ...updates};
        }
    }

    // Add substat to disk
    addSubstat(
        diskId: number,
        substat: Substat
    )
    {
        const disk = this.getDisk(diskId);
        if (disk)
        {
            disk.substats.push(substat);
        }
    }

    // Level up a disk
    levelUp(
        diskId: number,
        levels: number = 1
    )
    {
        const disk = this.getDisk(diskId);
        if (disk)
        {
            disk.level = Math.min(20, disk.level + levels);
        }
    }

    // Toggle lock status
    toggleLock(diskId: number)
    {
        const disk = this.getDisk(diskId);
        if (disk)
        {
            disk.lock = !disk.lock;
        }
    }

    // Delete disk
    remove(id: number)
    {
        this.disks = this.disks.filter(disk => disk.id !== id);
    }

    // Filter disks by set
    filterBySet(setKey: string)
    {
        return this.disks.filter(disk => disk.setKey === setKey);
    }

    // Filter disks by main stat
    filterByMainStat(mainStatKey: string)
    {
        return this.disks.filter(disk => disk.mainStatKey === mainStatKey);
    }
}

export default Disks;
