import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function CustomerSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/cMain';
  
  // State to track if OTP input should be shown
  const [showOTP, setShowOTP] = useState(false);

  // State to store OTP input
  const [otp, setOtp] = useState('');

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
        localStorage.setItem('Customer', JSON.stringify(res.data.customer));
        setShowOTP(true); // Show OTP input field after successful signup
        // Simulate OTP being sent via email (in real use case, send OTP from backend)
      }
      localStorage.setItem('Users', JSON.stringify(res.data));
    } catch (err) {
      if (err.response) {
        if (err.response.status === 409) {
          toast.error('Error: This email is already registered. Please use another email.');
        } else {
          toast.error('Error: ' + err.response.data.message);
        }
      } else {
        toast.error('Error: Something went wrong. Please try again.');
      }
    }
  };

  // Function to handle OTP verification (can be extended)
  const handleOtpSubmit = () => {
    if (otp === '123456') { // Assuming '123456' is the OTP for demo purposes
      toast.success('OTP Verified Successfully');
      navigate(from, { replace: true });
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="customer-signup-container">
      <h1 className="customer-signup-title">Customer Signup</h1>

      {!showOTP ? (
        <form onSubmit={handleSubmit(onSubmit)} className="customer-signup-form">
          <div className="customer-signup-form-group">
            <label className="customer-signup-form-label" htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="customer-signup-form-input"
              {...register('fullname', { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div className="customer-signup-form-group">
            <label className="customer-signup-form-label" htmlFor="phone">Phone:</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="customer-signup-form-input"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div className="customer-signup-form-group">
            <label className="customer-signup-form-label" htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="customer-signup-form-input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div className="customer-signup-form-group">
            <label className="customer-signup-form-label" htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="customer-signup-form-input"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <button type="submit" className="customer-signup-button">Submit</button>
        </form>
      ) : (
        <div className="otp-container">
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="OTP sent on mail"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="otp-input"
          />
          <button onClick={handleOtpSubmit} className="otp-submit-button">Verify OTP</button>
        </div>
      )}
    </div>
  );
}

export default CustomerSignup;
