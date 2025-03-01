import {db} from "../../Classes/Database.tsx";
import {PerfectCharacterCard, TextTag} from "../../Components";
import {PerfectCharacter} from "../../Classes/PerfectCharacter.tsx";
import "./Archive.css"


export default function Archive()
{
    return (

        <div id={"Archive"} className={"archive"}>
            <div className={"archive-wrapper"}>
                <TextTag size={"header"}>Character Filter</TextTag>
                <div id={"CharacterList"} className={"archive-character-list"}>
                    {
                        db.perfectCharacter.map((
                                character: PerfectCharacter,
                                index: number,
                            ) =>
                                (
                                    <PerfectCharacterCard
                                        key={index} characterName={character.characterName}
                                        description={character.description}
                                        critUser={character.critUser} piece_4={character.piece_4}
                                        piece_2={character.piece_2} slot_4={character.slot_4}
                                        slot_5={character.slot_5}
                                        slot_6={character.slot_6}
                                        substats={character.substats}>
                                    </PerfectCharacterCard>
                                )
                        )
                    }
                </div>
            </div>
        </div>
    )
}