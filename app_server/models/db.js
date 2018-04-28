const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/complejos';
mongoose.connect(dbURI);

const canchaSchema = new mongoose.Schema({
	id:{
		type: String,
		required: true
	},
	tamanio:{
		type: String,
		required: true
	},
	material:{
		type: String,
		required: true
	}
});

const comentarioSchema = new mongoose.Schema({
	nombre:{
		type: String,
		required: true
	},
	contenido:{
		type: String,
		required: true
	}
});

const complejoSchema = new mongoose.Schema({
	id:{
		type: String,
		required: true
	},
	nombre:{
		type: String,
		required: true
	},
	direccion:{
		type: String,
		required: true
	},
	coordenadas:{
		type: [String],
		required: true
	},
	telefono:{
		type: String,
		required: true
	},
	horarios:{
		type:[String],
		required: true
	},
	canchas:{
		type: [canchaSchema],
		required: true
	},
	comentarios: [comentarioSchema]
});

mongoose.model('Complejo', complejoSchema)