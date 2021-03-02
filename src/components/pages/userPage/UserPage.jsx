import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import PostList from './PostList';
import LedgerPage from './ledgerPage/LedgerPage';
import PostCreate from './postDetailPage/PostCreate';
import UserPostDetails from './postDetailPage/UserPostDetails';
import AuthContext from './../../../context/authContext';
import ChangePass from './changePassPage/ChangePass';
import UserContext from './../../../context/userContext';
import axios from 'axios'
import UpdateUserPost from './postUpdatePage/UpdateUserPost';

function UserPage(props) {
    const { token } = useContext(AuthContext)
    const [userToken, setUserToken] = useState()
    const [user, setUser] = useState({
        ledger: [],
        posts: []
    })

    useEffect(() => {
        setUserToken(token)
        if (!localStorage.getItem('user')) return props.history.push('/auth')

        const getUserData = async () => {
            // Getting all data for ledger
            await axios.get(`/getledger/${userToken}`)
                .then(({ data }) => setUser({ ...user, ledger: data }));

            // Getting all data for post
            await axios.get('')
                .then(({ data }) => setUser({ ...user, post: data }));
        }

        getUserData()
    }, [])

    return (
        <div>
            <UserContext.Provider value={user}>
                <div>
                    <Switch>
                        <Route path='/user/change-password' component={ChangePass} />
                        <Route path='/user/post-create' component={PostCreate} />
                        <Route path='/user/post-details/:id' component={UserPostDetails} />
                        <Route path='/user/ledger' component={LedgerPage} />
                        <Route path='/user/update-details/:id' component={UpdateUserPost} />
                        <Route path='/user/' exact component={PostList} />
                        <Redirect to='/not-found' />
                    </Switch>
                </div>
            </UserContext.Provider>
        </div>
    );
}

export default UserPage;