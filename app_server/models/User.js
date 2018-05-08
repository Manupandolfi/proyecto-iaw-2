const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    googleid: String,
    thumbnail: String,
    style:{
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('User', UserSchema)