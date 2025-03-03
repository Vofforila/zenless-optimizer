import {Disk, PerfectCharacter} from "./index.tsx";


interface IDatabaseProps
{
    database1: Database;
    database2: Database;
    database3: Database;
    database4: Database;
    disks: Disk[]
    perfectCharacter: PerfectCharacter[]
}

export class Database implements IDatabaseProps
{
    private _database1: Database;
    private _database2: Database;
    private _database3: Database;
    private _database4: Database;
    private _currentDatabase: number = 1;
    private _disks: Disk[];
    private _perfectCharacter: PerfectCharacter[];


    public Instanciate()
    {
        const localData = localStorage.getItem("database" + 1);

        if (localData)
        {
            const parsedData = JSON.parse(localData);
            this._disks = parsedData._disks;
        }
    }

    UpdateLocalDatabase(id: number,)
    {
        localStorage.setItem("database" + id, JSON.stringify(this));
    }


    UpdateDatabase(
        database: number,
        toUpdate: string
    )
    {
        localStorage.setItem((database.toString()), JSON.stringify(toUpdate));
    }


    constructor(database?: Database)
    {
        this._database1 = new Database();
        this._database2 = new Database();
        this._database3 = new Database();
        this._database4 = new Database();
        this._currentDatabase = 1;
        this._disks = [];
        this._perfectCharacter = [];
    }


    get disks(): Disk[]
    {
        return this._disks;
    }

    set disks(value: Disk[])
    {
        this._disks = value;
    }


    get perfectCharacter(): PerfectCharacter[]
    {
        return this._perfectCharacter;
    }

    set perfectCharacter(value: PerfectCharacter[])
    {
        this._perfectCharacter = value;
    }


    get database1(): Database
    {
        return this._database1;
    }

    set database1(value: Database)
    {
        this._database1 = value;
    }

    get database2(): Database
    {
        return this._database2;
    }

    set database2(value: Database)
    {
        this._database2 = value;
    }

    get database3(): Database
    {
        return this._database3;
    }

    set database3(value: Database)
    {
        this._database3 = value;
    }

    get database4(): Database
    {
        return this._database4;
    }

    set database4(value: Database)
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

export const db = new Database();

