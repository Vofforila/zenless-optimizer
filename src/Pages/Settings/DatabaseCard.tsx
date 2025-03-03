import {Button, RoundedElement, TextTag} from "../../Components";
import {Theme} from "../../Theme/Theme.tsx";


interface IDatabaseCardProps
{
    id: number,
    current: boolean,
    characters: number,
    disks: number,
    engines: number,
}

export const DatabaseCard: React.FC<IDatabaseCardProps> = (database: IDatabaseCardProps) =>
{
    return (
        <div className={"database-card"}>
            <div className={"database-card-header"}>
                <TextTag>"Database" + {database.id}</TextTag>
                {
                    database.current ? (
                            <RoundedElement backgroundColor={Theme.contrast_color} borderRadius={3}>
                                <TextTag>Current Database</TextTag>
                            </RoundedElement>
                        ) :
                        (
                            <div className={"database-card-swap-wrapper"}>
                                <Button onPress={}></Button>
                                <RoundedElement backgroundColor={Theme.contrast_color} borderRadius={3}>
                                    <TextTag>${"Database " + {database}}</TextTag>
                                </RoundedElement>
                            </div>
                        )
                }
            </div>
            <div className={"database-card-content"}>
                <div className={"database-info"}>
                    <TextTag>Characters</TextTag><TextTag weight={"bigWeight"}>{database.characters}</TextTag>
                    <TextTag>Disks</TextTag><TextTag weight={"bigWeight"}>{database.disks}</TextTag>
                    <TextTag>Engines</TextTag><TextTag weight={"bigWeight"}>{database.engines}</TextTag>
                </div>
                <div className={"database-card-buttons"}>
                    <div className={"database-buttons-wrapper"}>
                        <Button onPress={}>Clipboard</Button>
                        <Button onPress={}>Upload</Button>
                    </div>
                    <div className={"database-buttons-wrapper"}>
                        <Button onPress={}>Download</Button>
                        <Button onPress={}>Delete</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}