import React from 'react';
import Auth from '../utils/auth';

import ColorBank from '../components/ColorBank';
import Colorpicker from '../components/ColorPicker/Colorpicker';
import ColorCard from '../components/ColorCard';
import { useUserContext } from '../utils/userContext'

const Design = () => {

  const { user } = useUserContext();
  console.log(user);

  if(Auth.loggedIn()) {
    return (
      <>
        <ColorCard title='Select which theme to design!'>
          <ColorBank themes={user.themes}/>
        </ColorCard>
        {user.name}
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
