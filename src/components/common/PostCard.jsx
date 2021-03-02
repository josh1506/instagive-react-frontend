
import React from 'react';
import '../../style/common/postCard.css';

function PostCard(props) {
    const postList = props.postList

    console.log(postList);
    return (
        <div className='postCardContainer'>
            {postList.map((post) => (
                <div className='postCard' key={post.id}>
                    <div className="category">{post.location}</div>
                    <img src={post.imageList[0]} alt='Photo' width='100%' />
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
                        >
                            Details
            </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostCard;
