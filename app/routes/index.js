
'use strict';

module.exports = function (app, controllers, helpers) {

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
