
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css';

const HomePage = () => {
    // This will make sure only authenticated user can access /home
    useAuth();

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8080/products/search?q=${query}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setSearchResults(data.products);
        } catch (e) {
            console.error("Error fetching search results:", e);
        }
    };

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
                <SearchBar onSearch={handleSearch} />
            </div>

            {/* Results Section */}
            <div className="results-section">
                <h2>Search Results</h2>
                {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                        <div key={product._id} className="result-item">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <a href={product.link}>View on {product.platform}</a>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 PriceListo. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;