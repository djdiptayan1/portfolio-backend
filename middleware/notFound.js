const { HTTP_STATUS } = require('../constants');

/**
 * 404 Not Found handler
 */
const notFoundHandler = (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
};

module.exports = notFoundHandler;
