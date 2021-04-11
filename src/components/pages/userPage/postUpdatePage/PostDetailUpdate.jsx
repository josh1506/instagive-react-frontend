import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel'
import 'styled-components'
import '../../../../style/userPage/userPage.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NoteAddIcon from '@material-ui/icons/NoteAdd';







function PostDetailUpdate(props) {


  const [updateList, setUpdateList] = useState([])
  const [descriptionForm, setDescriptionForm] = useState('')
  const [files, setfiles] = useState({
    imageList: ''
  })
  const [numberImage, setNumberImage] = useState(0)

  const handleSubmit = async (e) => {

    e.preventDefault()

    const formdata = new FormData();

    for (const key in files.imageList) {
      formdata.append('imageList', files.imageList[key]);
    }



    formdata.append('description', descriptionForm);
    formdata.append('token', localStorage.getItem('user'))




    await axios.post(`https://instagive-backend.herokuapp.com/updates/${props.match.params.id}`, formdata)
    handleClose()
    handleClickAlert()
    document.location.reload();


  }

  const handleImage = async (e) => {
    setfiles({ imageList: e.target.files })
    setNumberImage(e.target.files.length)
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

  const handleClickOpen = async () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
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
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }






  useEffect(() => {
    const getUpdateList = async () => {
      const { data } = await axios.post(`https://instagive-backend.herokuapp.com/updates/getall/${props.match.params.id}`, { token: props.authToken })
      setUpdateList(data)
    }
    if (props.post) {
      getUpdateList()
    }
  }, [props.post])





  if (!updateList) return <div>No updates yet...</div>


  return (
    <div>
      <Snackbar open={snacker} autoHideDuration={2000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success">
          Update Successfully Created
                       </Alert>


      </Snackbar>

      <div className="post-update-detail-button">
        <Button onClick={() => props.history.push(`/user/post-details/${props.match.params.id}`)} style={{ margin: '12px' }} variant="outlined" color="default" endIcon={<ExitToAppIcon size="small"></ExitToAppIcon>} >Back to Post</Button>
        <Button onClick={handleClickOpen} style={{ margin: '12px' }} variant="outlined" color="primary" endIcon={<NoteAddIcon size="small"></NoteAddIcon>} >Create New Update</Button>
      </div>
      <div className='post-update-container'>
        {updateList.map(update =>
          <div key={update._id} className='update-item-container'>
            <div>
              <Carousel itemsToShow={1}>
                {update.imageList.map(image => <img src={`${image}`} alt={image} key={image} style={{ height: '40vh', width: '100%' }} />)}
              </Carousel>
            </div>
            <div className='post-update-description'>
              {update.description}
            </div>
          </div>
        )}
      </div>

      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth={true}>
        <form encType='multipart/form-data'>
          <DialogTitle id="form-dialog-title" style={{ alignSelf: 'center', fontSize: '50px' }}>Create Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fill the Inputs Bellow:
                       </DialogContentText>
            <TextField
              rows={10}
              multiline
              style={{ marginBottom: '12px' }} label="Post Update Description" variant="outlined" fullWidth={true}
              type="text"
              name='postDetails'
              value={descriptionForm}
              onChange={e => setDescriptionForm(e.target.value)}
              id='postDetails'
              className=''
            />

            <Button variant='outlined' color='primary' component='label' style={{ marginTop: '12px' }}>
              {`Upload Picture (Can Have Multiple Pictures) | Files Selected: ${numberImage}`}
              <input
                hidden
                type='file'
                id='postImages'
                name='postImages'
                onChange={handleImage}
                multiple

              ></input>
            </Button>



          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
                       </Button>
            <Button variant="contained" onClick={handleSubmit} color="primary">
              SAVE
                       </Button>
          </DialogActions>

        </form>
      </Dialog>

    </div>
  );
}


const mapStateToProps = (state, myProps) => {
  const post = state.postList.find(post => post._id === myProps.match.params.id)
  const authToken = state.auth.token
  return { post, authToken }
}

export default connect(mapStateToProps)(PostDetailUpdate);