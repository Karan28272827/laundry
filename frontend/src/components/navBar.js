import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Nav({ onLoginClick, onSignupClick, linksVisible }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleLoginClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        onLoginClick(); // Trigger the login popup
    };

    const handleSignupClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        onSignupClick(); // Trigger the signup popup
    };

    return (
        <nav>
            <img src="/images/logo.png" onClick={handleLogoClick} className="nav--logo" alt="Logo" />
            {linksVisible && (
                <div className="nav--links">
                    <a href="/" onClick={handleLoginClick}>Login</a> / 
                    <a href="/" onClick={handleSignupClick}>Sign Up</a>
                </div>
            )}
        </nav>
    );
}
