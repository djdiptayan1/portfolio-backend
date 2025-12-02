const express = require('express');
const router = express.Router();

// Import all route modules
const experienceRoutes = require('./experience.route');
const projectRoutes = require('./project.route');
const skillsRoutes = require('./skills.route');
const socialsRoutes = require('./socials.route');
const testimonialsRoutes = require('./testimonials.route');
const certificationsRoutes = require('./certifications.route');

// Health check route
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is running',
        timestamp: new Date().toISOString(),
    });
});

// Mount route modules
router.use('/experiences', experienceRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillsRoutes);
router.use('/socials', socialsRoutes);
router.use('/testimonials', testimonialsRoutes);
router.use('/certifications', certificationsRoutes);

module.exports = router;
