var request = require('request');

var clima = {};


clima.getClima = function(req,res){
var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=';
var key = 'bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD';
var config = '&language=es&details=false';
var url2 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD&language=es&details=false';
request(url2, function(error, response, body) {
      var miJson = JSON.parse(body);
      console.log(miJson.WeatherText);
      console.log(body.WeatherText);
      /*
      var miJson = [
  {
    "WeatherText": body.WeatherText,
    "WeatherIcon": body.WeatherIcon,
    "Temperature": body.Temperature.Imperial
  }
];*/

      res.status(200).json(miJson);
});

}

module.exports = clima;
