"use strict";

var forumQuestion = require("../models/forumQuestion");

var Comment = require("../models/comment");

function DeleteForumQuestion(request, response) {
  console.log("meka wada");
  response.status(200).send;
  var jobID = request.params.id;
  console.log("req eka wada adoo");
  forumQuestion.findOneAndDelete({
    _id: jobID
  }).then(function () {
    Comment.deleteMany({
      forumID: jobID
    }).then(function () {
      response.status(200).send({
        status: "comments and its applcations removed"
      });
    })["catch"](function (err) {
      console.log(err.message);
      response.status(500).send({
        status: "Request failed to complete",
        err: err.message
      });
    });
  })["catch"](function (err) {
    response.status(500).send({
      status: "Request failed to complete",
      err: err.message
    });
  });
}

module.exports = DeleteForumQuestion;