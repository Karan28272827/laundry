import React, { useState }, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerSignup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    navigate('/cmain'); // Navigate to the cmain.js route
  };

  return (
    <div>
      <h1>Customer Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields can be added here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomerSignup;


