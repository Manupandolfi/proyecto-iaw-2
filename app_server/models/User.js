const mongoose = require('mongoose');
//var passportLocalMongoose = require('passport-local-mongoose');

/*const UserSchema = new mongoose.Schema({
    username: String,
    email:{
    	type: String,
    	unique: true
    },
    password: String,
    name: String,
    style:{
    	type: Number,
    	default: 1
    },
    google: {
    	id: String,
    	token: String,
    	email: String,
    	name: {firstName:String, lastName:String}
    }
});
*/
//UserSchema.plugin(passportLocalMongoose, {selectFields: "username email"});

const UserSchema = new mongoose.Schema({
    username: String,
    googleid: String,
    thumbnail: String
});

module.exports = mongoose.model('User', UserSchema)