const { Configuration, OpenAIApi } = require('openai');

const movieRecommendation = async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const chatCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'give me 3 cat names' }],
  });
  console.log(chatCompletion.data.choices[0].message);

  res.status(200).json({
    status: 'success',
    message: 'Hello from openAi',
    data: chatCompletion.data.choices[0].message,
  });
};

module.exports = movieRecommendation;
