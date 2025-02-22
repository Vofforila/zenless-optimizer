import Div from "./Div.tsx";
import {Img, TextTag} from "./index.tsx";
import {PerfectCharacterProps} from "../Classes/PerfectCharacter.tsx";
import React from "react";
import {Theme} from "../Theme/Theme.tsx"
import {DiskConverter} from "../Utilities";

const PerfectCharacterCard: React.FC<PerfectCharacterProps> = (
    perfectCharacter
    : PerfectCharacterProps) =>
{
    console.log(perfectCharacter.substats);
    return (
        <Div
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="nowrap"
            padding={[12, 12, 12, 12]}
            backgroundColor={Theme.primary_color_transparent}
            border={[2, "solid", "black"]}
            width="60%"
            borderRadius={12}
            box_shadow={[0, 4, 10, "rgba(0, 0, 0, 0.3)"]}
            alignContent={"normal"}>
            <Div flexDirection="row" justifyContent="center" alignItems="center" flexWrap="nowrap" gap={12}
                 alignContent={"normal"}>
                <Div flexDirection="column" alignItems="center" justifyContent={"normal"} flexWrap={"nowrap"}
                     alignContent={"normal"}>
                    <Img
                        width={100}
                        height={100}
                        borderRadius={50}
                        boxShadow={[0, 2, 8, "rgba(0, 0, 0, 0.2)"]}
                        imgName={perfectCharacter.characterName}
                    />
                    <TextTag size={"medium"} weight={"bigweight"}>{perfectCharacter.characterName}</TextTag>
                </Div>

                {/* Description Box */}
                <Div flexDirection="column" justifyContent="center" alignItems="center" gap={6} flexWrap={"nowrap"}
                     alignContent={"normal"}>
                    <TextTag size="big" weight={"bigweight"}>Description</TextTag>
                    <TextTag
                        size="medium"
                        width={240}
                        height={100}
                        textAlign="center"
                        /*backgroundColor="rgba(0, 0, 0, 0.2)"*/
                        padding={[8, 8, 8, 8]}
                        borderRadius={8}
                        boxShadow={["inset", 2, 6, "rgba(0, 0, 0, 0.2)"]}
                    >
                        {perfectCharacter.description}
                    </TextTag>
                </Div>
            </Div>
            <Div flexDirection="row" justifyContent="center" alignItems="center" flexWrap="nowrap" gap={12}
                 alignContent={"normal"}>
                <Div flexDirection="column" alignItems="center" justifyContent={"normal"} flexWrap={"nowrap"}
                     alignContent={"normal"}>
                    <Div
                        flexDirection="column"
                        alignItems="center"
                        gap={4}
                        padding={[8, 8, 8, 8]}
                        border={[2, "solid", "black"]}
                        borderRadius={10}
                        backgroundColor="rgba(255, 255, 255, 0.2)"
                        justifyContent={"normal"} flexWrap={"nowrap"}
                        alignContent={"normal"}>
                        <TextTag weight="bigweight">{"4-Piece - " + perfectCharacter.piece_4}</TextTag>
                        <Img width={85} height={80} imgName={DiskConverter(perfectCharacter.piece_4)}/>
                    </Div>
                    <Div
                        flexDirection="column"
                        alignItems="center"
                        gap={4}
                        padding={[8, 8, 8, 8]}
                        border={[2, "solid", "black"]}
                        borderRadius={10}
                        backgroundColor="rgba(255, 255, 255, 0.2)" justifyContent={"normal"} flexWrap={"nowrap"}
                        alignContent={"normal"}>
                        <TextTag weight="bigweight">{"2-Piece - " + perfectCharacter.piece_2}</TextTag>
                        <Img width={85} height={80} imgName={DiskConverter(perfectCharacter.piece_2)}/>
                    </Div>
                </Div>

                {/* Slot & Substat Info */}
                <Div flexDirection="column" alignItems="center" justifyContent={"normal"} flexWrap={"nowrap"}
                     alignContent={"normal"}>
                    <TextTag weight="bigweight">{"[4] - " + perfectCharacter.slot_4}</TextTag>
                    <TextTag weight="bigweight">{"[5] - " + perfectCharacter.slot_5}</TextTag>
                    <TextTag weight="bigweight">{"[6] - " + perfectCharacter.slot_6}</TextTag>
                    <Div flexDirection="column" alignItems="center" justifyContent={"normal"} flexWrap={"nowrap"}
                         alignContent={"normal"}>
                        <TextTag weight="bigweight">Recommended Substats</TextTag>
                        <TextTag
                            weight="bigweight"
                            /*backgroundColor="rgba(0, 0, 0, 0.2)"*/
                            padding={[6, 6, 6, 6]}
                            borderRadius={6}
                            textAlign="center"
                        >
                            {perfectCharacter.substats}
                        </TextTag>
                    </Div>
                </Div>
            </Div>
        </Div>

    )
}

export default PerfectCharacterCard;