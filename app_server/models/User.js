const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    googleid: String,
    thumbnail: String,
    style:{
        type: Number,
        default: 1
    },
    admin:{
    	type: Number,
    	default: 0
    },
    password:{
        type: String,
        default: "1234"
    }
});

module.exports = mongoose.model('User', UserSchema)