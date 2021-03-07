import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { authAdd } from '../../../app/auth'
import route from '../../../route/instagive'
import '../../../style/authPage/login.css';

import {TextField, Button} from '@material-ui/core'



function Login(props) {
  const [auth, setAuth] = useState({ username: '', password: '' });
  const [error, setError] = useState({

    valid: false,
    msg: ''

  });
  


  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data } = await route.post('/user/login', auth);

    if (data.valid !== true) {
      setError({valid: true, msg: data.valid })

    } else {
      // Set Item
      localStorage.setItem('user', data.token)
      props.authAdd(data.token, 'user')
      props.history.push('/user')

    }

    // If there is error in auth, set the error to TRUE
    setAuth({username: '', password: ''})
  };







  return (
    <div className='LoginContainer'>
      {/* Show this if the error is true */}
   
   

      <div>
        <h1 className='authTitle'>Welcome!</h1>



      </div>
      <form className='form-container' >
      
      {error && <p style={{
        color: 'red',
        alignSelf: 'center',
        fontSize: '1.6rem'
        
        
      }}>{error.msg}</p>}

        <TextField
          type='text'
          name='email'
          id='email'
          className='form-input-text'
          margin="normal"

          variant="outlined"
          label="Enter Email"
          autoFocus
          
          required={true}
          value={auth.username}
          onChange={(e) => setAuth({ ...auth, username: e.target.value })}
        />
    
        <TextField
          type='password'
          margin="normal"
          required={true}
          fullWidth
          name='password'
          id='password'
          variant="outlined"
          label="Enter Password"
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
            <Button fullWidth style={{margin: '10px'}} color="primary" variant="contained" onClick={handleSubmit}>Login</Button>
           
            <Button  style={{margin: '10px'}} fullWidth variant="contained"
              onClick={() => props.history.push('/auth/register')}
            >
              Sign up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default connect(null, { authAdd })(Login);
