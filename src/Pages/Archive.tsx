import Div from "../Components/Div.tsx";
import Img from "../Components/Img.tsx";
import TextTag from "../Components/TextTag.tsx";


export default function Archive()
{
    return (
        <Div id={"Archive"} flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
             flex_wrap={"nowrap"}>
            <Div id={"ListBox"} flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
                 flex_wrap={"nowrap"}>
                Character Filter
                <Div id={"CharacterList"} flex_direction={"row"} justify_content={"inherit"} align_items={"center"}
                     flex_wrap={"nowrap"}
                     padding={[0, 0, 0, 0]}>
                    <Div flex_direction={"column"} justify_content={"inherit"}
                         align_items={"center"}
                         flex_wrap={"nowrap"}>
                        <Div flex_direction={"row"} justify_content={"normal"}
                             align_items={"normal"}
                             flex_wrap={"nowrap"} gap={8}>
                            <p>Character Name</p>
                            <p>Crit/Not</p>
                        </Div>
                        <Div flex_direction={"row"} justify_content={"inherit"} align_items={"center"}
                             flex_wrap={"nowrap"}>
                            <Img width={4} height={4} imgName={"rect"}></Img>
                            <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
                                 flex_wrap={"nowrap"}>
                                <TextTag>Disk Name</TextTag>
                                <TextTag>Description</TextTag>
                            </Div>
                        </Div>
                        <Div flex_direction={"column"} justify_content={"inherit"} align_items={"center"}
                             flex_wrap={"nowrap"}>
                            <p>Add Artefacts here</p>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}