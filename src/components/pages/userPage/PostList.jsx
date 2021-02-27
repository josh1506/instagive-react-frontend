import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PostCard from './../../common/PostCard';
import PostContext from './../../../context/postContext';

function PostList(props) {
    const postList = useContext(PostContext);
    return (
        <div>
            <div className='user-items-right-container'>
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    className='deleteButton'
                    size='lg'
                    onClick={() => props.history.push('/user/post-create')}
                />
            </div>
            <PostCard {...props} postList={postList} />
        </div>
    );
}

export default PostList;