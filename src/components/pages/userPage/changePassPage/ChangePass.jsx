import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChangePass(props) {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [password, setPassword] = useState({
    oldPass: '',
    newPass: '',
  });

  const [errorMessage, setErrorMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const changePassword = await axios.post(
      'http://localhost:5000/user/changepassword',
      { ...password, token: localStorage.getItem('user') }
    );
    console.log(changePassword.data.valid);

    if (changePassword.data.valid === false) {
      setErrorMessage(true);
      setShowMessage(false);
    } else if (changePassword.data.valid === true) {
      setShowMessage(true);
      setErrorMessage(false);
    }

    setPassword({
      oldPass: '',
      newPass: '',
    });

    setConfirmPass('');
  };

  useEffect(() => {
    if (password.oldPass <= 0) return setButtonStatus(true);
    else if (password.newPass.trim().length <= 0) return setButtonStatus(true);
    else if (password.newPass.trim() === confirmPass)
      return setButtonStatus(false);
    return setButtonStatus(true);
  }, [password, confirmPass]);

  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='oldPass'>Old password</label>
        <input
          type='password'
          name='oldPass'
          id='oldPass'
          value={password.oldPass}
          onChange={(e) =>
            setPassword({ ...password, oldPass: e.target.value })
          }
        />

        <label htmlFor='newPass'>New password</label>
        <input
          type='password'
          name='newPass'
          id='newPass'
          value={password.newPass}
          onChange={(e) =>
            setPassword({ ...password, newPass: e.target.value })
          }
        />

        <label htmlFor=''>Confirm New password</label>
        <input
          type='password'
          name='confirmPass'
          id='confirmPass'
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        {errorMessage && <p>Old Password is Incorrect</p>}
        {showMessage && <p>Password Successfuly Changed</p>}

        <button disabled={buttonStatus}>Change Password</button>
      </form>
    </div>
  );
}

export default ChangePass;
