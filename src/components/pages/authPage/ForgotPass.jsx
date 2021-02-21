import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../../../style/authPage/forgotPassword.css'

function ForgotPass(props) {
    const [email, setEmail] = useState({ email: '' })
    const [showMessage, setShowMessage] = useState(false)

    const handleSendEmail = () => {
        setShowMessage(true)
    }

    const handleSubmit = event => {
        event.preventDefault()

        // handleSendEmail()
    }

    return (
        <div className='forgot-pass-container'>
            <div className='forgot-pass-title'>
                <h1 className='authTitle'>Forgot Password</h1>
                <p className='authDetails'>You can change your password for security reasons or reset it if you forget it. Your Google Account password is used to access many Google products, like Gmail and YouTube.</p>
            </div>
            <form action="" className='form-container' onSubmit={handleSubmit}>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" name="email" id="email" className='form-input-text' />
                {showMessage ? <p>We send a request password in your email</p> : ''}
            </form>
            <div style={{ width: '100%' }} className='form-button-container'>
                <div>
                    <Link to="/auth/login" className='form-link'>Login</Link>
                    <Link to="/auth/register" className='form-link'>Signup</Link>
                </div>
                <button className='form-button' onClick={handleSendEmail}>Send</button>
            </div>
        </div>
    );
}

export default ForgotPass;