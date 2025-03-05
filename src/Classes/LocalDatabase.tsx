import {Disk} from "./index.tsx";

interface IDatabaseProps
{
    disks: Disk[]
}

export class LocalDatabase implements IDatabaseProps
{
    private _disks: Disk[];

    public GetLocalDb()
    {
        const localCurrentDatabase: string | null = localStorage.getItem("currentDatabase");
        const localData: string | null = localStorage.getItem("database" + localCurrentDatabase);
        if (localData)
        {
            const parsedData = JSON.parse(localData);
            this._disks = parsedData._disks;
        }
    }

    UpdateLocalDatabase(id: number)
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

    constructor()
    {
        this._disks = [];
    }

    get disks(): Disk[]
    {
        return this._disks;
    }

    set disks(value: Disk[])
    {
        this._disks = value;
    }
}


