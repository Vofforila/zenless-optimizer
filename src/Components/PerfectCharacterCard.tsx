import Div from "./Div.tsx";
import {Img, TextTag} from "./index.tsx";
import {PerfectCharacterProps} from "../Classes/PerfectCharacter.tsx";
import React from "react";

const PerfectCharacterCard: React.FC<PerfectCharacterProps> = (
    perfectCharacter
    : PerfectCharacterProps) =>
{
    return (
        <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
            <Div flex_direction={"row"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                    <TextTag>{perfectCharacter.characterName}</TextTag>
                    <Img width={8} height={8} imgName={perfectCharacter.characterName}></Img>
                </Div>
                <TextTag>{perfectCharacter.diskDescription}</TextTag>
            </Div>
            <Div flex_direction={"row"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                    <TextTag>4-Piece - {perfectCharacter.piece_4}</TextTag>
                    <Img width={8} height={8} imgName={"logo"}></Img>
                    <TextTag>2-Piece - {perfectCharacter.piece_2}</TextTag>
                    <Img width={8} height={8} imgName={perfectCharacter.piece_2}></Img>
                </Div>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                    <TextTag>[4] - {perfectCharacter.slot_4}</TextTag>
                    <TextTag>[5] - {perfectCharacter.slot_5}</TextTag>
                    <TextTag>[6] - {perfectCharacter.slot_6}</TextTag>
                </Div>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"} flex_wrap={"nowrap"}>
                    <TextTag>Recommended Sub-effects</TextTag>
                    <TextTag>{perfectCharacter.substat}</TextTag>
                </Div>
            </Div>
        </Div>
    )
}

export default PerfectCharacterCard;