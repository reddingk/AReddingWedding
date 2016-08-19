//Send Email from Node
//https://codeforgeek.com/2014/07/send-e-mail-node-js/

// server.js
// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration

// config files
//var db = require('./config/db');

// set ports
var port = process.env.PORT || 305;

// connect to mongoDB database
// mongoose.connect(db.url);

// Beautify routes
app.get('/home', function(req, res) { res.redirect('/#/home'); });
app.get('/ourstory', function(req, res) { res.redirect('/#/ourstory'); });
app.get('/events', function(req, res) { res.redirect('/#/events'); });
app.get('/weddingparty', function(req, res) { res.redirect('/#/weddingparty'); });
app.get('/rsvp', function(req, res) { res.redirect('/#/rsvp'); });
app.get('/registry', function(req, res) { res.redirect('/#/registry'); });
app.get('/gallery', function(req, res) { res.redirect('/#/gallery'); });
app.get('/underconstruction', function(req, res) { res.redirect('/#/underconstruction'); });

// get all data of the body (POST) params
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}) );

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes
// Route for database set up
//require('./app/routes')(app);

// start app
app.listen(port);
// User message
console.log('Application is open on port ' + port);
