const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forumQuestionSchema = new Schema({

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
        type : Number,
    }


});


const forumQuestion = mongoose.model("forumQuestion", forumQuestionSchema);

module.exports = forumQuestion;
