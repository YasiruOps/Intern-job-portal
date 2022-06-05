import React from "react";
import { Link } from "react-router-dom";
import '../CSS/header.css'

export default function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#">
          MATRIX
        </a>

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
          </ul>
        </div>
      </nav>
    </div>
  );
}
