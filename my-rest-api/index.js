// Import Express
const express = require("express");
const server = require("express");

// Create an instance of Express
const app = express();
const createServer = server.createServer();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let items = [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
    { id: 3, name: "Item Three" },
];

// GET endpoint to return all items
app.get("/api/items", (req, res) => {
    res.json(items);
});

// GET endpoint to return a single item by id
app.get("/api/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
}); // http://localhost:3000/api/items with GET

// POST endpoint to create a new item
app.post("/api/items", (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT endpoint to update an existing item
app.put("/api/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);

    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
}); // http://localhost:3000/api/items with POST

// DELETE endpoint to remove an item
app.delete("/api/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    items = items.filter(i => i.id !== itemId);

    res.status(204).end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
