import React from 'react';

function ForgotPass(props) {
    return (
        <div>
            <div>
                <h1>Forgot Password</h1>
                <p>Text Here</p>
            </div>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </form>
            <div>
                <div>
                    <a href="">Login</a>
                    <a href="">Signup</a>
                </div>
                <button>Send</button>
            </div>
        </div>
    );
}

export default ForgotPass;