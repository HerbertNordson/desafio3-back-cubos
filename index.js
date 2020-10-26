const Koa = require('koa');
const Cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
const server = new Koa();
const router = require('./src/routes');
const Logger = require('./src/middlewares/logger');


server.use(bodyparser());
server.use(Cors());
server.use(Logger);

server.use(router.routes());
server.listen(8081, () => console.log('Rodando '));
