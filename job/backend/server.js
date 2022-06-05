const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//app midleware
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;
// const DB_URL = 'mongodb+srv://user:user@busapp.1dmsk.mongodb.net/bus?retryWrites=true&w=majority';
const DB_URL = 'mongodb+srv://yasi:yasi123@cluster0.ppwhecz.mongodb.net/?retryWrites=true&w=majority';

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