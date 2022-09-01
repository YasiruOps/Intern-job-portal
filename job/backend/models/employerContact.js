const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employerContactSchema = new Schema({

    empname : {
        type : [String],
    },

    name : {
        type : String,
    },

    email : {
        type : String,
    },

    qtype : {
        type : [String],
    },

    desc : {
        type : String,
    },

    date2 : {
        type : String,
    },

});


const employerContact = mongoose.model("employerContact", employerContactSchema);

module.exports = employerContact;
