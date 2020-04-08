import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

function HeaderCarousel() {
  return (
    <header id="home" className="bigBackground App-header ">
      <div className="contentContainer centerText shadowText">
        <h1>13th Annual Charity Golf Outing</h1>
        <h2>Friday, October 19th, 2020</h2>
      </div>
      <p>
        <Button variant="light">Register</Button>{' '}
        <Button variant="light">Become a Sponsor</Button>{' '}
      </p>
    </header>
  );
}

export default HeaderCarousel;
