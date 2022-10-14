const User = require('../models/User')
var jwt = require('jsonwebtoken');

function LoginHandler(request, response){
    

    //search for usernme and pword

        const email = request.body.email;
        const password = request.body.password;

        User.findOne({email}).then((user)=>{  
            if(!user){
                return response.status(400).json({msg:"Email does not exist"});
            }
           
            if(user.password != password){
                return response.status(400).json({msg:"Incorrect password"})
            }

            // const token = jwt.sign({ foo:  }, 'shhhhh');
            console.log(user,"user")
            return response.status(200).json({user});

        }).catch((err) =>{
            response.status(500).json({msg:"Server Error"});
        })
        

}
module.exports = LoginHandler;
