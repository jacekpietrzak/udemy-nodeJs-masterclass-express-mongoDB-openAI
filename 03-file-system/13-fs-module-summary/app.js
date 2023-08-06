const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  // we will read a file here
  fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) {
      res.send('There was an error accessing the file.');
    }
    res.send(data);
  });
});

app.get('/write', (req, res) => {
  fs.appendFile('./data.txt', '\nmango', (err) => {
    if (err) {
      res.send('Error writing to file.');
    }
    res.send('Data written successfully');
  });
});

app.get('*', (req, res) => {
  res.send('hello from the server!');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server connected successfully');
});
