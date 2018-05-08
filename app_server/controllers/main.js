const mongoose = require('mongoose');
require("../models/User");
require("../models/complejo");
const Complejos = mongoose.model('Complejo');
const User = mongoose.model('User');

var mainController = {};

mainController.index = function (req, res) {
	Complejos.find().exec((err,complejos) => {
		if(err){
			res.render('error', {error: err});
		}
		else{
			res.render('index', {title: 'La Caprichosa', complejos, user:req.user});
		}
	});
};

mainController.readme = function(req, res){
	res.render('readme', {title:'Readme', user:req.user});
}


module.exports = mainController;
