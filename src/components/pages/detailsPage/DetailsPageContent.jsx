import React, { useState } from 'react';
import '../../../style/detailsPage/detailsPageContent.css'
import banner1 from '../../../img/Landscape-Color.jpg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'




function DetailsPageContent(props) {





  if (!props.onSelectedPost) return <div>Loading</div>


  return (
    <div className='details-page-content-container'>
      <div className='post-image-container'>
        <img src={`/docs/${props.onSelectedPost.profilePic}`} alt="Photo" className='display-page-image' />
      </div>

      <div className='details-post-container'>
        {props.children}
        <p className='donationContent'>
          {props.onSelectedPost ? props.onSelectedPost.description : ''}
        </p>
        <div>
          {props.onSelectedPost.imageList.map(imageName =>
            <img src={`/docs/`} alt="Photo" className='detailsPageImage' />
          )}
        </div>
       
      </div>

     

    </div>
  );
}

export default DetailsPageContent;