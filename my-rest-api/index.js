const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// GET request

app.get("/msg", (req, res, next) => {
    res.json({ "message": "Hello, World!" });
});

// POST request

app.use(express.json()); // for parsing application/json

app.post("/msg", (req, res, next) => {
    const message = req.body.message;
    res.json({ "receivedMessage": message });
});