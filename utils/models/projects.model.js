const mongoose = require("mongoose");

const { Schema } = mongoose;

const projectSchema = new mongoose.Schema({
    priority: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github: {
        type: String
    },
    website: {
        type: String
    },
    logo: {
        type: String
    },
    coverImage: {
        type: String
    },
    color: {
        type: String,
        required: true
    },
    feature: {
        type: Boolean,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    technologies: {
        type: [String],
        required: true
    },
    motivation: {
        type: String,
        required: true
    },
    images: {
        type: [String]
    }
}, {
    timestamps: true
});

// Indexes for better query performance
projectSchema.index({ slug: 1 });
projectSchema.index({ type: 1 });
projectSchema.index({ feature: 1 });
projectSchema.index({ priority: 1 });
projectSchema.index({ type: 1, feature: 1 });

const Projects = mongoose.model("projects", projectSchema);

module.exports = Projects;
