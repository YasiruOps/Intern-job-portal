import React from "react";
import "../CSS/addjobform_popup.css";

export default function addjobform_popup() {
  return (
    <div className="addjobform-comp">
      <p className="personaldetailsviepopup">Personal Details</p>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Title</p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Location</p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Contract</p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Shift time </p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Salary</p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Vacancies</p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
      </div>

      <hr className='dividerpopupaddform'/>

      
      <div className="row">
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Education</p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
        <div className="col-6">
          <p className="titlestagpops addformtextlabel">Experience</p>
          <input type="text" id="fname" name="fname" className="form-control addformtextinput"/>
        </div>
      </div>

      <p className="replyfromdesc">Additional skills</p>
          <textarea
            className="form-control addjobforminput "
            style={{backgroundColor:"#F2F8FE", border:"none"}}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>

<hr className='dividerpopupaddform'/>

<p className="replyfromdesc">Benefits</p>
          <textarea
            className="form-control addjobforminput"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>

<p className="replyfromdesc">Other</p>
          <textarea
            className="form-control addjobforminput"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>

      <hr className='dividerpopupaddform'/>

<div className="addfrormpopupbtn-box">
      <button type="button" class="btn btn-success addfrormpopupbtn">Submit</button>
      </div>
    </div>
  );
}
