import {Button, Img, RoundedElement, TextTag} from "../index.tsx";
import {useState} from "react";
import {IMatch, IPerfectMatch} from "../../Utilities/GetPerfectMatches.tsx";
import {Theme} from "../../Theme/Theme.tsx";
import {DiskNameConverter} from "../../Utilities";
import "./PerfectCharacterCard.css"
import PerfectSubstatUIConverter from "../../Utilities/PerfectSubstatUIConverter.tsx";
import {Disk} from "../../Classes";
import PerfectMainStatUIConverter from "../../Utilities/PerfectMainStatUIConverter.tsx";

export default function PerfectCharacterCard(match: IMatch)
{
    const perfectMatches: IPerfectMatch[] = match.matches;
    const [currentPerfectCharacter, setCurrentPerfectCharacter] = useState<number>(0);
    const handleNextCharacter = () =>
    {
        setCurrentPerfectCharacter((prevIndex) => (prevIndex + 1) % perfectMatches.length);
    };
    return (
        <div className={"perfectCharacterCard"}>
            <div className={"perfectCharacterCard-header"}>
                <TextTag size={"big"}>{perfectMatches[currentPerfectCharacter].perfectCharacter.characterName}</TextTag>
                <Button size={2}
                        onPress={handleNextCharacter}>{`Other Users ( ${(currentPerfectCharacter + 1).toString()} / ${perfectMatches.length.toString()} )`}</Button>
                <RoundedElement backgroundColor={Theme.primary_color}
                                borderRadius={40}>
                    <TextTag
                        size={"medium"}
                        whiteSpace={"nowrap"}>{`Matches: ${perfectMatches[currentPerfectCharacter].matches} / 4`}</TextTag>
                </RoundedElement>
                <RoundedElement
                    backgroundColor={perfectMatches[currentPerfectCharacter].perfectCharacter.critUser ? Theme.selected_color : Theme.error_color}
                    borderRadius={3}>
                    <TextTag>CRIT</TextTag>
                </RoundedElement>
            </div>
            <div className={"perfectCharacterCard-disks"}>
                <div className={"disk-wrapper"}>
                    <TextTag
                        weight="bigWeight">{Disk.getUISetKey(perfectMatches[currentPerfectCharacter].perfectCharacter.piece_4)} ×
                        4</TextTag>
                    <Img className="disk-icon"
                         imgName={DiskNameConverter(Disk.getUISetKey(perfectMatches[currentPerfectCharacter].perfectCharacter.piece_4))}/>
                </div>
                <div className={"disk-wrapper"}>
                    <TextTag
                        weight="bigWeight">{Disk.getUISetKey(perfectMatches[currentPerfectCharacter].perfectCharacter.piece_2)} ×
                        2</TextTag>
                    <Img className="disk-icon"
                         imgName={DiskNameConverter(Disk.getUISetKey(perfectMatches[currentPerfectCharacter].perfectCharacter.piece_2))}/>
                </div>
            </div>
            <div className={"perfectCharacterCard-stats"}>
                <div className={"perfectCharacterCard-mainStats"}>
                    <div className={"perfectCharacterCard-mainStat-wrapper"}>
                        <TextTag weight="bigWeight">[4] - </TextTag>
                        <TextTag whiteSpace="nowrap"
                                 weight="bigWeight">{PerfectMainStatUIConverter(perfectMatches[currentPerfectCharacter].perfectCharacter.slot_4)}</TextTag>
                    </div>
                    <div className={"perfectCharacterCard-mainStat-wrapper"}>
                        <TextTag weight="bigWeight">[5] - </TextTag>
                        <TextTag whiteSpace="nowrap"
                                 weight="bigWeight">{PerfectMainStatUIConverter(perfectMatches[currentPerfectCharacter].perfectCharacter.slot_5)}</TextTag>
                    </div>
                    <div className={"perfectCharacterCard-mainStat-wrapper"}>
                        <TextTag weight="bigWeight">[6] - </TextTag>
                        <TextTag whiteSpace="nowrap"
                                 weight="bigWeight">{PerfectMainStatUIConverter(perfectMatches[currentPerfectCharacter].perfectCharacter.slot_6)}</TextTag>
                    </div>
                </div>
                <div className={"perfectCharacterCard-substats"}>
                    <TextTag className="stats-title"
                             weight="bigWeight">Recommended Substats</TextTag>
                    <RoundedElement width={500} height={30} circle={false} backgroundColor={Theme.primary_color}
                                    borderRadius={3}>
                        <TextTag
                            weight="bigWeight">{PerfectSubstatUIConverter(perfectMatches[currentPerfectCharacter].perfectCharacter.substats)}</TextTag>
                    </RoundedElement>
                </div>

            </div>
        </div>
    )
}