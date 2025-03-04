import {Button, Img, LinkButton, TextTag} from "../index.tsx";
import {OpenPanel} from './SidePanel.tsx';
import {GetDeviceType} from "../../Utilities"
import './Navbar.css';

export default function Navbar()
{
    return (
        <div className="navbar" id="navbar">
            <LeftNavbar></LeftNavbar>
            <RightNavbar></RightNavbar>
        </div>
    )
}

function LeftNavbar()
{
    return (
        <div className="navbar-left-wrapper">
            <Img width={50} height={50} imgName="logo"></Img>
            <TextTag size={"big"} weight={"smallWeight"}>Zenless Optimizer {import.meta.env.DEV ? "Dev" : ""} </TextTag>
        </div>
    )
}

function RightNavbar()
{
    return (
        <div className="navbar-right-wrapper">
            {GetDeviceType() === "desktop" ? <RightDesktopNavbar></RightDesktopNavbar> :
                <RightMobileNavbar></RightMobileNavbar>}
        </div>
    )
}

function RightDesktopNavbar()
{
    return (
        <div className="navbar-right-link-wrapper">
            <LinkButton target="/">Home</LinkButton>
            <LinkButton target="/Archive">Archive</LinkButton>
            <LinkButton target="/Disks">Disks</LinkButton>
            <LinkButton target="/Characters">Characters</LinkButton>
            <LinkButton target="/Bangboos">Bangboos</LinkButton>
            <LinkButton target="/Teams">Teams</LinkButton>
            <LinkButton target="/Docs">Docs</LinkButton>
            <LinkButton target="/Settings">Settings</LinkButton>
        </div>
    )
}

function RightMobileNavbar()
{
    return (
        <Button onPress={OpenPanel} className="menu-btn mobile">☰</Button>
    )
}