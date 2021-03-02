import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../../../style/authPage/forgotPassword.css'
import axios from 'axios'


function ForgotPass(props) {
    const [email, setEmail] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    
 

    const handleSubmit = event => {
        event.preventDefault()


    const query = async () =>{


       const forgotPass =  await axios.post('http://localhost:5000/user/forgotPassword', {email})
        console.log(forgotPass.data.valid)

        if(forgotPass.data.valid === false) {
            setErrorMessage(true); 
            setShowMessage(false);
        }
        else if(forgotPass.data.valid === true){ 
             setShowMessage(true);
             setErrorMessage(false)
        } 

        setEmail('');



    }

    query();
        
    }

    return (
        <div className='forgot-pass-container'>
            <div className='forgot-pass-title'>
                <h1 className='authTitle'>Forgot Password</h1>
                <p className='authDetails'>You can change your password for security reasons or reset it if you forget it. Your Google Account password is used to access many Google products, like Gmail and YouTube.</p>
            </div>
            <form action="" className='form-container' onSubmit={handleSubmit}>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" name="email" id="email" value={email} className='form-input-text' onChange={e => {setEmail(e.target.value); console.log(email)}} />
                {showMessage && <p>We sent a temporary password in your email, please change it after you logged in</p> }
                {errorMessage && <p>Email Not Found</p> }
          
          
          
                <button className='form-button'>Send</button>

          
            </form>
            
            
            
            
            <div style={{ width: '100%' }} className='form-button-container'>
                <div>
                    <Link to="/auth/login" className='form-link'>Login</Link>
                    <Link to="/auth/register" className='form-link'>Signup</Link>
                </div>
               
            </div>
        </div>
    );
}

export default ForgotPass;