const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello from the server');
});

server.listen(8000, 'localhost', () => {
  console.log('Server Started');
});
