import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/editjobform_popup.css";
import { useSelector, useDispatch } from "react-redux";

export default function Editjobform_popup(props) {

  const {recordForEdit} = props;  
  const id = useSelector((state) => state.auth.employerid);

  const initialState = {
    title: recordForEdit.title,
    location: recordForEdit.location,
    contract: recordForEdit.contract,
    shiftTime: recordForEdit.shiftTime,
    salary: recordForEdit.salary,
    vacancies:recordForEdit.vacancies,
    education:recordForEdit.education,
    experience:recordForEdit.experience,
    additionalSkills:recordForEdit.additionalSkills,
    benefits:recordForEdit.benefits,
    other:recordForEdit.other,
  };

  const [job, setJob] = useState(initialState);

  function ChangeValue(key,value){
    setJob({...job,[key]:value})
  }

  function EditSubmit(){
    axios
    .put(`http://localhost:8000/jobs/update/${recordForEdit._id}`,job)
    .then((response) => {
        // alert("sucussfully updated"); 
         axios
        .get(`http://localhost:8000/jobs/${id}`)
        .then((res) => {
          const data = res.data;
          props.setJobs(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    })
    .catch((err) => {
    });
    props.setOpenPopup3(false)
  };



  return (
    <div className="addjobform-comp">
      <p className="personaldetailsviepopup">Personal Details</p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Title</p>
          <input
            type="text"
            name="title"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={job.title}
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Location</p>
          <input
            type="text"
            name="location"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={job.location}
            className="form-control addformtextinput"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Contract</p>
          <input
            type="text"
            name="contract"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={job.contract}
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Shift time </p>
          <input
            type="text"
            name="shiftTime"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={job.shiftTime}
            className="form-control addformtextinput"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Salary</p>
          <input
            type="text"
            name="salary"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={job.salary}
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Vacancies</p>
          <input
            type="text"
            name="vacancies"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={job.vacancies}
            className="form-control addformtextinput"
          />
        </div>
      </div>

      <hr className="dividerpopupaddform2" />

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Education</p>
          <input
            type="text"
            name="education"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)} 
            value={job.education}
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Experience</p>
          <input
            type="text"
            name="experience"
            onChange={(e)=>ChangeValue(e.target.name, e.target.value)}
            value={job.experience}
            className="form-control addformtextinput"
          />
        </div>
      </div>

      <p className="replyfromdesc">Additional skills</p>
      <textarea
        className="form-control addjobforminput "
        style={{ backgroundColor: "#F2F8FE", border: "none" }}
        id="exampleFormControlTextarea1"
        rows="3"
        name="additionalSkills"
        onChange={(e)=>ChangeValue(e.target.name, e.target.value)}
        value={job.additionalSkills}
      />

      <hr className="dividerpopupaddform2" />

      <p className="replyfromdesc">Benefits</p>
      <textarea
        className="form-control addjobforminput"
        id="exampleFormControlTextarea1"
        rows="3"
        name="benefits"
        onChange={(e)=>ChangeValue(e.target.name, e.target.value)}
        defaultValue={job.benefits}
      />

      <p className="replyfromdesc">Other</p>
      <textarea
        className="form-control addjobforminput"
        id="exampleFormControlTextarea1"
        rows="3"
        name="other"
        onChange={(e)=>ChangeValue(e.target.name, e.target.value)}
        defaultValue={job.other}
      />

      <hr className="dividerpopupaddform2" />

      <div className="addfrormpopupbtn-box">
        <button
          type="button"
          className="btn btn-warning "
          style={{ color: "white", width: "150px" }}
          onClick={EditSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
