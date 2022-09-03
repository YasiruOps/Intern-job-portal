const Comment = require("../models/comment")

function DeleteCommentHandler(request, response) {
        let commentID = request.params.id;
    
console.log("sssssss")

        Comment.findOneAndDelete({_id:commentID}).then((cus)=>{
            response.status(200).send({status:"comment removed"})
        }).catch((err)=>{
            console.log(err.message);
            response.status(500).send({status:"Request didnt complete",err : err.message})
        })
}

module.exports = DeleteCommentHandler;
