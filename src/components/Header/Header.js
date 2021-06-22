import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#menu">MENU</Nav.Link>
    <Nav.Link href="#menu">CREW</Nav.Link>
    <Nav.Link href="#menu">LOCATION</Nav.Link>
    <Nav.Link href="#menu">CONTACT</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/"></Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Navbar.Brand href="#">
      <img
        alt=""
        src="https://i.imgur.com/7GCDsuS.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Binx Pizza
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
