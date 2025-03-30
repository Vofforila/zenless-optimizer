export type SetKey =
    "astralvoice"
    | "branch&bladesong"
    | "chaosjazz"
    | "chaoticmetal"
    | "fangedmetal"
    | "freedomblues"
    | "hormonepunk"
    | "infernometal"
    | "polarmetal"
    | "protopunk"
    | "pufferelectro"
    | "shockstardisco"
    | "soulrock"
    | "swingjazz"
    | "thundermetal"
    | "woodpeckerelectro"
    | ""


export type UISetKey =
    | "Astral Voice"
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
    | "";

const UISetKeyMap: Record<string, string> = {
    "astralvoice": "Astral Voice",
    "branch&bladesong": "Branch & Blade Song",
    "chaosjazz": "Chaos Jazz",
    "chaoticmetal": "Chaotic Metal",
    "fangedmetal": "Fanged Metal",
    "freedomblues": "Freedom Blues",
    "hormonepunk": "Hormone Punk",
    "infernometal": "Inferno Metal",
    "polarmetal": "Polar Metal",
    "protopunk": "Proto Punk",
    "pufferelectro": "Puffer Electro",
    "shockstardisco": "Shockstar Disco",
    "soulrock": "Soul Rock",
    "swingjazz": "Swing Jazz",
    "thundermetal": "Thunder Metal",
    "woodpeckerelectro": "Woodpecker Electro",
    "": ""
};

export type MainStat = "hp" | "atk" | "def" | "critrate" | "critdmg" | "anomalyproficiency"
    | "anomalymastery"
    | "impact"
    | "energyregen"
    | "penratio"
    | "electricdmgbonus"
    | "firedmgbonus"
    | "icedmgbonus"
    | "etherdmgbonus"
    | "physicaldmgbonus"
    | ""

export const UIMainStatMap: Record<string, string> = {
    "hp": "HP%",
    "atk":"ATK%",
    "def":"DEF%",
    "critrate":"CRIT Rate",
    "critdmg":"CRIT DMG",
    "anomalyproficiency":"Anomaly Proficiency",
    "anomalymastery" :"Anomaly Mastery",
    "impact":"Impact",
    "energyregen":"Energy Regen%",
    "penratio":"PEN Ratio",
    "electricdmgbonus":"Electric DMG Bonus",
    "firedmgbonus":"Fire DMG Bonus",
    "icedmgbonus":"Ice DMG Bonus",
    "etherdmgbonus":"Ether DMG Bonus",
    "physicaldmgbonus":"Physical DMG Bonus",
    "": ""
};
export type SubstatKey = "hp" | "atk" | "def" | "defpercent" | "hppercent" | "atkpercent" |
    "pen" | "critrate" | "critdmg" | "anomalyproficiency" | "";

export const UISubstatMap:Record<string,string> = {
    'anomalyproficiency': 'Anomaly Proficiency',
    'critdmg': 'CRIT DMG',
    'critrate': 'CRIT Rate',
    'hppercent': 'HP%',
    'atkpercent': 'ATK%',
    'defpercent': 'DEF%',
    'pen': 'PEN',
    'hp': 'HP',
    'atk': 'ATK',
    'def': 'DEF',
    "":""
}


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

    public static getUISetKey(setKey: string): string {
        return UISetKeyMap[setKey] || "";
    }

    public static getUIMainStat(mainStat: string): string {
        return UIMainStatMap[mainStat] || "";
    }
    public static getUISubstat(substat: string): string {
        return UISubstatMap[substat] || "";
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

