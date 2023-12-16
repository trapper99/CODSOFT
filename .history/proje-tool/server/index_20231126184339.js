const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3002;

const app = new express();
app.use(express.json());
app.use(cors());

app.listen(30, () => {
    console.log("Server started on port 3002");
});