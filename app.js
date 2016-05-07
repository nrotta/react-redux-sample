'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080
});

server.register([require('vision'), require('inert')], err => {
  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'templates'
  });
});

server.route([{
  method: 'GET',
  path:'/',
  handler: (request, reply) => {
    reply.view('index');
  }
}, {
  path: '/{param*}',
  method: 'GET',
  handler: {
    directory: {
      path: 'public'
    }
  }
}]);

server.start(err => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
