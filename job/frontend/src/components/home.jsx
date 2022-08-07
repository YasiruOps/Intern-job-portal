import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Accordion, Container, Col, Image, Button, Row } from "react-bootstrap";
import "../CSS/home.css";
import pic1 from "../images/frm1.png";
import pic2 from "../images/frm2.png";
import pic3 from "../images/frm3.png";

export default function home() {
  return (
    <div className="homepage-outermain">
      <div className="head">
        <Header />

        <Container>
          <Accordion>
            <h2>Find a Job</h2>
            <h3>Search from over 200+ Job Postings</h3>
            <Link to="/">
              <Button className="homepagebtn1">SEARCH</Button>
            </Link>

          </Accordion>
        </Container>
      </div>
      <Container>
        <Row className="show-grid text-center">
          <div className="testimonial">
            <h1 className="text-center"> Services offered by Us </h1>
          </div>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={pic1} circle className="profile-pic" />
            <h3>Amani</h3>
            <p>
              “ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia. “
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={pic2} circle className="profile-pic" />
            <h3>Ben</h3>
            <p>
              “ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia. “
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={pic3} circle className="profile-pic" />
            <h3>Silly L.</h3>
            <p>
              “ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia. “{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <Row className="show-grid text-center">
        <div className="testimonial">
          <h1 className="system-center"> HOW TO USE OUR SYSTEM </h1>
        </div>

        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={pic1} circle className="profile-pic" />
          <h3>Amani</h3>
          <p>
            “ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia. “
          </p>
        </Col>

        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={pic2} circle className="profile-pic" />
          <h3>Ben</h3>
          <p>
            “ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia. “
          </p>
        </Col>

        <Col xs={12} sm={4} className="person-wrapper">
          <Image src={pic3} circle className="profile-pic" />
          <h3>Silly L.</h3>
          <p>
            “ Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia. “{" "}
          </p>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
