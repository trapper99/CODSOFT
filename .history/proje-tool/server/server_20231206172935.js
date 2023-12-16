import express, { json } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

const port = 3000;

dotenv.config();

const app = new express();
app.use(json());
app.use(cors());
app.use('/proje-tool/server/routes', )

const client = new MongoClient(process.env.MONGO_URL);

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
        await client.connect({
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});