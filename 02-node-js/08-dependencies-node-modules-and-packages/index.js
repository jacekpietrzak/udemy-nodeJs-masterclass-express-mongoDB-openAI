const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url); // request url

  // response according to the request based on the url
  // but as the backend grows this can be hard to maintain.
  if (req.url === '/') {
    res.end('Hello from Home');
  } else if (req.url === '/cars') {
    res.end('hello from cars');
  } else {
    res.end('hello from the server');
  }
});

server.listen(8000, 'localhost', () => {
  console.log('Server Started');
});
