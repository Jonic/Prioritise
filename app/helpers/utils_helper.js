
'use strict';

exports.setCacheControl = function (req, res, next) {

	res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

	next();

};

exports.setLocals = function (req, res, next) {

	if (req.session.auth) {
		res.locals.auth = req.session.auth;
	}

	res.locals.token = req.csrfToken();

	next();

};

exports.respondTo = function (req, res, callbacks) {

	switch (req.params.format) {
	case 'json':
		callbacks.json();
		break;

	case 'html':
		callbacks.html();
		break;

	default:
		callbacks.html();
		break;
	}

};
