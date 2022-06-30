import axios from "axios";
import React, { useState } from "react";
import "../CSS/Login.css";
import InternImg1 from "../images/intern_login_img1.png";
import Header from "../components/header";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Button from 'react-bootstrap/Button';

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
      .post(`http://localhost:8000/auth/login`, payload)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <Header />
      <div className="outer_container">
        <div className="first_layer row">
          <div className="col-2">
            <img className="img1" src={InternImg1} />
          </div>
          <div className="header1 col-6 ">For Interns</div>
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
          <p className="forgot_tag">Forgot passoword?</p>
        </div>

        <div className="fourth_layer">
          <Button onClick={submit} className="btn_login" variant="primary">Login</Button>
          <hr className="hr2" />
          <p className="sign_up">Do not have an account already?</p>
          <Button className="btn_signup">Register now!</Button>
        </div>

      </div>
    </div>
  );
}

{
  /* // <form>

// <div class="form-outline mb-4">
  <input onChange={onChange} name ="email" type="email" id="form2Example1" class="form-control" />
  <label class="form-label" for="form2Example1">Email address</label>
// </div>


// <div class="form-outline mb-4">
  <input onChange={onChange} name="password" type="password" id="form2Example2" class="form-control" />
  <label class="form-label" for="form2Example2">Password</label>
// </div>


// <div class="row mb-4">
//   <div class="col d-flex justify-content-center">
   
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
//       <label class="form-check-label" for="form2Example31"> Remember me </label>
//     </div>
//   </div>

//   <div class="col">
    
//     <a href="#!">Forgot password?</a>
//   </div>
// </div>


// <button onClick={submit} type="button" class="btn btn-primary btn-block mb-4">Sign in</button>


// <div class="text-center">
//   <p>Not a member? <a href="#!">Register</a></p>
//   <p>or sign up with:</p>
//   <button type="button" class="btn btn-link btn-floating mx-1">
//     <i class="fab fa-facebook-f"></i>
//   </button>

//   <button type="button" class="btn btn-link btn-floating mx-1">
//     <i class="fab fa-google"></i>
//   </button>

//   <button type="button" class="btn btn-link btn-floating mx-1">
//     <i class="fab fa-twitter"></i>
//   </button>

//   <button type="button" class="btn btn-link btn-floating mx-1">
//     <i class="fab fa-github"></i>
//   </button>
// </div>
// </form> */
}
