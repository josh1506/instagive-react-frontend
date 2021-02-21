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
            </div>
            <div className='authForm'>
                <div className='center'>
                    <Switch>
                        <Route path='/auth/login' component={Login} />
                        <Route path='/auth/register' component={Register} />
                        <Route path='/auth/forgot' component={ForgotPass} />
                        <Redirect from='/auth' to='/auth/login' exact />
                        <Redirect to='/not-found' />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;