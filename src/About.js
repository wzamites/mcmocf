import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import michele from './img/Michele-Photo.jpg'

function About() {
  return (
    <Container id="about" className="centerText pinkText">
      <br />
      <br />
      <br />
      <h2>Our mission is to raise money for the causes closest to Michele’s heart</h2>
      <h5>raising awareness and fundraising for Ovarian Cancer research, and supporting students with financial need</h5>
      <br />
      <br />
      <Row>

        <Col xs={12} md={6}>
        <Image src={michele} className="michelePhoto" roundedCircle />
        </Col>

        <Col xs={12} md={6}>
        <br />
        <br />
        <br />
        <p>MCMOCF was founded in honor of Michele C. McLennan who battled Ovarian Cancer until 2005. We are a family founded and operated, non-profit foundation. <a href="#">Learn more about Michele's story...</a></p>
        </Col>

      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default About;
