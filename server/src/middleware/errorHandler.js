'use strict';

function errorHandler(err, _req, res, _next) {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    console.error('[ErrorHandler]', err);
  } else {
    console.error('[ErrorHandler]', err.message);
  }

  if (err.code === 'ECONNREFUSED' || err.code === 'PROTOCOL_CONNECTION_LOST') {
    return res.status(503).json({
      error: 'Service Unavailable',
      message: 'Database connection failed. Please try again later.',
    });
  }

  if (err.sqlMessage) {
    return res.status(500).json({
      error: 'Database Error',
      message: isDev ? err.sqlMessage : 'An internal database error occurred.',
    });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: err.name || 'Error',
      message: err.message,
    });
  }

  return res.status(500).json({
    error: 'Internal Server Error',
    message: isDev ? err.message : 'An unexpected error occurred.',
  });
}

module.exports = errorHandler;
