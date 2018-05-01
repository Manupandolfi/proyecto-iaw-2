function comentar(complejoId){
	//Funcion para realizar un comentario al complejo indicado
	//Obtengo los campos de los comentarios y la lista de comentarios del complejo
	var complejo = getComplejo(complejoId);
	var name = $("#nombre-comment").val(),
		com = $("#input-comment").val(),
		lista = getObject('comments-'+complejo.id);
	//Chequeamos que el comentario no sea vacio
	if(com==""){
		alert("El contenido del comentario no puede ser vacío.");
	}
	else{
		//Si el usuario es vacio, entonces lo consideramos anonimo
		if(name==""){
			name = "Anónimo";
		}
		if(lista){
			//Si ya existia una lista de comentarios de este complejo, lo agrego a la lista y lo vuelvo a guardar
			lista.push({nombre: name, contenido: com});
			setObject('comments-'+complejo.id, lista);
		}else{
			//Si no existia, crea una nueva lista con solo este comentario
			setObject('comments-'+complejo.id, [{nombre: name, contenido: com}]);
		}

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
	var lista = getObject('comments-'+complejo.id);
	$.each(lista, function(i,k){
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
}

function ocultarComentarios(){
	//Funcion para ocultar los comentarios de cualquier complejo que se esten mostrando
	$("#row-comments").fadeOut();
}



