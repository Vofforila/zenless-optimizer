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
export type MainStatType = "HP%" | "ATK%" | "DEF%" | "CRIT Rate" | "CRIT DMG" |
    "Anomaly Proficiency" | "PEN Ratio" | "Electric DMG" |
    "Fire DMG" | "Ice DMG" | "Wind DMG" | "Physical DMG";
export type SubstatKey = "HP" | "ATK" | "DEF" | "DEF%" | "HP%" | "ATK%" |
    "PEN" | "Crit Rate" | "Crit Dmg" | "Anomaly Proficiency" | "";

export interface ISubstat
{
    key: SubstatKey;
    value: number;
}

export interface IDiskProps
{
    setKey: SetKey;
    slotKey: number;
    level: number;
    mainStatKey: MainStatType;
    substats: ISubstat[];
    id: number;
}

export default class Disk implements IDiskProps
{
    private _setKey: SetKey;
    private _level: number;
    private _slotKey: number;
    private _mainStatKey: MainStatType;
    private _substats: ISubstat[];
    private _id: number;

    constructor(
        setKey: SetKey,
        level: number,
        slotKey: number,
        mainStatKey: MainStatType,
        substats: ISubstat[],
        id: number
    )
    {
        this._setKey = setKey;
        this._level = level;
        this._slotKey = slotKey;
        this._mainStatKey = mainStatKey;
        this._substats = substats;
        this._id = id;
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

    get mainStatKey(): MainStatType
    {
        return this._mainStatKey;
    }

    set mainStatKey(value: MainStatType)
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

