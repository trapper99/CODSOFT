const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;

const app = new express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://stanleykariuki1999:kirigo99@cluster0.i8jwgxg.mongodb.net/");

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});