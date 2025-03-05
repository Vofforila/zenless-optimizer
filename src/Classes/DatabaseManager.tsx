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
        if (localCurrentDatabase)
        {
            const localData: string | null = localStorage.getItem("database" + localCurrentDatabase);
            if (localData)
            {
                const parsedData = JSON.parse(localData);
                this._currentDatabase = +localCurrentDatabase;
                console.log(parsedData);
                switch (this._currentDatabase)
                {
                    case 1:
                        this._database1.disks = parsedData._disks;
                        break;
                    case 2:
                        this._database2.disks = parsedData._disks;
                        break;
                    case 3:
                        this._database3.disks = parsedData._disks;
                        break;
                    case 4:
                        this._database4.disks = parsedData._disks;
                        break;
                }
            }
        }
        else
        {
            console.log("New user created");
            localStorage.setItem("currentDatabase", this._currentDatabase.toString());
        }
    }

    public GetCurrentDb(): LocalDatabase
    {
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

    public UpdateCurrentDb(): void
    {
        localStorage.setItem("currentDatabase", this._currentDatabase.toString());
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

