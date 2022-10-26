"use strict";

var fQuestion = require("../models/forumQuestion");

function AddForumQuestion(request, response) {
  //ADD
  var ownerID = request.body.ownerID;
  var type = request.body.type;
  var question = request.body.question;
  var description = request.body.description;
  var date = request.body.date;
  var time = request.body.time;
  var image = request.body.image;
  var reacts = Number(request.body.reacts);
  var fquestion = new fQuestion({
    ownerID: ownerID,
    type: type,
    question: question,
    description: description,
    date: date,
    time: time,
    image: image,
    reacts: reacts
  });
  fquestion.save(function (err) {
    if (err) {
      return response.status(400).json({
        error: err
      });
    }

    return response.status(200).json({
      success: "Question Added Successfully "
    });
  });
}

module.exports = AddForumQuestion;