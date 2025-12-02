const express = require('express');
const router = express.Router();
const {
    getAllSocials,
} = require('../controller/socials.controller');

router.get('/', getAllSocials);
module.exports = router;
