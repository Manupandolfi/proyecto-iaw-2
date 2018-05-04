const mongoose = require('mongoose');
var db = require("../models/db");
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
	var texto = 'Esto se va a mostrar en el readme';
	res.render('readme', {title:'Readme', texto, user:req.user})
}


module.exports = mainController;