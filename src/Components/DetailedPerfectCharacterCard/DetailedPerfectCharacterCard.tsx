import {Img, TextTag} from "../index.tsx";
import {IPerfectCharacterProps} from "../../Classes/PerfectCharacter.tsx";
import {DiskNameConverter} from "../../Utilities";
import "./DetailedPerfectCharacterCard.css"
import StatUIConverter from "../../Utilities/StatUIConverter.tsx";

export default function DetailedPerfectCharacterCard(perfectCharacter: IPerfectCharacterProps)
{
    return (
        <div className="detailedPerfectCharacterCard">
            <div className="detailedPerfectCharacterCard-header">
                <div className="character-info">
                    <TextTag size="big" weight="bigWeight">{perfectCharacter.characterName}</TextTag>
                    <Img width={100} height={100} className="character-avatar"
                         imgName={perfectCharacter.characterName}/>
                </div>
                <div className="description-container">
                    <TextTag size="big" weight="bigWeight">Description</TextTag>
                    <TextTag size="medium" className="description-text">{perfectCharacter.description}</TextTag>
                </div>
            </div>
            <div className="detailedPerfectCharacterCard-content">
                <div className="disk-section">
                    <div className="disk-item">
                        <TextTag weight="bigWeight">{perfectCharacter.piece_4} × 4</TextTag>
                        <Img className="disk-icon" imgName={DiskNameConverter(perfectCharacter.piece_4)}/>
                    </div>
                    <div className="disk-item">
                        <TextTag weight="bigWeight">{perfectCharacter.piece_2} × 2</TextTag>
                        <Img className="disk-icon" imgName={DiskNameConverter(perfectCharacter.piece_2)}/>
                    </div>
                </div>
                <div className="stats-section">
                    <div className="main-stats">
                        <TextTag className="stats-title" size="big" weight="bigWeight">Recommended Main Effect</TextTag>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <TextTag weight="bigWeight">[4]</TextTag>
                                <TextTag whiteSpace="nowrap"
                                         weight="bigWeight">{StatUIConverter(perfectCharacter.slot_4)}</TextTag>
                            </div>
                            <div className="stat-item">
                                <TextTag weight="bigWeight">[5]</TextTag>
                                <TextTag whiteSpace="nowrap"
                                         weight="bigWeight">{StatUIConverter(perfectCharacter.slot_5)}</TextTag>
                            </div>
                            <div className="stat-item">
                                <TextTag weight="bigWeight">[6]</TextTag>
                                <TextTag whiteSpace="nowrap"
                                         weight="bigWeight">{StatUIConverter(perfectCharacter.slot_6)}</TextTag>
                            </div>
                        </div>
                    </div>
                    <div className="sub-stats">
                        <TextTag className="stats-title" weight="bigWeight">Recommended Substats</TextTag>
                        <div className="substats-content">
                            <TextTag weight="bigWeight"
                                     className="substats-text">{StatUIConverter(perfectCharacter.substats)}</TextTag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

