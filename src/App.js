import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Nav from './components/navBar';
import LoginPage from './components/login';
import Signup from './components/Signup';
import Home from './components/home';
import NotFound from './components/notfound';
import Popup from './components/popup';
import { Services, Footer } from './components/services';
import CustomerSignup from './components/CustomerSignup';
import LSignup from './components/LSignup';
import DSignup from './components/DSignup';
import CMain from './components/cmain';
import LandingPage from './components/landingpage';
import Lmain from './components/Lmain';

export default function App() {
    const [popupTrigger, setPopupTrigger] = useState(false);
    const [linksVisible, setLinksVisible] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Reset links visibility when navigating to the home page
        if (location.pathname === '/') {
            setLinksVisible(true);
        }
    }, [location]);

    const handleLoginClick = () => {
        setPopupTrigger(true);
        setLinksVisible(false);
    };

    const handleSignupClick = () => {
        setPopupTrigger(true);
        setLinksVisible(false);
    };

    const handleClosePopup = () => {
        setPopupTrigger(false);
        navigate('/'); // Navigate to the home page
    };

    const handleSignupType = (type) => {
        const paths = {
            C: '/customer-signup',
            L: '/l-signup',
            D: '/d-signup',
        };

        if (paths[type]) {
            navigate(paths[type]);
            setPopupTrigger(false);
        }
    };

    return (
        <div>
            <Nav 
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                linksVisible={linksVisible}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/services" element={<Services />} />
                <Route path="/customer-signup" element={<CustomerSignup />} />
                <Route path="/l-signup" element={<LSignup />} />
                <Route path="/d-signup" element={<DSignup />} />
                <Route path="/cmain" element={<CMain />} />
                <Route path="/lmain" element={<Lmain />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Popup trigger={popupTrigger} setTrigger={setPopupTrigger}>
                <h3>Signup Type</h3>
                <p>Select the type of signup:</p>
                <div className="button-group">
                    <button onClick={() => handleSignupType('C')}>Customer Signup</button>
                    <button onClick={() => handleSignupType('L')}>L Signup</button>
                    <button onClick={() => handleSignupType('D')}>D Signup</button>
                </div>
                <button onClick={handleClosePopup}>Close and Go to Home</button>
            </Popup>
            <Footer /> {/* Include Footer at the bottom of the page */}
        </div>
    );
}
