// Schema for product details
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    platform: {type: String, required: true},
    link: {type: String, required: true},
    imageUrl: {type: String},
    category: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

module.export = mongoose.model("Product", ProductSchema);