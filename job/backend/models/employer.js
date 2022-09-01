const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployerSchema = new Schema({

    email:{
        type:String,
        required:true
    },

    displayname:{
        type:String,
        required:true
    },

    password : {
        type : String,
        required : true
    },

    registrationID : {
        type : String,
        required : true
    },

    compname :{
        type: String,
        required : true
    },
    contact :{
        type: String,
        required : true
    },
    address :{
        type: String,
        required : true
    }

});

const Employer = mongoose.model("Employer", EmployerSchema);

module.exports = Employer;
