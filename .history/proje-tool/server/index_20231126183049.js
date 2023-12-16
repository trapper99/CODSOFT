import express = require("express");
import mongoose = 
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    console.log("Server started on port 3001");
});