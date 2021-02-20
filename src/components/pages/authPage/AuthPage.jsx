import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import ForgotPass from './ForgotPass';
import '../../../style/authPage/authPage.css'

function AuthPage(props) {
    return (
        <div className='auth-container'>
            <div className='authBackgroundImage'>
                {/* <img src={image} alt="Image here" className='authImage' /> */}
            </div>
            <div className='authForm'>
                <div className='center'>
                    <Route path='/auth/login' component={Login} />
                    <Route path='/auth/register' component={Register} />
                    <Route path='/auth/forgot' component={ForgotPass} />
                </div>
            </div>
        </div>
    );
}

export default AuthPage;