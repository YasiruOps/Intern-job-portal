import React, { useState } from "react";
import "../../CSS/employerReg.css";
import Header from "../header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useLocation } from "react-router-dom";

export default function Employer() {
  const [email, setEmail] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const [valierror, setValierror] = useState({
    email: "",
    password: "",
  });

  const Redirect = () => {
    if (password != password2) {
      setMsg("Password mismatch"); //meka hadanna component ekak
      return;
    }
    let sucess = true;

    if (!email?.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)
    ) {
      setValierror({ ...valierror, email: "Incorrect email format" });
      sucess = false;
    }
    if (!password?.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/)) {
      setValierror({ ...valierror, password: "Password should contain minimum 8 characters 1 letter and a number" });
      
      sucess = false;
    }
    setTimeout(()=>{
      setValierror({   
      email:"",
      phone:"",
      password:""
      })
    },3000);
   
    if (sucess) {
      navigate("/Employer-Reg2", { state: { email, displayname, password } });
    }
    
  };

  return (
    <div>
      <Header />
      <div
        className="container"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
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
              <div className="group100 col-xl-6 ">
                <input
                  className="empReg-input"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group100 col-xl-6 ">
                <input
                  className="empReg-input"
                  type="text"
                  required
                  value={displayname}
                  onChange={(e) => {
                    setDisplayname(e.target.value);
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Display Name<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
            <div className="row2 row">
              <div className="group100 col-xl-6 ">
                <input
                  className="empReg-input"
                  type="text"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Password<span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="group100 col-xl-6 ">
                <input
                  className="empReg-input"
                  type="text"
                  required
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="empReg-label">
                  Confirm Password<span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={Redirect}
            type="button"
            className="btn btn-primary empcontinue"
          >
            Continue
            <ArrowForwardIosIcon className="arrowicon" />
          </button>
        </div>
      </div>
      <p style={{textAlign:"center", color:"red", fontSize:"20px"}}>{valierror.password}</p>
      <p style={{textAlign:"center", color:"red", fontSize:"20px"}}>{valierror.email}</p>
    </div>
  );
}
