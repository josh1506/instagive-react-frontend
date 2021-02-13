import React from 'react';
import Sidebar from './../../common/Sidebar';
import PostList from './PostList';
import PostCreate from './PostCreate';

function UserPage(props) {
    return (
        <div>
            <Sidebar />

            {/* <PostList /> */}
            <PostCreate />
        </div>
    );
}

export default UserPage;