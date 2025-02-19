export interface PerfectCharacterProps
{
    characterName: string;
    diskDescription: string;
    critLabel: boolean;
    piece_4: string;
    piece_2: string;
    slot_4: string;
    slot_5: string;
    slot_6: string;
    substat: string;
}

export class PerfectCharacter implements PerfectCharacterProps
{
    characterName: string;
    diskDescription: string;
    critLabel: boolean;
    piece_4: string;
    piece_2: string;
    slot_4: string;
    slot_5: string;
    slot_6: string;
    substat: string;

    constructor(
        characterName: string,
        diskDescription: string,
        critLabel: boolean,
        piece_4: string,
        piece_2: string,
        slot_4: string,
        slot_5: string,
        slot_6: string,
        substat: string
    )
    {
        this.characterName = characterName;
        this.diskDescription = diskDescription;
        this.critLabel = critLabel;
        this.piece_4 = piece_4;
        this.piece_2 = piece_2;
        this.slot_4 = slot_4;
        this.slot_5 = slot_5;
        this.slot_6 = slot_6;
        this.substat = substat;
    }
}

export default PerfectCharacter;