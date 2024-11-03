// REST API demo in Node.js
const express = require("express"); // require the express framework
const app = express();
const fs = require("fs"); // require file system module
const path = require("path"); // require path module for handling file paths

const usersEndpoint = "/getUsers";

// Endpoint to get a list of users
app.get(usersEndpoint, function (req, res) {
    const filePath = path.join(__dirname, "users.json");
    
    fs.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            console.error("Error reading users.json:", err);
            res.status(500).send("Error reading users data.");
            return;
        }
        
        console.log("Data fetched from users.json:", data);
        res.send(data); // send data as response
    });
});

// Create a server to listen at port 8080
const server = app.listen(8080, function () {
    const port = server.address().port;
    console.log(`REST API demo app listening at http://localhost:${port}${usersEndpoint}`);
});
