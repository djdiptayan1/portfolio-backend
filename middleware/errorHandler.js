const { ApiError } = require('../utils/ApiError');
const { HTTP_STATUS, MESSAGES } = require('../constants');

/**
 * Global error handler middleware
 * Catches all errors and sends a consistent error response
 */
const errorHandler = (err, req, res, next) => {
    let error = err;

    // Convert non-ApiError errors to ApiError
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
        const message = error.message || MESSAGES.INTERNAL_ERROR;
        error = new ApiError(statusCode, message, error.errors || [], error.stack);
    }

    const isDevelopment = process.env.NODE_ENV === 'development';

    const response = {
        success: false,
        statusCode: error.statusCode,
        message: error.message,
        ...(error.errors && error.errors.length > 0 && { errors: error.errors }),
        ...(isDevelopment && { stack: error.stack }),
    };

    // Log error in development
    if (isDevelopment) {
        console.error('❌ [Error]:', {
            message: error.message,
            statusCode: error.statusCode,
            path: req.path,
            method: req.method,
            stack: error.stack,
        });
    }

    res.status(error.statusCode).json(response);
};

module.exports = errorHandler;
