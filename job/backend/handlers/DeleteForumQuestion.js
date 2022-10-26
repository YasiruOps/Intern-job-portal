const forumQuestion = require("../models/forumQuestion")
const Comment = require("../models/comment")

function DeleteForumQuestion(request, response) {
    console.log("meka wada");
    response.status(200).send;
        let jobID = request.params.id;
        console.log("req eka wada adoo")  
        forumQuestion.findOneAndDelete({_id:jobID}).then(()=>{ 
            Comment.deleteMany({forumID:jobID}).then(()=>{
                response.status(200).send({status:"comments and its applcations removed"})
            }).catch((err)=>{
                console.log(err.message);   
                response.status(500).send({status:"Request failed to complete",err : err.message})
            })    
        }).catch((err)=>{
            response.status(500).send({status:"Request failed to complete",err : err.message})
        })
}

module.exports = DeleteForumQuestion;