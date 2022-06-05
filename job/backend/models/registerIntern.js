const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({

    Email : {
        type : String,
        required : true
    },

    Password : {
        type : String,
        required : true
    },

});


const register = mongoose.model("register", RegisterSchema);

module.exports = register;
