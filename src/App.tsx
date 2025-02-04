import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './Theme/Global.css'

export default function App()
{
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}