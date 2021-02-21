import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../../style/common/postCard.css'
import PostContext from './../../contex/postContext';


function PostCard(props) {
    const postList = useContext(PostContext)
    console.log(postList);
    return (
        <div className='postCardContainer'>
            {postList.map(post =>
                <div className='postCard' key={post.id}>
                    <div className='deleteButtonContainer'>
                        <FontAwesomeIcon icon={faTimes} className='deleteButton' size='lg' />
                    </div>
                    <img src={post.imageList[0]} alt='images' width='100%' />
                    <h3 style={{ paddingLeft: 5 }}>{post.Title.substring(0, 29)}{(post.Title.length > 29) ? '...' : ''}</h3>
                    <p style={{ paddingLeft: 10, paddingRight: 10 }}>{(post.description.length > 100) ? `${post.description.substring(0, 100)}...` : post.description.substring(0, 100)}</p>
                    <div className="buttonContainer">
                        <button className='details-button' style={{ borderRadius: 7 }} onClick={() => props.history.push(`/details/${post.id}`)}>Details</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostCard;