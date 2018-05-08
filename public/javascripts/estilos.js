function cambioEstilo(nro){
	//Establece un estilo de pagina
	
	var dir = '/api/set-estilo/'+nro;
	$.ajax({
		url: dir,
		type: 'get',
		success: function(data){
			//CREO QUE NO HAY QUE HACER NADA SI HAY SUCCESS 
		},
		error: function(err){
			//SI NO PUDE PORQUE NO ESTOY LOGEADO LO GUARDO EN LOCALSTORAGE
			setObject('estilo',nro);
		}
	});
	
	if(nro==1){
			//setear estilo 1
			$("#css-estilo").attr('href', 'stylesheets/estilo1.css');
		}
		else{
			//setear estilo 2
			$("#css-estilo").attr('href', 'stylesheets/estilo2.css');
		}
}

function seleccionarEstilo(){
	//Esta funcion se ejecuta al iniciar, para saber que estilo seteo el usuario
	var estilo;
	$.ajax({
	    url: '/api/get-estilo/',
	    type: 'get',
	    success: function(data){
	    	estilo = data.estilo;
	    	cambioEstilo(estilo);
	    },
	    error: function(err){//NO AUTORIZADO...
	    	estilo = getObject('estilo');
			//Si es distinto a nulo, es porque seteo algo
			if(estilo)
				cambioEstilo(estilo);
			else{
				//Sino, pongo estilo 1 por defecto
				setObject('estilo',1);
				cambioEstilo(1);
			}
	    }
	});
}
