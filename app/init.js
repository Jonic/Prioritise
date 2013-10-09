var controllers = require('../app/controllers/_index');
var helpers = require('../app/helpers/_index');

module.exports = function (app) {

	//	Catch-all Routes
	app.all('*', [
		helpers.utils.setLocals
	]);



	//	Generic Routes
	app.get('/', controllers.application.home);

	app.get('/not-authorised', controllers.application.notAuthorised);



	// GET /lists
	app.get('/lists', controllers.lists.index);

	// GET /lists/new
	app.get('/lists/new', controllers.lists.new);

	// GET /lists/1
	app.get('/lists/:id', [
		helpers.lists.setList
	], controllers.lists.show);

	// GET /lists/1/edit
	app.get('/lists/:id/edit', [
		helpers.lists.setList
	], controllers.lists.edit);

	// POST /lists
	app.post('/lists', controllers.lists.create);

	// PATCH/PUT /lists/1
	app.put('/lists/:id', [
		helpers.lists.setList
	], controllers.lists.update);

	// DELETE /lists/1
	app.delete('/lists/:id', [
		helpers.lists.setList
	], controllers.lists.destroy);

};