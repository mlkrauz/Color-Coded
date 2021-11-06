import React from 'react';
import ColorBankRow from './ColorBankRow';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

export default function ColorBank({ themes, updateThemeCb }) {

  return (
    <Stack direction="horizontal" className='mx-3 my-3 d-flex justify-content-center' gap={3}>
        {themes.map((theme, index) => {
            return (
              <ColorBankRow key={index} theme={theme} />
            )
          })
        }
    </Stack>
  );
}