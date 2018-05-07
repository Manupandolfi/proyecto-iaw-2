var passport = require('passport');
var authController = {};

authController.login = function(req, res){
	res.redirect('/auth/google');
}

authController.logout = function(req, res){
	req.logout();
	res.redirect('/');
}

authController.google = function(req, res) {
	passport.authenticate('google', {scope: ['profile']});
};
/*
authController.googleCallback = function(req, res) {
	passport.authenticate('google', function(req, res){
		res.redirect('/profile');
	});
};*/

module.exports = authController;