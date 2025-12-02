const express = require('express');
const router = express.Router();
const {
    getAllCertifications,
} = require('../controller/certifications.controller');

router.get('/', getAllCertifications);
module.exports = router;
