require('express-async-errors');

const express = require('express');
const mongoose = require('mongoose');
const addMovie = require('./controllers/addMovie');
const getAllMovies = require('./controllers/getAllMovies');
const getMovieById = require('./controllers/getMovieById');
const editMovie = require('./controllers/editMovie');
const deleteMovie = require('./controllers/deleteMovie');
const movieRecommendation = require('./controllers/movieRecommendation');
const errorHandler = require('./handlers/errorHandler');

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

// Connection to mongodb
mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log('Connection to mongoDB successful');
  })
  .catch(() => {
    console.log('Connection to mongoDB failed');
  });

// models
require('./models/movies.model');

// initializing express app
const app = express();

// accept json files.
app.use(express.json());

// Routes

app.get('/api/movies', getAllMovies);
app.get('/api/movies/:id', getMovieById);
app.post('/api/movies', addMovie);
app.patch('/api/movies', editMovie);
app.delete('/api/movies/:id', deleteMovie);

// open Ai suggestion
// app.get('/api/movies/getRecommendation', movieRecommendation); // there will be a problem with this route becouse if we will send a request it will be confused with an id. Same path. Node js is confused with get movie by id route. We need to change this route.
app.get('/api/movies/openai/getRecommendation', movieRecommendation); // we will just add openai to our address to make it unique. Node js see that we have to parameter instead of two. So it is different than with dynamic id.

// using errorHandler
app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
