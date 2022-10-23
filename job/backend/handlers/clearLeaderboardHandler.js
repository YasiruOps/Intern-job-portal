const userScore = require("../models/userScore");
const monthlyWinnerSchema = require("../models/monthlyWinners");
const getScore = require("./FetchuserScoreHandler");
const monthlyWinner = require("../models/monthlyWinners");
const moment = require("moment");
const User = require("../models/User");
const { find } = require("../models/userScore");

const type = ["cs", "it", "science"];

function compare(a, b) {
  if (a.sum < b.sum) {
    return 1;
  }
  if (a.sum > b.sum) {
    return -1;
  }
  return 0;
}

async function updateProfile(payload, i) {
    console.log("payload",payload)
  const user = await User.findOne({ _id: payload.userID });

  const awards = user?.medals ?? [];
  awards.push(
    JSON.stringify({ date: moment().format("YYYY/MM/DD"), type: payload.type, rank:i+1 })
  );

  await User.findByIdAndUpdate(payload.userID, { medals: awards });
}

async function getWinners(type) {
  const scoreObj = [];

  const score = await userScore.find({});
  score.forEach((item) => {
    const obj = item?.toObject({ flattenMaps: true });

    if (obj.score[type]) {
      const obj1 = JSON.parse(obj.score[type]);
      let sum = 0;

      for (const [key, value] of Object.entries(obj1)) {
        sum += value;
      }
      scoreObj.push({
        userID: item.userID,
        userName: item.userName,
        sum,
        type,
      });
      console.log("scoreobject", scoreObj);
    }
  });

  scoreObj.sort(compare);

  console.log(score);

  const slicy = scoreObj.slice(0, 3);
  await Promise.all(slicy.map(updateProfile));

  return JSON.stringify(slicy);
}

async function DeleteLeaderbordHandler(request, response) {
  const winners = type.map(getWinners);
  const result = await Promise.all(winners);

  payload = new monthlyWinner({
    date: moment().format("YYYY/MM/DD"),
    winners: result,
  });

  await payload.save();

  await userScore.collection.drop();
  if(response){
    response.status(200).send();
  }
}

module.exports = DeleteLeaderbordHandler;
