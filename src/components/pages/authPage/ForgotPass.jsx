import React, { useState } from 'react';
import '../../../style/authPage/forgotPassword.css'

function ForgotPass(props) {
    const [email, setEmail] = useState({ email: '' })
    return (
        <div className='forgot-pass-container'>
            <div className='forgot-pass-title'>
                <h1 className='authTitle'>Forgot Password</h1>
                <p className='authDetails'>You can change your password for security reasons or reset it if you forget it. Your Google Account password is used to access many Google products, like Gmail and YouTube.</p>
            </div>
            <form action="" className='form-container'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" name="email" id="email" className='form-input-text' />
            </form>
            <div style={{ width: '100%' }} className='form-button-container'>
                <div>
                    <a href="" className='form-link'>Login</a>
                    <a href="" className='form-link'>Signup</a>
                </div>
                <button className='form-button'>Send</button>
            </div>
        </div>
    );
}

export default ForgotPass;