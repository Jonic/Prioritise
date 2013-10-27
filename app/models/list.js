
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
	features: [
		{
			title: String
		}
	],
	password: {
		admin: String,
		client: String
	},
	title: String
});

module.exports = mongoose.model('List', listSchema);
