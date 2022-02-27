const express = require('express');
const cons = require('consolidate');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
 
const app = express();

// View engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Enable the body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use the index.js file to serve http requests
app.use('/', index);

// Set the listening port
const PORT = 3000;

// Serve the index.html page when home page is requested
app.get('/', (req,res) => {
    res.render('index.html')
});

// Listen on the defined port and log the port to the console
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
