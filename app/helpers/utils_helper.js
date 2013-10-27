
'use strict';

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
