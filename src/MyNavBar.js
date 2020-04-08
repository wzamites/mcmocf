import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/MCMOCF_Logo.png'
import facebook from './img/facebook-square-brands.svg'
import instagram from './img/instagram-brands.svg'
import twitter from './img/twitter-square-brands.svg'

function MyNavBar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">
      <img
      src={logo}
      height="60"
      className="d-inline-block align-top"
      alt="React Bootstrap logo"
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="centerText">
        <Nav className="mr-auto">
          <Nav.Link href="#golf">Golf Outing</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#fundraising">Fundraising</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.facebook.com/mcmocf/" target="_blank">
            <img
            src={facebook}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="facebook"
            target="_blank"
            />
          </Nav.Link>
          <Nav.Link href="https://instagram.com/mcmocf" target="_blank">
            <img src={instagram}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="instagram"/>
          </Nav.Link>
          <Nav.Link href="https://twitter.com/mcmocf" target="_blank">
            <img
            src={twitter}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="twitter"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default MyNavBar;
