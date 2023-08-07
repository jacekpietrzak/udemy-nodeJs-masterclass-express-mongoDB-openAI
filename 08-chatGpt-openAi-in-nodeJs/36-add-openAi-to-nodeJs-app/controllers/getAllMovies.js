const mongoose = require('mongoose');

const getAllMovies = async (req, res) => {
  const moviesModel = mongoose.model('movies');

  try {
    const allMoviesData = await moviesModel.find();
    console.log(allMoviesData);
    return res.status(200).json({
      status: 'success',
      data: allMoviesData,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

module.exports = getAllMovies;
