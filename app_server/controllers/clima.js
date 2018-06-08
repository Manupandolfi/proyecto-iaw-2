var XMLHttpRequest = require("w3c-xmlhttprequest").XMLHttpRequest;
var clima = {};

clima.getClima = function(req,res){
      var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=';
      var key = 'bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD';
      var config = '&language=es&details=false';
      var url = url1+key+config;
     var client = new XMLHttpRequest();
     client.open('GET', url);
     client.responseType = 'json';
     client.addEventListener('load', function() {
       var data = client.response;
         res.json(data);
       }
     }, false);

}

module.exports = clima;
