const express = require('express');
const addMovie = require('./controllers/addMovie');

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

require('./models/movies.model');

const app = express();

// Routes
// app.get('/movies', (req, res) => {});
app.post('/api/movies', addMovie);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
