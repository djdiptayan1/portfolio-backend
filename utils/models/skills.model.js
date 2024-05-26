const mongoose = require("mongoose");

const { Schema } = mongoose;

const skillsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Skills = mongoose.model("skills", skillsSchema);

module.exports = Skills;
