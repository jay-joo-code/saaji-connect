var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');

// MONGODB
const isProdDb = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'release') && config.DB_PROD;
const URI = isProdDb ? config.DB_PROD : config.DB_DEV;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const dbType = isProdDb ? 'prod' : 'dev';
db.once('open', () => {
  console.log('db connection:', dbType)
});

// PORT
const PORT = process.env.PORT || 8081;
var app = express();
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// MIDDLEWARE
const corsCfg = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials": true
}
app.use(cors(corsCfg));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// FORCE HTTPS ON PROD
app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
});

// AUTH 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const session = require("express-session")
const bodyParser = require("body-parser");

app.use(session({
  secret: "cats",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validatePasswordSync(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// ROUTING
app.use('/api', require('./routes'));

// SERVE FRONTEND ( production || release )
if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname)));
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
else {
  app.use(express.static(path.join(__dirname, 'public')));
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, do not provide error in production
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') !== 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
