import React from 'react';
import Auth from '../utils/auth';

import Stack from 'react-bootstrap/Stack';
import ColorBank from '../components/ColorBank';
import Colorpicker from '../components/ColorPicker/Colorpicker';



const Design = () => {

  if(Auth.loggedIn()) {
    return (
      <Stack direction="horizontal" className="d-flex justify-content-between" gap={5} className="mx-5" >
     
     <Colorpicker/>
     
      <ColorBank />
      
  
      </Stack>
    )
    } else {
    return (
      window.location.href = "/login"
      )
    }
  }



export default Design;