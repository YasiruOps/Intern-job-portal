import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

import '../CSS/header.css'

export default function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="logo">
            <img className="img1" src={logo} /></div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="item">
                    <Link to="/"> Home</Link>         
            </li>
            <li className="item">
              <Link to="/Rbuilder">Rbuilder</Link>
            </li>
            <li className="item">
            </li>
            <li className="item">
              <Link to="/Login">Login</Link>
            </li>
            <li className="item">
              <Link to="/Mcq">mcq</Link>
            </li>
            <li className="item">
              <Link to="/McqCat">mcq categories</Link>
            </li>
            <li className="item">
              <Link to="/Leader-bord">Lbord</Link>
            </li>
            <li className="item">
              <Link to="/EmployerLogin">Emp log</Link>
            </li>
            <li className="item">
              <Link to="/Employer-Dash">Emp Dash</Link>
            </li>
            <li className="item">
              <Link to="/Cus-sup">Customer support</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
