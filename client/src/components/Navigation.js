import React, { usestate } from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Color-Coded</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/design">Design</Nav.Link> 
          <Nav.Link href="/export">Export</Nav.Link> 
          <Nav.Link href="/login">Login</Nav.Link>  
          </Nav>
      </Container>
    </Navbar>


  )
}
export default Navigation;