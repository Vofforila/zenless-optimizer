import {DatabaseCard} from "./DatabaseCard.tsx";

export default function Settings()
{
    return (
        <div className={"database-card"}>
            <div className={"Settings"}>
                <div className={"database-card-wrapper"}>
                    <DatabaseCard id={1} current={true} characters={0} disks={0} engines={0}></DatabaseCard>
                    <DatabaseCard id={2} current={false} characters={0} disks={0} engines={0}></DatabaseCard>
                    <DatabaseCard id={3} current={false} characters={0} disks={0} engines={0}></DatabaseCard>
                    <DatabaseCard id={4} current={false} characters={0} disks={0} engines={0}></DatabaseCard>
                </div>
            </div>
        </div>
    )
}