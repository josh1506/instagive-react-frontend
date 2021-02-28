import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import PostList from './PostList';
import LedgerPage from './ledgerPage/LedgerPage';
import PostCreate from './postDetailPage/PostCreate';
import UserPostDetails from './postDetailPage/UserPostDetails';
import AuthContext from './../../../context/authContext';
import ChangePass from './changePassPage/ChangePass';

function UserPage(props) {
    const { token } = useContext(AuthContext)
    const [userToken, setUserToken] = useState()

    useEffect(() => {
        setUserToken(token)
        if (!localStorage.getItem('user')) return props.history.push('/auth')
    }, [])

    return (
        <div>
            <div>
                <Switch>
                    <Route path='/user/change-password' component={ChangePass} />
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