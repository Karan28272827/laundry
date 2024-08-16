import React, { useState } from 'react'; 
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from './components/navBar';
import LoginPage from './components/login';
import Signup from './components/Signup';
import Home from './components/home';
import NotFound from './components/notfound';
import Popup from './components/popup';
import { Services, Footer } from './components/services';

export default function App() {
    return(
        <div>
            <Nav />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home/>}/>

                <Route path="/services" element={<Services />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Popup trigger = {true}>
                <h3>My Popup</h3>
                <p>This popup can be closed to navigate back to the home page.</p>
                <button onClick={handleClosePopup}>Close and Go to Home</button>
            </Popup>
            <Footer />  
        </div>
    );
}


