type Faction =
    "Cunning Hares" |
    "Belobog Heavy Industries" |
    "Victoria Housekeeping Co." |
    "Obol Squad" |
    "Criminal Investigation Special Response Team" |
    "Sons of Calydon" |
    "Hollow Special Operations Section 6" |
    "Stars of Lyra" |
    ""


interface ICharacter{
    name: string;
    faction: Faction;
}

export default class Character implements ICharacter{
    private _name: string;
    private _faction: Faction;

     static isCharacter(object: unknown): object is Character {
       return (object as Character)?.name !== undefined && (object as Character)?.faction !== undefined
    }

    static fromJSON(object: unknown): Character {
        if(this.isCharacter (object)) return new Character(object.name, object.faction as Faction);
        return new Character();
    }


    constructor(
        name: string = "",
        faction: Faction = ""
    )
    {
        this._name = name;
        this._faction = faction;
    }

    get name(): string
    {
        return this._name;
    }

    set name(value: string)
    {
        this._name = value;
    }

    get faction(): Faction
    {
        return this._faction;
    }

    set faction(value: Faction)
    {
        this._faction = value;
    }
}