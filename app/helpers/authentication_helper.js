
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

	var id = req.list._id;

	switch (req.body.password) {
	case req.list.password.admin:
		req.session[id] = {
			admin: true,
			client: true
		};
		break;
	case req.list.password.client:
		req.session[id] = {
			admin: false,
			client: true
		};
		break;
	default:
		return next();
	}

	res.redirect('/lists/' + id);

};

exports.destroySession = function (req, res, next) {

	var id = req.list._id;

	if (req.session[id]) {
		delete req.session[id];
	}

	return res.redirect('/lists/' + id + '/login');

};
