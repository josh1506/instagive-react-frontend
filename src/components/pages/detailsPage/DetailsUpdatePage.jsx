import React, { useState } from 'react';
import '../../../style/detailsPage/detailsUpdatePage.css'

function DetailsUpdatePage(props) {
    const [posts, setPosts] = useState([
    ])

    return (
        <div>
            {props.children}
            <div className="update-container">
                {posts.map(post =>
                    <div key={post.id}>
                        <h3 className='update-title'>{post.title} - {post.date}</h3>
                        <p className='update-details'>{post.details}</p>
                        <img src={post.img} alt="carousel" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetailsUpdatePage;