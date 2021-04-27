import React, { useState, useEffect } from 'react';
import '../../style/common/sidebarDonor.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReCAPTCHA from "react-google-recaptcha";

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import { Snackbar, Chip, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));


function SideBarDonor(props) {
  const classes = useStyles();
  const { selectedPost: {
    totalDonors,
    totalAmount,
    currentAmount,
    itemQuantity,
    donationType,
    _id,
    location

  }
  } = props
  const [donorList, setDonorList] = useState([])

  useEffect(() => {
    const postId = _id

    const getDonors = async () => {
      const { data } = await axios.get(`https://instagive-backend.herokuapp.com/ledger/getpostrecords/${props.match.params.id}`)

      setDonorList(data.filter(data => data.status === 'Approved'))


    }
    getDonors()
  }, [])


  const [donateForm, setDonateForm] = useState({

    donorName: '',
    amount: 0,
    remarks: '',
    email: '',
    donationType: 'Cash',
    paymentAddress: ''

  })


  const [openModal, setModal] = useState(false);

  const handleClickOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };


  const [captcha, setCaptcha] = useState(false)

  const handleCaptcha = (value) => {
    
      if(value !== null) setCaptcha(true);

  }


  const handleSubmit = async (e) => {

    e.preventDefault()


// Site Key = 6LeZELwaAAAAAJr4hCyldepcnin7DElTijIPY5bv
// Secret Key = 6LeZELwaAAAAAJhu_f2dQl2tL9PRLIrw_TMOAwrx

    if (donateForm.amount === 0) return handleClose()
    else {
      await axios.post(`https://instagive-backend.herokuapp.com/ledger/pending/${_id}`, { ...donateForm, token: localStorage.getItem('user') })
        .catch(err => console.log('Error: ', err))



    }


  }

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
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }






  return (
    <aside>



      <Snackbar open={snacker} autoHideDuration={2000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success">
          Successfully Donated
  </Alert>


      </Snackbar>








      <div className='sidebar-donor'>


        {donationType === "In-Kind" ?
          <div>
            <Chip style={{ marginBottom: '10px', width: '200px' }} label={location} variant="outlined" color="primary" /> <br></br>
            <Chip style={{ width: '200px' }} label={donationType === "Both" ? 'Cash/In-Kind' : donationType} variant="outlined" color="primary" />
          </div>
          :
          <div>
            <Chip style={{ marginBottom: '10px' }} label={location} variant="outlined" color="primary" /> <br></br>
            <Chip label={donationType === "Both" ? 'Cash/In-Kind' : donationType} variant="outlined" color="primary" />
          </div>
        }





        {donationType === 'Both' || donationType === 'Cash' ?
          <div>
            <div>
              <h3 className='sidebar-donor-data'>₱{currentAmount}</h3>
              <p className='sidebar-donor-text'>Total Raise</p>
            </div>
            <div>
              <h3 className='sidebar-donor-data'>₱{totalAmount}</h3>
              <p className='sidebar-donor-text'>Target Amount</p>
            </div>



          </div>
          : ''}

        {donationType === 'Both' || donationType === 'In-Kind' ?

          <div>
            <h3 className='sidebar-donor-data'>&nbsp;&nbsp;{itemQuantity}</h3>
            <p className='sidebar-donor-text'>&nbsp;Items Donated</p>
          </div>

          : ''}




        <div>
          <h3 className='sidebar-donor-data'>&nbsp;&nbsp;{totalDonors}</h3>
          <p className='sidebar-donor-text'>&nbsp;&nbsp;Donors</p>
        </div>





        <Button variant="contained" color="primary" style={{ margin: '20px 0 0 5px' }} onClick={handleClickOpen}>Donate Now</Button>




      </div>

      <div className='button-donor-list'>
        <p>
          {props.children}
        </p>
       
      </div>

      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth={true}>
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title" style={{ alignSelf: 'center', fontSize: '50px' }}>Donate</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fill the Inputs Bellow:
          </DialogContentText>



            <TextField
              variant="outlined"

              margin="dense"
              id="name"
              label="Name"
              placeholder="(Blank for Anonymous Donation)"
              type="text"
              fullWidth={true}
              onChange={(e) =>
                setDonateForm({ ...donateForm, donorName: e.target.value })
              }
            />


            {donationType === 'Both' &&
              <FormControl
                style={{ marginBottom: '12px' }}
                fullWidth={true}
                component='fieldset'
              >
                <FormLabel component='legend'>Select Donation Type</FormLabel>

                <RadioGroup
                  aria-label='gender'
                  name='gender1'
                  value={donateForm.donationType}
                  onChange={(e) =>
                    setDonateForm({ ...donateForm, donationType: e.target.value })
                  }
                >
                  <FormControlLabel
                    value='Cash'
                    control={<Radio />}
                    label='Cash'
                  />

                  <FormControlLabel
                    value='In-Kind'
                    control={<Radio />}
                    label='In-Kind'
                  />
                </RadioGroup>
              </FormControl>

            }



            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="paymentAddress"
              // inputProps={{ pattern: '[0-9]' }}
              label={donationType === 'Both' ? donateForm.donationType === 'Cash' ? "Enter type of Payment(Required)" : 'Where did you donate the item? (Required)' : donationType === 'Cash' ? "Enter type of Payment (Required)" : 'Where did you donate the item? (Required)'}
              placeholder={donationType === 'Both' ? donateForm.donationType === 'Cash' ? "etc. Gcash, Paymaya, BPI" : 'Address' : donationType === 'Cash' ? "Etc. Gcash, Paymaya, BPI" : 'Address'}
              required={true}
              type="text"
              inputProps={{ min: 0 }}
              fullWidth={true}
              onChange={(e) =>
                setDonateForm({ ...donateForm, paymentAddress: e.target.value })
              }
            />







            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="amount"
              // inputProps={{ pattern: '[0-9]' }}
              label={donationType === 'Both' ? donateForm.donationType === 'Cash' ? "Enter Cash Amount (Required)" : 'Enter Item Quantity (Required)' : donationType === 'Cash' ? "Enter Cash Amount (Required)" : 'Enter Item Quantity (Required)'}
              required={true}
              type="number"
              inputProps={{ min: 0 }}
              fullWidth={true}
              onChange={(e) =>
                setDonateForm({ ...donateForm, amount: e.target.value })
              }
            />





            <TextField

              variant="outlined"
              margin="dense"
              id="email"
              label="Email (Optional)"
              placeholder="For Sending  aCertificate"
              type="email"
              fullWidth={true}
              onChange={(e) =>
                setDonateForm({ ...donateForm, email: e.target.value })
              }
            />

            <TextField
              variant="outlined"
              margin="dense"
              id="outlined-multiline-static"
              label="Message (Optional)"
              placeholder="Max input 100 characters"
              rows={4}
              type="text"
              multiline
              fullWidth={true}
              inputProps={{ maxLength: 100 }}
              onChange={(e) =>
                setDonateForm({ ...donateForm, remarks: e.target.value })
              }
            />



<ReCAPTCHA
    sitekey="6LeZELwaAAAAAJr4hCyldepcnin7DElTijIPY5bv"
    onChange={handleCaptcha}
  />,




          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
            <Button type="submit" disabled={donateForm.amount === 0 || captcha === false} color="primary">
              Donate
          </Button>

          </DialogActions>

        </form>
      </Dialog>







    </aside>
  );
}

export default SideBarDonor;