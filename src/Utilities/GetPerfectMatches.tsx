import {Disk, PerfectCharacter} from "../Classes";
import {ISubstat, MainStat, SubstatKey} from "../Classes/Disk.tsx";
import {dbManager} from "../Classes/DatabaseManager.tsx";
import {archive} from "../Classes/Database.tsx";

export interface IPerfectMatch
{
    matches: number;
    perfectCharacter: PerfectCharacter;
}

export interface IMatch
{
    disk: Disk;
    matches: IPerfectMatch[]
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
export default function GetPerfectMatches(): IMatch[]
{
    const testdisks: Disk[] = dbManager.GetCurrentDb().disks
    const perfectCharacters: PerfectCharacter[] = archive.perfectCharacters;
    const matches: IMatch[] = [];
    for (const testdisk of testdisks as Disk[])
    {
        let match: IMatch = {
            disk: new Disk(),
            matches: []
        }
        for (const perfectCharacter of perfectCharacters as PerfectCharacter[])
        {
            if (CheckSetKey(testdisk, perfectCharacter) &&
                CheckMainStat(testdisk, perfectCharacter))
            {
                match = CheckSubstat(testdisk, perfectCharacter, match)
            }
        }
        if (match.matches.length > 0)
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
    return testdisk.setKey === perfectCharacter.piece_2 || testdisk.setKey === perfectCharacter.piece_4;
}

function CheckMainStat(
    testdisk: Disk,
    perfectCharacter: PerfectCharacter
    ): boolean
        {
            const slot = testdisk.slotKey
            if (slot !== 1 && slot !== 2 && slot !== 3)
            {
                let MainStatFromSlot: string = "";
                switch (slot)
                {
                    case 4:
                        MainStatFromSlot = perfectCharacter.slot_4;
                        break;
                    case 5:
                        MainStatFromSlot = perfectCharacter.slot_5;
                        break
                    case 6:
                        MainStatFromSlot = perfectCharacter.slot_6;
                        break;
                }
                const bestMainStats: MainStat[] = MainStatsParser(MainStatFromSlot)
                for (const bestMainStat of bestMainStats as MainStat[])
        {
            if (bestMainStat === testdisk.mainStatKey) return true;
        }
        return false;
    }
    else return true;
}

function MainStatsParser(mainStatString: string): MainStat[]
{
    const parts: string[] = mainStatString.split('/').map(part => part.trim());
    return parts.filter((part: string): part is MainStat =>
    {
        return isMainStat(part);
    });
}

function isMainStat(value: string): value is MainStat
{
    const validMainStats: MainStat[] = [
        "hp",
        "atk",
        "def",
        "critrate",
        "critdmg",
        "anomalymastery",
        "anomalyproficiency",
        "penratio",
        "energyregen",
        "electricdmgbonus",
        "etherdmgbonus",
        "firedmgbonus",
        "icedmgbonus",
        "physicaldmgbonus",
        ""
    ];
    return validMainStats.includes(value as MainStat);
}

function CheckSubstat(
    testdisk: Disk,
    perfectCharacter: PerfectCharacter,
    match: IMatch
): IMatch
{
    const substats: ISubstat[] = testdisk.substats;
    let maches: number = 0;
    let critMatch: number = 0;
    const perfectSubstats: SubstatKey[] = SubstatsParser(perfectCharacter.substats)
    for (const substat of substats as ISubstat[])
    {
        for (const perfectSubstat of perfectSubstats as SubstatKey[])
        {
            // console.log(perfectSubstat + " == " + substat.key);
            if (substat.key == perfectSubstat)
            {
                if (substat.key == "critdmg" as SubstatKey || substat.key == "critrate" as SubstatKey)
                {
                    critMatch++;
                }
                maches++;
                break;
            }
        }
    }
    if (
        (perfectCharacter.critUser && critMatch == 2) ||
        (substats.length <= 3 && critMatch == 1) ||
        (!perfectCharacter.critUser && maches >= 3)
    )
    {
        const PerfectMatch: IPerfectMatch = {
            matches: maches,
            perfectCharacter: perfectCharacter
        }
        match.matches.push(PerfectMatch)
        return match;
    }
    else
    {
        return match;
    }
}

function SubstatsParser(secondaryStats: string): SubstatKey[]
{
    const parts: string[] = secondaryStats.split('+').map(part => part.trim());
    return parts.filter((part: string): part is SubstatKey =>
    {
        return IsSubstat(part);
    });
}

function IsSubstat(value: string): value is SubstatKey
{
    const validSubstat: SubstatKey[] = [
        "hp",
        "atk",
        "def",
        "hppercent",
        "atkpercent",
        "defpercent",
        "critdmg",
        "critrate",
        "anomalyproficiency",
        "pen"
    ];
    return validSubstat.includes(value as SubstatKey);
}