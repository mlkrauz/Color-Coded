import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import ColorCard from '../components/ColorCard';

function Signup(props) {
    const [formState, setFormState] = useState({ name: '', email: '', password: ''});
    // const [errorMessage, setErrorMessage] = useState('');
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {

        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                name: formState.name,
            },
        });


        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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