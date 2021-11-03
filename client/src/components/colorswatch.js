import React, { useState } from 'react';

import iro from '@jaames/iro';


import  Col  from 'react-bootstrap/Col'; 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';

var ColorPicker = new iro.ColorPicker('#picker', {
    //we can change its size and stuff later
    layout: [
      {
        component: iro.ui.Wheel
      }
    ],
    width:300,

    colors:[ 
      "#000000", //black
      "#FFF", //white
      "#808080" //grey
    ]
});



const Colorswatch = () => (
    <Container>
        <Row>
            <Col></Col>
            <Col lg={6} >
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    
    <p id="picker"></p>
  </Card.Body>
</Card>
</Col>
<Col></Col>
</Row>
</Container>
)



export default Colorswatch;