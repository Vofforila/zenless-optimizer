import {Div, Img, LinkButton, TextTag} from "../Components";

export default function Home()
{
    return (

        <Div id={"Home"} flexDirection={"column"} width="100%" height="80vh" justifyContent={"center"}
             alignItems={"center"}
             flexWrap={"nowrap"}
             gap={16} alignContent={"normal"}>
            <Div id={"About-me"} flexDirection={"column"} justifyContent={"flex-start"}
                 alignItems={"flex-start"}
                 flexWrap={"nowrap"}
                 gap={2}
                 padding={[0, 0, 0, 0]} width="70%" alignContent={"normal"}>
                <Div id={"about-me-wrapper"} flexDirection={"row"} justifyContent={"flex-start"}
                     alignItems={"center"}
                     flexWrap={"nowrap"}
                     gap={2}
                     padding={[0, 0, 0, 0]} alignContent={"normal"}>
                    <Img width={5} height={5} imgName="logo"></Img>
                    <TextTag size="title" weight="bigweight">Zenless Optimizer</TextTag>
                </Div>
                <TextTag size="medium" weight="mediumweight">
                    This is a optimizer for Zenless Zone Zero. On this website you can find info about best discs for
                    specific characters. You can also import your dics to view them and make presets for the characters
                    you are using. This is not a guide website for the game it is only for team building and making disc
                    presets for each character.
                </TextTag>
                <Div id={"about-me-button-wrapper"} flexDirection={"row"} justifyContent={"flex-start"}
                     alignItems={"center"} flexWrap={"nowrap"}
                     gap={3}
                     padding={[0, 0, 0, 0]} alignContent={"normal"}>
                    <LinkButton target={"/Docs"}>Start Loading Discs</LinkButton>
                    <LinkButton target={"/Achive"}>View Character Wiki</LinkButton>
                </Div>
            </Div>
        </Div>
    )
}