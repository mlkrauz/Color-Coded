import React, { useState, useEffect } from 'react';

import IroColorPicker from '../ColorPicker/IroColorPicker'

import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack'
import Ratio from 'react-bootstrap/Ratio'
import Button from 'react-bootstrap/Button'

function Colorpicker({ theme }) {
  
  const [state, setstate] = useState({
    iroColor: '#ffffff',
    newColor: '#ffffff'
  });

  const [colors, setColors] = useState([
    theme.primary,
    ...theme.backgrounds || [],
    ...theme.accents || [],
    ...theme.typefaces || [],
    theme.hyperlink_clicked,
    theme.hyperlink_unclicked
  ]);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    setColors([
      theme.primary,
      ...theme.backgrounds || [],
      ...theme.accents || [],
      ...theme.typefaces || [],
      theme.hyperlink_clicked,
      theme.hyperlink_unclicked
    ])
  }, [theme])

  const selectColorCb = (index) => setSelectedColor(index)

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <div md='5' className='d-flex justify-content-center overflow-hidden'  style={{ width: '8rem', height: '35rem' }}>
          <Stack direction="vertical" className='mx-3 my-3 d-flex justify-content-center'>
          {colors.map((colorObj, index) => {
              return (colorObj ?
                <Button 
                  key={index}
                  className='my-2'
                  style={{width: '5rem', height: '5rem', 'background': colorObj.color}}
                  onClick={() => selectColorCb(index)}
                >
                  {(index === selectedColor ? '✔️' : '' )}
                </Button>
              : 
              <></> 
              )
            })}
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
