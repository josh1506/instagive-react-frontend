import React from 'react';
import { connect } from 'react-redux'

import PostCard from './../../common/PostCard';
import '../../../style/landingPage/post.css'
import { NavLink } from 'react-router-dom';

function Posts(props) {
    const postList = props.post
    return (
        <div style={{marginTop: '50px'}} className='postContainer'>
            <h2 className='postTitle'>{props.post.length === 0 ? 'There are no post' : "Post list"}</h2>
            <div>
                <PostCard {...props} postList={postList} />
                <div className='postFilterContainer'>
                    <NavLink to='/post-list'>View All</NavLink>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return { post: state.postList.filter(post => post.status === 'Approved') }
}

export default connect(mapStateToProps)(Posts);