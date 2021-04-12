import React from 'react';
import '../../../style/detailsPage/detailsPageContent.css'
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel'
import SideBarDonor from '../../common/SideBarDonor';
import 'styled-components'
import '../../../style/userPage/userPage.css'

function DetailsPageContent(props) {
  console.log(props);
  if (!props.post) return <div>Loading</div>
  return (
    <div style={{marginTop: '1rem'}} className="post-container">
      <div className='post-create-container'>

      <div className="post-detail-text-container" style={{display: 'flex', justifyContent: 'center'}}>
            <label className='form-label' htmlFor='post-profile-pic'>{props.post.Title}</label>
          </div>


          <img src={`${props.post.profilePic}`} alt="Profile Photo Here" />


        
          <div className="post-detail-text-container">
          
        
          <div style={{alignSelf:'center'}}>Details:</div>
          <p>{props.post.description}</p>
          </div>
      
      
      
         
          <div>
            <label className='form-label' htmlFor='postImages'>Images:</label>
            <Carousel itemsToShow={1}>
              {props.post.imageList.map(image => <img className="carousel-item" src={`${image}`} alt={image} key={image} />)}
            </Carousel>
          </div>
     
     



        </div>
     
      <SideBarDonor {...props} selectedPost={props.selectedPost} />
    </div>
  );
}


const mapStateToProps = (state, myProps) => {
  const post = state.postList.find(post => post._id === myProps.match.params.id)
  return { post }
}

export default connect(mapStateToProps)(DetailsPageContent);