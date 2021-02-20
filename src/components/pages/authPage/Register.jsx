import React, { useState } from 'react';
import axios from 'axios';
import '../../../style/authPage/register.css'

function Register(props) {
    const [checkPassword, setCheckPassword] = useState({ confirm_pass: '' })
    const [userForm, setUserForm] = useState({
        email: '',
        password: '',
        city: '',
        orgName: '',
        orgAddress: '',
        orgPhoto: '',
        orgNumber: '',
        repName: '',
        repId: '',
        orgDocuments: [],
        orgDescriptions: ''
    })


    const handleChange = (event) => {

        setUserForm({ ...userForm, [event.currentTarget.name]: event.currentTarget.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userForm);
         axios.post('http://localhost:5000/user/register', userForm)

        // setUserForm({
        //     email: '',
        //     password: '',
        //     city: '',
        //     orgName: '',
        //     orgAddress: '',
        //     orgPhoto: '',
        //     orgNumber: '',
        //     repName: '',
        //     repId: '',
        //     orgDocuments: [],
        //     orgDescription: ''
        // })
    }

    return (
        <div className='register-container'>
            <div>
                <h1 className='authTitle'>Account Details</h1>
            </div>
            <form encType="multipart/form-data" action="" onSubmit={handleSubmit}>
                <div className="register-form1">
                    <div className='register-input-container1'>
                        <label className='form-label' htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={userForm.email} placeholder='Email' className='register-form-input-text' onChange={handleChange} />
                        <label className='form-label' htmlFor="password" >Password</label>
                        <input type="text" name="password" id="password" value={userForm.password} placeholder='Password' className='register-form-input-text' onChange={handleChange} />
                        <label className='form-label' htmlFor="confirm-pass">Confirm Password</label>
                        <input type="text" name="confirm-pass" id="confirm-pass" placeholder='confirm Password' className='register-form-input-text' onChange={e => setCheckPassword(e.target.value)} />
                    </div>
                </div>
                <div className="register-form2">
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="orgName">Organization Name</label>
                        <input type="text" name="orgName" value={userForm.orgName} onChange={handleChange} id="orgName" placeholder='Organization Name' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="orgNumber">Organization No.</label>
                        <input type="text" name="orgNumber" value={userForm.orgNumber} onChange={handleChange} id="orgNumber" placeholder='Organization No.' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="city">City</label>
                        <input type="text" name="city" value={userForm.city} onChange={handleChange} id="city" placeholder='City' className='register-form-input-text' />
                    </div>
                    <div className='register-input-container2'>
                        <label className='form-label' htmlFor="orgAddress">Organization Address</label>
                        <input type="text" name="orgAddress" value={userForm.orgAddress} onChange={handleChange} id="orgAddress" placeholder='Organization Address' className='register-form-input-text' />
                    </div>
                </div>
                <div className='register-input-container2'>
                    <label className='form-label' htmlFor="repName">Representative Name</label>
                    <input type="text" name="repName" value={userForm.repName} onChange={handleChange} id="repName" placeholder='Representative Name' className='register-form-input-text' />
                </div>
                <div className='register-input-container2'>
                    <label className='form-label' htmlFor="repId">Representative ID</label>
                    <input type="file" id="repId" name="repId" value={userForm.repId} onChange={handleChange} className='form-input-file'></input>
                </div>
                <div className='register-input-container2'>
                    <label className='form-label' htmlFor="orgDocuments">Organization Documents</label>
                    <input type="file" id="orgDocuments" name="orgDocuments" value={userForm.orgDocuments} onChange={handleChange} multiple className='form-input-file'></input>
                </div>
                <div className='register-input-container2'>
                    <label className='org-photo' htmlFor="orgPhoto">Organization Photo</label>
                    <input type="file" id="orgPhoto" name="orgPhoto" value={userForm.orgPhoto} onChange={handleChange} className='form-input-file' />
                </div>
                <div className='register-org-description-container'>
                    <label className='org-photo' htmlFor="orgDescriptions">Organization Description</label>
                    <textarea name="orgDescriptions" value={userForm.orgDescription} onChange={handleChange} id="orgDescription" className='register-form-input-text'></textarea>
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