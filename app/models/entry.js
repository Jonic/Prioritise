'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
	content: {
		required: true,
		type: String
	},
	date: {
		default: Date.now,
		type: Date
	},
	order: {
		default: 0,
		type: Number
	}
});

module.exports = entrySchema;