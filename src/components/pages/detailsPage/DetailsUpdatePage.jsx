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
            const { data } = await axios.get(`https://instagive-backend.herokuapp.com/updates/getall/${props.match.params.id}`)
            setUpdateList(data)
        }

        if (props.post) {
            getUpdateList()
        }
    }, [props.post])





    return (
            <div>
                {props.children}
              
      
      <div className='post-update-container'>
        {updateList.map(update =>
          <div key={update._id} className='update-item-container'>
            <div>
              <Carousel itemsToShow={1}>
                {update.imageList.map(image => <img src={`${image}`} alt={image} key={image} style={{ height: '50vh', width: '100%' }} />)}
              </Carousel>
            </div>
            <div className='post-update-description'>
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