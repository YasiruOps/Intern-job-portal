const userScore = require('../models/userScore')

async function AdduserScoreHandler(request, response){
    

        const userID = request.body.userID;
        let score = request.body.score;
        const type = request.body.type;
        const quiz = request.body.quiz;
        const user= request.body.userName;

        let values = {}

        try {
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
