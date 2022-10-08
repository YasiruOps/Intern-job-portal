const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//file upload ekata sambandai
const fileupload = require("express-fileupload") ;

const app = express();

const fs = require('fs');

let rawdata = fs.readFileSync('env.json');
let env = JSON.parse(rawdata);

const PORT = 8001;
// const DB_URL = 'mongodb+srv://user:user@busapp.1dmsk.mongodb.net/bus?retryWrites=true&w=majority';
const DB_URL = env.url;

mongoose.connect(DB_URL,{
    useNewUrlParser :true,
    useUnifiedTopology : true  
})

.then(()=>{
    console.log(`----------------- DB connectd Sucessfully ! -----------------`)
}).catch((err)=>{
    console.log(`DB connection error`, err.message)
})

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
});


//import Routes
const auth = require('./routes/auth');
const mcqRoutes = require('./routes/mcq')
const mcqcategory = require('./routes/mcqcategory')
const forumQuestion = require("./routes/forumQuestion")
const employerContact = require("./routes/employerContact")
const employerRegister =require("./routes/employerauth")
const comment = require('./routes/comment')
const userScore = require("./routes/userScore")
const jobs = require("./routes/jobs")
const application = require("./routes/application")
const uploadpdf = require("./routes/uploadpdf")

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use(
    fileupload({
        createParentPath: true,
    }),
);


app.use("/mcq", mcqRoutes)
app.use("/auth", auth);
app.use("/category", mcqcategory);
app.use("/ForumQuestionFetch",forumQuestion);
app.use("/employerContact",employerContact);
app.use("/employerRegister",employerRegister);
app.use('/comment',comment);
app.use("/userScore",userScore);
app.use("/jobs",jobs);
app.use("/application",application);
app.use("/uploadpdf",uploadpdf);