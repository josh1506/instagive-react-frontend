import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import PostList from './PostList';
import LedgerPage from './ledgerPage/LedgerPage';
import PostCreate from './postDetailPage/PostCreate';
import UserPostDetails from './postDetailPage/UserPostDetails';

function UserPage(props) {
    const [userAuthID, setUserAuthID] = useState()

    useEffect(() => {
        // check if there's a user in local storage
        const userAuthID = localStorage.getItem('user')

        const validateAuthID = async () => {
            // Same logic for user login
            // axios for validating ID
            // await axios.post('', authID)
            // .then(() => {
            // setUserAuthID(authID)
            // }) 
            // .catch (() => {
            // localStorage.removeItem('user')
            // props.history.push(/auth)
            // })
        }

        if (!userAuthID) props.history.replace('/auth')

        validateAuthID()
    }, [])

    return (
        <div>
            <div>
                <Switch>
                    <Route path='/user/post-create' component={PostCreate} />
                    <Route path='/user/post-details' component={UserPostDetails} />
                    <Route path='/user/ledger' component={LedgerPage} />
                    <Route path='/user/' exact component={PostList} />
                    <Redirect to='/not-found' />
                </Switch>
            </div>
        </div>
    );
}

export default UserPage;