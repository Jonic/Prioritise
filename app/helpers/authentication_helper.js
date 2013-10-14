
'use strict';

exports.ensureAuthenticated = function (req, res, next) {

	var authType = req.authLookup.type;

	req.access = req.auth['list_' + req.list._id][authType];

	next();

};

exports.processAuthRequest = function (req, res, next) {

	if (req.body.password) {
		var authType = req.body.loginType;

		if (req.list.password[authType] === req.body.password) {
			req.auth['list_' + req.list._id][authType] = true;
		}
	}

	next();

};