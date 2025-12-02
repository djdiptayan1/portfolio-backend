const express = require('express');
const router = express.Router();
const {
    getAllExperiences,
} = require('../controller/experiences.controller');

router.get('/', getAllExperiences);
module.exports = router;
