const movieRecommendation = async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from openAi',
  });
};

module.exports = movieRecommendation;
