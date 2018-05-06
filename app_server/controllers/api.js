const mongoose = require('mongoose');
const Complejo = mongoose.model('Complejo');
var complejos = {};
var ide;
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
 	ide = req.params.id;
	var str = "'"+ide+"'";
	Complejo.find({id:{$eq:ide}},{_id:0,comentarios:1}).exec((err,coment) => {
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
			var nom = '"'+req.body.nombreComent+'"';
			if (nom == ('"'+'"')) nom = '"'+"anonimo"+'"';
			var cont = '"'+req.body.contenidoComent+'"';
			var str = "'"+ide+"'";
			console.log(nom+cont+str);
		/*aca deberia cargar el comentario en la base de datos*/
		var coment = '"'+"comentarios"+'"';
		var nombr = '"'+"nombre"+'"';
		var content = '"'+"contenido"+'"';

	/* intento 9000	
	var nuevoComentario = {nombre : nom, contenido : content};
		Complejo.findById(6,function(err,complejo){

					if(err)
							res.send(err);
					complejo.push(nuevoComentario);
					complejo.save(function(err){
							if(err) res.send(err);
					});

		});
		/*	intento 9001
			Complejo.update({ id:{$eq:str}} , {$push:{coment:{nombr:nom,content:cont}}}).exec((err,com)=>{
						if(err)
								res.status(404);
						else
								res.status(200);
		});*/

	}
module.exports = complejos;

/*
function filtrar(nombre,tamanio,distancia,ubiActual){
		filtrados = getComplejos
		filtrarNombre(nombre,filtrados);
		filtrarTamanio(tamanio,filtrados);
		filtrarDistancia(distancia,filtrados,ubiActual);
	return filtrados;
}

function filtrarNombre(nombre,complejos){
	var aux = [];
		if (!(nombre.equals(''))){
					$.each(complejo,function(i,k){
								if((k.nombre.contains(nombre)))
											aux.push(k);
		});
		complejos = aux.slice();
		}
}

function getComentarios(){
				var Comentarios = [];
				Complejo.findOne({}).exec((err,complejo) => {
					if(err){
						res.status(404).json(err);
					}
					else{
						console.log('Encontre complejo');
						res.status(200).json(complejo.comentarios);
					}
				});

}
function filtrarTamanio(tamanio,complejos){
	var aux = [];
		var tiene;
		if (!(tamanio.equals('todas'))){
					$.each(complejo,function(i,k){
						tiene = 0;
								$.each(k.canchas,function(p,q){
													if(q.tamanio.equals(tamanio))
																tiene = 1;
								});
						if(tiene == 1)
								aux.push(k);
					});
		complejos = aux.slice();
		}
}

function filtrarDistancia(distancia,complejos,ubiActual){
	var aux = [];
	   $.each(complejos,function(i,k){
	       if(enRango(k,distancia,ubiActual))
								aux.push(k);
	   });
	complejos = aux.slice();
}

function enRango(resultado,distancia,ubiActual){

      var latlng2= {
        lat: parseFloat(resultado.coordenadas[0]),
        lng: parseFloat(resultado.coordenadas[1])
      }
      dista = getKilometros(ubiActual.lat,ubiActual.lng,latlng2.lat,latlng2.lng)/1000;
      if(distancia >= dista)
            return true;
      return false;
}

function getKilometros(lat1,lon1,lat2,lon2){
   var lat = [Math.abs(lat1), Math.abs(lat2)];
   var lng = [Math.abs(lon1), Math.abs(lon2)];
   var R = 6378137;
   var dLat = (lat[1]-lat[0]) * Math.PI / 180;
   var dLng = (lng[1]-lng[0]) * Math.PI / 180;
   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
   Math.cos(lat[0] * Math.PI / 180 ) * Math.cos(lat[1] * Math.PI / 180 ) *
   Math.sin(dLng/2) * Math.sin(dLng/2);
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
   var d = R * c;
   return Math.round(d);
 }

*/
