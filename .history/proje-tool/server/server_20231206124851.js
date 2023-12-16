const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = 3000;

dotenv.config();

const app = new express();
app.use(express.json());
app.use(cors());

const db = mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        }).catch((error) => {
            console.log(error);
        });
    })
    .catch((error) => {
        console.log(error);
    });

db.then(() => {
    console.log("MongoDB connected");
}).catch((error) => {
    console.log(error);
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}).catch((error) => {
    console.log(error);
});