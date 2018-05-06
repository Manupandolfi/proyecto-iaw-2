var lista = [];
function comentar(complejoId){
	//Funcion para realizar un comentario al complejo indicado
	//Obtengo los campos de los comentarios y la lista de comentarios del complejo
	var complejo = getComplejo(complejoId);
	var name = $("#nombre-comment").val();
		com = $("#input-comment").val();
	//Chequeamos que el comentario no sea vacio
	if(com==""){
			/*SACAR ESTE ALERT ESPARTANO*/
		alert("El contenido del comentario no puede ser vacío.");
	}
	else{
		//Si el usuario es vacio, entonces lo consideramos anonimo
		if(name==""){
			name = "Anónimo";
		}

		/*ACA HABRIA QUE MANDAR LOS DATOS O SE HARIA CON EL FORM, NO ESTOY SEGURO*/
		//Muestro los comentarios del complejo actualizados
		mostrarComentarios(complejo);
	}
}

function mostrarComentarios(complejo){
	//Funcion para mostrar los comentarios del complejo seleccionado
	//Si no estan, los traemos...
	$("#row-comments").fadeIn();
	$("#titulo-comment").text("Comentarios del complejo "+complejo.nombre);
	//Elimino todos los comentarios que hay mostrados ahora
	$("#comentarios").empty();

	//Cargo todos los comentarios del complejo
	var aux;
	$.get('/api/comentarios/'+complejo.id, function(data){
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

	});


}

function ocultarComentarios(){
	//Funcion para ocultar los comentarios de cualquier complejo que se esten mostrando
	$("#row-comments").fadeOut();
}
