const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const dbURI = 'mongodb://localhost/complejos';
mongoose.connect(dbURI)
	.then(() =>  console.log('connection succesful'))
	.catch((err) => console.error(err));;