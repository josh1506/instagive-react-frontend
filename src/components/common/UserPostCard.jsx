
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import '../../style/common/userPostCard.css';
import PostContext from './../../context/postContext';

function UserPostCard(props) {
    const postList = useContext(PostContext);
    return (
        <div className='postCardContainer'>
            {postList.map((post) => (
                <div className='postCard' key={post.id}>
                    <div className='deleteButtonContainer'>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className='deleteButton'
                            size='lg'
                        />
                    </div>
                    <div className="category">{post.location}</div>
                    <img src={post.imageList[0]} alt='Photo' width='100%' />
                    <h3 style={{ paddingLeft: 5 }}>
                        {post.Title.substring(0, 29)}
                        {post.Title.length > 29 ? '...' : ''}
                    </h3>
                    <p style={{ paddingLeft: 10, paddingRight: 10 }}>
                        {post.description.length > 100
                            ? `${post.description.substring(0, 100)}...`
                            : post.description.substring(0, 100)}
                    </p>
                    <div className='buttonContainer'>
                        <button
                            className='details-button'
                            style={{ borderRadius: 7 }}
                            onClick={() => props.history.push(`/details/${post.id}`)}
                        >
                            Details
            </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserPostCard;
