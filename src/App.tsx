import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './Components';
import {Archive, Disks, Docs, Home, Settings} from "./Pages";
import {Server} from "./Server";
import './Theme/Global.css';

export default function App()
{
    Server();
    return (
        <div className="main">
            <BrowserRouter basename={"/zenless-optimizer/"}>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Archive" element={<Archive></Archive>}></Route>
                    <Route path="/Disks" element={<Disks></Disks>}></Route>
                    <Route path="/Docs" element={<Docs></Docs>}></Route>
                    <Route path="/Settings" element={<Settings></Settings>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}