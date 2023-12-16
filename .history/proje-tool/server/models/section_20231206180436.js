const Schema = mongoose.Schema
const { schemaOptions } = require('./modelOptions');
const mongoose = require('mongoose')

const sectionSchema = new Schema({
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
}, schemaOptions)