import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom'
import DetailsPageContent from './DetailsPageContent';
import DetailsUpdatePage from './DetailsUpdatePage';
import '../../../style/detailsPage/detailsPage.css'
import PostContext from './../../../contex/postContext';

function DetailsPage(props) {
    const postList = useContext(PostContext)
    const selectedPost = postList.filter(post => post.id === props.match.params.id)[0]

    const renderContent = (
        <div className='details-header-container'>
            <h1 className='details-title'>{selectedPost ? selectedPost.postTitle : ''}</h1>
            <div className='details-button-container'>
                <button className='details-button' onClick={() => props.history.push(`/details/${selectedPost.id}`)}>Description</button>
                <button className='details-button' onClick={() => props.history.push(`/details/${selectedPost.id}/updates`)}>Updates</button>
            </div>
        </div>
    )

    return (
        <div>
            <Switch>
                <Route path={'/details/:id/updates'} render={props => <DetailsUpdatePage selectedPost={selectedPost} {...props}>{renderContent}</DetailsUpdatePage>} />
                <Route path={'/details/:id'} render={props => <DetailsPageContent onSelectedPost={selectedPost} {...props}>{renderContent}</DetailsPageContent>} />
            </Switch>
        </div>
    );
}

export default DetailsPage;