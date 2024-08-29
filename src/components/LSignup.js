import React from 'react';
import { useNavigate } from 'react-router-dom';

function LSignup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Lmain');  // Redirect to the Lmain page
  };

  return (
    <div className="laundry-signup-container">
      <h1 className="laundry-signup-title">Laundry Signup</h1>
      <form className="laundry-signup-form" onSubmit={handleSubmit}>
        <div className="laundry-signup-form-group">
          <label className="laundry-signup-form-label" htmlFor="name">Name</label>
          <input className="laundry-signup-form-input" type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="laundry-signup-form-group">
          <label className="laundry-signup-form-label" htmlFor="email">Email</label>
          <input className="laundry-signup-form-input" type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="laundry-signup-form-group">
          <label className="laundry-signup-form-label" htmlFor="phone">Phone Number</label>
          <input className="laundry-signup-form-input" type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
        </div>
        <div className="laundry-signup-form-group">
          <label className="laundry-signup-form-label" htmlFor="password">Password</label>
          <input className="laundry-signup-form-input" type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button className="laundry-signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default LSignup;
