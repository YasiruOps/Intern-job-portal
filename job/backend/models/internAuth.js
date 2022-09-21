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

    fName:{
        type:String,
        required:true
    },

    lName:{
        type:String,
        required:true
    },

    dob : {
        type : String,
        required : true
    },

    phone : {
        type : Number,
        required : true
    },
    address :{
        type: String,
        required : true
    }


});


const auth = mongoose.model("auth", AuthSchema);

module.exports = auth;
