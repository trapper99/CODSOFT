const mongoose = require("mongoose");
const { schemaOptions } = required('./modelOptions');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require
    }
}, schemaOptions)