import {IDisk} from "../../Classes/Disk.tsx";
import './DiskCard.css'
import {RoundedElement, TextTag} from "../index.tsx";
import {Theme} from "../../Theme/Theme.tsx";
import Img from "../Img.tsx";
import {DiskNameConverter} from "../../Utilities";
import {Disk} from "../../Classes";

export default function DiskCard(disk: IDisk)
{
    return (
        <div className={"disk-card"}>
            <div className={"disk-top"}>
                <div className={"disk-top-left"}>
                    <div className={"disk-header"}>
                        <RoundedElement circle={true} borderRadius={25} padding={"8px"}
                                        backgroundColor={
                                            disk.level >= 0 && disk.level < 3 ? Theme.substat_1 :
                                                disk.level >= 3 && disk.level < 6 ? Theme.substat_2 :
                                                    disk.level >= 6 && disk.level < 9 ? Theme.substat_3 :
                                                        disk.level >= 9 && disk.level < 12 ? Theme.substat_4 :
                                                            disk.level >= 12 && disk.level <= 15 ? Theme.substat_5 :
                                                                Theme.selected_color}>
                            <TextTag whiteSpace={"nowrap"}>+ {disk.level}</TextTag>
                        </RoundedElement>
                        <RoundedElement backgroundColor={Theme.selected_color} borderRadius={40}>
                            <TextTag>{Disk.getUISetKey(disk.setKey)}</TextTag>
                        </RoundedElement>
                    </div>
                    <TextTag size={"big"}>Disk Slot - [{disk.slotKey}]</TextTag>
                    <TextTag size={"medium"}>{Disk.getUIMainStat(disk.mainStatKey)}</TextTag>
                </div>
                <Img className={"disk-image"} width={80} height={80} imgName={DiskNameConverter(Disk.getUISetKey(disk.setKey))}></Img>
            </div>
            <div className={"disk-bottom"}>
                <div className={"substat-wrapper"}>
                    <TextTag>{Disk.getUISubstat(disk.substats[0].key)}</TextTag>
                    <TextTag>{disk.substats[0].value}</TextTag>
                </div>
                <div className={"substat-wrapper"}>
                    <TextTag>{Disk.getUISubstat(disk.substats[1].key)}</TextTag>
                    <TextTag>{disk.substats[1].value}</TextTag>
                </div>
                <div className={"substat-wrapper"}>
                    <TextTag>{Disk.getUISubstat(disk.substats[2].key)}</TextTag>
                    <TextTag>{disk.substats[2].value}</TextTag>
                </div>
                {disk.substats.length - 1 >= 3 && (
                    <div className={"substat-wrapper"}>
                        <TextTag>{Disk.getUISubstat(disk.substats[3].key)}</TextTag>
                        <TextTag>{disk.substats[3].value}</TextTag>
                    </div>
                )}
                <div className={"disk-quality"}>
                    <TextTag>Crit Roll Value:</TextTag>
                    <TextTag>Roll Value:</TextTag>
                    <TextTag>Max Roll Value: 780%</TextTag>
                </div>
            </div>
        </div>
    )
}