import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
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

      <CardGroup className="cardgroup">
      <Card>
        <Card.Img className="instructions" variant="top" src={bd1}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className="instructions" variant="top" src={bd2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className="instructions" variant="top" src={bd3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className="instructions" variant="top" src={bd4} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </Row>

      <Footer />
    </div>
  );
}
