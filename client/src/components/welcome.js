import React, { useState } from 'react';


import  Col  from 'react-bootstrap/Col'; 
import Card from 'reatct-bootstrap/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';


const card = () => (
    <Container>
        <Row>
            <Col></Col>
            <Col lg={6} >
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Color-Coded</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <hr />
    <Card.Text>
        <p>
      Enter a the description of our app here  
      </p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col></Col>
</Row>
</Container>
)



export default card;