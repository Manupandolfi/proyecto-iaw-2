const mongoose = require('mongoose');
const Complejos = mongoose.model('Complejo');

const index = function (req, res) {
	Complejos.find().exec((err,complejos) => {
		if(err){
			res.render('error', {error: err});
		}
		else{
			res.render('index', {title: 'La Caprichosa', complejos});
		}
	});
};

const readme = function(req, res){
	var texto = 'Esto se va a mostrar en el readme';
	res.render('readme', {title:'Readme', texto})
}

module.exports = {
	index,
	readme
}