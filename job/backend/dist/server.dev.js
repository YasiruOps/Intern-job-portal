"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors');

var dotenv = require("dotenv");

dotenv.config();

var DeleteLeaderbordHandler = require("./handlers/clearLeaderboardHandler"); //file upload ekata sambandai


var fileupload = require("express-fileupload");

var app = express();

var path = require('path');

app.use('/static', express["static"](path.join(__dirname, 'uploads')));

var fs = require('fs');

var rawdata = fs.readFileSync('env.json');
var env = JSON.parse(rawdata);
var PORT = 8000; // const DB_URL = 'mongodb+srv://user:user@busapp.1dmsk.mongodb.net/bus?retryWrites=true&w=majority';

var DB_URL = env.url;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("----------------- DB connectd Sucessfully ! -----------------");
})["catch"](function (err) {
  console.log("DB connection error", err.message);
});
app.listen(PORT, function () {
  console.log("App is running on port ".concat(PORT));
}); //cron to reset leaderboard each month

var cron = require('node-cron');

cron.schedule('* * 1 * * ', function () {
  DeleteLeaderbordHandler();
}); //import Routes

var auth = require('./routes/auth');

var mcqRoutes = require('./routes/mcq');

var mcqcategory = require('./routes/mcqcategory');

var forumQuestion = require("./routes/forumQuestion");

var employerContact = require("./routes/employerContact");

var employerRegister = require("./routes/employerauth");

var comment = require('./routes/comment');

var userScore = require("./routes/userScore");

var jobs = require("./routes/jobs");

var application = require("./routes/application");

var uploadpdf = require("./routes/uploadpdf");

var mediaRoutes = require("./routes/media"); //dilaa routes


var userRoute = require("./routes/user");

var uploadPhoto = require("./routes/upload"); //app midleware


app.use(bodyParser.json());
app.use(cors());
app.use(fileupload({
  createParentPath: true,
  useTempFiles: true
}));
app.use("/mcq", mcqRoutes);
app.use("/auth", auth);
app.use("/category", mcqcategory);
app.use("/ForumQuestionFetch", forumQuestion);
app.use("/employerContact", employerContact);
app.use("/employerRegister", employerRegister);
app.use('/comment', comment);
app.use("/userScore", userScore);
app.use("/jobs", jobs);
app.use("/application", application);
app.use("/uploadpdf", uploadpdf);
app.use("/api/v1/media", mediaRoutes);
app.use("/public", express["static"](path.join(__dirname, "public"))); //dilaa
//routes
// readdirSnc("./routes").map((r) => app.use("/", require("./routes/" + r)));

app.use("/api/users", userRoute); // app.use("/api/post", uploadPost);

app.use("/api/photoupload", uploadPhoto); // app.use("/api/react", postReact);
//database