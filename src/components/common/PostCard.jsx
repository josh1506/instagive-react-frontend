
import React from 'react';
import '../../style/common/postCard.css';

function PostCard(props) {
    const postList = props.postList

    console.log(postList);
    return (
        
        <div className='postCardContainer'>
         
      
            {postList ? postList.map((post) => (
                <div className='postCard' key={post.id}>
                    <div className="category">{post.location}</div>
                    <img src={`/docs/${post.profilePic}`} alt='Photo' width='100%' />
                    <h3 style={{ paddingLeft: 5 }}>
                        {post.Title}
<<<<<<< HEAD
                    </h3>
                    <p style={{ paddingLeft: 10, paddingRight: 10 }}>
                        {post.description}
=======
                        {post.Title}
                    </h3>
                    <p style={{ paddingLeft: 10, paddingRight: 10 }}>
                        {post.description.length > 100
                            ? `${post.description}...`
                            : post.description}
>>>>>>> e495dec2eb007eef1cf00dc81fecab8f451d71e3
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
            )): ''}
      
                          
      
      
      
      
        </div>  
    );
}

export default PostCard;
