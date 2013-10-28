
'use strict';

var List = require('../models/list');

exports.setList = function (req, res, next) {

	List.findOne({
		_id: req.params.id
	}, function (err, list) {
		if (!list) {
			return res.redirect('/lists/not-found');
		}

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
		},
		locked: req.body.locked !== undefined
	});

	list.save(function (err, list) {
		if (err) {
			throw err;
		}

		req.list = list;

		req.session[list.id] = {
			client: true,
			admin: true
		};

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

	var id = req.list._id;

	if (req.session[id].admin) {
		list.title = req.body.title;

		list.password = {
			admin: req.body.passwordAdmin,
			client: req.body.passwordClient
		};

		list.locked = req.body.locked !== undefined;
	}

	list.save(function (err, list) {
		if (err) {
			throw err;
		}

		req.list = list;

		if (req.session[id].admin) {
			return res.redirect('/lists/' + id + '/edit');
		}

		next();
	});

};

exports.destroyList = function (req, res, next) {

	var list = req.list;

	if (req.body.password !== list.password.admin) {
		return res.redirect('/lists/' + list._id + '/delete');
	}

	list.remove(function (err) {
		next();
	});

};
