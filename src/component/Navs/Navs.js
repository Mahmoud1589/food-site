import React from "react";
import './Navs.css';
import { Navbar , Nav , Container , NavDropdown } from "react-bootstrap";
import logo from './../../photo/logo.jpeg';

const Navs = ()=>{
    return(
<Navbar bg="light" expand="lg">
    <Container>
  <Navbar.Brand href="#home"><img src={logo} title="Logo">
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">about us</Nav.Link>
      <Nav.Link href="#home">explore food</Nav.Link>
      <Nav.Link href="#home">Review</Nav.Link>
      <Nav.Link href="#link">faq</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link id="lastnav">558202555</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}
export default Navs;