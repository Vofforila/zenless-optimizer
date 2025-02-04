import GetDeviceType from '../Utilities/GetDeviceType'
import { OpenPanel } from '../Components/SidePanel'
import './Navbar.css'
import LinkButton from "./LinkButton";
import CustomImage from './CustomImage';

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
            <CustomImage width="40px" height="40px" imgName="rect" ></CustomImage>
            <p className="big smallweight">Zenless Optimizer</p>
        </div>
    )
}

function TopRightNavbar()
{
    return (
        <ResponsiveNavibation></ResponsiveNavibation>
    )
}

function ResponsiveNavibation()
{
    var deviceType = GetDeviceType()
    if (deviceType.isDesktop === true) {
        return (
            <div className="top-right-navbar desktop">
                <CreatePageRoutes></CreatePageRoutes>
            </div>
        );
    }
    else if (deviceType.isMobile === true) {
        return (
            <div className="top-right-navbar mobile">
                <button className="menu-btn" onClick={OpenPanel}>☰</button>
                )
            </div>
        );
    }
    return (
        <div className="top-right-navbar mobile">
            <button className="menu-btn" onClick={OpenPanel}>☰</button>
            )
        </div>
    );
}

function CreatePageRoutes()
{
    return (
        <LinkButton target="/" name="Home" ></LinkButton>
    )
}