import {Disk, PerfectCharacter} from "../Classes";
import {ISubstat, MainStatType, SubstatKey} from "../Classes/Disk.tsx";
import {DiskNameConverter} from "./index.tsx";

export interface IMatch
{
    disk: Disk;
    perfectCharacters: PerfectCharacter[];
}

/**
 * Test Disks with Perfect Character Builds
 * Steps:
 * 1. Check Setkey for 1st Set and 2nd Set
 * 2. Check MainStat
 * A - if 1/2/3 slots True
 * B - else Check 3/4/5 slots
 * @constructor
 */
export default function GetPerfectMatches()
{
    const testdisks: Disk[] = dbManager.GetCurrentDb().disks
    const perfectCharacters: PerfectCharacter[] = archive.perfectCharacters;
    const matches: IMatch[] = [];
    for (const testdisk of testdisks as Disk[])
    {
        for (const perfectCharacter of perfectCharacters as PerfectCharacter[])
        {
            if (CheckSetKey(testdisk, perfectCharacter) &&
                CheckMainStat(testdisk, perfectCharacter))

        }
    }
}

function CheckSetKey(
    testdisk: Disk,
    perfectCharacter: PerfectCharacter
): boolean
{
    if (testdisk.setKey === perfectCharacter.piece_2 || testdisk.setKey === perfectCharacter.piece_4)
    {
        return true;
    }
    return false;
}

function CheckMainStat(testdisk: Disk, perfectCharacter: PerfectCharacter):boolean{
    const slot = testdisk.slotKey

    if(slot !== 1 && slot !==   2 && slot !==3){
        let bestMainStatsString:string = "";
        switch(slot){
            case 4:
                bestMainStatsString = DiskNameConverter(perfectCharacter.slot_4) ;
                break;
            case 5:
                bestMainStatsString = DiskNameConverter(perfectCharacter.slot_5) ;
                break;
            case 6:
                bestMainStatsString = DiskNameConverter(perfectCharacter.slot_6) ;
                break;
        }
         const bestMainStats:MainStatType[] = MainStatParser(bestMainStatsString)
        for(const bestMainStat of bestMainStats as MainStatType[])
        {
            if(bestMainStat == testdisk.mainStatKey)return true;
        }
    }
    else return true;
}

function MainStatParser(mainStatString: string): MainStatType[] {
    const mapping: { [key: string]: MainStatType } = {
        "hp_": "HP%",
        "atk_": "ATK%",
        "def_": "DEF%",
        "crit_dmg": "CRIT DMG",
        "crit_rate": "CRIT Rate",
        "anomaly_pro": "Anomaly Proficiency",
        "pen": "PEN Ratio",
        "electric_dmg": "Electric DMG",
        "fire_dmg": "Fire DMG",
        "ice_dmg": "Ice DMG",
        "wind_dmg": "Wind DMG",
        "physical_dmg": "Physical DMG"
    };
    const parts:string[] = mainStatString.split('/');
    return parts.map(part =>
    {
        const trimmedPart:string = part.trim();
        return mapping[trimmedPart] || trimmedPart as MainStatType;
    }).filter((value:MainStatType): value is MainStatType => value in mapping);
}

function CheckSubstat(testdisk: Disk, perfectCharacter: PerfectCharacter):boolean{
    const substats: ISubstat[] = testdisk.substats;

}