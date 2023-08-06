const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello from home');
});

app.get('/cars', (req, res) => {
  res.send('hello from cars');
});

app.get('*', (req, res) => {
  res.send('hello from the server');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server connected successfully');
});
