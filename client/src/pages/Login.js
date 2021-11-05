import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ColorCard from '../components/ColorCard';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email,
        password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      setFormState({ email: '', password: '' });
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
  };

  return (
    <div>
      <ColorCard title='Login'>
      <Link to='/signup'>← Go to Signup</Link>

      <form className="p-3 " onSubmit={handleFormSubmit}>
        <Stack gap={2} className="col-md-5 mx-5 ps-5">
        <div>
          <label className="me-2" htmlFor='email'>Email address:</label>
          <input className="my-1"
            placeholder='youremail@test.com'
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="me-2 " htmlFor='pwd'>Password:</label>
          <input className="my-1 justify-content-end"
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p>
              The provided credentials are incorrect
            </p>
          </div>
        ) : null}
        <div>
          <Button className="mt-2" as='input' type='submit' value='Submit' variant='outline-dark'></Button>
        </div>
        </Stack>
      </form>
      </ColorCard>
    </div>

  );  
}

export default Login;