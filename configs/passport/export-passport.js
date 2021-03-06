const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

require('./serializer'); //serializer initialization always comes before passport's initialization
require('./passport.config');

module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 600000 },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 60 * 60 * 24, // 1 day
      }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
