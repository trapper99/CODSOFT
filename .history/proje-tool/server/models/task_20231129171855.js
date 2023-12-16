const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { schemaOptions } = require("./modelOptions");

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    subtasks: [
        {
            title: {
                type: String,
                required: true
            },
            isCompleted: {
                type: Boolean,
                default: false
            }
        }
    ]
}, schemaOptions)

module.