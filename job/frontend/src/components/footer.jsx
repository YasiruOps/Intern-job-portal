import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../images/logo.png';
import {Col,Row}  from 'react-bootstrap';
import '../CSS/footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn} from 'mdb-react-ui-kit';


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
              Matrix is a company with a goal of making the process of finding a job, a more desirable experience. </p>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
          </MDBCol>
          
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='linkref text-uppercase fw-bold mb-4'>Services</h6>
            <p>
              <a href='#!' className='linkref text-reset'>
                Post a Job
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Search Your Job
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Build Your Resume
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Boost Your Resume
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='linkref text-uppercase fw-bold mb-4'>Features</h6>
            <p>
              <a href='#!' className='linkref text-reset'>
                CV Manager
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Apply for Job Post
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Search Job by Category
              </a>
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='linkref text-uppercase fw-bold mb-4'>Links</h6>
            <p>
              <a href='#!' className='linkref text-reset'>
                Sign in
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Game Portal
              </a>
            </p>
            <p>
              <a href='#!' className='linkref text-reset'>
                Customer Support
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </section>

    <div className='footer-bottom p-4 border-top'>
      © 2022 Matrix.  All Rights Reserved
    </div>
  </MDBFooter>
    
  );
}
