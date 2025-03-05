import "./Disks.css"
import {DiskCard, TextTag} from "../../Components";
import {dbManager} from "../../Classes/DatabaseManager.tsx";
import {LocalDatabase} from "../../Classes/LocalDatabase.tsx";
import {Disk} from "../../Classes";

export default function Disks()
{
    const db: LocalDatabase = dbManager.GetCurrentDb()
    return (
        <div className={"Disks"}>
            <TextTag size={"title"}>Disks Page</TextTag>
            <div className={"disks-wrapper"}>
                <div className={"perfect-group"}>
                    {
                        db.disks.map((disk: Disk) =>
                            (
                                <DiskCard setKey={disk.setKey} slotKey={disk.slotKey} level={disk.level}
                                          mainStatKey={disk.mainStatKey}
                                          substats={disk.substats} id={disk.id}>
                                </DiskCard>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}