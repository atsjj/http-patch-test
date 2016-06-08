'use strict';

const restify = require('restify');
const server  = restify.createServer();

server.patch('/', (request, response, next) => {
  response.send('it works');
  next();
});

server.listen(8080, () => {
  console.log(`${server.name} listening at ${server.url}`);
});

