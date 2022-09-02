const fQuestion = require("../models/forumQuestion");

function AddForumQuestion(request, response) {
    //ADD
    const ownerID = request.body.ownerID;
    const type = request.body.type;
    const question = request.body.question;
    const description = request.body.description;
    const date = request.body.date;
    const time = request.body.time;
    const reacts = Number(request.body.reacts);
    
  
    const fquestion = new fQuestion({
      ownerID,
      type,
      question,
      description,
      date,
      time,
      reacts,
    });
  
    fquestion.save((err) => {
      if (err) {
        return response.status(400).json({
          error: err,
        });
      }
      return response.status(200).json({
        success: "Question Added Successfully ",
      });
    });
  }
  
  module.exports = AddForumQuestion;