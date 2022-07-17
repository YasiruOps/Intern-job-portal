const { type } = require('os');
const Mcq = require('../models/mcq')

function McqHandler(request, res){
    

    //search for usernme and pword

const type =request.query.type
const name = request.query.name
    console.log("ssssssss",name,type)
            Mcq.find({name,type}).then((question)=>{
                console.log(question,"sllllllllll")
                res.json(question)
            }).catch((err) =>{
                console.log(err)
            })
 
}
module.exports = McqHandler;
