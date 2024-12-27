const mongoose = require("mongoose");
require("dotenv").config();

const db_uri = process.env.MONGO_DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to database!');
    } catch (e) {
        console.error('Failed to connect to database', e);
        process.exit(1);
    }
};

module.exports = connectDB;