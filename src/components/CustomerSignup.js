import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Signup Data:', formData);
    navigate('/cmain');
  };

  return (
    <div className="customer-signup-container">
      <h1 className="customer-signup-title">Customer Signup</h1>
      <form onSubmit={handleSubmit} className="customer-signup-form">
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="customer-signup-form-input"
            required
          />
        </div>
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="customer-signup-form-input"
            required
          />
        </div>
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="customer-signup-form-input"
            required
          />
        </div>
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="customer-signup-form-input"
            required
          />
        </div>
        <button type="submit" className="customer-signup-button">Submit</button>
      </form>
    </div>
  );
}

export default CustomerSignup;