const mongoose = require("mongoose");

const { Schema } = mongoose;

const socialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    Icon: {
        type: String,
        required: true
    }
});

const Socials = mongoose.model("Socials", socialsSchema);

module.exports = Socials;
