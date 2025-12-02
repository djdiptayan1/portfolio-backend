const mongoose = require("mongoose");

const { Schema } = mongoose;

const CertificateSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    company_link: {
        type: String,
        default: null
    },
    certificate_link: {
        type: String,
        required: true
    }
});

const Certificates = mongoose.model('certificates', CertificateSchema);

module.exports = Certificates;
