import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Nav({ onLoginClick, onSignupClick }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleLoginClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        onLoginClick(); // Trigger popup
        setTimeout(() => navigate('/login'), 0); // Navigate to login page after showing popup
    };

    const handleSignupClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        onSignupClick(); // Trigger popup
        setTimeout(() => navigate('/signup'), 0); // Navigate to signup page after showing popup
    };

    return (
        <nav>
            <img src="/images/logo.png" onClick={handleLogoClick} className="nav--logo" alt="Logo" />
            <div className="nav--links">
                <Link to="/login" onClick={handleLoginClick}>Login</Link> / 
                <Link to="/signup" onClick={handleSignupClick}>Sign Up</Link>
            </div>
        </nav>
    );
}

