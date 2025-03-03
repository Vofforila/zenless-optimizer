import perfectDisks from "../Database/perfectdisks.json";
import {db} from "../Classes/Database.tsx";
import {PerfectCharacter} from "../Classes";


export default function Server()
{
    while (perfectDisks.length > 0)
    {
        const perfectCharacter: PerfectCharacter = perfectDisks.pop() as unknown as PerfectCharacter
        db.perfectCharacter.push(perfectCharacter)

    }
    db.


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
