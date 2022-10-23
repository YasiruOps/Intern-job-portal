importconst Comments = require("../models/comment")

function EditCommentHandler(request, response){
        const _id = request.params.id;
    
        Comments.findByIdAndUpdate(_id, request.body).then(()=>{
            response.status(200).send({status:"Comment updated sucessfully"})
        }).catch((err)=>{
            response.status(500).send({status:"Error with updating comment"})
        })
    }

module.exports = EditCommentHandler;