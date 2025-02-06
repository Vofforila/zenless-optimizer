import { OpenPanel } from '../Components/SidePanel';
import './Navbar.css';
import LinkButton from "./LinkButton";
import Image from './Image';
import Button from './Button';

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
            <Image width={3} height={3} imgName="square" ></Image>
        </div>
    )
}

function TopRightNavbar()
{
    return (
        <div className="top-right-navbar-wrapper">
            <div className="top-right-navbar desktop">
                    <CreatePageRoutes></CreatePageRoutes>
            </div>
            <div className="top-right-navbar mobile">
                <Button onPress={OpenPanel} content="☰" className="menu-btn mobile"></Button>
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