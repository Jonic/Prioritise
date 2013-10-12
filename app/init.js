
'use strict';

module.exports = function (app) {

	var controllers = require('./controllers');
	var helpers = require('./helpers');

	require('./routes')(app, controllers, helpers);

};
