const mongoose = require('mongoose');
const Complejo = mongoose.model('Complejo');
var filtrados;
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

function filtrar(nombre,tamanio,distancia,ubiActual){
		filtrados = getComplejos
		filtrados	= filtrarNombre(nombre,filtrados);
		filtrados = filtrarTamanio(tamanio,filtrados);
		filtrados = filtrarDistancia(distancia,filtrados,ubiActual);
	return filtrados;
}

function filtrarNombre(nombre,complejos){
		if (!(nombre.equals(''))){
					$.each(complejo,function(i,k){
								if(!(k.nombre.contains(nombre)))
											complejo.remove(k);
		});
		}
		return complejos;
}
function filtrarTamanio(tamanio,complejos){
		var tiene = 0;
		if (!(tamanio.equals('todas'))){
					$.each(complejo,function(i,k){
								$.each(k.canchas,function(p,q){
													if(q.tamanio.equals(tamanio))
																tiene = 1;
								});
				if(tiene = 0)
						complejos.remove(k);
		});
		}
		return complejos;
}

function filtrarDistancia(distancia,complejos,ubiActual){
	   $.each(complejos,function(i,k){
	       if(!(enRango(k,distancia,ubiActual)))
								complejos.remove(k);
	   });
		return complejos
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


module.exports = {getComplejos};
