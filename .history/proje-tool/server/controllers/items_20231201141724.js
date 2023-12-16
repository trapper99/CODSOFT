// Dependencies
const express = require("express");

// Sample data
const items = [
  { id: 1, name: "Item 1", bookmarked: false },
  { id: 2, name: "Item 2", bookmarked: true },
  { id: 3, name: "Item 3", bookmarked: false },
];

// Create Express app
const app = express();

// API endpoint to get the item list
app.get("/items", (req, res) => {
  res.json(items);
});

// API endpoint to toggle the bookmark status of an item
app.put("/items/:id/bookmark", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);
  if (item) {
    item.bookmarked = !item.bookmarked;
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});