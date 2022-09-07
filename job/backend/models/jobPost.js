const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobPostSchema = new Schema({

    title:{
        type:String,
    },
    location:{
        type:String,
    },
    contract : {
        type : String,
    },
    shiftTime: {
        type : String,
    },
    salary :{
        type : String,
    },
    vacancies :{
        type : String,
    },
    education :{
        type : String,
    },
    experience :{
        type : String,
    },
    additionalSkills :{
        type : String,
    },
    benefits :{
        type : String,
    },
    other :{
        type : String,
    },

});

const job = mongoose.model("job", JobPostSchema);

module.exports = job;
