const mongoose = require("mongoose");
const Schema = mongoose.Schema
const { schemaOptions } = require("./modelOptions");

const boardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
        
    },
    isActive: {
        type: Boolean,
        default: true
    },
    description: {
        type: String
    },
    columns: [
        {
            name: {
                type: String,
                required: true
            },
            tasks: [
                {
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
                }
            ]
        }
    ]

}, schemaOptions)