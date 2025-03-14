import {LocalDatabase} from "../Classes/LocalDatabase.tsx";
import {dbManager} from "../Classes/DatabaseManager.tsx";

export default function MergeData(data: any)
{
    const localDatabase: LocalDatabase = dbManager.GetCurrentDb();
    localDatabase.disksMap.map(disks => [disks.id, disks.disk])
    for (let i = 0; i <= data.length; i++)
    {
        if(localDatabase.disks.)
    }
}