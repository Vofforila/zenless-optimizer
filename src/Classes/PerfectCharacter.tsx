export interface IPerfectCharacterProps
{
    characterName: string;
    description: string;
    critUser: boolean;
    piece_4: string;
    piece_2: string;
    slot_4: string;
    slot_5: string;
    slot_6: string;
    substats: string;
}

export default class PerfectCharacter implements IPerfectCharacterProps
{
    private _characterName: string;
    private _description: string;
    private _critUser: boolean;
    private _piece_4: string;
    private _piece_2: string;
    private _slot_4: string;
    private _slot_5: string;
    private _slot_6: string;
    private _substats: string;

    constructor(
        characterName: string,
        description: string,
        critUser: boolean,
        piece_4: string,
        piece_2: string,
        slot_4: string,
        slot_5: string,
        slot_6: string,
        substats: string
    )
    {
        this._characterName = characterName;
        this._description = description;
        this._critUser = critUser;
        this._piece_4 = piece_4;
        this._piece_2 = piece_2;
        this._slot_4 = slot_4;
        this._slot_5 = slot_5;
        this._slot_6 = slot_6;
        this._substats = substats;
    }

    get characterName(): string
    {
        return this._characterName;
    }

    set characterName(value: string)
    {
        this._characterName = value;
    }

    get description(): string
    {
        return this._description;
    }

    set description(value: string)
    {
        this._description = value;
    }

    get critUser(): boolean
    {
        return this._critUser;
    }

    set critUser(value: boolean)
    {
        this._critUser = value;
    }

    get piece_4(): string
    {
        return this._piece_4;
    }

    set piece_4(value: string)
    {
        this._piece_4 = value;
    }

    get piece_2(): string
    {
        return this._piece_2;
    }

    set piece_2(value: string)
    {
        this._piece_2 = value;
    }

    get slot_4(): string
    {
        return this._slot_4;
    }

    set slot_4(value: string)
    {
        this._slot_4 = value;
    }

    get slot_5(): string
    {
        return this._slot_5;
    }

    set slot_5(value: string)
    {
        this._slot_5 = value;
    }

    get slot_6(): string
    {
        return this._slot_6;
    }

    set slot_6(value: string)
    {
        this._slot_6 = value;
    }

    get substats(): string
    {
        return this._substats;
    }

    set substats(value: string)
    {
        this._substats = value;
    }
}

