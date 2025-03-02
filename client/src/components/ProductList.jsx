import React from 'react';

function ProductIsExist ({products}) {
  if (!products || products.length === 0) {
    return (
      <div className='text-center py-8 mt-20'>
        <h2 className="text-xl font-semibold">Start your search!</h2>
        <p className="text-gray-600">Type a product name and find the best deals.</p>
      </div>
    );
  } 
  
  return (
    <div className="grid grid-cols-1 gap-4"> 
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
  )
}

function ProductList({ products, isLoading }) {
  return (
    <div className="container mx-auto py-8 flex">

      {/* Product Section (Left Side) */}
      <div className="w-3/4 pr-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {isLoading ? "Searching..." : `${products.length} products found`}
        </h2>
        {isLoading ? (
          <div className='grid grid-cols-3 gap-4'>
            {Array.from({length: 6}).map((_, index) => (
              <div key={index} className='animate-pulse bg-gray-200 rounded-md h-48 w-full'></div>
            ))}
          </div>
        ) : (
          <ProductIsExist products={products} />
        )}
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
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col bg-gray-100 w-full rounded-md">
              <p className='p-2 font-bold'>
                mkx keyboard
              </p>
              <p className='p-2'>
                iphone 16
              </p>
              <p className='p-2'>
                bluetooth mouse
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
