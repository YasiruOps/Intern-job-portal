const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScoreSchema = new Schema({

    userID:{
        type:String,
    },

    userName:{
        type:String,
    },

    score : {
        type : Map,
    },
    email : {
        type : String
    },
    image : {
        type : String
    }




});

const userScore = mongoose.model("userScore", userScoreSchema);

module.exports = userScore;
