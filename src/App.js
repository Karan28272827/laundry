import React, { useState } from 'react'; 
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from './components/navBar';
import LoginPage from './components/login';
import Signup from './components/Signup';
import Home from './components/home';
import NotFound from './components/notfound';
import Popup from './components/popup';
import { Services , Footer} from './components/services';
import CustomerSignup from './components/CustomerSignup';
import LSignup from './components/LSignup';
import DSignup from './components/DSignup';
import CMain from './components/cmain';
import LandingPage from './components/landingpage';

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

    const handleSignupType = (type) => {
        if (type === 'C') {
            navigate('/customer-signup'); // Navigate to Customer Signup page
        } else if (type === 'L') {
            navigate('/l-signup'); // Navigate to L Signup page
        } else if (type === 'D') {
            navigate('/d-signup'); // Navigate to D Signup page
        }
        setPopupTrigger(false); // Close the popup after navigation
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
                <Route path="/customer-signup" element={<CustomerSignup />} />
                <Route path="/l-signup" element={<LSignup />} />
                <Route path="/d-signup" element={<DSignup />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/cmain" element={<CMain />} />
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
        </div>
    );


    
}
