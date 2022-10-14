const Mcq = require('../models/mcq')

function AddMcqHandler(request, res){
    

    //search for usernme and pword

        const type = request.body.type;
        const name = request.body.name;
        const question = request.body.question;
        const answer = request.body.answer;
        const options = request.body.options;

        const mcq = new Mcq({
            type,
            name,
            question,
            answer,
            options
        })
    
    
        
    mcq.save((err) => {
        
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Mcq Added Successfully "
            })
        })
        

}
module.exports = AddMcqHandler;
