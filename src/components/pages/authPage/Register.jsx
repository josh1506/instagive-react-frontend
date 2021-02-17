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
                    <div className='register-input-container1'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder='Email' className='register-form-input-text' />
                        <label className='form-label' htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" placeholder='Password' className='register-form-input-text' />
                        <label className='form-label' htmlFor="confirm-pass">Confirm Password</label>
                        <input type="text" name="confirm-pass" id="confirm-pass" placeholder='confirm Password' className='register-form-input-text' />
                    </div>
                </div>
                <div className="register-form2">
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-name">Organization Name</label>
                        <input type="text" name="org-name" id="org-name" placeholder='Organization Name' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-num">Organization No.</label>
                        <input type="text" name="org-num" id="org-num" placeholder='Organization No.' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="city">City</label>
                        <input type="text" name="city" id="city" placeholder='City' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="zip-code">Zip Code</label>
                        <input type="text" name="zip-code" id="zip-code" placeholder='Zip Code' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-address">Organization Address</label>
                        <input type="text" name="org-address" id="org-address" placeholder='Organization Address' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="org-doc">Organization Documents</label>
                        <input type="file" id="org-doc" name="org-doc" multiple className='form-input-file'></input>
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="rep-name">Representative Name</label>
                        <input type="text" name="rep-name" id="rep-name" placeholder='Representative Name' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="rep-id">Representative ID</label>
                        <input type="file" id="rep-id" name="rep-id" multiple className='form-input-file'></input>
                    </div>
                </div>
                <div className='register-org-description-container'>
                    <label className='org-photo' htmlFor="org-photo">Organization Photo</label>
                    <input type="file" id="org-photo" name="org-photo" multiple className='form-input-file' />
                    <label className='org-photo' htmlFor="org-description">Organization Description</label>
                    <textarea name="org-description" id="org-description" className='register-form-input-text'></textarea>
                </div>
                <div className='form-button-container'>
                    <a href="" className='form-link'>Cancel</a>
                    <button className='form-button'>Send Registration</button>
                </div>
            </form>
        </div>
    );
}

export default Register;