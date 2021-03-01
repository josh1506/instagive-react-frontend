import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PostCard from './../../common/PostCard';
import UserContext from './../../../context/userContext';

function PostList(props) {
    const userData = useContext(UserContext);

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
            <PostCard {...props} postList={userData.posts} />
        </div>
    );
}

export default PostList;