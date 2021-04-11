import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import imgWave from '../../../img/wave.png';
import orgPhoto from '../../../img/org-image-content.png';
import unknownUserPhoto from '../../../img/unknown-user.png';
import checkPhoto from '../../../img/check.png';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
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

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 700,
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
    root: {
      maxWidth: 345,
    },
  }));
  const classes = useStyles();

  const picDetails = [
    {
      imageName: '/aaron.png',
      title: 'aaron',
      alt: 'aaron.png',
      name: 'Aaron Joshua Pangan',
      description: ''
    },
    {
      imageName: '/jabor.PNG',
      title: 'jabor',
      alt: 'jabor',
      name: 'Joshua Micheal Jabor',

      description: ''

    },
    {
      imageName: '/jan.PNG',
      title: 'jan',
      alt: 'jan',
      name: 'Jan Carlos Dizon',

      description: ''

    },
    {
      imageName: '/mich.PNG',
      title: 'mich',
      alt: 'mich',
      name: 'Michelle Biag',

      description: ''

    },
  ];

  return (
    <div className='content-container' >
      <img src={imgWave} alt='wave' className='content-wave' />
      <Button
        variant='text'
        onClick={handleClickOpen}
        color='link'
        style={{ fontSize: '2.5rem' }}
      >
        {' '}
        About Us
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

          <Container>

            <div style={{ display: 'flex', width: '100%' }} className="cards-about-us">
              {picDetails.map(details =>
                <Card className={classes.root} style={{ margin: '20px', width: '100%' }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={details.alt}
                      height='350'
                      image={details.imageName}
                      title={details.title}
                    />
                    <CardContent>
                      <Typography
                        color='primary'
                        gutterBottom
                        variant='h7'
                        component='h5'
                      >{details.name}</Typography>
                      <Typography color='textSecondary'></Typography>

                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                </Card>
              )}
            </div>
            <Card style={{ margin: '20px' }}>
              <CardActionArea>

                <CardContent>
                  <Typography
                    color='primary'
                    gutterBottom
                    variant='h5'
                    component='h2'
                  ></Typography>
                  <Typography color='textSecondary'></Typography>
                  <Typography
                    style={{ height: '110px' }}
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>

          </Container>
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
