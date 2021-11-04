import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';


export default function ColorBankRow() {
  return (
    <div>
      <Container className="d-flex p-4 px-1 bg-secondary">
        <Container>
          <ButtonGroup vertical>
            <Button variant="outline-dark" size="sm" >Edit</Button>
            <Button variant="outline-dark" size="lg">Delete</Button>
          </ButtonGroup>
        </Container>
        <Container className="d-flex justify-content-between  ">
        <Card className="p-3 mx-1"
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        
        
        <Card className="p-3 mx-1"
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        
        
        <Card className="p-3 mx-1"
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
       
        <Card className="p-3 mx-1"
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>

       
        <Card className="p-3 mx-1"
        border="dark"
        style={{ width: '1rem' }}
        style={{ height: '5rem'}}/>
        </Container>
      </Container>
    </div>
  );
}