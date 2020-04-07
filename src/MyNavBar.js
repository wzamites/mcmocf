import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
  return (
    <Navbar bg="light" expand="md" sticky="top">
    <Container>
      <Navbar.Brand href="#home">
      <img
      src="/favicon.svg"
      height="30"
      className="d-inline-block align-top"
      alt="React Bootstrap logo"
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="centerText">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#golf">Golf Outing</Nav.Link>
          <Nav.Link href="#scholarship">Scholarship Fund</Nav.Link>
          <Nav.Link href="#research">Research Grants</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.facebook.com/mcmocf/" target="_blank">
            <img
            src="/facebook-square-brands.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="facebook"
            target="_blank"
            />
          </Nav.Link>
          <Nav.Link href="https://instagram.com/mcmocf" target="_blank">
            <img src="/instagram-brands.svg" width="30" height="30" className="d-inline-block align-top" alt="instagram"/>
          </Nav.Link>
          <Nav.Link href="https://twitter.com/mcmocf" target="_blank">
            <img
            src="/twitter-square-brands.svg"
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
