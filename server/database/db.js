const { MongoClient, ServerApiVersion } = require('mongodb');

require("dotenv").config();

const db_username = process.env.MONGO_DB_USERNAME 
const db_password = process.env.MONGO_DB_PASSWORD  
const db_uri = `mongodb+srv://${db_username}:${db_password}@backend-service.a40ys.mongodb.net/?retryWrites=true&w=majority&appName=Backend-Service` 

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
    }
    finally {
        await client.close();
    }
    
};
connectDB();
module.exports = connectDB;