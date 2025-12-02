const cors = require('cors');
const errorHandler = require('./errorHandler');
const notFoundHandler = require('./notFound');

const corsMiddleware = cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
});

module.exports = {
    corsMiddleware,
    errorHandler,
    notFoundHandler,
};
