import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';
import axios from 'axios';

function PostList(props) {
  const [openModal, setModal] = useState({ value: '', postId: '' });
  const handleClickOpen = async (postId) => {
    setModal({ value: true, postId });
  };

  const handleClose = () => {
    setModal({ value: false, postId: '' });
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  if (!props.post)
    return (
      <div className='postCardContainer'>
        <CircularProgress color='inherit' />
      </div>
    );

  const handleReject = async () => {
    await axios.post(
      `http://localhost:5000/post/poststatus/${openModal.postId}/Rejected`,
      { token: localStorage.getItem('user') }
    );

    handleClose();

    document.location.reload();
  };

  return (
    <div>
      <Dialog
        open={openModal.value}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>

          <Button onClick={handleReject} color='secondary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        style={{ margin: '12px' }}
        onClick={() => props.history.push('/user/post-create')}
        variant='outlined'
        color='primary'
        endIcon={<AddIcon fontSize='small'></AddIcon>}
      >
        Create Post
      </Button>
      <h3 style={{ textAlign: 'center' }}>Approved Post</h3>

      <div className='postCardContainer shadow-container'>
        {props.post.filter((post) => post.status === 'Approved').length ===
        0 ? (
          <h2>You have no approved post</h2>
        ) : (
          props.post.map((post) =>
            post.status === 'Approved' ? (
              <div className='hover-container'>
                <Card
                  key={post._id}
                  className={classes.root}
                  style={{ margin: '20px' }}
                >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={post.profilePic}
                      height='140'
                      image={`${post.profilePic}`}
                      title={post.profilePic}
                    />
                    <CardContent>
                      <Typography
                        color='primary'
                        gutterBottom
                        variant='h5'
                        component='h2'
                      >
                        {post.Title.substring(0, 20)}
                        {post.Title.length > 20 ? '...' : ''}
                      </Typography>
                      <Typography className={classes.pos} color='textSecondary'>
                        {post.location} |{' '}
                        {post.donationType === 'both'
                          ? 'Cash, In-kind'
                          : post.donationType === 'cash'
                          ? 'Cash'
                          : 'In-kind'}
                      </Typography>
                      <Typography
                        style={{ height: '110px' }}
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {post.description.substring(0, 255)}
                        {post.description.length > 250 ? '...' : ''}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      onClick={() =>
                        props.history.push(`/user/post-details/${post._id}`)
                      }
                    >
                      View Post
                    </Button>

                    <Button
                      size='small'
                      color='secondary'
                      onClick={() => handleClickOpen(post._id)}
                    >
                      Delete Post
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ) : (
              ''
            )
          )
        )}
      </div>



      
      <h3 style={{ textAlign: 'center' }}>Pending Post</h3>

      <div className='postCardContainer shadow-container'>
        {props.post.filter((post) => post.status === 'Pending').length === 0 ? (
          <h2>You have no pending post</h2>
        ) : (
          props.post.map((post) =>
            post.status === 'Pending' ? (
              <div className='hover-container'>
                <Card className={classes.root} style={{ margin: '20px' }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={post.profilePic}
                      height='140'
                      image={`${post.profilePic}`}
                      title={post.profilePic}
                    />
                    <CardContent>
                      <Typography
                        color='primary'
                        gutterBottom
                        variant='h5'
                        component='h2'
                      >
                        {post.Title.substring(0, 20)}
                        {post.Title.length > 20 ? '...' : ''}
                      </Typography>
                      <Typography className={classes.pos} color='textSecondary'>
                        {post.location} |{' '}
                        {post.donationType === 'both'
                          ? 'Cash, In-kind'
                          : post.donationType === 'cash'
                          ? 'Cash'
                          : 'In-kind'}
                      </Typography>
                      <Typography
                        style={{ height: '110px' }}
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {post.description.substring(0, 255)}
                        {post.description.length > 250 ? '...' : ''}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      onClick={() =>
                        props.history.push(`/user/post-details/${post._id}`)
                      }
                    >
                      View Post
                    </Button>

                    <Button
                      size='small'
                      color='secondary'
                      onClick={() => handleClickOpen(post._id)}
                    >
                      Delete Post
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ) : (
              ''
            )
          )
        )}
      </div>

      <h3 style={{ textAlign: 'center' }}>Deleted/Rejected Post</h3>

      <div className='postCardContainer shadow-container'>
        {props.post.filter((post) => post.status === 'Rejected').length ===
        0 ? (
          <h2>You have no rejected/deleted post</h2>
        ) : (
          props.post.map((post) =>
            post.status === 'Rejected' ? (
              <div className='hover-container'>
                <Card className={classes.root} style={{ margin: '20px' }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={post.profilePic}
                      height='140'
                      image={`${post.profilePic}`}
                      title={post.profilePic}
                    />
                    <CardContent>
                      <Typography
                        color='primary'
                        gutterBottom
                        variant='h5'
                        component='h2'
                      >
                        {post.Title.substring(0, 20)}
                        {post.Title.length > 20 ? '...' : ''}
                      </Typography>
                      <Typography className={classes.pos} color='textSecondary'>
                        {post.location} |{' '}
                        {post.donationType === 'both'
                          ? 'Cash, In-kind'
                          : post.donationType === 'cash'
                          ? 'Cash'
                          : 'In-kind'}
                      </Typography>
                      <Typography
                        style={{ height: '110px' }}
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {post.description.substring(0, 255)}
                        {post.description.length > 250 ? '...' : ''}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      onClick={() =>
                        props.history.push(`/user/post-details/${post._id}`)
                      }
                    >
                      View Post
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ) : (
              ''
            )
          )
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { post: state.user.post };
};

export default connect(mapStateToProps)(PostList);
