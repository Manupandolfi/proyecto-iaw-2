function pedirClima(){

  $.get('/clima', function(data){
            mostrarClima(data);
      });
}


function mostrarClima(data){
    swal({html: "<h2>"+data.titulo+"</h2>"+
				"<img src='"+data.icono+"'>"+
				"<div>"+ data.descripcion +" - "+data.grados+"°C</div>"+
				"<br><div>"+ data.texto +"</div>"});
}