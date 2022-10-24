import React from "react";
import Header from "./header";
import "../CSS/Rbuilder.css";
import Resume_img1 from "../images/resume_img1.jpg";
import Key_points from "../images/keypoints.webp";
import Time from "../images/time.webp";
import Cloud from "../images/cloud.jpg";
import Step1 from "../images/Rbuilder_step1.jpg"
import Step2 from "../images/Rbuilder_step2.webp"
import Step3 from "../images/Rbuilder_step3.jpg"
import Step4 from "../images/news.png";
import { Link } from "react-router-dom"; 
import Footer from "./footer";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { BsArrowUpCircle } from "react-icons/bs";
import  ScrollButton from "../components/ScrollButton";


export default function Rbuilder() {
  return (
    <div className="outerframerRbuilder">
      <div className="row">
        <Header />
      </div>

      <div className="top-layer">
        <p className="h1 builder_head mt-3">Resume Builder</p>
        <hr className="builder_hr" />
        <p className="builder_p">
          Easily create a professional resume within minitues with Resume
          Builder
        </p>

        <Link to="/ResumeForm"> 
          <button type="button" className="builder_btn1  btn btn-primary">
            Create Resume
          </button>
        </Link> 
        <ScrollButton/>

            

        <img
          src={Resume_img1}
          className="builder_img1 img-fluid d-block"
          alt="Responsive image"
        />
      </div>

      <div className="row">
        <div className="second_layer mt-5">
          <h3 className="head_2 text-center mt-4">
            How to build a professional resume
          </h3>
          <center>
            <div className="card-layer mt-3">
              <div className="card border-warning">
                <img
                  className="card-img-top"
                  src={Key_points}
                  alt="Card image cap"
                />
                <div className="card-body ">
                  <h5 className="card-title">Key takeaways</h5>
                  <ol type="1">
                    <li>
                      Always include accurate and authentic data about yourself.
                    </li>
                    <li>
                      Tailor the resume according to the job offer by including
                      key words from the job description
                    </li>
                    <li>
                      Make your resume clean, professional and easy to read
                    </li>
                  </ol>
                </div>
              </div>

              <div className="card border-warning">
                <img className="card-img-top" src={Time} alt="Card image cap" />
                {/* <hr className="card-body-hr"/> */}
                <div className="card-body">
                  <h5 className="card-title">Spend less time on writing</h5>
                  <p className="card-text">
                    Keep all the writing to minimal and straight to the point as
                    employers spend very little reviewing each resume. We
                    provide you with pre defined options for jobs duties and
                    skills so you can simply choose and add them.
                  </p>
                </div>
              </div>

              <div className="card border-warning">
                <img
                  className="card-img-top"
                  src={Cloud}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Store your resume online with us
                  </h5>
                  <p className="card-text">
                    You can create multiple resumes and we can keep them safe
                    and easily accessible for you. so you can choose the right
                    resume for each job offers. you can also download them
                  </p>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
      <div className="row">
        <h3 className="head_2 text-center mt-5">Using resume builder</h3>

        <div className="level_3 mt-5 ">
          
          <div className="card border-0 bg-light">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={Step1} className="card-img" alt="image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Step 1</h3>
                  <p className="card-text text-secondary">
                  Once you have logged on to the system you can start 
                  creating your resumes we have provided you with a few 
                  easily readable resume formats to choose from
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 " >
            <div className="row no-gutters">
              <div className="col-md-8">
              <div className="card-body">
                  <h3 className="card-title card2">Step 2</h3>
                  <p className="card-text text-secondary">
                  After you have selected the format you can start to fill 
                  out the blanks with your details to the form. In some sections 
                  we have provided you with predefined values to choose from which 
                  will help you fill out the form a lot quicker. 
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src={Step2} className="card-img card-img-right" alt="image" />
              </div>
            </div>
          </div>

          <div className="card border-0 mb-3 bg-light">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={Step3} className="card-img" alt="image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Step 3</h3>
                  <p className="card-text text-secondary">
                     Once you have created a resume it will be stored in
                     our cloud databases so you can refer and make ammendments 
                     to that resume. You can also create multiple resumes
                     according to job offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <Card className="mx-auto text-center"  style={{ height:'9rem' , width: '40rem', backgroundColor: '#0F1B2D' , color: 'white'}}>
      <Card.Body>
        <Card.Text>
        <img src={Step4} className="card-img" alt="image" style={{ width: '6rem', marginRight: '5rem'}}/>
          <Link to="/ResumeForm"> 
          <button type="button" className="builder_btn1  btn btn-primary" style={{ width: '20rem' }}>
            Upload a video Resume <BsArrowUpCircle size={'20px'} marginleft="10rem"/>
          </button>
        </Link> 
        </Card.Text>
       
      </Card.Body>
    </Card>

      </div>
      <Footer />
    </div>
  );
}
