import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../style/authPage/login.css';

function Login(props) {
  const [auth, setAuth] = useState({ username: '', password: '' });

  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const valid = await axios.post('http://localhost:5000/user/login', auth);

    if (valid.data.valid !== true) {
      window.alert(valid.data.valid);
    } else {
      // Set Item
      console.log(valid.data.token);
      localStorage.setItem('user', valid.data.token)
      window.location.reload();

      window.alert('Login Success');
    }

    // If there is error in auth, set the error to TRUE
  };

  return (
    <div className='LoginContainer'>
      {/* Show this if the error is true */}
      {error && <div>Error</div>}

      <div>
        <h1 className='authTitle'>Welcome!</h1>
      </div>
      <form action='#' className='form-container' onSubmit={handleSubmit}>
        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Username'
          className='form-input-text'
          required
          value={auth.username}
          onChange={(e) => setAuth({ ...auth, username: e.target.value })}
        />
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          className='form-input-text'
          required
          value={auth.password}
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}
        />
        <div style={{ width: '100%' }}>
          <Link to='/auth/forgot' className='form-link'>
            Forgot Password
          </Link>
          <div className='form-button-container'>
            <button className='form-button'>Login</button>
            <button
              className='form-button'
              onClick={() => props.history.push('/auth/register')}
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
