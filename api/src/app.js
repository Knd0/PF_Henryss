const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { application } = require('express');

const server = express();
server.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads/'
}))
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan("dev"))
server.use(cors());



server.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      "*"
    ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

server.use('/', routes)


module.exports = server;
