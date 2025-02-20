import Div from "./Div.tsx";
import {Img, TextTag} from "./index.tsx";
import {PerfectCharacterProps} from "../Classes/PerfectCharacter.tsx";
import React from "react";
import {Theme} from "../Theme/Theme.tsx"

const PerfectCharacterCard: React.FC<PerfectCharacterProps> = (
    perfectCharacter
    : PerfectCharacterProps) =>
{
    console.log(perfectCharacter.description);
    return (
        <Div flex_direction={"column"} justify_content={"flex-start"} align_items={"center"} flex_wrap={"wrap"}
             padding={[8, 8, 8, 8]} background_color={Theme.primary_color_transparent} border={[2, "solid", "black"]}
             flex={[1, 1, "auto"]} min_width={"50%"}>
            <Div flex_direction={"row"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"} gap={4}>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                    <Img width={8} height={8} imgName={perfectCharacter.characterName}></Img>
                    <TextTag>{perfectCharacter.characterName}</TextTag>
                </Div>
                <TextTag size={"big"} width={200} height={100}>{perfectCharacter.description}</TextTag>
            </Div>
            <Div flex_direction={"row"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"} gap={4}>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                    <TextTag>{"4-Piece - " + perfectCharacter.piece_4}</TextTag>
                    <Img width={8} height={8} imgName={perfectCharacter.piece_4}></Img>
                    <TextTag>{"2-Piece - " + perfectCharacter.piece_2}</TextTag>
                    <Img width={8} height={8} imgName={perfectCharacter.piece_2}></Img>
                </Div>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                    <TextTag>{"[4] - " + perfectCharacter.slot_4}</TextTag>
                    <TextTag>{"[5] - " + perfectCharacter.slot_5}</TextTag>
                    <TextTag>{"[6] - " + perfectCharacter.slot_6}</TextTag>
                    <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
                         flex_wrap={"nowrap"}>
                        <TextTag>Recommended Sub-effects</TextTag>
                        <TextTag>{perfectCharacter.substat}</TextTag>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export default PerfectCharacterCard;