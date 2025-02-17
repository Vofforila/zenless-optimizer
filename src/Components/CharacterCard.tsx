import Div from "./Div.tsx";
import Img from "./Img.tsx";
import TextTag from "./TextTag.tsx";
import Disks from "../Classes/Disks.tsx";


interface CharacterCardProps
{
    characterName: string;
    critLabel: boolean;
    diskName: string;
    diskDescription: string;
    disk: Disks;
}


const CharacterCard: React.FC<CharacterCardProps> = ({
                                                         characterName,
                                                         critLabel,
                                                         diskName,
                                                         diskDescription,
                                                         disk
                                                     }: CharacterCardProps) =>
{
    return (
        <Div flex_direction={"column"} justify_content={"inherit"}
             align_items={"center"}
             flex_wrap={"nowrap"}>
            <Div flex_direction={"row"} justify_content={"normal"}
                 align_items={"normal"}
                 flex_wrap={"nowrap"} gap={8}>
                <p>{characterName}</p>
                <p>{critLabel}</p>
            </Div>
            <Div flex_direction={"row"} justify_content={"inherit"} align_items={"center"}
                 flex_wrap={"nowrap"}>
                <Img width={4} height={4} imgName={"rect"}></Img>
                <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
                     flex_wrap={"nowrap"}>
                    <TextTag>{diskName}</TextTag>
                    <TextTag>{diskDescription}</TextTag>
                </Div>
            </Div>
            <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
                 flex_wrap={"nowrap"}>
                <p>Add Artefacts here</p>
            </Div>
        </Div>
    );
}

export default CharacterCard;
