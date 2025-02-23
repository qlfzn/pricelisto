import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold text-gray-800">PriceListo</a>
        <div className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="/" className="text-gray-600 hover:text-gray-800">Help</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
