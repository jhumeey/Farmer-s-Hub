import React from 'react';
import { Link } from 'react-router-dom';
import '../css/global.css';
import '../css/navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => (
  <div className="navigation">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Farmers Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-link-container">
          <Nav.Link href="#home" className="navigation-link">
            About Us
          </Nav.Link>
          <Nav.Link href="#link" className="navigation-link">
            Services
          </Nav.Link>
          <Nav.Link href="#link" className="navigation-link">
            Contact Us
          </Nav.Link>
          <Nav.Link href="#link" className="navigation-link">
            Partnerships
          </Nav.Link>
          <Nav.Link href="/goggle.com">
            <button className="primary button">Login</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavBar;
