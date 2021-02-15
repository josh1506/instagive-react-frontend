import React from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPass from './ForgotPass';

function AuthPage(props) {
    return (
        <div>
            <div>
                <img src="" alt="Image here" />
            </div>
            <div>
                <Login />
                <Register />
                <ForgotPass />
            </div>
        </div>
    );
}

export default AuthPage;