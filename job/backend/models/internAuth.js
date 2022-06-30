const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthSchema = new Schema({

    Email : {
        type : String,
        required : true
    },

    Password : {
        type : String,
        required : true
    },

});


const auth = mongoose.model("auth", AuthSchema);

module.exports = auth;
