"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var forumQuestionSchema = new Schema({
  ownerID: {
    type: String
  },
  type: {
    type: [String]
  },
  question: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
  reacts: {
    type: [String]
  },
  image: {
    type: String
  }
});
var forumQuestion = mongoose.model("forumQuestion", forumQuestionSchema);
module.exports = forumQuestion;