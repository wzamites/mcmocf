import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import university from './img/university-solid.svg'
import microscope from './img/microscope-solid.svg'
import golf from './img/golf-ball-solid.svg'

function Fundraising() {
  return (
    <div id="fundraising" className="alternateSection">
    <Container id="about" className="centerText">
    <br />
    <br />
    <br />
          <h3>
          With your help, we can and will fund efforts to prevent, treat, and cure this disease.
</h3><h5>Your gift will support our mission to fund ovarian cancer research and education.
          </h5>
          <br />
          <br />
          <Row>
            <Col xs={12} md={4}>
            <img
            src={university}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="university"
            />
            <br />
            <br />
            <h5>
              We've raised over $100,000 for the Michele C. McLennan Scholarship Fund.
            </h5>
            <br />
            <br />
            </Col>
            <Col xs={12} md={4}>
            <img
            src={microscope}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="microscope"
            />
            <br />
            <br />
            <h5>
              In 2018, we donated $50,000 to Sandy Rollman Ovarian Cancer Foundation to fund an ovarian cancer research grant.
            </h5>
            <br />
            <br />
            </Col>
            <Col xs={12} md={4}>
            <img
            src={golf}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="golf"
            />
            <br />
            <br />
            <h5>
              Since our inception, we've had 50 corporate sponsors, 630 unique golfers, and 900 people have donated.
            </h5>
            <br />
            <br />
            </Col>
          </Row>
          <br />
          <br />
          <Button variant="outline-light" size="lg">Donate Today</Button>
          <br />
          <br />
    </Container>
    </div>
  );
}

export default Fundraising;
