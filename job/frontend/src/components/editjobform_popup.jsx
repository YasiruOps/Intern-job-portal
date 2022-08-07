import React from "react";
import "../CSS/editjobform_popup.css";

export default function editjobform_popup() {
  return (
    <div className="addjobform-comp">
      <p className="personaldetailsviepopup">Personal Details</p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Title</p>
          <input
            type="text"
            id="fname"
            name="fname"
            defaultValue="Junior Developer"
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Location</p>
          <input
            type="text"
            id="fname"
            name="fname"
            defaultValue="Malabe"
            className="form-control addformtextinput"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Contract</p>
          <input
            type="text"
            id="fname"
            name="fname"
            defaultValue="Full time or part time"
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Shift time </p>
          <input
            type="text"
            id="fname"
            name="fname"
            defaultValue="9 to 4"
            className="form-control addformtextinput"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Salary</p>
          <input
            type="text"
            id="fname"
            name="fname"
            defaultValue="Negotiable"
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Vacancies</p>
          <input
            type="text"
            id="fname"
            name="fname"
            defaultValue="7"
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
            id="fname"
            name="fname"
            defaultValue="High School Diploma or Equivalent"
            className="form-control addformtextinput"
          />
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Experience</p>
          <input
            type="text"
            id="fname"
            name="fname"
            defaultValue="2 years of field experience"
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
        defaultValue="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></textarea>

      <hr className="dividerpopupaddform2" />

      <p className="replyfromdesc">Benefits</p>
      <textarea
        className="form-control addjobforminput"
        id="exampleFormControlTextarea1"
        rows="3"
        defaultValue="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></textarea>

      <p className="replyfromdesc">Other</p>
      <textarea
        className="form-control addjobforminput"
        id="exampleFormControlTextarea1"
        rows="3"
        defaultValue="Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></textarea>

      <hr className="dividerpopupaddform2" />

      <div className="addfrormpopupbtn-box">
        <button
          type="button"
          className="btn btn-warning "
          style={{ color: "white", width: "150px" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
