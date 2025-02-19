import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './Components';
import {Archive, Docs, Home} from "./Pages";
import {Server} from "./Server";
import './Theme/Global.css';
import ImageImport from "./Utilities/ImageImport.ts";

export default function App()
{
    console.log(ImageImport["logo"]);
    Server();
    return (
        <div className="main">
            <BrowserRouter basename={"/zenless-optimizer/"}>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Archive" element={<Archive></Archive>}></Route>
                    <Route path="/Docs" element={<Docs></Docs>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}