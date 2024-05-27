const mongoose = require("mongoose");

const { Schema } = mongoose;
const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    testimonial: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    }
});

const Testimonial = mongoose.model("testimonials", testimonialSchema);

module.exports = Testimonial;
