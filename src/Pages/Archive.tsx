import Div from "../Components/Div.tsx";
import {db} from "../Classes/Database.tsx";
import {PerfectCharacterCard, TextTag} from "../Components";
import {PerfectCharacter} from "../Classes/PerfectCharacter.tsx";


export default function Archive()
{
    return (
        <Div id={"Archive"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
             flexWrap={"wrap"} padding={[8, 8, 8, 8]} alignContent={"normal"}>
            <Div id={"ListBox"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                 flexWrap={"wrap"} alignContent={"normal"}>
                <TextTag size={"header"}>Character Filter</TextTag>
                <Div id={"CharacterList"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}
                     flexWrap={"wrap"} width={"100%"} gap={4} alignContent={"normal"}>
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
                </Div>
            </Div>
        </Div>
    )
}