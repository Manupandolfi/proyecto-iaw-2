function pedirClima() {

  $.get('/clima', function(data){
        if (data != [])
            mostrarClima(data);
      });
}


function mostrarClima(data){
    swal(text: data.WeatherText);
  //aca va el swal con los case, o podria simplemente mostrar el mensaje que me da accu.
}
