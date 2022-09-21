const Question = require("../models/employerContact")

function InternQuestionRemoveHandler(request, response) {
        let qID = request.params.id;

        Question.findOneAndDelete({_id:qID}).then(()=>{
            response.status(200).send({status:"question removed"})
        }).catch((err)=>{
            console.log(err.message);
            response.status(500).send({status:"Request failed to complete",err : err.message})
        })
}

module.exports = InternQuestionRemoveHandler;
