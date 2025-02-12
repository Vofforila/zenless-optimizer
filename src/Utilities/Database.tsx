interface DbProps
{
    disks: Disks
}

class Db
{
    constructor()
    {
    }
}

export default function Database()
{
    const userData = {
        username: "JohnDoe",
        level: 10,
        inventory: ["sword", "shield", "potion"]
    };

}

export function UpdateDatabase(
    database: number,
    toUpdate: string
)
{
    localStorage.setItem((database.toString()), JSON.stringify(toUpdate));
}