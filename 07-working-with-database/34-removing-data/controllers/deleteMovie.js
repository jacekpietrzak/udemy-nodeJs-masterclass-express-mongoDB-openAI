const mongoose = require('mongoose');

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model('movies');
  const id = req.params.id;
  const getMovie = await moviesModel.findOne({ _id: id });

  try {
    if (!getMovie) throw 'Movie with this id doesnt exist';
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err,
    });
  }

  try {
    await moviesModel.deleteOne({ _id: id });

    return res.status(200).json({
      status: 'success',
      message: 'Movie deleted successfully',
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

module.exports = deleteMovie;
