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
}, {
    timestamps: true
});

// Indexes for better query performance
CertificateSchema.index({ date: -1 });
CertificateSchema.index({ title: 1 });

const Certificates = mongoose.model('certificates', CertificateSchema);

module.exports = Certificates;
