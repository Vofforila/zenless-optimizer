import { Disk} from "./index.tsx";
import Character from "./Characters.tsx";


export interface ILocalDatabase
{
    disks: Disk[]
    characters: Character[]
}

export class LocalDatabase implements ILocalDatabase
{
    private _disks: Disk[] = [];
    private _characters: Character[] = [];

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

    static isLocalDatabase(object: unknown): object is LocalDatabase
    {
        return (object as LocalDatabase)?.disks !== undefined
            && (object as LocalDatabase)?.characters !== undefined
    }

    static fromJSON(object: unknown): LocalDatabase
    {
        if (this.isLocalDatabase(object)) return object;
        return new LocalDatabase();
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

    constructor(
        disks: Disk[] = [],
        characters: Character[] = []
    )
    {
        this._disks = disks;
        this._characters = characters;
    }


    clone(): LocalDatabase {
        const clonedDisks:Disk[] = this._disks.map(disk => new Disk(disk.id,disk.setKey,disk.level,disk.slotKey,disk.mainStatKey,disk.substats));
        return new LocalDatabase(clonedDisks, this._characters);

    }

    get disks(): Disk[]
    {
        return this._disks;
    }

    set disks(value: Disk[])
    {
        this._disks = value;
    }

    get characters(): Character[]
    {
        return this._characters;
    }

    set characters(value: Character[])
    {
        this._characters = value;
    }

}


