import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

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
            <div className='postCardContainer'>
                {props.post ? props.post.map((post) => (
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
                                onClick={() => props.history.push(`/user/post-details/${post._id}`)}
                            >Details</button>
                        </div>
                    </div>
                )) : ''}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return { post: state.user.post }
}

export default connect(mapStateToProps)(PostList);