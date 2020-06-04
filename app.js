require('dotenv').config();

// const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
// const hbs          = require('hbs');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

//DB config
require('./configs/db.config');

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
require('./configs/passport/export-passport')(app);
// Express View engine setup

// app.use(require('node-sass-middleware')({
//   src:  path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   sourceMap: true
// }));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(
  cors({
    origin: process.env.FRONTEND_POINT,
    credentials: true,
  })
);

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
app.use('/', index);
app.use('/api/v1', require('./routes/auth/auth-routes'));
app.use('/api/v1', require('./routes/posts/posts-routes'));
app.use('/api/v1', require('./routes/projects/project-routes'));

module.exports = app;
