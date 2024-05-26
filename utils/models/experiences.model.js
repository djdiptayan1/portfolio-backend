// product.models.js
const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define the product schema
const ExperienceSchema = new mongoose.Schema({
    date: {
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            default: "Present",
            required: true
        }
    },
    website: {
        type: String,
        default: null
    },
    logo: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
});

// Create the Product model
const Experience = mongoose.model('experiences', ExperienceSchema);

module.exports = Experience;
