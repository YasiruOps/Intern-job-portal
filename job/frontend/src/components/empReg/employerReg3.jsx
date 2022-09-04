import React, { useState, useEffect } from "react";
import "../../CSS/employerReg3.css";
import Header from "../header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Employer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const dataSubmit = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return dataSubmit();
  };

  const RedirectBack = () => {
    navigate("/Employer-Reg2");
  };

  function sendData() {
  axios
  .post("http://localhost:8000/employerRegister/add", location.state)
  .then(() => {
    alert("Registerd succesfully")
    window.location.reload(false);
  })
  .catch((err) => {
    alert(err);
  });
  };  
  


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
            <p className="step03">3</p>
          </div>

          <hr className="proghr" />

          <div className="termsandcon col-12">
            <p className="terms-tag">Terms & conditions</p>
            <hr className="terms-hr" />
            <div className="regscroll">
              <p className="terms-note">
                sike simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, . It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages,
                . It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages,sike simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages,
                . It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, . It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, popularised in
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages,{" "}
              </p>
            </div>
            <hr className="terms-hr" />
            <div className="termsundestandbox">
              <label
                className="form-check-label termsundestandbox-label"
                for="flexCheckDefault"
              >
                I accept the terms & conditions and I have read the privacy
                policy
              </label>
              <input
                onClick={onCheckboxClick}
                className="form-check-input termsundestandbox-box"
                type="checkbox"
              />
            </div>
          </div>

          <button
            disabled={isDisabled}
            type="button"
            className="btn btn-primary empcontinue"
            onClick={sendData}
          >
            Create Account
          </button>

          <button
            onClick={() => {
              RedirectBack();
            }}
            type="button"
            className="btn btn-primary empback"
          >
            <ArrowBackIosNewIcon className="arrowbackicon" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
