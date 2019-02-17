const express = require('express');
const cors = require('cors');
const app = express();
const addEvent = require('./routes/newEvent');
const allEvents = require('./routes/allEvents');

app.use(cors());
app.use(express.json());
app.use('/', addEvent);
app.use('/', allEvents);

/** 404 handler */

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;

  // pass the error to the next piece of middleware - if we have any
  return next(err);
});

/** general error handler */

// you only get here if you call next(WITH-AN-ERROR)

app.use((err, req, res) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
