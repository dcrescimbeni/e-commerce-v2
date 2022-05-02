require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const volleyball = require('volleyball');
const db = require('./config/db');
const route = require('./routes');
require('./config/auth');
const cors = require('cors');
const { verify } = require('jsonwebtoken');

const app = express();
app.use(cookieParser());

// app.use(cors({ credentials: 'include', origin: true }));
app.use(
  cors({
    origin: [
      `http://localhost:3001`,
      `https://localhost:3001`,
      `http://localhost:3000`,
      `https://localhost:3000`,
      `https://snikers.netlify.app`,
      `https://snikers-ecommerce.herokuapp.com`,
    ],
    credentials: true,
  })
);

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server up`);
    });
  }
});

module.exports = app;
