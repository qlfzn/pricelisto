// Schema for user details
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    user: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}

});

module.exports = mongoose.model("User", UserSchema);