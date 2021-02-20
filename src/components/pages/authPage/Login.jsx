import React, { useState } from 'react';
import '../../../style/authPage/login.css'

function Login(props) {
    const [] = useState({})
    return (
        <div className='LoginContainer'>
            <div>
                <h1 className='authTitle'>Welcome!</h1>
            </div>
            <form action="#" className='form-container'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" name="username" id="username" placeholder='Username' className='form-input-text' />
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" name="password" id="password" placeholder='Password' className='form-input-text' />
                <div style={{ width: '100%' }}>
                    <a href="#" className='form-link'>Forgot Password</a>
                    <div className='form-button-container'>
                        <button className='form-button'>Login</button>
                        <button className='form-button'>Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;