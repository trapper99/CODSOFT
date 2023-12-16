const mongoose = require("mongoose");
const Schema = mongoose.Schema
const { schemaOptions } = require("./modelOptions");

const boardSchema = new Schema({
    name: {
        type: String,
        required: true
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