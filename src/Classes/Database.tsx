import DiskProps from "./Disk.tsx";
import PerfectCharacterProps from "./PerfectCharacter.tsx";

export default class Database
{
    public disks: DiskProps[];
    public perfectCharacter: PerfectCharacterProps[]

    constructor()
    {
        this.disks = [];
        this.perfectCharacter = [];
    }


}

export const db = new Database()

/*GetLocalDatabase()
{
    const localData = localStorage.getItem("database" + this.id);

    if (localData)
    {
        const parsedData = JSON.parse(localData);
        this.disks = parsedData.disks;
    }
}

UpdateLocalDatabase()
{
    localStorage.setItem("database" + this.id, JSON.stringify(this));
}*/


// Add localstorage
/*
export function UpdateDatabase(
    database: number,
    toUpdate: string
)
{
    localStorage.setItem((database.toString()), JSON.stringify(toUpdate));
}*/
