const mongoose = require('mongoose');
const Complejo = mongoose.model('Complejo');

const getComplejos = function(req, res){
	Complejo.find().exec((err, complejos) => {
		if(err){
			res.status(404).json(err);
		}
		else{
			console.log('My Man');
			res.status(200).json(complejos);
		}
	})
};

module.exports = {getComplejos};