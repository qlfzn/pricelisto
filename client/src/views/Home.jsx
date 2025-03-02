import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
import ProductList from '../components/ProductList';

function App() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null); // State for error messages
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchProducts = async (product) => {
      if (!product) return;

      setIsLoading(true);

      const url = `http://localhost:8080/product/search?q=${product}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products); 
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error(error.message);
        setError('Failed to fetch products. Please try again.'); // Set error message
        setProducts([]); // Clear products on error
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleSearch = (term) => {
      fetchProducts(term);
    };
  
    return (
      <div className="bg-gray-50 font-sans antialiased">
        <Navbar />
        <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
        {error && <div className="text-red-500 p-4">{error}</div>} {/* Display error message */}
        <ProductList products={products} isLoading={isLoading} />
      </div>
    );
  }
  
  export default App;
