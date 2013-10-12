
//	The core Express app
var express = require('express');
var app     = express();

//	Core dependencies
var http = require('http');
var path = require('path');

//	npm dependencies
var flash      = require('connect-flash');
var validator  = require('express-validator');
var hbs        = require('hbs');
var mongoose   = require('mongoose');
var mongostore = require('connect-mongo')(express);

//	Setup site configuration
require('./app/config/bootstrap.js')(app);

//	Enable Gzip compression
app.use(express.compress());

//	Define view engine and layouts
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/views');

//	Use bodyParser to accept file uploads
app.use(express.bodyParser());

//	Setup validation middleware
app.use(validator());

//	Configure cookie parser
app.use(express.cookieParser(app.get('cookie parser token')));

//	Enable HTTP error handler
app.use(express.errorHandler());

//	Configure favicon
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));

//	Turn console logging on
app.use(express.logger('dev'));

//	Enable PUT/DELETE HTTP verbs in routes
app.use(express.methodOverride());

//	Configure session storage
app.use(express.session({
	cookie: {
		maxAge: (60 * 60 * 24 * 28 * 1000) // 28 days in miliseconds
	},
	secret: app.get('express session secret'),
	store: new mongostore({
		db:mongoose.connection.db
	}, function (err) {
		console.log(err || 'connect-mongodb setup ok');
	})
}));

//	Define static assets directory
app.use(express.static(path.join(__dirname, '/public')));

//	Enable CSRF Protection
app.use(express.csrf());

//	Enable connect-flash module
app.use(flash());

//	Enable use of routes
app.use(app.router);

//	Define routes for application
require('./app/init.js')(app);

//	Set server port
app.set('port', process.env.PORT || 3000);

// Create HTTP server
var server = http.createServer(app);

// Listen to port 3000
server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
