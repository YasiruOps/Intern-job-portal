const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({

    // fname:{
    //     type:String,
    // },
    
    // lname:{
    //     type:String,
    // },

    // bday:{
    //     type:String,
    // },

    // phone : {
    //     type : String,
    // },
    // email : {
    //     type : String,
    // },
    // address : {
    //     type : String,
    // },
    offerTitle : {
        type : String,
    },
    internID : {
        type : String,
    },
    employerID : {
        type : String,
    },
    pdfID : {
        type : String,
    },
    applicationStatus : {
        type : String,
    },


    experience : {
        type : String,
    },
    refname:{
        type:String,
    },
    refBday:{
        type:String,
    },
    refPhone:{
        type:String,
    },
    refAddress:{
        type:String
    },
    refEmail:{
        type:String,
    },
    date:{
        type:String,
    }

});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
