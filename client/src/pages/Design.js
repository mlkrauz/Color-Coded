import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';

import ColorBank from '../components/ColorBank';
import Colorpicker from '../components/ColorPicker/Colorpicker';
import ColorCard from '../components/ColorCard';

const Design = ({ userId }) => {

  const { loading, data } = useQuery(
    QUERY_SINGLE_USER,
    {
      variables: { id: userId },
    }
  )

  const themes = data?.user.themes || [];

  if(Auth.loggedIn()) {
    return (
      <>}
        <ColorCard title='Select which theme to design!'>
          <ColorBank themes={themes}/>
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
