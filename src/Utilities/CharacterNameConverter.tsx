export default function CharacterNameConverter(characterName:string){
    return characterName.toLowerCase().replace(" ", "_");
}