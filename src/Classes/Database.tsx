import {PerfectCharacter} from "./index.tsx";

interface IDatabase
{
    perfectCharacters: PerfectCharacter[]

}

export default class Database implements IDatabase
{
    private _perfectCharacters: PerfectCharacter[];

    constructor()
    {
        this._perfectCharacters = [];
    }

    get perfectCharacters(): PerfectCharacter[]
    {
        return this._perfectCharacters;
    }

    set perfectCharacters(value: PerfectCharacter[])
    {
        this._perfectCharacters = value;
    }
}
export const archive = new Database();