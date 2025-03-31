import {LocalDatabase} from "./LocalDatabase.tsx";

interface IDatabaseManager
{
    database1: LocalDatabase;
    database2: LocalDatabase;
    database3: LocalDatabase;
    database4: LocalDatabase;
    currentDatabase: number;
}

export default class DatabaseManager implements IDatabaseManager
{
    private _database1: LocalDatabase;
    private _database2: LocalDatabase;
    private _database3: LocalDatabase;
    private _database4: LocalDatabase;
    private _currentDatabase: number;

    public InitLocalDb(): void
    {
        const localCurrentDatabase: string | null = localStorage.getItem("currentDatabase");
        if (localCurrentDatabase != null)
        {
            const localData: string | null = localStorage.getItem("database" + localCurrentDatabase);
            if (localData != null)
            {

                const jsonObject = localData ? JSON.parse(localData) : {}
                console.log("Init Data:", jsonObject);
                this._currentDatabase = +localCurrentDatabase;
                switch (this._currentDatabase)
                {
                    case 1:
                    {
                        const newLocalDatabase: LocalDatabase = LocalDatabase.fromJSON(jsonObject);
                        this._database1.disks = newLocalDatabase.disks;
                        this._database1.characters = newLocalDatabase.characters;

                        break;
                    }
                    case 2:
                    {
                        const newLocalDatabase: LocalDatabase = LocalDatabase.fromJSON(jsonObject);
                        this._database2.disks = newLocalDatabase.disks;
                        this._database2.characters = newLocalDatabase.characters;
                        break;
                    }
                    case 3:
                    {
                        const newLocalDatabase: LocalDatabase = LocalDatabase.fromJSON(jsonObject);
                        this._database3.disks = newLocalDatabase.disks;
                        this._database3.characters = newLocalDatabase.characters;
                        break;
                    }
                    case 4:
                    {
                        const newLocalDatabase: LocalDatabase = LocalDatabase.fromJSON(jsonObject);
                        this._database4.disks = newLocalDatabase.disks;
                        this._database4.characters = newLocalDatabase.characters;
                        break;
                    }
                }
            }
            else
            {
                localStorage.setItem("database1", JSON.stringify(this._database1));
                localStorage.setItem("database2", JSON.stringify(this._database2));
                localStorage.setItem("database3", JSON.stringify(this._database3));
                localStorage.setItem("database4", JSON.stringify(this._database4));
                this.InitLocalDb();
            }
        }
        else
        {
            console.log("New user created");
            localStorage.setItem("currentDatabase", "1");
            this.InitLocalDb();
        }
    }


   public UploadDatabase(jsonObject: unknown,databaseId:number): void
{
    const newLocalDatabase: LocalDatabase = LocalDatabase.fromJSON(jsonObject);
    const localDatabase: LocalDatabase = dbManager.GetDatabaseById(databaseId);


    console.log(localDatabase.disks.length)
    if(localDatabase.disks.length > 0 || localDatabase.characters.length > 0)
    {
        console.log("Merge Database");
        this.MergeData(newLocalDatabase,localDatabase)
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
    MergeData(newDataset: LocalDatabase,localDatabase:LocalDatabase):void
    {
    const newLocalDatabase:LocalDatabase = new LocalDatabase();
    const auxLocalDatabase: LocalDatabase = localDatabase.clone()

        for(let i:number = 0;i < localDatabase.disks.length; i++)
        {
            auxLocalDatabase.disks[i].id = 0;
        }


    for(let i:number = 0;i < auxLocalDatabase.disks.length; i++)
    {
        for(let x:number = 0;x < newDataset.disks.length; x++)
        {
            newDataset.disks[x].id = 0;
            if(auxLocalDatabase.disks[i].isEqual(newDataset.disks[x]))
            {
                newLocalDatabase.disks.push(localDatabase.disks[i]);
                newDataset.disks.splice(x, 1);
                break;
            }
        }
    }

        for(let i:number = 0;i < newDataset.disks.length; i++)
        {
            newDataset.disks[i].id = newLocalDatabase.disks.length + 1;
            newLocalDatabase.disks.push(newDataset.disks[i]);
        }

        localDatabase.disks = newLocalDatabase.disks;
        dbManager.UpdateLocalDb();
}


    public GetCurrentDb(): LocalDatabase
    {
        console.log("GetCurrentDb - " + this._currentDatabase.toString());
        switch (this._currentDatabase)
        {
            case 1:
                return this._database1;
            case 2:
                return this._database2;
            case 3:
                return this._database3;
            case 4:
                return this._database4;
            default:
                return this._database1;
        }
    }

    public GetDatabaseById(value:number): LocalDatabase
    {
        switch (value)
        {
            case 1:
                return this._database1;
            case 2:
                return this._database2;
            case 3:
                return this._database3;
            case 4:
                return this._database4;
            default:
                return this._database1;
        }
    }


    public UpdateLocalDb(): void
    {
        console.log("UpdateLocalDb" , this._database1);
        localStorage.setItem("database1", JSON.stringify(this._database1));
        localStorage.setItem("database2", JSON.stringify(this._database2));
        localStorage.setItem("database3", JSON.stringify(this._database3));
        localStorage.setItem("database4", JSON.stringify(this._database4));
    }

    constructor()
    {
        this._database1 = new LocalDatabase();
        this._database2 = new LocalDatabase();
        this._database3 = new LocalDatabase();
        this._database4 = new LocalDatabase();
        this._currentDatabase = 1;
    }

    get database1(): LocalDatabase
    {
        return this._database1;
    }

    set database1(value: LocalDatabase)
    {
        this._database1 = value;
    }

    get database2(): LocalDatabase
    {
        return this._database2;
    }

    set database2(value: LocalDatabase)
    {
        this._database2 = value;
    }

    get database3(): LocalDatabase
    {
        return this._database3;
    }

    set database3(value: LocalDatabase)
    {
        this._database3 = value;
    }

    get database4(): LocalDatabase
    {
        return this._database4;
    }

    set database4(value: LocalDatabase)
    {
        this._database4 = value;
    }

    get currentDatabase(): number
    {
        return this._currentDatabase;
    }

    set currentDatabase(value: number)
    {
        this._currentDatabase = value;
    }
}
export const dbManager = new DatabaseManager();

