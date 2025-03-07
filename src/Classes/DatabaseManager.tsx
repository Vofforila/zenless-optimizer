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

    public GetCurrentDb(): LocalDatabase
    {
        console.log("GetCurrentDb - " + this._currentDatabase.toString());
        switch (this._currentDatabase)
        {
            case 1:
                return this._database1;
            case 2:
                return this._database1;
            case 3:
                return this._database1;
            case 4:
                return this._database1;
            default:
                return this._database1;
        }
    }

    public UpdateLocalDb(): void
    {
        console.log("UpdateLocalDb - " + this._currentDatabase.toString());
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

