require('dotenv').config();
const express = require('express');
const volleyball = require('volleyball');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const route = require('./routes');
const cors = require('cors');
require('./config/auth');

const app = express();

app.use(cors());

app.use(volleyball);
app.use(express.json());

app.use(cookieParser());
app.use(
  session({ secret: 'bootcamp', resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', route);

app.use((err, req, res, next) => {
  let enableConsoleLog = true;

  if (enableConsoleLog) {
    console.log('Error');
    console.log(err);
  }
  res.status(500).send(err.message);
});

db.sync({ force: false }).then(() => {
  if (!module.parent) {
    app.listen(3001, () => {
      console.log(`Server up on port 3001`);
    });
  }
});

module.exports = app;
