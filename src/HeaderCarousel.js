import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeaderCarousel() {
  return (
    <div className="masthead App-header">
      <img
      src="/MCMOCF_Logo.png"
      className="mcmocfLogo"
      alt="facebook"
      target="_blank"
      />
      < br />
      <p>
        Glad to have you.
      </p>
    </div>
  );
}

export default HeaderCarousel;
