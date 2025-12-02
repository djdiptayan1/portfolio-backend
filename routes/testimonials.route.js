const express = require('express');
const router = express.Router();
const {
    getAllTestimonials,
} = require('../controller/testimonials.controller');

router.get('/', getAllTestimonials);
module.exports = router;
