const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const hpp = require('hpp');
const routes = require('./src/app')
const bodyParser = require('body-parser');
const http = require('http');

require('dotenv').config();
const app = express();
const server = http.createServer(app);
app.use(cors());
require('dotenv').config();
app.use(hpp());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(logger('dev'));
app.use(express.json({ limit: "5mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const models = require('./src/models');

models.sequelize.sync().then(() => {
  console.log('Nice! Database looks fine');
}).catch((err) => {
  console.log('something went wrong with the database update', err);
});

routes.forEach((route) => {
  app.use(route[0], route[1]);
});

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

server.listen(port, function () {
  console.log("app listening on port " + port);
});
module.exports = app;

