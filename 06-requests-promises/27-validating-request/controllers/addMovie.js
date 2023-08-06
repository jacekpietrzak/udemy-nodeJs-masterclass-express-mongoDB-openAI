const addMovie = (req, res) => {
  console.log(req.body);

  const { movie_name, info, rating } = req.body;

  // validation
  if (!movie_name) {
    return res.status(400).json({
      status: 'failed',
      message: 'Movie name is required',
    });
  }
  if (!info) {
    return res.status(400).json({
      status: 'failed',
      message: 'Info is required',
    });
  }
  if (!rating) {
    return res.status(400).json({
      status: 'failed',
      message: 'Rating is required',
    });
  }
  if (rating < 0 || rating > 10) {
    return res.status(400).json({
      status: 'failed',
      message: 'Rating must be between 0-10',
    });
  }

  // success
  res.status(200).json({
    status: 'success',
    message: 'Movie added successfuly',
  });
};
module.exports = addMovie;
