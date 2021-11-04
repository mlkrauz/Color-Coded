import React from 'react';
import ColorBankRow from './ColorBankRow';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

export default function ColorBank() {
  return (
    <div>
      <Card fluid border='dark'>
        <ListGroup>
        <ListGroup.Item><ColorBankRow /></ListGroup.Item> 
        <ListGroup.Item><ColorBankRow /></ListGroup.Item> 
        <ListGroup.Item><ColorBankRow /></ListGroup.Item> 
        </ListGroup>
      </Card>
    </div>
  );
}