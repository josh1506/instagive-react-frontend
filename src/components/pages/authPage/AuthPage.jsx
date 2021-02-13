import React from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPass from './ForgotPass';

function AuthPage(props) {
    return (
        <div>
            <Login />
            <Register />
            <ForgotPass />
        </div>
    );
}

export default AuthPage;