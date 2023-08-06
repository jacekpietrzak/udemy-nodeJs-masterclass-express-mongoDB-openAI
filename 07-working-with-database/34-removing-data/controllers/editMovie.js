const mongoose = require('mongoose');

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model('movies');

  const { movie_id, movie_name, info, rating, description } = req.body;

  try {
    if (!movie_id) throw 'Movie id is required!';
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }

  try {
    await moviesModel.updateOne(
      { _id: movie_id },
      { movie_name, rating, info, description },
      { runValidators: true }
    );

    return res.status(200).json({
      status: 'success',
      message: 'Movie updated successfully',
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

module.exports = editMovie;
