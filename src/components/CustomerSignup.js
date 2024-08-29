import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerSignup() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsTransitioning(true); // Trigger the transition effect

    // Simulate processing delay before navigation
    setTimeout(() => {
      navigate('/laundry-options'); // Navigate to the LaundryOptions page
      setIsTransitioning(false); // Reset the transition state if needed
    }, 6000); // Adjusted timeout to match prolonged animation duration
  };

  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 60;
      const left = Math.random() * window.innerWidth;
      bubbles.push(
        <span
          key={i}
          style={{
            width: `${20 + size}px`,
            height: `${20 + size}px`,
            left: `${left}px`,
          }}
        ></span>
      );
    }
    return bubbles;
  };

  return (
    <div className={`full-page-container ${isTransitioning ? 'transitioning' : ''}`}>
      {isTransitioning && <div className="bubble-container">{createBubbles()}</div>}
      <div className="signup-container">
        <h1>Customer Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              style={{ backgroundColor: '#1a1a1a', color: '#fff', borderColor: '#333' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              style={{ backgroundColor: '#1a1a1a', color: '#fff', borderColor: '#333' }}
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#333', color: '#fff' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerSignup;
