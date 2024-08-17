import React, { useState } from 'react'; 
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from './components/navBar';
import LoginPage from './components/login';
import Signup from './components/Signup';
import Home from './components/home';
import NotFound from './components/notfound';
import Popup from './components/popup';
import { Services , Footer} from './components/services';

export default function App() {
    const [popupTrigger, setPopupTrigger] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setPopupTrigger(true); // Show the popup
    };

    const handleSignupClick = () => {
        setPopupTrigger(true); // Show the popup
    };

    const handleClosePopup = () => {
        setPopupTrigger(false); // Close the popup
        navigate('/'); // Navigate to the home page
    };

    return (
        <div>
            <Nav 
                onLoginClick={handleLoginClick} 
                onSignupClick={handleSignupClick} 
            />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Popup trigger={popupTrigger} setTrigger={setPopupTrigger}>
                <h3>My Popup</h3>
                <p>This popup appears when the login or signup button is clicked.</p>
                <button onClick={handleClosePopup}>Close and Go to Home</button>
            </Popup>
        </div>
    );
}
