const { type } = require('os');
const McqCategory = require('../models/mcqcategory')

function McqTypeHandler(request, res){

    //search for usernme and pword

    McqCategory.find().distinct("type").then((type)=>{
                res.json(type)
            }).catch((err) =>{
                console.log(err)
            })
}
module.exports = McqTypeHandler;
