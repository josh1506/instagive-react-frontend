import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../../style/common/postCard.css'


function PostCard(props) {
    const [cardData, setCardData] = useState([
        {
            id: '1',
            img: {
                src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
                alt: 'photo 1'
            },
            postTitle: 'Help David Gulpilils siblings visit',
            postDetails: 'Yolngu Elder David Gulpilil has been in Adelaide for some time receiving treatment for terminal cancer. As he is unable to travel back to his home of Ramingining, it has been some time since he last saw family'
        }, {
            id: '2',
            img: {
                src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
                alt: 'photo 2'
            },
            postTitle: 'Please Help Ryoko Fight Stage 4 Cancer',
            postDetails: 'My beloved sister, Ryoko has terminal cancer, stage 4. It was only discovered two months ago on July 16, 2020. Both of us are Japanese, but Ryoko has lived in Paris for 16 years and I live in Malaysia.'
        }, {
            id: '3',
            img: {
                src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
                alt: 'photo 2'
            },
            postTitle: 'Typhoon Ulysses',
            postDetails: 'Hello everyone! Cora here. Typhoons Ulysses and Rolly battered us with strong winds and submerged cities including Marikina, Rizal, Cam Sur and Tuguegarao in Cagayan. Thousands have been displaced from their homes and some are still waiting to be rescued.'
        }, {
            id: '4',
            img: {
                src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
                alt: 'photo 2'
            },
            postTitle: 'Help Baby Khloe',
            postDetails: 'We are in need of financial assistance to help Baby Khloe Vitto be released from Hospital. Currently unemployed we didnt know where to get any money to pay for her bills.'
        }
    ])

    console.log(cardData);
    return (
        <div className='postCardContainer'>
            {cardData.map(data =>
                <div className='postCard' key={data.id}>
                    <div className='deleteButtonContainer'>
                        <FontAwesomeIcon icon={faTimes} className='deleteButton' size='lg' />
                    </div>
                    <img src={data.img.src} alt={data.img.alt} width='100%' />
                    <h3 style={{ paddingLeft: 5 }}>{data.postTitle.substring(0, 29)}{(data.postTitle.length > 29) ? '...' : ''}</h3>
                    <p style={{ paddingLeft: 10, paddingRight: 10 }}>{(data.postDetails.length > 100) ? `${data.postDetails.substring(0, 100)}...` : data.postDetails.substring(0, 100)}</p>
                    <div className="buttonContainer">
                        <button className='buttonDetails'>Details</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostCard;