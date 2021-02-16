import React from 'react';
import '../../../style/authPage/register.css'

function Register(props) {
    return (
        <div className='register-container'>
            <div>
                <h1 className='authTitle'>Account Details</h1>
            </div>
            <form action="">
                <div className="register-form1">
                    <img src="" alt="Upload photo here" />
                    <div className='register-input-container1'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder='Email' className='form-input-text' />
                        <label className='form-label' htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" placeholder='Password' className='form-input-text' />
                        <label className='form-label' htmlFor="confirm-pass">Confirm Password</label>
                        <input type="text" name="confirm-pass" id="confirm-pass" placeholder='confirm Password' className='form-input-text' />
                    </div>
                </div>
                <div className="register-form2">
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-name">Organization Name</label>
                        <input type="text" name="org-name" id="org-name" placeholder='Organization Name' className='form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-num">Organization No.</label>
                        <input type="text" name="org-num" id="org-num" placeholder='Organization No.' className='form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="city">City</label>
                        <input type="text" name="city" id="city" placeholder='City' className='form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="zip-code">Zip Code</label>
                        <input type="text" name="zip-code" id="zip-code" placeholder='Zip Code' className='form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-address">Organization Address</label>
                        <input type="text" name="org-address" id="org-address" placeholder='Organization Address' className='form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-doc">Organization Documents</label>
                        <input type="file" id="org-doc" name="org-doc" multiple></input>
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="rep-name">Representative Name</label>
                        <input type="text" name="rep-name" id="rep-name" placeholder='Representative Name' className='form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="rep-id">Representative ID</label>
                        <input type="file" id="rep-id" name="rep-id" multiple></input>
                    </div>
                </div>
                <div>
                    <label className='form-label' htmlFor="org-description">Organization Description</label>
                    <textarea name="org-description" id="org-description" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <a href="" className='form-link'>Cancel</a>
                    <button className='form-button'>Send Registration</button>
                </div>
            </form>
        </div>
    );
}

export default Register;