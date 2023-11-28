module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Error";
  err.message = err.message || "Something Went Wrong,Please Try Again Later";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};