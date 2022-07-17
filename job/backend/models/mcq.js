const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const McqSchema = new Schema({

    type:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    question : {
        type : String,
        required : true
    },

    answer : {
        type : Number,
        required : true
    },

    options :{
        type: [String],
        required : true
    }

});

const mcq = mongoose.model("mcq", McqSchema);

module.exports = mcq;
