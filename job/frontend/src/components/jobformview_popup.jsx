import React from "react";

export default function Jobformview_popup(props) {

  const { recordForEdit } = props;

  return (
    <div className="addjobform-comp">
      <p className="personaldetailsviepopup">Job Details</p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops ">Title</p>
          <p className="answerl2">{recordForEdit.title}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops ">Location</p>
          <p className="answerl2">{recordForEdit.location}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops ">Contract</p>
          <p className="answerl2">{recordForEdit.contract}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops ">Shift time </p>
          <p className="answerl2">{recordForEdit.shiftTime}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops ">Salary</p>
          <p className="answerl2">{recordForEdit.salary}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops ">Vacancies</p>
          <p className="answerl2">{recordForEdit.vacancies}</p>
        </div>
      </div>

      <hr className="dividerpopupaddform2" />

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops ">Education</p>
          <p className="answerl2">{recordForEdit.education}</p>
        </div>
        <div className="col-6">
          <p className="titlestagpops ">Experience</p>
          <p className="answerl2">{recordForEdit.experience}</p>
        </div>
      </div>

      <p className="" style={{fontWeight:"500"}}>Additional skills</p>
      <p className="answerl2 lineheightoff">
       {recordForEdit.additionalSkills}
      </p>

      <hr className="dividerpopupaddform2" />

      <p className="" style={{fontWeight:"500"}}>Benefits</p>
      <p className="answerl2 lineheightoff">
      {recordForEdit.benefits}
      </p>

      <p className="" style={{fontWeight:"500"}}>Other</p>
      <p className="answerl2 lineheightoff">
      {recordForEdit.other}
      </p>

      <hr className="dividerpopupaddform2" />


    </div>
  );
}
