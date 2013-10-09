
exports.setLocals = function (req, res, next) {

	if (req.session.auth) {
		res.locals.auth = req.session.auth;
	}

	res.locals.token = req.csrfToken();

	next();

};

exports.redirectTo = function (req, res, next) {

};
