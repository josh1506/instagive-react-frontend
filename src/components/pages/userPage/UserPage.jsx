import React from 'react';
import PostList from './PostList';
import PostCreate from './PostCreate';

function UserPage(props) {
    return (
        <div>
            <PostList />
            <PostCreate />
        </div>
    );
}

export default UserPage;