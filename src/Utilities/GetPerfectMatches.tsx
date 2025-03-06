import {Disk, PerfectCharacter} from "../Classes";
import {ISubstat, MainStat, SubstatKey} from "../Classes/Disk.tsx";
import {DiskNameConverter} from "./index.tsx";
import {dbManager} from "../Classes/DatabaseManager.tsx";
import {archive} from "../Classes/Database.tsx";

export interface IMatch
{
    disk: Disk;
    matches:number;
    critMatch:number;
    perfectCharacters: PerfectCharacter[];
}

/**
 * Test Disks with Perfect Character Builds
 * Steps:
 * 1. Check Setkey for 1st Set and 2nd Set
 * 2. Check MainStat
 * A - if 1/2/3 slots True
 * B - else Check 4/5/6 slots
 * 3. Check Substat
 * A - Check if 3/4 substats are perfect
 * B - Check if 2 of them are crit if critUser
 * @constructor
 */
export default function GetPerfectMatches():IMatch[]
{
    const testdisks: Disk[] = dbManager.GetCurrentDb().disks
    console.log("User Disks:", testdisks)
    const perfectCharacters: PerfectCharacter[] = archive.perfectCharacters;
    const matches: IMatch[] = [];


    for (const testdisk of testdisks as Disk[])
    {
        let match:IMatch = {
            disk : new Disk(),
            matches : 0,
            critMatch:0,
            perfectCharacters : []
        }
        for (const perfectCharacter of perfectCharacters as PerfectCharacter[])
        {
            if (CheckSetKey(testdisk, perfectCharacter) &&
                CheckMainStat(testdisk, perfectCharacter))
            {
                match =  CheckSubstat(testdisk, perfectCharacter,match)
            }
        }
        if(match.perfectCharacters.length > 0)
        {
            match.disk = testdisk;
            matches.push(match);
        }
    }
    return matches;
}

function CheckSetKey(
    testdisk: Disk,
    perfectCharacter: PerfectCharacter
): boolean
{
    return testdisk.setKey === perfectCharacter.piece_2  || testdisk.setKey === perfectCharacter.piece_4 ;
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
        const bestMainStats:MainStat[] = MainStatParser(bestMainStatsString)
        for (const bestMainStat of bestMainStats as MainStat[] ){
            if(bestMainStat === testdisk.mainStatKey)return true;
        }
        return false;
    }
    else return true;
}

function MainStatParser(mainStatString: string): MainStat[] {
    const parts = mainStatString.split('/').map(part => part.trim());
    return parts.filter((part): part is MainStat => {
        return isMainStat(part);
    });
}

function isMainStat(value: string): value is MainStat {
    const validMainStats: MainStat[] = [
        "hp_",
        "atk_",
        "def_",
        "crit_rate",
        "crit_dmg",
        "anomaly_mastery",
        "anomaly_pro",
        "pen",
        "electric_dmg",
        "ether_dmg",
        "fire_dmg",
        "ice_dmg",
        "physical_dmg",
        "er",
        ""
    ];
    return validMainStats.includes(value as MainStat);
}

function CheckSubstat(testdisk: Disk, perfectCharacter: PerfectCharacter,match:IMatch):IMatch{
    const substats: ISubstat[] = testdisk.substats;
    let maches:number = 0;


    const perfectSubstats: SubstatKey[] = SecondaryStatParser(perfectCharacter.substats)

    perfectSubstats


    for (const substat of substats as ISubstat[])
    {
        console.log(substat);
            for(const perfectSubstat of perfectSubstats as SubstatKey[])
            {
                console.log(perfectSubstat + " == " +    substat.key);
                if(substat.key == perfectSubstat)
                {
                    if(substat.key == "Crit DMG" as SubstatKey || substat.key == "Crit Rate" as SubstatKey)
                    {
                        match.critMatch++;
                    }
                    maches++;
                    break;
                }
            }
    }
    if(
        (perfectCharacter.critUser && match.critMatch == 2 )||
        (substats.length <= 3 && match.critMatch == 1) ||
        (!perfectCharacter.critUser && maches >= 3)
    ) {
        match.perfectCharacters.push(perfectCharacter);
        return match;
    }
    else
    {
        return match;
    }
}

function SecondaryStatParser(secondaryStatString:string):SubstatKey[]{
    const mapping: { [key: string]: SubstatKey } = {
        "hp":"HP",
        "atk":"ATK",
        "def":"DEF",
        "hp_": "HP%",
        "atk_": "ATK%",
        "def_": "DEF%",
        "crit_dmg": "CRIT DMG",
        "crit_rate": "CRIT Rate",
        "anomaly_pro": "Anomaly Proficiency",
        "pen": "PEN",
    };

    const parts:string[] = secondaryStatString.split('/');
    return parts.map(part =>
    {
        const trimmedPart:string = part.trim();
        return mapping[trimmedPart] || trimmedPart as SubstatKey;
    }).filter((value:SubstatKey): value is SubstatKey => value in mapping);
}