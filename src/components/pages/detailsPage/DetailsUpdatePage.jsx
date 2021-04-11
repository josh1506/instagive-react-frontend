import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../../style/detailsPage/detailsUpdatePage.css'
import Carousel from 'react-elastic-carousel'
import 'styled-components'
import { connect } from 'react-redux';
import '../../../style/detailsPage/detailsUpdatePage.css'






function DetailsUpdatePage(props) {
    const [updateList, setUpdateList] = useState([])
    

    useEffect(() => {
        const getUpdateList = async () => {
            const { data } = await axios.get(`http://localhost:5000/updates/getall/${props.match.params.id}`)
            setUpdateList(data)
        }

        if (props.post) {
            getUpdateList()
        }
    }, [props.post])





    return (
        <div className='landing-post-update-container'>
            <div>
            {props.children}
                {updateList.map(update =>
                    <div key={update._id} className='landing-post-update-faded'>
                        <div>
                            <Carousel itemsToShow={1}>
                                {update.imageList.map(image => <img src={`${image}`} alt={image} key={image} style={{ height: '40vh', width: '100%' }} />)}
                            </Carousel>
                        </div>
                        <div style={{textAlign: 'center'}} className=''>
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