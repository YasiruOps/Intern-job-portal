const forumQuestions = require("../models/forumQuestion")

function EditForumQuestionHandler(request, response){
        const _id = request.params.id;
    
        forumQuestions.findByIdAndUpdate(_id, {question:request.body.question, description:request.body.description}).then(()=>{
            response.status(200).send({status:"Comment updated sucessfully"})
        }).catch((err)=>{
            response.status(500).send({status:"Error with updating comment"})
        })
    }

module.exports = EditForumQuestionHandler;

