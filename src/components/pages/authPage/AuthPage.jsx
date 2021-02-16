import React from 'react';
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
                    <Login />
                    {/* <Register /> */}
                    {/* <ForgotPass /> */}
                </div>
            </div>
        </div>
    );
}

export default AuthPage;