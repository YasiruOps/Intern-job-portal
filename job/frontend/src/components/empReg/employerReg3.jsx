import React from "react";
import "../../CSS/employerReg2.css";
import Header from "../header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

export default function Employer() {

  const navigate = useNavigate();

  const RedirectBack=()=>{
    navigate('/Employer-Reg2');
  }

  return (
    <div>
      <Header />
      <div className="container">
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
              <div className="group col-xl-6 ">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Registration ID<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group col-xl-6 ">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Company Name<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
            <div className="row2 row">
              <div className="group col-xl-6 ">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Contact<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group col-xl-6 ">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Address<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary empcontinue">
            Register
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