
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
	items: [
		{
			title: {
				required: true,
				type: String
			},
			order: {
				default: 0,
				type: Number
			}
		}
	],
	title: String,
	password: String
});

module.exports = listSchema;
