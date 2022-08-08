import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../images/logo.png';
import {Col,Row}  from 'react-bootstrap';
import '../CSS/footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function footer() {
  return (
    <MDBFooter className='footer-header text-lg-start text-muted'>
    <section className='d-flex justify-content-lg-between p-4'>
      <div className='footer-header1 me-5 d-none d-lg-block'>
        <div className='footertopic'><span>About Us</span></div>
      </div>
    </section>

    <section className='foot'>
      <MDBContainer className='footer-container text-md-start mt-5'>
        <MDBRow className='mt-3'>

          <MDBCol md="3" lg="4" xl="3" className='footer-desc mx-auto mb-4'>
          <img className="img2" src={logo1} width = "220" height = "auto" />
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </MDBCol>
          
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='linkref text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='linkref text-reset'>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Laravel
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='linkref text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='linkref text-reset'>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Laravel
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='linkref text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='linkref text-reset'>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Laravel
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </section>

    <div className='footer-bottom p-4 border-top'>
      © 2021 Matrix.  All Rights Reserved
    </div>
  </MDBFooter>
    
  );
}
