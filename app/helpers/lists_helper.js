
'use strict';

var List = require('../models/list');

exports.setList = function (req, res, next) {

	List.findOne({
		_id: req.params.id
	}, function (err, list) {
		req.list = list;

		next();
	});

};

exports.newList = function (req, res, next) {

	var features = [];

	for (var feature in req.body.features) {
		if (req.body.features.hasOwnProperty(feature)) {
			if (req.body.features[feature]) {
				features.push({
					title: req.body.features[feature]
				});
			}
		}
	}

	var list = new List({
		features: features,
		title: req.body.title,
		password: {
			admin: req.body.passwordAdmin,
			client: req.body.passwordClient
		}
	});

	list.save(function (err, list) {
		if (err) {
			throw err;
		}

		req.auth['list_' + req.list._id].admin = true;

		req.list = list;

		next();
	});

};

exports.updateList = function (req, res, next) {

	var features = [];

	for (var feature in req.body.features) {
		if (req.body.features.hasOwnProperty(feature)) {
			if (req.body.features[feature]) {
				features.push({
					title: req.body.features[feature]
				});
			}
		}
	}

	var list = req.list;

	list.features = features;

	list.save(function (err, list) {
		if (err) {
			throw err;
		}

		req.list = list;

		next();
	});

};
