import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import PostList from './PostList';
import PostCreate from './PostCreate';
import UserPostDetails from './UserPostDetails';

function UserPage(props) {
    return (
        <div>
            <div>
                <Switch>
                    <Route path='/user/post-create' component={PostCreate} />
                    <Route path='/user/post-details' component={UserPostDetails} />
                    <Route path='/user/' exact component={PostList} />
                </Switch>
            </div>
        </div>
    );
}

export default UserPage;