import {Div, Img, LinkButton, TextTag} from "../Components";

export default function Home()
{
    return (

        <Div id={"Home"} flex_direction={"column"} width="100%" height="80vh" justify_content={"center"}
             align_items={"center"}
             flex_wrap={"nowrap"}
             gap={16}>
            <Div id={"About-me"} flex_direction={"column"} justify_content={"flex-start"}
                 align_items={"flex-start"}
                 flex_wrap={"nowrap"}
                 gap={2}
                 padding={[0, 0, 0, 0]} width="70%">
                <Div id={"about-me-wrapper"} flex_direction={"row"} justify_content={"flex-start"}
                     align_items={"center"}
                     flex_wrap={"nowrap"}
                     gap={2}
                     padding={[0, 0, 0, 0]}>
                    <Img width={5} height={5} imgName="logo"></Img>
                    <TextTag size="title" weight="bigweight">Zenless Optimizer</TextTag>
                </Div>
                <TextTag size="medium" weight="mediumweight">
                    This is a optimizer for Zenless Zone Zero. On this website you can find info about best discs for
                    specific characters. You can also import your dics to view them and make presets for the characters
                    you are using. This is not a guide website for the game it is only for team building and making disc
                    presets for each character.
                </TextTag>
                <Div id={"about-me-button-wrapper"} flex_direction={"row"} justify_content={"flex-start"}
                     align_items={"center"} flex_wrap={"nowrap"}
                     gap={3}
                     padding={[0, 0, 0, 0]}>
                    <LinkButton target={"/Docs"}>Start Loading Discs</LinkButton>
                    <LinkButton target={"/Achive"}>View Character Wiki</LinkButton>
                </Div>
            </Div>
        </Div>
    )
}