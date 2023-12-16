const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv").config();
const port = 3000;
const app = new express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

mongoose.connect(process.dotenv.parsed.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    server.listen(port);
    server.on('error', onerror);
    server.on('listening', onlistening);
    console.log("Connected to MongoDB");

}).catch(err => {
    console.log(err);
    server.close();
});

const db = mongoose.connection();

db.on("error", (error) => {
    console.log(error);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}).catch((error) => {
    console.log(error);
});