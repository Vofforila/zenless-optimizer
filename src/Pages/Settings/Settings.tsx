import {DatabaseCard} from "./DatabaseCard.tsx";
import "./Settings.css"
import {TextTag} from "../../Components";
import {useState} from "react";
import {dbManager} from "../../Classes/DatabaseManager.tsx";

export default function Settings()
{
    const [CurrentDatabase, setCurrentDatabase] = useState<number>(1);
    const handleSwapDatabase = (id: number) => setCurrentDatabase(id);
    const [UploadDatabase, setUploadDatabase] = useState<boolean>(true);
    const toggleUploadDatabase = () => setUploadDatabase(prev => !prev);
    return (
        <div className={"Settings"}>
            <TextTag textAlign={"center"} size={"title"}>Settings Page</TextTag>
            {UploadDatabase ? (
                <div className={"database-card-wrapper"}>
                    <DatabaseCard id={1} current={CurrentDatabase === 1}
                                  characters={dbManager.GetDatabaseById(0).characters.length}
                                  disks={dbManager.GetDatabaseById(0).disks.length}
                                  engines={0} onUpload={toggleUploadDatabase}
                                  onSwap={handleSwapDatabase}></DatabaseCard>
                    <DatabaseCard id={2} current={CurrentDatabase === 2} characters={0} disks={0}
                                  engines={0} onUpload={toggleUploadDatabase}
                                  onSwap={handleSwapDatabase}></DatabaseCard>
                    <DatabaseCard id={3} current={CurrentDatabase === 3} characters={0} disks={0}
                                  engines={0} onUpload={toggleUploadDatabase}
                                  onSwap={handleSwapDatabase}></DatabaseCard>
                    <DatabaseCard id={4} current={CurrentDatabase === 4} characters={0} disks={0}
                                  engines={0} onUpload={toggleUploadDatabase}
                                  onSwap={handleSwapDatabase}></DatabaseCard>
                </div>
            ) : <div className={"database-card-wrapper"}>
                <DatabaseCard id={1} current={CurrentDatabase === 1}
                              characters={dbManager.GetDatabaseById(0).characters.length}
                              disks={dbManager.GetDatabaseById(0).disks.length}
                              engines={0} onUpload={toggleUploadDatabase}
                              onSwap={handleSwapDatabase}></DatabaseCard>
                <DatabaseCard id={2} current={CurrentDatabase === 2} characters={0} disks={0}
                              engines={0} onUpload={toggleUploadDatabase}
                              onSwap={handleSwapDatabase}></DatabaseCard>
                <DatabaseCard id={3} current={CurrentDatabase === 3} characters={0} disks={0}
                              engines={0} onUpload={toggleUploadDatabase}
                              onSwap={handleSwapDatabase}></DatabaseCard>
                <DatabaseCard id={4} current={CurrentDatabase === 4} characters={0} disks={0}
                              engines={0} onUpload={toggleUploadDatabase}
                              onSwap={handleSwapDatabase}></DatabaseCard>
            </div>
            }
        </div>
    )
}
