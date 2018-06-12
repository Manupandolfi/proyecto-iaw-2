var request = require('request');
const accuKey = process.env.AccuKey;

var clima = {};


clima.getClima = function(req,res){
var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=';
//Accukey es una variable de entorno
var key = ""+accuKey+"";
var config = '&language=es&details=false';
var url2 = url1+key+config;
const options = {
    url: url2,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
};

request(options, function(error, response, body) {
      var miJson = JSON.parse(body);
     var reporte = new Object();
     reporte.titulo = "Condiciones para jugar";
     reporte.texto = ""
     var tiempo = miJson[0].WeatherIcon;
     var grados = miJson[0].Temperature.Metric.Value;
     //Primero verificamos el tiempo (que no haya nieve, lluvia, etc..)
     if(tiempo < 12 || (tiempo > 29 && tiempo <39)){
     	reporte.texto+="Las condiciones del clima son agradables para un partido, ";
     	if(grados > 5 && grados < 30)
     		reporte.texto+="y la temperatura acompaña. Gran dia para reservar un turno.";
     	else
     		reporte.texto+="pero la temperatura no acompaña. Te recomendamos reservar otro dia.";
     }
     else{
     	reporte.texto+="Las condiciones del clima no son agradables para jugar "+
     			"un partido hoy. Te recomendamos reservar otro dia.";
     }
     reporte.grados = grados;
     reporte.icono = "https://developer.accuweather.com/sites/default/files/"+tiempo+"-s.png";
     reporte.descripcion = miJson[0].WeatherText;

     console.log(reporte);



      res.status(200).json(reporte);
});

}

module.exports = clima;
