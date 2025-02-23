import {Img, LinkButton, TextTag} from "../../Components";
import "./Home.css"

export default function Home()
{
    return (
    <div id={"Home"} className={"home"}>
        <div className={"home-about-me"}>
            <div className={"home-about-me-icon-wrapper"}>
                <Img className={"home-about-me-icon"} imgName="logo"></Img>
                <TextTag size="title" weight="bigWeight">Zenless Optimizer</TextTag>
            </div>
            <TextTag size="medium" weight="mediumWeight">
                This is a optimizer for Zenless Zone Zero. On this website you can find info about best discs for
                specific characters. You can also import your dics to view them and make presets for the characters
                you are using. This is not a guide website for the game it is only for team building and making disc
                presets for each character.
            </TextTag>
            <div className={"home-about-me-button-wrapper"}>
                <LinkButton target={"/Docs"}>Start Loading Discs</LinkButton>
                <LinkButton target={"/Achieve"}>View Character Wiki</LinkButton>
            </div>
        </div>
    </div>
    )
}