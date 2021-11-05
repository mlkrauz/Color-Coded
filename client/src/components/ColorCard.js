import React from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const ColorCard = ({ title, children }) => {
  
  return (
    <Row>
      <Col></Col>
      <Col xl={8}>
        <Card className="mx-5 my-5">
          <Card.Header style={{ backgroundColor: 'darkGray', color: 'white'}}>
            { title }
          </Card.Header>
          <Card.Body style={{ backgroundColor: 'lightGray'}} className='d-flex justify-content-center'>
            { children }
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default ColorCard;
