
'use strict';

var helpers = require('../helpers');

// GET /lists
// GET /lists.json
exports.index = function (req, res) {

	res.render('lists/index');

};

// GET /lists/1
// GET /lists/1.json
exports.show = function (req, res) {

	res.render('lists/show', {
		list: req.list
	});

};

// GET /lists/new
exports.new = function (req, res) {

	res.render('lists/new');

};

// GET /lists/1/edit
exports.edit = function (req, res) {

	res.render('lists/edit', {
		list: req.list
	});

};

// POST /lists
// POST /lists.json
exports.create = function (req, res) {

	if (req.list) {
		res.redirect('/lists/' + req.list._id);
	} else {
		res.redirect('/lists/new');
	}

};

// PATCH/PUT /lists/1
// PATCH/PUT /lists/1.json
exports.update = function (req, res) {

	res.redirect('/lists/' + req.list._id);

};

// GET /lists/1/delete
exports.delete = function (req, res) {

	return res.render('lists/delete');

};

// DELETE /lists/1
// DELETE /lists/1.json
exports.destroy = function (req, res) {

};
