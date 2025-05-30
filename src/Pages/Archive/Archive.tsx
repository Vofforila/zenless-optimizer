import {DetailedPerfectCharacterCard, TextTag} from "../../Components";
import "./Archive.css"
import PerfectCharacter from "../../Classes/PerfectCharacter.tsx";
import {archive} from "../../Classes/Database.tsx";


export default function Archive()
{

    // TODO: Update Images from Disks to https://zenless-zone-zero.fandom.com/wiki/Soldier_0_-_Anby
    return (
        <div id={"Archive"} className={"archive"}>
            <div className={"archive-wrapper"}>
                <TextTag size={"header"}>Character Filter</TextTag>
                <div id={"CharacterList"} className={"archive-character-list"}>
                    {
                        archive.perfectCharacters.map((
                                character: PerfectCharacter,
                                index: number,
                            ) =>
                                (
                                    <DetailedPerfectCharacterCard
                                        key={index} characterName={character.characterName}
                                        description={character.description}
                                        critUser={character.critUser} piece_4={character.piece_4}
                                        piece_2={character.piece_2} slot_4={character.slot_4}
                                        slot_5={character.slot_5}
                                        slot_6={character.slot_6}
                                        substats={character.substats}>
                                    </DetailedPerfectCharacterCard>
                                )
                        )
                    }
                </div>
            </div>
        </div>
    )
}