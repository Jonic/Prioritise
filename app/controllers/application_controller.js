
'use strict';

var helpers = require('../helpers');

// GET: /
exports.home = function (req, res) {

	res.render('application/home', {
		page: {
			title: 'Home'
		}
	});

};

// GET: /not-authorised
exports.notAuthorised = function (req, res) {

	res.render('application/notAuthorised', {
		page: {
			title: 'You are not authorised for that!'
		}
	});

};
