
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../style/common/postCard.css';
import PostContext from './../../context/postContext';


function PostCard(props) {
  const postList = useContext(PostContext);

  return (
    <div className='postCardContainer'>
      {postList.map((data) => (
        <div className='postCard' key={data.id}>
          <div className='deleteButtonContainer'>
            <FontAwesomeIcon
              icon={faTimes}
              className='deleteButton'
              size='lg'
            />
          </div>
          <div className="category">San Fernando</div>
          <img src={data.img.src} alt={data.img.alt} width='100%' />
          <h3 style={{ paddingLeft: 5 }}>
            {data.postTitle.substring(0, 29)}
            {data.postTitle.length > 29 ? '...' : ''}
          </h3>
          <p style={{ paddingLeft: 10, paddingRight: 10 }}>
            {data.postDetails.length > 100
              ? `${data.postDetails.substring(0, 100)}...`
              : data.postDetails.substring(0, 100)}
          </p>
          <div className='buttonContainer'>
            <button
              className='details-button'
              style={{ borderRadius: 7 }}
              onClick={() => props.history.push(`/details/${data.id}`)}
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
