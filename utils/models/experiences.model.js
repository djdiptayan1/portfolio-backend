const mongoose = require("mongoose");

const { Schema } = mongoose;

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
}, {
    timestamps: true
});

// Indexes for better query performance
ExperienceSchema.index({ 'date.start': -1 });
ExperienceSchema.index({ company: 1 });

const Experience = mongoose.model('experiences', ExperienceSchema);

module.exports = Experience;
