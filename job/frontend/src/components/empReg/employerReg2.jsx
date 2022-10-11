import React, { useState } from "react";
import "../../CSS/employerReg2.css";
import Header from "../header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Employer() {

  const navigate = useNavigate();
  const location = useLocation();


  
const[registrationID, setRegistrationID] =useState("")
const[compname, setCompname] =useState("")
const[contact, setContact] =useState("")
const[address, setAddress] =useState("")

  const RedirectBack=()=>{
    navigate('/Employer-Reg');
  }

  const RedirectForward=()=>{
    navigate('/Employer-Reg3',{state:{...location.state,registrationID,compname,contact,address}});
  }

  return (
    
    <div>
   
      <Header />
      <div className="container" style={{marginLeft:"auto", marginRight:"auto"}}>
        <p className="empteg-title">Employer Registration</p>

        <div className="emp-regform">
          <p className="empreg-inst">
            In order to use job search portal each user should have an account
            <br />
            All fields marked astericks (<span style={{ color: "red" }}>*</span>
            ) are required
          </p>

          <hr className="emplog-sep" />

          <div className="progbartitles">
            <p>Account Details</p>
            <p>Personal Details</p>
            <p>Comfirmation</p>
          </div>

          <div className="emp-reg-progbar">
            <p className="step1">1</p>
            <p className="step02">2</p>
            <p className="step3">3</p>
          </div>

          <hr className="proghr" />

          <div className="inputs1">
            <div className="row1 row">
              <div className="group100 col-xl-6 ">
                <input className="empReg-input" type="text" required value={registrationID} onChange={(e) => {  setRegistrationID(e.target.value); }}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Registration ID<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group100 col-xl-6 ">
                <input className="empReg-input" type="text" required value={compname} onChange={(e) => {  setCompname(e.target.value); }}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Company Name<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
            <div className="row2 row">
              <div className="group100 col-xl-6 ">
                <input className="empReg-input" type="text" required value={contact} onChange={(e) => {  setContact(e.target.value); }}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Contact<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group100 col-xl-6 ">
                <input className="empReg-input" type="text" required value={location.state?.address??address} onChange={(e) => {  setAddress(e.target.value); }}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Address<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
          </div>
          <button onClick={RedirectForward} type="button" className="btn btn-primary empcontinue">
            Continue
            <ArrowForwardIosIcon className="arrowicon" />
          </button>

          <button onClick={RedirectBack} type="button" className="btn btn-primary empback">
           <ArrowBackIosNewIcon className="arrowbackicon" />
            Back        
          </button>


        </div>
      </div>
    </div>
  );
}