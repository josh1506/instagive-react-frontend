import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../../style/detailsPage/detailsUpdatePage.css'
import Carousel from 'react-elastic-carousel'
import 'styled-components'
import { connect } from 'react-redux';
import '../../../style/detailsPage/detailsUpdatePage.css'






function DetailsUpdatePage(props) {
    const [updateList, setUpdateList] = useState([])
    console.log(props);

    useEffect(() => {
        const getUpdateList = async () => {
            const { data } = await axios.post(`http://localhost:5000/updates/getall/${props.match.params.id}`, { token: props.authToken })
            setUpdateList(data)
        }

        if (props.post) {
            getUpdateList()
        }
    }, [props.post])





    return (
        <div className='landing-post-update-container'>
            {props.children}
            <div className=''>
                {updateList.map(update =>
                    <div key={update._id} className='landing-post-update-faded'>
                        <div>
                            <Carousel itemsToShow={1}>
                                {update.imageList.map(image => <img src={`/docs/${image}`} alt={image} key={image} style={{ height: '40vh', width: '100%' }} />)}
                            </Carousel>
                        </div>
                        <div className=''>
                            {update.description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


const mapStateToProps = (state, myProps) => {
    const post = state.postList.find(post => post._id === myProps.match.params.id)
    const authToken = state.auth.token
    return { post, authToken }
}

export default connect(mapStateToProps)(DetailsUpdatePage);