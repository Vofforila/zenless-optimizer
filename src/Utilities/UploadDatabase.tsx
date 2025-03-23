import {LocalDatabase} from "../Classes/LocalDatabase.tsx";
import {dbManager} from "../Classes/DatabaseManager.tsx";

export default function UploadDatabase(jsonObject: unknown,databaseId:number): void
{
    const newLocalDatabase: LocalDatabase = LocalDatabase.fromJSON(jsonObject);
    const localDatabase: LocalDatabase = dbManager.GetDatabaseById(databaseId);

    console.log(localDatabase.disks.length)
    if(localDatabase.disks.length < 0 || localDatabase.characters.length < 0)
    {
        console.log("Merge Database");

        dbManager.UpdateLocalDb();
    }
    else
    {
        console.log("First Upload Database");
        for (let index:number = 0;index <= newLocalDatabase.disks.length - 1;index++)
        {
            newLocalDatabase.disks[index].id = index;
            localDatabase.disks.push(newLocalDatabase.disks[index]);
        }
        localDatabase.characters = newLocalDatabase.characters;
        dbManager.UpdateLocalDb();

    }


}

