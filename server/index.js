const express = require("express");
const PORT = 8080;
const cors = require("cors");
const path = require("path");
const connectDB = require("./database/db");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const auth = require("./middlewares/auth");

const app = express();
app.use(cors());
app.use(express.json())

app.use("/auth", userRoute);
app.use("/products", productRoute);

app.get("/", (req, res) => {
    res.send("This is Pricelisto.")
})
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get("/free-endpoint", (req, res) => {
    res.json({
        message: "Free to access.",
    })
})

app.get("/auth-endpoint", auth, (req, res) => {
    res.json({
        message: "Authorised to access.",
    })
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is alive at http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to the database", err);
});