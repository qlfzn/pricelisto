import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
import ProductList from '../components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Replace with actual API call later
    const mockProducts = [
      { id: 1, name: 'Product Design Lead', price: '$190-210K', company: 'Github', location: 'Australia', image: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Product Designer', price: '$180-200K', company: 'Google', location: 'United States', image: 'https://via.placeholder.com/50' },
      { id: 3, name: 'Product Design Manager', price: '$120-140K', company: 'Evernote', location: 'Australia', image: 'https://via.placeholder.com/50' },
      { id: 4, name: 'Design Head', price: '$250-320K', company: 'Figma', location: 'United States', image: 'https://via.placeholder.com/50' },
      // Add more mock data here
    ];

    // Filter mock products to match searchTerm
    const filteredProducts = mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(filteredProducts);
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="bg-gray-50 font-sans antialiased"> {/* Background color */}
      <Navbar />
      <SearchSection onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
