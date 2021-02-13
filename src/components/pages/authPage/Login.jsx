import React from 'react';

function Login(props) {
    return (
        <div>
            <div>
                <h1>Welcome!</h1>
            </div>
            <form action="#" className='login-form'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder='Username' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Password' />
                <div>
                    <div>
                        <a href="#">Forgot Password</a>
                        <a href="#">Sign up</a>
                    </div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;