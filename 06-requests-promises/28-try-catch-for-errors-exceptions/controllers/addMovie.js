const addMovie = (req, res) => {
  console.log(req.body);

  const { movie_name, info, rating } = req.body;

  // validation

  try {
    // if any error appears in this try block it will be passed down to catch block where we can handle the error
    if (!movie_name) throw 'Movie name is required';
    if (!info) throw 'Info is required';
    if (!rating) throw 'Rating is required';
    if (rating < 0 || rating > 10) throw 'Rating must be between 0-10';
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err,
    });
  }

  // success
  res.status(200).json({
    status: 'success',
    message: 'Movie added successfuly',
  });
};
module.exports = addMovie;
