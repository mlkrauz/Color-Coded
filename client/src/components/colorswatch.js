import React, { useState } from 'react';


import  Col  from 'react-bootstrap/Col'; 
import Card from 'reatct-bootstrap/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';

var colorPicker = new iro.ColorPicker('#picker', {
    //we can change its size and stuff later
});
const card = () => (
    <Container>
        <Row>
            <Col></Col>
            <Col lg={6} >
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <div id = "picker"></div>
  </Card.Body>
</Card>
</Col>
<Col></Col>
</Row>
</Container>
)



export default card;