const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const { corsMiddleware, errorHandler, notFoundHandler } = require('./middleware');
const apiRoutes = require('./routes');

const app = express();

// Security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(compression());

app.use(corsMiddleware);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/media', express.static('media'));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Portfolio Backend API',
        version: '2.0.0',
        endpoints: {
            api: '/api'
        }
    });
});

app.use('/api', apiRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
