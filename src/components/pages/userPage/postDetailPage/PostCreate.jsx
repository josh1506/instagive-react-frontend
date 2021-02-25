import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import PostCreateDetails from './../postDetailPage/PostCreateDetails';

function PostCreate(props) {
    return (
        <div>
            <div>
                <Switch>
                    <Route path='/user/post-create' component={PostCreateDetails} />
                </Switch>
            </div>
        </div>
    );
}

export default PostCreate;