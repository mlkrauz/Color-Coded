import React, { useState } from 'react';


import  Col  from 'react-bootstrap/Col'; 
import Card from 'reatct-bootstrap/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';


const Welcome = () => (
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non adipisci nobis expedita possimus pariatur, quia error optio omnis magni, accusamus alias, corporis accusantium provident perferendis perspiciatis? Eius, quia rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam, minima neque consectetur at ab vero. Suscipit perferendis sunt ut expedita? Deserunt hic in rem? A tempora ad doloremque iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores cumque cupiditate illo deserunt. Beatae earum, aliquam nobis corrupti molestiae ipsum sequi doloremque vero perferendis itaque animi accusantium commodi quidem.
      </p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col></Col>
</Row>
</Container>
)



export default Welcome;