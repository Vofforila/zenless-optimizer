import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.tsx';
import Home from './Pages/Home';
import './Theme/Global.css'
import Archive from "./Pages/Archive.tsx";
import Docs from "./Pages/Docs.tsx";

export default function App()
{
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

