import React, { useState } from 'react';
import Auth from '../utils/auth';

import Card from 'react-bootstrap/Card';
import ExportButton from '../components/ExportButton';
import ColorCard from '../components/ColorCard.js';

const Export = () => {

  if(Auth.loggedIn()) {
    return (
      <ColorCard title='Pick which theme to export!'>
        <Card className="my-4 mx-1">
          <Card.Body>
            <hr />
            This page is under construction. Please come back soon for future developments.
            <hr />
            <ExportButton/>
          </Card.Body>
        </Card>
      </ColorCard>
    )
  } else {
    return (
      window.location.href = '/login'
    )
  }
}



export default Export;