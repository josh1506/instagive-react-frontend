import React, { useState, Fragment, useEffect } from 'react';
import route from '../../../route/instagive';

import {
  Container,
  FormControl,
  InputLabel,
  Select,
  Button,
  ButtonGroup,
  MenuItem,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog,
} from '@material-ui/core';
import Carousel from 'react-elastic-carousel';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const AdminPost = (props) => {
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

  useEffect(() => {
    const getData = async () => {
      const { data } = await route.get('/admin/getusers');
      setOrgList(data.approved);

      const postlist = await route.get('/admin/allpost');

      setPostList(postlist.data);
    };

    getData();
  }, []);
  const [orgList, setOrgList] = useState([]);
  const [postList, setPostList] = useState([]);

  const [table, setTable] = useState('Approved');

  const handleGetUserPost = (orgID) => {
    const getData = async () => {
      const { data } = await route.post(`/admin/userledger/${orgID}`);
      console.log(data);
    };
    console.log(orgID);
    getData();
  };

  const [openModal, setModal] = useState({ value: '', postId: '', msg: '' });
  const handleClickOpen = async (postId, msg) => {
    setModal({ value: true, postId, msg });
  };

  const handleClose = () => {
    setModal({ value: false, postId: '', msg: '' });
  };

  const handleStatus = async () => {
    console.log(openModal.postId);
    await axios.get(
      `http://localhost:5000/admin/changepoststatus/${openModal.postId}/${
        openModal.msg === 'Approve' ? 'Approved' : 'Rejected'
      }`
    );

    handleClose();

    document.location.reload();
  };

  // user post modal

  const [modalPost, setModalPost] = useState(false);

  const handleClickOpenPost = async (post) => {
    setPostData({ ...post });

    setModalPost(true);
  };

  const handleClosePost = () => {
    setModalPost(false);
    setPostData({});
  };

  const [postData, setPostData] = useState({});

  console.log(postData);

  return (
    <Fragment>
      <Dialog
        open={modalPost}
        onClose={handleClosePost}
        aria-labelledby='form-dialog-title'
        maxWidth='xl'
        fullWidth={true}
      >
        <DialogContent>
          <DialogContentText>
            <div className='post-container'>
              <div className='post-create-container'>
                <div
                  className='post-detail-text-container'
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <label className='form-label' htmlFor='post-profile-pic'>
                    {postData.Title}
                  </label>
                </div>
                <img
                  style={{ maxHeight: 700, maxWidth: '60vw' }}
                  src={`/docs/${postData.profilePic}`}
                  alt='Profile Photo Here'
                />

                <div className='post-detail-text-container'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    className='shadow-container'
                  >
                    <label htmlFor='details'>Details:</label>
                    <p>{postData.description}</p>
                  </div>
                </div>

                <div className='post-detail-text-container'>
                  <label className='form-label' htmlFor='postImages'>
                    Images:
                  </label>
                  <Carousel itemsToShow={1}>
                    {postData.imageList &&
                      postData.imageList.map((image) => (
                        <img
                          src={`/docs/${image}`}
                          alt={image}
                          key={image}
                          style={{ height: '40vh', width: '100%' }}
                        />
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClosePost} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openModal.value}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogContent>
          <DialogContentText>
            {`Are you sure you want to ${openModal.msg} this post?`}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>

          <Button onClick={handleStatus} color='secondary'>
            {openModal.msg}
          </Button>
        </DialogActions>
      </Dialog>

      <h1 className='admin-page-title'>Organization Post</h1>

      <Container
        style={{ display: 'flex', justifyContent: 'space-between' }}
        component='main'
        maxWidth='xl'
      >
        <Typography variant='h2'> {table}</Typography>

        <ButtonGroup
          variant='outlined'
          aria-label='outlined secondary button group'
        >
          <Button
            color={table === 'Approved' ? 'secondary' : 'default'}
            onClick={() => setTable('Approved')}
          >
            Approved
          </Button>
          <Button
            color={table === 'Pending' ? 'secondary' : 'default'}
            onClick={() => setTable('Pending')}
          >
            Pending
          </Button>
          <Button
            color={table === 'Rejected' ? 'secondary' : 'default'}
            onClick={() => setTable('Rejected')}
          >
            Rejected
          </Button>
        </ButtonGroup>
      </Container>

      <Container component='main' maxWidth='xl' className='shadow-container'>
        {table === 'Pending' ? (
          postList.filter((post) => post.status === 'Pending').length === 0 ? (
            <h2>You have no Pending post</h2>
          ) : (
            postList.map((post) =>
              post.status === 'Pending' ? (
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
                      image={`/docs/${post.profilePic}`}
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
                      onClick={() => handleClickOpenPost(post)}
                    >
                      View Post
                    </Button>

                    <Button
                      size='small'
                      color='secondary'
                      onClick={() => handleClickOpen(post._id, 'Reject')}
                    >
                      Delete Post
                    </Button>
                    <Button
                      size='small'
                      color='primary'
                      onClick={() => handleClickOpen(post._id, 'Approve')}
                    >
                      Approve Post
                    </Button>
                  </CardActions>
                </Card>
              ) : (
                ''
              )
            )
          )
        ) : (
          ''
        )}

        {table === 'Approved' ? (
          postList.filter((post) => post.status === 'Approved').length === 0 ? (
            <h2>You have no approved post</h2>
          ) : (
            postList.map((post) =>
              post.status === 'Approved' ? (
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
                      image={`/docs/${post.profilePic}`}
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
                      onClick={() => handleClickOpenPost(post)}
                    >
                      View Post
                    </Button>

                    <Button
                      size='small'
                      color='secondary'
                      onClick={() => handleClickOpen(post._id, 'Reject')}
                    >
                      Delete Post
                    </Button>
                  </CardActions>
                </Card>
              ) : (
                ''
              )
            )
          )
        ) : (
          ''
        )}

        {table === 'Rejected' ? (
          postList.filter((post) => post.status === 'Rejected').length === 0 ? (
            <h2>You have no Rejected post</h2>
          ) : (
            postList.map((post) =>
              post.status === 'Rejected' ? (
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
                      image={`/docs/${post.profilePic}`}
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
                      onClick={() => handleClickOpenPost(post)}
                    >
                      View Post
                    </Button>

                    <Button
                      size='small'
                      color='primary'
                      onClick={() => handleClickOpen(post._id, 'Approve')}
                    >
                      Approve Post
                    </Button>
                  </CardActions>
                </Card>
              ) : (
                ''
              )
            )
          )
        ) : (
          ''
        )}
      </Container>
    </Fragment>
  );
};

export default AdminPost;
