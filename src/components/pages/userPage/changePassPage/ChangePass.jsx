import React, { useState, useEffect } from 'react';
import axios from 'axios'

function ChangePass(props) {
    const [buttonStatus, setButtonStatus] = useState(true)
    const [confirmPass, setConfirmPass] = useState('')
    const [password, setPassword] = useState({
        oldPass: '',
        newPass: ''
    })

    const handleSubmit = async () => {
        await axios.post('', password)
    }

    useEffect(() => {
        if (password.oldPass <= 0) return setButtonStatus(true)
        else if (password.newPass.trim().length <= 0) return setButtonStatus(true)
        else if (password.newPass.trim() === confirmPass) return setButtonStatus(false)
        return setButtonStatus(true)
    }, [password, confirmPass])


    return (
        <div>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="oldPass">Old password</label>
                <input type="password"
                    name='oldPass'
                    id='oldPass'
                    value={password.oldPass}
                    onChange={e => setPassword({ ...password, oldPass: e.target.value })}
                />

                <label htmlFor="newPass">New password</label>
                <input type="password"
                    name='newPass'
                    id='newPass'
                    value={password.newPass}
                    onChange={e => setPassword({ ...password, newPass: e.target.value })}
                />

                <label htmlFor="">Confirm New password</label>
                <input type="password"
                    name='confirmPass'
                    id='confirmPass'
                    value={confirmPass}
                    onChange={e => setConfirmPass(e.target.value)}
                />
                <button disabled={buttonStatus}>Change Password</button>
            </form>
        </div>
    );
}

export default ChangePass;