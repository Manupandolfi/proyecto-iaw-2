var jsonComplejos;

function mimodal(){
/*modal de geolocacion*/
	$(window).on('load',function(){
			 $('#myModal').modal('show');
	 });
	 $('#myModal').on('hidden.bs.modal', function (e) {
	         geolocacion();
	     })
}

function distancia(){
	//Funcionpara que cada vez que se modifica el slider de distancia, se actualice el label con su valor
	$("#valor-distancia").text($("#range-distancia").val()+" km");
}

function start(){
	//Metodos javascript que se ejecutaran al cargarse el body del html
	//var jsonComplejos = JSON.parse($.getJSON({'url': "json/datos.json", 'async': false}).responseText);
	cargarDatos();
	seleccionarEstilo();

}

function cargarDatos(){
	$.get('./json/datos.json', function(data) {
		jsonComplejos = data;
		cargarCanchas(jsonComplejos);
		cargarComplejos();
	});
}

function menos(){
	//Funcion para restar en 1 el tamaño de la cancha a buscar
	//Si esta seleccionado todas, vuelvo al tamaño mas grande
	if($("#input-tamanio").val()=="Todas"){
  		$("#input-tamanio").val(11);
  	}
  	else{
		 var i = parseInt($("#input-tamanio").val());
		//Si el valor es menor a 11, entonces puedo incrementar
	  	if(i>4){
	  		$("#input-tamanio").val(i-1);
	  	}else{
	  		//Sino, vuelvo a Todas
	  		$("#input-tamanio").val("Todas");
	  	}
	}
}

function mas(){
	//Funcion para restar en 1 el tamaño de la cancha a buscar
	//Si esta seleccionado todas, vuelvo al tamaño mas pequeño
	if($("#input-tamanio").val()=="Todas"){
  		$("#input-tamanio").val(4);
  	}
  	else{
		 var i = parseInt($("#input-tamanio").val());
		//Si el valor es menor a 11, entonces puedo incrementar
	  	if(i<11){
	  		$("#input-tamanio").val(i+1);
	  	}else{
	  		//Sino, vuelvo a Todas
	  		$("#input-tamanio").val("Todas");
	  	}
	}
}

function toggleMasMenos(boton){
	//Funcion para hacer toggle del boton +/- pasado por parametro
	boton.toggleClass('btn-add');
	boton.toggleClass('btn-remove');
	boton.toggleClass("glyphicon-plus");
	boton.toggleClass("glyphicon-minus");
}

function toggleBtnNombre(){
	//Funcion para hacer toggle del campo nombre de complejo. Hago toggle del boton +/- y lo pongo o quito al campo
	toggleMasMenos($("#btn-nombre"));
	$("#nombre").fadeToggle();
}

function toggleBtnDistancia(){
	//Funcion para hacer toggle del campo distancia de complejo. Hago toggle del boton +/- y lo pongo o quito al campo
	distancia();
	toggleMasMenos($("#btn-distancia"));
	$("#contenido-distancia").fadeToggle();
}

function toggleBtnTamanio(){
	//Funcion para hacer toggle del campo tamanio de complejo. Hago toggle del boton +/- y lo pongo o quito al campo
	toggleMasMenos($("#btn-tamanio"));
	$("#contenido-tamanio").fadeToggle();

}

function toggleBtnHorario(){
	//Funcion para hacer toggle del campo horario de complejo. Hago toggle del boton +/- y lo pongo o quito al campo
	toggleMasMenos($("#btn-horario"));
	$("#contenido-horario").fadeToggle();
}

function cargarCanchas(complejosACargar){
	//Esta funcion carga las canchas indicadas por parametro en el panel de resultados
	var lista = $("#lista-resultados");
	//Vacio la lista de resultados
	lista.empty();
	//Seteo la cantidad de resultados, que se van a cargar
	$("#cant-res").text(complejosACargar.length);
	//for(i=0 ; i<complejosACargar.length ; i++){
	for(var i in complejosACargar){
		//Para cada resultado, voy a crear un div con su respectivo id del complejo
		var div = $('<div></div>');
		div.attr("id","res-"+complejosACargar[i].id);
		//Creo el boton que estara en el div y representa al complejo
		var button = $('<button></button>');
		button.attr({
			onclick: "select("+complejosACargar[i].id+")", //Al clickear en un res se selecciona el complejo segun su id
			type: 'button',
			class: 'list-group-item'
		});
		var titulo = $('<p></p>').attr('class', 'titulo-res').text(complejosACargar[i].nombre);
		var subtitulo = $('<p></p>').attr('class', 'subtitulo-res').text(complejosACargar[i].direccion);
		//Pongo el nombre(titulo) y direccion(subtitulo) en el boton, que lo pongo en el div, que lo pongo en la lista de resultados
		button.append(titulo,subtitulo);
		div.append(button);
		lista.append(div);
	}
}

function buscar() {
	//Esta funcion filtra los complejos a partir de los parametros ingresados por el usuario
	var resultado = jsonComplejos.slice();
	var aux = [];
	//Si no dejaron vacio el campo nombre, entonces filtro por nombre
	if($("#nombre").val()!=""){
		for(i = 0; i<resultado.length ; i++){
			//Si el nombre ingresado tiene coincidencia con el nombre del complejo
			if(resultado[i].nombre.toLowerCase().search($("#nombre").val().toLowerCase())!=-1){
				aux.push(resultado[i]);
			}
		}
		resultado = aux.slice();
		aux = [];
	}
	//Si especificaron un tamanio de cancha, entonces filtro por tamanio
	if($("#input-tamanio").val()!="Todas"){
		for(j = 0; j<resultado.length ; j++){
			//Pregunto si el complejo j tiene una cancha del tamanio en cuestion
			if(tieneCancha(resultado[j].canchas,$("#input-tamanio").val())){
				aux.push(resultado[j]);
			}
		}
		resultado = aux.slice();
		aux = [];
	}
	//Si se especifico un rango de distancia menor a 8km, filtro por distancia
	//if($("#range-distancia").val()<8){
		resultado = filtrarDistancia(resultado,$("#range-distancia").val());
	//}

	//Cargo las canchas en el panel resultado
	cargarCanchas(resultado);
	ocultarComentarios();
	//Falta filtrar por horario
}

function tieneCancha(canchas,valor){
	//Funcion para comprobar si un conjunto de canchas tiene una cancha de tamanio 'valor'
	for(k=0; k<canchas.length ; k++){
		if(canchas[k].tamanio==valor)
			return true;
	}
	return false;
}

function select(complejoId){
	//Funcion para establecer en el mapa el complejo seleccionado
	var target = getComplejo(complejoId);
	centrarMapa(target);
	mostrarComentarios(target);
	$("#btn-comment").attr('onclick', 'comentar('+complejoId+')');
}

function getComplejo(complejoId){
	//A partir del id de un complejo, retorna ese complejo
	var target = null;
	for(i=0; i<jsonComplejos.length && target==null; i++)
		if(jsonComplejos[i].id == complejoId)
			target = jsonComplejos[i];
	return target;
}
