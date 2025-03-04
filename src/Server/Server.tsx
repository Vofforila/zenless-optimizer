import perfectDisks from "../Database/perfectdisks.json";
import { PerfectCharacter} from "../Classes";
import {db} from "../Classes/DatabaseManager.tsx";


export default function Server()
{

    db.InitLocalDb();

    while (perfectDisks.length > 0)
    {
        const perfectCharacter: PerfectCharacter = perfectDisks.pop() as unknown as PerfectCharacter
        db.perfectCharacter.push(perfectCharacter)

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
