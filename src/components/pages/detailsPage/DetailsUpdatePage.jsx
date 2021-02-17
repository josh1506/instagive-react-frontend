import React, { useState } from 'react';
import '../../../style/detailsPage/detailsUpdatePage.css'

function DetailsUpdatePage(props) {
    const [posts, setPosts] = useState([
        {
            title: 'Update Title',
            date: 'Jan 20, 2020',
            details: "Nothing to see But a dozen dying roses at our feet Your timing is perfect Ironic to me Showing up the moment that you shouldn't be Last time I checked You're the one that left Last words you said That you couldn't care less It's funny how you miss me more than you could ever love me How you couldn't give me everything and now you want it from me Yeah, it's funny how it's different now that I got somebody Yeah it's funny Ooh Yeah it's funny, funny, funny, how you answer, answer, answer 'Cause his lips seem, lips seem, lips seem, both my hands are on his body Yeah it's funny how it's different now that I got somebody Yeah it's funny Ooh Sending a message Through mutual friends It's like I'm talking to you using them You heard I was happy…",
            img: ''
        }, {
            title: 'Update Title',
            date: 'Feb 14, 2020',
            details: "Nothing to see But a dozen dying roses at our feet Your timing is perfect Ironic to me Showing up the moment that you shouldn't be Last time I checked You're the one that left Last words you said That you couldn't care less It's funny how you miss me more than you could ever love me How you couldn't give me everything and now you want it from me Yeah, it's funny how it's different now that I got somebody Yeah it's funny Ooh Yeah it's funny, funny, funny, how you answer, answer, answer 'Cause his lips seem, lips seem, lips seem, both my hands are on his body Yeah it's funny how it's different now that I got somebody Yeah it's funny Ooh Sending a message Through mutual friends It's like I'm talking to you using them You heard I was happy…",
            img: ''
        }, {
            title: 'Update Title',
            date: 'May 17, 2020',
            details: "Nothing to see But a dozen dying roses at our feet Your timing is perfect Ironic to me Showing up the moment that you shouldn't be Last time I checked You're the one that left Last words you said That you couldn't care less It's funny how you miss me more than you could ever love me How you couldn't give me everything and now you want it from me Yeah, it's funny how it's different now that I got somebody Yeah it's funny Ooh Yeah it's funny, funny, funny, how you answer, answer, answer 'Cause his lips seem, lips seem, lips seem, both my hands are on his body Yeah it's funny how it's different now that I got somebody Yeah it's funny Ooh Sending a message Through mutual friends It's like I'm talking to you using them You heard I was happy…",
            img: ''
        }, {
            title: 'Update Title',
            date: 'Nov 26, 2020',
            details: "Nothing to see But a dozen dying roses at our feet Your timing is perfect Ironic to me Showing up the moment that you shouldn't be Last time I checked You're the one that left Last words you said That you couldn't care less It's funny how you miss me more than you could ever love me How you couldn't give me everything and now you want it from me Yeah, it's funny how it's different now that I got somebody Yeah it's funny Ooh Yeah it's funny, funny, funny, how you answer, answer, answer 'Cause his lips seem, lips seem, lips seem, both my hands are on his body Yeah it's funny how it's different now that I got somebody Yeah it's funny Ooh Sending a message Through mutual friends It's like I'm talking to you using them You heard I was happy…",
            img: ''
        }
    ])
    return (
        <div>
            {props.children}
            <div className="update-container">
                {posts.map(post =>
                    <div>
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