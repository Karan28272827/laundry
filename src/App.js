import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Nav from './components/navBar';
import LoginPage from './components/login';
import Signup from './components/Signup';
import Home from './components/home';
import NotFound from './components/notfound';

export default function App() {
    return(
        <div>
            <Nav />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}