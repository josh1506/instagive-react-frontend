import React, { useState } from 'react';
import axios from 'axios';
import '../../../style/authPage/register.css';
import { Link } from 'react-router-dom';
import {
  Checkbox,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from '@material-ui/core/';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MuiAlert from '@material-ui/lab/Alert';

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

  console.log(terms);

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

    const data = await axios.post(
      'http://localhost:5000/user/register',
      formdata
    );
    handleClickAlert();
    console.log(data);

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
      orgDescriptions: '',
    });

    setCheckPassword({
      confirm_pass: '',
    });

    setFiles({
      orgPhoto: '',
      orgDocuments: '',
      repId: '',
    });

    setTerms(false);

    document.getElementById('contained-repID').value = null;
    document.getElementById('contained-button-orgDocuments').value = null;
    document.getElementById('contained-button-orgPhoto').value = null;
  };

  const [snacker, setSnacker] = useState(false);

  const handleClickAlert = () => {
    setSnacker(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnacker(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  };

  const [listOrgDocuments, setListOrgDocuments] = useState('');
  const [listRepId, setlistRepId] = useState('');
  const [listOrgPhoto, setlistOrgPhoto] = useState('');

  const [openModal, setModal] = useState(false);

  const handleClickOpen = async () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  const handleCheckbox = () => {
    setModal(false);
    setTerms(true);
  };

  return (
    <div style={{ marginLeft: '65px' }} className='register-container'>
      <Snackbar
        open={snacker}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity='success'>
          Successfully Requested Account
        </Alert>
      </Snackbar>

      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogTitle
          id='form-dialog-title'
          style={{ alignSelf: 'center', fontSize: '50px' }}
        >
          TERMS AND CONDITIONS
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Pleae Read:</DialogContentText>
          <b>1. ACCEPTANCE OF TERMS</b> <br />
          <br />
          Instagive provides the Platform to you (visitors and registered users,
          collectively referred to as the “User”) subject to the following Terms
          and Conditions (collectively, the “Terms”). By using the Platform, you
          agree to be bound by these Terms, our Privacy Policy, all applicable
          laws and all conditions or policies referenced here. <br />
          <br />
          Instagive reserves the right to modify these Terms without notice to
          you, and it is the responsibility of the User to check the Terms
          periodically for any modifications. Continued use of the Platform
          subsequent to the changes mentioned means that you accept the changes
          made.
          <br />
          <br />
          <br />
          <b>2. ELIGIBILITY</b> <br />
          <br />
          2.1 You are not eligible to use the Platform without consent if you
          are under 18 years of age. If you are between the ages of 13 and 17,
          you can use the Platform with the consent and supervision of your
          parent or legal guardian who is at least 18 years old, provided that
          your parent or legal guardian also agrees to be bound by these Terms
          and agrees to be responsible for your use of the Platform.
          <br />
          <br />
          2.2 You are not eligible to use the Platform if you have previously
          been suspended from using the Platform for any reason and we have not
          explicitly authorized you to resume using the Platform.
          <br />
          <br />
          2.3 A representative of an organization is not eligible to use the
          Platform unless they have proper authorization and is capable of
          binding the organization to the Terms.
          <br />
          <br />
          <b>3. PLATFORM ACCESS</b> <br /> <br />
          <br />
          3.1 If the User is eligible (see Sec. 2, of the Terms), the Platform
          is free to use, however starting a Campaign and getting access to
          features such as Creating Post is limited to registered individuals or
          organizations only. You can register by signing up at Instagive.com.
          By signing up as a registered individual or organization, you agree
          to: <br />
          <br />
          1. provide true, accurate, current and complete information about
          yourself, and your organization if applicable, as prompted during the
          signup process, starting a Campaign process and any later
          administration processes (collectively, User Data). <br />
          <br /> 2. maintain and promptly update the User Data to keep it true,
          accurate, current and complete. <br />
          <br /> <br />
          <b>4. LIABILITY</b> <br />
          4.1 Instagive is not responsible for any problems regarding the transaction
          between the Launcher and the Giver. If a problem arises that refunds
          are due, Launchers have the responsibility to provide refunds to
          Givers at their own discretion. <b>The Company will NOT be held liable
          for refunds or lack thereof.</b>
        <br/><br/>
        <b>For other concerns or verifications, please contact us at </b><a href="mailto:instagive2021@gmail.com<">instagive2021@gmail.com</a>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Back
          </Button>
          <Button variant='contained' onClick={handleCheckbox} color='primary'>
            Accept and Continue
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        <h1 className='authTitle'>Account Details</h1>
      </div>
      <form encType='multipart/form-data' onSubmit={handleSubmit}>
        <div className='register-form1'>
          <div className='register-input-container1'>
            <TextField
              variant='outlined'
              color='primary'
              style={{ marginBottom: '12px' }}
              required
              type='email'
              name='email'
              id='email'
              value={userForm.email}
              label='Enter Email'
              className='register-form-input-text'
              onChange={handleChange}
            />

            <TextField
              variant='outlined'
              color='primary'
              style={{ marginBottom: '12px' }}
              required
              type='password'
              name='password'
              value={userForm.password}
              label='Enter Password'
              className='register-form-input-text'
              onChange={handleChange}
            />

            <TextField
              required
              variant='outlined'
              color='primary'
              style={{ marginBottom: '12px' }}
              label='Confirm Password'
              value={checkPassword.confirm_pass}
              type='password'
              name='confirm-pass'
              className='register-form-input-text'
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>
        </div>
        <div className='register-form2'>
          <div
            style={{ marginBottom: '12px' }}
            className='register-input-container2'
          >
            <TextField
              required
              variant='outlined'
              color='primary'
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
              variant='outlined'
              color='primary'
              required
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
              variant='outlined'
              color='primary'
              required
              type='text'
              name='city'
              value={userForm.city}
              onChange={handleChange}
              id='city'
              label='Enter City'
              className='register-form-input-text'
            />
          </div>
          <div
            style={{ marginBottom: '12px' }}
            className='register-input-container2'
          >
            <TextField
              variant='outlined'
              color='primary'
              required
              type='text'
              name='orgAddress'
              value={userForm.orgAddress}
              onChange={handleChange}
              id='orgAddress'
              label='Enter Organization Address'
              className='register-form-input-text'
            />
          </div>
          <div
            style={{ marginBottom: '12px' }}
            className='register-input-container2'
          >
            <TextField
              variant='outlined'
              color='primary'
              required
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
            <input
              id='contained-repID'
              type='file'
              required
              name='repId'
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files[0];
                handlerepId(file);
                setlistRepId(e.target.files.length);
              }}
            />

            <label htmlFor='contained-repID'>
              <Button
                style={{ marginTop: '12px' }}
                variant='outlined'
                color='primary'
                component='span'
              >
                {`Upload Valid Representative ID: ${listRepId}`}
              </Button>
            </label>
          </div>

          <div>
            <input
              id='contained-button-orgDocuments'
              multiple
              type='file'
              required
              name='orgDocuments'
              style={{ display: 'none' }}
              onChange={(e) => {
                const multifiles = e.target.files;
                handleorgDocuments(multifiles);
                setListOrgDocuments(multifiles.length);
              }}
            />

            <label htmlFor='contained-button-orgDocuments'>
              <Button variant='outlined' color='primary' component='span'>
                {`Upload Organization Documents: ${listOrgDocuments}`}
              </Button>
            </label>
          </div>
          <div
            style={{ marginBottom: '12px' }}
            className='register-input-container2'
          >
            <input
              id='contained-button-orgPhoto'
              type='file'
              required
              name='orgPhoto'
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files[0];
                handleorgPhoto(file);
                setlistOrgPhoto(e.target.files.length);
              }}
            />

            <label htmlFor='contained-button-orgPhoto'>
              <Button variant='outlined' color='primary' component='span'>
                {`Upload Org Photo Reference: ${listOrgPhoto}`}
              </Button>
            </label>
          </div>
        </div>

        <div
          style={{ marginBottom: '12px' }}
          className='register-org-description-container'
        >
          <TextField
            variant='outlined'
            color='primary'
            required
            rows={6}
            multiline
            name='orgDescriptions'
            value={userForm.orgDescriptions}
            onChange={handleChange}
            id='orgDescriptions'
            placeholder='Enter Organization Description'
            className='register-form-input-text'
          />
        </div>

        <Checkbox
          style={{ marginTop: '-8px' }}
          checked={terms}
          name='checkedB'
          color='primary'
        />
        <Button
          onClick={handleClickOpen}
          variant='text'
          style={{ marginBottom: '5px' }}
          color='primary'
        >
          TERMS AND CONDITION
        </Button>

        <div className='form-button-container'>
          <Button variant='outlined' color='default'>
            <Link to='/auth/login' className='form-link'>
              Cancel
            </Link>
          </Button>

          <Button
            disabled={!terms}
            variant='contained'
            color='primary'
            type='submit'
            className='form-button'
          >
            Send Registration
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
