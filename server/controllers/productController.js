const axios = require("axios");
const asyncHandler = require("express-async-handler");

// TODO: move pagination steps into a middleware
// Fetch product data
const searchProducts = asyncHandler(async (req, res) => {
    const searchQuery = req.query.q;
    const limit = parseInt(req.query.limit) || 15;
    const skip = parseInt(req.query.page) || 0;

    if (!searchQuery) {
        res.status(400);
        throw new Error("User query is required. Please try again.");
    }

    try {
        const productData = (await axios.get(`https://dummyjson.com/products/search`, {
            params: {
                q: searchQuery,
                limit: limit,
                skip: skip
            }
        })).data;

        if (!productData || productData.products.length === 0) {
            res.status(404);
            throw new Error("No product data found!");
        };

        res.json(productData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product data.", error });
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

