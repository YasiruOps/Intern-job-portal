const { type } = require('os');
const McqCategory = require('../models/mcqcategory')

function McqNameHandler(request, res){

    //search for usernme and pword

    const type = request.params.type;

    McqCategory.find({type}).distinct("name").then((name)=>{
                res.json(name)
            }).catch((err) =>{
                console.log(err)
            })
}
module.exports = McqNameHandler;
