'use strict';

// GET /lists
// GET /lists.json
exports.index = function (req, res) {
	res.render('lists/index');
};

// GET /lists/1
// GET /lists/1.json
exports.show = function (req, res) {
	res.render('lists/show');
};

// GET /lists/new
exports.new = function (req, res) {
	res.render('lists/new');
};

// GET /lists/1/edit
exports.edit = function (req, res) {
	res.render('lists/edit');
};

// POST /lists
// POST /lists.json
exports.create = function (req, res) {

};

// PATCH/PUT /lists/1
// PATCH/PUT /lists/1.json
exports.update = function (req, res) {

};

// DELETE /lists/1
// DELETE /lists/1.json
exports.destroy = function (req, res) {

};
