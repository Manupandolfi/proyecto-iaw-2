var clima = {};

clima.getClima = function(req,res){
      var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=';
      var key = 'bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD';
      var config = '&language=es&details=false';
      var url = url1+key+config;
      $.get(url,function(data){
              res.json(data);
      });

      /*var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url , false); // true for asynchronous
      xmlHttp.send(null);
      xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                  res.status(200);
                  res.json()
      }

*/
}

module.exports = clima;
