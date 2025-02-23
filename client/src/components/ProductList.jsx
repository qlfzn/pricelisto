import React from 'react';

function ProductList({ products }) {
  return (
    <div className="container mx-auto py-8 flex">

      {/* Product Section (Left Side) */}
      <div className="w-3/4 pr-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {products.length} Products found
        </h2>
        <div className="grid grid-cols-1 gap-4"> {/* Simplified Grid */}
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-md shadow-md flex items-center p-4"> {/* Flex Alignment */}
              <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover rounded-md mr-4" />  {/* Smaller Image */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600">{product.brand}</p>
                <p className="text-gray-600">{product.link}</p>
                <p className="text-gray-700 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-1/4 pl-4">
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Subscribe for price alerts</h3>
          <p className="text-gray-600 text-sm mb-4">Get notified when prices drop for your favourite products</p>
          <input type="email" placeholder="Enter email" className="w-full pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
          <button className="bg-[#FE9000] hover:bg-[#FFD447] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full">Subscribe</button>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Related careers</h3>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">UI Designer <span className="ml-1 text-gray-500">24</span></button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">UX Researcher <span className="ml-1 text-gray-500">56</span></button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">Graphic Designer <span className="ml-1 text-gray-500">109</span></button>
             <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">Web Designer <span className="ml-1 text-gray-500">145</span></button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">Product Designer <span className="ml-1 text-gray-500">78</span></button>
               <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded">Webflow Designer <span className="ml-1 text-gray-500">45</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
