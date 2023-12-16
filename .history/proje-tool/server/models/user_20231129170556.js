const mongoose = require("mongoose");
const { schemaOptions } = required('./modelOptions');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: t
    }
}, schemaOptions)