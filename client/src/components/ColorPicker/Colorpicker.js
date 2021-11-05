import React, { useState } from 'react';

import IroColorPicker from '../ColorPicker/IroColorPicker'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack'
import Ratio from 'react-bootstrap/Ratio'
import Button from 'react-bootstrap/Button'

function Colorpicker(props) {
  
  const [state, setstate] = useState({
    iroColor: '#ffffff',
    newColor: '#ffffff'
  });

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <div md='5' className='d-flex justify-content-center overflow-scroll'  style={{ width: '8rem', height: '35rem' }}>
          <Stack direction="vertical" className='mx-3 my-3 d-flex justify-content-center'>
            <Button className='my-2' variant="secondary">🔼</Button>
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
            <Ratio className='my-2' aspectRatio='1x1'>
              <div style={{'background': '#000000'}}>
              </div>
            </Ratio>
            <Ratio className='my-2' aspectRatio='1x1'>
              <div style={{'background': '#000000'}}>
              </div>
            </Ratio>
            <Ratio className='my-2' aspectRatio='1x1'>
              <div style={{'background': '#000000'}}>
              </div>
            </Ratio>
            <Button className='my-2' variant="secondary">🔽</Button>
          </Stack>
        </div>
        <Container md='9' className='d-flex justify-content-center'>
          <IroColorPicker
            newColor={state.newColor}
            onChangeCallback={(colorString) => setstate({ ...state, iroColor: colorString })}
          />
        </Container>
      </Stack>
    </Container>
  );
}

export default Colorpicker;
