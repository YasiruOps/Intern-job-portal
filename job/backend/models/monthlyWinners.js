const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MonthlyWinnerSchema = new Schema({

    date:{
        type:String,
        required:true
    },

    winners:{
        type:[String],
        required:true
    }

});

const monthlyWinner = mongoose.model("monthlyWinner", MonthlyWinnerSchema);

module.exports = monthlyWinner;
