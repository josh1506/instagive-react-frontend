import React, { useState } from 'react';
import axios from 'axios';
import '../../../style/authPage/register.css';
import { Link } from 'react-router-dom';
import {Checkbox, Button} from '@material-ui/core/';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function Register(props) {
  const [checkPassword, setCheckPassword] = useState({ confirm_pass: '' });
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
    city: '',
    orgName: '',
    orgAddress: '',

    orgNumber: '',
    repName: '',

    orgDescriptions: '',
  });


  const [terms, setTerms] = useState(false);




  const [files, setFiles] = useState({
    orgPhoto: '',
    orgDocuments: '',
    repId: '',
  });

  const handleChange = (event) => {
    console.log(event.target.value);

    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const handlerepId = (file) => {
    setFiles({ ...files, repId: file });
  };

  const handleorgPhoto = (file) => {
    setFiles({ ...files, orgPhoto: file });
  };

  const handleorgDocuments = (multifiles) => {
    setFiles({ ...files, orgDocuments: multifiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('repId', files.repId);
    formdata.append('orgPhoto', files.orgPhoto);

    for (const key in files.orgDocuments) {
      formdata.append('orgDocuments', files.orgDocuments[key]);
    }

    formdata.append('email', userForm.email);
    formdata.append('city', userForm.city);
    formdata.append('password', userForm.password);

    formdata.append('orgName', userForm.orgName);
    formdata.append('orgAddress', userForm.orgAddress);
    formdata.append('orgNumber', userForm.orgNumber);
    formdata.append('repName', userForm.repName);
    formdata.append('orgDescriptions', userForm.orgDescriptions);

    const data = await axios.post('http://localhost:5000/user/register', formdata);
    console.log(data)

    setUserForm({
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

    

    setFiles({
      orgPhoto: '',
      orgDocuments: '',
      repId: '',
    })


    document.getElementById('repId').value = null;
    document.getElementById('orgDocuments').value = null;
    document.getElementById('orgPhoto').value = null;



  };



  return (
    <div className='register-container'>
      <div>
        <h1 className='authTitle'>Account Details</h1>
      </div>
      <form encType='multipart/form-data'  onSubmit={handleSubmit}>
        <div className='register-form1'>
          <div className='register-input-container1'>
        
            <TextField
            variant="outlined" color="primary"
            style={{marginBottom: '12px'}}

              type='email'
              name='email'
              id='email'
              value={userForm.email}
              label='Enter Email'
              className='register-form-input-text'
              onChange={handleChange}
            />
           
            <TextField
            variant="outlined" color="primary"
            style={{marginBottom: '12px'}}

              type='password'
              name='password'
              value={userForm.password}
              label='Enter Password'
              className='register-form-input-text'
              onChange={handleChange}
            />
           
            <TextField
            variant="outlined" color="primary"
            style={{marginBottom: '12px'}}

              type='password'
              name='confirm-pass'
              id='confirm-pass'
              label='Confirm Password'
              className='register-form-input-text'
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>
        </div>
        <div className='register-form2'>
          <div style={{marginBottom: '12px'}}
 className='register-input-container2'>
           
            <TextField
            variant="outlined" color="primary"

              type='text'
              name='orgName'
              value={userForm.orgName}
              onChange={handleChange}
              id='orgName'
              label='Enter Organization Name'
              className='register-form-input-text'
            />
          </div>
          <div className='register-input-container2'>
            
            <TextField
            variant="outlined" color="primary"

              type='number'
              name='orgNumber'
              value={userForm.orgNumber}
              onChange={handleChange}
              id='orgNumber'
              label='Enter Organization Contact Number'
              className='register-form-input-text'
            />
          </div>
          <div className='register-input-container2'>
           
            <TextField
            variant="outlined" color="primary"

              type='text'
              name='city'
              value={userForm.city}
              onChange={handleChange}
              id='city'
              label='Enter City'
              className='register-form-input-text'
          
          />
          </div>
          <div style={{marginBottom: '12px'}}
 className='register-input-container2'>
            
            <TextField
            variant="outlined" color="primary"

              type='text'
              name='orgAddress'
              value={userForm.orgAddress}
              onChange={handleChange}
              id='orgAddress'
              label='Enter Organization Address'
              className='register-form-input-text'
            />
          </div>
          <div className='register-input-container2'>
           
            <TextField
            variant="outlined" color="primary"

              type='text'
              name='repName'
              value={userForm.repName}
              onChange={handleChange}
              id='repName'
              label='Enter Representative Name'
              className='register-form-input-text'
            />
          </div>

          <div className='register-input-container2'>
            <label className='form-label' htmlFor='repId'>
              Representative ID
            </label>
            <input
              type='file'
              id='repId'
              name='repId'
              onChange={(e) => {
                const file = e.target.files[0];
                handlerepId(file);
              }}
              className='form-input-file'
            ></input>
          </div>

          <div className='register-input-container2'>
            <label className='form-label' htmlFor='orgDocuments'>
              Organization Documents
            </label>
            <input
              type='file'
              id='orgDocuments'
              name='orgDocuments'
              onChange={(e) => {
                const multifiles = e.target.files;
                handleorgDocuments(multifiles);
              }}
              multiple
              className='form-input-file'
            ></input>
          </div>
          <div className='register-input-container2'>
            <label className='org-photo' htmlFor='orgPhoto'>
              Organization Photo
            </label>
            <input
              type='file'
              id='orgPhoto'
              name='orgPhoto'
              onChange={(e) => {
                const file = e.target.files[0];
                handleorgPhoto(file);
              }}
              className='form-input-file'
            />
          </div>
        </div>
        <div style={{marginBottom: '12px'}}
 className='register-org-description-container'>
         
          <TextField

          variant="outlined" color="primary"
              rows={6}
              multiline
            name='orgDescriptions'
            value={userForm.orgDescriptions}
            onChange={handleChange}
            id='orgDescriptions'
            placeholder="Enter Organization Description"
            className='register-form-input-text'
          />
        </div>
        <div className='form-button-container'>
        
              <Button variant="outlined" color="default" >
          <Link to='/auth/login' className='form-link'>
            Cancel
          </Link>
          </Button>
       
       
       
       
       
          <Button  variant="contained" color="primary" type="submit" className='form-button'>Send Registration</Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
