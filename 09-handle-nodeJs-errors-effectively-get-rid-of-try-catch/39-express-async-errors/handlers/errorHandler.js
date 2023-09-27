const errorHandler = (error, req, res, next) => {
  // (error, req, res, next) these are 4 parameters that express will deliver to our handler.

  if (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Something went wrong!',
    });
  } else {
    next(); // this is allowing our app to move forward.
  }
};

module.exports = errorHandler;
