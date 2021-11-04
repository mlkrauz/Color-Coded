import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack'
import Ratio from 'react-bootstrap/Ratio'
import Button from 'react-bootstrap/Button'

function Colorpicker() {



  return (
    <Card fluid>
      <Stack direction="horizontal" gap={3}>
        <div md='5' className='d-flex justify-content-center overflow-hidden'  style={{ width: '8rem', height: '35rem' }}>
          <Stack direction="vertical" className='mx-3 my-3 d-flex justify-content-center'>
            <Button className='my-2' variant="outline-primary">🔼</Button>
            <Ratio className='my-2' aspectRatio='1x1'>
              <div className='d-flex justify-content-center' style={{'background': '#FF0000'}}>
              </div>
            </Ratio>
            <Ratio className='my-2' aspectRatio='1x1'>
              <div className='d-flex justify-content-center align-items-center' style={{'background': '#00FF00'}}>
              ✔️
              </div>
            </Ratio>
            <Ratio className='my-2' aspectRatio='1x1'>
              <div style={{'background': '#0000FF'}}>
              </div>
            </Ratio>
            <Ratio className='my-2' aspectRatio='1x1'>
              <div style={{'background': '#000000'}}>
              </div>
            </Ratio>
            <Button className='my-2' variant="outline-primary">🔽</Button>
          </Stack>
        </div>
        <Card md='9' className='d-flex justify-content-center'>
          test
        </Card>
      </Stack>
    </Card>
  );
}

export default Colorpicker;
