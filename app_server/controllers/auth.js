var mongoose = require("mongoose");
var passport = require("passport");
var db = require("../models/db");
const Complejos = mongoose.model('Complejo');
const User = mongoose.model('User');

var loginController = {};

// Go to registration page
loginController.register = function(req, res) {
  res.render('register');
};

// Post registration
loginController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
loginController.login = function(req, res) {
  res.render('login');
};

// Post login
loginController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
loginController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = loginController;
