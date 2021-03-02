import React from 'react';
import '../../../style/detailsPage/detailsPageContent.css'
import banner1 from '../../../img/Landscape-Color.jpg'

function DetailsPageContent(props) {
    if (!props.onSelectedPost) return <div>Loading</div>


    return (
        <div>
            <div>
                <img src={`/docs/${props.onSelectedPost.profilePic}`} alt="Photo" className='detailsPageImage' />
            </div>
            {props.children}
            <p className='donationContent'>
                {props.onSelectedPost ? props.onSelectedPost.description : ''}
            </p>
           
            <div>
                {props.onSelectedPost.imageList.map(imageName => 
                    
                    
                    <img src={`/docs/${imageName}`}  alt="Photo" className='detailsPageImage' />

                    
                    
                    )}
           
                    </div>
           
           
            <div className='donateNowContainer'>
                <button className='donate-button'>Donate Now</button>
            </div>
        </div>
    );
}

export default DetailsPageContent;