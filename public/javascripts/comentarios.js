var lista = [];
var ide;
function comentar(){
	//Funcion para realizar un comentario al complejo indicado
	//Obtengo los campos de los comentarios y la lista de comentarios del complejo
	var name = $("#label-comments").text();
	name = name.substring(14);
	var	com = $("#input-comment").val();
	//Chequeamos que el comentario no sea vacio
	if(com==""){
		swal({
					title: '¡Falta Juez!',
					text :'El contenido del comentario no puede ser vacío.',
					imageUrl : './images/chino.png'
				});
	}
	else{
		var comentario = {
			id : ide,
			nombre : name,
			contenido : com
		};
		/*ACA HABRIA QUE MANDAR LOS DATOS O SE HARIA CON EL FORM, NO ESTOY SEGURO*/
		guardarComentario(comentario);

		}
}

function guardarComentario(comentario) {
	toggleSubiendoComentario();
	$.ajax({
	    url: '/api/comentarlo',
	    type: 'post',
    	dataType: "json",
	    success: function(data){
	    	toggleSubiendoComentario();
			agregarComentario(comentario);
	    },
			data: comentario,
	});
}

function toggleSubiendoComentario(){
	$('#subiendo-comentario').fadeToggle();
}

function toggleCargandoComentarios(){
	$('#cargando-comentarios').fadeToggle();
}

function mostrarComentarios(complejo){
	//Funcion para mostrar los comentarios del complejo seleccionado
	//Si no estan, los traemos...
	$("#row-comments").fadeIn();
	$("#titulo-comment").text("Comentarios del complejo "+complejo.nombre);
	//Elimino todos los comentarios que hay mostrados ahora
	$("#comentarios").empty();
	ide = complejo._id;
	//Cargo todos los comentarios del complejo
	var aux;
	toggleCargandoComentarios();
	$.get('/api/comentarios/'+complejo._id, function(data){
		toggleCargandoComentarios();
		if(data != []){
					lista = data;
					aux = lista[0].comentarios;
					$.each(aux, function(i,k){
						//Creo la estructura de un comentario nuevo
						var icon = $('<div></div>'),
							div = $('<div></div>'),
							h4 = $('<h4></h4>'),
							p = $('<p></p>');

						//Setep las clases de los elementos
						icon.attr('class', 'glyphicon glyphicon-comment icono-comment');
						div.attr('class', 'media well');
						h4.attr('class', 'media-heading');
						p.attr('class', 'text-comment');

						//Seteo los textos del comentario
						h4.text(k.nombre);
						p.text(k.contenido);

						//Limpio los campos del comentario
						$("#input-comment").val("");
						$("#nombre-comment").val("");

						//Agrego el comentario al dom
						div.append(icon,h4,p);
						$("#comentarios").append(div);
					});

	}});


}

function agregarComentario(comentario){
			//Creo la estructura de un comentario nuevo
			var icon = $('<div></div>'),
				div = $('<div></div>'),
				h4 = $('<h4></h4>'),
				p = $('<p></p>');

			//Setep las clases de los elementos
			icon.attr('class', 'glyphicon glyphicon-comment icono-comment');
			div.attr('class', 'media well');
			h4.attr('class', 'media-heading');
			p.attr('class', 'text-comment');

			//Seteo los textos del comentario
			h4.text(comentario.nombre);
			p.text(comentario.contenido);

			//Limpio los campos del comentario
			$("#input-comment").val("");
			$("#nombre-comment").val("");

			//Agrego el comentario al dom
			div.append(icon,h4,p);
			$("#comentarios").append(div);
}
function ocultarComentarios(){
	//Funcion para ocultar los comentarios de cualquier complejo que se esten mostrando
	$("#row-comments").fadeOut();
}

function pedirClima(){
	var url1 = 'http://dataservice.accuweather.com/currentconditions/v1/2931?apikey=bGpGXSIQ9WuaTxxGEMzi5GF7FfkMLvsD&language=es&details=false'
  $.get(url, function(data){
            swal({text: data.WeatherText});
      });
}

function mostrarClima(data){
    swal({text: data.WeatherText});
  //aca va el swal con los case, o podria simplemente mostrar el mensaje que me da accu.
}
