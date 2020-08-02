import React from 'react';
import { Link } from 'react-router-dom';
import '../css/global.css';
import '../css/navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => (
  <div className="navigation">
    <Navbar bg="light" expand="lg">
      <a className="logo-brand" href="/">
        Farmer's Hub
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-link-container">
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Partnership</a>
          <a href="/">Contact Us</a>
          <button className="primary-btn btn nav-btn">
            {' '}
            <a href="/login" className="login-nav-link">
              Login
            </a>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavBar;
