import express, { json } from "express";
import mongoose, { connect, MongoClient } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const port = 3000;

dotenv.config();

const app = new express();
app.use(json());
app.use(cors());

const client = new MongoClient(process.env.MONGO_URI);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});