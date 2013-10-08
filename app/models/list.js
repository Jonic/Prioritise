'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Entry = require('./entry');

var listSchema = new Schema({
	entries: [Entry],
	client: {
		default: 'Client Name',
		type: String
	},
	project: {
		default: 'Project Name',
		type: String
	}
});

module.exports = listSchema;