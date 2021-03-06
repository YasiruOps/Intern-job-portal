const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const fs = require('fs');

let rawdata = fs.readFileSync('env.json');
let env = JSON.parse(rawdata);

const PORT = 8000;
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

//app midleware
app.use(bodyParser.json());
app.use(cors());

app.use("/mcq", mcqRoutes)
app.use("/auth", auth);
app.use("/category", mcqcategory);
