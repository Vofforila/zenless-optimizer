import "./Disks.css"
import {DiskCard, TextTag} from "../../Components";
import GetPerfectMatches, {IMatch} from "../../Utilities/GetPerfectMatches.tsx";
import PerfectCharacterCard from "../../Components/PerfectCharacterCard/PerfectCharacterCard.tsx";

export default function Disks()
{
    const matches:IMatch[] = GetPerfectMatches();
    console.log(matches);
    return (
        <div className={"Disks"}>
            <TextTag size={"title"}>Disks Page</TextTag>
            <div className={"disks-wrapper"}>
                    {
                        matches.map((match: IMatch) =>

                            (
                                <div className={"perfect-group"}>
                                <DiskCard setKey={match.disk.setKey} slotKey={match.disk.slotKey} level={match.disk.level}
                                          mainStatKey={match.disk.mainStatKey}
                                          substats={match.disk.substats} id={match.disk.id}>
                                </DiskCard>
                                <PerfectCharacterCard disk={match.disk} matches={match.matches} critMatch={match.critMatch} perfectCharacters={match.perfectCharacters}></PerfectCharacterCard>
                                </div>
                            )
                        )
                    }


            </div>
        </div>
    )
}