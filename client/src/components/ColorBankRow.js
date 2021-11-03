import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function ColorBankRow() {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="primary">Edit</Button>
         <Button variant="primary">Delete</Button>
      </ButtonGroup>
    </div>
  );
}