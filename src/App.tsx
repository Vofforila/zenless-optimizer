import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './Theme/Global.css'

export default function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <Navbar></Navbar>
                <Home></Home>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

