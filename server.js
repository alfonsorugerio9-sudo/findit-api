const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
server.use(jsonServer.defaults());
server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => console.log('API FINDIT lista en puerto ' + port));
