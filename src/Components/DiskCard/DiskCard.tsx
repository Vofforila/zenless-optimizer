import {IDisk} from "../../Classes/Disk.tsx";
import './DiskCard.css'
import {RoundedElement, TextTag} from "../index.tsx";
import {Theme} from "../../Theme/Theme.tsx";

export default function DiskCard(disk: IDisk)
{
    return (
        <div className={"disk-card"}>
            <div className={"disk-top"}>
                <div className={"disk-header"}>
                    <RoundedElement backgroundColor={Theme.selected_color} borderRadius={3}>
                        <TextTag>{disk.level}</TextTag>
                        <TextTag>Disk Set {disk.setKey}</TextTag>
                    </RoundedElement>
                </div>
                <TextTag>Disk Slot - [{disk.slotKey}]</TextTag>
                <TextTag>{disk.mainStatKey}</TextTag>
            </div>
            <div className={"disk-bottom"}>
                <div className={"substat-wrapper"}>
                    <TextTag>{disk.substats[0].key}</TextTag>
                    <TextTag>{disk.substats[0].value}</TextTag>
                </div>
                <div className={"substat-wrapper"}>
                    <TextTag>{disk.substats[1].key}</TextTag>
                    <TextTag>{disk.substats[1].value}</TextTag>
                </div>
                <div className={"substat-wrapper"}>
                    <TextTag>{disk.substats[2].key}</TextTag>
                    <TextTag>{disk.substats[2].value}</TextTag>
                </div>
                <div className={"substat-wrapper"}>
                    <TextTag>{disk.substats[3].key ? null : ""}</TextTag>
                    <TextTag>{disk.substats[3].value ? null : ""}</TextTag>
                </div>
                <div className={"disk-quality"}>
                    <TextTag>Crit Roll Value:</TextTag>
                    <TextTag>Roll Value:</TextTag>
                    <TextTag>Max Roll Value: 780%</TextTag>
                </div>
            </div>
        </div>
    )
}