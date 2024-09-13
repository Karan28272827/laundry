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
        <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-lg">
            <img 
                src="/images/logo.png" 
                onClick={handleLogoClick} 
                className="nav--logo cursor-pointer h-10" 
                alt="Logo" 
            />
            {linksVisible && (
                <div className="nav--links flex space-x-6">
                    <a 
                        href="/" 
                        onClick={handleLoginClick} 
                        className="hover:text-blue-300 transition-colors duration-300"
                    >
                        Login
                    </a>
                    /
                    <a 
                        href="/" 
                        onClick={handleSignupClick} 
                        className="hover:text-blue-300 transition-colors duration-300"
                    >
                        Sign Up
                    </a>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        Investor Relations
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        Add Laundry Shops
                    </button>
                </div>
            )}
        </nav>
    );
}
