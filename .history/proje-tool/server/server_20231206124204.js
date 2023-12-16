const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv").config();
const port = 3000;

dotenv.config();

const app = new express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}).catch((error) => {
    console.log(error);
});