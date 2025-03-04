import {DatabaseCard} from "./DatabaseCard.tsx";
import "./Settings.css"
import {TextTag} from "../../Components";

export default function Settings()
{
    return (
            <div className={"Settings"}>
                <TextTag textAlign={"center"} size={"title"}>Settings Page</TextTag>
                <div className={"database-card-wrapper"}>
                    <DatabaseCard id={1} current={true} characters={0} disks={0} engines={0}></DatabaseCard>
                    <DatabaseCard id={2} current={false} characters={0} disks={0} engines={0}></DatabaseCard>
                    <DatabaseCard id={3} current={false} characters={0} disks={0} engines={0}></DatabaseCard>
                    <DatabaseCard id={4} current={false} characters={0} disks={0} engines={0}></DatabaseCard>
                </div>
            </div>
    )
}