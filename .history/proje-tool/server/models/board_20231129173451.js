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
        required: true,
        default: 'Untitled'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    isTemplate: {
        type: Boolean,
        default: false
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