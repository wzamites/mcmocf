import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <Container id="about" className="centerText pinkText">
    <br />
    <br />
    <br />
          <h3>
          Our mission is raise money for the causes
closest to Michele’s heart—
</h3><h5>fundraising for Ovarian Cancer research, and supporting students
with financial need.
          </h5>
          <br />
          <br />
          <Row>
          <Col>
          <Image src="Michele-Photo.jpg" className="michelePhoto" roundedCircle />
          </Col>
          <Col>
          <br />
          <br />
          <br />
          <p>MCMOCF was founded in honor of Michele C. McLennan
          who battled Ovarian Cancer until 2005. We are a family
          founded and operated, non-profit foundation. <a href="#">Learn more about Michele's story...</a>
          </p>
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
