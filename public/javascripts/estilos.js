function cambioEstilo(nro){
	//Establece un estilo de pagina
	setObject('estilo',nro);

	if(nro==0){
		$("#css-estilo").attr('href', 'stylesheets/default.css');
	}else{
		if(nro==1){
			//setear estilo 1
			$("#css-estilo").attr('href', 'stylesheets/estilo1.css');
		}
		else{
			//setear estilo 2
			$("#css-estilo").attr('href', 'stylesheets/estilo2.css');
		}
	}
}

function seleccionarEstilo(){
	//Esta funcion se ejecuta al iniciar, para saber que estilo seteo el usuario
	var estilo = getObject('estilo');
	//Si es distinto a nulo, es porque seteo algo
	if(estilo)
		cambioEstilo(estilo);
	else{
		//Sino, pongo estilo 1 por defecto
		setObject('estilo',1);
		cambioEstilo(1);
	}
}
