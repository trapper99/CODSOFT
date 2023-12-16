import express, { Application, Request, Response } from "express";
import mongoose, { Connection } from "mongoose";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const port: number = 3000;
const app: Application = express();
app.use(express.json());
app.use(cors());

const server: http.Server = http.createServer(app);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    console.log("Connected to MongoDB");

}).catch(err => {
    console.log(err);
    server.close();
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}).catch((error) => {
    console.log(error);
});

function onError(error: NodeJS.ErrnoException): void {
    console.log(error);
}

function onListening(): void {
    console.log(`Server listening on port ${port}`);
}