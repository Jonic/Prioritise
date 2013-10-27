
'use strict';

var controllers = require('../controllers');
var helpers = require('../helpers');

module.exports = function (app) {

	//	Catch-all Routes
	app.all('*', [
		helpers.utils.setLocals
	]);

	//	Generic Routes
	app.get('/', controllers.application.home);

	app.get('/not-authorised', controllers.application.notAuthorised);

	//	Lists
	require('./lists')(app, controllers, helpers);

};
