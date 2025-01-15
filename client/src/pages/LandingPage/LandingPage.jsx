import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/auth/login", { email, password });
      console.log(result);
      if (result.data.token) {
        // Save token to localStorage
        localStorage.setItem('token', result.data.token);
        navigate("/home");
      } else {
        alert("Invalid credentials! Please try again.");
      } 
    } catch (err) {
      console.error(err);
      alert("An error occurred.")
    }
  
  };

  return (
    <div className="login-page">
    {/* Login Form Section */}
    <div className="login-container">
        <div className="login-card">
          <h2>Login to PriceListo</h2>
          <p>Find the best deals across platforms!</p>
          <form className="login-form" onSubmit={HandleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <Link to="/users/signup">Sign Up</Link> </p>
          </div>
        </div>
      </div>


    {/* Brand Info Section */}
    <div className="brand-section">
      <h1>Welcome to <span>PriceListo</span></h1>
      <p>Compare prices across multiple platforms in one place!</p>
      <ul>
        <li>📦 Shopee, Lazada, Tiktok Shop, and more</li>
        <li>🔎 Fast and accurate item searches</li>
        <li>💰 Save money with price comparisons</li>
      </ul>
    </div>
  </div>
  );
};

export default LandingPage;
