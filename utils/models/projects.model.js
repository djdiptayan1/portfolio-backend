const mongoose = require("mongoose");

const { Schema } = mongoose;

const projectSchema = new mongoose.Schema({
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
});

const Projects = mongoose.model("projects", projectSchema);

module.exports = Projects;
