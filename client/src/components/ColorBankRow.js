import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function ColorBankRow() {
  return (
    <div>
      <Row>
        <Col xs={1}>
          <ButtonGroup vertical>
            <Button variant="outline-dark" >Edit</Button>
            <Button variant="outline-dark">Delete</Button>
          </ButtonGroup>
        </Col>
        <Col>
        <Card
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        </Col>
        <Col>
        <Card
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        </Col>
        <Col>
        <Card
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        </Col>
        <Col>
        <Card
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        </Col>
        <Col>
        <Card
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        </Col>
      </Row>
    </div>
  );
}