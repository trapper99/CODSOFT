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

async function connectDB() {
    /**
     * Establishes a connection to a MongoDB database.
     * 
     * @async
     * @function connectDB
     * @returns {Promise<void>} - A promise that resolves with no value.
     * @throws {Error} - If an error occurs during the connection process.
     */
    try {
        await client.connect();
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});