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
  Tooltip,
} from '@material-ui/core/';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MuiAlert from '@material-ui/lab/Alert';

function Register(props) {
  const [checkPassword, setCheckPassword] = useState({
    confirm_pass: '',
    valid: true,
    message: 'Verify Password',
  });

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

  const [terms, setTerms] = useState({
    status: false,
    disableButton: true,
  });

  const [files, setFiles] = useState({
    orgDocuments: '',
    repId: '',
  });

  const handleChange = (event) => {
    if (event.target.name === 'password') {
      if (event.target.value.length === 0) {
        setPassComplexity({
          message:
            'Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter',
          valid: true,
        });
        console.log('meow');
      }
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if (event.target.value.match(regex)) {
        setPassComplexity({ valid: true, message: 'VALID PASSWORD' });
      } else if (
        !event.target.value.match(regex) &&
        event.target.value.length !== 0
      ) {
        setPassComplexity({
          message:
            'Password Not Valid! Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter',
          valid: false,
        });
      }
    } else if (event.target.name === 'confirm-pass') {
      if (event.target.value !== userForm.password) {
        setCheckPassword({
          confirm_pass: event.target.value,
          message: 'Password is not the same!',
          valid: false,
        });
      } else if (event.target.value === userForm.password) {
        setCheckPassword({
          confirm_pass: event.target.value,
          message: 'Password Match!',
          valid: true,
        });
      }

      if (event.target.value.length === 0) {
        setCheckPassword({
          confirm_pass: event.target.value,
          message: 'Verify Password',
          valid: true,
        });
      }
    }

    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const allowedFiles = [
    'jpg',
    'jpeg',
    'png',
    'pdf',
    'docs',
    'docx',
    'document',
  ];

  const handlerepId = (file, e) => {
    const fileToArray = file.name.split('.');

    if (!allowedFiles.includes(fileToArray[fileToArray.length - 1])) {
      handleClickAlert('Format Not Allowed!', 'error');
      e.preventDefault();
    } else {
      setFiles({ ...files, repId: file });
      setlistRepId(e.target.files.length);
    }
  };

  const handleorgDocuments = (multifiles, e) => {
    for (let index = 0; index < multifiles.length; index++) {
      let file = multifiles[index].name.split('.');
      if (!allowedFiles.includes(file[file.length - 1])) {
        handleClickAlert('Some Formats not Allowed', 'error');

        return e.preventDefault();
      }
    }

    setFiles({ ...files, orgDocuments: multifiles });
    setListOrgDocuments(multifiles.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('repId', files.repId);

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
      'https://instagive-backend.herokuapp.com/user/register',
      formdata,
    );
    handleClickAlert('Successfully Requested Account!', 'success');
    console.log(data);

    setUserForm({
      email: '',
      password: '',
      city: '',
      orgName: '',
      orgAddress: '',
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
      orgDocuments: '',
      repId: '',
    });

    setTerms({ ...terms, status: false });

    setListOrgDocuments(0);
    setlistRepId(0);

    document.getElementById('contained-repID').value = null;
    document.getElementById('contained-button-orgDocuments').value = null;
  };

  const [snacker, setSnacker] = useState({
    status: false,
    message: '',
    severity: 'success',
  });

  const handleClickAlert = (message, severity) => {
    setSnacker({ message, status: true, severity });
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnacker({ status: false, message: '', severity: 'success' });
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const [listOrgDocuments, setListOrgDocuments] = useState('');
  const [listRepId, setlistRepId] = useState('');

  const [openModal, setModal] = useState(false);

  const handleClickOpen = async () => {
    setModal(true);

  };

  const handleClose = () => {
    setModal(false);
    setTerms({ ...terms ,disableButton: true, });
  };
  const handleCheckbox = () => {
    setModal(false);
    setTerms({ ...terms, status: true });
  };

  
const[openDocuModal, setDocuModal] = useState(false)

  const handleClickOpenDocument = async () => {
      setDocuModal(true)
  }
  const handleCloseDocument = async () => {
    setDocuModal(false)

  }


  const [passComplexity, setPassComplexity] = useState({
    valid: true,
    message:
      'Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter',
  });

  const handleScroll = (e) => {
    const lowest =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (lowest) setTerms({ disableButton: false, status: false });
    else setTerms({ disableButton: true, status: false });
  };
  return (
    <div style={{ marginLeft: '65px' }} className="register-container">
      <Snackbar
        open={snacker.status}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity={snacker.severity}>
          {snacker.message}
        </Alert>
      </Snackbar>


      <Dialog
        open={openDocuModal}
        onClose={handleCloseDocument}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
      >

<DialogTitle
          id="form-dialog-title"
          style={{ alignSelf: 'center', fontSize: '50px' }}
        >
          Valid Documents
        </DialogTitle>
          <DialogContent style={{whiteSpace: 'pre-line'}}>
<h1>Valid ID: </h1>
<br/><br/>
<p>
Passport including those issued by foreign governments <br/> <br/>
Driver's license <br/> <br/>
Professional Regulation Commission (PRC) ID <br/> <br/>
Postal ID <br/> <br/>
Voter’s ID <br/> <br/>
Taxpayer Identification Number (TIN) <br/> <br/>
Government Service Insurance System (GSIS) e-Card <br/> <br/>
Social Security System (SSS) card <br/> <br/>
Senior Citizen card <br/> <br/>
Overseas Workers Welfare Administration (OWWA) ID <br/> <br/>
Overseas Filipino Worker (OFW) ID <br/> <br/>
Government office and Government-owned and Controlled Corporation (GOCC) ID e.g., Armed Forces of the Philippines (AFP), Home Development Mutual Fund (HDMF) IDs <br/> <br/>
ID issued by the National Council on Disability Affairs <br/> <br/>
Integrated Bar of the Philippines (IBP) ID <br/> <br/>
Company IDs issued by private entities or institutions registered with or supervised or regulated either by the Bangko Sentral ng Pilipinas (BSP), Securities and Exchange Commission (SEC) or Insurance Commission (IC) <br/> <br/>
PhilHealth Health Insurance Card ng Bayan <br/> <br/>
National Bureau of Investigation (NBI) Clearance <br/> <br/>
Police Clearance <br/> <br/>
Baranggay Certification <br/> <br/>
Seaman’s Book <br/> <br/>
Alien Certificate of Registration / Immigrant Certificate of Registration <br/> <br/>
Department of Social Welfare and Development (DSWD) Certification <br/> <br/>
Professional ID cards issued by Maritime Industry Authority (MARINA)<br/><br/>
</p>
<h1>Valid Documents: </h1>
<br/><br/>
Business Registration document<br/><br/>
Billing Statement<br/><br/>
Notarized Application Form submitted to DSWD<br/><br/>

          </DialogContent>
          <DialogActions>
          <Button onClick={handleCloseDocument} color="primary">
            Back
          </Button>
        </DialogActions>
        </Dialog>

      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ alignSelf: 'center', fontSize: '50px' }}
        >
          TERMS AND CONDITIONS
        </DialogTitle>
        <DialogContent onScroll={handleScroll}>
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
          4.1 Instagive is not responsible for any problems regarding the
          transaction between the Launcher and the Giver. If a problem arises
          that refunds are due, Launchers have the responsibility to provide
          refunds to Givers at their own discretion.{' '}
          <b>Instagive will NOT be held liable for refunds or lack thereof.</b>
          <br />
          <br />
          <b>For other concerns or verifications, please contact us at </b>
          <a href="mailto:instagive2021@gmail.com<">instagive2021@gmail.com</a>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleCheckbox}
            color="primary"
            disabled={terms.disableButton}
          >
            Accept and Continue
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        <h1 className="authTitle">Account Details</h1>
      </div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="register-form1">
          <div className="register-input-container1">
            <TextField
              variant="outlined"
              color="primary"
              style={{ marginBottom: '12px' }}
              required
              type="email"
              name="email"
              id="email"
              value={userForm.email}
              label="Enter Email"
              className="register-form-input-text"
              onChange={handleChange}
            />
            <Tooltip title={passComplexity.message}>
              <TextField
                variant="outlined"
                color={passComplexity.valid === true ? 'primary' : 'secondary'}
                style={{ marginBottom: '12px' }}
                required={true}
                type="password"
                name="password"
                value={userForm.password}
                label="Enter Password"
                className="register-form-input-text"
                onChange={handleChange}
              />
            </Tooltip>

            <Tooltip title={checkPassword.message}>
              <TextField
                required={true}
                variant="outlined"
                color={checkPassword.valid === true ? 'primary' : 'secondary'}
                style={{ marginBottom: '12px' }}
                label="Confirm Password"
                value={checkPassword.confirm_pass}
                type="password"
                name="confirm-pass"
                className="register-form-input-text"
                onChange={handleChange}
                disabled={
                  passComplexity.valid === true
                    ? userForm.password.length !== 0
                      ? false
                      : true
                    : true
                }
              />
            </Tooltip>
          </div>
        </div>

        <div className="register-form2">
          <div
            style={{ marginBottom: '12px' }}
            className="register-input-container2"
          >
            <TextField
              required
              variant="outlined"
              color="primary"
              type="text"
              name="orgName"
              value={userForm.orgName}
              onChange={handleChange}
              id="orgName"
              label="Enter Organization Name"
              className="register-form-input-text"
            />
          </div>
          <div className="register-input-container2">
            <TextField
              variant="outlined"
              color="primary"
              required
              type="number"
              name="orgNumber"
              value={userForm.orgNumber}
              onChange={handleChange}
              id="orgNumber"
              label="Enter Organization Contact Number"
              className="register-form-input-text"
              onKeyDown={(e) =>
                ['e', 'E', '+', '-', ';', ',', '#', '*'].includes(e.key) &&
                e.preventDefault()
              }
            />
          </div>
          <div className="register-input-container2">
            <TextField
              variant="outlined"
              color="primary"
              required
              type="text"
              name="city"
              value={userForm.city}
              onChange={handleChange}
              id="city"
              label="Enter City"
              className="register-form-input-text"
            />
          </div>
          <div
            style={{ marginBottom: '12px' }}
            className="register-input-container2"
          >
            <Tooltip title="House#, Street #, Village/Subdivision  Example: #442, Street 5, Brgy. Dolores">
              <TextField
                variant="outlined"
                color="primary"
                required
                type="text"
                name="orgAddress"
                value={userForm.orgAddress}
                onChange={handleChange}
                id="orgAddress"
                label="Enter Organization Address"
                className="register-form-input-text"
              />
            </Tooltip>
          </div>
          <div
            style={{ marginBottom: '12px' }}
            className="register-input-container2"
          >
            <Tooltip
              title={`First Name, Middle Initial, Lastname 
            Example: Juan C. Dela Cruz`}
            >
              <TextField
                variant="outlined"
                color="primary"
                required
                type="text"
                name="repName"
                value={userForm.repName}
                onChange={handleChange}
                id="repName"
                label="Enter Representative Name"
                className="register-form-input-text"
              />
            </Tooltip>
          </div>


          <div className="register-input-container2">
            <input
              id="contained-repID"
              type="file"
              required
              name="repId"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files[0];
                handlerepId(file, e);
              }}
            />
 
          <Tooltip title="Only Avaiable Files: JPG, PNG, JPEG, DOCS, DOCX, PDF">
            <label htmlFor="contained-repID">
              <Button
                style={{ marginTop: '12px' }}
                variant="outlined"
                color="primary"
                component="span"
              >
                {`Upload Valid Representative ID: ${listRepId}`}
              </Button>
            </label>
          </Tooltip>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <input
              id="contained-button-orgDocuments"
              multiple
              type="file"
              required
              name="orgDocuments"
              style={{ display: 'none' }}
              onChange={(e) => {
                const multifiles = e.target.files;
                handleorgDocuments(multifiles, e);
              }}
            />
        
        <Tooltip title="Only Avaiable Files: JPG, PNG, JPEG, DOCS, DOCX, PDF">

            <label htmlFor="contained-button-orgDocuments">
              <Button variant="outlined" color="primary" component="span">
                {`Upload Organization Documents: ${listOrgDocuments}`}
              </Button>
            </label>
            </Tooltip>
          </div>
          <div
            style={{ marginBottom: '12px' }}
            className="register-input-container2"
          ></div>
        </div>
                
        <div
          style={{ marginBottom: '12px' }}
          className="register-org-description-container"
        >
          <TextField
            variant="outlined"
            color="primary"
            required
            rows={6}
            multiline
            name="orgDescriptions"
            value={userForm.orgDescriptions}
            onChange={handleChange}
            id="orgDescriptions"
            placeholder="Enter Organization Description"
            className="register-form-input-text"
          />
        </div>

        <Checkbox
          style={{ marginTop: '-8px' }}
          checked={terms.status}
          name="checkedB"
          color="primary"
        />



        <Button
          onClick={handleClickOpen}
          variant="text"
          style={{ marginBottom: '5px' }}
          color="primary"
        >
          TERMS AND CONDITION
        </Button>
      
        <Button
          onClick={handleClickOpenDocument}
          variant="text"
          style={{ marginBottom: '4px' }}
          color="primary"
        >
          Valid Documents/ID
        </Button>



        <div className="form-button-container">
          <Button variant="outlined" color="default">
            <Link to="/auth/login" className="form-link">
              Cancel
            </Link>
          </Button>

          <Button
            disabled={
              terms.status === true
                ? checkPassword.valid === true
                  ? checkPassword.confirm_pass.length !== 0
                    ? false
                    : true
                  : true
                : true
            }
            variant="contained"
            color="primary"
            type="submit"
            className="form-button"
          >
            Send Registration
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
