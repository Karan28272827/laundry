import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function CustomerSignup() {
  const [customer, setCustomer] = useState([])
  useEffect(() =>{
    const getCustomer = async() =>{
      try {
        const res = await axios.get("http://localhost:4001/customer")
        console.log(res.data)
        setCustomer(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getCustomer();
  },[])
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'email') {
      setEmail(value); // Update the email state
      sendEmail(); // Send OTP whenever email is updated
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Signup Data:', formData);
    navigate('/cmain');
  };
  const [email, setEmail] = useState("");

  const baseUrl = "http://localhost:3000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
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


