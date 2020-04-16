import React from 'react';

import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <header id="home" className="bigBackground App-header ">
      <div className="contentContainer centerText shadowText">
        <h1>13<sup>th</sup> Annual Golf Outing</h1>
        <h2>Friday, October 23<sup>rd</sup>, 2020</h2>
      </div>
      <p>
        <Button variant="outline-light">Register</Button>{' '}
        <Button variant="outline-light">Become a Sponsor</Button>{' '}
      </p>
    </header>
  );
}

export default Header;
