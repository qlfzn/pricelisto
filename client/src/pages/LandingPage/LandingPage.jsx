import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Initialise related user data
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const navigate = useNavigate;

// Handle submitted user data
const HandleSubmit = (e) => {
  e.preventDefault()
  axios.post("http://localhost/8080/login/", {email, password})
  .then(result => {
    console.log(result);
    if (result.data=="Success") {
      navigate("/home");
    } else {
      navigate("/");
      alert("Invalid credentials! Please try again.")
    }
  })
  .catch(err => console.log(err)) 
} 

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Left Section: Login/Sign-Up Form */}
      <div className="auth-section">
        <h2>Welcome to PriceListo</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>

      {/* Right Section: Website Introduction */}
      <div className="intro-section">
        <h1>Find the Best Deals with PriceListo</h1>
        <p>
          PriceListo helps you find the best deals across your favorite e-commerce platforms.  
          Quickly compare prices and make smarter purchasing decisions.
        </p>
        <ul>
          <li>Compare prices across platforms</li>
          <li>Access product links quickly</li>
          <li>Enjoy a user-friendly experience</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
