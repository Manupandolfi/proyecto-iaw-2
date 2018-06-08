var request = require('request');
var clima = {};


clima.getClima = function(req,res){
var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=';
var key = 'bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD';
var config = '&language=es&details=false';
var url2 = url1+key+config;
request.get(url2,function(err,res2,body){
  if(res2.statusCode != 200)
        res.status(res2.statusCode);
        res.JSON(res2);
});
};


module.exports = clima;
