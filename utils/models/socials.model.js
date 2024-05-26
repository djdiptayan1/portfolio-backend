const mongoose = require("mongoose");

const { Schema } = mongoose;
const socialsSchema = new mongoose.Schema({
    logo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Socials = mongoose.model("socials", socialsSchema);

module.exports = Socials;
