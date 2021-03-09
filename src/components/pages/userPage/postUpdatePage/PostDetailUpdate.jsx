import React, {useState} from 'react';
import {TextField, Button, Icon, FormControl, InputLabel, Select, Radio, RadioGroup, FormLabel, FormControlLabel, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, 
} from '@material-ui/core/'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';









function PostDetailUpdate(props) {
    
    
    
    const [descriptionForm, setDescriptionForm] = useState ('')
    const [files, setfiles] = useState ({

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




          
         await axios.post(`http://localhost:5000/updates/${props.match.params.id}`, formdata)
          handleClose()
          handleClickAlert()


    }

    const handleImage = async (e) =>{

        setfiles({imageList: e.target.files})
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
    
    
    
    
      const Alert =(props)  => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }



    











    return (
        <div>
           
           <Snackbar open={snacker} autoHideDuration={2000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="success">
                Update Successfully Created
          </Alert>


        </Snackbar>
        


           
           <Button onClick={() => props.history.push(`/user/post-details/${props.match.params.id}`)} style={{margin: '12px'}} variant="outlined" color="default">Back to Post</Button>
           <Button onClick={handleClickOpen} style={{margin: '12px'}} variant="outlined" color="primary">Create New Update</Button>




           <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth={true}>
           <form encType='multipart/form-data'>
        <DialogTitle id="form-dialog-title"  style={{alignSelf: 'center', fontSize: '50px'}}>Create Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Fill the Inputs Bellow: 
          </DialogContentText>






                          <TextField
                            rows={10}
                            multiline
                               style={{marginBottom: '12px'}} label="Post Update Description" variant="outlined" fullWidth={true}
                               type="text"
                            name='postDetails'
                            value={descriptionForm}
                            onChange={e => setDescriptionForm(e.target.value)}
                            id='postDetails'
                            className=''
                        />

<Button variant='outlined' color='primary' component='label' style={{marginTop:'12px'}}>
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
          <Button  onClick={handleClose} color="primary">
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

export default PostDetailUpdate;