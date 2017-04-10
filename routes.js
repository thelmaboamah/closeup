var passport = require('passport');
var db = require('./models');
var router = require('express').Router();

router.get('/', function(req, res) {
	res.render('index', {user: req.user});
})

router.get('/signup', function(req, res) {
	res.render('signup')
})

router.post('/signup', function(req, res) {
	db.User.register(new db.User({username: req.body.username}), req.body.password, function(err) {
		
		if (err) {
			return next(err);
		}

		res.redirect('/');

	});
});

router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;