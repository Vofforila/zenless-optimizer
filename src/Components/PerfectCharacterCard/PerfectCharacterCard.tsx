import {Button, Img, RoundedElement, TextTag} from "../index.tsx";
import {useState} from "react";
import {IMatch} from "../../Utilities/GetPerfectMatches.tsx";
import {Theme} from "../../Theme/Theme.tsx";
import {DiskNameConverter} from "../../Utilities";
import StatUIConverter from "../../Utilities/StatUIConverter.tsx";

export default function PerfectCharacterCard(match:IMatch) {
    const perfectCharacters = match.perfectCharacters;
    const [currentPerfectCharacter, setCurrentPerfectCharacter] = useState<number>(0);

    const handleNextCharacter = () => {
        setCurrentPerfectCharacter((prevIndex) => (prevIndex + 1) % perfectCharacters.length);
    };

    return(
        <div className={"perfectCharacterCard"}>
            <div className={"perfectCharacterCard-header"}>
                <TextTag>{perfectCharacters[currentPerfectCharacter].characterName}</TextTag>
                <Button onPress={handleNextCharacter}>{`Other Users" + " ( " +  ${currentPerfectCharacter.toString()} + " / " + ${perfectCharacters.length.toString()}  + " )`}</Button>
                <RoundedElement backgroundColor={Theme.primary_color_transparent} borderRadius={3}>{`Matches: ${match.matches} / 4`}</RoundedElement>
                <RoundedElement backgroundColor={perfectCharacters[currentPerfectCharacter].critUser ? Theme.selected_color : Theme.error_color} borderRadius={3}>
                    <TextTag>CRIT</TextTag>
                </RoundedElement>
            </div>
            <div className={"perfectCharacterCard-disks"}>
                <div className={"disk-wrapper"}>
                        <TextTag weight="bigWeight">{perfectCharacters[currentPerfectCharacter].piece_4} × 2</TextTag>
                        <Img className="disk-icon" imgName={DiskNameConverter(perfectCharacters[currentPerfectCharacter].piece_4)}/>
                </div>
                <div className={"disk-wrapper"}>
                        <TextTag weight="bigWeight">{perfectCharacters[currentPerfectCharacter].piece_2} × 2</TextTag>
                        <Img className="disk-icon" imgName={DiskNameConverter(perfectCharacters[currentPerfectCharacter].piece_2)}/>
                </div>
            </div>
            <div className={"perfectCharacterCard-stats"}>
                <div className={"perfectCharacterCard-mainStats"}>
                    <div className={"perfectCharacterCard-mainStat-wrapper"}>
                        <TextTag weight="bigWeight">[4]</TextTag>
                        <TextTag whiteSpace="nowrap"
                             weight="bigWeight">{StatUIConverter(perfectCharacters[currentPerfectCharacter].slot_4)}</TextTag>
                    </div>
                    <div className={"perfectCharacterCard-mainStat-wrapper"}>
                        <TextTag weight="bigWeight">[4]</TextTag>
                        <TextTag whiteSpace="nowrap"
                                 weight="bigWeight">{StatUIConverter(perfectCharacters[currentPerfectCharacter].slot_4)}</TextTag>
                    </div>
                    <div className={"perfectCharacterCard-mainStat-wrapper"}>
                        <TextTag weight="bigWeight">[4]</TextTag>
                        <TextTag whiteSpace="nowrap"
                                 weight="bigWeight">{StatUIConverter(perfectCharacters[currentPerfectCharacter].slot_4)}</TextTag>
                    </div>

                </div>
                <div className={"perfectCharacterCard-substats"}>
                    <TextTag className="stats-title" weight="bigWeight">{`Recommended Substats : ${StatUIConverter(perfectCharacters[currentPerfectCharacter].substats)} `}</TextTag>
                    <div className="substats-content">
                    </div>
                </div>

            </div>
        </div>
    )
}