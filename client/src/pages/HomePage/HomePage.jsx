import React from 'react';
import './HomePage.css'; // Link to CSS file for styling
import useAuth from '../../../hooks/useAuth';

const LandingPage = () => {
    // This will make sure only authenticated user can access /home
    useAuth();

  return (
    <div className="homepage-container">
    {/* Navbar */}
    <nav className="navbar">
        <div className="logo">PriceListo</div>
        <ul className="nav-links">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/favorites">Favorites</a></li>
            <li><a href="/logout">Logout</a></li>
        </ul>
    </nav>

    {/* Hero Section */}
    <section className="hero-section">
        <div className="hero-text">
            <h1>Compare Prices Instantly</h1>
            <p>Find the best deals from your favorite e-commerce platforms in one place.</p>
        </div>
        <div className="hero-image">
            <img src="/assets/shopping-illustration.png" alt="Shopping Illustration" />
        </div>
    </section>

    {/* Search Section */}
    <div className="search-section">
        <h2>Search for Products</h2>
        <form className="search-form">
            <input type="text" placeholder="Enter the item you are looking for" required />
            <button type="submit">Search</button>
        </form>
    </div>

    {/* Results Section */}
    <div className="results-section">
        <h2>Search Results</h2>
        <div className="result-item">
            <img src="/assets/item1.jpg" alt="Item 1" />
            <h3>Wireless Headphones</h3>
            <p>$49.99</p>
            <a href="#">View on Shopee</a>
        </div>
        <div className="result-item">
            <img src="/assets/item2.jpg" alt="Item 2" />
            <h3>Smartphone Stand</h3>
            <p>$15.99</p>
            <a href="#">View on Lazada</a>
        </div>
        <div className="result-item">
            <img src="/assets/item3.jpg" alt="Item 3" />
            <h3>Portable Charger</h3>
            <p>$29.99</p>
            <a href="#">View on TikTok Shop</a>
        </div>
    </div>

    {/* Footer */}
    <footer className="footer">
        <p>&copy; 2025 PriceListo. All rights reserved.</p>
    </footer>
</div>
  );
};

export default LandingPage;
