import React from 'react';
import PostCard from './../../common/PostCard';
import '../../../style/landingPage/post.css'

function Posts(props) {
    return (
        <div className='postContainer'>
            <h2 className='postTitle'>Posts</h2>
            <div>
                <div className='postFilter'>
                    <img src="" alt="icon" />
                    <p>Filter by:</p>
                    <select name="" id="" ></select>
                </div>
                {/* post */}
                <PostCard />
            </div>
        </div>
    );
}

export default Posts;