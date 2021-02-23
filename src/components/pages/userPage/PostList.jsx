import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PostCard from './../../common/PostCard';

function PostList(props) {
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
            <PostCard />
        </div>
    );
}

export default PostList;