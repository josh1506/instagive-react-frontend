import React from 'react';
import '../../../style/detailsPage/detailsPageContent.css'
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel'
import 'styled-components'


function DetailsPageContent(props) {
  console.log(props);
  if (!props.post) return <div>Loading</div>
  return (
    <div className='details-page-content-container'>
      <div className='post-image-container'>
        <img style={{ height: '70vh' }} src={`/docs/${props.post.profilePic}`} alt="Photo" className='display-page-image' />
      </div>

      <div className='details-post-container'>
        {props.children}
        <div style={{display: 'flex' , flexDirection: 'column', alignItems: 'center'}} className="shadow-container">
          <h1>Description</h1>
        <p className='donation-content'>
          {props.post ? props.post.description : ''}
        </p>
        </div>
       
       
       
       
        <div>
      
       
          <Carousel itemsToShow={1} >
            {props.post.imageList.map(imageName =>
              <img src={`/docs/${imageName}`} key={imageName} alt="Photo" style={{ height: '40vh', width: '100%' }} className='detailsPageImage' />
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state, myProps) => {
  const post = state.postList.find(post => post._id === myProps.match.params.id)
  return { post }
}

export default connect(mapStateToProps)(DetailsPageContent);