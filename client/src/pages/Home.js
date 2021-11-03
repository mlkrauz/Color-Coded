import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <><Card border="dark" style={{ width: '18rem' }}>
      <Card.Title> Welcome to Color-Coded</Card.Title>
      <Card.Text>Lorem ipsem Dolar, color coded is the best app ever</Card.Text>
    </Card><Card border="dark" style={{ width: '18rem' }}>
        <Button variant="outline-dark">Save style</Button>
      </Card></>
  );
};

export default Home;
