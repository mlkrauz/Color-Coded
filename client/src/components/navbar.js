import React, { usestate } from 'react';


import Navbar from 'react-bootstrap/Navbar';


function Navbar({currentPage, handlePageChange }) {
    return (
      <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Color-Coded</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#Login">#Login</Nav.Link>
      <Nav.Link href="#Sign In">#Sign In</Nav.Link>
      <Nav.Link href="#Advance">#Advance</Nav.Link>
      <Nav.Link href="#Export">#Export</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
  </div>
 )
}
export default Navbar;