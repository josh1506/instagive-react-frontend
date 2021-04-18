import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { cityLocation } from '../../../others/cityLocation'
import {
  TextField, Button, FormControl, InputLabel, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar,
  Chip
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';

import MuiAlert from '@material-ui/lab/Alert';
import { userPostUpdated } from '../../../../app/user'
import Carousel from 'react-elastic-carousel'
import 'styled-components'
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function UserPostDetails(props) {
  const post = props.post
  const [postForm, setPostForm] = useState({
    Title: '',
    description: '',
    location: '',
    donationType: ''
  })

  useEffect(() => {
    if (post) setPostForm({
      Title: post.Title,
      description: post.description,
      location: post.location,
      donationType: post.donationType,
    })
  }, [post])


  const handleSubmit = (e) => {
    e.preventDefault();
    const saveUpdate = async () => {
      props.userPostUpdated(postForm, post._id, props.auth.token)
      handleClose()
      handleClickAlert()
    }
    saveUpdate();
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  const [openModal, setModal] = useState(false);
  const handleClickOpen = async () => setModal(true);
  const handleClose = () => setModal(false);
  const [snacker, setSnacker] = useState(false);
  const handleClickAlert = () => setSnacker(true);
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnacker(false);
  };

  if (!props.post) {
    return (
      <div>Loading...</div>
    )
  }

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  return (
    <div>
      <div className={classes.root}>
        <Snackbar open={snacker} autoHideDuration={2000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="success">Successfully Saved</Alert>
        </Snackbar>
      </div>
      <Button onClick={() => props.history.push(`/user/update-details/${props.match.params.id}`)} style={{ margin: '12px' }} variant="outlined" color="default"endIcon={<ExitToAppIcon size="smaill"></ExitToAppIcon>} >Updates</Button>
      <Button onClick={handleClickOpen} style={{ margin: '12px' }} variant="outlined" color="primary" endIcon={<EditIcon size="smaill"></EditIcon>}>Edit Post</Button>
    
    
      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth={true}>
        <DialogTitle id="form-dialog-title" style={{ alignSelf: 'center', fontSize: '50px' }}>Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Fill the Inputs Bellow:
          </DialogContentText>
          <TextField
            style={{ marginBottom: '12px' }} variant="outlined" fullWidth={true}
            label="Title"
            type="text"
            name="title"
            id="title"
            value={postForm.Title}
            onChange={e => setPostForm({ ...postForm, Title: e.target.value })}
          />
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel style={{ marginLeft: '12px' }} id='city'>
              Select Location
              </InputLabel>
            <Select
              variant='outlined'
              label='city'
              name='city'
              id='city'
              fullWidth
              value={postForm.location}
              onChange={(e) =>
                setPostForm({ ...postForm, location: e.target.value })}>
              {cityLocation.map((city) =>
                <MenuItem key={city} value={city}>{city}</MenuItem>
              )}
            </Select>
          </FormControl>
          <TextField
            rows={15}
            multiline
            style={{ marginBottom: '12px', marginTop: '12px' }} label="Description" variant="outlined" fullWidth={true}
            type="text"
            name='postDetails'
            value={postForm.description}
            onChange={e => setPostForm({ ...postForm, description: e.target.value })}
            id='postDetails'
            className=''
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} color="primary">
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    
      <div className='post-container'>
        <div className="post-create-container">

          <div className="post-detail-text-container" style={{display: 'flex', justifyContent: 'center'}}>
            <label className='form-label' htmlFor='post-profile-pic'>{post.Title}</label>
          </div>
          <img style={{maxHeight: '100%', maxWidth:'100%'}} src={`${post.profilePic}`} alt="Profile Photo Here" />

         

          <div className="post-detail-text-container">
          
        
            <div style={{alignSelf:'center'}}>Details:</div>
            <p>{post.description}</p>
            </div>
      

          <div>
            <label className='form-label' htmlFor='postImages'>Images:</label>
            <Carousel itemsToShow={1}>
              {post.imageList.map(image => <img className="carousel-item" src={`${image}`} alt={image} key={image} />)}
            </Carousel>
          </div>
     
     
     
     
        </div>


        {/* Start */}
        <aside className='user-sidebar-donor'>
          <div>


            {props.post.donationType === "In-Kind" ?
              <div>
                <Chip style={{ marginBottom: '10px', width: '200px' }} label={props.post.location} variant="outlined" color="primary" /> <br></br>
                <Chip style={{ width: '200px' }} label={props.post.donationType === "Both" ? 'Cash/In-Kind' : props.post.donationType} variant="outlined" color="primary" />
              </div>
              :
              <div>
                <Chip style={{ marginBottom: '10px' }} label={props.post.location} variant="outlined" color="primary" /> <br></br>
                <Chip label={props.post.donationType === "Both" ? 'Cash/In-Kind' : props.post.donationType} variant="outlined" color="primary" />
              </div>
            }





            {props.post.donationType === 'Both' || props.post.donationType === 'Cash' ?
              <div>
                <div>
                  <h3 className='user-sidebar-donor-data'>₱{props.post.currentAmount}</h3>
                  <p className='user-sidebar-donor-text'>Total Raise</p>
                </div>
                <div>
                  <h3 className='user-sidebar-donor-data'>₱{props.post.totalAmount}</h3>
                  <p className='user-sidebar-donor-text'>Target Amount</p>
                </div>



              </div>
              : ''}

            {props.post.donationType === 'Both' || props.post.donationType === 'In-Kind' ?

              <div>
                <h3 className='user-sidebar-donor-data'>&nbsp;&nbsp;{props.post.itemQuantity}</h3>
                <p className='user-sidebar-donor-text'>&nbsp;Items Donated</p>
              </div>

              : ''}




            <div>
              <h3 className='user-sidebar-donor-data'>&nbsp;&nbsp;{props.post.totalDonors}</h3>
              <p className='user-sidebar-donor-text'>&nbsp;&nbsp;Donors</p>
            </div>

      

          </div>
        </aside>
        {/* End */}

      </div>
      <div>
      </div>
    </div>
  );
}


const mapStateToProps = (state, myProps) => {
  const post = state.user.post.find(post => post._id === myProps.match.params.id)
  return { post, auth: state.auth }
}

export default connect(mapStateToProps, { userPostUpdated })(UserPostDetails);