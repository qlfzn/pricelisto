// This router handles product search, product list and user's favourite
const express = require("express");
const router = express.Router();
const { productSearch, searchProducts } = require("../controllers/productController");

// route for product search
router.get("/search", searchProducts);

// route for viewing product list
router.post("/product-list");

// route to view favourite item list
router.post("/favourites");

module.exports = router;