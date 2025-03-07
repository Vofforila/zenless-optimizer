import "./Disks.css"
import {DiskCard, TextTag} from "../../Components";
import GetPerfectMatches, {IMatch} from "../../Utilities/GetPerfectMatches.tsx";
import PerfectCharacterCard from "../../Components/PerfectCharacterCard/PerfectCharacterCard.tsx";

export default function Disks()
{
    const matches: IMatch[] = GetPerfectMatches();
    console.log(matches);
    return (
        <div className={"Disks"}>
            <TextTag textAlign={"center"} size={"title"}>Disks Page</TextTag>
            <div className={"disks-wrapper"}>
                {
                    matches.map((
                            match: IMatch,
                            index
                        ) =>
                            (
                                <div key={index} className={"perfect-group"}>
                                    <DiskCard key={match.disk.id} setKey={match.disk.setKey} slotKey={match.disk.slotKey}
                                              level={match.disk.level}
                                              mainStatKey={match.disk.mainStatKey}
                                              substats={match.disk.substats} id={match.disk.id}>
                                    </DiskCard>
                                    <PerfectCharacterCard disk={match.disk} matches={match.matches}></PerfectCharacterCard>
                                </div>
                            )
                    )
                }
            </div>
        </div>
    )
}