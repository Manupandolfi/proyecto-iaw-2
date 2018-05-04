var express = require('express');
var router = express.Router();

const ctrlLogin = require('../controllers/auth');


// route to register page
router.get('/register', ctrlLogin.register);

// route for register action
router.post('/register', ctrlLogin.doRegister);

// route to login page
router.get('/login', ctrlLogin.login);

// route for login action
router.post('/login', ctrlLogin.doLogin);

// route for logout action
router.get('/logout', ctrlLogin.logout);


module.exports = router;