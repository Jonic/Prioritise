
'use strict';

var helpers = require('../helpers');

// GET /lists
// GET /lists.json
exports.index = function (req, res) {

	helpers.utils.respondTo(req, res, {
		json: function () {

		},

		html: function () {
			res.render('lists/index');
		}
	});

};

// GET /lists/1
// GET /lists/1.json
exports.show = function (req, res) {

	helpers.utils.respondTo(req, res, {
		json: function () {
			res.json(req.list);
		},

		html: function () {
			res.render('lists/show', {
				list: req.list
			});
		}
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

	helpers.utils.respondTo(req, res, {
		json: function () {

		},

		html: function () {
			if (req.list) {
				res.redirect('/lists/' + req.list._id);
			} else {
				res.redirect('/lists/new');
			}
		}
	});

};

// PATCH/PUT /lists/1
// PATCH/PUT /lists/1.json
exports.update = function (req, res) {

	helpers.utils.respondTo(req, res, {
		json: function () {
			res.redirect('/lists/' + req.list._id);
		},

		html: function () {
			res.redirect('/lists/' + req.list._id);
		}
	});

};

// DELETE /lists/1
// DELETE /lists/1.json
exports.destroy = function (req, res) {

	helpers.utils.respondTo(req, res, {
		json: function () {

		},

		html: function () {

		}
	});

};
