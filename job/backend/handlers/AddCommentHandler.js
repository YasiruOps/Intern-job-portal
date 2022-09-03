const Comment = require("../models/comment")

function AddCommentHandler(request, response) {
  //ADD
  const forumID = request.body.forumID;
  const userID = request.body.userID;
  const name = request.body.name;
  const comment = request.body.comment;

  const newComment = new Comment({
    forumID,
    userID,
    name,
    comment,
  });

  newComment.save((err) => {
    if (err) {
      return response.status(400).json({
        error: err,
      });
    }
    return response.status(200).json({
      success: "Comment Added Successfully ",
    });
  });
}

module.exports = AddCommentHandler;
