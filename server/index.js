const express = require("express");
const PORT = 8080;
const path = require("path");

const userRoute = require("./routes/userRoutes");

const app = express();
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome to the Pricelisto API');
});

app.use("/user", userRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is alive at http://localhost:${PORT}`)
});
