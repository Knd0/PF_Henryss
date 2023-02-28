const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js')

const server = express();
server.use(morgan("dev"))

server.use('/', routes)


module.exports = server;
