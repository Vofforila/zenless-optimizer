import Div from "../Components/Div.tsx";
import {db} from "../Classes/Database.tsx";
import {PerfectCharacterCard} from "../Components";
import {PerfectCharacter} from "../Classes/PerfectCharacter.tsx";


export default function Archive()
{
    return (
        <Div id={"Archive"} flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
             flex_wrap={"nowrap"}>
            <Div id={"ListBox"} flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
                 flex_wrap={"nowrap"}>
                Character Filter
                <Div id={"CharacterList"} flex_direction={"row"} justify_content={"inherit"} align_items={"center"}
                     flex_wrap={"nowrap"}
                     padding={[0, 0, 0, 0]}>
                    {db.perfectCharacter.map((
                        character: PerfectCharacter,
                        index
                    ) => (
                        <PerfectCharacterCard key={index} characterName={character.characterName}
                                              diskDescription={character.diskDescription}
                                              critLabel={character.critLabel} piece_4={character.piece_4}
                                              piece_2={character.piece_2} slot_4={character.slot_4}
                                              slot_5={character.slot_5}
                                              slot_6={character.slot_6}
                                              substat={character.substat}></PerfectCharacterCard>
                    ))
                    }
                </Div>
            </Div>
        </Div>
    )
}