var request = require('request');

var clima = {};


clima.getClima = function(req,res){
var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=';
var key = 'bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD';
var config = '&language=es&details=false';
var url2 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD&language=es&details=false';
const options = {
    url: url2,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
};

request(options, function(error, response, body) {
      var miJson = JSON.parse(body);
      console.log(miJson[0]);


      res.status(200).json(miJson[0]);
});

}

module.exports = clima;
