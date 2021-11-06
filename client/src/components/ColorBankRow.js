import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_THEME } from '../utils/queries';

export default function ColorBankRow({ theme }) {

  const [colors, setColors] = useState([]);

  const { loading, data } = useQuery(
    QUERY_SINGLE_THEME,
    {
      variables: { id: theme._id },
    }
  )

  useEffect(() => {
    const theme = data?.theme

    setColors([
      theme?.primary,
      ...theme?.backgrounds || [],
      ...theme?.accents || [],
      ...theme?.typefaces || [],
      theme?.hyperlink_clicked || [],
      theme?.hyperlink_unclicked || []
    ])
  }, [loading, data, setColors]);

  return (
    <>
      <Container className="d-flex p-4 px-1 bg-secondary">
        <Container>
          <ButtonGroup vertical>
            <Button variant="outline-dark" size="lg" >Edit</Button>
            <Button variant="outline-dark" size="sm">Delete</Button>
          </ButtonGroup>
        </Container>
        <Stack direction="horizontal" className='mx-3 my-3 d-flex justify-content-center' gap={3}>
          {colors.map((colorObj) => {
            return (colorObj ?
              <Card 
                className="p-3 mx-1"
                border="dark"
                style={{ width: '1rem', height: '5rem', 'background': colorObj.color }}
              /> : <></>
            )
          })}
        </Stack>
      </Container>
    </>
  );
}