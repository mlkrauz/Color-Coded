import React from 'react';
import ColorBankRow from './ColorBankRow';
import Card from 'react-bootstrap/Card';

export default function ColorBank() {
  return (
    <div>
      <Card fluid border='dark'>
        <ColorBankRow /> 
      </Card>
    </div>
  );
}