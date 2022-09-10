const Job = require("../models/jobPost")

function AddJobsHandler(request, response) {
  //ADD
  const empID = request.body.empID;
  const title = request.body.title;
  const location = request.body.location;
  const contract = request.body.contract;
  const shiftTime = request.body.shiftTime;
  const salary =  request.body.salary;
  const vacancies = request.body.vacancies;
  const education = request.body.education;
  const experience = request.body.experience;
  const additionalSkills = request.body.additionalSkills;
  const benefits = request.body.benefits;
  const other = request.body.other;
  const date = request.body.date;


  const payload = new Job({
    empID,
    title,
    location,
    contract,
    shiftTime,
    salary,
    vacancies,
    education,
    experience,
    additionalSkills,
    benefits,
    other,
    date,
  });

  payload.save((err) => {
    if (err) {
      return response.status(400).json({
        error: err,
      });
    }
    return response.status(200).json({
      success: "Job Post Added Successfully ",
    });
  });
}

module.exports = AddJobsHandler;
