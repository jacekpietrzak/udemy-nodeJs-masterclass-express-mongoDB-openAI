const express = require('express');
const mongoose = require('mongoose');
const addMovie = require('./controllers/addMovie');
const getAllMovies = require('./controllers/getAllMovies');
const getMovieById = require('./controllers/getMovieById');
const editMovie = require('./controllers/editMovie');
const deleteMovie = require('./controllers/deleteMovie');

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

const app = express();

// accept json files.
app.use(express.json());

// Routes

app.get('/api/movies', getAllMovies);
app.get('/api/movies/:id', getMovieById);
app.post('/api/movies', addMovie);
app.patch('/api/movies', editMovie);
app.delete('/api/movies/:id', deleteMovie);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
