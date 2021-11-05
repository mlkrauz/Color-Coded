import React from 'react';
import Auth from '../utils/auth';

import ColorBank from '../components/ColorBank';
import Colorpicker from '../components/ColorPicker/Colorpicker';
import ColorCard from '../components/ColorCard';

const Design = () => {
  if(Auth.loggedIn()) {
    return (
      <>
        <ColorCard title='Select which theme to design!'>
          <ColorBank />
        </ColorCard>
        <ColorCard title='Design your theme!'>
          <Colorpicker />
        </ColorCard>
      </>
    )
    } else {
    return (
      window.location.href = "/login"
      )
    }
  }

export default Design;
