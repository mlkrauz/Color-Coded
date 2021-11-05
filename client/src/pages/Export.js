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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non adipisci nobis expedita possimus pariatur, quia error optio omnis magni, accusamus alias, corporis accusantium provident perferendis perspiciatis? Eius, quia rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam, minima neque consectetur at ab vero. Suscipit perferendis sunt ut expedita? Deserunt hic in rem? A tempora ad doloremque iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores cumque cupiditate illo deserunt. Beatae earum, aliquam nobis corrupti molestiae ipsum sequi doloremque vero perferendis itaque animi accusantium commodi quidem.
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