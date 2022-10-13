import axios from "axios";
import React, { useState } from "react";
import "../CSS/Login.css";
import InternImg1 from "../images/intern_login_img1.png";
import Header from "../components/header";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Button from "react-bootstrap/Button";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setinternid } from "../actions/authActions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    axios
      .post(`http://localhost:8000/auth/login`, payload)
      .then((response) => {
        dispatch(setinternid(response.data.user._id));
        navigate("/user");
      })
      .catch((err) => {});
  };

  return (
    <div>
      <Header />
      <form>
      <div className="outer_container">
        <div className="first_layer row">
          <div className="col-2">
            <img className="internimg1" src={InternImg1} />
          </div>
          <div className="internheader1 col-6 ">For Interns</div>
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

            <input
              onChange={onChange}
             
              name="email"
              type="email"
              id="form2Example1"
              className="form-control"
              placeholder="E-mail (required)"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">
                <HttpsOutlinedIcon />
              </span>
            </div>
            <input
              onChange={onChange}
              name="password"
              type="password"
              id="form2Example2"
              class="form-control"
              placeholder="Password (required)"
            />
          </div>
        </div>

        <div className="third_layer">
          <p className="forgot_tag">Forgot password?</p>
        </div>

        <div className="fourth_layer">
          <input type="submit" onClick={submit} className="btn btn-primary btn_login" value="Login"/>
           
          <hr className="hr2" />
          <p className="sign_up">Do not have an account already?</p>
          <Link to="/Profile">
            <Button className="btn_signup">Register now!</Button>{" "}
          </Link>
        </div>
        
      </div>
     
      </form>
      <Footer />
    </div>
  );
}
