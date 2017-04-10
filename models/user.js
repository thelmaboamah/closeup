var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		passportLocalMongoose = require('passport-local-mongoose');

var Photo = require('./photo');

var User = new Schema({
	name: String,
	photos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);