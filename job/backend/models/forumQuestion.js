const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forumQuestionSchema = new Schema({

    ownerID : {
        type : String,
    },

    type : {
        type : [String],
    },

    question : {
        type : String,
    },

    description : {
        type : String,
    },

    date : {
        type : String,
    },

    time : {
        type : String,
    },

    reacts : {
        type : [String],
    },

    image : {
        type : String,
    }



});


const forumQuestion = mongoose.model("forumQuestion", forumQuestionSchema);

module.exports = forumQuestion;
