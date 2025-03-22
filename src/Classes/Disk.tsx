export type SetKey =
    "Astral Voice"
    | "Branch & Blade Song"
    | "Chaos Jazz"
    | "Chaotic Metal"
    | "Fanged Metal"
    | "Freedom Blues"
    | "Hormone Punk"
    | "Inferno Metal"
    | "Polar Metal"
    | "Proto Punk"
    | "Puffer Electro"
    | "Shockstar Disco"
    | "Soul Rock"
    | "Swing Jazz"
    | "Thunder Metal"
    | "Woodpecker Electro"
    | ""
export type MainStat = "hp_" | "atk_" | "def_" | "crit_rate" | "crit_dmg" |
    "anomaly_mastery" | "anomaly_pro" | "pen" | "electric_dmg" | "ether_dmg" |
    "fire_dmg" | "ice_dmg" | "physical_dmg" | "er" | "";
export type SubstatKey = "hp" | "atk" | "def" | "def_" | "hp_" | "atk_" |
    "pen" | "crit_rate" | "crit_dmg" | "anomaly_pro" | "";

export interface ISubstat
{
    key: SubstatKey;
    value: number;
}

export interface IDisk
{
    id:number;
    setKey: SetKey;
    slotKey: number;
    level: number;
    mainStatKey: MainStat;
    substats: ISubstat[];
}

export default class Disk implements IDisk
{
    // new Disk("Swing Jazz", 15, 4, "ATK%", [], 1);
    private _id:number;
    private _setKey: SetKey;
    private _level: number;
    private _slotKey: number;
    private _mainStatKey: MainStat;
    private _substats: ISubstat[];

    constructor(
        id:number = 0,
        setKey: SetKey = "",
        level: number = 0,
        slotKey: number = 0,
        mainStatKey: MainStat = "",
        substats: ISubstat[] = []
    )
    {
        this._id = id;
        this._setKey = setKey;
        this._level = level;
        this._slotKey = slotKey;
        this._mainStatKey = mainStatKey;
        this._substats = substats;
    }

    get id(): number
    {
        return this._id;
    }

    set id(value: number)
    {
        this._id = value;
    }

    get substats(): ISubstat[]
    {
        return this._substats;
    }

    set substats(value: ISubstat[])
    {
        this._substats = value;
    }

    get mainStatKey(): MainStat
    {
        return this._mainStatKey;
    }

    set mainStatKey(value: MainStat)
    {
        this._mainStatKey = value;
    }

    get slotKey(): number
    {
        return this._slotKey;
    }

    set slotKey(value: number)
    {
        this._slotKey = value;
    }

    get level(): number
    {
        return this._level;
    }

    set level(value: number)
    {
        this._level = value;
    }

    get setKey(): SetKey
    {
        return this._setKey;
    }

    set setKey(value: SetKey)
    {
        this._setKey = value;
    }
}

