import React, { useState } from "react";
import "../CSS/employerlogin.css";
import EmployerLImg from "../images/employer_login_img1.png";
import Header from "../components/header";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Button from 'react-bootstrap/Button';
import Footer from "./footer";
import axios from "axios";

import { useNavigate } from 'react-router-dom';

export default function Login() {

  const initialValues = {
    email: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialValues);

  const onChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const payload = {
      email: loginForm.email,
      password: loginForm.password,
    };

    console.log(payload);
    axios
      .post(`http://localhost:8000/auth/employerLogin`, payload)
      .then((response) => {
        navigate('/Employer-Dash');
      })
      .catch((err) => {});
  };

  ///////////////////////////////////////////////
  const navigate = useNavigate();

  const Redir5=()=>{
    navigate('/Employer-Reg');
  }

   return (
    <div>
      <Header />
      <div className="outer_container">
        <div className="first_layer">    
            <img className="imag2" src={EmployerLImg} />
            <p className="header1">For Employers</p>
        </div>
        <div className="row">
          <hr className="header_hr" />
        </div>

        <div className="second_layer">
          <p className="sign_tag"> Sign in to continue</p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <EmailOutlinedIcon />
              </span>
            </div>

  <input onChange={onChange} name ="email" type="email" id="form2Example1" className="form-control" placeholder="E-mail (required)" />
  

          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">
                <HttpsOutlinedIcon />
              </span>
            </div>
            <input onChange={onChange} name="password" type="password" id="form2Example2" class="form-control" placeholder="Password (required)"/>
  
          </div>
        </div>

        <div className="third_layer">
          <p className="forgot_tag">Forgot password?</p>
        </div>

        <div className="fourth_layer">
          <Button onClick={submit}  className="btn_login" variant="primary">Login</Button>
          <hr className="hr2" />
          <p className="sign_up">Do not have an account already?</p>
          <Button onClick={Redir5} className="btn_signup">Register now!</Button>
        </div>

      </div>
      <Footer />
    </div>
  );
}