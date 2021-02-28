import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';
import DetailsPage from './components/pages/detailsPage/DetailsPage';
import AuthPage from './components/pages/authPage/AuthPage';
import UserPage from './components/pages/userPage/UserPage';
import AdminPage from './components/pages/adminPage/AdminPage';
import PostContext from './context/postContext';
import NotFound from './components/common/NotFound';
import AccountList from './context/accountList';
import AuthContext from './context/authContext';
import './App.css';

const axios = require('axios');

function App() {
  const [auth, setAuth] = useState({ token: '', type: '' })
  const [post, setPost] = useState([])
  const [accountList, setAccountList] = useState({
    accepted: [],
    pending: [],
    rejected: []
  })

  useEffect(() => {
    const getAllData = async () => {
      // Getting all user list
      await axios
        .get('http://localhost:5000/admin/getusers')
        .then((data) => setAccountList(data.data));

      // Getting all data for landing page
      await axios.get('http://localhost:5000/landing')
        .then((data) => console.log(data.data))
    };

    const validateAuthID = async () => {
      // Validating if token is valid
      await axios.post('/checkusertoken', token)
        .catch(({ data }) => {
          // if (!data.valid) {
          //   localStorage.removeItem(auth.type)
          // }
        })
    }

    // check if there's a user in local storage
    const token = localStorage.getItem('user')
    const type = localStorage.key(token)
    setAuth({ token, type })

    validateAuthID()
    getAllData();
  }, []);


  return (
    <PostContext.Provider value={post}>
      <AccountList.Provider value={accountList}>
        <AuthContext.Provider value={auth}>
          <div className='App'>
            <Nav />
            <Switch>
              <Route path='/details/:id' component={DetailsPage} />
              <Route path='/auth' component={AuthPage} />
              <Route path='/user' component={UserPage} />
              <Route path='/not-found' component={NotFound} />
              <Route path='/admin' component={AdminPage} />
              <Route path='/' exact component={LandingPage} />
              <Redirect to='/not-found' />
            </Switch>
          </div>
        </AuthContext.Provider>
      </AccountList.Provider>
    </PostContext.Provider>
  );
}

export default App;
