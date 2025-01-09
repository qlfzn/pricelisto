import React from 'react';
import './HomePage.css'; // Link to CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">PriceListo</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to PriceListo</h1>
        <p>Find the best deals across your favorite e-commerce platforms.</p>
        <form className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button type="submit">Search</button>
        </form>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose PriceListo?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Price Comparison</h3>
            <p>Quickly compare prices from multiple platforms to save money.</p>
          </div>
          <div className="feature-item">
            <h3>Platform Links</h3>
            <p>Seamlessly navigate to the product pages on e-commerce platforms.</p>
          </div>
          <div className="feature-item">
            <h3>User-Friendly Interface</h3>
            <p>Simple, clean design for effortless browsing.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 PriceListo. All rights reserved.</p>
        <p>
          <a href="#features">Features</a> | 
          <a href="#about"> About</a> | 
          <a href="#contact"> Contact</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
