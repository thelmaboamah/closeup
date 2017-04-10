var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Photo = new Schema({
	url: {type: String},
	filterName: {type: String}
})

module.exports = mongoose.model('Photo', Photo);