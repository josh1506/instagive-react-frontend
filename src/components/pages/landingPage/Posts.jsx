import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import PostCard from './../../common/PostCard';
import '../../../style/landingPage/post.css'

function Posts(props) {
    const postList = props.post
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


const mapStateToProps = state => {
    return { post: state.postList }
}

export default connect(mapStateToProps)(Posts);