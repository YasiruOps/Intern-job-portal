import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../CSS/header.css'

export default function header() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="logo">
            <img className="img1" src={logo} width = "160" height = "auto" />
            </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="item">
              <Link to="/" className="listed" > Home</Link>         
            </li>
            <li className="item">
              <Link to="/Rbuilder" className="listed" >Resume builder</Link>
            </li>
            <li className="item">
              <Link to="/McqCat" className="listed">Game Portal</Link>
            </li>
            <li className="item">
              <Link to="/Leader-bord" className="listed">Leaderboard</Link>
            </li>      
            <li className="item">
              <Link to="/Cus-sup" className="listed">Customer Support</Link>
            </li>
            <li className="item">
              <Link to="/Job-Search"  className="listed">Search Page</Link>
            </li>
            <li className="item">     
              <Link to="/Employer-Dash" className="listed">Employer Dashboard</Link>
            </li>
            <li className="item">
              <Link to="/EmployerLogin" className="listed">Employer Login</Link>
            </li>
            <li className="item">
              <Link to="/Forum" className="listed">Forum</Link>
            </li>                
            <li className="item">
              <Link to="/Fullathal" className="listed">Click me!</Link>
            </li>    
            <li className="item">
              <Link to="/Login" className="sign">Sign In</Link>
            </li>


          </ul>
        </div>
      </nav>
    </div>
  );
}
