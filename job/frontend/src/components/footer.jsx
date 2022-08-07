import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import {Col,Row}  from 'react-bootstrap';
import '../CSS/footer.css'

export default function footer() {
  return (
    <div>
      

           <Row className= "show-grid text-center">
           <div className="logo">
            <img className="img1" src={logo} width = "160" height = "auto" /></div>
                <div className="testimonial">
                <h1 className="system-center" > HOW TO USE OUR SYSTEM </h1>
                </div>
                </Row>
    </div>
    
  );
}
