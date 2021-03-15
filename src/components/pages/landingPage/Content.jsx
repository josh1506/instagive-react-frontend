import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import imgWave from '../../../img/wave.png';
import orgPhoto from '../../../img/org-image-content.png';
import unknownUserPhoto from '../../../img/unknown-user.png';
import checkPhoto from '../../../img/check.png';
import { Typography } from '@material-ui/core/';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';

function Content(props) {
  const [openModal, setModal] = useState(false);
  const handleClickOpen = async () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <div className='content-container'>
      <img src={imgWave} alt='wave' className='content-wave' />
      <Button variant='text' onClick={handleClickOpen} color='link' style={{ fontSize: '2.5rem' }}>
        {' '}
        About Instagive
      </Button>



      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='lg'
        fullWidth={true}
      >

<DialogTitle
          id='form-dialog-title'
          style={{ alignSelf: 'center', fontSize: '50px' }}
        >
          ABOUT US
        </DialogTitle>

        <DialogContent>
          <DialogContentText>WHO WE ARE?:</DialogContentText>

    </DialogContent>

    <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
          
        </DialogActions>
</Dialog>










    </div>
  );
}

export default Content;
