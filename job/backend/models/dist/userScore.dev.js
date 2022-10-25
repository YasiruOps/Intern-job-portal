"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userScoreSchema = new Schema({
  userID: {
    type: String
  },
  userName: {
    type: String
  },
  score: {
    type: Map
  },
  email: {
    type: String
  }
});
var userScore = mongoose.model("userScore", userScoreSchema);
module.exports = userScore;