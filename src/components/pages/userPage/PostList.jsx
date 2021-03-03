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
          
          
          
          
            <div className='postCardContainer'>
                 {userData.post ? userData.post.map((post) => (
                    <div className='postCard' key={post._id}>
                        <div className="category">{post.location}</div>
                        <img src={`/docs/${post.profilePic}`} alt='Photo' width='100%' />
                        <h3 style={{ paddingLeft: 5 }}>
                            {post.Title}
                        </h3>
                        <p style={{ paddingLeft: 10, paddingRight: 10 }}>
                            {post.description}
                        </p>
                        <div className='buttonContainer'>
                            <button
                                className='details-button'
                                style={{ borderRadius: 7 }}
                                onClick={() => props.history.push(`/details/${post._id}`)}
                            >Details</button>
                        </div>
                    </div>
                )): ''}
            </div>
        </div>
    );
}

export default PostList;