import Div from "../Components/Div.tsx";
import {db} from "../Classes/Database.tsx";
import {PerfectCharacterCard, TextTag} from "../Components";
import {PerfectCharacter} from "../Classes/PerfectCharacter.tsx";


export default function Archive()
{
    return (
        <Div id={"Archive"} flex_direction={"column"} justify_content={"center"} align_items={"center"}
             flex_wrap={"wrap"} padding={[8, 8, 8, 8]}>
            <Div id={"ListBox"} flex_direction={"column"} justify_content={"center"} align_items={"center"}
                 flex_wrap={"wrap"}>
                <TextTag size={"header"}>Character Filter</TextTag>
                <Div id={"CharacterList"} flex_direction={"row"} justify_content={"inherit"} align_items={"center"}
                     flex_wrap={"wrap"} width={"100%"}>
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
                                        substat={character.substat}>
                                    </PerfectCharacterCard>
                                )
                        )
                    }
                </Div>
            </Div>
        </Div>
    )
}