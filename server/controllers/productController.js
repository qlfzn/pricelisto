const axios = require("axios");
const asyncHandler = require("express-async-handler");

// Fetch product data
const searchProducts = asyncHandler(async (req, res) => {
    const searchQuery = req.query.q;

    if (!searchQuery) {
        res.status(400);
        throw new Error("User query is required. Please try again.");
    }

    try {
        const productData = (await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`)).data;

        if (!productData || productData.products.length === 0) {
            res.status(404);
            throw new Error("No product data found!");
        };

        res.json(productData);
    } catch (error) {
        console.error("Error fetching product data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get product details
const getProductDetails = asyncHandler(async (req, res) => {
    // logic to get details here
});

// Compare product price
const comparePrices = asyncHandler(async (req, res) => {
    // compare and sort product based on price
});

module.exports = {
    searchProducts
}

