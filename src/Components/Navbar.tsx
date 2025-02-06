import React, { useState, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(window.innerHeight < 800);
    useEffect(() =>
    {
        function handleResize()
        {
            setIsMobile(window.innerHeight < 800);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="top-right-navbar">
            { isMobile ? <TopMobileNavbar></TopMobileNavbar> : <TopDesktopNavbar></TopDesktopNavbar>} 
        </div >

    )
}

function TopDesktopNavbar()
{
    return (
    <Button onPress={OpenPanel} className="menu-btn mobile">☰</Button>
    )
}
function TopMobileNavbar()
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