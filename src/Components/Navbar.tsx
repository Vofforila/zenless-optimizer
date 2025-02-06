import { OpenPanel } from '../Components/SidePanel'
import './Navbar.css'
import LinkButton from "./LinkButton";
import CustomImage from './CustomImage';
import CustomButton from './CustomButton';

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
            <p className="big smallweight">Zenless Optimizer   {import.meta.env.DEV ? "Dev" : ""} </p>
            <CustomImage width={3} height={3} imgName="square" ></CustomImage>
        </div>
    )
}

function TopRightNavbar()
{
    return (
        <div className="top-right-navbar-warpper">
            <div className="top-right-navbar desktop">
                    <CreatePageRoutes></CreatePageRoutes>
            </div>
            <div className="top-right-navbar mobile">
                <CustomButton onPress={OpenPanel} content="☰" className="menu-btn mobile"></CustomButton>
            </div>
        </div >

    )
}


function CreatePageRoutes()
{
    return (
        <LinkButton target="/" name="Home" ></LinkButton>
    )
}