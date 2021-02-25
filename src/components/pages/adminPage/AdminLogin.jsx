import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function AdminLogin(props) {
    const [auth, setAuth] = useState({ username: '', password: '' })

    const handleSubmit = async event => {
        event.preventDefault()

        // await axios.post('', auth)
        // .then(() => localStorage.setItem('admin', DATAHERE))
    }

    return (
        <div className='LoginContainer'>
            <div>
                <h1 className='authTitle'>Admin Login</h1>
            </div>
            <form action="#" className='form-container' onSubmit={handleSubmit}>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" name="username" id="username" placeholder='Username' className='form-input-text' value={auth.username} onChange={e => setAuth({ ...auth, username: e.target.value })} />
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" name="password" id="password" placeholder='Password' className='form-input-text' value={auth.password} onChange={e => setAuth({ ...auth, password: e.target.value })} />
                <div style={{ width: '100%' }}>
                    <button className='form-button' style={{ width: '100%' }}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;