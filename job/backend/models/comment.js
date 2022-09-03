const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    forumID:{
        type:String,
    },
    
    userID:{
        type:String,
    },

    name:{
        type:String,
    },

    comment : {
        type : String,
    },

});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
