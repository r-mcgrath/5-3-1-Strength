// require libraries
const express = require('express');
const path = require('path');
// require controllers


// require router

// set constants
const PORT = 3333;

// create HTTP request handler by calling express() and saving result in variable named app
const app = express();
// parse requests

// serve static assets

// serve the index.html file from the views folder at the root 


// serve blog.html file from the views folder to /blog

// route handler for entries

// TODO: add a route handler that is a catchall for invalid routes (404 error handler)

// global error handler

// start server and listen on assigned port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });