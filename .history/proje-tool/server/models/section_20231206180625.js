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
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    isTemplate: {
        type: Boolean,
        default: false
    },
    isPinned: {
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
},schemaOptions);