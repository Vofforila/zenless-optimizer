import {Button, RoundedElement, TextTag} from "../../Components";
import {Theme} from "../../Theme/Theme.tsx";
import "./Databasecard.css"
import UploadPanel from "./UploadPanel.tsx";
import React, {useState} from "react";
import {dbManager} from "../../Classes/DatabaseManager.tsx";

interface IDatabaseCardProps
{
    id: number,
    current: boolean,
    characters: number,
    disks: number,
    engines: number,
    onSwap: (id: number) => void,
    onUpload: () => void,
}

export const DatabaseCard: React.FC<IDatabaseCardProps> = (database: IDatabaseCardProps) =>
{
    const [OpenUploadPanelOpen, setUploadPanelState] = useState<{
        isOpen: boolean,
        databaseId: number,
    }>({
        isOpen: false,
        databaseId: 1
    });
    const openPanel = () => setUploadPanelState({isOpen: true, databaseId: database.id});
    const closePanel = () => setUploadPanelState({isOpen: false, databaseId: database.id});
    const onUpload = () => database.onUpload();
    return (
        <div className={"database-card"}>
            <div className={"database-card-header"}>
                <RoundedElement backgroundColor={Theme.primary_color_transparent} borderRadius={8} flex={1}>
                    <TextTag size={"big"}>Database - {database.id}</TextTag>
                </RoundedElement>
                {
                    database.current ? (
                            <RoundedElement backgroundColor={Theme.selected_color} borderRadius={30}>
                                <TextTag>Current Database</TextTag>
                            </RoundedElement>
                        ) :
                        (
                            <div className={"database-card-swap-wrapper"}>
                                <Button onPress={() =>
                                {
                                    dbManager.SwapCurrentDatabase(database.id)
                                    database.onSwap(database.id)
                                }
                                }>Swap</Button>
                                <RoundedElement backgroundColor={Theme.deselected_color} borderRadius={3}>
                                    <TextTag>Database - {database.id}</TextTag>
                                </RoundedElement>
                            </div>
                        )
                }
            </div>
            <div className={"database-card-content"}>
                <div className={"database-info"}>
                    <div className={"database-info-wrapper"}>
                        <TextTag weight={"smallWeight"} size={"big"}>Characters:</TextTag>
                        <TextTag weight={"bigWeight"} size={"big"}>{database.characters}</TextTag>
                    </div>
                    <div className={"database-info-wrapper"}>
                        <TextTag weight={"smallWeight"} size={"big"}>Disks:</TextTag>
                        <TextTag weight={"bigWeight"} size={"big"}>{database.disks}</TextTag>
                    </div>
                    <div className={"database-info-wrapper"}>
                        <TextTag weight={"smallWeight"} size={"big"}>Engines:</TextTag>
                        <TextTag weight={"bigWeight"} size={"big"}>{database.engines}</TextTag>
                    </div>
                </div>
                <div className={"database-card-buttons"}>
                    <div className={"database-buttons-wrapper"}>
                        <Button onPress={() => dbManager.DatabaseToClipboard(database.id)}
                                scalable={false}>Clipboard</Button>
                        <Button onPress={openPanel} scalable={false}>Upload</Button>
                        <UploadPanel UploadPanelState={OpenUploadPanelOpen} onClose={closePanel} onUpload={onUpload}>
                            <h2>Modal Title</h2>
                            <p>This is a simple modal example.</p>
                        </UploadPanel>
                    </div>
                    <div className={"database-buttons-wrapper"}>
                        <Button onPress={() => dbManager.downloadDatabaseJSON(database.id)}
                                scalable={false}>Download</Button>
                        <Button onPress={() => dbManager.deleteDatabaseAtId(database.id)} color={Theme.text_color}
                                backgroundColor={Theme.error_color}
                                scalable={false}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}