import React from 'react';
import Stack from 'react-bootstrap/Stack';
import ColorBank from '../components/ColorBank';
import Colorpicker from '../components/ColorPicker/Colorpicker';


const Design = () => {
  return (
    <Stack direction="horizontal" className="d-flex justify-content-between" gap={5} className="mx-5" >
   
   <Colorpicker/>
   
    <ColorBank />
    

    </Stack>
  )
  }



export default Design;