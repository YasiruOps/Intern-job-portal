const forumQuestions = require("../models/forumQuestion")

async function ForumReactHandler(request, response){
        const userID = request.body.userID;
        const action = request.body.action;
        const _id = request.body.id;


        const result = await forumQuestions.findOne({_id})
        console.log("resulr", result)
        const userAction = result?.reacts?.filter((item)=>{
            
            const tempval = JSON.parse(item)
            
            if(tempval.userID == userID){
                console.log("iteeeee", item, "tempval", tempval)
                return tempval;
            }     
        })
        console.log("jjjjj", userAction)
        console.log("userid", userID, "action", action)
        if(!userAction?.length){
            console.log("if eka wada")
            await forumQuestions.findByIdAndUpdate(_id, {reacts:[...result.reacts, JSON.stringify({userID, action})]  })
            return response.status(200).send();
        }
        

        if(userAction.action == "+" && action == "+"){
            return response.status(200).send();
        }
        if(userAction.action == "-" && action == "-"){
            return response.status(200).send();
        }

        const UnchangedData = result?.reacts?.filter((item)=>{
            const tempval = JSON.parse(item)
            if(tempval.userID != userID){
                return tempval;
            }     
        })

        const tempory = JSON.parse(userAction)

        tempory.action = action;
        console.log("usrac", tempory)
        console.log("unchanged", UnchangedData)
        UnchangedData.push(JSON.stringify(tempory));
        

        await forumQuestions.findByIdAndUpdate(_id, {reacts:UnchangedData})
        response.status(200).send();
        

        
    }

module.exports = ForumReactHandler;
