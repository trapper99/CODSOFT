const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = 3000;

const app = new express();
app.use(express.json());
app.use(cors());

mongoose.connect(dotenv.parsed.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection().asPromiae;

db.on("error", (error) => {
    console.log(error);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});