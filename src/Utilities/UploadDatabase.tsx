import {dbManager} from "../Classes/DatabaseManager.tsx";
import {Disk} from "../Classes";
import {LocalDatabase} from "../Classes/LocalDatabase.tsx";

export default function UploadDatabase(
    jsonObject:
    {
        Disks: Disk[];
    }): void
{
    console.log(jsonObject);
    const db: LocalDatabase = dbManager.GetCurrentDb()
    db.disks = jsonObject.Disks;
    console.log(db.disks);
    dbManager.UpdateCurrentDb()
}