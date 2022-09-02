const fQuestion = require("../models/forumQuestion");

function ForumQuestionFetch(request, response){
        fQuestion.find().then((question)=>{  
        console.log(question);
        return response.status(200).json(question);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = ForumQuestionFetch;
