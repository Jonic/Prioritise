
module.exports = function (app) {

	var connectionString = app.get('database connection string');
	var mongoose = require('mongoose');

	mongoose.connect('mongodb://' + connectionString);

	var database = mongoose.connection;

	database.on('error', console.error.bind(console, 'connection error:'));

	database.once('open', function () {
		console.log('Connected to database at', connectionString);
	});

};
