var express = require('express');
var router = express.Router();
var ctrlAuth = require('../controllers/auth');
var passport = require('passport');

router.get('/login', ctrlAuth.login);

router.get('/logout', ctrlAuth.logout);

//router.get('/google', ctrlAuth.google);
router.get('/google', passport.authenticate('google', {
    scope: ['profile'],
    prompt: 'select_account'
}));


//router.get('/google/callback', ctrlAuth.googleCallback);
router.get('/google/callback', passport.authenticate('google'), (req, res) =>{
	res.redirect('/');
});

module.exports = router;