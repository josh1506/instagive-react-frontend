import React, {useState} from 'react';
import '../../style/common/sidebarDonor.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Snackbar} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';








function SideBarDonor(props) {
    const { selectedPost: {
        totalDonors,
        totalAmount,
        currentAmount,
        itemQuantity,
        donationType,
        _id
        
    }
    } = props

    console.log(props)
    
  const [donateForm, setDonateForm] = useState({

    name: '',
    amount: 0,
    message: '',
    email: '',



  })


  const [openModal, setModal] = useState(false);

  const handleClickOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
      setModal(false);
  };


  const handleSubmit = async () => {

    if (donateForm.amount === 0) return handleClose()
    else await axios.post(`http://localhost:5000/donate/${_id}`, donateForm)
    handleClose()
    handleClickAlert()

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




  const Alert =(props)  => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  



    return (
        <aside className='sidebar-donor'>



<Snackbar open={snacker} autoHideDuration={2000} onClose={handleCloseAlert}>
  <Alert onClose={handleCloseAlert} severity="success">
        Successfully Donated
  </Alert>


</Snackbar>








            <div>
              
            
            
              {donationType === 'Both' || donationType ==='Cash' ? 
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
                                                         : '' }

{donationType === 'Both' || donationType ==='In-Kind' ? 
                                      
                <div>
                    <h3 className='sidebar-donor-data'>&nbsp;&nbsp;{itemQuantity}</h3>
                    <p className='sidebar-donor-text'>&nbsp;Items Donated</p>
                </div>

: '' }
              


              
                <div>
                    <h3 className='sidebar-donor-data'>&nbsp;&nbsp;{totalDonors}</h3>
                    <p className='sidebar-donor-text'>&nbsp;&nbsp;Donors</p>
                </div>
          
          

        {donationType !== 'In-Kind' ?

          <Button variant="contained" color="primary" style={{ margin: '20px 0 0 5px'}} onClick={handleClickOpen}>Donate Now</Button>
   :'' }


          
            </div>


            
      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth={true}>
        <DialogTitle id="form-dialog-title" style={{ alignSelf: 'center', fontSize: '50px' }}>Donate</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Fill the Inputs Bellow:
          </DialogContentText>



          <TextField
            variant="outlined"
            
            margin="dense"
            id="name"
            label="Name (Leave Blank for Anonymous Donation)"
            type="text"
            fullWidth={true}
            onChange={(e) =>
              setDonateForm({ ...donateForm, name: e.target.value })
            }
          />



          
          
          
          <TextField
          autoFocus
            variant="outlined"
            margin="dense"
            id="amount"
            label="Enter Amount: (Required) "
            required={true}
            required
            type="number"
            fullWidth ={true}
            onChange={(e) =>
              setDonateForm({ ...donateForm, amount: e.target.value })
            }
          />




          <TextField

            variant="outlined"
            margin="dense"
            id="email"
            label="Email (Optional, For Sending the Certificate)"
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
            rows={4}
            type="text"
            multiline
            fullWidth={true}
            onChange={(e) =>
              setDonateForm({ ...donateForm, message: e.target.value })
            }
          />








        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={donateForm.amount === 0} color="primary">
            Donate
          </Button>
        </DialogActions>
      </Dialog>








        </aside>
    );
}

export default SideBarDonor;