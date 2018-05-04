const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const dbURI = 'mongodb://localhost/complejos';
mongoose.connect(dbURI)
	.then(() =>  console.log('connection succesful'))
	.catch((err) => console.error(err));;


const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String
});

UserSchema.plugin(passportLocalMongoose);

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

module.exports = mongoose.model('User', UserSchema);
mongoose.model('Complejo', complejoSchema);
