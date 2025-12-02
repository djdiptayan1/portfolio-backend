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
}, {
    timestamps: true
});

// Indexes for better query performance
skillsSchema.index({ name: 1 });

const Skills = mongoose.model("skills", skillsSchema);

module.exports = Skills;
