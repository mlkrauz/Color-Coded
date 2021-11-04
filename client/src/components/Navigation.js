import React, { usestate } from 'react';
import Auth from '../utils/auth';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
          <>
            <Navbar.Brand className="justify-content-start" href="/">Color-Coded</Navbar.Brand>
            <Nav className="justify-content-end ">
              <Nav.Link href="/design">Design</Nav.Link> 
              <Nav.Link href="/export">Export</Nav.Link> 
              <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
              </Nav>
            </>
      );
    } else {
      return (
        <>
            <Navbar.Brand className="justify-content-start" href="/">Color-Coded</Navbar.Brand>
            <Nav className="justify-content-end ">
              <Nav.Link href="/design">Design</Nav.Link> 
              <Nav.Link href="/export">Export</Nav.Link> 
              <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
        </>
      );
    }
  }

  return (
      
    <Navbar  bg="dark" variant="dark" >
      <Container>
        {showNavigation()}
      </Container>
    </Navbar>
  

  )
}
export default Navigation;