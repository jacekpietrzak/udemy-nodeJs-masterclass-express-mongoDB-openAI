const mongoose = require('mongoose');

const getMovieById = async (req, res) => {
  const moviesModel = mongoose.model('movies');

  try {
    const movie = await moviesModel.findById({ _id: req.params.id });
    console.log('Movie by id: ', movie);
    return res.status(200).json({
      status: 'success',
      data: movie,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

module.exports = getMovieById;
