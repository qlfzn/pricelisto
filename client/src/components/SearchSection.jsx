import React, { useState } from 'react';

function SearchSection({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Search for your product 
        </h1>
        <p className="text-lg text-gray-700 mb-8">
        Compare prices across multiple e-commerce platforms to find the best deal for your product.
        </p>
        <div className="flex items-center justify-center space-x-4">
          {/* Search Input (Like the Image) */}
          <div className="relative flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Type a product..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 text-gray-400 focus:outline-none">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          {/* Filters and Search Buttons (Like the Image) */}
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <svg className="inline-block h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2v2m0 8v2m0-2v2m-2-2h4"></path>
            </svg>
            Filters
          </button>
          <button
            onClick={handleSearch}
            className="bg-[#5171A5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
}

export default SearchSection;
