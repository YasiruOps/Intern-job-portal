const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const McqCategorySchema = new Schema({

    type:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    description : {
        type : String,
        required : true
    }


});

const mcqcategory = mongoose.model("mcqcategory", McqCategorySchema);

module.exports = mcqcategory;
