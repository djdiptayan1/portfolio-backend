const express = require('express');
const router = express.Router();
const {
    getAllProjects,
    getFeaturedProjects,
} = require('../controller/projects.controller');

router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);

module.exports = router;
