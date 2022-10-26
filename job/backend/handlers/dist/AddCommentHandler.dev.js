"use strict";

var Comment = require("../models/comment");

function AddCommentHandler(request, response) {
  //ADD
  var forumID = request.body.forumID;
  var userID = request.body.userID;
  var name = request.body.name;
  var comment = request.body.comment;
  var image = request.body.image;
  var newComment = new Comment({
    forumID: forumID,
    userID: userID,
    name: name,
    comment: comment,
    image: image
  });
  newComment.save(function (err) {
    if (err) {
      return response.status(400).json({
        error: err
      });
    }

    return response.status(200).json({
      success: "Comment Added Successfully "
    });
  });
}

module.exports = AddCommentHandler;