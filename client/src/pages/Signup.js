import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { validateEmail, validatePassword } from '../utils/helpers';
import Button from 'react-bootstrap/Button'

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                name: formState.name,
            },
        });

        if (!validateEmail(mutationResponse.email)) {
            setErrorMessage('Email is invalid');
            return;
          }

          if (!validatePassword(mutationResponse.password)) {
            setErrorMessage('Password needs to be at least 8 characters');
            return;
          }

        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>
            <Link to="/login">← Go to Login</Link>

            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        placeholder='name'
                        name='name'
                        type='name'
                        id='name'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                      placeholder='youremail@test.com'
                      name='email'
                      type='email'
                      id='email'
                      onChange={handleChange}
                    />
                </div>
                <div>
                  <label htmlFor='pwd'>Password:</label>
                  <input
                    placeholder="******"
                    name='password'
                    type='password'
                    id='pwd'
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Button as='input' type='submit' value='Submit' variant='outline-dark'></Button>
                </div>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
    );
}

export default Signup;