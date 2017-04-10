var passport = require('passport');
var db = require('./models');
var router = require('express').Router();


//Sign up and login routes
router.get('/', function(req, res) {
	res.render('index', {user: req.user});
});

router.get('/signup', function(req, res) {
	res.render('signup', {user: req.user})
});

router.post('/signup', function(req, res) {
	db.User.register(new db.User({username: req.body.username}), req.body.password, function(err) {
		
		if (err) {
			return next(err);
		}

		res.redirect('/camera');

	});
});

router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/camera');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//Camera page routes
router.get('/camera', function(req, res) {
	res.render('camera', {user: req.user});
});


module.exports = router;