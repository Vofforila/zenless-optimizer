import Database from "../Classes/Database";
import {DiskProps} from "../Classes/Disks.tsx";

const db = new Database();
db.id = 1;

export default function Server()
{

    console.log("Main");

    AddDisk({
        setKey: "GladiatorsFinale",
        level: 0,
        slotKey: 1,
        mainStatKey: "atk",
        substats: [
            {key: "HP", value: 16},
            {key: "ATK", value: 16},
            {key: "DEF", value: 5.1},
            {key: "", value: 0}
        ],
        location: "",
        lock: false,
        id: 1
    });
    db.GetLocalDatabase();
    console.log(db);
}

function AddDisk(disk: DiskProps)
{
    db.disks.addDisk(disk);
    db.UpdateLocalDatabase();
}

function RemoveDisk(id: number)
{
    db.disks.remove(id);
}