import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
const port = 3000;

const app = new express();
app.use(json());
app.use(cors());

connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
            console.log("MongoDB connected");
        }).catch((error) => {
            console.log(error);
        });
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}).catch((error) => {
    console.log(error);
});