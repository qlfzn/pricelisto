const { MongoClient, ServerApiVersion } = require('mongodb');

require("dotenv").config();

const db_uri = process.env.MONGO_DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(db_uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectDB = async () => {
    try{
        await client.connect();
        console.log("Successfully connected to database!")
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
    finally {
        await client.close();
    }
    
};

module.exports = connectDB;