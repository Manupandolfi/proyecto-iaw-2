var XMLHttpRequest = require("w3c-xmlhttprequest").XMLHttpRequest;
var clima = {};
clima.getClima = function(req,res){
      var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=';
      var key = 'bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD';
      var config = '&language=es&details=false';
      var url2 = url1+key+config;
      jQuery.get(url2,function(data){
              res.status(200);
              res.JSON(data);

      });
      /*
      $.ajax({
    	    url: url2,
    	    type: 'get',
        	dataType: "json",
          async: false,
    	    success: function(data){
    	         res.status(200);
               res.JSON(data);
             },
            });
*/

}

module.exports = clima;
