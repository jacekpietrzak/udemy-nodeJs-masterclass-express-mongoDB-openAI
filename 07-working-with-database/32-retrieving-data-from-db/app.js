const express = require('express');
const addMovie = require('./controllers/addMovie');
const getAllMovies = require('./controllers/getAllMovies');
const getSingleMovie = require('./controllers/getSingleMovie');
const getMovieById = require('./controllers/getMovieById');

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

const mongoose = require('mongoose');

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

const app = express();

// accept json files.
app.use(express.json());

// Routes

app.get('/api/movies', getAllMovies);
// app.get('/api/movies/:id', getMovieById);
app.get('/api/movies/:movieName', getSingleMovie);
app.post('/api/movies', addMovie);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
