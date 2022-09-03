const Comment = require("../models/comment");

function CommentFetchHandler(request, response){
        const forumID = request.params.forumID;

        Comment.find({forumID}).then((comment)=>{  
        console.log(comment);
        return response.status(200).json(comment);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = CommentFetchHandler;