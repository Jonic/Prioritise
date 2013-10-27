
'use strict';

module.exports = function (app) {

	//	Get environment variables
	require('./environments/all.js')(app);
	require('./environments/' + app.get('env') + '.js')(app);

};
