const mongoose = require("mongoose");

const { Schema } = mongoose;

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies:
    {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    project_demo: {
        type: String
    },
    source_code_link: {
        type: String
    }
});

const Projects = mongoose.model("projects", projectSchema);

module.exports = Projects;
