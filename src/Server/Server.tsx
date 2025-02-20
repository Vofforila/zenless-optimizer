import perfectDisks from "../Pages/perfectdisks.json";
import {PerfectCharacter} from "../Classes/PerfectCharacter.tsx";
import {db} from "../Classes/Database.tsx";


export default function Server()
{
    while (perfectDisks.length > 0)
    {
        const perfectCharacter: PerfectCharacter = perfectDisks.pop() as unknown as PerfectCharacter
        db.perfectCharacter.push(perfectCharacter)
    }
    console.log(db.perfectCharacter)
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
