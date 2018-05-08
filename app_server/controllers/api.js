const mongoose = require('mongoose');
const Complejo = mongoose.model('Complejo');
var complejos = {};
complejos.getComplejos = function(req, res){
	Complejo.find({},{comentarios:0}).exec((err, complejos) => {
		if(err){
			res.status(404).json(err);
		}
		else{
			console.log('My Man');
			res.status(200).json(complejos);
		}
	});
}


complejos.getComentarios = function(req,res){
 	var ide = req.params.id;
	var str = "'"+ide+"'";
	Complejo.find({_id:{$eq:ide}},{_id:0,comentarios:1}).exec((err,coment) => {
		if(err){
			console.log(str);
			res.status(404).json(err);
		}
		else{
			console.log(coment);
			res.status(200).json(coment);
		}

	});

}

complejos.comentarlo = function(req,res) {
	var comentario = {"nombre" : req.body.nombre, "contenido" : req.body.contenido};
	var ide = req.body.id;
	Complejo.update({_id: ide}, {$push:{comentarios : comentario}}).exec((err,com)=>{
		if(err){
			res.status(404).json(err);
		}
		else{
			console.log(com);
			res.status(200).json(com);
		}
});

}

complejos.getEstilo = function(req, res) {
	if(req.user){
		var style = {'estilo' : req.user.style};
		res.status(200).json(style);
	}
	else{
		var err = {'error' : 'no logeado'};
		res.status(404).json(err);
	}
	
}

complejos.setEstilo = function(req,res) {
	var user = req.user.username;
	var nro = req.body.nro;
	User.update({username:user}, {$set: {style : nro}}).exec((err,resultado)=>{
		if(err){
			res.status(404).json(err);
		}
		else{
			res.status(200).json(resultado);
		}
	});
}

module.exports = complejos;
