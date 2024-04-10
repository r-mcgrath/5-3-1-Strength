// require libraries
const express = require('express');
const path = require('path');
//const mongoose = require('mongoose')
// require controllers
//mongoose.connect('mongodb://127.0.0.1:27017/test', console.log('connected to DB'))

// require router

// set constants
const PORT = 3333;

// create HTTP request handler by calling express() and saving result in variable named app
const app = express();
// parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets

// serve the index.html file from the views folder at the root 


// serve blog.html file from the views folder to /blog

// route handler for entries

// TODO: add a route handler that is a catchall for invalid routes (404 error handler)

// global error handler
app.use((err, req, res, next) => {
    const defaultError = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultError, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

// start server and listen on assigned port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });