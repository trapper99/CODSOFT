import express, { json } from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const port = 3000;

dotenv.config();

const app = new express();
app.use(json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tls: true,
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
            console.log("MongoDB connected");
        }).catch((error) => {
            console.log(error);
            process.exit(1);
        });
    })
    .catch((error) => {
        console.log(error);
    });



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});