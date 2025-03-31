import perfectDisks from "../Database/perfectdisks.json";
import {PerfectCharacter} from "../Classes";
import {dbManager} from "../Classes/DatabaseManager.tsx";
import {archive} from "../Classes/Database.tsx";
import Test from "../Tests/Test.tsx";

export default async function Processor()
{
    dbManager.InitLocalDb()
    if (import.meta.env.DEV) Test()
    InitArchive();
}

function InitArchive()
{
    while (perfectDisks.length > 0)
    {
        const perfectCharacter: PerfectCharacter = perfectDisks.pop() as PerfectCharacter
        archive.perfectCharacters.push(perfectCharacter)
    }
}

/*

function AddDisk(disk: DiskProps)
{
    db.disks.addDisk(disk);
    db.UpdateLocalDatabase();
}

function RemoveDisk(id: number)
{
    db.disks.remove(id);
}*/
