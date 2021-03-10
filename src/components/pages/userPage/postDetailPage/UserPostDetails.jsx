import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { cityLocation } from '../../../others/cityLocation'
import {
  TextField, Button, FormControl, InputLabel, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar,
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
      <h1>Post Details</h1>
      <div className='post-container'>
        <div className="post-create-container">

          <div className="post-detail-text-container">
            <label className='form-label' htmlFor='post-profile-pic'>Cover Photo</label>
          </div>
          <img src={`/docs/${post.profilePic}`} alt="Profile Photo Here" />

          <div className="post-detail-text-container">
            <label htmlFor="title">Title:</label>
            <p>{post.Title}</p>
          </div>

          <div>
            <div className="post-detail-text-container">
              <label htmlFor="title">Location:</label>
              <p>{post.location}</p>
            </div>

            <div className="post-detail-text-container">
              <label htmlFor="">Donation Type:</label>
              <p>{post.donationType}</p>
            </div>
          </div>

          <div className="post-detail-text-container">
            <label htmlFor="details">Details:</label>
            <p>{post.description}</p>
          </div>

          <div className="post-detail-text-container">
            <label className='form-label' htmlFor='postImages'>Images:</label>
            <Carousel itemsToShow={1}>
              {post.imageList.map(image => <img src={`/docs/${image}`} alt={image} key={image} style={{ height: '40vh', width: '100%' }} />)}
            </Carousel>
          </div>
        </div>

      </div>
      <div>
        <button onClick={() => props.history.push('/user')}>View Post List</button>
      </div>
    </div>
  );
}


const mapStateToProps = (state, myProps) => {
  const post = state.user.post.find(post => post._id === myProps.match.params.id)
  return { post, auth: state.auth }
}

export default connect(mapStateToProps, { userPostUpdated })(UserPostDetails);