import React from 'react';
import ColorBankRow from './ColorBankRow';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

export default function ColorBank({ themes }) {
  return (
      <ListGroup>
        {themes.map((theme) => {
            return (
              <ListGroup.Item><ColorBankRow theme={theme} /></ListGroup.Item>
            )
          })
        }
      </ListGroup>
  );
}