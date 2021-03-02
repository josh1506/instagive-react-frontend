import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import PostCard from './../../common/PostCard';
import '../../../style/landingPage/post.css'
import PostContext from './../../../context/postContext';

function Posts(props) {
    const postList = useContext(PostContext);
    return (
        <div className='postContainer'>
            <h2 className='postTitle'>Posts</h2>
            <div>
                <div className='postFilterContainer'>
                    <FontAwesomeIcon icon={faFilter} size="xs" />
                    <p className='postFilter'>Filter by:</p>
                    <select name="" id="" ></select>
                </div>
                <PostCard {...props} postList={postList} />
            </div>
        </div>
    );
}

export default Posts;