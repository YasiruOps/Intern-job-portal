import React, { useState } from "react";
import "../CSS/addjobform_popup.css";
import axios from "axios";

export default function Addjobform_popup() {
 
    const [title,setTitle] = useState("");
    const [location,setLocation] = useState("");
    const [contract, setContract] = useState("");
    const [shiftTime, setShifttime] = useState("");
    const [salary, setSalary] = useState("");
    const [vacancies, setVacancies] = useState("");
    const [education, setEducation] = useState("");
    const [experience, setExperience] = useState("");
    const [additionalSkills, setAdditionalskills] = useState("");
    const [benefits, setBenefits] = useState("");
    const [other,setOther] = useState("");

    const payload = {
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
    }

  function AddPost() {
    axios
    .post("http://localhost:8000/jobs/", payload)
    .then(() => {
      alert("Job posted succesfully")
    })
    .catch((err) => {
      alert(err);
    });
  };  

  return (
    <div className="addjobform-comp">
      <p className="personaldetailsviepopup">Personal Details</p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Title</p>
          <input
            type="text"
            id="fname"
            value={title}
            className="form-control addformtextinput"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Location</p>
          <input
            type="text"
            id="fname"
            value={location}
            className="form-control addformtextinput"
            onChange={(e)=>setLocation(e.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Contract</p>
          <input
            type="text"
            id="fname"
            value={contract}
            className="form-control addformtextinput"
            onChange={(e)=>setContract(e.target.value)} 
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Shift time </p>
          <input
            type="text"
            id="fname"
            value={shiftTime}
            className="form-control addformtextinput"
            onChange={(e)=>setShifttime(e.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Salary</p>
          <input
            type="text"
            id="fname"
            value={salary}
            className="form-control addformtextinput"
            onChange={(e)=>setSalary(e.target.value)} 
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Vacancies</p>
          <input
            type="text"
            id="fname"
            value={vacancies}
            className="form-control addformtextinput"
            onChange={(e)=>setVacancies(e.target.value)} 
          />
        </div>
      </div>

      <hr className="dividerpopupaddform" />

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Education</p>
          <input
            type="text"
            id="fname"
            value={education}
            className="form-control addformtextinput"
            onChange={(e)=>setEducation(e.target.value)} 
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Experience</p>
          <input
            type="text"
            id="fname"
            value={experience}
            className="form-control addformtextinput"
            onChange={(e)=>setExperience(e.target.value)} 
          />
        </div>
      </div>

      <p className="replyfromdesc">Additional skills</p>
      <textarea
        className="form-control addjobforminput "
        style={{ backgroundColor: "#F2F8FE", border: "none" }}
        id="exampleFormControlTextarea1"
        rows="3"
        value={additionalSkills}
        onChange={(e)=>setAdditionalskills(e.target.value)} 
      />

      <hr className="dividerpopupaddform" />

      <p className="replyfromdesc">Benefits</p>
      <textarea
        className="form-control addjobforminput"
        id="exampleFormControlTextarea1"
        rows="3"
        value={benefits}
        onChange={(e)=>setBenefits(e.target.value)} 
      />

      <p className="replyfromdesc">Other</p>
      <textarea
        className="form-control addjobforminput"
        id="exampleFormControlTextarea1"
        rows="3"
        value={other}
        onChange={(e)=>setOther(e.target.value)} 
      />

      <hr className="dividerpopupaddform" />

      <div className="addfrormpopupbtn-box">
        <button type="button" class="btn btn-success addfrormpopupbtn" onClick={AddPost}>
          Submit
        </button>
      </div>
    </div>
  );
}
