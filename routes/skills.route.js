const express = require('express');
const router = express.Router();
const {
    getAllSkills,
} = require('../controller/skills.controller');

router.get('/', getAllSkills);
module.exports = router;
