import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import DetailsPageContent from './DetailsPageContent';
import DetailsUpdatePage from './DetailsUpdatePage';
import '../../../style/detailsPage/detailsPage.css'
import PostContext from './../../../context/postContext';

function DetailsPage(props) {
    const postList = useContext(PostContext)
    const selectedPost = postList.filter(post => post._id === props.match.params.id)[0]

    console.log(selectedPost);
    const renderContent = (
        <div className='details-header-container'>
            <h1 className='details-title'>{selectedPost ? selectedPost.Title : ''}</h1>
            <div className='details-button-container'>
                <button className='details-button' onClick={() => props.history.push(`/details/${selectedPost._id}`)}>Description</button>
                <button className='details-button' onClick={() => props.history.push(`/details/${selectedPost._id}/updates`)}>Updates</button>
            </div>
        </div>
    )

    return (
        <div>
            <Switch>
                <Route path={'/details/:id/updates'} render={props => <DetailsUpdatePage selectedPost={selectedPost} {...props}>{renderContent}</DetailsUpdatePage>} />
                <Route path={'/details/:id'} render={props => <DetailsPageContent onSelectedPost={selectedPost} {...props}>{renderContent}</DetailsPageContent>} />
                <Redirect to='/not-found' />
            </Switch>
        </div>
    );
}

export default DetailsPage;