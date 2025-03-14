import {LocalDatabase} from "../Classes/LocalDatabase.tsx";
import {dbManager} from "../Classes/DatabaseManager.tsx";

export default function UploadDatabase(jsonObject: unknown): void
{
    const newLocalDatabase: LocalDatabase = LocalDatabase.fromJSON(jsonObject);
    const localDatabase: LocalDatabase = dbManager.GetCurrentDb();
    localDatabase.disksMap.map(disk => [disk.id, disk.disk])
    localDatabase.disks = newLocalDatabase.disks;
    localDatabase.characters = newLocalDatabase.characters;
    dbManager.UpdateLocalDb();
}
