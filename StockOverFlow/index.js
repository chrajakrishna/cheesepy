/**
 * http://usejsdoc.org/
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var _ = require('lodash');



var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Load Models

app.models = require('./models/index');

// Routes

var routes = require('./routes/routes');
_.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
});


// CORS Support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// connect to mongo db
mongoose.connect('mongodb://cheesepydev:' + encodeURIComponent('dev@123') + '@ds141082.mlab.com:41082/cheesepy');

//on connection
mongoose.connection.on('connected', () => {
    console.log("Connected to Mongo DB @ 27017");
});

//on error
mongoose.connection.on('error', (err) => {
    console.log("Error in Database connection:" + err);
});

// Added comments to test branch
//app.use('/api', route);

const port = 3000;
app.listen(port, () => {
    console.log("Server started on port: " + port);
});

app.use('/hello', function(req, res, next) {
    res.send('Hello World!!');
    next();
});