import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';

import ColorBank from '../components/ColorBank';
import Colorpicker from '../components/ColorPicker/Colorpicker';
import ColorCard from '../components/ColorCard';

const Design = ({ userId }) => {

  const [themes, updateThemes] = useState([{ _id: '6182bd18485f54eafd520006'}]);

  const { loading, data } = useQuery(
    QUERY_SINGLE_USER,
    {
      variables: { id: userId },
    }
  )

  const [currentThemeIndex, updateCurrentThemeIndex] = useState(0)

  useEffect(() => {
    updateThemes(data?.user.themes || [{ _id: '6182bd18485f54eafd520006'}])
  },[loading, data, updateThemes]);

  const updateThemeCb = (incomingThemeIndex) => updateCurrentThemeIndex(incomingThemeIndex)

  if(Auth.loggedIn()) {
    return (
      <>
        <ColorCard title='Select which theme to design!'>
          <ColorBank themes={themes} updateThemeCb={updateThemeCb} />
        </ColorCard>
        <ColorCard title='Design your theme!'>
          <Colorpicker theme={themes[currentThemeIndex]} currentThemeIndex={currentThemeIndex} loading={loading} />
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
