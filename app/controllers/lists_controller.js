
'use strict';

var helpers = require('../helpers');

//	GET /lists.format?
exports.index = function (req, res) {

	res.redirect('/');

};

//	POST /lists/lookup
exports.lookup = function (req, res) {

	res.redirect('/lists/' + req.body.id);

};

//	GET /lists/not-found
exports.notFound = function (req, res) {

	res.render('lists/not-found');

};

//	GET /lists/:id.format?
exports.show = function (req, res) {

	res.render('lists/show', {
		list: req.list
	});

};

//	GET /lists/new
exports.new = function (req, res) {

	res.render('lists/new');

};

//	GET /lists/:id/edit
exports.edit = function (req, res) {

	res.render('lists/edit', {
		list: req.list
	});

};

//	POST /lists.format?
exports.create = function (req, res) {

	if (req.list) {
		res.redirect('/lists/' + req.list._id);
	} else {
		res.redirect('/lists/new');
	}

};

//	PATCH/PUT /lists/:id.format?
exports.update = function (req, res) {

	res.redirect('/lists/' + req.list._id);

};

//	GET /lists/:id/delete
exports.delete = function (req, res) {

	return res.render('lists/delete', {
		list: req.list
	});

};

//	DELETE /lists/:id.format?
exports.destroy = function (req, res) {

	return res.redirect('/');

};

//	GET /lists/:id/login
exports.login = function (req, res) {

	res.render('lists/login', {
		id: req.list._id
	});

};
