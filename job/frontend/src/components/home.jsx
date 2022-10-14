import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Accordion, Container, Col, Image, Button, Row } from "react-bootstrap";
import "../CSS/home.css";
import pic1 from "../images/frm1.png";
import pic2 from "../images/frm2.png";
import pic3 from "../images/frm3.png";
import bd1 from "../images/bd1.png";
import bd2 from "../images/bd2.png";
import bd3 from "../images/bd3.png";
import bd4 from "../images/bd4.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch, useSelector } from "react-redux";
import { setfilterjobs, setjobbas, setsearchoff } from "../actions/jobActions";
import { setSearch } from "../actions/searchAction";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const [searchval, setSearchval] = useState("")

  const navigate = useNavigate();

  const searchoption = useSelector((state) => state.search.searchoption);

  function Redirect(){
    dispatch(setSearch({...searchoption,searchkey:searchval.toLowerCase()}));
    navigate("/Job-Search");
  };

  function Browse(){
    navigate("/Job-Search")
  }

  return (
    <div className="homepage-outermain">
      <div className="head">
        <Header />
        <Container style={{ marginLeft:"auto", marginRight:"auto"}}>
          <Accordion>
            <h2>Find a Job</h2>
            <h3>Search from over 200+ Job Postings</h3>
            <div className="searchboxjobs">
              <GoSearch className="searchiconjobs" />
              <input type="text" className="searchinjobs" value={searchval} onChange={(e) => {  setSearchval(e.target.value); }}/>
              <button type="button" class="btn btn-light advancedsearhjobs">
                Advanced
              </button>
              <button type="button" class="btn btn-light advancedsearhjobs" onClick={Browse}>
                Browse
              </button>
            </div>
           
              <Button className="homepagebtn1" onClick={Redirect}>SEARCH</Button>
          


          </Accordion>
        </Container>
      </div>
      <Container style={{ marginLeft:"auto", marginRight:"auto"}}>
        <Row className="show-grid text-center">
          <div className="testimonial">
            <h1 className="text-center"> Services offered by Us </h1>
          </div>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={pic1} circle className="profile-pic" />
            <h3>Job Search</h3>
            <p>
              Our state of the art Job Search Engine will ensure that you will find your dream job
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={pic2} circle className="profile-pic" />
            <h3>Resume Builder</h3>
            <p>
             New to the industry ? </p><p>Build your own Resume using Matrix
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={pic3} circle className="profile-pic" />
            <h3>Boost Your Resume</h3>
            <p>
              Boost Your current Resume using our various Gamification Techniques
            </p>
          </Col>
        </Row>
      </Container>

      <Row className="show-grid text-center">
        <div className="testimonial">
          <h1 className="system-center"> HOW TO USE OUR SYSTEM </h1>
        </div>

      <CardGroup>
      <Card className="cardgroup" border="light">
        <Card.Img className="instructions" variant="top" src={bd1}/>
        <Card.Body>
          <Card.Title>Find Your Desired Job</Card.Title>
          <Card.Text>
            Search through our libraries and find your desired job post in the desired company
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardgroup" border="light">
        <Card.Img className="instructions" variant="top" src={bd2} />
        <Card.Body>
          <Card.Title>Check Job Requirements</Card.Title>
          <Card.Text>
            Check the requirements that the company has requested 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardgroup" border="light">
        <Card.Img className="instructions" variant="top" src={bd3} />
        <Card.Body>
          <Card.Title>Apply for the Job Post</Card.Title>
          <Card.Text>
            Click on your desired job post and apply through the Application Interface
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardgroup" border="light">
        <Card.Img className="instructions" variant="top" src={bd4} />
        <Card.Body>
          <Card.Title>Check Your Application Status</Card.Title>
          <Card.Text>
            Visit your profile and check the status of your Application
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      </Row>

      <Footer />
    </div>
  );
}
