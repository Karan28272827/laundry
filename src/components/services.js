import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/laundry-options');
    };

    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="hero-content">
                <button onClick={handleOrderNowClick}>Order Now</button>
            </div>
            <div className="service-cards">
                <div className="card">
                    <img src="./images/laundry.jpg" alt="Laundry" />
                    <h3>Wash & Fold</h3>
                    <p>Professional washing and folding service.</p>
                </div>
                <div className="card">
                    <img src="images/dry-cleaning.jpg" alt="Dry Cleaning" />
                    <h3>Dry Cleaning</h3>
                    <p>High-quality dry cleaning for your delicate clothes.</p>
                </div>
                <div className="card">
                    <img src="images/ironing.jpg" alt="Ironing" />
                    <h3>Ironing</h3>
                    <p>Get perfectly ironed clothes every time.</p>
                </div>
            </div>
        </section>
    );
};


export  {Services} ;
