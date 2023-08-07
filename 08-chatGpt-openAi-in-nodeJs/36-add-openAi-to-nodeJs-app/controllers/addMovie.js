const mongoose = require('mongoose');

const addMovie = async (req, res) => {
  console.log('payload: ', req.body);

  const moviesModel = mongoose.model('movies');

  const { movie_name, info, rating, description } = req.body;

  // validation

  try {
    // if any error appears in this try block it will be passed down to catch block where we can handle the error
    // if (!movie_name) throw 'Movie name is required';
    if (!info) throw 'Info is required';
    if (!rating) throw 'Rating is required';
    if (rating < 0 || rating > 10) throw 'Rating must be between 0-10';
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }

  // success

  try {
    const createdMovie = await moviesModel.create({
      movie_name,
      info,
      rating,
      description,
    });
    console.log('created movie: ', createdMovie);
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      // message: 'Movie creation failed. Something went wrong.',
      message: err.message,
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Movie added successfuly',
  });
};
module.exports = addMovie;
