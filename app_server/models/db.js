const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const dbURI = process.env.MLAB_URI;
mongoose.connect(dbURI)
	.then(() =>  console.log('connection succesful'))
	.catch((err) => console.error(err));

mongoose.Promise = global.Promise;
