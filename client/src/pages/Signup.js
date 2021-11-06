import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER, ADD_THEME, ADD_COLOR } from '../utils/mutations';
import { QUERY_SINGLE_THEME } from '../utils/queries'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import ColorCard from '../components/ColorCard';

function Signup(props) {
    const [formState, setFormState] = useState({ name: '', email: '', password: ''});
    // const [errorMessage, setErrorMessage] = useState('');
    const [addUser, { error }] = useMutation(ADD_USER);
    const [addTheme, { error2 }] = useMutation(ADD_THEME);
    const [addColor, { error3 }] = useMutation(ADD_COLOR);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {

          const color1 = await addColor({
            variables: {
              color: '#222222'
            }
          })

          const color2 = await addColor({
            variables: {
              color: '#444444'
            }
          })

          const color3 = await addColor({
            variables: {
              color: '#666666'
            }
          })

          const color4 = await addColor({
            variables: {
              color: '#888888'
            }
          })

          const color5 = await addColor({
            variables: {
              color: '#aaaaaa'
            }
          })

          const newTheme = await addTheme({
            variables: {
              primary: color1.data.addColor._id,
              backgrounds: [color2.data.addColor._id, color3.data.addColor._id, color4.data.addColor._id, color5.data.addColor._id],
            }
          })

          const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                name: formState.name,
                themes: [newTheme.data.addTheme._id]
            },
        });

        const token = mutationResponse.data.addUser.token;
        Auth.login(token, mutationResponse.data.addUser.user._id);
        setFormState({ name: '', email: '', password: ''});
      } catch (err) {
        console.log(err);
      }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    return (
        <div>
          <ColorCard title='Signup'>
            <Link to="/login">← Go to Login</Link>

            <form className="p-3" onSubmit={handleFormSubmit}>
                <Stack gap={2} className="col-md-5 mx-4 ps-5 ">
                <div className="pb-2">
                    <label htmlFor='name'>Name:</label>
                    <input
                        placeholder='Name'
                        name='name'
                        type='name'
                        id='name'
                        onChange={handleChange}
                    />
                </div>
                <div className="pb-2">
                    <label htmlFor='email'>Email:</label>
                    <input
                      placeholder='youremail@test.com'
                      name='email'
                      type='email'
                      id='email'
                      onChange={handleChange}
                    />
                </div>
                <div className="pb-2">
                  <label htmlFor='pwd'>Password:</label>
                  <input
                    placeholder="******"
                    name='password'
                    type='password'
                    id='pwd'
                    onChange={handleChange}
                  />
                </div>
                {error ? (
          <div>
            <p>
              The password must be at least 8 characters long
            </p>
          </div>
        ) : null}
                <div>
                  <Button as='input' type='submit' value='Submit' variant='outline-dark'></Button>
                </div>
                </Stack>
            </form>
            </ColorCard>
        </div>
    );
}

export default Signup;