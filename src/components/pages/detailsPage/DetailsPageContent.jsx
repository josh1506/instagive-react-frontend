import React from 'react';
import '../../../style/detailsPage/detailsPageContent.css'
import { connect } from 'react-redux';


function DetailsPageContent(props) {
  if (!props.post) return <div>Loading</div>
  return (
    <div className='details-page-content-container'>
      <div className='post-image-container'>
        <img src={`/docs/${props.post.profilePic}`} alt="Photo" className='display-page-image' />
      </div>

      <div className='details-post-container'>
        {props.children}
        <p className='donationContent'>
          {props.post ? props.post.description : ''}
        </p>
        <div>
          {props.post.imageList.map(imageName =>
            <img src={`/docs/${imageName}`} key={imageName} alt="Photo" className='detailsPageImage' />
          )}
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