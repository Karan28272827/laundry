import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliverySignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    vehicle: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Delivery Boy Signup Data:', formData);
    navigate('/dmain');
  };

  return (
    <div className="delivery-signup-container max-w-lg mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h1 className="delivery-signup-title text-2xl font-semibold mb-6 text-center text-gray-800">Delivery Boy Signup</h1>
      <form onSubmit={handleSubmit} className="delivery-signup-form flex flex-col gap-4">
        <div className="delivery-signup-form-group flex flex-col">
          <label className="delivery-signup-form-label mb-2 text-gray-600 font-medium" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="delivery-signup-form-input w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <div className="delivery-signup-form-group flex flex-col">
          <label className="delivery-signup-form-label mb-2 text-gray-600 font-medium" htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="delivery-signup-form-input w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <div className="delivery-signup-form-group flex flex-col">
          <label className="delivery-signup-form-label mb-2 text-gray-600 font-medium" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="delivery-signup-form-input w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <div className="delivery-signup-form-group flex flex-col">
          <label className="delivery-signup-form-label mb-2 text-gray-600 font-medium" htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="delivery-signup-form-input w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <div className="delivery-signup-form-group flex flex-col">
          <label className="delivery-signup-form-label mb-2 text-gray-600 font-medium" htmlFor="vehicle">Vehicle Type:</label>
          <input
            type="text"
            name="vehicle"
            id="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="delivery-signup-form-input w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <button type="submit" className="delivery-signup-button w-full mt-4 py-3 bg-blue-600 text-white text-base font-semibold rounded-md hover:bg-blue-700 transition-colors">Submit</button>
      </form>
    </div>
  );
}

export default DeliverySignup;
