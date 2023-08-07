const { Configuration, OpenAIApi } = require('openai');

const mongoose = require('mongoose');

const movieRecommendation = async (req, res) => {
  const moviesModel = mongoose.model('movies');

  const allMovies = await moviesModel.find();
  // now we want to get all the titles from our DB
  const moviesString = allMovies.map((el) => el.movie_name).join(',');

  const prompt = `I need a movie recommendation based on these movies: ${moviesString}. Provide me with 10 suggestions. Seperate movies with comma`;

  console.log('prompt: ', prompt);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    // console.log(chatCompletion.data.choices[0].message);

    return res.status(200).json({
      status: 'success',
      suggestions: chatCompletion.data.choices[0].message,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: 'Could not get recommendations',
    });
  }
};

module.exports = movieRecommendation;
