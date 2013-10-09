
module.exports = function (app) {

	//	Get secret tokens
	require('./tokens.js')(app);

	//	Get environment variables
	require('./environments/all.js')(app);
	require('./environments/' + app.get('env') + '.js')(app);

	//	Create database connection
	require('./database.js')(app);

};
