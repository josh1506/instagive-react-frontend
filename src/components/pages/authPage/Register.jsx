import React from 'react';

function Register(props) {
    return (
        <div >
            <div>
                <h1>Account Details</h1>
            </div>
            <form action="" className='register-form'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder='Username' />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" placeholder='Password' />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" placeholder='Password' />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" placeholder='Password' />
                <div>
                    <a href="">Cancel</a>
                    <button>Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default Register;