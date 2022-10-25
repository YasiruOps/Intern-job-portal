const userScore = require('../models/userScore')

function compare(a, b){
    if ( a.sum < b.sum ){
        return 1;
      }
      if ( a.sum > b.sum ){
        return -1;
      }
      return 0;
}

function getScore(request, response){

    //search for usernme and pword

    const type = request.params.type;
    const scoreObj =[];

    userScore.find({
        // [`score.${type}`]: {
        //     "$exists": true
        // } 
        }).then((score)=>{  
            score.forEach(item => {

                const obj = item?.toObject({ flattenMaps: true });
                console.log("obj", obj) ;   
                console.log("iteeeee", item.userName) ; 
                if(obj.score[type]){
                    const obj1 = JSON.parse(obj.score[type]);
                    let sum =0;

                    for (const [key, value] of Object.entries(obj1)) {
                        sum += value;
                      }
                      scoreObj.push({userID:item.userID,userName:item.userName,sum,email:item.email});
                      console.log("scoreobject",scoreObj)
                }
            });

            scoreObj.sort(compare);

        console.log(score);
        return response.status(200).json(scoreObj);            
        }).catch((err) =>{
        console.log(err, "errrrr")
        response.status(500).json({msg:"Server Error"});
        })
}
module.exports = getScore;
