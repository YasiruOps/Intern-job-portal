"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CommentSchema = new Schema({
  forumID: {
    type: String
  },
  userID: {
    type: String
  },
  name: {
    type: String
  },
  comment: {
    type: String
  },
  image: {
    type: String
  }
});
var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;