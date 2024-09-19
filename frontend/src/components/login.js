import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post('http://localhost:4001/user/login', userInfo);
      console.log(res.data);
  
      if (res.data) {
        toast.success('Login Successful');
        localStorage.setItem('Customer', JSON.stringify(res.data.customer));
        localStorage.setItem("Users", JSON.stringify(res.data));
        navigate('/'); // Navigate to home page or dashboard after login
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          toast.error('Error: Invalid email or password. Please try again.');
        } else {
          toast.error('Error: ' + err.response.data.message);
        }
      } else {
        toast.error('Error: Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;