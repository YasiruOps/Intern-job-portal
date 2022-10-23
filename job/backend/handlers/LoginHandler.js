const User = require('../models/User')
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

 function LoginHandler(request, response){
    

    //search for usernme and pword

        const email = request.body.email;
        const password = request.body.password;

        User.findOne({email}).then(async(user)=>{  
            
            if(!user){
                console.log("login eka wada");
                return response.status(400).json({msg:"Email does not exist"});
            }
            const cryptedPassword = await bcrypt.compare(password, user.password);
            if(!cryptedPassword){
                console.log("userpass",user.password, "crypted pass", cryptedPassword);
                return response.status(400).json({msg:"Incorrect password"})
            }

            // const token = jwt.sign({ foo:  }, 'shhhhh');
            console.log(user,"user");
            return response.status(200).json({user});

        }).catch((err) =>{
            response.status(500).json({msg:"Server Error"});
        })
        

}
module.exports = LoginHandler;
