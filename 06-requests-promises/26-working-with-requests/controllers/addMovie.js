const addMovie = (req, res) => {
  console.log(req.body);

  const { movie_name, info, rating } = req.body;

  res.status(200).json({
    status: 'This is add movie route',
    movie_name,
    info,
    rating,
  });
};
module.exports = addMovie;
