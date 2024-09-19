import React from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function CustomerSignup() {
  // useLocation and useNavigate hooks for routing
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect path after successful signup
  const from = location.state?.from?.pathname || '/cMain';

  // Initializing react-hook-form for form management
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit function to handle form submission
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      phone: data.phone,
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post('http://localhost:4001/user/signup', userInfo);
      console.log(res.data);
  
      if (res.data) {
        toast.success('Signup Successful');
        localStorage.setItem('Customer', JSON.stringify(res.data.customer)); // Store customer data locally
        navigate(from, { replace: true }); // Navigate to the desired page after signup
      }
    } catch (err) {
      if (err.response) {
        // Check for 409 Conflict (User already exists)
        if (err.response.status === 409) {
          toast.error('Error: This email is already registered. Please use another email.');
        } else {
          // Handle other errors
          toast.error('Error: ' + err.response.data.message);
        }
      } else {
        // Handle network errors or other unexpected errors
        toast.error('Error: Something went wrong. Please try again.');
      }
    }
  };
  
  

  return (
    <div className="customer-signup-container">
      <h1 className="customer-signup-title">Customer Signup</h1>

      {/* Form for customer signup */}
      <form onSubmit={handleSubmit(onSubmit)} className="customer-signup-form">

        {/* Input field for name */}
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="customer-signup-form-input"
            {...register('fullname', { required: true })}
          />
          {errors.fullname && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>

        {/* Input field for phone */}
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="phone">Phone:</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="customer-signup-form-input"
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>

        {/* Input field for email */}
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="customer-signup-form-input"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>

        {/* Input field for password */}
        <div className="customer-signup-form-group">
          <label className="customer-signup-form-label" htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="customer-signup-form-input"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>

        {/* Submit button for the form */}
        <button type="submit" className="customer-signup-button">Submit</button>
      </form>
    </div>
  );
}

export default CustomerSignup;
