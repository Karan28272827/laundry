import React, { useState } from 'react'; 
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from './components/navBar';
import LoginPage from './components/login';
import Signup from './components/Signup';
import Home from './components/home';
import NotFound from './components/notfound';
import Popup from './components/popup';

export default function App() {
    const [popupTrigger, setPopupTrigger] = useState(true); // Manage popup trigger state
    const navigate = useNavigate(); // Hook for navigation

    const handleClosePopup = () => {
        setPopupTrigger(false); // Close the popup
        navigate('/'); // Navigate to the home page
    };

    return(
        <div>
            <Nav />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Popup trigger={popupTrigger} setTrigger={setPopupTrigger}>
                <h3>My Popup</h3>
                <p>This popup can be closed to navigate back to the home page.</p>
                <button onClick={handleClosePopup}>Close and Go to Home</button>
            </Popup>
        </div>
    );
}
