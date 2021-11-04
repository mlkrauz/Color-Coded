import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Colorpicker() {


  return (
    <Card fluid>
      <Row>
        <Col sm='1' md='1'>
          <h1 className='justify-content-end'>test</h1>
        </Col>
        <Col sm='1' md='3'>
          test
        </Col>
      </Row>
    </Card>
  );
}

export default Colorpicker;
