const express = require('express');
const addMovie = require('./controllers/addMovie');

const app = express();

// Routes
// app.get('/movies', (req, res) => {});
app.post('/api/movies', addMovie);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
