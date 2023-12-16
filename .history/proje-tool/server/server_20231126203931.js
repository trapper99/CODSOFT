const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;

const app = new express();
app.use(express.json());
app.use(cors());



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});