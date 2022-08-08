import React from "react";
import Header from "./header";
import "../CSS/Resumebuilderform.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

import { AiFillEdit } from "react-icons/ai";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";

export default function Resumebuilderform() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="row">
      <Header />
      <div className="col-7 Rbuilder-form">
        <p className="resumebuil-header">Resume Builder</p>
        <hr className="resumebuilhr" />

        <div className="lightheader" style={{ display: "flex" }}>
          <p className="R1">Resume 1</p>
          <AiFillEdit className="R1icon" />
        </div>

        <div className="reumeformdata ">
          <p className="persodeta-tag">Personal Details</p>
          <p className="persodeta-tad-smal">
            Fill the blanks below with your details
          </p>

          <div className="RformlineB1 row">
            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Title</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformright col-md-6">
              <div style={{ display: "flex" }}>
                <MdOutlineAddPhotoAlternate className="uploadpicicon" />
                <p className="uphoto-tag">Upload photo</p>
              </div>
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">First Name</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Other Names</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Family Name</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">E-mail</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Phone</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Country</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">City</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Address</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Date of birth</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Nationality</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Postal code</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-md-6">
              <p className="titlestagpops2 addformtextlabel">Gender</p>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control Rforminputs"
              />
            </div>

            <div className="Rformleft col-12">
              <div className="codedetacover">
                <p className="addetailhidebtn">Hide additional details</p>
                <IoIosArrowDropup className="addetailhidebtnicon" />
              </div>
            </div>

            <div className="col-12">
              <p className="persodeta-tag">Professional Summary</p>
              <p className="replyformdesc2">
                Give a brief idea about you what your are looking for , how
                experienced you are.
              </p>
              <textarea
                className="form-control replyforminput"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div className="col-12">
              <p className="persodeta-tag">Employement</p>
              <p className="replyformdesc2">
                Provide your employment history below{" "}
              </p>
            </div>

            <div className="smallcoverRform row">
              <div className="col-12">
                <p className="persodetajtit-tag">(Job Title)</p>
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">Postal code</p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">Gender</p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>
              <div className="Rformleft col-xl-2">
                <p className="titlestagpops2 addformtextlabel">Start Date</p>
                <DatePicker
                  className="Rdatepicker"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>

              <div className="Rformleft col-xl-4">
                <p className="titlestagpops2 addformtextlabel">End Date</p>
                <DatePicker
                  className="Rdatepicker"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">City</p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>

              <div className="col-12">
                <p className="" style={{ marginBottom: "-8px" }}>
                  Description of work
                </p>
                <p className="replyformdesc2"></p>
                <textarea
                  className="form-control replyforminput"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="Rformleft col-12">
              <div className="codedetacover">
                <GrAddCircle className="admoreicon" />
                <p className="addmore-tag">Add more employment</p>
              </div>
            </div>

            <div className="col-12">
              <p className="persodeta-tag">Education</p>
              <p className="replyformdesc2">
                Good educations qualification adds up value to your resume{" "}
              </p>
            </div>

            <div className="smallcoverRform row">
              <div className="col-12">
                <p className="persodetajtit-tag">(Place of education)</p>
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">
                  Place of education
                </p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">
                  Degree/ level of education
                </p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>
              <div className="Rformleft col-xl-2">
                <p className="titlestagpops2 addformtextlabel">Start Date</p>
                <DatePicker
                  className="Rdatepicker"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>

              <div className="Rformleft col-xl-4">
                <p className="titlestagpops2 addformtextlabel">End Date</p>
                <DatePicker
                  className="Rdatepicker"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">City</p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>

              <div className="col-12">
                <p className="" style={{ marginBottom: "-8px" }}>
                  Other details
                </p>
                <p className="replyformdesc2"></p>
                <textarea
                  className="form-control replyforminput"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="Rformleft col-12">
              <div className="codedetacover">
                <GrAddCircle className="admoreicon" />
                <p className="addmore-tag">Add more employment</p>
              </div>
            </div>

            <div className="col-12">
              <p className="persodeta-tag">Skills</p>
              <p className="replyformdesc2">Add up-to 5 skills </p>
            </div>

            <div className="smallcoverRform row">
              <div className="col-12">
                <p className="persodetajtit-tag">(Skill)</p>
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">Skill</p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">
                  Level of skill(/10)
                </p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>

            </div>
            <div className="Rformleft col-12">
              <div className="codedetacover">
                <GrAddCircle className="admoreicon" />
                <p className="addmore-tag">Add more employment</p>
              </div>
            </div>
            
            <div className="col-12">
              <p className="persodeta-tag">Other</p>
              <p className="replyformdesc2">
                Mention any other qualifications and work experience you have below{" "}
              </p>
            </div>

            <div className="smallcoverRform row">
              <div className="col-12">
                <p className="persodetajtit-tag">(Name)</p>
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops2 addformtextlabel">
                   Name of activity
                </p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>

              <div className="Rformleft col-md-6">
                <p className="titlestagpops addformtextlabel">
                  City
                </p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control Rforminputs"
                />
              </div>
              <div className="Rformleft col-xl-2">
                <p className="titlestagpops addformtextlabel">Start Date</p>
                <DatePicker
                  className="Rdatepicker"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>

              <div className="Rformleft col-xl-4">
                <p className="titlestagpops addformtextlabel">End Date</p>
                <DatePicker
                  className="Rdatepicker"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>

              <div className="col-12">
                <p className="" style={{ marginBottom: "-8px" }}>
                  Other details
                </p>
                <p className="replyformdesc2"></p>
                <textarea
                  className="form-control replyforminput"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="Rformleft col-12">
              <div className="codedetacover">
                <GrAddCircle className="admoreicon" />
                <p className="addmore-tag">Add more other</p>
              </div>
            </div>

            <div className="butnspace">
                <button type="button" className="btn btn-primary">
                  Create Resume
                </button>
                <button type="button" className=" btn btn-success">
                  Review and Download
                </button>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}
