const userScore = require('../models/userScore')
const User = require("../models/User")

async function AdduserScoreHandler(request, response){
    

        const userID = request.body.userID;
        let score = request.body.score;
        const type = request.body.type;
        const quiz = request.body.quiz;
        const user= request.body.userName;
        const email = request.body.email;
        const image = request.body.image;

        let values = {}

        try {
        
            const profile = await User.findOne({ _id: userID });
            const count = profile?.gamesplayed??0;

            await User.findByIdAndUpdate(userID, { gamesplayed: count+1 });

            const user = await userScore.findOne({userID});     

            const obj = user?.toObject({ flattenMaps: true });
            console.log("user type scoer", obj.score[type])     

            if (user && obj?.score[type]){
                values = JSON.parse(obj.score[type])
                console.log("values",values)
                if(values[quiz]&&score<values[quiz]){
                    score = values[quiz];
                }
            }
            
        } catch (error) {
            response.status(500)
        }

        score = JSON.stringify({...values,[quiz]:score})

        userScore.findOneAndUpdate({userID},
            {
                $set: {
                [`score.${type}`]: score,
                userName:user,
                email:email,
                image:image,
                }
            },{new: true, upsert: true}
            ).then((score)=>{  
            console.log("gellloo",score);
            return response.status(200).json(score);            
         }).catch((err) =>{
            console.log(err, "errrrr")
            response.status(500).json({msg:"Server Error"});
         })
        

}
module.exports = AdduserScoreHandler;
