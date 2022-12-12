// handle 404 errors
exports.notFound = (req, res, next) => {
  const error = new Error(`Route Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// custom error handler to return json instead of HTML when any error is thrown
exports.errorHandler = (err, req, res, next) => {
  // check the status code of the response
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
