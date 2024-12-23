const express = require("express");
const PORT = 8080;
const path = require("path");
const axios = require("axios");
const connectDB = require("./database/db")

// 'app' is a server created using Express library
const app = express();
app.use(express.json())

/* make a request using get method -> this is using Promise
axios.get("https://meowfacts.herokuapp.com/?id=2")
    .then(function (response) {
        const data = response.data 
        console.log(data)
    })
    .catch(function (error) {
        console.log(error)
    })
*/
let fetchedData;

async function getFacts() {
    try {
       const data = (await axios.get("https://meowfacts.herokuapp.com/")).data
       fetchedData = data;
    } catch (error) {
       console.log(error); 
    }
}
// getFacts();

connectDB();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is alive at http://localhost:${PORT}`)
})
