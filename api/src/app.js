const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js')
const  cors = require("cors");

const server = express();
server.use(morgan("dev"))
server.use(cors());

server.use('/', routes)


module.exports = server;
