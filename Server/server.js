// require libraries
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
//const mongoose = require('mongoose')
// require controllers
const entryController = require('./controllers/entryController');
const authController = require('./controllers/authController');
// require router
const entryRouter = require('./routes/entryRouter');

// set constants
const PORT = 3333;

// create HTTP request handler by calling express() and saving result in variable named app
const app = express();
// parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// serve static assets
app.use(express.static(path.resolve(__dirname, '../assets')));
// serve the index.html file from the views folder at the root 
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../views/index.html' ));
});

app.post('/signin', authController.verifyUser, (req,res) => {
  res.redirect('/tracker');
});


// serve tracker.html file from the views folder to /blog
app.get('/tracker', authController.checkCookie, (req, res) => {
  if (res.locals.isValid) {
    return res.status(200).sendFile(path.resolve(__dirname, '../views/tracker.html' ));
  } else {
    return res.status(401).send('You must be signed in to view this page');
  }
});

// route handler for entries
app.use('/entries', entryRouter);

// TODO: add a route handler that is a catchall for invalid routes (404 error handler)
app.use('/*', (req, res) => res.sendStatus(404));

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