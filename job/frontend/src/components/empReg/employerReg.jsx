import React from "react";
import "../../CSS/employerReg.css";
import Header from "../header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from 'react-router-dom';

export default function Employer() {

  const navigate = useNavigate();

  const Redirect=()=>{
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
            <p className="step2">2</p>
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
                  Email<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group col-xl-6 ">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Display Name<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
            <div className="row2 row">
              <div className="group col-xl-6 ">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Password<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group col-xl-6 ">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Confirm Password<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
          </div>
          <button onClick={Redirect} type="button" className="btn btn-primary empcontinue">
            Continue
            <ArrowForwardIosIcon className="arrowicon" />
          </button>
        </div>
      </div>
    </div>
  );
}