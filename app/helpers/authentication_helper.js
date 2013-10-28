
'use strict';

exports.ensureAuthenticated = function (req, res, next) {

	var id = req.list._id;

	if (!req.session[id]) {
		return res.redirect('/lists/' + id + '/login');
	}

	next();

};

exports.ensureAdmin = function (req, res, next) {

	var id = req.list._id;

	if (!req.session[id].admin) {
		return res.redirect('/lists/' + id + '/login');
	}

	next();

};

exports.processLogin = function (req, res, next) {

	var list = req.list;

	var id = list._id;
	var redirectDestination = '/lists/' + id;

	var password = req.body.password;

	if (password === list.password.admin) {
		req.session[id] = {
			admin: true,
			client: true
		};

		redirectDestination += '/edit';
	} else if (password === list.password.client) {
		req.session[id] = {
			admin: false,
			client: true
		};
	}

	if (req.session[id]) {
		return res.redirect(redirectDestination);
	}

	next();

};

exports.destroySession = function (req, res, next) {

	delete req.session;

	next();

};
