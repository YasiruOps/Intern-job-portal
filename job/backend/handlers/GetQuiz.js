const { type } = require('os');
const McqCategory = require('../models/mcqcategory')

function GetQuiz(request, res){

    //search for usernme and pword

    const type = request.params.type;

    McqCategory.find({type}).then((name)=>{
                res.json(name)
            }).catch((err) =>{
                console.log(err)
            })
}
module.exports = GetQuiz;
