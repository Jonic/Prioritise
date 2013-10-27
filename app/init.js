
'use strict';

module.exports = function (app) {

	require('./routes')(app);

	app.use(function (err, req, res, next) {
		console.error(err.stack);

		res.send(500, 'Something broke!');
	});

};
