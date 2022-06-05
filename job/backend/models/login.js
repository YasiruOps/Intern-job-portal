const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LoginSchema = new Schema({

    Email : {
        type : String,
        required : true
    },

    Password : {
        type : String,
        required : true
    },

});


const login = mongoose.model("login", LoginSchema);

module.exports = login;
