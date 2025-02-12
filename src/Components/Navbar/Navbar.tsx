import {OpenPanel} from './SidePanel.tsx';
import {Button, Img, LinkButton} from "../index.tsx";
import {GetDeviceType} from "../../Utilities"
import './Navbar.css';

export default function Navbar()
{
    return (
        <div className="navbar-container" id="navbar">
            <TopLeftNavbar></TopLeftNavbar>
            <TopRightNavbar></TopRightNavbar>
        </div>
    )
}

function TopLeftNavbar()
{
    return (
        <div className="top-left-navbar">
            <Img width={5} height={5} imgName="logo"></Img>
            <p className="big smallweight">Zenless Optimizer {import.meta.env.DEV ? "Dev" : ""} </p>
        </div>
    )
}

function TopRightNavbar()
{

    return (
        <div className="top-right-navbar">
            {GetDeviceType() === "desktop" ? <TopDesktopNavbar></TopDesktopNavbar> :
                <TopMobileNavbar></TopMobileNavbar>}
        </div>
    )
}

function TopDesktopNavbar()
{
    return (
        <div className="link-wrapper">
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

function TopMobileNavbar()
{
    return (
        <Button onPress={OpenPanel} className="menu-btn mobile">☰</Button>
    )
}