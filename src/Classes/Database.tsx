import Disks from "../Classes/Disks.tsx";


export default class Database
{
    public id: number;
    public disks: Disks;

    constructor()
    {
        this.disks = new Disks()
    }

    GetLocalDatabase()
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
    }

    // Add localstorage
}


/*
export function UpdateDatabase(
    database: number,
    toUpdate: string
)
{
    localStorage.setItem((database.toString()), JSON.stringify(toUpdate));
}*/
