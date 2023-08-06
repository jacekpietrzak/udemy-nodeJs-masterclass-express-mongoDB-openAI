const mongoose = require('mongoose');

const getSingleMovie = async (req, res) => {
  console.log('body: ', req.params);

  const moviesModel = mongoose.model('movies');
  try {
    const singleMovie = await moviesModel.findOne({
      movie_name: req.params.movieName,
    });
    res.status(200).json({
      status: 'success from single movie',
      data: singleMovie,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

module.exports = getSingleMovie;
