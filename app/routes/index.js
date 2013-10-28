
'use strict';

var controllers = require('../controllers');
var helpers = require('../helpers');

module.exports = function (app) {

	//	Catch-all Routes
	app.all('*', [
		helpers.utils.setCacheControl,
		helpers.utils.setLocals
	]);

	//	Generic Routes
	app.get('/', controllers.application.home);
	app.get('/not-authorised', controllers.application.notAuthorised);

	//	Lists
	require('./lists')(app, controllers, helpers);

	//	GET /logout
	app.get('/logout', [
		helpers.authentication.destroySession
	], controllers.application.logout);

	//	Error routes
	app.use(function (err, req, res, next) {
		console.error(err.stack);

		res.send(500, 'Something broke!');
	});

};
