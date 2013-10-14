
'use strict';

module.exports = function (app, controllers, helpers) {

	// GET /lists
	// GET /lists.json
	app.get('/lists.:format?', controllers.lists.index);

	// GET /lists/new
	app.get('/lists/new', controllers.lists.new);

	// GET /lists/1
	// GET /lists/1.json
	app.get('/lists/:id.:format?', [
		helpers.lists.setList,
		helpers.authentication.ensureAuthenticated
	], controllers.lists.show);

	// GET /lists/1/edit
	app.get('/lists/:id/edit', [
		helpers.lists.setList,
		helpers.authentication.ensureAuthenticated
	], controllers.lists.edit);

	// POST /lists
	// POST /lists.json
	app.post('/lists.:format?', [
		helpers.lists.newList
	], controllers.lists.create);

	// PATCH/PUT /lists/1
	// PATCH/PUT /lists/1.json
	app.put('/lists/:id.:format?', [
		helpers.lists.setList,
		helpers.authentication.ensureAuthenticated,
		helpers.lists.updateList
	], controllers.lists.update);

	// DELETE /lists/1
	// DELETE /lists/1.json
	app.delete('/lists/:id.:format?', [
		helpers.lists.setList,
		helpers.authentication.ensureAuthenticated
	], controllers.lists.destroy);

	// GET /lists/login
	app.get('/lists/login', [
		helpers.lists.setList
	], controllers.lists.login);

	// POST /lists/login
	app.post('/lists/login', [
		helpers.lists.setList,
		helpers.authentication.processAuthRequest,
		helpers.authentication.ensureAuthenticated
	], controllers.lists.login);

};
