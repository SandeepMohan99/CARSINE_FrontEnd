import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react'

function Header() {
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://mediacity.co.in/crsine/assets/images/logo-dark.png"
              width="100px"
              height="50px"
              className="d-inline-block align-top"
            />{' '}
            
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All Services</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Service Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="btn btn-warning">Appointment</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header